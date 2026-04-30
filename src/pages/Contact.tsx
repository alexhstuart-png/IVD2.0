import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact — Iron Vault Digital";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
