import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Lang } from "@/locales/translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations.tr;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("mka-lang") as Lang | null;
    return saved && translations[saved] ? saved : "tr";
  });

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    localStorage.setItem("mka-lang", nextLang);
  };

  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang], isRTL }),
    [lang, isRTL]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
