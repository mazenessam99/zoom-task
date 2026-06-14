import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import Footer from "@/components/footer/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      
      <Navbar/>
      <HeroSection />
      <ServicesSection />
      <Footer/>

    </main>
  );
}
