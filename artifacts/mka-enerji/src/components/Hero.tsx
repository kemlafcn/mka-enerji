import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#031124]"
      dir="ltr"
    >
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={`${import.meta.env.BASE_URL}hero.mp4`} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#031124]/85 via-[#031124]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031124] via-transparent to-transparent opacity-60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl text-left"
        >
          <h1 className="font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[1.20] mb-7">
            <span className="block">{t.hero.title1}</span>
            <span className="block text-amber">{t.hero.title2}</span>
          </h1>

          <p className="font-sans text-lg md:text-2xl text-bluegray mb-10 max-w-3xl leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#about"
              className="bg-amber text-navy-darker hover:bg-white font-display font-black text-sm md:text-base px-9 py-5 rounded-lg text-center uppercase tracking-wide transition-all flex items-center justify-center group"
            >
              HAKKIMIZDA
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              className="bg-white/10 backdrop-blur-md border border-white/25 text-white hover:border-amber hover:text-amber font-display font-bold text-sm md:text-base px-9 py-5 rounded-lg text-center uppercase tracking-wide transition-colors"
            >
              {t.hero.projects}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}