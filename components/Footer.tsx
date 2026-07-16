"use client";

import Image from "next/image";
import { FaCocktail } from "react-icons/fa";
import { usePathname } from "next/navigation";

const content = {
  pl: {
    realizacja: "Realizacja: klaudiuszdev.pl",
    privacy: "Polityka prywatności",
    privacyLink: "/polityka-prywatnosci",
  },
  en: {
    realizacja: "Design: klaudiuszdev.pl",
    privacy: "Privacy Policy",
    privacyLink: "/en/privacy-policy",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const lang = pathname === "/en" ? "en" : "pl";
  const t = content[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080f13] overflow-hidden">
      {/* Świecąca linia na górze */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#a28468]/10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#a28468]/50 to-transparent shadow-[0_0_15px_rgba(162,132,104,0.3)]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-6">
        {/* GŁÓWNY UKŁAD: Mobilka (wyśrodkowana kolumna) vs Desktop (3 kolumny rozciągnięte na boki) */}
        <div className="flex flex-col items-center text-center md:grid md:grid-cols-3 md:items-center md:text-left gap-6 md:gap-0">
          {/* 1. LEWA / GÓRA - Marka i Prawa */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <div className="hidden md:block w-px h-4 bg-[#a28468]/30" />
            <FaCocktail className="text-[#a28468]/50 text-[10px]" />

            <span className="font-playfair text-base md:text-sm text-[#FDFBF7]/40 italic tracking-wide">
              Gypsy&apos;s
            </span>

            <div className="hidden sm:block w-px h-3 bg-white/5" />

            <span className="text-[#FDFBF7]/15 text-[9px] tracking-[0.2em] uppercase font-light">
              Wszelkie prawa zastrzeżone © {currentYear}
            </span>
          </div>

          {/* 2. ŚRODEK - Dekoracja (Tylko Desktop) */}
          <div className="hidden md:flex justify-center items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#a28468]/30" />
            {/* Mały obrócony kwadracik (diament) zamiast kropki - wygląda fajniej */}
            <div className="w-1.5 h-1.5 rotate-45 border border-[#a28468]/30"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#a28468]/30" />
          </div>

          {/* 3. PRAWA / DÓŁ - Linki i Autor */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href={t.privacyLink}
              className="text-[#FDFBF7]/20 text-[10px] tracking-[0.2em] uppercase hover:text-[#a28468]/50 transition-colors duration-700"
            >
              {t.privacy}
            </a>

            <div className="flex items-center gap-2.5 group">
              {/* Pozioma kreska oddzielająca na desktopie/mniejszej mobilce */}
              <div className="w-6 h-px bg-white/10 hidden sm:block" />

              <a
                href="https://klaudiuszdev.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-all duration-700"
              >
                <span className="text-[#FDFBF7]/15 text-[10px] tracking-[0.15em] uppercase group-hover:text-[#a28468]/50 transition-colors duration-700">
                  {t.realizacja}
                </span>
                <div className="relative w-4 h-4 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                  <Image
                    src="https://klaudiuszdev.pl/hello.svg"
                    alt="KlaudiuszDev"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
