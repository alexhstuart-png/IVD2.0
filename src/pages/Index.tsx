import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Iron Vault Digital — Built for industries that can't afford downtime";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <CaseStudiesSection />
        <WhySection />
        <ProcessSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
