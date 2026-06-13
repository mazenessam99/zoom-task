import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";
import ServicesSection from "@/components/landing/ServicesSection";


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar/>
      <HeroSection />
      <ServicesSection />

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-8 text-center">
          <p className="text-xs text-gray-400">
            © 2026 ZOOM Cleaning Services. All rights reserved.
          </p>
      </footer>
    </main>
  );
}
