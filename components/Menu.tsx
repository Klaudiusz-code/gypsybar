import { FaCocktail } from "react-icons/fa";
import { drinks } from "@/lib/data";

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative py-32 px-6 md:px-12 bg-[#FDFBF7] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a28468]/[0.03] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
            Smak podniebienia
          </p>
          <h2 className="font-playfair text-4xl md:text-6xl text-[#1b3745] leading-tight">
            Przykładowe{" "}
            <span className="text-[#a28468]/50 italic font-light">menu</span>
          </h2>
        </div>

        <div className="space-y-0">
          {drinks.map((drink, i) => (
            <div
              key={i}
         
              className="group relative flex justify-between items-center py-10 md:py-12 px-6 hover:px-8 border-b border-[#1b3745]/[0.06] hover:border-[#a28468]/20 transition-all duration-500 cursor-default"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none select-none">
                <span className="font-playfair text-[8rem] md:text-[12rem] leading-none text-[#a28468]/[0.04] font-bold">
                  0{i + 1}
                </span>
              </div>

              <div className="flex items-center gap-6 md:gap-10 relative z-10">
                <span className="font-playfair text-2xl md:text-3xl font-light text-[#a28468]/20 group-hover:text-[#a28468]/60 transition-colors duration-500 w-10 md:w-16">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl text-[#1b3745] group-hover:text-[#a28468] transition-colors duration-500 font-playfair tracking-tight">
                    {drink.name}
                  </h3>
                  <p className="text-sm text-[#1b3745]/30 mt-1.5 max-w-md leading-relaxed group-hover:text-[#1b3745]/50 transition-colors duration-500">
                    {drink.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 w-11 h-11 border border-[#1b3745]/10 rounded-full flex items-center justify-center text-[#1b3745]/20 group-hover:border-[#a28468] group-hover:text-[#a28468] group-hover:bg-[#a28468]/[0.05] transition-all duration-500 flex-shrink-0">
                <FaCocktail size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
