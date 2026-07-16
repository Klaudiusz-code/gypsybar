/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TA LINIJKA NAPRAWIA BŁĄD "resolved to private ip" NA LOCALHOST
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "https://cms.gypsysbar.pl/graphq",
        pathname: "/gypsy-bar/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
