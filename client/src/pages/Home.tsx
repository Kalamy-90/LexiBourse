/**
 * LexiBourse — Home Page
 * Dark Finance Premium: assemblage de toutes les sections
 */
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import CommandsSection from "@/components/landing/CommandsSection";
import HowToStartSection from "@/components/landing/HowToStartSection";
import FaqSection from "@/components/landing/FaqSection";
import AboutSection from "@/components/landing/AboutSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="site-shell min-h-screen text-slate-100">
      {/* Luxury noise overlay */}
      <div className="luxury-noise" aria-hidden="true" />

      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <CommandsSection />
          <HowToStartSection />
          <FaqSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
