"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Faq({ data }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!data || !data.faqItems) return null;

  return (
    <section className="relative pt-32 pb-32 px-6 md:px-12 bg-[#FDFBF7]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
            {data.faqLabel}
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-[#1b3745] leading-tight">
           {data.faqTitle}
          </h2>
        </div>

        <div className="space-y-4">
          {data.faqItems.map((item: any, i: any) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-[#1b3745]/10">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-[#1b3745] text-base md:text-lg font-playfair pr-8 group-hover:text-[#a28468] transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#1b3745]/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#a28468] border-[#a28468] text-white"
                        : "text-[#a28468]/30 group-hover:border-[#a28468]/30"
                    }`}
                  >
                    {isOpen ? <FaMinus size={10} /> : <FaPlus size={10} />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#1b3745]/40 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
