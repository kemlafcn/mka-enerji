import { navHrefs } from "@/components/navbar";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="bg-[#031124] pt-20 pb-10 border-t border-white/5"
      dir="ltr"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo ve açıklama */}
          <div>
            <a href="#home" className="inline-flex items-center mb-5">
              <img
                src={`${import.meta.env.BASE_URL}images/MKA.jpg`}
                alt="MKA Enerji"
                className="h-32 md:h-40 w-auto object-contain"
              />
            </a>

            <p className="font-sans text-bluegray/70 text-sm leading-relaxed max-w-sm">
              {t.hero.desc}
            </p>
          </div>

          {/* Hızlı linkler */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">
              {t.footer.quick}
            </h4>

            <ul className="space-y-3">
              {navHrefs.map((href, index) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-sans text-bluegray/70 hover:text-amber transition-colors text-sm"
                  >
                    {t.nav[index]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">
              {t.footer.services}
            </h4>

            <ul className="space-y-3">
              {t.services.list.slice(0, 5).map((item, index) => (
                <li key={`${item[0]}-${index}`}>
                  <a
                    href="#services"
                    className="font-sans text-bluegray/70 hover:text-amber transition-colors text-sm"
                  >
                    {item[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">
              {t.footer.contact}
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start text-bluegray/70 text-sm">
                <span className="font-bold text-amber mr-2">Adres:</span>
                Sanayi Mah. Şehitkamil / Gaziantep
              </li>

              <li className="flex items-start text-bluegray/70 text-sm">
                <span className="font-bold text-amber mr-2">Telefon:</span>
                0 (342) 238 21 97
              </li>

              <li className="flex items-start text-bluegray/70 text-sm">
                <span className="font-bold text-amber mr-2">E-posta:</span>
                info@mkaenerji.com.tr
              </li>
            </ul>
          </div>
        </div>

        {/* Alt bölüm */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-bluegray/50">
          <p>{t.footer.rights}</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              KVKK
            </a>

            <a href="#" className="hover:text-white transition-colors">
              Gizlilik
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}