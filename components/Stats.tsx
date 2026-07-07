import { FaCocktail, FaWineGlassAlt, FaStar, FaBoxOpen } from "react-icons/fa";

export default function Stats() {
  const stats = [
    { icon: FaCocktail, highlight: "150+", label: "Zabawnych imprez" },
    { icon: FaWineGlassAlt, highlight: "5000+", label: "Wymixowanych drinków" },
    { icon: FaStar, highlight: "100%", label: "Zaangażowania w detale" },
    { icon: FaBoxOpen, highlight: "Full", label: "Własny sprzęt" },
  ];

  return (
    /* Zmniejszone paddingi - sekcja jest teraz zwięzła i lekka */
    <div className="relative z-40 bg-[#FDFBF7] py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 
          MOBILE/TABLET: Siatka 2x2 
          LAPTOP (lg): Pozioma linia z automatycznymi pionowymi przecinkami (divide-x) 
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#a28468]/15">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center group cursor-default lg:px-6"
            >
              {/* MINIATUROWA IKONA - Zamiast wielkiego kółka, mała, delikatna kropka */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#a28468]/20 flex items-center justify-center mb-3 md:mb-4 transition-all duration-300 group-hover:bg-[#a28468] group-hover:border-[#a28468]">
                <stat.icon className="text-sm md:text-base text-[#a28468]/40 transition-colors duration-300 group-hover:text-white" />
              </div>

              {/* ZMNIEJSZONA, ALE CZYSTA LICZBA */}
              <span className="relative font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1b3745] font-light tracking-tight leading-none">
                {stat.highlight}
              </span>

              {/* OPIS - Maximlany tracking dla luksusowego efektu */}
              <span className="relative text-[#1b3745]/25 text-[8px] md:text-[9px] tracking-[0.2em] uppercase mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
