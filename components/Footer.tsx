import { FaInstagram, FaFacebook, FaCocktail } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080f13] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#a28468]/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FaCocktail className="text-[#a28468]/50 text-sm" />
              <span className="font-playfair text-xl text-[#FDFBF7]/80">
                Gypsy&apos;s
              </span>
            </div>
            <p className="text-[#FDFBF7]/15 text-xs leading-relaxed max-w-xs">
              Prywatny barman na wynajem. Tworzymy unikalne koktajlowe
              doświadczenia na terenie całej Polski.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#a28468]/40 mb-5 font-medium">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {["Start", "Oferta", "Realizacje", "Menu"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase() === "start" ? "" : item.toLowerCase()}`}
                    className="text-[#FDFBF7]/20 text-xs hover:text-[#a28468] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#a28468]/40 mb-5 font-medium">
              Usługi
            </h4>
            <ul className="space-y-3">
              {["Śluby", "Imprezy Firmowe", "Prywatne", "Festiwale"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-[#FDFBF7]/20 text-xs">{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#a28468]/40 mb-5 font-medium">
              Social Media
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                target="_blank"
                className="w-10 h-10 border border-[#FDFBF7]/10 rounded-full flex items-center justify-center text-[#FDFBF7]/20 hover:text-[#a28468] hover:border-[#a28468]/30 transition-all duration-300"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="#"
                target="_blank"
                className="w-10 h-10 border border-[#FDFBF7]/10 rounded-full flex items-center justify-center text-[#FDFBF7]/20 hover:text-[#a28468] hover:border-[#a28468]/30 transition-all duration-300"
              >
                <FaFacebook size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#FDFBF7]/[0.03]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#FDFBF7]/15 text-[10px] tracking-widest uppercase">
            &copy; {currentYear} Gypsy&apos;s Bar. Wszystkie prawa zastrzeżone.
          </p>

          <a
            href="https://klaudiuszdev.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 transition-all duration-300"
          >
            <img
              src="https://klaudiuszdev.pl/hello.svg"
              alt="KlaudiuszDev Logo"
              className="w-4 h-4  group-hover:grayscale-0 transition-all duration-300"
            />
            <span className="text-[#FDFBF7]/15 text-[10px] tracking-widest uppercase group-hover:text-[#a28468]/70 transition-colors duration-300">
              Realizacja klaudiuszdev.pl
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
