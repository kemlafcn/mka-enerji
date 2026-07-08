import React, { useEffect } from 'react';
import { Navbar, navLinks } from '@/components/navbar';
import { motion, useScroll, useTransform, useAnimation, useInView, type Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, Leaf, Clock, Sun, Zap, TowerControl, Battery, Activity, Shield, CheckCircle, Phone } from 'lucide-react';
import { useRef } from 'react';

// Images will be available in public/images
const heroBg = '/images/hero-bg.jpg';
const about1 = '/images/about-1.jpg';
const about2 = '/images/about-2.jpg';
const project1 = '/images/project-1.jpg';
const project2 = '/images/project-2.jpg';
const project3 = '/images/project-3.jpg';
const project4 = '/images/project-4.jpg';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-amber selection:text-navy-darker">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative h-[100svh] min-h-[700px] w-full flex items-center pt-20 overflow-hidden bg-navy-darker">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <img 
            src={heroBg} 
            alt="Solar Farm" 
            className="w-full h-full object-cover object-center opacity-40"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-darker via-navy-darker/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-darker via-transparent to-transparent opacity-80"></div>
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
              <span className="font-display font-medium text-xs tracking-wider text-bluegray uppercase">Türkiye'nin Enerji Altyapısı</span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[1.1] mb-6">
              ENERJİDE GÜÇ,<br/>
              <span className="text-amber">YARINLARA DEĞER.</span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-bluegray mb-10 max-w-2xl leading-relaxed">
              Yenilenebilir enerji, elektrik altyapısı ve sürdürülebilir enerji çözümleriyle geleceğe değer katıyoruz. 10 yılı aşkın tecrübeyle anahtar teslim projeler.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-amber text-navy-darker hover:bg-white font-display font-bold px-8 py-4 rounded text-center uppercase tracking-wide transition-colors flex items-center justify-center group">
                Hizmetlerimiz
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="bg-transparent border border-white/30 text-white hover:border-amber hover:text-amber font-display font-bold px-8 py-4 rounded text-center uppercase tracking-wide transition-colors">
                Projelerimiz
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-bluegray mb-2">Keşfet</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
            <motion.div 
              className="absolute top-0 w-full h-1/2 bg-amber"
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* TRUST PILLARS (Overlapping Hero) */}
      <section className="relative z-20 -mt-16 md:-mt-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 bg-white rounded-xl shadow-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { icon: ShieldCheck, title: "Güvenilir", desc: "Yüksek kalite standartlarıyla güvenilir enerji çözümleri." },
              { icon: Users, title: "Uzman Kadro", desc: "Deneyimli mühendis ve teknik ekip." },
              { icon: Leaf, title: "Sürdürülebilir", desc: "Çevre dostu ve verimli sistemler." },
              { icon: Clock, title: "7/24 Destek", desc: "Satış sonrası kesintisiz teknik destek." },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 lg:p-10 hover:bg-gray-50 transition-colors group">
                <feature.icon className="w-10 h-10 text-amber mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-navy-darker text-xl mb-2">{feature.title}</h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-multiply"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="max-w-xl"
            >
              <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-6">
                <div className="h-[2px] w-12 bg-amber"></div>
                <span className="font-display font-bold text-amber uppercase tracking-wider text-sm">Hakkımızda</span>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="font-display font-bold text-4xl md:text-5xl text-navy-darker leading-[1.1] mb-6">
                Temiz enerji için <br/>güvenilir çözümler
              </motion.h2>
              
              <motion.p variants={itemVariants} className="font-sans text-gray-600 text-lg mb-8 leading-relaxed">
                MKA Enerji; GES projeleri, elektrik sistemleri, enerji nakil hatları, trafo merkezleri, enerji depolama ve SCADA çözümlerinde anahtar teslim hizmet sunan, sektörün öncü mühendislik firmalarından biridir.
              </motion.p>
              
              <motion.ul variants={containerVariants} className="space-y-4 mb-10">
                {[
                  "Yenilenebilir enerji kaynaklarında yüksek verim",
                  "Uluslararası standartlara uygun mühendislik",
                  "Zamanında teslim ve müşteri odaklı yaklaşım"
                ].map((item, idx) => (
                  <motion.li key={idx} variants={itemVariants} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber shrink-0 mr-3 mt-0.5" />
                    <span className="font-sans font-medium text-navy-dark">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.a 
                variants={itemVariants}
                href="#references" 
                className="inline-flex items-center font-display font-bold text-navy-darker uppercase tracking-wider text-sm hover:text-amber transition-colors group"
              >
                <span className="border-b-2 border-navy-darker group-hover:border-amber pb-1 transition-colors">Hakkımızda Detaylı Bilgi</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img src={about1} alt="Engineering" className="w-full h-64 object-cover rounded-lg shadow-lg" 
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop'; }} />
                </div>
                <div className="space-y-4 relative">
                  <img src={about2} alt="Solar Panels" className="w-full h-80 object-cover rounded-lg shadow-lg" 
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop'; }} />
                  
                  {/* Floating Stat Card */}
                  <div className="absolute -left-12 -bottom-6 bg-navy-darker p-6 rounded-lg shadow-2xl border-l-4 border-amber z-10 w-48">
                    <div className="font-display font-bold text-4xl text-amber mb-1">10+</div>
                    <div className="font-sans font-medium text-white text-sm">Yıllık Mühendislik Deneyimi</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 bg-navy-darker relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="h-[2px] w-8 bg-amber"></div>
              <span className="font-display font-bold text-amber uppercase tracking-wider text-sm">HİZMETLERİMİZ</span>
              <div className="h-[2px] w-8 bg-amber"></div>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Kapsamlı Enerji Çözümleri
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Sun, title: "GES Projeleri", desc: "Arazi ve çatı tipi güneş enerjisi santrali projelendirme, kurulum ve devreye alma." },
              { icon: Zap, title: "Elektrik Sistemleri", desc: "OG/AG elektrik sistemleri, dağıtım panoları ve altyapı çözümleri." },
              { icon: TowerControl, title: "Enerji Nakil Hatları", desc: "ENH projelendirme, uygulama, test ve kabul süreçleri." },
              { icon: Activity, title: "Trafo Merkezleri", desc: "Trafo, şalt tesisleri ve reaktif güç kompanzasyon sistemleri." },
              { icon: Battery, title: "Enerji Depolama", desc: "Endüstriyel batarya enerji depolama sistemleri ve hibrit çözümler." },
              { icon: Activity, title: "SCADA & İzleme", desc: "Uzaktan izleme, kontrol, raporlama ve performans takibi." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-navy/40 border border-white/5 p-8 hover:bg-navy hover:border-amber/30 transition-all duration-300 rounded-lg overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber/5 rounded-bl-[100px] -z-10 group-hover:bg-amber/10 transition-colors"></div>
                <service.icon className="w-12 h-12 text-amber mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-2xl text-white mb-4">{service.title}</h3>
                <p className="font-sans text-bluegray leading-relaxed group-hover:text-white/90 transition-colors">
                  {service.desc}
                </p>
                <div className="mt-8 flex items-center text-amber text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">
                  Detaylar <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS COUNTER ROW */}
      <section className="py-20 bg-navy relative border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-white/10 text-center">
            {[
              { num: "250+", label: "Tamamlanan Proje" },
              { num: "500 MW+", label: "Kurulu Güç" },
              { num: "150+", label: "Kurumsal Müşteri" },
              { num: "81", label: "İl Hizmet Ağı" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="px-4"
              >
                <div className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-amber mb-2">{stat.num}</div>
                <div className="font-display font-bold text-white/70 text-xs md:text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-4 mb-4">
                <div className="h-[2px] w-8 bg-amber"></div>
                <span className="font-display font-bold text-amber uppercase tracking-wider text-sm">PROJELERİMİZ</span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-darker">
                Gerçekleştirdiğimiz<br/>bazı projeler
              </h2>
            </div>
            <a href="#" className="flex-shrink-0 bg-navy-darker text-white hover:bg-amber hover:text-navy-darker font-display font-bold px-6 py-3 rounded uppercase tracking-wide text-sm transition-colors flex items-center">
              Tüm Projeler
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { img: project1, title: "Konya 20 MW GES", cat: "GES Projesi / 2024", fallback: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1000&auto=format&fit=crop" },
              { img: project2, title: "OSB Trafo Merkezi", cat: "Elektrik / 2024", fallback: "https://images.unsplash.com/photo-1542338106-dd3e6e8e895c?q=80&w=1000&auto=format&fit=crop" },
              { img: project3, title: "Mersin 8 MW Çatı GES", cat: "GES Projesi / 2023", fallback: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000&auto=format&fit=crop" },
              { img: project4, title: "Batarya Depolama Sistemi", cat: "Enerji Depolama / 2024", fallback: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1000&auto=format&fit=crop" },
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative h-80 md:h-[400px] rounded-xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { (e.target as HTMLImageElement).src = project.fallback; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-darker via-navy-darker/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-display font-bold text-amber text-sm uppercase tracking-wider mb-2 block">
                      {project.cat}
                    </span>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE DETAIL (Mission/Vision) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-darker mb-6">Kurumsal Değerlerimiz</h2>
            <p className="font-sans text-gray-600 text-lg leading-relaxed">
              MKA Enerji, güneş enerji santralleri (GES), orta ve yüksek gerilim sistemleri, enerji nakil hatları, trafo merkezleri ve enerji depolama çözümlerinde faaliyet gösteren köklü bir mühendislik firmasıdır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Misyonumuz", desc: "Gelecek nesillere daha yaşanabilir bir dünya bırakmak için sürdürülebilir, güvenilir ve yenilikçi enerji çözümleri sunmak." },
              { title: "Vizyonumuz", desc: "Mühendislik kalitesi ve teknolojik altyapısıyla enerji sektörüne yön veren, uluslararası alanda öncü mühendislik firması olmak." },
              { title: "Kalite Politikamız", desc: "Uluslararası standartlarda, çevreye duyarlı, iş sağlığı ve güvenliğini ön planda tutan kaliteli ve güvenilir hizmet sunmak." }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-8 rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
                <Shield className="w-12 h-12 text-amber mx-auto mb-6" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-xl text-navy-darker mb-4">{item.title}</h3>
                <p className="font-sans text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCES / PARTNERS */}
      <section id="references" className="py-20 bg-gray-100 border-t border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-10">
          <span className="font-display font-bold text-gray-400 uppercase tracking-widest text-sm">Çözüm Ortaklarımız & Markalar</span>
        </div>
        
        {/* Simple Marquee Implementation */}
        <div className="relative flex w-full overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap space-x-16 items-center px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {["Huawei", "Sungrow", "Solis", "LONGi", "Trina Solar", "Schneider", "ABB", "ASTOR"].map((brand, idx) => (
                  <div key={`${i}-${idx}`} className="font-display font-black text-3xl md:text-5xl text-gray-300/80 uppercase tracking-tighter hover:text-navy-darker transition-colors duration-300">
                    {brand}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-24 md:py-32 bg-navy-darker relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Enerji projeleriniz için <br/>
              <span className="text-amber">size özel çözümler</span> sunalım.
            </h2>
            <p className="font-sans text-xl text-bluegray mb-12">
              Uzman mühendis kadromuzla iletişime geçin, projenizin keşfini yapıp en uygun teklifi hazırlayalım.
            </p>
            
            <a 
              href="https://wa.me/905551234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber to-[#f5b82e] text-navy-darker font-display font-bold text-lg px-10 py-5 rounded-lg shadow-[0_10px_40px_rgba(230,170,34,0.3)] hover:scale-105 hover:shadow-[0_15px_50px_rgba(230,170,34,0.4)] transition-all duration-300 group"
            >
              WhatsApp'tan Teklif Al
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="mt-8 font-sans text-white/50 flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" /> Veya hemen arayın: <span className="font-bold text-white ml-2">+90 555 123 45 67</span>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#031124] pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <a href="#home" className="flex flex-col mb-6">
                <span className="font-display font-bold text-4xl tracking-tighter text-white">MKA</span>
                <span className="font-display font-semibold text-[0.75rem] tracking-[0.25em] text-amber -mt-1">ENERJİ</span>
              </a>
              <p className="font-sans text-bluegray/70 text-sm leading-relaxed max-w-xs">
                Yenilenebilir enerji, elektrik altyapısı ve sürdürülebilir enerji çözümleriyle geleceğe değer katıyoruz.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Hızlı Linkler</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="font-sans text-bluegray/70 hover:text-amber transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Hizmetlerimiz</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="font-sans text-bluegray/70 hover:text-amber transition-colors text-sm">GES Projeleri</a></li>
                <li><a href="#services" className="font-sans text-bluegray/70 hover:text-amber transition-colors text-sm">Elektrik Sistemleri</a></li>
                <li><a href="#services" className="font-sans text-bluegray/70 hover:text-amber transition-colors text-sm">Enerji Nakil Hatları</a></li>
                <li><a href="#services" className="font-sans text-bluegray/70 hover:text-amber transition-colors text-sm">Trafo Merkezleri</a></li>
                <li><a href="#services" className="font-sans text-bluegray/70 hover:text-amber transition-colors text-sm">Enerji Depolama</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">İletişim</h4>
              <ul className="space-y-4">
                <li className="flex items-start text-bluegray/70 text-sm">
                  <span className="font-bold text-amber mr-2">A:</span> 
                  OSB Mah. Teknoloji Bulvarı No: 123 Selçuklu / Konya
                </li>
                <li className="flex items-start text-bluegray/70 text-sm">
                  <span className="font-bold text-amber mr-2">T:</span> 
                  +90 555 123 45 67
                </li>
                <li className="flex items-start text-bluegray/70 text-sm">
                  <span className="font-bold text-amber mr-2">E:</span> 
                  info@mkaenerji.com.tr
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-bluegray/50">
            <p>© 2026 MKA Enerji. Tüm hakları saklıdır.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
              <a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
