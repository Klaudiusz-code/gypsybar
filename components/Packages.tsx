"use client";

import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

interface PackagesProps {
  data: any;
}

export default function Packages({ data }: PackagesProps) {
  const ContactList = ({ variant = "classic" }) => {
    const cta = data.pakietBasic.cta[0];

    return (
      <div className="border-t border-white/[0.05] pt-6 space-y-0">
        <a
          href={cta.whatshapp.linkDoWhatshapa}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between py-3.5 border-b border-white/[0.03] group"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#25D366]">
              <FaWhatsapp size={16} />
            </span>
            <span className="text-[#FDFBF7]/50 text-sm group-hover:text-[#FDFBF7]/80 transition-colors">
              WhatsApp
            </span>
          </div>
          <span className="text-[#FDFBF7]/20 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all text-xs">
            <FaArrowRight />
          </span>
        </a>

        <a
          href={cta.instagram.linkDoInsta}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between py-3.5 border-b border-white/[0.03] group"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#E1306C]">
              <FaInstagram size={16} />
            </span>
            <span className="text-[#FDFBF7]/50 text-sm group-hover:text-[#FDFBF7]/80 transition-colors">
              Instagram DM
            </span>
          </div>
          <span className="text-[#FDFBF7]/20 group-hover:text-[#E1306C] group-hover:translate-x-1 transition-all text-xs">
            <FaArrowRight />
          </span>
        </a>

        <a
          href={`mailto:${cta.email}?subject=Zapytanie o pakiet ${
            variant === "fundamental"
              ? data.pakietFundamental.nazwaPakietu
              : data.pakietBasic.nazwaPakietu
          }`}
          className="flex items-center justify-between py-3.5 group"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#a28468]/60">
              <FaEnvelope size={15} />
            </span>
            <span className="text-[#FDFBF7]/50 text-sm group-hover:text-[#FDFBF7]/80 transition-colors">
              E-mail
            </span>
          </div>
          <span className="text-[#FDFBF7]/20 group-hover:text-[#a28468]/60 group-hover:translate-x-1 transition-all text-xs">
            <FaArrowRight />
          </span>
        </a>
      </div>
    );
  };

  return (
    <section
      id="pakiety"
      className="relative pt-32 pb-32 px-5 md:px-12 bg-[#0a1218] overflow-hidden"
    >
      {/* NAPRAWIONY BŁĄD: Dodano brakujące <div> */}
      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20 md:mb-28">
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-6 font-medium">
            {data.malyNaglowek}
          </p>
          <h2 className="font-playfair text-4xl md:text-6xl text-[#FDFBF7] leading-tight">
            {data.tytulPakietow
              ?.split(" ")
              .map((word: string, index: number, array: string[]) => (
                <span
                  key={index}
                  className={index === array.length - 1 ? "text-[#a28468]" : ""}
                >
                  {word}{" "}
                </span>
              ))}
          </h2>
        </div>

        <div className="bg-[#0e1c22] border border-white/[0.05] p-8 md:p-12 rounded-sm mb-8 shadow-2xl shadow-black/30">
          <div className="mb-12 border-b border-white/[0.05] pb-8">
            <h3 className="font-playfair text-4xl md:text-5xl text-[#FDFBF7]/90 tracking-tight">
              {data.pakietBasic.nazwaPakietu}
            </h3>
            <p className="text-[#FDFBF7]/30 mt-3 text-sm">
              {data.pakietBasic.podtytul}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            <div>
              <p className="text-[#a28468] text-[10px] tracking-[0.2em] uppercase font-bold mb-6">
                {data.pakietBasic.tytulWCenieZawarte}
              </p>
              <ul className="space-y-4">
                {data.pakietBasic.coZawiera.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-sm text-[#FDFBF7]/40 leading-relaxed"
                  >
                    <span className="text-[#a28468]/50 mt-[-2px] text-base">
                      /
                    </span>
                    {item.element}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#a28468] text-[10px] tracking-[0.2em] uppercase font-bold mb-6">
                {data.pakietBasic.tytulWybrorKoktajli}
              </p>
              <div className="space-y-5">
                {data.pakietBasic.menuDrinkow.map(
                  (item: any, index: number) => (
                    <div key={index} className="group">
                      <p className="text-[#FDFBF7]/60 text-xs font-medium tracking-wide border-b border-white/[0.05] pb-2 group-hover:border-[#a28468]/30 transition-colors">
                        {item.bazaAlkholu}
                      </p>
                      <p className="text-[#FDFBF7]/25 text-xs mt-2 leading-relaxed">
                        {item.drinki}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[#a28468] text-[10px] tracking-[0.2em] uppercase font-bold mb-4">
                  {data.pakietBasic.naglowekCta}
                </p>
                <p className="text-[#FDFBF7]/25 text-sm leading-relaxed mb-8">
                  {data.pakietBasic.opisCta}
                </p>
              </div>
              <ContactList variant="classic" />
            </div>
          </div>
        </div>

        <div className="relative bg-[#0e1c22] rounded-sm mb-24 overflow-hidden shadow-2xl shadow-[#a28468]/[0.07] border border-[#a28468]/20 shadow-[inset_0_1px_0_0_rgba(162,132,104,0.2)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#a28468]/[0.08] rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[200px] bg-[#a28468]/[0.04] rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20">
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-block bg-[#a28468]/10 text-[#a28468] text-[10px] px-6 py-1.5 tracking-[0.25em] uppercase mb-8 border border-[#a28468]/20 backdrop-blur-sm">
                Bestseller
              </span>
              <h3 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-[#FDFBF7] mb-6 leading-[1.05] tracking-tight">
                {data.pakietFundamental.nazwaPakietu}
              </h3>
              <div className="w-16 h-[1px] bg-[#a28468]/30 mx-auto mb-6"></div>
              <p className="text-[#FDFBF7]/30 text-xs sm:text-sm tracking-[0.2em] uppercase font-light max-w-xl mx-auto leading-relaxed">
                {data.pakietFundamental.podtytul}
              </p>
            </div>

            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <p className="text-[#FDFBF7]/35 text-sm sm:text-base leading-relaxed font-light">
                {data.pakietFundamental.description}
              </p>
            </div>

            {/* CECHY */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-16 md:mb-20">
              {data.pakietFundamental.cechyPakietu.map(
                (item: any, index: number) => (
                  <div key={index} className="group flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#a28468]/20 bg-[#a28468]/[0.05] flex items-center justify-center text-[#a28468]/40 group-hover:border-[#a28468]/50 group-hover:text-[#a28468]/70 transition-all duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#FDFBF7]/70 text-sm font-medium mb-1.5 group-hover:text-[#a28468] transition-colors duration-500">
                        {item.cecha}
                      </p>
                      <p className="text-[#FDFBF7]/20 text-xs leading-relaxed">
                        {item.opis}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>

            <div className="max-w-2xl mx-auto mb-14 text-center">
              <div className="inline-flex flex-wrap justify-center items-center gap-x-4 gap-y-2 font-playfair text-[#FDFBF7]/25 text-sm tracking-[0.15em]">
                {data.pakietFundamental.liczbaGosci.map(
                  (item: any, index: number) => (
                    <span key={index}>
                      {index !== 0 && (
                        <span className="text-[#a28468]/20 mx-4 hidden sm:inline">
                          —
                        </span>
                      )}
                      {item.liczba >= 200
                        ? `Powyżej ${item.liczba} osób`
                        : `Do ${item.liczba} osób`}
                    </span>
                  ),
                )}
              </div>
              <p className="text-[#a28468]/30 text-[10px] tracking-[0.2em] uppercase mt-4 font-medium">
                {data.pakietFundamental.pricingNote}
              </p>
            </div>

            <div className="max-w-sm mx-auto w-full">
              <ContactList variant="fundamental" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-6 mb-10">
            <div className="h-px flex-grow bg-white/[0.05]" />
            <p className="text-[#FDFBF7]/20 text-[10px] uppercase tracking-[0.3em] font-medium">
              {data.naglowekDodatkow}
            </p>
            <div className="h-px flex-grow bg-white/[0.05]" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {data.listaDodatkow.map((item: any, index: number) => (
              <div
                key={index}
                className="group bg-[#0e1c22] border border-white/[0.05] p-8 hover:border-[#a28468]/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
              >
                <h4 className="text-[#FDFBF7]/70 text-base font-playfair mb-4 group-hover:text-[#a28468] transition-colors">
                  {item.nazwaDodatku}
                </h4>
                <p className="text-[#FDFBF7]/20 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
