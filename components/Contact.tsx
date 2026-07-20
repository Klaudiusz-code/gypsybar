"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Contact({ data, settings }: any) {
  if (!data) return null;

  const globalContact = settings?.globalSettingsV2 || settings;

  const whatsapp = globalContact?.whatsapp;
  const email = globalContact?.email;

  const instagram = globalContact?.socialMedia?.instagramUrl;
  const facebook = globalContact?.socialMedia?.facebook;

  const [isFormSent, setIsFormSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mlgqbvek", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsFormSent(true);
        form.reset();

        setTimeout(() => {
          setIsFormSent(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Formspree error:", error);
    } finally {
      setIsSending(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  const avatarUrl = data.contactImageUrl?.node?.sourceUrl || "/avatar.jpg";

  return (
    <section
      id="kontakt"
      className="relative pt-32 pb-32 px-6 md:px-12 bg-[#0a1218] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0e1c22] to-transparent z-0"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start relative z-10">
        <div>
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
            {data.contactLabel}
          </p>

          <h2 className="font-playfair text-3xl md:text-5xl text-[#fff] leading-tight">
            {data.contactTitle
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

          <p className="text-[#FDFBF7]/20 text-sm leading-relaxed mb-12 max-w-sm">
            {data.contactDescription}
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="hidden"
              name="_subject"
              value="New Gypsy's Bar booking request"
            />

            <div className="relative border-b border-[#FDFBF7]/10 focus-within:border-[#a28468] transition-colors pb-3">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                required
                className="peer w-full bg-transparent text-[#FDFBF7] placeholder-transparent focus:outline-none text-sm"
              />

              <label
                htmlFor="name"
                className="absolute left-0 top-0 text-sm text-[#FDFBF7]/20 transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-[#a28468] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#FDFBF7]/40"
              >
                {data.formNameLabel}
              </label>
            </div>

            <div className="relative border-b border-[#FDFBF7]/10 focus-within:border-[#a28468] transition-colors pb-3">
              <input
                type="date"
                id="date"
                name="date"
                min={today}
                required
                className="w-full bg-transparent text-[#FDFBF7] focus:outline-none text-sm [color-scheme:dark]"
              />

              <label
                htmlFor="date"
                className="absolute left-0 -top-5 text-[10px] text-[#FDFBF7]/40 tracking-widest uppercase"
              >
                {data.formDateLabel}
              </label>
            </div>

            <div className="relative border-b border-[#FDFBF7]/10 focus-within:border-[#a28468] transition-colors pb-3">
              <textarea
                id="msg"
                name="message"
                rows={3}
                placeholder=" "
                className="peer w-full bg-transparent text-[#FDFBF7] placeholder-transparent focus:outline-none resize-none text-sm"
              />

              <label
                htmlFor="msg"
                className="absolute left-0 top-0 text-sm text-[#FDFBF7]/20 transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-[#a28468] peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#FDFBF7]/40"
              >
                {data.formMessageLabel}
              </label>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`mt-6 w-full py-4 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500 ${
                isFormSent
                  ? "bg-[#a28468]/20 text-[#a28468] border border-[#a28468]/30"
                  : "bg-[#a28468] text-[#0e1c22] hover:bg-[#c4a882]"
              }`}
            >
              {isFormSent
                ? "Sent! We will contact you soon."
                : isSending
                  ? "Sending..."
                  : data.formButtonText}
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center md:items-end pt-8 md:pt-0">
          <div className="relative w-full max-w-xs md:max-w-sm aspect-[3/4] rounded-2xl overflow-hidden  mb-10 group ">
            <Image
              src={avatarUrl}
              alt="Gypsy's Bar creator"
              fill
              className="  group-hover:grayscale-0  transition-all duration-1000"
            />
          </div>

          <div className="w-full max-w-xs md:max-w-sm space-y-3">
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-4 rounded-xl border border-[#FDFBF7]/5 bg-[#FDFBF7]/[0.02] hover:border-[#a28468]/20 hover:bg-[#a28468]/[0.05] transition-all duration-300"
            >
              <FaWhatsapp className="text-[#a28468] text-lg" />

              <div>
                <p className="text-[9px] text-[#FDFBF7]/20 uppercase tracking-[0.25em]">
                  Whatsapp
                </p>

                <p className="text-[#FDFBF7]/60 group-hover:text-[#a28468] transition-colors text-sm mt-0.5">
                  {whatsapp}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 group p-4 rounded-xl border border-[#FDFBF7]/5 bg-[#FDFBF7]/[0.02] hover:border-[#a28468]/20 hover:bg-[#a28468]/[0.05] transition-all duration-300"
            >
              <FaEnvelope className="text-[#a28468] text-lg" />

              <div>
                <p className="text-[9px] text-[#FDFBF7]/20 uppercase tracking-[0.25em]">
                  E-mail
                </p>

                <p className="text-[#FDFBF7]/60 group-hover:text-[#a28468] transition-colors text-sm mt-0.5 break-all">
                  {email}
                </p>
              </div>
            </a>

            <div className="pt-6 flex gap-3 justify-center md:justify-start">
              <a
                href={instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-[#FDFBF7]/10 rounded-full flex items-center justify-center text-[#FDFBF7]/30 hover:text-[#a28468] hover:border-[#a28468]/40 transition-all duration-300 hover:bg-[#a28468]/[0.05]"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href={facebook || "#"}
                target="_blank"
                rel="noopener noreferrer"
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
