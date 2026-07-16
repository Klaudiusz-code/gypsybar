import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Packages from "@/components/Packages";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export async function generateMetadata() {
  return {
    title: "Gypsy's Bar | Premium Mobile Cocktail Bar for Weddings & Events",

    description:
      "Gypsy's Bar creates unforgettable cocktail experiences for weddings, corporate events and private celebrations. Craft cocktails, handmade ingredients and professional mixology brought directly to your event.",

    keywords: [
      "mobile cocktail bar",
      "wedding cocktail bar",
      "event cocktail catering",
      "premium cocktail service",
      "bartender for weddings",
      "craft cocktails",
      "mixology events",
    ],

    openGraph: {
      title: "Gypsy's Bar | Premium Mobile Cocktail Bar for Weddings & Events",

      description:
        "Premium mobile cocktail bar experience with handcrafted cocktails, professional mixologists and the atmosphere of a top cocktail bar brought to your event.",

      url: "https://gypsysbar.pl/en",

      siteName: "Gypsy's Bar",

      locale: "en_US",

      type: "website",

      images: [
        {
          url: "/hero.jpg",
          width: 1200,
          height: 630,
          alt: "Gypsy's Bar Premium Mobile Cocktail Bar",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: "Gypsy's Bar | Premium Mobile Cocktail Bar",

      description:
        "Craft cocktails and professional mixology for weddings, events and private celebrations.",

      images: ["https://cms.gypsysbar.pl/wp-content/uploads/2026/07/2.jpg"],
    },

    alternates: {
      canonical: "https://gypsysbar.pl/en",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

const QUERY_HOME_EN = `
query HomePageEN {
  page(id: "home", idType: URI) {
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

      aboutTitle
      kimJestem
      aboutContent

      aboutStats {
        value
        label
      }
    }


    sekcjaGaleria {
      galleryLabel
      galleryTitle

      galleryItems {
        nodes {
          sourceUrl
        }
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

      menuImage {
        nodes {
          sourceUrl
        }
      }
    }
    sekcjaPakiety {
  malyNaglowek
  tytulPakietow

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

    liczbaGosci {
      liczba
    }
  }

  naglowekDodatkow

  listaDodatkow {
    nazwaDodatku
    description
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
  }
}
`;

export default async function EnHomePage() {
  const response = await fetch("https://cms.gypsysbar.pl/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: QUERY_HOME_EN,
    }),
  });

  const { data, errors } = await response.json();

  if (errors || !data?.page) {
    console.error("Błąd GraphQL:", errors);

    return (
      <main className="min-h-screen flex items-center justify-center">
        Error loading page
      </main>
    );
  }

  const page = data.page;

  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero data={page.sekcjaHero} />

      <Stats data={page.sekcjaStatystyki} />

      <About data={page.sekcjaOMnie} />
      <Experience data={page.sekcjaDoswiadczenie} />

      <Gallery data={page.sekcjaGaleria} />

      <Menu data={page.sekcjaMenu} />
      <Packages data={page.sekcjaPakiety} />
      <Faq data={page.sekcjaFaq} />

      <Contact data={page.sekcjaKontakt} />
    </main>
  );
}
