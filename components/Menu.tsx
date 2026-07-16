"use client";

import { useState, useEffect } from "react";
import { FaCocktail, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Menu({ data }: any) {
  if (!data || !data.menuDrinks) return null;

  const menuImages =
    data.menuImage?.nodes?.map((node: any) => node.sourceUrl) || [];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % menuImages.length);
  };

  const goPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + menuImages.length) % menuImages.length,
    );
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="menu"
      className="relative py-32 px-6 md:px-12 bg-[#FDFBF7] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a28468]/[0.03] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
            {data.menuLabel}
          </p>

          <h2 className="font-playfair text-4xl md:text-6xl text-[#1b3745] leading-tight">
            {data.menuTitle.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-[#a28468]/50 italic font-light">
              {data.menuTitle.split(" ").slice(-1)}
            </span>
          </h2>

          <div className="mt-12 md:mt-16">
            <span className="inline-block w-12 h-[1px] bg-[#a28468]/30 mb-8"></span>
            <p className="font-playfair text-[28px] md:text-[40px] lg:text-[48px] text-[#a28468] leading-[1.2] italic max-w-4xl mx-auto">
              {data.textAlco}
            </p>
            <span className="inline-block w-12 h-[1px] bg-[#a28468]/30 mt-8"></span>
          </div>
        </div>

        <div className="space-y-0">
          {data.menuDrinks.map((drink: any, i: any) => (
            <div
              key={i}
              className="group relative flex justify-between items-center py-10 md:py-12 px-6 hover:px-8 border-b border-[#1b3745]/[0.06] hover:border-[#a28468]/20 transition-all duration-500 cursor-default"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none select-none">
                <span className="font-playfair text-[8rem] md:text-[12rem] leading-none text-[#a28468]/[0.04] font-bold">
                  0{i + 1}
                </span>
              </div>

              <div className="flex items-center gap-6 md:gap-10 relative z-10">
                <span className="font-playfair text-2xl md:text-3xl font-light text-[#a28468]/20 group-hover:text-[#a28468]/60 transition-colors duration-500 w-10 md:w-16">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl text-[#1b3745] group-hover:text-[#a28468] transition-colors duration-500 font-playfair tracking-tight">
                    {drink.drinkName}
                  </h3>
                  <p className="text-sm text-[#1b3745]/30 mt-1.5 max-w-md leading-relaxed group-hover:text-[#1b3745]/50 transition-colors duration-500">
                    {drink.drinkDescription}
                  </p>
                </div>
              </div>

              <div className="relative z-10 w-11 h-11 border border-[#1b3745]/10 rounded-full flex items-center justify-center text-[#1b3745]/20 group-hover:border-[#a28468] group-hover:text-[#a28468] group-hover:bg-[#a28468]/[0.05] transition-all duration-500 flex-shrink-0">
                <FaCocktail size={14} />
              </div>
            </div>
          ))}
        </div>

        {menuImages.length > 0 && (
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {menuImages.map((imgSrc: string, i: number) => (
              <div
                key={i}
                onClick={() => openModal(i)}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white shadow-sm hover:shadow-xl hover:shadow-[#1b3745]/10 transition-all duration-500 hover:-translate-y-1 cursor-zoom-in"
              >
                <img
                  src={imgSrc}
                  alt={`Przykładowe menu ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1b3745]/0 group-hover:bg-[#1b3745]/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-white/80 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1.1 1.1 3.4-2.9c.9.6 1.9.9 3 .9 3 0 5.5-2.5 5.5-5.5S16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className={`fixed inset-0 z-[100] bg-[#0a1218]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeModal}
      >
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 z-[110] w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-[#a28468] hover:border-[#a28468]/40 transition-all duration-300"
          aria-label="Zamknij"
        >
          <FaXmark size={18} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-4 md:left-8 z-[110] w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-[#a28468] hover:border-[#a28468]/40 transition-all duration-300"
          aria-label="Poprzednie"
        >
          <FaChevronLeft size={14} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-4 md:right-8 z-[110] w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-[#a28468] hover:border-[#a28468]/40 transition-all duration-300"
          aria-label="Następne"
        >
          <FaChevronRight size={14} />
        </button>

        <div
          className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={menuImages[activeIndex]}
            alt={`Menu koktajli - rozszerzenie`}
            className="max-h-[90vh] w-auto max-w-full object-contain rounded-lg shadow-2xl shadow-black/50 transition-all duration-300"
          />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-[110]">
          {menuImages.map((_: string, i: number) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-[#a28468] scale-110"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Idź do menu ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
