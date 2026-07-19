"use client";

import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

interface PackagesProps {
  data: any;
  settings: any;
}

export default function Packages({ data, settings }: PackagesProps) {
  const ContactList = ({ variant = "classic" }: { variant?: string }) => {
    const globalContact = settings?.globalSettingsV2 || settings;

    const whatsapp = globalContact?.whatsapp;
    const email = globalContact?.email;
    const instagram = globalContact?.socialMedia?.instagramUrl;

    return (
      <div className="space-y-0">
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between py-4 border-b border-white/[0.05] group transition-all duration-300 hover:pl-1"
        >
          <div className="flex items-center gap-4">
            <span className="text-[#25D366] transition-transform duration-300 group-hover:scale-110">
              <FaWhatsapp size={16} />
            </span>
            <span className="text-[#FDFBF7]/50 text-sm group-hover:text-[#FDFBF7]/90 transition-colors duration-300">
              WhatsApp
            </span>
          </div>
          <span className="text-[#FDFBF7]/15 group-hover:text-[#25D366] transition-all duration-300 group-hover:translate-x-1">
            <FaArrowRight size={12} />
          </span>
        </a>

        <a
          href={instagram || "#"}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between py-4 border-b border-white/[0.05] group transition-all duration-300 hover:pl-1"
        >
          <div className="flex items-center gap-4">
            <span className="text-[#E1306C] transition-transform duration-300 group-hover:scale-110">
              <FaInstagram size={16} />
            </span>
            <span className="text-[#FDFBF7]/50 text-sm group-hover:text-[#FDFBF7]/90 transition-colors duration-300">
              Instagram DM
            </span>
          </div>
          <span className="text-[#FDFBF7]/15 group-hover:text-[#E1306C] transition-all duration-300 group-hover:translate-x-1">
            <FaArrowRight size={12} />
          </span>
        </a>

        <a
          href={`mailto:${email}?subject=Zapytanie o pakiet ${
            variant === "fundamental"
              ? data.pakietFundamental.nazwaPakietu
              : data.pakietBasic.nazwaPakietu
          }`}
          className="flex items-center justify-between py-4 group transition-all duration-300 hover:pl-1"
        >
          <div className="flex items-center gap-4">
            <span className="text-[#a28468]/50 transition-transform duration-300 group-hover:scale-110">
              <FaEnvelope size={15} />
            </span>
            <span className="text-[#FDFBF7]/50 text-sm group-hover:text-[#FDFBF7]/90 transition-colors duration-300">
              E-mail
            </span>
          </div>
          <span className="text-[#FDFBF7]/15 group-hover:text-[#a28468] transition-all duration-300 group-hover:translate-x-1">
            <FaArrowRight size={12} />
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
      <div className="max-w-[1100px] mx-auto relative z-10">
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
            <p className="text-[#FDFBF7]/30 mt-3 text-sm max-w-md">
              {data.pakietBasic.podtytul}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-[#a28468] text-[10px] tracking-[0.2em] uppercase font-bold mb-8">
                {data.pakietBasic.tytulWCenieZawarte}
              </p>
              <ul className="space-y-5">
                {data.pakietBasic.coZawiera.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-sm text-[#FDFBF7]/40 leading-relaxed"
                  >
                    <span className="text-[#a28468]/40 mt-[-2px] text-lg font-light">
                      /
                    </span>
                    <span>{item.element}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center md:border-l md:border-white/[0.05] md:pl-12 lg:pl-20">
              <div className="mb-8">
                <p className="text-[#a28468] text-[10px] tracking-[0.2em] uppercase font-bold mb-4">
                  {data.pakietBasic.naglowekCta}
                </p>
                <p className="text-[#FDFBF7]/25 text-sm leading-relaxed">
                  {data.pakietBasic.opisCta}
                </p>
              </div>
              <ContactList variant="classic" />
            </div>
          </div>
        </div>

        <div className="relative bg-[#0e1c22] rounded-sm overflow-hidden shadow-2xl shadow-[#a28468]/[0.07] border border-[#a28468]/20 shadow-[inset_0_1px_0_0_rgba(162,132,104,0.2)]">
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
              <p className="text-[#FDFBF7]/30 text-xs sm:text-sm tracking-[0.15em] uppercase font-light max-w-xl mx-auto leading-relaxed">
                {data.pakietFundamental.podtytul}
              </p>
            </div>

            {/* Opis */}
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <p className="text-[#FDFBF7]/35 text-sm sm:text-base leading-[1.8] font-light">
                {data.pakietFundamental.description}
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 mb-20 md:mb-24">
              {data.pakietFundamental.cechyPakietu.map(
                (item: any, index: number) => (
                  <div key={index} className="group flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#a28468]/20 bg-[#a28468]/[0.05] flex items-center justify-center text-[#a28468]/40 group-hover:border-[#a28468]/50 group-hover:text-[#a28468]/80 group-hover:bg-[#a28468]/10 transition-all duration-500">
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

            <div className="max-w-md mx-auto w-full bg-white/[0.02] border border-white/[0.05] rounded-sm p-6 backdrop-blur-sm">
              <ContactList variant="fundamental" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
