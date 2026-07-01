import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { SiteContent } from "../types/siteContent";
import {
  applySeo,
  fetchSiteContent,
  saveToLocalStorage,
  saveToServer,
} from "../services/contentService";
import { ContentContext } from "./contextState";

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const reload = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchSiteContent();
      setContent(data);
      applySeo(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Yukleme hatasi");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const updateContent = useCallback((updater: (prev: SiteContent) => SiteContent) => {
    setContent((prev) => (prev ? updater(prev) : prev));
  }, []);

  const saveLocal = useCallback(() => {
    if (content) {
      saveToLocalStorage(content);
      applySeo(content);
    }
  }, [content]);

  const saveServer = useCallback(
    async (password: string) => {
      if (!content) return;
      await saveToServer(content, password);
      applySeo(content);
    },
    [content],
  );

  const value = useMemo(
    () => ({ content, loading, error, reload, updateContent, saveLocal, saveServer }),
    [content, loading, error, reload, updateContent, saveLocal, saveServer],
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}
