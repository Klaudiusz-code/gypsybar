"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaCocktail, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [locale, setLocale] = useState("pl"); // Stan języka

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-[#0a1218]/95 backdrop-blur-2xl shadow-2xl shadow-black/30 border-b border-[#a28468]/20"
            : "group-hover:bg-[#1b3745]/80 group-hover:backdrop-blur-xl group-hover:shadow-lg group-hover:shadow-black/10 bg-transparent border-b border-transparent"
        }`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#a28468] to-transparent transition-opacity duration-700 ${
            isScrolled ? "opacity-100" : "opacity-0 group-hover:opacity-60"
          }`}
        ></div>

        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 h-20 flex items-center justify-between">
          <a
            href="#"
            className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#a28468]/60 hover:border-[#a28468] hover:shadow-[0_0_20px_rgba(162,132,104,0.4)] transition-all duration-500 flex-shrink-0"
          >
            <Image
              src="/logo-gryp.jpg"
              alt="Logo Barman"
              fill
              className="object-cover mix-blend-luminosity"
              priority
            />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <div key={link.href} className="flex items-center gap-1">
                <a
                  href={link.href}
                  className="group relative text-[11px] tracking-[0.25em] uppercase text-white/50 hover:text-white px-4 py-2 transition-colors duration-500"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-[#a28468] transition-all duration-500 group-hover:w-2/3" />
                </a>
                {i < navLinks.length - 1 && (
                  <span className="w-px h-4 bg-white/10"></span>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* PRZEŁĄCZNIK JĘZYKÓW */}
            <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10">
              <button
                onClick={() => setLocale("pl")}
                className={`px-2.5 py-1 rounded-full text-sm transition-all duration-300 ${
                  locale === "pl"
                    ? "bg-[#a28468]/20 shadow-sm border border-[#a28468]/30"
                    : "hover:bg-white/5 border border-transparent"
                }`}
                aria-label="Polski"
              >
                🇵🇱
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 rounded-full text-sm transition-all duration-300 ${
                  locale === "en"
                    ? "bg-[#a28468]/20 shadow-sm border border-[#a28468]/30"
                    : "hover:bg-white/5 border border-transparent"
                }`}
                aria-label="English"
              >
                🇬🇧
              </button>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#a28468] hover:border-[#a28468]/40 transition-all duration-300"
              >
                <FaInstagram size={13} />
              </a>
              <a
                href="#"
                target="_blank"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#a28468] hover:border-[#a28468]/40 transition-all duration-300"
              >
                <FaFacebook size={13} />
              </a>
            </div>

            <span className="w-px h-5 bg-white/10"></span>

            <a
              href="#kontakt"
              className="flex items-center gap-3 bg-[#a28468] text-[#1b3745] px-6 py-2.5 rounded-sm text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-[#c4a882] transition-all duration-500 shadow-lg shadow-[#a28468]/20 hover:shadow-[#a28468]/40"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1b3745]/30 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1b3745]/60"></span>
              </span>
              Wycena
              <FaCocktail className="text-xs" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-xl w-11 h-11 flex items-center justify-center rounded-full border border-white/10 hover:border-[#a28468] hover:text-[#a28468] transition-all"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* MENU MOBILNE - bez zmian */}
      <div
        className={`fixed inset-0 bg-[#1b3745] z-[60] flex flex-col transition-all duration-700 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-[30vw] leading-none text-white/[0.02] font-bold select-none pointer-events-none">
          MENU
        </div>

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#a28468]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-20 flex items-center justify-between p-6 border-b border-white/5">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="relative w-10 h-10 rounded-full overflow-hidden border border-[#a28468]/30"
          >
            <Image
              src="/logo-gryp.jpg"
              alt="Logo"
              fill
              className="object-cover mix-blend-luminosity"
            />
          </a>

          {/* PRZEŁĄCZNIK JĘZYKÓW W MOBILNYM MENU */}
          <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10">
            <button
              onClick={() => setLocale("pl")}
              className={`px-2 py-1 rounded-full text-xs transition-all duration-300 ${
                locale === "pl"
                  ? "bg-[#a28468]/20 border border-[#a28468]/30"
                  : "border border-transparent"
              }`}
            >
              🇵🇱
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2 py-1 rounded-full text-xs transition-all duration-300 ${
                locale === "en"
                  ? "bg-[#a28468]/20 border border-[#a28468]/30"
                  : "border border-transparent"
              }`}
            >
              🇬🇧
            </button>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white/40 hover:text-white transition-colors"
          >
            <FaXmark size={24} />
          </button>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center pl-8 md:pl-16">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl md:text-5xl font-playfair text-white/70 hover:text-[#a28468] transition-all duration-500 tracking-wide py-4 border-b border-white/[0.03] w-fit pr-8"
              style={{
                transitionDelay: isOpen ? `${i * 100}ms` : "0ms",
                transform: isOpen ? "translateX(0)" : "translateX(-30px)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          className="relative z-20 p-8 border-t border-white/5 flex flex-col gap-6"
          style={{
            transitionDelay: isOpen ? `${navLinks.length * 100}ms` : "0ms",
            transform: isOpen ? "translateY(0)" : "translateY(40px)",
            opacity: isOpen ? 1 : 0,
            transition: "all 700ms",
          }}
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">
              Dostępny na sezon 2026/2027
            </span>
          </div>

          <a
            href="#kontakt"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#a28468] text-[#1b3745] py-3.5 rounded-sm text-[11px] font-bold tracking-[0.15em] uppercase transition-all hover:bg-[#c4a882]"
          >
            <FaCocktail size={14} />
            Zapytaj o termin
          </a>
        </div>
      </div>
    </>
  );
}
