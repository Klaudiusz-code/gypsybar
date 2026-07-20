"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Gallery({ data, settings }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "pl";

  const t = {
    pl: {
      realization: "Realizacja",
      more: "Zobacz więcej realizacji",
      collapse: "Zwiń galerię",
    },
    en: {
      realization: "Project",
      more: "See more projects",
      collapse: "Collapse gallery",
    },
  }[lang];

  if (!data || !data.galleryItems?.nodes) return null;

  const videoSrc = data.filmZPracy?.node?.sourceUrl || "/gypsy.mp4";

  const titleWords = data.galleryTitle?.trim().split(/\s+/) || [];
  const lastTitleWord = titleWords.pop();

  const allImages = data.galleryItems.nodes;

  const INITIAL_IMAGE_COUNT = 5;
  const hiddenImages = allImages.slice(INITIAL_IMAGE_COUNT);
  const hasMore = hiddenImages.length > 0;

  return (
    <section
      id="realizacje"
      className="relative pt-32 pb-32 px-6 md:px-12 bg-[#FDFBF7]"
    >
      <div className="max-w-6xl mx-auto">
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
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H8zm8 2c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h8z" />
              </svg>

              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <svg
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

          {allImages
            .slice(0, INITIAL_IMAGE_COUNT)
            .map((img: any, i: number) => (
              <div
                key={`init-${i}`}
                className="group relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-[6px] border-white bg-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#1b3745]/10 transition-all duration-500 ease-out hover:z-10 hover:scale-[1.03]"
              >
                <img
                  src={img.sourceUrl}
                  alt={`${t.realization} ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}

          {hasMore && (
            <div
              className="col-span-2 md:col-span-3 grid"
              style={{
                gridTemplateRows: isExpanded ? "1fr" : "0fr",
                transition: "grid-template-rows 700ms ease-out",
              }}
            >
              <div className="overflow-hidden" style={{ minHeight: 0 }}>
                <div
                  className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 pt-3 md:pt-8"
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
                        alt={`${t.realization} ${INITIAL_IMAGE_COUNT + i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {hasMore && (
          <div className="text-center mt-10 md:mt-14">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#a28468] text-[#a28468] rounded-full text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-[#a28468] hover:text-white"
            >
              {isExpanded ? t.collapse : t.more}

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
