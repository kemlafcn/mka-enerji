import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#031124] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-amber/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          <div>
            <span className="font-display font-bold text-amber uppercase tracking-wider text-sm">
              {t.contact.label}
            </span>

            <h2 className="font-display font-black text-4xl md:text-6xl text-white mt-5 mb-6 leading-tight">
              {t.contact.title1}
              <br />
              <span className="text-amber">{t.contact.title2}</span>
            </h2>

            <p className="text-bluegray text-lg leading-relaxed mb-10 max-w-xl">
              {t.contact.desc}
            </p>

            <div className="space-y-5">
              {[
                ["T", t.contact.phone, "0 342 238 21 97"],
                ["M", t.contact.mail, "info@mkaenerji.com.tr"],
                ["A", t.contact.address, "Sanayi Mah. Şehitkamil / Gaziantep"],
              ].map((item) => (
                <div
                  key={item[1]}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber text-[#031124] flex items-center justify-center font-black">
                    {item[0]}
                  </div>

                  <div>
                    <div className="text-white font-bold">{item[1]}</div>
                    <div className="text-bluegray">{item[2]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="font-display font-black text-2xl text-[#031124] mb-6">
              {t.contact.formTitle}
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder={t.contact.name}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-5 py-4 outline-none focus:border-amber"
              />

              <input
                type="tel"
                placeholder={t.contact.phone}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-5 py-4 outline-none focus:border-amber"
              />

              <input
                type="email"
                placeholder={t.contact.mail}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-5 py-4 outline-none focus:border-amber"
              />

              <select className="w-full bg-gray-100 border border-gray-200 rounded-lg px-5 py-4 outline-none focus:border-amber">
                <option>{t.contact.projectType}</option>
                <option>GES</option>
                <option>Trafo</option>
                <option>OG / AG</option>
                <option>SCADA</option>
              </select>

              <textarea
                placeholder={t.contact.message}
                rows={5}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-5 py-4 outline-none focus:border-amber resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#E7C55C] text-[#031124] font-display font-black uppercase tracking-wide py-4 rounded-lg hover:scale-[1.02] transition-all"
              >
                {t.contact.send}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            title="MKA Enerji Harita"
            src="https://www.google.com/maps?q=Gaziantep,Türkiye&output=embed"
            className="w-full h-[360px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}