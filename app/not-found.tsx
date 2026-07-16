"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const content = {
  pl: {
    title: [
      "Strona nie została",
      <br />,
      <span className="text-[#a28468]/40 italic font-light">odnaleziona.</span>,
    ],
    body: "Prawdopodobnie taki koktajl nie istnieje na tym adresie. Zmień link lub wróć na stronę główną.",
    btn: "Powrót do strony głównej",
  },
  en: {
    title: [
      "Page not",
      <br />,
      <span className="text-[#a28468]/40 italic font-light">found.</span>,
    ],
    body: "Such a cocktail doesn't exist at this address. Change the link or return to the homepage.",
    btn: "Back to homepage",
  },
};

export default function Custom404() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "pl";
  const t = content[lang];

  return (
    <section className="relative min-h-screen bg-[#0a1218] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-playfair text-[30vw] md:text-[200px] lg:text-[280px] leading-none text-[#FDFBF7]/[0.02] font-bold uppercase tracking-[0.15em]">
          404
        </span>
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg">
        <div className="w-12 h-px bg-[#a28468]/30 mx-auto mb-10"></div>

        <h1 className="font-playfair text-3xl md:text-5xl text-[#FDFBF7] mb-6 leading-[1.2]">
          {t.title}
        </h1>

        <p className="text-[#FDFBF7]/30 text-sm md:text-base leading-relaxed mb-12 max-w-md mx-auto">
          {t.body}
        </p>

        <Link
          href={`/${lang}`}
          className="group inline-flex items-center gap-3 bg-[#a28468] text-[#0a1218] px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-[#c4a882] transition-all duration-500 shadow-lg shadow-[#a28468]/20 hover:shadow-[#a28468]/40"
        >
          {t.btn}
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
