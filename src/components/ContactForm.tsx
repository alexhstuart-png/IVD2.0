import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, FileText, Hash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackFormSubmit } from "@/lib/gtag";

const ease = [0.16, 1, 0.3, 1] as const;

const ContactForm = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams(formData as unknown as Record<string, string>).toString();

    trackFormSubmit("Contact Form");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
    } catch {
      // proceed regardless
    }

    navigate("/success");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <p className="label-uppercase mb-5">// Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-foreground leading-[1.05]">
            Let's <span className="italic gold-text">build something.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-2 space-y-10"
          >
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
              Whether you've got a specific problem to solve or just want to explore what's
              possible — we're easy to talk to.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={18} className="gold-text mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="label-uppercase mb-1">Email</p>
                  <a href="mailto:alex@ironvaultdigital.com.au" className="text-sm text-foreground hover:gold-text transition-colors">
                    alex@ironvaultdigital.com.au
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FileText size={18} className="gold-text mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="label-uppercase mb-1">Enquiry Form</p>
                  <a href="/enquiry" className="text-sm text-foreground hover:gold-text transition-colors">
                    ironvaultdigital.com.au/enquiry
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="gold-text mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="label-uppercase mb-1">Location</p>
                  <p className="text-sm text-foreground">Kalgoorlie, Western Australia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Hash size={18} className="gold-text mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="label-uppercase mb-1">ABN</p>
                  <p className="text-sm text-foreground font-mono">17 636 500 418</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="lg:col-span-3"
          >
            <form
              name="contact-v1"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5 p-6 md:p-8 bg-card border border-border rounded-md"
            >
              <input type="hidden" name="form-name" value="contact-v1" />
              <p hidden>
                <label>Don't fill: <input name="bot-field" /></label>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="label-uppercase block mb-2">Name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" className="form-input-base" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="business" className="label-uppercase block mb-2">Company</label>
                  <input id="business" name="business" type="text" autoComplete="organization" className="form-input-base" placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="email" className="label-uppercase block mb-2">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className="form-input-base" placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="label-uppercase block mb-2">Phone</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className="form-input-base" placeholder="+61 400 000 000" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="label-uppercase block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="form-input-base resize-y"
                  placeholder="Tell us about your business and what you're trying to solve"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-primary text-primary-foreground font-mono text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
