"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaCocktail, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const navTranslations = {
  pl: [
    { href: "#oferta", label: "Oferta" },
    { href: "#realizacje", label: "Realizacje" },
    { href: "#opinie", label: "Opinie" },
    { href: "#menu", label: "Menu" },
    { href: "#pakiety", label: "Pakiety" },
    { href: "#kontakt", label: "Kontakt" },
  ],
  en: [
    { href: "#oferta", label: "Services" },
    { href: "#realizacje", label: "Portfolio" },
    { href: "#opinie", label: "Reviews" },
    { href: "#menu", label: "Menu" },
    { href: "#pakiety", label: "Packages" },
    { href: "#kontakt", label: "Contact" },
  ],
};

interface NavProps {
  settings?: any;
}

export default function Nav({ settings }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const lang = pathname.startsWith("/en") ? "en" : "pl";

  const navLinks = navTranslations[lang];

  const logo =
    settings?.logo?.node?.sourceUrl || "/logos-g.svg";

  const logoAlt =
    settings?.logo?.node?.altText || "Logo";


  const instagram =
    settings?.socialMedia?.instagramUrl || "#";

  const facebook =
    settings?.socialMedia?.facebook || "#";


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-[#0a1218]/95 backdrop-blur-2xl shadow-2xl shadow-black/30 border-b border-[#a28468]/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >

        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 h-20 flex items-center justify-between">


          <a
            href={lang === "en" ? "/en" : "/"}
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={logo}
              alt={logoAlt}
              width={70}
              height={36}
              className="object-contain"
            />
          </a>



          <div className="hidden lg:flex items-center gap-1">

            {navLinks.map((link, i) => (

              <div
                key={link.href}
                className="flex items-center gap-1"
              >

                <a
                  href={link.href}
                  className="group relative text-[11px] tracking-[0.25em] uppercase text-white/50 hover:text-white px-4 py-2 transition-colors duration-500"
                >

                  {link.label}

                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-[#a28468] transition-all duration-500 group-hover:w-2/3" />

                </a>


                {i < navLinks.length - 1 && (
                  <span className="w-px h-4 bg-white/10" />
                )}

              </div>

            ))}

          </div>





          <div className="hidden lg:flex items-center gap-4">


            <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10">

              <a
                href="/"
                className={`px-2.5 py-1 rounded-full text-sm transition-all ${
                  lang === "pl"
                    ? "bg-[#a28468]/20 border border-[#a28468]/30"
                    : "hover:bg-white/5"
                }`}
              >
                🇵🇱
              </a>


              <a
                href="/en"
                className={`px-2.5 py-1 rounded-full text-sm transition-all ${
                  lang === "en"
                    ? "bg-[#a28468]/20 border border-[#a28468]/30"
                    : "hover:bg-white/5"
                }`}
              >
                🇬🇧
              </a>

            </div>





            <div className="flex items-center gap-2">


              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#a28468]"
              >
                <FaInstagram size={13}/>
              </a>



              <a
                href={facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#a28468]"
              >
                <FaFacebook size={13}/>
              </a>


            </div>



            <span className="w-px h-5 bg-white/10"/>




            <a
              href="#kontakt"
              className="flex items-center gap-3 bg-[#a28468] text-[#1b3745] px-6 py-2.5 rounded-sm text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-[#c4a882] transition-all"
            >

              <span className="relative flex h-2 w-2">

                <span className="animate-ping absolute h-full w-full rounded-full bg-[#1b3745]/30"/>

                <span className="relative rounded-full h-2 w-2 bg-[#1b3745]/60"/>

              </span>


              {lang === "en" ? "Get a quote" : "Wycena"}

              <FaCocktail/>

            </a>


          </div>




          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-xl w-11 h-11 flex items-center justify-center rounded-full border border-white/10"
          >
            {isOpen ? <FaXmark/> : <FaBars/>}
          </button>


        </div>

      </nav>




      <div
        className={`fixed inset-0 bg-[#1b3745] z-[60] flex flex-col transition-all duration-700 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >


        <div className="relative z-20 flex items-center justify-between p-6 border-b border-white/5">


          <a
            href={lang==="en" ? "/en" : "/"}
            onClick={()=>setIsOpen(false)}
          >

            <Image
              src={logo}
              alt={logoAlt}
              width={100}
              height={35}
              className="object-contain"
            />

          </a>


          <button
            onClick={()=>setIsOpen(false)}
            className="text-white"
          >
            <FaXmark size={24}/>
          </button>


        </div>




        <div className="flex-1 flex flex-col justify-center pl-8">

          {navLinks.map((link)=>(

            <a
              key={link.href}
              href={link.href}
              onClick={()=>setIsOpen(false)}
              className="text-4xl font-playfair text-white/70 hover:text-[#a28468] py-4"
            >
              {link.label}
            </a>

          ))}

        </div>



        <div className="p-8 border-t border-white/5">

          <a
            href="#kontakt"
            onClick={()=>setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#a28468] text-[#1b3745] py-3.5 uppercase text-[11px] font-bold"
          >

            <FaCocktail/>

            {lang==="en"
              ? "Check availability"
              : "Zapytaj o termin"
            }

          </a>

        </div>



      </div>

    </>
  );
}