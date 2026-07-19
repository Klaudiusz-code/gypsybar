import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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

    images: [
      "/hero.jpg",
    ],
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
        {children}
      </body>
    </html>
  );
}