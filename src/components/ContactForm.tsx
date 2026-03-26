import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Zap, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "@/lib/gtag";

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState<"enquiry" | "call">("enquiry");
  const navigate = useNavigate();
  const enquiryFormRef = useRef<HTMLFormElement>(null);
  const callFormRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formName = formData.get("form-name") as string;
    const body = new URLSearchParams(formData as unknown as Record<string, string>).toString();

    trackEvent("form_submit", {
      event_category: "Lead",
      form_name: formName,
    });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
    } catch {
      // Submit even if fetch fails
    }

    navigate("/success");
  };

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
          <p className="text-muted-foreground text-sm max-w-xl mb-8">
            Tell us what you're after. We'll get back to you fast — no hard sell, no runaround.
          </p>

          {/* Tab switcher */}
          <div className="flex gap-3 mb-12">
            <button
              onClick={() => setActiveTab("enquiry")}
              className={`px-5 py-2.5 text-[11px] tracking-[0.15em] font-semibold uppercase border transition-all ${
                activeTab === "enquiry"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              Send an Enquiry
            </button>
            <button
              onClick={() => setActiveTab("call")}
              className={`px-5 py-2.5 text-[11px] tracking-[0.15em] font-semibold uppercase border transition-all flex items-center gap-2 ${
                activeTab === "call"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              <Phone size={14} />
              Book a 15-Min Call
            </button>
          </div>
        </motion.div>

        {activeTab === "enquiry" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={18} className="gold-text mt-0.5 flex-shrink-0" />
                <div>
                  <p className="label-uppercase mb-1">Email</p>
                  <p className="text-sm text-foreground">hello@ironvaultdigital.com.au</p>
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

            {/* Enquiry form */}
            <div className="lg:col-span-2">
              <form
                ref={enquiryFormRef}
                name="contact-v1"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact-v1" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="label-uppercase block mb-2">Your Name</label>
                    <input type="text" name="name" id="name" autoComplete="name" required className="form-input-base" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="business" className="label-uppercase block mb-2">Business Name</label>
                    <input type="text" name="business" id="business" autoComplete="organization" className="form-input-base" placeholder="Acme Pty Ltd" />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-uppercase block mb-2">Email</label>
                    <input type="email" name="email" id="email" autoComplete="email" required className="form-input-base" placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label-uppercase block mb-2">Phone (optional)</label>
                    <input type="tel" name="phone" id="phone" autoComplete="tel" className="form-input-base" placeholder="+61 400 000 000" />
                  </div>
                </div>

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
        ) : (
          /* Book a Call questionnaire */
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-2">
                Quick Questionnaire
              </h3>
              <p className="text-sm text-muted-foreground">
                Fill this out so we can make the most of our 15 minutes together.
              </p>
            </div>

            <form
              ref={callFormRef}
              name="book-call"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="book-call" />

              {/* Business basics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="call-name" className="label-uppercase block mb-2">Your Name</label>
                  <input type="text" name="name" id="call-name" autoComplete="name" required maxLength={100} className="form-input-base" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="call-company" className="label-uppercase block mb-2">Company Name</label>
                  <input type="text" name="company" id="call-company" autoComplete="organization" required maxLength={100} className="form-input-base" placeholder="Acme Pty Ltd" />
                </div>
                <div>
                  <label htmlFor="call-email" className="label-uppercase block mb-2">Email</label>
                  <input type="email" name="email" id="call-email" autoComplete="email" required maxLength={255} className="form-input-base" placeholder="jane@company.com" />
                </div>
                <div>
                  <label htmlFor="call-phone" className="label-uppercase block mb-2">Phone</label>
                  <input type="tel" name="phone" id="call-phone" autoComplete="tel" required maxLength={20} className="form-input-base" placeholder="+61 400 000 000" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="call-website" className="label-uppercase block mb-2">Current Website (if any)</label>
                  <input type="url" name="website" id="call-website" autoComplete="url" maxLength={255} className="form-input-base" placeholder="https://yoursite.com.au" />
                </div>
              </div>

              {/* Project details */}
              <div>
                <label htmlFor="call-goal" className="label-uppercase block mb-2">What's the #1 thing you want to achieve?</label>
                <select name="goal" id="call-goal" required className="form-input-base appearance-none cursor-pointer">
                  <option value="">Select one</option>
                  <option value="more-leads">Get more leads</option>
                  <option value="more-sales">Increase online sales</option>
                  <option value="brand-awareness">Build brand awareness</option>
                  <option value="new-website">Launch a new website</option>
                  <option value="improve-seo">Rank higher on Google</option>
                  <option value="social-growth">Grow on social media</option>
                  <option value="not-sure">Not sure — need guidance</option>
                </select>
              </div>

              <fieldset>
                <legend className="label-uppercase mb-3">Services you're interested in</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { value: "seo", label: "SEO & Content" },
                    { value: "paid-ads", label: "Google / Meta Ads" },
                    { value: "web-design", label: "Website Design" },
                    { value: "social-media", label: "Social Media" },
                    { value: "email-marketing", label: "Email Marketing" },
                    { value: "full-strategy", label: "Full Digital Strategy" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                    >
                      <input
                        type="checkbox"
                        name="call-services[]"
                        value={option.value}
                        className="w-4 h-4 rounded border-border accent-[hsl(42,55%,55%)] flex-shrink-0"
                      />
                      <span className="text-sm text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="call-budget" className="label-uppercase block mb-2">Monthly budget range</label>
                <select name="budget" id="call-budget" required className="form-input-base appearance-none cursor-pointer">
                  <option value="">Ballpark is fine</option>
                  <option value="under-500">Under $500/month</option>
                  <option value="500-1500">$500 – $1,500/month</option>
                  <option value="1500-3000">$1,500 – $3,000/month</option>
                  <option value="3000-plus">$3,000+/month</option>
                  <option value="one-off">One-off project</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <fieldset>
                <legend className="label-uppercase mb-3">When do you need this done?</legend>
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
                      <input type="radio" name="call-timeline" value={option.value} className="sr-only" required />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="call-notes" className="label-uppercase block mb-2">Anything else we should know?</label>
                <textarea
                  name="notes"
                  id="call-notes"
                  rows={3}
                  maxLength={1000}
                  className="form-input-base rounded-lg resize-y"
                  placeholder="Current pain points, goals, questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-bold text-[11px] tracking-[0.15em] uppercase hover:opacity-90 active:scale-[0.99] transition-all"
              >
                Book My 15-Minute Call
              </button>
            </form>
          </motion.div>
        )}
      </div>

      {/* Hidden Netlify form for contact-v1 bot detection */}
      <form name="contact-v1" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="contact-v1" />
        <input name="name" />
        <input name="business" />
        <input name="email" />
        <input name="phone" />
        <input name="service" />
        <input name="services[]" />
        <input name="addons[]" />
        <input name="timeline" />
        <input name="message" />
        <input name="budget" />
      </form>

      {/* Hidden Netlify form for book-call bot detection */}
      <form name="book-call" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="book-call" />
        <input name="name" />
        <input name="company" />
        <input name="email" />
        <input name="phone" />
        <input name="website" />
        <input name="goal" />
        <input name="call-services[]" />
        <input name="budget" />
        <input name="call-timeline" />
        <input name="notes" />
      </form>
    </section>
  );
};

export default ContactForm;
