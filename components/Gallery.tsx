export default function Gallery() {
  const galleryData = [
    { src: "/gallery/1.jpg" },
    { src: "/gallery/2.jpg" },
    { src: "/gallery/3.jpg" },
    { src: "/gallery/4.jpg" },
    { src: "/gallery/5.jpg" },
    { src: "/gallery/6.jpg" },
    { src: "/gallery/7.jpg" },
    { src: "/gallery/8.jpg" },
    { src: "/gallery/9.jpg" },
    { src: "/gallery/10.jpg" },
    { src: "/gallery/11.jpg" },
    { src: "/gallery/12.jpg" },
  ];

  return (
    <section
      id="realizacje"
      className="relative pt-32 pb-32 px-6 md:px-12 bg-[#FDFBF7]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#a28468] text-[10px] tracking-[0.5em] uppercase mb-6 font-medium">
            Portfolio
          </p>
          <h2 className="font-playfair text-3xl md:text-6xl text-[#1b3745] leading-[1.1]">
            Zobacz{" "}
            <span className="text-[#a28468]/60 italic font-light">klimat.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {galleryData.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden 
              border-2 md:border-[6px] border-white 
              bg-gray-100 
              shadow-sm hover:shadow-xl hover:shadow-[#1b3745]/10 
              transition-all duration-500 ease-out 
              hover:z-10 hover:scale-[1.03]"
            >
              <img
                src={img.src}
                alt={`Realizacja ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
