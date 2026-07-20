export const dynamic = "force-dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Menu from "@/components/Menu";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialSection from "@/components/Social";
import Packages from "@/components/Packages";
import Experience from "@/components/Experience";

export async function generateMetadata() {
  const response = await fetch("https://cms.gypsysbar.pl/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query SEOHome {
          page(id: "strona-glowna", idType: URI) {
            seo {
              title
              description
              canonicalUrl
            }
          }
        }
      `,
    }),
  });

  const { data } = await response.json();

  const seo = data?.page?.seo;

  const title =
    seo?.title || "Gypsy's Bar | Mobilny Koktajlbar na Wesele i Eventy";

  const description =
    seo?.description ||
    "Profesjonalny mobilny koktajlbar na wesela, eventy firmowe i prywatne przyjęcia. Autorskie koktajle, miksologia i obsługa premium.";

  const image = "/hero.jpg";
  return {
    title,
    description,

    alternates: {
      canonical: seo?.canonicalUrl || "https://gypsysbar.pl/",
    },

    openGraph: {
      title,
      description,

      url: "https://gypsysbar.pl/",

      siteName: "Gypsy's Bar",

      locale: "pl_PL",

      type: "website",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Gypsy's Bar - Mobilny Koktajlbar",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [image],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}
const QUERY_GLOBAL_SETTINGS = `
query GlobalSettings {

  globalneUstawienia {
    globalSettingsV2 {

      email
      kontakt
      nazwaFirmy
      whatsapp

      logo {
        node {
          sourceUrl
          altText
        }
      }

      socialMedia {
        tiktok
        instagramUrl
        facebook
      }

    }
  }

}
`;
const QUERY_HOME_PL = `
query HomePage {

  page(id: "strona-glowna", idType: URI) {
    title
    
    sekcjaHero {

      heroTitle
      heroSubtitle
      heroCategories {
        name
      }
      heroButtonPrimary {
        text
        url
      }


      heroButtonSecondary {
        text
        url
      }
    }
    sekcjaStatystyki {

      statsItems {
        highlight
        label
      }
    }


    sekcjaOMnie {

      aboutVideoUrl {
        node {
          mediaItemUrl
        }
      }


      kimJestem
      aboutTitle
      aboutContent
    }

    sekcjaOferta {

      servicesLabel
      servicesTitle
      servicesDescription
      servicesItems {
        title
        description
          imageOffer{
          node{
            sourceUrl
          }
        }
      }
    }





    sekcjaGaleria {

      galleryLabel
      galleryTitle

      filmZPracy{
        node{
          sourceUrl
        }
      }
      galleryItems {

        nodes {
          sourceUrl
        }
      }
    }


    sekcjaOpinie {

      testimonialsLabel
      testimonialsTitle


      testimonialsItems {

        role
        content
        name
      }
      przycisk{
        text
        linkDoOpiniGoogle
        liczbaOpini
      }
    }


    sekcjaMenu {


      menuLabel
      menuTitle
      textAlco


      menuDrinks {

        drinkName
        drinkDescription
      }

      kartaDopasowanaDoWas
      menuImage {

        nodes {
          sourceUrl
        }
      }
    }

    sekcjaPakiety {


      malyNaglowek


      pakietBasic {


        nazwaPakietu
        podtytul


        tytulWCenieZawarte



        coZawiera {
          element
        }



        tytulWybrorKoktajli



        menuDrinkow {

          bazaAlkholu
          drinki
        }
        cta {


          whatshapp {

            linkDoWhatshapa
          }
         instagram {

            linkDoInsta
          }


          email
        }
        naglowekCta
        opisCta

      }

      pakietFundamental {


        nazwaPakietu
        podtytul
        description


        benefity {

          benefit
        }

        pricingNote
        cechyPakietu {

          cecha
          opis
        }


      }
    }

    sekcjaDoswiadczenie {
      malyNaglowek
      tytul
      years
      punktyDoswiadczenia {

        numer
        tytul
        opis
      }
      sekcjaOLokalu {

        naglowekSekcji
        nazwaLokalu
        opisLokalu

      }
      cytat

    }

    sekcjaFaq {
      faqLabel
      faqTitle
      faqItems {

        question
        answer
      }
    }

    sekcjaKontakt {


      contactLabel
      contactTitle
      contactDescription
      contactImageUrl {

        node {

          sourceUrl

        }

      }

      contactPhone
      contactWhatsapp
      contactEmail
      formNameLabel
      formDateLabel
      formMessageLabel
      formButtonText

    }


    sekcjaSocialMedia {
     socialLabel
      socialTitle
      socialDescription

    }
  }

}
`;

export default async function PlHomePage() {
  const [pageResponse, settingsResponse] = await Promise.all([
    fetch("https://cms.gypsysbar.pl/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY_HOME_PL,
      }),
      cache: "no-store",
    }),

    fetch("https://cms.gypsysbar.pl/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY_GLOBAL_SETTINGS,
      }),
      cache: "no-store",
    }),
  ]);

  if (!pageResponse.ok || !settingsResponse.ok) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-[#0a1218]">
        Błąd ładowania strony...
      </main>
    );
  }

  const { data, errors } = await pageResponse.json();

  const { data: settingsData } = await settingsResponse.json();

  if (errors || !data?.page) {
    console.error("Błąd GraphQL:", errors);

    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-[#0a1218]">
        Błąd danych strony...
      </main>
    );
  }

  const page = data.page;

  const settings = settingsData?.globalneUstawienia?.globalSettingsV2;

  return (
    <main className="overflow-x-hidden">
      <Nav settings={settings} />

      <Hero data={page.sekcjaHero} />

      <Stats data={page.sekcjaStatystyki} />

      <About data={page.sekcjaOMnie} />

      <Experience data={page.sekcjaDoswiadczenie} />

      <Services data={page.sekcjaOferta} />

      <Gallery data={page.sekcjaGaleria} settings={settings} />

      <Testimonials data={page.sekcjaOpinie} />

      <Menu data={page.sekcjaMenu} />

      <Packages data={page.sekcjaPakiety} settings={settings} />

      <Faq data={page.sekcjaFaq} />

      <Contact data={page.sekcjaKontakt} settings={settings} />

      <SocialSection settings={settings} data={page.sekcjaSocialMedia} />
      <Footer />
    </main>
  );
}
