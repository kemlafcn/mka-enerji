import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/locales/translations";

const languages: { code: Lang; label: string; flag: string }[] = [
  { code: "tr", label: "TR", flag: "🇹🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ar", label: "AR", flag: "🇸🇦" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-2 text-sm font-display font-bold">
      {languages.map((item, index) => (
        <React.Fragment key={item.code}>
          <button type="button" onClick={() => setLang(item.code)} className={`transition-all duration-300 hover:text-amber ${lang === item.code ? "text-amber" : "text-white/70"}`}>
            <span className="mr-1">{item.flag}</span>{item.label}
          </button>
          {index < languages.length - 1 && <span className="text-white/25">|</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
