"use client";

import { useState } from "react";

export default function Gallery({ data, settings }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!data || !data.galleryItems?.nodes) return null;

  const videoSrc = data.filmZPracy?.node?.sourceUrl || "/gypsy.mp4";
  const titleWords = data.galleryTitle?.trim().split(/\s+/) || [];
  const lastTitleWord = titleWords.pop();

  const allImages = data.galleryItems.nodes;

  // ZMIANA: 5 zdjęć początkowych. Razem z filmikiem daje to 6 elementów (idealne dla 2 i 3 kolumn)
  const INITIAL_IMAGE_COUNT = 5;
  const hiddenImages = allImages.slice(INITIAL_IMAGE_COUNT);
  const hasMore = hiddenImages.length > 0;

  return (
    <section
      id="realizacje"
      className="relative pt-32 pb-32 px-6 md:px-12 bg-[#FDFBF7]"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#a28468] text-[10px] tracking-[0.5em] uppercase mb-6 font-medium">
            {data.galleryLabel}
          </p>

          <h2 className="font-playfair text-3xl md:text-6xl text-[#1b3745] leading-[1.1]">
            {titleWords.join(" ")}{" "}
            <span className="text-[#a28468]">{lastTitleWord}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {/* 1. FILMIK */}
          <div className="group relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-[6px] border-white bg-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#1b3745]/10 transition-all duration-500 ease-out hover:z-10 hover:scale-[1.03]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src={videoSrc}
            />

            <a
              href={settings?.socialMedia?.instagramUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 flex items-center gap-2.5 bg-black/40 backdrop-blur-sm rounded-full pl-4 pr-2.5 py-2 border border-white/20 hover:bg-white/40 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 C 16.448 6 16 6.448 16 7 C 16 7.552 16.448 8 17 8 C 17.552 8 18 7.552 18 7 C 18 6.448 17.552 6 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
              </svg>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#1b3745"
                  className="w-3.5 h-3.5 ml-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </div>

          {/* 2. PIERWSZE ZDJĘCIA (5 sztuk) */}
          {allImages
            .slice(0, INITIAL_IMAGE_COUNT)
            .map((img: any, i: number) => (
              <div
                key={`init-${i}`}
                className="group relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-[6px] border-white bg-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#1b3745]/10 transition-all duration-500 ease-out hover:z-10 hover:scale-[1.03]"
              >
                <img
                  src={img.sourceUrl}
                  alt={`Realizacja ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}

          {/* 3. ROZWIJANA RESZTA - PŁYNNA ANIMACJA */}
          {hasMore && (
            <div
              className="col-span-2 md:col-span-3 grid"
              // Zmuszamy przeglądarkę do płynnej animacji siatki
              style={{
                gridTemplateRows: isExpanded ? "1fr" : "0fr",
                transition: "grid-template-rows 700ms ease-out",
              }}
            >
              {/* Kluczowy element animacji height: 0 -> auto */}
              <div className="overflow-hidden" style={{ minHeight: 0 }}>
                <div
                  className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 pt-3 md:pt-8"
                  // Dodatkowy efekt: zdjęcia płynnie się wyłaniają z opóźnieniem
                  style={{
                    opacity: isExpanded ? 1 : 0,
                    transition: "opacity 500ms ease-out 200ms",
                  }}
                >
                  {hiddenImages.map((img: any, i: number) => (
                    <div
                      key={`more-${i}`}
                      className="group relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-[6px] border-white bg-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#1b3745]/10 transition-all duration-500 ease-out hover:z-10 hover:scale-[1.03]"
                    >
                      <img
                        src={img.sourceUrl}
                        alt={`Realizacja ${INITIAL_IMAGE_COUNT + i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PRZYCISK ROZWIJANIA */}
        {hasMore && (
          <div className="text-center mt-10 md:mt-14">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#a28468] text-[#a28468] rounded-full text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-[#a28468] hover:text-white hover:shadow-lg hover:shadow-[#a28468]/20"
            >
              {isExpanded ? "Zwiń galerię" : "Zobacz więcej realizacji"}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-4 h-4 transition-transform duration-500 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
