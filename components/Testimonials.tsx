"use client";

import { useState, useEffect, useRef } from "react";

const highlightText = (text: string) => {
  return text.replace(
    /\*(.*?)\*/g,

    '<span class="text-[#d4b896]">$1</span>'
  );
};

const TestimonialCard = ({ item, isFeatured }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [maxHeight, setMaxHeight] = useState("80px"); 
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const fullHeight = textRef.current.scrollHeight;
      setShowButton(fullHeight > 82); 
      
      if (isExpanded) {
        setMaxHeight(`${fullHeight}px`);
      } else {
        setMaxHeight("80px");
      }
    }
  }, [isExpanded, item.content]);

  return (
    <div
      className={`group relative p-8 md:p-10 bg-[#0e1c22] rounded-sm border transition-all duration-500 hover:border-[#a28468]/20 ${
        isFeatured
          ? "md:col-span-2 md:flex md:items-center md:gap-12 border-[#a28468]/10"
          : "border-white/[0.04]"
      }`}
    >
      <span className="absolute top-4 right-6 font-playfair text-6xl md:text-8xl text-[#a28468]/[0.04] leading-none select-none pointer-events-none">
        &ldquo;
      </span>

      <div
        className={`flex gap-1 text-[#a28468]/40 mb-4 ${isFeatured ? "md:mb-0 md:shrink-0" : ""}`}
      >
        {[...Array(5)].map((_, index) => (
          <StarIcon key={index} className="w-3.5 h-3.5" />
        ))}
      </div>

      <div className={isFeatured ? "md:flex-1" : ""}>
        <div
          ref={textRef}
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: maxHeight }}
        >
          <p
            className={`text-[#FDFBF7]/40 text-sm leading-[1.8] mb-6 ${
              isFeatured ? "md:text-base" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: highlightText(item.content) }}
          />
        </div>

        {showButton && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-[#a28468]/50 hover:text-[#a28468] transition-all duration-300 mb-6 group/btn"
          >
            <span>{isExpanded ? "Zwiń" : "Czytaj całość"}</span>
            <svg
              className={`w-3 h-3 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        )}

        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#FDFBF7]/70 text-sm font-medium">{item.name}</p>
            <p className="text-[#a28468]/40 text-[10px] tracking-[0.2em] uppercase mt-1">
              {item.role}
            </p>
          </div>

          {!isFeatured && (
            <svg className="w-4 h-4 text-[#FDFBF7]/10" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Testimonials({ data }: any) {
  if (!data || !data.testimonialsItems) return null;
  const items = data.testimonialsItems;
  const googleButton = data.przycisk;

  return (
    <section className="relative pt-24 pb-28 px-6 md:px-12 bg-[#0a1218] overflow-hidden">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
            {data.testimonialsLabel}
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-[#FDFBF7] leading-tight">
            {data.testimonialsTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16 md:mb-20">
          {items.map((item: any, i: any) => (
            <TestimonialCard key={i} item={item} isFeatured={i === 0} />
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 md:p-10 border border-white/[0.05] rounded-sm bg-white/[0.01]">
            <div className="flex gap-1.5 text-[#a28468]">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5" />
              ))}
            </div>

            <p className="text-[#FDFBF7]/50 text-sm font-light tracking-wide">
              {data.przycisk?.liczbaOpini}
            </p>

            {googleButton?.linkDoOpiniGoogle && (
              <a
                href={googleButton.linkDoOpiniGoogle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-6 px-8 py-4 rounded-full bg-[#a28468] text-[#0a1218] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#c4a882] transition-all"
              >
                {googleButton.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clipRule="evenodd"
    />
  </svg>
);