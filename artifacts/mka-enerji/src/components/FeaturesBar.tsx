import {
  ShieldCheck,
  Users,
  HardHat,
  Leaf,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "GÜVENİLİR",
    description: "Kaliteli ve sürdürülebilir çözümler sunuyoruz.",
  },
  {
    icon: Users,
    title: "UZMAN KADRO",
    description: "Deneyimli mühendis ve teknik ekibimizle yanınızdayız.",
  },
  {
    icon: HardHat,
    title: "ANAHTAR TESLİM",
    description: "Mühendislik, tedarik ve uygulama tek elden yönetilir.",
  },
  {
    icon: Leaf,
    title: "SÜRDÜRÜLEBİLİR",
    description: "Gelecek nesillere daha temiz bir dünya bırakıyoruz.",
  },
];

export default function FeaturesBar() {
  return (
    <section className="relative z-20 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`flex items-center gap-4 px-6 py-8 ${
                  index !== features.length - 1
                    ? "lg:border-r lg:border-gray-200"
                    : ""
                }`}
              >
                <div className="shrink-0">
                  <Icon
                    className="w-11 h-11 text-[#D4AF37]"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <h3 className="font-display font-black text-[#031124] text-sm uppercase tracking-wide mb-1">
                    {feature.title}
                  </h3>

                  <p className="text-gray-500 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}