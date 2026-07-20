"use client";

import { FaCocktail } from "react-icons/fa";

export default function Hero({ data }: any) {
  if (!data) return null;

  const titleText = data.heroTitle?.trim() || "";
  const words = titleText.split(/\s+/) || [];
  const lastWord = words.pop() || "";

  return (
    <section className="relative w-full h-[90vh] md:h-[80vh] lg:h-[85vh] overflow-hidden bg-[#1b3745]">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Barman kręcący shakerem"
          className="w-full h-full object-cover object-center scale-105 animate-slowZoom"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#1b3745] via-[#1b3745]/80 to-[#1b3745]/30 z-10" />

      <div className="absolute bottom-24 right-6 lg:right-20 z-10 hidden md:flex flex-col items-end gap-3">
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

      {/* FIX: Zmieniono pb-16 na pb-24 (mobile), md:pb-20 na md:pb-28, lg:pb-24 na lg:pb-32 */}
      <div className="relative z-40 h-full max-w-[1400px] mx-auto w-full px-6 lg:px-16 flex flex-col mt-4 md:mt-0 pt-32 pb-24 md:pt-36 md:pb-28 lg:pt-36 lg:pb-32">
        
        <div className="max-w-2xl animate-fadeUp mt-auto">
          <div className="mb-4 md:mb-6">
            <span className="text-[#a28468] text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-bold">
              Gypsy&apos;s Cocktail Bar
            </span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl text-white font-bold leading-[1.15] mb-5 md:mb-7 whitespace-pre-line">
            {words.join(" ")} <span className="text-[#a28468]">{lastWord}</span>
          </h1>

          <p className="text-white/50 text-sm sm:text-[15px] md:text-base leading-[1.7] max-w-lg mb-7 md:mb-9">
            {data.heroSubtitle}
          </p>

          <div className="flex flex-wrap gap-x-3 gap-y-2.5 mb-8 md:mb-10">
            {data.heroCategories?.map((cat: any, i: any) => (
              <span
                key={i}
                className="border border-[#a28468]/30 text-[#a28468]/80 px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase"
              >
                {cat.name}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {data.heroButtonPrimary && (
              <a
                href={data.heroButtonPrimary.url}
                className="group flex items-center justify-center gap-3 bg-[#a28468] text-[#1b3745] px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-[#c4a882] transition-all duration-300 shadow-lg shadow-[#a28468]/30 w-full sm:w-auto"
              >
                <FaCocktail className="text-sm" /> {data.heroButtonPrimary.text}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            )}
            {data.heroButtonSecondary && (
              <a
                href={data.heroButtonSecondary.url}
                className="group flex items-center justify-center sm:justify-start text-white/60 hover:text-white px-4 py-4 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300"
              >
                {data.heroButtonSecondary.text}
                <span className="ml-3 w-8 h-px bg-white/30 group-hover:w-12 group-hover:bg-[#a28468] transition-all duration-300"></span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}