import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export const navHrefs = [
  "#home",
  "#about",
  "#services",
  "#projects",
  "#references",
  "#contact",
];

export const navLinks = navHrefs.map((href, i) => ({
  href,
  key: i,
}));

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        90;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#031124]/95 backdrop-blur-xl shadow-2xl py-2"
          : "bg-gradient-to-b from-[#031124]/80 to-transparent py-4"
      }`}
      dir="ltr"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="relative z-50 flex items-center"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/MKA.jpg`}
              alt="MKA Enerji"
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) =>
                  handleNavClick(e, link.href)
                }
                className="font-display font-semibold text-sm text-white/75 hover:text-amber transition-all uppercase tracking-wider px-4 py-2 rounded-full hover:bg-white/10"
              >
                {t.nav[link.key]}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <LanguageSwitcher />

          
          </div>

          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Menüyü kapat"
                : "Menüyü aç"
            }
            className="lg:hidden z-50 text-white p-2 bg-white/10 rounded-lg border border-white/10"
            onClick={() =>
              setMobileMenuOpen((prev) => !prev)
            }
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{
              opacity: 0,
              y: -18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -18,
            }}
            className="absolute top-full left-0 right-0 bg-[#031124]/98 backdrop-blur-xl shadow-2xl py-4 flex flex-col lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) =>
                  handleNavClick(e, link.href)
                }
                className="font-display font-bold text-white/90 px-6 py-4 uppercase tracking-wide flex justify-between items-center"
              >
                {t.nav[link.key]}

                <ChevronRight className="w-4 h-4 text-amber" />
              </a>
            ))}

            <div className="px-6 py-5 flex items-center justify-center">
              <LanguageSwitcher />
            </div>

            <div className="px-6 py-6">
              <a
                href="#contact"
                onClick={(e) =>
                  handleNavClick(e, "#contact")
                }
                className="bg-gradient-to-r from-[#D4AF37] to-[#E7C55C] text-[#031124] font-display font-black uppercase tracking-wide py-4 rounded-lg text-center flex items-center justify-center"
              >
                {t.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}