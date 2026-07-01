import { createContext } from "react";
import type { SiteContent } from "../types/siteContent";

export interface ContentContextValue {
  content: SiteContent | null;
  loading: boolean;
  error: string | null;
  reload: () => Promise<void>;
  updateContent: (updater: (prev: SiteContent) => SiteContent) => void;
  saveLocal: () => void;
  saveServer: (password: string) => Promise<void>;
}

export const ContentContext = createContext<ContentContextValue | null>(null);
