import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT_PATH = path.join(ROOT, "public", "data", "site-content.json");
const LEGACY_PROJECTS_PATH = path.join(ROOT, "public", "data", "projects.json");
const DEPLOY_PATH = process.env.DEPLOY_TARGET ?? "/var/www/sinansevgi.com.tr";
const SRC_PATH = process.env.SRC_PATH ?? "/var/www/sinansevgi.com.tr-src";
const LIVE_CONTENT_PATH = path.join(DEPLOY_PATH, "data", "site-content.json");
const GIT_BRANCH = process.env.GIT_BRANCH ?? "yonetim";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "sinan2026";
const PORT = Number(process.env.ADMIN_API_PORT ?? 3001);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json({ limit: "2mb" }));

function auth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (token !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Yetkisiz erisim" });
  }
  next();
}

async function readCurrentContent() {
  for (const filePath of [CONTENT_PATH, LIVE_CONTENT_PATH]) {
    try {
      return await fs.readFile(filePath, "utf-8");
    } catch {
      // try next
    }
  }
  return null;
}

async function writeContentFiles(contentObj) {
  const content = JSON.stringify(contentObj, null, 2);
  const legacyProjects = JSON.stringify(contentObj.projects?.items ?? [], null, 2);

  await fs.mkdir(path.dirname(CONTENT_PATH), { recursive: true });
  await fs.writeFile(CONTENT_PATH, content, "utf-8");
  await fs.writeFile(LEGACY_PROJECTS_PATH, legacyProjects, "utf-8");

  try {
    await fs.mkdir(path.dirname(LIVE_CONTENT_PATH), { recursive: true });
    await fs.writeFile(LIVE_CONTENT_PATH, content, "utf-8");
  } catch (err) {
    console.warn("Canli site dosyasi yazilamadi:", err instanceof Error ? err.message : err);
  }
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/content", async (_req, res) => {
  try {
    const data = await readCurrentContent();
    if (!data) return res.status(404).json({ message: "Icerik bulunamadi" });
    res.type("json").send(data);
  } catch {
    res.status(500).json({ message: "Icerik okunamadi" });
  }
});

app.put("/api/content", auth, async (req, res) => {
  try {
    await writeContentFiles(req.body);
    res.json({ message: "Kaydedildi ve canliya yayinlandi" });
  } catch (err) {
    res.status(500).json({
      message: "Kayit basarisiz",
      detail: err instanceof Error ? err.message : String(err),
    });
  }
});

app.post("/api/deploy", auth, async (_req, res) => {
  const backup = await readCurrentContent();

  try {
    await execAsync(`cd ${SRC_PATH} && git pull origin ${GIT_BRANCH}`, { timeout: 120000 });

    if (backup) {
      await fs.writeFile(CONTENT_PATH, backup, "utf-8");
    }

    await execAsync(`cd ${SRC_PATH} && npm ci && npm run build`, { timeout: 180000 });
    await execAsync(`cp -r ${SRC_PATH}/dist/. ${DEPLOY_PATH}/`);

    if (backup) {
      await fs.mkdir(path.dirname(LIVE_CONTENT_PATH), { recursive: true });
      await fs.writeFile(LIVE_CONTENT_PATH, backup, "utf-8");
    }

    res.json({ message: "Kod guncellendi, icerik korundu" });
  } catch (err) {
    res.status(500).json({
      message: "Deploy hatasi",
      detail: err instanceof Error ? err.message : String(err),
    });
  }
});

app.listen(PORT, () => {
  console.log(`Admin API http://localhost:${PORT}`);
});
