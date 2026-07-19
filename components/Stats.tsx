"use client";

import { usePathname } from "next/navigation";

export default function Stats({ data }: any) {
  const pathname = usePathname();

  if (!data || !data.statsItems) return null;

  const isEnglish =
    pathname === "/en" || pathname.startsWith("/en/");

  return (
    <div className="relative z-40 bg-[#FDFBF7] py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#a28468]/15">
          {data.statsItems.map((stat: any, i: number) => {
            const isLast = i === data.statsItems.length - 1;

            return (
              <div
                key={i}
                className="relative flex flex-col items-center text-center group lg:px-6"
              >
                <span className="relative font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1b3745] font-light tracking-tight leading-none">
                  {stat.highlight}
                </span>

                <span className="relative text-[#1b3745]/25 text-[8px] md:text-[9px] tracking-[0.2em] uppercase mt-2">
                  {stat.label}
                </span>

                {isLast && (
                  <a
                    href="https://share.google/f5C5DdSvH35VP6s2h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[8px] md:text-[9px] tracking-[0.15em] uppercase font-medium text-[#a28468]/50 group-hover:text-[#a28468] transition-colors duration-300"
                  >
                    <span>
                      {isEnglish ? "See reviews" : "Zobacz opinie"}
                    </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}