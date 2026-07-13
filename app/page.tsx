import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Packages from "@/components/Packages";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialSection from "@/components/Social";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Menu />
      <Packages />
      <Faq />
      <Contact />
      <SocialSection />
      <Footer />
    </main>
  );
}
