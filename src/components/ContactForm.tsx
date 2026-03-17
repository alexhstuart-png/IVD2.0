import { motion } from "framer-motion";
import { Mail, MapPin, Zap } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-sunken">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-uppercase mb-3">// 03 — Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            No Dumb Questions. <span className="gold-italic">Just Ask.</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mb-12">
            Tell us what you're after. We'll get back to you fast — no hard sell, no runaround.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail size={18} className="gold-text mt-0.5 flex-shrink-0" />
              <div>
                <p className="label-uppercase mb-1">Email</p>
                <p className="text-sm text-foreground">alex@ironvaultdigital.com.au</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={18} className="gold-text mt-0.5 flex-shrink-0" />
              <div>
                <p className="label-uppercase mb-1">Location</p>
                <p className="text-sm text-foreground">Western Australia · Serving All of Australia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Zap size={18} className="gold-text mt-0.5 flex-shrink-0" />
              <div>
                <p className="label-uppercase mb-1">Response Time</p>
                <p className="text-sm text-foreground">Within a few hours</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              name="contact-v1"
              method="POST"
              data-netlify="true"
              action="/success"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact-v1" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="label-uppercase block mb-2">Your Name</label>
                  <input type="text" name="name" id="name" required className="form-input-base" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="business" className="label-uppercase block mb-2">Business Name</label>
                  <input type="text" name="business" id="business" className="form-input-base" placeholder="Acme Pty Ltd" />
                </div>
                <div>
                  <label htmlFor="email" className="label-uppercase block mb-2">Email</label>
                  <input type="email" name="email" id="email" required className="form-input-base" placeholder="jane@company.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="label-uppercase block mb-2">Phone (optional)</label>
                  <input type="tel" name="phone" id="phone" className="form-input-base" placeholder="+61 400 000 000" />
                </div>
              </div>

              {/* Service selection */}
              <div>
                <label htmlFor="service" className="label-uppercase block mb-2">What are you after?</label>
                <select name="service" id="service" required className="form-input-base appearance-none cursor-pointer">
                  <option value="">Pick the closest one</option>
                  <option value="new-website">A new website</option>
                  <option value="seo-content">SEO & content</option>
                  <option value="paid-ads">Paid ads (Google / Meta)</option>
                  <option value="social-media">Social media management</option>
                  <option value="email-marketing">Email marketing</option>
                  <option value="brand-strategy">Brand strategy</option>
                  <option value="full-service">A bit of everything</option>
                  <option value="exploring">Not sure yet — just exploring</option>
                </select>
              </div>

              {/* Additional services - Checkboxes */}
              <fieldset>
                <legend className="label-uppercase mb-3">Also interested in (select all that apply)</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { value: "seo", label: "SEO & Content" },
                    { value: "paid-media", label: "Paid Media" },
                    { value: "social-media", label: "Social Media" },
                    { value: "web-design", label: "Web Design & Dev" },
                    { value: "email-marketing", label: "Email Marketing" },
                    { value: "brand-strategy", label: "Brand Strategy" },
                    { value: "analytics", label: "Analytics & Reporting" },
                    { value: "google-ads", label: "Google Ads" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                    >
                      <input
                        type="checkbox"
                        name="services[]"
                        value={option.value}
                        className="w-4 h-4 rounded border-border accent-[hsl(42,55%,55%)] flex-shrink-0"
                      />
                      <span className="text-sm text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Add-ons - Checkboxes */}
              <fieldset>
                <legend className="label-uppercase mb-3">Add-ons</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { value: "hosting", label: "Hosting & Management" },
                    { value: "content-writing", label: "Content Writing" },
                    { value: "branding", label: "Branding & Identity" },
                    { value: "ongoing-support", label: "Ongoing Support" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                    >
                      <input
                        type="checkbox"
                        name="addons[]"
                        value={option.value}
                        className="w-4 h-4 rounded border-border accent-[hsl(42,55%,55%)] flex-shrink-0"
                      />
                      <span className="text-sm text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Timeline - Radio */}
              <fieldset>
                <legend className="label-uppercase mb-3">Project Timeline</legend>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: "asap", label: "ASAP" },
                    { value: "1-month", label: "< 1 Month" },
                    { value: "1-3-months", label: "1–3 Months" },
                    { value: "flexible", label: "Flexible" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="px-5 py-2.5 border border-border rounded-lg cursor-pointer text-sm font-medium transition-all duration-200 hover:border-primary/50 has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:checked]:border-primary"
                    >
                      <input type="radio" name="timeline" value={option.value} className="sr-only" required />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Message */}
              <div>
                <label htmlFor="message" className="label-uppercase block mb-2">How can we help?</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="form-input-base rounded-lg resize-y"
                  placeholder="Tell us about your goals..."
                />
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="label-uppercase block mb-2">Monthly budget (roughly)</label>
                <select name="budget" id="budget" required className="form-input-base appearance-none cursor-pointer">
                  <option value="">Ballpark is fine</option>
                  <option value="under-500">Under $500/month</option>
                  <option value="500-1500">$500 – $1,500/month</option>
                  <option value="1500-3000">$1,500 – $3,000/month</option>
                  <option value="3000-plus">$3,000+/month</option>
                  <option value="one-off">One-off project only</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-bold text-[11px] tracking-[0.15em] uppercase hover:opacity-90 active:scale-[0.99] transition-all"
              >
                Send It — We'll Be In Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
