export const dynamic = "force-dynamic";
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
import SocialSection from "@/components/Social";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

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
      kartaDopasowanaDoWas
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

export default async function EnHomePage() {
  const [pageResponse, settingsResponse] = await Promise.all([
    fetch("https://cms.gypsysbar.pl/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY_HOME_EN,
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

  const pageResult = await pageResponse.json();
  const settingsResult = await settingsResponse.json();

  console.log("PAGE GRAPHQL:", pageResult);
  console.log("SETTINGS GRAPHQL:", settingsResult);

  const page = pageResult?.data?.page;

  const settings = settingsResult.data?.globalneUstawienia?.globalSettingsV2;

  if (!page) {
    return <main>Error loading page</main>;
  }

  return (
    <main className="overflow-x-hidden">
      <Nav settings={settings} />

      <Hero data={page.sekcjaHero} />

      <Stats data={page.sekcjaStatystyki} />

      <About data={page.sekcjaOMnie} />

      <Experience data={page.sekcjaDoswiadczenie} />

      <Services data={page.sekcjaOferta} />

      <Gallery data={page.sekcjaGalseria} settings={settings} />

      <Testimonials data={page.sekcjaOpinie} />

      <Menu data={page.sekcjaMenu} />

      <Packages data={page.sekcjaPakiety} settings={settings} />

      <Faq data={page.sekcjaFaq} />

      <Contact data={page.sekcjaKontakt} settings={settings} />

      <SocialSection settings={settings} />

      <Footer />
    </main>
  );
}
