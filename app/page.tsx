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

      aboutStats {
        value
        label
      }
    }


    sekcjaOferta {
      servicesLabel
      servicesTitle
      servicesDescription

      servicesItems {
        imageUrl {
          node {
            sourceUrl
          }
        }

        title
        description
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


    sekcjaOpinie {
      testimonialsLabel
      testimonialsTitle

      testimonialsItems {
        role
        content
        name
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




    sekcjaSocialMedia {

      socialLabel
      socialTitle
      socialDescription


      instagram {

        nazwaProfiluInstagra
        nazwaUzytkownika
        link
      }


      tiktokitems {

        nazwaUzytkownikaTiktok
        nazwaTiktoka
        linkDoProfiliuTiktok
      }


      facebook {

        nazwaFacebooka
        nazwaUzytkownikaFacebooka
        linkDoProfiluFacebooka
      }
    }

  }
}
`;

export default async function PlHomePage() {
  const response = await fetch("https://cms.gypsysbar.pl/graphql", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: QUERY_HOME_PL,
    }),
  });

  if (!response.ok) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-[#0a1218]">
        Błąd ładowania strony...
      </main>
    );
  }

  const { data, errors } = await response.json();

  if (errors || !data?.page) {
    console.error("Błąd GraphQL:", errors);

    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-[#0a1218]">
        Błąd danych strony...
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

      <Experience />

      <Services data={page.sekcjaOferta} />

      <Gallery data={page.sekcjaGaleria} />

      <Testimonials data={page.sekcjaOpinie} />

      <Menu data={page.sekcjaMenu} />

      <Packages data={page.sekcjaPakiety} />

      <Faq data={page.sekcjaFaq} />

      <Contact data={page.sekcjaKontakt} />

      <SocialSection data={page.sekcjaSocialMedia} />

      <Footer />
    </main>
  );
}
