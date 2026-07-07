"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    q: "Czy w cenie pakietu jest alkohol?",
    a: "Nie, ceny pakietów dotyczą samej obsługi barmańskiej, sprzętu i składników bezalkoholowych/mixersów. Alkohol dokupujemy zgodnie z Twoim budżetem i preferencjami, dzięki czemu nie przepłacasz w sklepie.",
  },
  {
    q: "Do jakiego obszaru dojeżdżacie?",
    a: "Działamy na terenie całej Polski oraz za granicą (Niemcy, Czechy). Przy rezerwacjach spoza województwa dolnośląskiego doliczamy koszty dojazdu i noclegu, które ustalamy indywidualnie.",
  },
  {
    q: "Jak wygląda kwestia (szkła) i sprzętu?",
    a: "Przyjeżdżamy na Fully Equipped. Zabieramy profesjonalne shakery, jiggery, sitka, lód w ilościach hurtowych oraz piękne, krystaliczne szkło (coupe, highball, rocks). Nie musisz o nic się martwić.",
  },
  {
    q: "Czy można złożyć własne menu koktajlowe?",
    a: "Oczywiście! Bardzo chętnie współpracujemy z Parami Młodymi, które chcą stworzyć drinka inspirowanego ich historią miłosną. Przygotujemy próby i dopracujemy smak przed wielkim dniem.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative pt-32 pb-32 px-6 md:px-12 bg-[#FDFBF7]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
            Pytania
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-[#1b3745] leading-tight">
            Często zadawane{" "}
            <span className="text-[#a28468]/50 italic font-light">pytania</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-[#1b3745]/10">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-[#1b3745] text-base md:text-lg font-playfair pr-8 group-hover:text-[#a28468] transition-colors">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#1b3745]/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? "bg-[#a28468] border-[#a28468] text-white" : "text-[#a28468]/30 group-hover:border-[#a28468]/30"}`}
                  >
                    {isOpen ? <FaMinus size={10} /> : <FaPlus size={10} />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-[#1b3745]/40 text-sm leading-relaxed">
                    {item.a}
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
