"use client";

import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa6";

interface SocialSectionProps {
  settings: any;
}

export default function SocialSection({ settings }: SocialSectionProps) {
  if (!settings?.socialMedia) return null;

  const social = settings.socialMedia;

  const socials = [
    {
      name: "Instagram",
      handle: social.instagramUrl,
      url: social.instagramUrl,
      icon: FaInstagram,
      color: "text-pink-500",
      gradient: "from-pink-500/25 to-transparent",
      border: "group-hover:border-pink-500/20",
    },

    {
      name: "Facebook",
      handle: social.facebook,
      url: social.facebook,
      icon: FaFacebookF,
      color: "text-blue-500",
      gradient: "from-blue-500/25 to-transparent",
      border: "group-hover:border-blue-500/20",
    },

    {
      name: "TikTok",
      handle: social.tiktok,
      url: social.tiktok,
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
            SOCIAL MEDIA
          </p>

          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-[1.05] mb-6">
            Znajdź nas <span className="text-[#a28468]">online</span>
          </h2>

          <p className="text-[#FDFBF7]/15 text-sm mt-6 max-w-md mx-auto leading-relaxed">
            Śledź nasze realizacje, wydarzenia i najnowsze koktajlowe
            inspiracje.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((item, index) => {
            if (!item.url) return null;

            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-[#FDFBF7]/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-700 hover:bg-[#FDFBF7]/[0.05] hover:-translate-y-3 ${item.border}`}
              >
                <div className="relative w-24 h-24 rounded-full border border-white/[0.08] flex items-center justify-center text-5xl mb-8">
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700`}
                  />

                  <Icon className={`relative z-10 ${item.color}`} />
                </div>

                <h3 className="font-playfair text-2xl md:text-3xl text-[#FDFBF7] mb-2">
                  {item.name}
                </h3>

                <div className="w-full pt-8 border-t border-white/[0.05] flex justify-center">
                  <span className="text-[#FDFBF7]/20 text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:text-[#FDFBF7]/60 transition-colors">
                    CLICK →
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
