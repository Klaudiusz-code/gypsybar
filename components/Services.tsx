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

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row h-auto md:h-[550px] lg:h-[600px] gap-3 md:gap-4">
        {data.servicesItems.map((item: any, i: any) => {
          const isActive = activeIndex === i;
          const imageUrl = item.imageOffer?.node?.sourceUrl;
          const hasImage = !!imageUrl;
          const imgClasses = `object-cover transition-all duration-1000 hidden md:block ${
            isActive
              ? "opacity-30 scale-100 md:opacity-40"
              : "opacity-0 scale-110"
          }`;

          return (
            <div
              key={i}
              onClick={() => setActiveIndex(isActive ? -1 : i)}
              className={`
                group relative overflow-hidden cursor-pointer transition-all duration-700 ease-out
                /* --- MOBILE STYLING --- */
                h-auto rounded-2xl border border-[#1e3946]/50 bg-[#0a1218]
                /* --- DESKTOP STYLING --- */
                md:h-auto md:flex-1 md:rounded-2xl md:border-0
                ${isActive ? "md:flex-[3]" : "md:flex-1"} 
                ${!hasImage ? "" : ""}
              `}
            >
              {hasImage && (
                <Image
                  src={imageUrl}
                  alt={item.title}
                  fill
                  className={imgClasses}
                />
              )}

              <div
                className={`hidden md:block absolute inset-0 transition-colors duration-500 ${!hasImage ? "bg-[#131f27]" : isActive ? "bg-black/20" : "bg-[#131f27] group-hover:bg-[#1a2b35]"}`}
              />
              <div
                className={`hidden md:block absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
              />

              <div className="md:hidden relative z-10">
                <div className="flex items-center gap-4 p-5 pb-4">
                  {hasImage && (
                    <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border border-[#1e3946]">
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <h3 className="font-playfair text-lg sm:text-xl text-[#FDFBF7] tracking-tight flex-1 min-w-0 leading-tight">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="font-playfair text-lg text-[#a28468]/30 font-light">
                      0{i + 1}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border border-[#a28468]/30 flex items-center justify-center transition-all duration-500 ${isActive ? "rotate-45 bg-[#a28468]/20 border-[#a28468]/50" : ""}`}
                    >
                      <span className="text-[#a28468] text-xs leading-none font-light">
                        +
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 pl-[76px] sm:pl-[80px]">
                    {" "}
                    <div className="w-8 h-px bg-[#a28468]/20 mb-3" />
                    <p className="text-sm leading-relaxed text-[#FDFBF7]/40">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hidden md:flex relative z-10 h-full flex-col items-center p-8 pt-10 transition-all duration-700"
                style={{ justifyContent: isActive ? "flex-end" : "center" }}
              >
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap transition-all duration-300 pointer-events-none ${isActive ? "opacity-0" : "opacity-100"}`}
                >
                  <span className="font-playfair text-xl lg:text-2xl text-white/20 group-hover:text-white/40 tracking-wider transition-colors">
                    {item.title}
                  </span>
                </div>

                <div
                  className={`absolute top-6 right-6 transition-opacity ${isActive ? "opacity-50" : "opacity-30"}`}
                >
                  <span className="font-playfair text-4xl text-[#a28468] font-light">
                    0{i + 1}
                  </span>
                </div>

                <div
                  className={`w-full transition-all duration-500 delay-200 pb-8 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
          );
        })}
      </div>
    </section>
  );
}
