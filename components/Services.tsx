"use client";

import { useState } from "react";
import Image from "next/image";

export default function Services({ data }: any) {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  if (!data || !data.servicesItems) return null;

  return (
    <section
      id="oferta"
      className="relative pt-24 pb-32 px-4 sm:px-6 md:px-12 bg-[#0f1a1f] overflow-hidden"
    >
      <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16 relative z-10 pt-4 sm:pt-8">
        <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
          {data.servicesLabel}
        </p>
        <h2 className="font-playfair text-3xl md:text-5xl text-[#fff] leading-tight">
          {data.servicesTitle
            ?.split(" ")
            .map((word: string, index: number, array: string[]) => (
              <span
                key={index}
                className={index === array.length - 1 ? "text-[#a28468]" : ""}
              >
                {word}{" "}
              </span>
            ))}
        </h2>
        <p className="text-[#FDFBF7]/20 text-sm leading-relaxed max-w-md mx-auto">
          {data.servicesDescription}
        </p>
      </div>

      <div className="max-w-2xl sm:max-w-3xl md:max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row md:h-[550px] lg:h-[600px] gap-4">
        {data.servicesItems.map((item: any, i: any) => {
          const isActive = activeIndex === i;
          const imageUrl = item.imageOffer?.node?.sourceUrl;
          const hasImage = !!imageUrl;

          return (
            <div
              key={i}
              onClick={() => setActiveIndex(isActive ? -1 : i)}
              className={`
                group relative overflow-hidden cursor-pointer rounded-2xl transition-all duration-500 ease-out
                border border-[#1e3946]/30 bg-[#0a1218]
                ${isActive ? "border-[#a28468]/30 shadow-[0_0_50px_-15px_rgba(162,132,104,0.4)]" : ""}
                
                md:flex-1 md:rounded-2xl md:border-0 md:shadow-none
                ${isActive ? "md:flex-[3]" : "md:flex-1"} 
              `}
            >
              {/* ========================================= */}
              {/* --- WERSJA MOBILNA (PIĘKNE PIONOWE KARTY) --- */}
              {/* ========================================= */}
              <div className="md:hidden">
                {/* Duże, cinematiczne zdjęcie */}
                <div className="relative h-56 sm:h-64 w-full">
                  {hasImage && (
                    <Image
                      src={imageUrl}
                      alt={item.title}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={i === 0}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Góra: Numer i szklany przycisk "+" */}
                  <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10">
                    <span className="font-playfair text-lg text-[#a28468]/60 font-light">
                      0{i + 1}
                    </span>
                    <div
                      className={`w-9 h-9 flex-shrink-0 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/10 transition-all duration-500 ${
                        isActive
                          ? "rotate-45 bg-[#a28468] border-[#a28468] backdrop-blur-none"
                          : ""
                      }`}
                    >
                      <span
                        className={`text-xl leading-none font-thin transition-colors duration-500 ${isActive ? "text-white" : "text-white/80"}`}
                      >
                        +
                      </span>
                    </div>
                  </div>

                  {/* Dół: Duży tytuł */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="font-playfair text-2xl sm:text-3xl text-[#FDFBF7] font-medium tracking-tight leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Rozwijany panel z opisem i złotą kreską */}
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 sm:p-6 bg-[#0f1a1f]/60 backdrop-blur-xl border-l-2 border-[#a28468]/40">
                      <p className="text-sm sm:text-base leading-relaxed text-[#FDFBF7]/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================= */}
              {/* --- WERSJA DESKTOP (STARY AKORDEON) --- */}
              {/* ========================================= */}
              <div className="hidden md:block relative w-full h-full">
                {hasImage && (
                  <Image
                    src={imageUrl}
                    alt={item.title}
                    fill
                    /* TUTAJ JEST ZMIANA: opacity-0 zmienione na opacity-30 */
                    className={`object-cover transition-all duration-700 ${
                      isActive ? "opacity-50 scale-100" : "opacity-30 scale-110"
                    }`}
                  />
                )}

                {/* Tło kafelka na desktopie */}
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    !hasImage
                      ? "bg-[#131f27]"
                      : "bg-[#131f27] group-hover:bg-[#1a2b35]"
                  } ${isActive ? "!bg-transparent" : ""}`}
                />

                <div
                  className="relative z-10 h-full flex flex-col items-center p-8 pt-10 transition-all duration-700"
                  style={{ justifyContent: isActive ? "flex-end" : "center" }}
                >
                  {/* Obrócony tytuł na środku */}
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap transition-all duration-300 pointer-events-none ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span className="font-playfair text-xl lg:text-2xl text-white/20 group-hover:text-white/40 tracking-wider transition-colors">
                      {item.title}
                    </span>
                  </div>

                  {/* Numer w rogu */}
                  <div
                    className={`absolute top-6 right-6 transition-opacity ${
                      isActive ? "opacity-50" : "opacity-30"
                    }`}
                  >
                    <span className="font-playfair text-4xl text-[#a28468] font-light">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Szczegóły po rozwinięciu */}
                  <div
                    className={`w-full transition-all duration-500 delay-200 pb-8 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <h3 className="font-playfair text-2xl md:text-3xl text-[#FDFBF7] mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#FDFBF7]/40 text-sm leading-relaxed max-w-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
