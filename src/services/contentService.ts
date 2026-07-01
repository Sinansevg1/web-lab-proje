import type { SiteContent } from "../types/siteContent";

const CONTENT_URL = "/data/site-content.json";
const STORAGE_KEY = "portfolio-site-content";
const AUTH_KEY = "portfolio-admin-auth";
const API_BASE = import.meta.env.VITE_ADMIN_API_URL ?? "";

function apiUrl(path: string): string {
  return API_BASE ? `${API_BASE}${path}` : path;
}

async function fetchJson(url: string): Promise<SiteContent> {
  const response = await fetch(`${url}${url.includes("?") ? "&" : "?"}t=${Date.now()}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Site icerigi yuklenemedi");
  }
  return response.json();
}

export async function fetchSiteContent(): Promise<SiteContent> {
  if (import.meta.env.DEV) {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as SiteContent;
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }

  try {
    return await fetchJson(apiUrl("/api/content"));
  } catch {
    return fetchJson(CONTENT_URL);
  }
}

export function saveToLocalStorage(content: SiteContent): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

export function clearLocalStorage(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function exportContentJson(content: SiteContent): void {
  const blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "site-content.json";
  link.click();
  URL.revokeObjectURL(url);
}

export function importContentJson(file: File): Promise<SiteContent> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        resolve(JSON.parse(reader.result as string) as SiteContent);
      } catch {
        reject(new Error("Gecersiz JSON dosyasi"));
      }
    };
    reader.onerror = () => reject(new Error("Dosya okunamadi"));
    reader.readAsText(file);
  });
}

export function isAdminAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === "true";
}

export function setAdminAuthenticated(value: boolean): void {
  if (value) {
    sessionStorage.setItem(AUTH_KEY, "true");
  } else {
    sessionStorage.removeItem(AUTH_KEY);
  }
}

export function checkAdminPassword(password: string): boolean {
  const expected = import.meta.env.VITE_ADMIN_PASSWORD ?? "sinan2026";
  return password === expected;
}

export async function saveToServer(content: SiteContent, password: string): Promise<void> {
  const response = await fetch(apiUrl("/api/content"), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${password}`,
    },
    body: JSON.stringify(content),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({ message: "Kayit basarisiz" }));
    throw new Error(err.message ?? "Sunucuya kayit basarisiz");
  }

  clearLocalStorage();
}

export async function deployFromServer(password: string): Promise<void> {
  const response = await fetch(apiUrl("/api/deploy"), {
    method: "POST",
    headers: { Authorization: `Bearer ${password}` },
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({ message: "Deploy basarisiz" }));
    throw new Error(err.message ?? "Kod guncelleme basarisiz");
  }
}

export function applySeo(content: SiteContent): void {
  document.title = content.seo.pageTitle;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", content.seo.metaDescription);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", content.seo.pageTitle);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", content.seo.metaDescription);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", content.seo.ogUrl);
}
