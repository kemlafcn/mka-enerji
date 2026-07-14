import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Target,
  Eye,
  Award,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const images = [
  `${import.meta.env.BASE_URL}images/about-1.jpg`,
  `${import.meta.env.BASE_URL}images/about-2.jpg`,
  `${import.meta.env.BASE_URL}images/about-3.jpg`,
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const cardIcons = [Target, Eye, Award];

export default function About() {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 md:py-32"
      dir="ltr"
    >
      {/* Arka plan detayları */}
      <div className="pointer-events-none absolute right-0 top-0 h-[650px] w-[650px] translate-x-1/3 -translate-y-1/3 rounded-full bg-amber/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] -translate-x-1/3 translate-y-1/3 rounded-full bg-[#031124]/5 blur-[120px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Üst bölüm */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Sol içerik */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-2xl"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 flex items-center gap-4"
            >
              <div className="h-[2px] w-12 bg-amber" />

              <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-amber">
                {t.about.label}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mb-7 font-display text-4xl font-black leading-[1.08] tracking-tight text-[#031124] md:text-5xl lg:text-[54px]"
            >
              <span className="block">{t.about.title1}</span>

              <span className="block text-amber lg:whitespace-nowrap">
                {t.about.title2}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-9 max-w-xl font-sans text-base leading-8 text-gray-600 md:text-lg"
            >
              {t.about.desc}
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {t.about.items.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber/10">
                    <CheckCircle2
                      className="h-5 w-5 text-amber"
                      strokeWidth={2}
                    />
                  </div>

                  <span className="font-display text-sm font-bold text-[#031124]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="#services"
              className="mt-9 inline-flex items-center gap-2 font-display text-sm font-black uppercase tracking-wide text-[#031124] transition-colors hover:text-amber"
            >
              Hizmetlerimizi İnceleyin
              <ArrowUpRight className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Sağ görsel alanı */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[480px] overflow-hidden rounded-[28px] bg-[#031124] shadow-[0_35px_80px_rgba(3,17,36,0.22)] md:h-[560px]">
              {images.map((image, index) => (
                <motion.img
                  key={image}
                  src={image}
                  alt={`MKA Enerji kurumsal görsel ${index + 1}`}
                  initial={false}
                  animate={{
                    opacity: currentImage === index ? 1 : 0,
                    scale: currentImage === index ? 1 : 1.05,
                  }}
                  transition={{
                    duration: 1.15,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-[#031124]/80 via-[#031124]/10 to-transparent" />

           

              {/* Geçiş noktaları */}
              <div className="absolute right-6 top-6 z-20 flex gap-2 rounded-full border border-white/15 bg-[#031124]/35 px-3 py-2 backdrop-blur-md">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Kurumsal fotoğraf ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentImage === index
                        ? "w-8 bg-amber"
                        : "w-2 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 -z-10 h-full w-full rounded-[28px] border border-amber/25" />
          </motion.div>
        </div>

        {/* Alt kurumsal kartlar */}
        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.about.cards.map((item, index) => {
            const Icon = cardIcons[index] ?? ShieldCheck;

            return (
              <motion.div
                key={item[0]}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber/40 hover:shadow-[0_25px_60px_rgba(3,17,36,0.12)]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-1/3 -translate-y-1/3 rounded-full bg-amber/10 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#031124] text-amber shadow-lg">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>

                  <h3 className="mb-4 font-display text-2xl font-black text-[#031124]">
                    {item[0]}
                  </h3>

                  <p className="font-sans leading-7 text-gray-600">
                    {item[1]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}