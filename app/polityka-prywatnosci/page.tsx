export const dynamic = "force-dynamic";

export default async function PrivacyPolicyPage() {
  const response = await fetch("https://cms.gypsysbar.pl/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query PrivacyPolicy {
            page(id: "polityka-prywatnosci", idType: URI) {
              title
              content
            }
          }
        `,
    }),
    cache: "no-store",
  });

  const { data } = await response.json();
  const page = data?.page;

  if (!page) {
    return (
      <main className="min-h-screen bg-[#0a1218] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#a28468] text-sm tracking-widest uppercase mb-4">
            Błąd 404
          </p>
          <h1 className="font-playfair text-3xl text-[#FDFBF7]">
            Nie znaleziono strony
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a1218] pt-36 pb-24 px-6 md:px-12">
      <article className="max-w-3xl mx-auto">
        <header className="mb-16 md:mb-20">
          <p className="text-[#a28468] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium">
            Dokument prawny
          </p>
          <h1 className="font-playfair text-3xl md:text-5xl text-[#FDFBF7] leading-tight mb-8">
            {page.title}
          </h1>
          <div className="w-16 h-px bg-[#a28468]/30"></div>
        </header>

        <div
          className="wp-content"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />

        <div className="my-20 p-8 md:p-12 border border-white/[0.05] rounded-sm bg-white/[0.01] text-center">
          <a
            href="/"
            className="group inline-flex items-center gap-3 bg-[#a28468] text-[#0a1218] px-8 py-4 text-[8px] md:text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-[#c4a882] transition-all duration-300 shadow-lg shadow-[#a28468]/20"
          >
            Przejdź na stronę główną
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        <div className="pt-8 border-t border-white/[0.05]">
          <p className="text-[#FDFBF7]/20 text-xs text-center">
            Ostatnia aktualizacja dokumentu znajduje się w treści powyżej.
          </p>
        </div>
      </article>
    </main>
  );
}
