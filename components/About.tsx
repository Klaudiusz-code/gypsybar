"use client";

import { useState } from "react";

export default function About() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section className="relative py-16 md:py-32 px-6 md:px-12 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-[400px] md:h-[600px]">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-[#1b3745]/10 bg-[#1b3745]">
            <video
              autoPlay
              loop
              muted={!hasInteracted || isMuted}
              playsInline
              poster="/about.jpg"
              className="w-full h-full object-cover object-center"
            >
              <source src="/gypsy.mp4" type="video/mp4" />
              Twoja przeglądarka nie obsługuje tagu wideo.
            </video>

            <div className="absolute inset-0 rounded-2xl border-[5px] border-[#a28468]/25 pointer-events-none z-10"></div>

            {!hasInteracted && (
              <div
                onClick={() => setHasInteracted(true)}
                className="absolute inset-0 z-20 bg-[#1b3745]/50 backdrop-blur-[3px] rounded-2xl flex flex-col items-center justify-center cursor-pointer group transition-all duration-300"
              >
                {/* Ikona Play */}
                <div className="w-20 h-20 rounded-full border-2 border-[#a28468] flex items-center justify-center mb-5 group-hover:bg-[#a28468]/20 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#a28468"
                    className="w-8 h-8 ml-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white/80 text-[10px] tracking-[0.3em] uppercase font-medium">
                  Kliknij, aby odtworzyć z dźwiękiem
                </p>
              </div>
            )}

            {hasInteracted && (
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:bg-black/60 hover:text-white transition-all duration-300"
                aria-label={isMuted ? "Włącz dźwięk" : "Wyłącz dźwięk"}
              >
                {isMuted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                    <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>

        <div>
          <p className="text-[#a28846] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
            Kim jestem?
          </p>

          <h2 className="font-playfair text-4xl md:text-6xl text-[#1b3745] leading-[1.1] mb-8">
            Pasjonat, nie tylko{" "}
            <span className="text-[#a28468]/60 italic font-light">barman.</span>
          </h2>

          <div className="w-10 h-[2px] bg-[#a28468]/30 mb-8"></div>

          <div className="space-y-5 text-[#1b3745]/50 text-sm leading-relaxed">
            <p>
              Cześć, jestem Gypsy (założyciel Gypsy&apos;s). Moją misją jest
              udowodnić, że barman to nie tylko osoba, która nalewa alkohol – to
              osoba, która tworzy atmosferę i dba o każdy, nawet najmniejszy
              detal Twojej imprezy.
            </p>
            <p className="text-[#1b3745]/20 text-[10px] tracking-widest uppercase mt-2">
              Zrezygnowałem z pracy w korporacjach, żeby robić to, co naprawdę
              kocham. Przez ostatnie lata obsłużyłem setki wydarzeń, od
              kameralnych spotkań po wesela na 300 osób, ciągle szukając nowych
              smaków i inspiracji.
            </p>
          </div>

          <div className="flex gap-10 mt-12 pt-10 border-t border-[#1b3745]/10">
            <div>
              <span className="font-playfair text-4xl text-[#a28468] leading-none">
                10+
              </span>
              <p className="text-[#1b3745]/30 text-[10px] tracking-widest uppercase mt-1">
                Lat doświadczenia
              </p>
            </div>
            <div>
              <span className="font-playfair text-4xl text-[#a28468] leading-none">
                100%
              </span>
              <p className="text-[#1b3745]/30 text-[10px] tracking-widest uppercase mt-1">
                Własnych receptur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
