import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Packages from "@/components/Packages";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

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
  const response = await fetch("https://gypsysbar.pl/graphql", {
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

      <Gallery data={page.sekcjaGaleria} />

      <Menu data={page.sekcjaMenu} />
      <Packages data={page.sekcjaPakiety} />
      <Faq data={page.sekcjaFaq} />

      <Contact data={page.sekcjaKontakt} />
    </main>
  );
}
