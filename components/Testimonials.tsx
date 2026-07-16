"use client";

import { useState } from "react";

export default function Testimonials({ data }: any) {
  const [active, setActive] = useState(0);

  if (!data || !data.testimonialsItems) return null;
  const items = data.testimonialsItems;

  const getClasses = (i: number) => {
    const diff = i - active;
    let mobile = "opacity-0 scale-95 z-0 pointer-events-none";
    if (diff === 0)
      mobile = "opacity-100 translate-x-0 scale-100 z-20 pointer-events-auto";
    else if (diff > 0)
      mobile = "opacity-0 translate-x-full scale-95 z-10 pointer-events-none";
    else if (diff < 0)
      mobile = "opacity-0 -translate-x-full scale-95 z-10 pointer-events-none";

    let desktop =
      "md:opacity-0 md:scale-75 md:z-[-1] md:pointer-events-none md:translate-x-0";
    if (diff === 0)
      desktop =
        "md:opacity-100 md:scale-100 md:translate-x-0 md:z-20 md:pointer-events-auto";
    else if (diff === -1)
      desktop =
        "md:opacity-40 md:scale-[0.92] md:-translate-x-[55%] md:z-10 md:pointer-events-auto";
    else if (diff === 1)
      desktop =
        "md:opacity-40 md:scale-[0.92] md:translate-x-[55%] md:z-10 md:pointer-events-auto";
    else if (diff === -2)
      desktop =
        "md:opacity-15 md:scale-[0.85] md:-translate-x-[95%] md:z-0 md:pointer-events-none";
    else if (diff === 2)
      desktop =
        "md:opacity-15 md:scale-[0.85] md:translate-x-[95%] md:z-0 md:pointer-events-none";

    return `${mobile} ${desktop}`;
  };

  return (
    <section className="relative pt-24 pb-28 px-6 md:px-12 bg-[#0a1218] overflow-hidden">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
            {data.testimonialsLabel}
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-[#FDFBF7] leading-tight">
            {data.testimonialsTitle}
          </h2>
        </div>

        <div className="relative h-[360px] md:h-[300px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {items.map((item: any, i: any) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`absolute w-[88%] md:w-[420px] p-6 md:p-8 bg-[#0e1c22] rounded-sm cursor-pointer transition-all duration-500 ease-out text-left border ${
                  i === active
                    ? "border-[#a28468]/20 shadow-xl shadow-black/30"
                    : "border-white/[0.04]"
                } ${getClasses(i)}`}
              >
                <span className="font-playfair text-2xl text-[#a28468]/20 leading-none block mb-3">
                  &ldquo;
                </span>
                <p className="text-[#FDFBF7]/40 text-sm leading-relaxed mb-6 line-clamp-4 md:line-clamp-3">
                  {item.content}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#FDFBF7]/60 text-sm">{item.name}</p>
                    <p className="text-[#a28468]/30 text-[10px] tracking-[0.15em] uppercase mt-0.5">
                      {item.role}
                    </p>
                  </div>
                  <span className="font-playfair text-3xl text-[#a28468]/[0.08]">
                    0{i + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 mt-8 md:mt-6">
          <button
            onClick={() =>
              setActive((active - 1 + items.length) % items.length)
            }
            className="w-11 h-11 md:w-10 md:h-10 rounded-full border border-[#FDFBF7]/[0.08] flex items-center justify-center text-[#FDFBF7]/20 hover:border-[#a28468]/30 hover:text-[#a28468]/60 transition-all duration-300 active:scale-90"
            aria-label="Poprzednia"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <span className="font-playfair text-sm text-[#FDFBF7]/20 min-w-[60px] text-center">
            <span className="text-[#a28468]/60">0{active + 1}</span>
            <span className="mx-1.5 text-[#FDFBF7]/10">/</span>0{items.length}
          </span>

          <button
            onClick={() => setActive((active + 1) % items.length)}
            className="w-11 h-11 md:w-10 md:h-10 rounded-full border border-[#FDFBF7]/[0.08] flex items-center justify-center text-[#FDFBF7]/20 hover:border-[#a28468]/30 hover:text-[#a28468]/60 transition-all duration-300 active:scale-90"
            aria-label="Następna"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
