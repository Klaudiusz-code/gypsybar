import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-[#1b3745]/10">
          <Image
            src="/about.jpg" 
            alt="Barman Gypsy's przygotowujący drinka"
            fill
            className="object-cover object-center"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#a28468]/30 rounded-2xl -z-10"></div>
        </div>

        <div>
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
            Kim jestem?
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-[#1b3745] leading-tight mb-8">
            Pasjonat, nie tylko{" "}
            <span className="text-[#a28468]/60 italic font-light">barman.</span>
          </h2>

          <div className="space-y-5 text-[#1b3745]/50 text-sm leading-relaxed">
            <p>
              Cześć, jestem Gypsy (założyciel Gypsy&apos;s). Moją misją jest
              udowodnić, że barman to nie tylko osoba, która nalewa alkohol – to
              osoba, która tworzy atmosferę i dba o każdy, nawet najmniejszy
              detal Twojej imprezy.
            </p>
            <p>
              Zrezygnowałem z pracy w korporacjach, żeby robić to, co naprawdę
              kocham. Przez ostatnie lata obsłużyłem setki wydarzeń, od
              kameralnych spotkań po wesela na 300 osób, ciągle szukając nowych
              smaków i inspiracji.
            </p>
          </div>

          <div className="flex gap-10 mt-10 pt-10 border-t border-[#1b3745]/10">
            <div>
              <span className="font-playfair text-3xl text-[#a28468]">10+</span>
              <p className="text-[#1b3745]/30 text-[10px] tracking-widest uppercase mt-1">
                Lata doświadczenia
              </p>
            </div>
            <div>
              <span className="font-playfair text-3xl text-[#a28468]">
                100%
              </span>
              <p className="text-[#1b3745]/30 text-[10px] tracking-widest uppercase mt-1">
                Własnych receptur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
