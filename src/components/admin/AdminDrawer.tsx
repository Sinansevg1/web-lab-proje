import { useEffect, useState } from "react";
import { useContent } from "../../context/useContent";
import {
  checkAdminPassword,
  clearLocalStorage,
  deployFromServer,
  exportContentJson,
  importContentJson,
  isAdminAuthenticated,
  setAdminAuthenticated,
} from "../../services/contentService";
import type { SiteProject } from "../../types/siteContent";
import type { Category } from "../../types/project";
import AdminLogin from "./AdminLogin";
import AdminField from "./AdminField";

type Tab = "profile" | "about" | "skills" | "education" | "certificates" | "projects" | "contact" | "seo" | "header" | "footer";

const tabs: { id: Tab; label: string }[] = [
  { id: "profile", label: "Profil" },
  { id: "header", label: "Menu" },
  { id: "about", label: "Hakkimda" },
  { id: "skills", label: "Yetenekler" },
  { id: "education", label: "Egitim" },
  { id: "certificates", label: "Sertifikalar" },
  { id: "projects", label: "Projeler" },
  { id: "contact", label: "Iletisim" },
  { id: "footer", label: "Footer" },
  { id: "seo", label: "SEO" },
];

interface AdminDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function AdminDrawer({ open, onClose }: AdminDrawerProps) {
  const { content, updateContent, saveLocal, saveServer, reload } = useContent();
  const [authed, setAuthed] = useState(isAdminAuthenticated());
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState<Tab>("profile");
  const [message, setMessage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  async function handleSave() {
    setSaving(true);
    setMessage(null);
    try {
      await saveServer(password);
      await reload();
      setMessage("Kaydedildi ve canliya yayinlandi.");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Kayit basarisiz");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeploy() {
    setSaving(true);
    setMessage(null);
    try {
      await deployFromServer(password);
      await reload();
      setMessage("Kod guncellendi, icerik korundu.");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Deploy basarisiz");
    } finally {
      setSaving(false);
    }
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    importContentJson(file)
      .then((data) => {
        updateContent(() => data);
        setMessage("JSON yuklendi. Kaydet ve Yayinla ile kalici yapin.");
      })
      .catch((err) => setMessage(err.message));
  }

  return (
    <>
      <div className="admin-overlay" onClick={onClose} aria-hidden />
      <aside className="admin-drawer" role="dialog" aria-label="Yonetim paneli">
        <header className="flex items-center justify-between gap-2 p-4 border-b border-[var(--color-border)] shrink-0">
          <div>
            <h2 className="font-bold text-[var(--color-brand)]">Yonetim</h2>
            <p className="text-xs text-[var(--color-ink-muted)]">Icerik duzenleme</p>
          </div>
          <button type="button" onClick={onClose} className="p-2 rounded-lg hover:bg-[var(--color-brand-light)]" aria-label="Kapat">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        {!authed ? (
          <AdminLogin
            onLogin={(pw) => {
              if (checkAdminPassword(pw)) {
                setAdminAuthenticated(true);
                setPassword(pw);
                setAuthed(true);
                setMessage(null);
              } else {
                setMessage("Hatali sifre");
              }
            }}
            error={message}
          />
        ) : (
          content && (
            <>
              <div className="flex flex-wrap gap-2 p-3 border-b border-[var(--color-border)] shrink-0">
                <button type="button" onClick={handleSave} disabled={saving} className="btn-primary text-xs py-2 px-3 flex-1 min-w-[120px]">
                  {saving ? "Kaydediliyor..." : "Kaydet ve Yayinla"}
                </button>
                {import.meta.env.DEV && (
                  <button type="button" onClick={() => { saveLocal(); setMessage("Onizleme kaydedildi"); }} className="btn-outline text-xs py-2 px-3">
                    Onizle
                  </button>
                )}
                <button type="button" onClick={() => exportContentJson(content)} className="btn-outline text-xs py-2 px-3">
                  Indir
                </button>
                <label className="btn-outline text-xs py-2 px-3 cursor-pointer">
                  Yukle
                  <input type="file" accept=".json" className="hidden" onChange={handleImport} />
                </label>
                <button type="button" onClick={handleDeploy} disabled={saving} className="btn-outline text-xs py-2 px-3">
                  Kod Guncelle
                </button>
              </div>

              {message && (
                <div className="mx-3 mt-3 p-2 rounded-lg text-xs bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
                  {message}
                </div>
              )}

              <nav className="flex gap-1 overflow-x-auto p-2 border-b border-[var(--color-border)] shrink-0">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTab(t.id)}
                    className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      tab === t.id
                        ? "bg-[var(--color-brand)] text-white"
                        : "text-[var(--color-ink-muted)] hover:bg-[var(--color-brand-light)]"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </nav>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {tab === "profile" && (
                  <>
                    <AdminField label="Isim" value={content.profile.name} onChange={(v) => updateContent((c) => ({ ...c, profile: { ...c.profile, name: v } }))} />
                    <AdminField label="Alt baslik" value={content.profile.subtitle} onChange={(v) => updateContent((c) => ({ ...c, profile: { ...c.profile, subtitle: v } }))} />
                    <AdminField label="Unvan" value={content.profile.title} onChange={(v) => updateContent((c) => ({ ...c, profile: { ...c.profile, title: v } }))} />
                    <AdminField label="Hero aciklama" value={content.profile.heroDescription} onChange={(v) => updateContent((c) => ({ ...c, profile: { ...c.profile, heroDescription: v } }))} textarea />
                    <AdminField label="Foto URL" value={content.profile.photoUrl} onChange={(v) => updateContent((c) => ({ ...c, profile: { ...c.profile, photoUrl: v } }))} />
                    <AdminField label="Rol (foto alti)" value={content.profile.photoRole} onChange={(v) => updateContent((c) => ({ ...c, profile: { ...c.profile, photoRole: v } }))} />
                    <AdminField label="Konum" value={content.profile.location} onChange={(v) => updateContent((c) => ({ ...c, profile: { ...c.profile, location: v } }))} />
                    <AdminField label="E-posta" value={content.profile.email} onChange={(v) => updateContent((c) => ({ ...c, profile: { ...c.profile, email: v } }))} />
                    <AdminField label="Telefon" value={content.profile.phone} onChange={(v) => updateContent((c) => ({ ...c, profile: { ...c.profile, phone: v } }))} />
                    <AdminField label="LinkedIn" value={content.profile.linkedin} onChange={(v) => updateContent((c) => ({ ...c, profile: { ...c.profile, linkedin: v } }))} />
                    <AdminField label="WhatsApp" value={content.profile.whatsapp} onChange={(v) => updateContent((c) => ({ ...c, profile: { ...c.profile, whatsapp: v } }))} />
                    <AdminField label="QuickOrder Demo" value={content.profile.quickOrderDemo} onChange={(v) => updateContent((c) => ({ ...c, profile: { ...c.profile, quickOrderDemo: v } }))} />
                  </>
                )}

                {tab === "header" && (
                  <>
                    <AdminField label="Bas harfler" value={content.header.initials} onChange={(v) => updateContent((c) => ({ ...c, header: { ...c.header, initials: v } }))} />
                    <AdminField label="Domain" value={content.header.domain} onChange={(v) => updateContent((c) => ({ ...c, header: { ...c.header, domain: v } }))} />
                    <AdminField label="CTA butonu" value={content.header.ctaLabel} onChange={(v) => updateContent((c) => ({ ...c, header: { ...c.header, ctaLabel: v } }))} />
                    {content.header.navLinks.map((link, i) => (
                      <div key={i} className="grid grid-cols-2 gap-2 p-2 rounded-lg bg-[var(--color-brand-light)]/50">
                        <AdminField label="Link" value={link.href} onChange={(v) => updateContent((c) => { const navLinks = [...c.header.navLinks]; navLinks[i] = { ...navLinks[i], href: v }; return { ...c, header: { ...c.header, navLinks } }; })} />
                        <AdminField label="Etiket" value={link.label} onChange={(v) => updateContent((c) => { const navLinks = [...c.header.navLinks]; navLinks[i] = { ...navLinks[i], label: v }; return { ...c, header: { ...c.header, navLinks } }; })} />
                      </div>
                    ))}
                  </>
                )}

                {tab === "about" && (
                  <>
                    <AdminField label="Bolum etiketi" value={content.about.sectionLabel} onChange={(v) => updateContent((c) => ({ ...c, about: { ...c.about, sectionLabel: v } }))} />
                    <AdminField label="Baslik" value={content.about.title} onChange={(v) => updateContent((c) => ({ ...c, about: { ...c.about, title: v } }))} />
                    <AdminField label="Aciklama" value={content.about.description} onChange={(v) => updateContent((c) => ({ ...c, about: { ...c.about, description: v } }))} />
                    <AdminField label="Bio" value={content.about.bio} onChange={(v) => updateContent((c) => ({ ...c, about: { ...c.about, bio: v } }))} textarea />
                    {content.about.quickFacts.map((fact, i) => (
                      <div key={i} className="grid grid-cols-2 gap-2">
                        <AdminField label="Etiket" value={fact.label} onChange={(v) => updateContent((c) => { const quickFacts = [...c.about.quickFacts]; quickFacts[i] = { ...quickFacts[i], label: v }; return { ...c, about: { ...c.about, quickFacts } }; })} />
                        <AdminField label="Deger" value={fact.value} onChange={(v) => updateContent((c) => { const quickFacts = [...c.about.quickFacts]; quickFacts[i] = { ...quickFacts[i], value: v }; return { ...c, about: { ...c.about, quickFacts } }; })} />
                      </div>
                    ))}
                  </>
                )}

                {tab === "skills" && content.skills.groups.map((group, gi) => (
                  <div key={gi} className="p-3 rounded-xl border border-[var(--color-border)] space-y-2">
                    <AdminField label="Grup" value={group.title} onChange={(v) => updateContent((c) => { const groups = [...c.skills.groups]; groups[gi] = { ...groups[gi], title: v }; return { ...c, skills: { ...c.skills, groups } }; })} />
                    <AdminField label="Ikon" value={group.icon} onChange={(v) => updateContent((c) => { const groups = [...c.skills.groups]; groups[gi] = { ...groups[gi], icon: v }; return { ...c, skills: { ...c.skills, groups } }; })} />
                    <AdminField label="Teknolojiler" value={group.items.join(", ")} onChange={(v) => updateContent((c) => { const groups = [...c.skills.groups]; groups[gi] = { ...groups[gi], items: v.split(",").map((s) => s.trim()).filter(Boolean) }; return { ...c, skills: { ...c.skills, groups } }; })} />
                  </div>
                ))}

                {tab === "education" && (
                  <>
                    <AdminField label="Okul" value={content.education.school} onChange={(v) => updateContent((c) => ({ ...c, education: { ...c.education, school: v } }))} />
                    <AdminField label="Bolum" value={content.education.department} onChange={(v) => updateContent((c) => ({ ...c, education: { ...c.education, department: v } }))} />
                    <AdminField label="Tarih" value={content.education.date} onChange={(v) => updateContent((c) => ({ ...c, education: { ...c.education, date: v } }))} />
                    <AdminField label="Sehir" value={content.education.city} onChange={(v) => updateContent((c) => ({ ...c, education: { ...c.education, city: v } }))} />
                    {content.education.languages.map((lang, i) => (
                      <div key={i} className="grid grid-cols-2 gap-2">
                        <AdminField label="Dil" value={lang.name} onChange={(v) => updateContent((c) => { const languages = [...c.education.languages]; languages[i] = { ...languages[i], name: v }; return { ...c, education: { ...c.education, languages } }; })} />
                        <AdminField label="Seviye" value={lang.level} onChange={(v) => updateContent((c) => { const languages = [...c.education.languages]; languages[i] = { ...languages[i], level: v }; return { ...c, education: { ...c.education, languages } }; })} />
                      </div>
                    ))}
                  </>
                )}

                {tab === "certificates" && (
                  <>
                    {content.certificates.items.map((cert, i) => (
                      <div key={i} className="p-3 rounded-xl border space-y-2">
                        <AdminField label="Baslik" value={cert.title} onChange={(v) => updateContent((c) => { const items = [...c.certificates.items]; items[i] = { ...items[i], title: v }; return { ...c, certificates: { ...c.certificates, items } }; })} />
                        <AdminField label="Kurum" value={cert.org} onChange={(v) => updateContent((c) => { const items = [...c.certificates.items]; items[i] = { ...items[i], org: v }; return { ...c, certificates: { ...c.certificates, items } }; })} />
                        <AdminField label="Detay" value={cert.detail} onChange={(v) => updateContent((c) => { const items = [...c.certificates.items]; items[i] = { ...items[i], detail: v }; return { ...c, certificates: { ...c.certificates, items } }; })} textarea />
                        <button type="button" className="text-xs text-red-600" onClick={() => updateContent((c) => ({ ...c, certificates: { ...c.certificates, items: c.certificates.items.filter((_, j) => j !== i) } }))}>Sil</button>
                      </div>
                    ))}
                    <button type="button" className="btn-outline text-xs w-full" onClick={() => updateContent((c) => ({ ...c, certificates: { ...c.certificates, items: [...c.certificates.items, { title: "Yeni", org: "", detail: "" }] } }))}>+ Ekle</button>
                  </>
                )}

                {tab === "projects" && (
                  <>
                    <AdminField label="Bolum basligi" value={content.projects.title} onChange={(v) => updateContent((c) => ({ ...c, projects: { ...c.projects, title: v } }))} />
                    {content.projects.items.map((project, i) => (
                      <ProjectEditor key={project.id} project={project} onChange={(p) => updateContent((c) => { const items = [...c.projects.items]; items[i] = p; return { ...c, projects: { ...c.projects, items } }; })} onDelete={() => updateContent((c) => ({ ...c, projects: { ...c.projects, items: c.projects.items.filter((_, j) => j !== i) } }))} />
                    ))}
                    <button type="button" className="btn-outline text-xs w-full" onClick={() => updateContent((c) => { const maxId = c.projects.items.reduce((m, p) => Math.max(m, p.id), 0); return { ...c, projects: { ...c.projects, items: [...c.projects.items, { id: maxId + 1, title: "Yeni Proje", description: "", tech: [], year: new Date().getFullYear(), category: "fullstack" as Category, featured: false, image: "" }] } }; })}>+ Proje Ekle</button>
                  </>
                )}

                {tab === "contact" && (
                  <>
                    <AdminField label="Baslik" value={content.contact.title} onChange={(v) => updateContent((c) => ({ ...c, contact: { ...c.contact, title: v } }))} />
                    <AdminField label="Aciklama" value={content.contact.description} onChange={(v) => updateContent((c) => ({ ...c, contact: { ...c.contact, description: v } }))} textarea />
                    <AdminField label="Form e-posta" value={content.contact.formSubmitEmail} onChange={(v) => updateContent((c) => ({ ...c, contact: { ...c.contact, formSubmitEmail: v } }))} />
                    {content.contact.items.map((item, i) => (
                      <div key={i} className="p-2 rounded-lg border space-y-2">
                        <AdminField label="Etiket" value={item.label} onChange={(v) => updateContent((c) => { const items = [...c.contact.items]; items[i] = { ...items[i], label: v }; return { ...c, contact: { ...c.contact, items } }; })} />
                        <AdminField label="Deger" value={item.value} onChange={(v) => updateContent((c) => { const items = [...c.contact.items]; items[i] = { ...items[i], value: v }; return { ...c, contact: { ...c.contact, items } }; })} />
                        <AdminField label="Link" value={item.href} onChange={(v) => updateContent((c) => { const items = [...c.contact.items]; items[i] = { ...items[i], href: v }; return { ...c, contact: { ...c.contact, items } }; })} />
                      </div>
                    ))}
                  </>
                )}

                {tab === "footer" && (
                  <>
                    <AdminField label="Isim" value={content.footer.name} onChange={(v) => updateContent((c) => ({ ...c, footer: { ...c.footer, name: v } }))} />
                    <AdminField label="Telif" value={content.footer.tagline} onChange={(v) => updateContent((c) => ({ ...c, footer: { ...c.footer, tagline: v } }))} />
                    <AdminField label="LinkedIn" value={content.footer.linkedin} onChange={(v) => updateContent((c) => ({ ...c, footer: { ...c.footer, linkedin: v } }))} />
                  </>
                )}

                {tab === "seo" && (
                  <>
                    <AdminField label="Sayfa basligi" value={content.seo.pageTitle} onChange={(v) => updateContent((c) => ({ ...c, seo: { ...c.seo, pageTitle: v } }))} />
                    <AdminField label="Meta aciklama" value={content.seo.metaDescription} onChange={(v) => updateContent((c) => ({ ...c, seo: { ...c.seo, metaDescription: v } }))} textarea />
                    <AdminField label="Site URL" value={content.seo.ogUrl} onChange={(v) => updateContent((c) => ({ ...c, seo: { ...c.seo, ogUrl: v } }))} />
                  </>
                )}
              </div>

              <footer className="p-3 border-t border-[var(--color-border)] shrink-0">
                <button
                  type="button"
                  className="text-xs text-red-600 w-full text-center py-2"
                  onClick={() => {
                    clearLocalStorage();
                    setAdminAuthenticated(false);
                    setAuthed(false);
                    reload();
                  }}
                >
                  Cikis Yap
                </button>
              </footer>
            </>
          )
        )}
      </aside>
    </>
  );
}

function ProjectEditor({ project, onChange, onDelete }: { project: SiteProject; onChange: (p: SiteProject) => void; onDelete: () => void }) {
  return (
    <div className="p-3 rounded-xl border space-y-2">
      <AdminField label="Baslik" value={project.title} onChange={(v) => onChange({ ...project, title: v })} />
      <AdminField label="Aciklama" value={project.description} onChange={(v) => onChange({ ...project, description: v })} textarea />
      <AdminField label="Teknolojiler" value={project.tech.join(", ")} onChange={(v) => onChange({ ...project, tech: v.split(",").map((s) => s.trim()).filter(Boolean) })} />
      <AdminField label="Yil" value={String(project.year)} onChange={(v) => onChange({ ...project, year: Number(v) || project.year })} />
      <AdminField label="Gorsel URL" value={project.image} onChange={(v) => onChange({ ...project, image: v })} />
      <AdminField label="Demo URL" value={project.demoUrl ?? ""} onChange={(v) => onChange({ ...project, demoUrl: v || undefined })} />
      <label className="flex items-center gap-2 text-xs">
        <input type="checkbox" checked={project.featured} onChange={(e) => onChange({ ...project, featured: e.target.checked })} />
        One cikan
      </label>
      <button type="button" className="text-xs text-red-600" onClick={onDelete}>Sil</button>
    </div>
  );
}
