"use client";

import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa6";

interface SocialSectionProps {
  data: {
    socialLabel: string;
    socialTitle: string;
    socialDescription: string;

    instagram: {
      nazwaProfiluInstagra: string;
      nazwaUzytkownika: string;
      link: string;
    };

    tiktokitems: {
      nazwaUzytkownikaTiktok: string;
      nazwaTiktoka: string;
      linkDoProfiliuTiktok: string;
    };

    facebook: {
      nazwaFacebooka: string;
      nazwaUzytkownikaFacebooka: string;
      linkDoProfiluFacebooka: string;
    };
  };
}

export default function SocialSection({ data }: SocialSectionProps) {
   if (!data) return null;
  const words = data.socialTitle?.trim().split(/\s+/) || [];
  const lastWord = words.pop();
  const socials = [
    {
      name: data.instagram.nazwaProfiluInstagra,
      handle: data.instagram.nazwaUzytkownika,
      url: data.instagram.link,
      icon: FaInstagram,
      color: "text-pink-500",
      gradient: "from-pink-500/25 to-transparent",
      border: "group-hover:border-pink-500/20",
    },

    {
      name: data.facebook.nazwaFacebooka,
      handle: data.facebook.nazwaUzytkownikaFacebooka,
      url: data.facebook.linkDoProfiluFacebooka,
      icon: FaFacebookF,
      color: "text-blue-500",
      gradient: "from-blue-500/25 to-transparent",
      border: "group-hover:border-blue-500/20",
    },

    {
      name: data.tiktokitems.nazwaTiktoka,
      handle: data.tiktokitems.nazwaUzytkownikaTiktok,
      url: data.tiktokitems.linkDoProfiliuTiktok,
      icon: FaTiktok,
      color: "text-cyan-400",
      gradient: "from-cyan-400/25 to-transparent",
      border: "group-hover:border-cyan-400/20",
    },
  ];

  return (
    <section className="relative pt-32 pb-32 px-6 md:px-12 bg-[#0a1218] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#a28468]/20 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#a28468] text-[10px] tracking-[0.5em] uppercase mb-6 font-medium">
            {data.socialLabel}
          </p>

           <h2 className="font-playfair text-4xl sm:text-5xl md:text-5xl lg:text-6xl  text-white font-bold leading-[1.05] mb-6 md:mb-8 whitespace-pre-line">
            {words.join(" ")} <span className="text-[#a28468]">{lastWord}</span>
          </h2>

          <p className="text-[#FDFBF7]/15 text-sm mt-6 max-w-md mx-auto leading-relaxed">
            {data.socialDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((social, index) => {
            const Icon = social.icon;

            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-[#FDFBF7]/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-700 hover:bg-[#FDFBF7]/[0.05] hover:-translate-y-3 ${social.border}`}
              >
                <div className="relative w-24 h-24 rounded-full border border-white/[0.08] flex items-center justify-center text-white/10 text-5xl mb-8">
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-t ${social.gradient} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700`}
                  ></div>

                  <Icon
                    className={`relative z-10 transition-colors duration-500 ${social.color}`}
                  />
                </div>

                <h3 className="font-playfair text-2xl md:text-3xl text-[#FDFBF7] mb-2">
                  {social.name}
                </h3>

                <p className="text-[#FDFBF7]/25 text-sm mb-8 tracking-wide">
                  {social.handle}
                </p>

                <div className="w-full pt-8 border-t border-white/[0.05] flex justify-center">
                  <span className="text-[#FDFBF7]/20 text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:text-[#FDFBF7]/60 transition-colors">
                    Obserwuj
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
