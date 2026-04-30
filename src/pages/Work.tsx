import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";

const Work = () => {
  useEffect(() => {
    document.title = "Work — Iron Vault Digital";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
