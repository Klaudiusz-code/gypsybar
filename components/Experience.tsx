export default function Experience() {
  const points = [
    {
      num: "01",
      title: "Standard lokalu, nie usługi",
      text: "Goście nie powinni czuć, że dostali usługę. Mają poczuć, że trafili do elitarnego lokalu, który akurat w tej chwili powstał dla nich.",
    },
    {
      num: "02",
      title: "Zero skrótów, wszystko handmade",
      text: "Własne syropy, kordiały, infuzje. Pełna kontrola nad smakiem, świeżością i jakością składników, z którymi pracujemy.",
    },
    {
      num: "03",
      title: "Miksologia, a nie tylko obsługa",
      text: "Różnica między barmanem a miksologiem jest w detalu. Do Twojej imprezy przyjeżdżają ludzie, dla których komponowanie drinków to rzemiosło.",
    },
  ];

  return (
    <section className="relative pt-24 pb-24 sm:pt-32 sm:pb-32 md:pt-40 md:pb-36 px-5 sm:px-8 md:px-12 bg-[#FDFBF7] overflow-hidden">
      {/* Znak wodny */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-[160px] sm:text-[220px] md:text-[440px] leading-none text-[#1b3745]/[0.02] font-bold select-none pointer-events-none"
        aria-hidden="true"
      >
        15
      </div>

      <div className="max-w-[680px] lg:max-w-[780px] mx-auto relative z-10">
        {/* ── NAGŁÓWEK ── */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-3 sm:mb-4 font-medium">
            Doświadczenie
          </p>

          <div className="flex items-baseline gap-2.5 sm:gap-3 mb-4 sm:mb-5">
            <span className="font-playfair text-[56px] sm:text-[72px] md:text-[96px] leading-[0.85] text-[#1b3745] font-bold tracking-tight">
              15
            </span>
            <span className="text-[#a28468]/50 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-medium">
              lat
            </span>
          </div>

          <h2 className="font-playfair text-[20px] sm:text-[24px] md:text-[30px] text-[#1b3745] leading-[1.25] mb-3 sm:mb-4 tracking-tight">
            W najlepszych koktajlbarach w Polsce.
          </h2>
          <p className="text-[#1b3745]/35 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7]">
            Zamiast standardów znanych z branży eventowej, przenosimy
            rygorystyczne zasady topowych lokali. Gypsy&apos;s to mobilny
            koktajlbar, który przyjeżdża do Ciebie z pełną kulturą wysokiej
            gastronomii.
          </p>
        </div>

        {/* ── LINIA ── */}
        <div className="w-full h-px bg-[#1b3745]/[0.07] mb-10 sm:mb-14 md:mb-16" />

        {/* ── OŚ CZASU ── */}
        <div className="relative mb-10 sm:mb-14 md:mb-20">
          {/* Pionowa linia — na mobile cieńsza i bliżej krawędzi */}
          <div
            className="absolute left-[5px] sm:left-[9px] md:left-[11px] top-2 bottom-2 w-px bg-[#a28468]/[0.08]"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {points.map((point) => (
              <div
                key={point.num}
                className="group relative flex gap-4 sm:gap-5 md:gap-7 transition-transform duration-500 ease-out hover:translate-x-1"
              >
                {/* Kropka — na mobile mniejsza */}
                <div className="relative flex-shrink-0 w-[11px] h-[11px] sm:w-[11px] sm:h-[11px] md:w-[13px] md:h-[13px] mt-[3px] sm:mt-1.5">
                  <div className="absolute inset-0 rounded-full border border-[#a28468]/20 bg-[#FDFBF7] transition-colors duration-500 group-hover:border-[#a28468]/50 group-hover:bg-[#a28468]/[0.06]" />
                  <div className="absolute inset-[3px] md:inset-[4px] rounded-full bg-[#a28468]/15 transition-colors duration-500 group-hover:bg-[#a28468]/40" />
                </div>

                {/* Treść */}
                <div className="flex-1 min-w-0">
                  <span className="font-playfair text-[12px] sm:text-[13px] text-[#a28468]/25 leading-none block mb-1.5 sm:mb-2 tracking-wide">
                    {point.num}
                  </span>
                  <h3 className="text-[#1b3745] text-[14px] sm:text-[15px] md:text-[16px] font-medium tracking-[-0.01em] mb-1.5 sm:mb-2 leading-[1.4]">
                    {point.title}
                  </h3>
                  <p className="text-[#1b3745]/30 text-[12.5px] sm:text-[13px] md:text-[13.5px] leading-[1.7]">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── LOKAL ── */}
        <div className="border-t border-[#1b3745]/[0.05] pt-8 sm:pt-10 md:pt-12 mb-8 sm:mb-10 md:mb-14">
          <p className="text-[#a28468]/30 text-[9px] tracking-[0.35em] uppercase mb-2.5 sm:mb-3 font-bold">
            Gdzie wypracowaliśmy ten standard
          </p>
          <p className="font-playfair text-[17px] sm:text-[19px] md:text-[22px] text-[#1b3745]/[0.7] italic leading-[1.35] mb-2">
            Mercy Brown, Kraków
          </p>
          <p className="text-[#1b3745]/25 text-[12.5px] sm:text-[13px] leading-[1.7]">
            I inne renomowane, ścisłe lokale typu speakeasy w Polsce. Tam
            wypracowaliśmy jakość, którą przenosimy na wydarzenia.
          </p>
        </div>

        {/* ── CYTAT ── */}
        <div className="border-t border-[#1b3745]/[0.05] pt-8 sm:pt-10 md:pt-12">
          <p className="font-playfair text-[14px] sm:text-[15px] md:text-[16px] text-[#1b3745]/[0.18] italic leading-[1.6] sm:leading-[1.65]">
            &ldquo;Przenosimy kulturę prawdziwego koktajlbaru poza jego mury,
            zachowując rygorystyczny standard, którego oczekujesz siedząc przy
            barze.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
