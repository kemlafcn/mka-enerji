import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/locales/translations";

const languages: {
  code: Lang;
  label: string;
  flag: string;
}[] = [
  { code: "tr", label: "TR", flag: `${import.meta.env.BASE_URL}images/flags/tr.svg.jpg` },
  { code: "en", label: "EN", flag: `${import.meta.env.BASE_URL}images/flags/gb.svg.jpg` },
  { code: "ar", label: "AR", flag: `${import.meta.env.BASE_URL}images/flags/sa.svg.jpg` },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-sm font-bold">
      {languages.map((item, index) => (
        <React.Fragment key={item.code}>
          <button
            type="button"
            onClick={() => setLang(item.code)}
            className={`flex items-center gap-1.5 transition-all duration-300 hover:text-amber ${
              lang === item.code ? "text-amber" : "text-white/70"
            }`}
          >
            <img
              src={item.flag}
              alt={item.label}
              className="w-5 h-4 object-cover rounded-sm"
            />
            <span>{item.label}</span>
          </button>

          {index < languages.length - 1 && (
            <span className="text-white/25">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}