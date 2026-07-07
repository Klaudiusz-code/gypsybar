export default function Gallery() {
  const galleryData = [
    {
      src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
      title: "Klasyczne Koktajle",
    },
    {
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
      title: "Kolorowe Kompozycje",
    },
    {
      src: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&q=80",
      title: "Świeże Składniki",
    },
    {
      src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
      title: "Sztuka Przelania",
    },
    {
      src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
      title: "Lód i Detale",
    },
    {
      src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
      title: "Nasz Sprzęt",
    },
  ];

  return (
    <section
      id="realizacje"
      className="relative pt-32 pb-32 px-6 md:px-12 bg-[#FDFBF7] overflow-hidden"
    >

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-[#a28468] text-[10px] tracking-[0.5em] uppercase mb-6 font-medium">
            Portfolio
          </p>
          <h2 className="font-playfair text-3xl md:text-6xl text-[#1b3745] leading-[1.1]">
            Zobacz{" "}
            <span className="text-[#a28468]/60 italic font-light">klimat.</span>
          </h2>
        </div>

        <div className="group grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {galleryData.map((img, i) => (
            <div
              key={i}
          
              className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden 
              border-2 md:border-[6px] border-white shadow-sm transition-all duration-700 ease-out
              /* SPOTLIGHT WŁĄCZONY TYLKO NA DESKTOPIE */
              md:group-hover:brightness-90 md:group-hover:scale-[0.98]
              /* REAKCJA NA HOVER (Desktop) I ACTIVE (Dotyk na Mobile) */
              hover:!brightness-100 active:!brightness-100 
              hover:!scale-105 active:!scale-105 
              hover:!z-50 active:!z-50 
              hover:!shadow-2xl active:!shadow-2xl hover:!shadow-[#1b3745]/20 active:!shadow-[#1b3745]/20"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out md:group-hover:scale-110 hover:!scale-100 md:active:!scale-100"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent 
              opacity-80 md:opacity-0 
              md:group-hover:opacity-100 hover:!opacity-100 active:!opacity-100 transition-opacity duration-500"
              />

              <div
                className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10 
              translate-y-0 md:translate-y-4 
              opacity-100 md:opacity-0 
              md:group-hover:translate-y-0 md:group-hover:opacity-100 
              hover:!translate-y-0 hover:!opacity-100 active:!translate-y-0 active:!opacity-100 transition-all duration-500"
              >
                <div className="text-center">
                  <div className="w-8 h-px bg-[#a28468] mx-auto mb-3"></div>
                  <h3 className="font-playfair text-lg md:text-xl text-white tracking-tight">
                    {img.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
