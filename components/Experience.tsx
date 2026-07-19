type ExperienceProps = {
  data: {
    malyNaglowek: string;
    tytul: string;
    years: string;

    punktyDoswiadczenia: {
      numer: string;
      tytul: string;
      opis: string;
    }[];

    sekcjaOLokalu: {
      naglowekSekcji: string;
      nazwaLokalu: string;
      opisLokalu: string;
    };

    cytat: string;
  };
};

export default function Experience({ data }: ExperienceProps) {
  return (
    <section className="relative pt-24 pb-24 sm:pt-32 sm:pb-32 md:pt-40 md:pb-36 px-5 sm:px-8 md:px-12 bg-[#FDFBF7] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-[160px] sm:text-[220px] md:text-[440px] leading-none text-[#1b3745]/[0.02] font-bold select-none pointer-events-none">
        {data.years}
      </div>

      <div className="max-w-[680px] lg:max-w-[780px] mx-auto relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-3 sm:mb-4 font-medium">
            {data.malyNaglowek}
          </p>

          <div className="flex items-baseline gap-2.5 sm:gap-3 mb-4 sm:mb-5">
            <span className="font-playfair text-[56px] sm:text-[72px] md:text-[96px] leading-[0.85] text-[#1b3745] font-bold tracking-tight">
              {data.years}
            </span>

          </div>

          <h2 className="font-playfair text-[20px] sm:text-[24px] md:text-[30px] text-[#1b3745] leading-[1.25] mb-3">
            {data.tytul}
          </h2>
        </div>

        <div className="w-full h-px bg-[#1b3745]/[0.07] mb-10 sm:mb-14" />


        <div className="relative mb-10 sm:mb-14 md:mb-20">
          <div className="absolute left-[5px] sm:left-[9px] top-2 bottom-2 w-px bg-[#a28468]/[0.08]" />

          <div className="space-y-8 sm:space-y-10">
            {data.punktyDoswiadczenia.map((point) => (
              <div
                key={point.numer}
                className="group flex gap-5 transition-transform duration-500 hover:translate-x-1"
              >
                <div className="relative flex-shrink-0 w-[11px] h-[11px] mt-1.5">
                  <div className="absolute inset-0 rounded-full border border-[#a28468]/20 bg-[#FDFBF7]" />

                  <div className="absolute inset-[3px] rounded-full bg-[#a28468]/20" />
                </div>

                <div>
                  <span className="font-playfair text-[12px] text-[#a28468]/30 block mb-2">
                    {point.numer}
                  </span>

                  <h3 className="text-[#1b3745] text-[15px] font-medium mb-2">
                    {point.tytul}
                  </h3>

                  <p className="text-[#1b3745]/30 text-[13px] leading-[1.7]">
                    {point.opis}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="border-t border-[#1b3745]/[0.05] pt-10 mb-12">
          <p className="text-[#a28468]/30 text-[9px] tracking-[0.35em] uppercase mb-3">
            {data.sekcjaOLokalu.naglowekSekcji}
          </p>

          <p className="font-playfair text-[20px] text-[#1b3745]/70 italic mb-3">
            {data.sekcjaOLokalu.nazwaLokalu}
          </p>

          <p className="text-[#1b3745]/25 text-[13px] leading-[1.7]">
            {data.sekcjaOLokalu.opisLokalu}
          </p>
        </div>


        <div className="border-t border-[#1b3745]/[0.05] pt-10">
          <p className="font-playfair text-[15px] text-[#1b3745]/20 italic leading-relaxed">
            &ldquo;{data.cytat}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
