"use client";

import { FaCocktail } from "react-icons/fa";
import { packages } from "@/lib/data";

export default function Packages() {
  return (
    <section
      id="pakiety"
      className="relative pt-24 pb-24 px-5 md:px-12 bg-[#0a1218] overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
            Pakiety
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-[#FDFBF7] leading-tight">
            Prywatny{" "}
            <span className="text-[#a28468]/50 italic font-light">barman</span>
          </h2>
          <p className="text-[#FDFBF7]/20 mt-4 max-w-sm mx-auto text-sm leading-relaxed">
            Jeden profesjonalista, który wziąje na siebie całą odpowiedzialność
            za bar na Twoim evencie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-stretch">
          {packages.map((pkg, i) => {
            const isHighlighted = pkg.highlight;

            return (
              <div
                key={i}
                className={`relative flex flex-col transition-all duration-500 p-5 md:p-8 rounded-sm ${
                  isHighlighted
                    ? "bg-[#FDFBF7] border-2 border-[#a28468] shadow-2xl shadow-black/60 md:-mt-4 md:mb-[-16px] md:py-12 z-10"
                    : "bg-[#0e1c22] border border-white/[0.05] hover:border-[#a28468]/20 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]"
                }`}
              >
                {isHighlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0e1c22] text-[#a28468] text-[10px] font-bold px-6 py-1.5 rounded-sm tracking-[0.2em] uppercase border border-[#a28468]/30 whitespace-nowrap">
                    House Special
                  </span>
                )}

                <p
                  className={`text-[10px] mb-5 uppercase tracking-[0.em] font-medium ${
                    isHighlighted ? "text-[#a28468]/70" : "text-[#FDFBF7]/15"
                  }`}
                >
                  {pkg.desc}
                </p>

                <h3
                  className={`font-playfair text-3xl font-bold mb-3 tracking-tight ${
                    isHighlighted ? "text-[#1b3745]" : "text-[#FDFBF7]/80"
                  }`}
                >
                  {pkg.name}
                </h3>

                <div className="mb-8">
                  <span
                    className={`text-4xl font-playfair tracking-tight ${
                      isHighlighted ? "text-[#a28468]" : "text-[#FDFBF7]/60"
                    }`}
                  >
                    {pkg.price}
                  </span>
                </div>

                <div
                  className={`w-full h-px mb-8 ${
                    isHighlighted ? "bg-[#a28468]/20" : "bg-white/[0.05]"
                  }`}
                ></div>

                <ul className="space-y-4 mb-10 flex-grow font-light">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-[-2px] text-lg leading-none ${
                          isHighlighted
                            ? "text-[#a28468]/50"
                            : "text-[#a28468]/20"
                        }`}
                      >
                        /
                      </span>
                      <span
                        className={`leading-relaxed ${
                          isHighlighted
                            ? "text-[#1b3745]/60"
                            : "text-[#FDFBF7]/25"
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`group flex items-center justify-center gap-2 py-4 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500 ${
                    isHighlighted
                      ? "bg-[#1b3745] text-[#FDFBF7] hover:bg-[#a28468] hover:text-white"
                      : "border border-[#FDFBF7]/10 text-[#FDFBF7]/40 hover:border-[#a28468] hover:text-[#a28468]"
                  }`}
                >
                  <FaCocktail
                    size={12}
                    className="opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                  Wybieram
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
