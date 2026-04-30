import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";

const About = () => {
  useEffect(() => {
    document.title = "About — Iron Vault Digital";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <WhySection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
