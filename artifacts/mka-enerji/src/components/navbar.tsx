import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

export const navLinks = [
  { name: 'Ana Sayfa', href: '#home' },
  { name: 'Kurumsal', href: '#about' },
  { name: 'Hizmetlerimiz', href: '#services' },
  { name: 'Projeler', href: '#projects' },
  { name: 'Referanslar', href: '#references' },
  { name: 'İletişim', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-darker/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col z-50 group"
          >
            <span className="font-display font-bold text-3xl tracking-tighter text-white group-hover:text-amber transition-colors">
              MKA
            </span>
            <span className="font-display font-semibold text-[0.65rem] tracking-[0.25em] text-amber -mt-1">
              ENERJİ
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-display font-medium text-sm text-bluegray hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact / CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+905551234567" className="flex items-center space-x-2 text-white group">
              <Phone className="w-4 h-4 text-amber group-hover:animate-pulse" />
              <span className="font-sans font-medium text-sm">+90 555 123 45 67</span>
            </a>
            
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-gradient-to-r from-amber to-amber/80 text-navy-darker hover:from-amber hover:to-amber font-display font-bold text-sm uppercase tracking-wide px-6 py-2.5 rounded hover:shadow-[0_0_15px_rgba(230,170,34,0.4)] transition-all flex items-center group"
            >
              Teklif Al
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden z-50 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-navy-darker/95 backdrop-blur-xl border-t border-white/10 shadow-2xl py-4 flex flex-col lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-display font-semibold text-white/90 px-6 py-4 border-b border-white/5 uppercase tracking-wide flex justify-between items-center"
              >
                {link.name}
                <ChevronRight className="w-4 h-4 text-amber" />
              </a>
            ))}
            <div className="px-6 py-6 flex flex-col space-y-4">
              <a href="tel:+905551234567" className="flex items-center space-x-3 text-white/80 p-3 bg-white/5 rounded">
                <Phone className="w-5 h-5 text-amber" />
                <span className="font-sans font-medium">+90 555 123 45 67</span>
              </a>
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-amber text-navy-darker font-display font-bold uppercase tracking-wide py-4 rounded text-center"
              >
                Teklif Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
