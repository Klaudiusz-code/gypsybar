"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  const [isFormSent, setIsFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSent(true);
    setTimeout(() => setIsFormSent(false), 3000);
  };

  return (
    <section
      id="kontakt"
      className="relative pt-32 pb-32 px-6 md:px-12 bg-[#0a1218] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0e1c22] to-transparent z-0"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start relative z-10">
        <div>
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
            Kontakt
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-[#FDFBF7] leading-tight mb-4">
            Sprawdź dostępność <br />
            <span className="text-[#a28468]/50 italic font-light">terminu</span>
          </h2>
          <p className="text-[#FDFBF7]/20 text-sm leading-relaxed mb-12 max-w-sm">
            Wypełnij formularz, a ja wrócę do Ciebie z indywidualną wyceną w
            ciągu kilku godzin.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative border-b border-[#FDFBF7]/10 focus-within:border-[#a28468] transition-colors pb-3">
              <input
                type="text"
                id="name"
                placeholder=" "
                required
                className="peer w-full bg-transparent text-[#FDFBF7] placeholder-transparent focus:outline-none text-sm"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-0 text-sm text-[#FDFBF7]/20 transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-[#a28468] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#FDFBF7]/40"
              >
                Imię i nazwisko
              </label>
            </div>

            <div className="relative border-b border-[#FDFBF7]/10 focus-within:border-[#a28468] transition-colors pb-3">
              <input
                type="text"
                id="date"
                placeholder=" "
                className="peer w-full bg-transparent text-[#FDFBF7] placeholder-transparent focus:outline-none text-sm"
              />
              <label
                htmlFor="date"
                className="absolute left-0 top-0 text-sm text-[#FDFBF7]/20 transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-[#a28468] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#FDFBF7]/40"
              >
                Data imprezy
              </label>
            </div>

            <div className="relative border-b border-[#FDFBF7]/10 focus-within:border-[#a28468] transition-colors pb-3">
              <textarea
                id="msg"
                rows={3}
                placeholder=" "
                className="peer w-full bg-transparent text-[#FDFBF7] placeholder-transparent focus:outline-none resize-none text-sm"
              />
              <label
                htmlFor="msg"
                className="absolute left-0 top-0 text-sm text-[#FDFBF7]/20 transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-[#a28468] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#FDFBF7]/40"
              >
                Krótko o imprezie...
              </label>
            </div>

            <button
              type="submit"
              className={`mt-6 w-full py-4 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500 ${
                isFormSent
                  ? "bg-[#a28468]/20 text-[#a28468] border border-[#a28468]/30 cursor-default"
                  : "bg-[#a28468] text-[#0e1c22] hover:bg-[#c4a882] hover:shadow-[0_10px_30px_-10px_rgba(162,132,104,0.4)]"
              }`}
            >
              {isFormSent
                ? "Wysłano! Odezwiemy się wkrótce."
                : "Wyślij zapytanie"}
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center md:items-end pt-8 md:pt-0">
          <div className="relative w-full max-w-xs md:max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#a28468]/20 mb-10 group shadow-2xl shadow-black/50">
            <Image
              src="/avatar.jpg"
              alt="Twórca Gypsy's Bar"
              fill
              className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1218] via-[#0a1218]/20 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-playfair text-2xl text-[#FDFBF7]">
                Gypsy&apos;s
              </p>
              <p className="text-[#FDFBF7]/30 text-xs tracking-[0.2em] uppercase mt-1">
                Prywatny Barman
              </p>
            </div>
          </div>

          <div className="w-full max-w-xs md:max-w-sm space-y-3">
            <a
              href="https://wa.me/48661214648"
              target="_blank"
              className="flex items-center gap-4 group p-4 rounded-xl border border-[#FDFBF7]/5 bg-[#FDFBF7]/[0.02] hover:border-[#a28468]/20 hover:bg-[#a28468]/[0.05] transition-all duration-300"
            >
              <FaWhatsapp className="text-[#a28468] text-lg" />
              <div>
                <p className="text-[9px] text-[#FDFBF7]/20 uppercase tracking-[0.25em]">
                  Napisz (najszybciej)
                </p>
                <p className="text-[#FDFBF7]/60 group-hover:text-[#a28468] transition-colors text-sm mt-0.5">
                  +48 661 214 648
                </p>
              </div>
            </a>

            <a
              href="mailto:gypsysmobilebar@gmail.com"
              className="flex items-center gap-4 group p-4 rounded-xl border border-[#FDFBF7]/5 bg-[#FDFBF7]/[0.02] hover:border-[#a28468]/20 hover:bg-[#a28468]/[0.05] transition-all duration-300"
            >
              <FaEnvelope className="text-[#a28468] text-lg" />
              <div>
                <p className="text-[9px] text-[#FDFBF7]/20 uppercase tracking-[0.25em]">
                  E-mail
                </p>
                <p className="text-[#FDFBF7]/60 group-hover:text-[#a28468] transition-colors text-sm mt-0.5 break-all">
                  gypsysmobilebar@gmail.com
                </p>
              </div>
            </a>

            <div className="pt-6 flex gap-3 justify-center md:justify-start">
              <a
                href="#"
                className="w-11 h-11 border border-[#FDFBF7]/10 rounded-full flex items-center justify-center text-[#FDFBF7]/30 hover:text-[#a28468] hover:border-[#a28468]/40 transition-all duration-300 hover:bg-[#a28468]/[0.05]"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="#"
                className="w-11 h-11 border border-[#FDFBF7]/10 rounded-full flex items-center justify-center text-[#FDFBF7]/30 hover:text-[#a28468] hover:border-[#a28468]/40 transition-all duration-300 hover:bg-[#a28468]/[0.05]"
              >
                <FaFacebook size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
