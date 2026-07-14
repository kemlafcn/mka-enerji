import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const brands = [
  { name: "Huawei", logo: "/images/brands/huaweı.jpg" },
  { name: "Sungrow", logo: "/images/brands/sungrow.jpg" },
  { name: "Solis", logo: "/images/brands/solis.jpg" },
  { name: "LONGi", logo: "/images/brands/longi.jpg" },
  { name: "Trina Solar", logo: "/images/brands/trina.jpg" },
  {
    name: "Schneider Electric",
    logo: "/images/brands/schneider.jpg",
  },
  { name: "ABB", logo: "/images/brands/abb.jpg" },
  { name: "ASTOR", logo: "/images/brands/astor.jpg" },
];

export default function References() {
  const { t } = useLanguage();

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section
      id="references"
      className="py-24 bg-gray-100 border-t border-gray-200 overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center mb-12">
        <span className="font-bold text-amber uppercase tracking-widest text-sm">
          {t.refs.label}
        </span>

        <h2 className="font-black text-3xl md:text-5xl text-navy-darker mt-4">
          {t.refs.title}
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 28,
          }}
        >
{duplicatedBrands.map((brand, index) => (
  <div
    key={`${brand.name}-${index}`}
    className="w-[220px] h-28 shrink-0 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
  >
    <img
      src={brand.logo}
      alt={brand.name}
      className="w-full h-full object-contain p-3"
    />
  </div>
))}
</motion.div>
</div>
</section>
);
}