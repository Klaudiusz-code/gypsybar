"use client";

import { useState, useEffect } from "react";
import { FaCocktail, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Menu({ data }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || !data.menuDrinks) return null;

  const menuImages =
    data.menuImage?.nodes?.map((node: any) => node.sourceUrl) || [];

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
    setActiveIndex((prev) => (prev + 1 >= menuImages.length ? 0 : prev + 1));
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 < 0 ? menuImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section
      id="menu"
      className="relative py-32 px-6 md:px-12 bg-[#FDFBF7] overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5">
            {data.menuLabel}
          </p>

          <h2 className="font-playfair text-4xl md:text-6xl text-[#1b3745]">
            {data.menuTitle.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-[#a28468]/60 italic">
              {data.menuTitle.split(" ").slice(-1)}
            </span>
          </h2>

          <p className="mt-12 font-playfair text-xl md:text-3xl  italic text-[#a28468]">
            {data.textAlco}
          </p>
        </div>

        <div>
          {data.menuDrinks.map((drink: any, index: number) => (
            <div
              key={index}
              className="flex justify-between items-center py-10 border-b border-[#1b3745]/10 group"
            >
              <div className="flex gap-6">
                <span className="font-playfair text-2xl text-[#a28468]/30">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="font-playfair text-2xl text-[#1b3745] group-hover:text-[#a28468] transition">
                    {drink.drinkName}
                  </h3>

                  <p className="text-sm text-[#1b3745]/40 mt-2">
                    {drink.drinkDescription}
                  </p>
                </div>
              </div>

              <FaCocktail className="text-[#a28468]" />
            </div>
          ))}
        </div>

        <p className="mt-12 font-playfair text-xl md:text-3xl text-center italic text-[#a28468]">
          {data.kartaDopasowanaDoWas}
        </p>
        {menuImages.length > 0 && (
          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {menuImages.map((img: string, index: number) => (
                <div
                  key={index}
                  onClick={() => openModal(index)}
                  className="aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer group"
                >
                  <img
                    src={img}
                    alt={`Menu koktajli ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#0a1218]/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white"
          >
            <FaXmark size={25} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-5 text-white"
          >
            <FaChevronLeft size={30} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl flex flex-col items-center"
          >
            <img
              src={menuImages[activeIndex]}
              alt="Menu"
              className="max-h-[80vh] rounded-xl object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-5 text-white"
          >
            <FaChevronRight size={30} />
          </button>
        </div>
      )}
    </section>
  );
}
