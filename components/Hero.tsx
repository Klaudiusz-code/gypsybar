"use client";

import { FaCocktail } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] md:h-[85vh] md:min-h-[600px] overflow-hidden bg-[#1b3745]">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Barman kręcący shakerem"
          className="w-full h-full object-cover object-center scale-105 animate-slowZoom"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#1b3745] via-[#1b3745]/80 to-[#1b3745]/30 z-10" />

      <div className="absolute bottom-20 right-6 lg:right-20 z-10 hidden md:flex flex-col items-end gap-3">
        <div className="w-32 h-44 lg:w-40 lg:h-56 overflow-hidden border border-[#a28468]/40 p-1.5 bg-[#1b3745]/50 backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-all duration-500 shadow-xl">
          <img
            src="/card1.jpg"
            alt="Koktajl"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-44 lg:w-40 lg:h-56 overflow-hidden border border-[#a28468]/40 p-1.5 bg-[#1b3745]/50 backdrop-blur-sm transform -rotate-2 hover:rotate-0 transition-all duration-500 shadow-xl -mt-6 mr-8">
          <img
            src="/card2.jpg"
            alt="Shakery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-44 lg:w-40 lg:h-56 overflow-hidden border border-[#a28468]/40 p-1.5 bg-[#1b3745]/50 backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-all duration-500 shadow-xl -mt-6 mr-4">
          <img
            src="/card3.jpg"
            alt="Coupe glass"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#0a1218] to-transparent z-20" />

      <div className="relative z-40 h-full max-w-[1400px] mx-auto w-full px-6 lg:px-16 flex flex-col justify-end pb-20 md:justify-center md:pb-0">
        <div className="max-w-2xl animate-fadeUp">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-[#a28468]" />
            <span className="text-[#a28468] text-xs tracking-[0.4em] uppercase font-bold">
              Gypsy&apos;s
            </span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-[1.05] mb-5 md:mb-6">
            Twój osobisty
            <br />
            koktajlbar
            <br />
            <span className="text-[#a28468]">na wynajem.</span>
          </h1>

          <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg mb-6 md:mb-8">
            Poczuj atmosferę prawdziwego baru na swoim przyjęciu. Świeże
            składniki, niestandardowe menu i{" "}
            <span className="text-white/80">zero stresu z logistyką</span> –
            zajmiemy się wszystkim.
          </p>

          <div className="flex flex-wrap gap-2.5 md:gap-3 mb-8 md:mb-10">
            <span className="border border-[#a28468]/30 text-[#a28468]/80 px-3 py-1 md:px-4 md:py-1.5 text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
              Śluby
            </span>
            <span className="border border-[#a28468]/30 text-[#a28468]/80 px-3 py-1 md:px-4 md:py-1.5 text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
              Imprezy Firmowe
            </span>
            <span className="border border-[#a28468]/30 text-[#a28468]/80 px-3 py-1 md:px-4 md:py-1.5 text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
              Przyjęcia Prywatne
            </span>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-4">
            <a
              href="#oferta"
              className="group flex items-center justify-center gap-3 bg-[#a28468] text-[#1b3745] px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-[#c4a882] transition-all duration-300 shadow-lg shadow-[#a28468]/30 w-full sm:w-auto"
            >
              <FaCocktail className="text-sm" /> Zobacz Ofertę
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#kontakt"
              className="text-white/60 hover:text-white px-6 py-4 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 underline underline-offset-4 decoration-[#a28468]/50 hover:decoration-[#a28468] text-center sm:text-left"
            >
              Zapytaj o termin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
