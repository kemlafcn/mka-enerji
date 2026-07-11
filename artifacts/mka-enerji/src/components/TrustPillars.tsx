import { ShieldCheck, Users, Leaf, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
const icons = [ShieldCheck, Users, Leaf, Clock];
export default function TrustPillars() {
  const { t } = useLanguage();
  return <section className="relative z-20 -mt-16 md:-mt-24 px-4"><div className="container mx-auto"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 bg-white rounded-xl shadow-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-100">{t.trust.map((feature, i) => { const Icon = icons[i]; return <div key={feature[0]} className="p-8 lg:p-10 hover:bg-gray-50 transition-colors group"><Icon className="w-10 h-10 text-amber mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} /><h3 className="font-display font-bold text-navy-darker text-xl mb-2">{feature[0]}</h3><p className="font-sans text-gray-600 text-sm leading-relaxed">{feature[1]}</p></div>;})}</div></div></section>;
}
