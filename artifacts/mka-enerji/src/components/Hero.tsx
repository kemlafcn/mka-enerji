import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Hero() {
  const { t } = useLanguage();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 650], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#031124]"
      dir="ltr"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#031124]/85 via-[#031124]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031124] via-transparent to-transparent opacity-60" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl text-left"
        >
         

          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[1.02] mb-7">
            {t.hero.title1}
            <br />
            <span className="text-amber">{t.hero.title2}</span>
          </h1>

          <p className="font-sans text-lg md:text-2xl text-bluegray mb-10 max-w-3xl leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-amber text-navy-darker hover:bg-white font-display font-black text-sm md:text-base px-9 py-5 rounded-lg text-center uppercase tracking-wide transition-all flex items-center justify-center group"
            >
              {t.cta}

              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              className="bg-white/10 backdrop-blur-md border border-white/25 text-white hover:border-amber hover:text-amber font-display font-bold text-sm md:text-base px-9 py-5 rounded-lg text-center uppercase tracking-wide transition-colors"
            >
              {t.hero.projects}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-3xl">
            {[
              {
                value: 350,
                suffix: "+",
                label: t.hero.stats[0],
              },
              {
                value: 650,
                suffix: " MW+",
                label: t.hero.stats[1],
              },
              {
                value: 15,
                suffix: "+",
                label: t.hero.stats[2],
              },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white/10 border border-white/15 backdrop-blur-md rounded-xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              >
                <div className="font-display font-black text-3xl md:text-4xl text-amber mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                <div className="font-display font-bold text-xs uppercase tracking-[0.18em] text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}