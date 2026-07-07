"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaGlassCheers,
  FaBuilding,
  FaBirthdayCake,
  FaCocktail,
} from "react-icons/fa";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "glass-cheers": <FaGlassCheers />,
  building: <FaBuilding />,
  "birthday-cake": <FaBirthdayCake />,
  cocktail: <FaCocktail />,
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="relative pt-24 pb-32 px-6 md:px-12 bg-[#0f1a1f] border-[#1e3946] overflow-hidden">

      <div className="max-w-3xl mx-auto text-center mb-16 relative z-10 pt-8">
        <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
          Oferta
        </p>
        <h2 className="font-playfair text-4xl md:text-6xl text-[#FDFBF7] leading-[1.1] mb-6">
          Nie tylko{" "}
          <span className="text-[#a28468]/50 italic font-light">
            obsługa barmańska.
          </span>
        </h2>
        <p className="text-[#FDFBF7]/20 text-sm leading-relaxed max-w-md mx-auto">
          Tworzymy strefę, do której goście wracają przez całą noc. Bez stresu,
          z pełnym profesjonalizmem.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row h-auto md:h-[550px] lg:h-[600px] gap-4">
        {services.map((item, i) => {
          const isActive = activeIndex === i;

          const imgClasses = `object-cover transition-all duration-1000 ${
            isActive
              ? "opacity-30 scale-100 md:opacity-40"
              : "opacity-0 scale-110"
          }`;

          return (
            <div
              key={i}
              onClick={() => setActiveIndex(isActive ? -1 : i)}
              className={`group relative flex-1 overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-out h-[180px] md:h-auto ${
                isActive ? "md:flex-[3]" : "md:flex-1"
              }`}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className={imgClasses}
              />

              <div
                className={`absolute inset-0 transition-colors duration-500 ${
                  isActive
                    ? "bg-black/20"
                    : "bg-[#131f27] group-hover:bg-[#1a2b35]"
                }`}
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="flex md:hidden items-start gap-4 p-6 h-full relative z-10">
                <div className="w-10 h-10 rounded-full border border-[#a28468]/30 bg-black/20 flex items-center justify-center text-[#a28468] flex-shrink-0">
                  {iconMap[item.icon]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-playfair text-xl text-[#FDFBF7] tracking-tight truncate pr-4">
                      {item.title}
                    </h3>
                    <span className="font-playfair text-2xl text-[#a28468]/30 font-light flex-shrink-0">
                      0{i + 1}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed text-[#FDFBF7]/40 overflow-hidden transition-all duration-500 ${
                      isActive
                        ? "max-h-24 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>

              <div
                className="hidden md:flex relative z-10 h-full flex-col items-center p-8 pt-10 transition-all duration-700"
                style={{ justifyContent: isActive ? "flex-end" : "center" }}
              >
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap transition-all duration-300 pointer-events-none ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="font-playfair text-xl lg:text-2xl text-white/20 group-hover:text-white/40 tracking-wider transition-colors">
                    {item.title}
                  </span>
                </div>

                <div
                  className={`absolute top-6 right-6 transition-opacity ${
                    isActive ? "opacity-50" : "opacity-30"
                  }`}
                >
                  <span className="font-playfair text-4xl text-[#a28468] font-light">
                    0{i + 1}
                  </span>
                </div>

                <div
                  className={`w-full transition-all duration-500 delay-200 pb-8 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full border border-[#a28468]/30 bg-black/30 backdrop-blur-sm flex items-center justify-center text-[#a28468] mb-5 transition-transform duration-500 ${
                      isActive ? "translate-x-0" : "-translate-x-2"
                    }`}
                  >
                    {iconMap[item.icon]}
                  </div>

                  <h3 className="font-playfair text-2xl md:text-3xl text-[#FDFBF7] mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-[#FDFBF7]/40 text-sm leading-relaxed max-w-sm">
                    {item.desc}
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
