
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gypsy's Bar | Premium Mobile Cocktail Bar",
    template: "%s | Gypsy's Bar",
  },

  description:
    "Premium mobile cocktail bar for weddings, corporate events and private celebrations. Craft cocktails, professional mixology and unforgettable experiences.",

  keywords: [
    "mobile cocktail bar",
    "wedding cocktail bar",
    "cocktail catering",
    "event bartender",
    "premium cocktails",
    "mixology",
  ],

  metadataBase: new URL("https://gypsysbar.pl"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Gypsy's Bar | Premium Mobile Cocktail Bar",
    description:
      "Craft cocktails and professional mixology brought directly to your event.",
    url: "https://gypsysbar.pl",
    siteName: "Gypsy's Bar",
    locale: "pl_PL",
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
      "Premium cocktails and professional mixology for weddings and events.",
    images: ["/hero.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  themeColor: "#0a1218",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="font-sans text-white antialiased">
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '1439313574243322');
              fbq('track', 'PageView');
            `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1439313574243322&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
