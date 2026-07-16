export default function Stats({ data }: any) {
  if (!data || !data.statsItems) return null;

  return (
    <div className="relative z-40 bg-[#FDFBF7] py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#a28468]/15">
          {data.statsItems.map((stat: any, i: any) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center group cursor-default lg:px-6"
            >
              <span className="relative font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1b3745] font-light tracking-tight leading-none">
                {stat.highlight}
              </span>
              <span className="relative text-[#1b3745]/25 text-[8px] md:text-[9px] tracking-[0.2em] uppercase mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
