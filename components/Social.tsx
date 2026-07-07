import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa6";

const socials = [
  {
    name: "Instagram",
    icon: FaInstagram,
    handle: "@gypsys_bar",
    followers: "12k+",
    url: "https://instagram.com/",
    color: "text-pink-500",
    gradient: "from-pink-500/25 to-transparent",
    shadow: "shadow-pink-500/20",
    border: "group-hover:border-pink-500/20",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    handle: "Gypsy's Bar",
    followers: "5k+",
    url: "https://facebook.com/",
    color: "text-blue-500",
    gradient: "from-blue-500/25 to-transparent",
    shadow: "shadow-blue-500/20",
    border: "group-hover:border-blue-500/20",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    handle: "@gypsys_bar",
    followers: "45k+",
    url: "https://tiktok.com/",
    color: "text-cyan-400",
    gradient: "from-cyan-400/25 to-transparent",
    shadow: "shadow-cyan-400/20",
    border: "group-hover:border-cyan-400/20",
  },
];

export default function SocialSection() {
  return (
    <section className="relative pt-32 pb-32 px-6 md:px-12 bg-[#0a1218] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-[#0a1218]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#a28468] text-[10px] tracking-[0.5em] uppercase mb-6 font-medium">
            Social Media
          </p>
          <h2 className="font-playfair text-3xl md:text-6xl text-[#FDFBF7] leading-[1.1]">
            Znajdź nas{" "}
            <span className="text-[#a28468]/40 italic font-light">
              w sieci.
            </span>
          </h2>
          <p className="text-[#FDFBF7]/15 text-sm mt-6 max-w-md mx-auto leading-relaxed">
            Za kulisami naszych eventów, przepisy drinków i dużo dobrego
            klimatu.
          </p>
        </div>

        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory pb-8 px-0 -mx-6 gap-4 scrollbar-hide">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative min-w-[80vw] flex-shrink-0 snap-start aspect-[4/3] bg-[#FDFBF7]/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-8 flex flex-col items-center justify-between text-center transition-all duration-500 hover:bg-[#FDFBF7]/[0.05] hover:-translate-y-2 hover:${social.shadow} hover:${social.border}`}
            >
              <div className="relative w-16 h-16 rounded-full border border-white/[0.08] flex items-center justify-center text-white/10 text-3xl transition-all duration-500">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-t ${social.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none`}
                ></div>
                <social.icon
                  className={`relative z-10 transition-colors duration-500 ${social.color}`}
                />
              </div>

              <h3 className="font-playfair text-2xl text-[#FDFBF7] mt-3 tracking-tight">
                {social.name}
              </h3>

              <p className="text-[#FDFBF7]/25 text-xs tracking-wide">
                {social.handle}
              </p>
            </a>
          ))}
        </div>

      
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-[#FDFBF7]/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-700 hover:bg-[#FDFBF7]/[0.05] hover:-translate-y-3 hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.4)] hover:${social.border}`}
            >
              <div className="relative w-24 h-24 rounded-full border border-white/[0.08] flex items-center justify-center text-white/10 text-5xl md:text-6xl mb-8 transition-all duration-500">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-t ${social.gradient} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none scale-150`}
                ></div>
                <social.icon
                  className={`relative z-10 transition-colors duration-500 ${social.color}`}
                />
              </div>

              <h3 className="font-playfair text-2xl md:text-3xl text-[#FDFBF7] mb-2 tracking-tight">
                {social.name}
              </h3>

              <p className="text-[#FDFBF7]/25 text-sm mb-8 tracking-wide">
                {social.handle}
              </p>

              <div className="w-full pt-8 border-t border-white/[0.05] flex items-center justify-between mt-auto">
                <span className="text-[10px] text-[#a28468]/40 uppercase tracking-[0.3em] font-bold">
                  {social.followers}
                </span>
                <span className="text-[#FDFBF7]/20 text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:text-[#FDFBF7]/60 transition-colors">
                  Obserwuj
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
