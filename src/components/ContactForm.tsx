import { motion } from "framer-motion";

const serviceOptions = [
  { value: "design-system", label: "Design System", desc: "Scalable UI kits and documentation" },
  { value: "web-development", label: "Web Development", desc: "High-performance React/Next.js sites" },
  { value: "digital-strategy", label: "Digital Strategy", desc: "Market analysis and growth planning" },
  { value: "security-audit", label: "Security Audit", desc: "Penetration testing and compliance" },
  { value: "performance", label: "Performance", desc: "Speed optimization and infrastructure" },
  { value: "analytics-seo", label: "Analytics & SEO", desc: "Data insights and search optimization" },
];

const addOnOptions = [
  { value: "hosting-management", label: "Hosting & Management" },
  { value: "content-writing", label: "Content Writing" },
  { value: "branding-identity", label: "Branding & Identity" },
  { value: "ongoing-support", label: "Ongoing Support" },
];

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
          <p className="label-uppercase mb-4">Start a Project</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mb-12">
            Tell us about your project. We'll review your brief and respond within 24 hours.
          </p>
        </motion.div>

        {/* 
          Netlify Forms: Standard HTML form with data-netlify="true".
          Hidden input "form-name" matches the form's name attribute.
          All fields have unique name attributes.
          Checkboxes use name="services[]" for array capture.
        */}
        <form
          name="project-inquiry"
          method="POST"
          data-netlify="true"
          action="/success"
          className="space-y-12 max-w-3xl"
        >
          <input type="hidden" name="form-name" value="project-inquiry" />

          {/* Services - Checkboxes */}
          <fieldset className="space-y-4">
            <legend className="label-uppercase mb-4 block">Select Services</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {serviceOptions.map((option) => (
                <label
                  key={option.value}
                  className="group relative flex items-center gap-4 p-4 bg-card border border-border rounded-xl cursor-pointer hover:border-foreground/30 transition-all duration-200 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                >
                  <input
                    type="checkbox"
                    name="services[]"
                    value={option.value}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary flex-shrink-0"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium text-foreground">{option.label}</span>
                    <span className="text-xs text-muted-foreground">{option.desc}</span>
                  </div>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Add-ons - Checkboxes */}
          <fieldset className="space-y-4">
            <legend className="label-uppercase mb-4 block">Add-ons</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {addOnOptions.map((option) => (
                <label
                  key={option.value}
                  className="group flex items-center gap-3 p-3 bg-card border border-border rounded-xl cursor-pointer hover:border-foreground/30 transition-all duration-200 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                >
                  <input
                    type="checkbox"
                    name="addons[]"
                    value={option.value}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary flex-shrink-0"
                  />
                  <span className="text-sm font-medium text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Timeline - Radio */}
          <fieldset className="space-y-4">
            <legend className="label-uppercase mb-4 block">Project Timeline</legend>
            <div className="flex flex-wrap gap-3">
              {[
                { value: "urgent", label: "< 1 Month" },
                { value: "standard", label: "1–3 Months" },
                { value: "flexible", label: "3–6 Months" },
                { value: "ongoing", label: "Ongoing" },
              ].map((option) => (
                <label
                  key={option.value}
                  className="px-5 py-2.5 border border-border rounded-xl cursor-pointer text-sm font-medium transition-all duration-200 hover:border-foreground/30 has-[:checked]:bg-foreground has-[:checked]:text-background has-[:checked]:border-foreground"
                >
                  <input
                    type="radio"
                    name="timeline"
                    value={option.value}
                    className="sr-only"
                    required
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Budget - Select */}
          <div className="space-y-2">
            <label htmlFor="budget" className="label-uppercase block">
              Budget Range
            </label>
            <select
              name="budget"
              id="budget"
              required
              className="w-full max-w-xs px-4 py-3 bg-card border border-border rounded-xl text-sm text-foreground focus:border-primary outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select budget</option>
              <option value="5k-10k">$5,000 – $10,000</option>
              <option value="10k-25k">$10,000 – $25,000</option>
              <option value="25k-50k">$25,000 – $50,000</option>
              <option value="50k+">$50,000+</option>
            </select>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="label-uppercase block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-input-base"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="label-uppercase block">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-input-base"
                placeholder="jane@company.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="label-uppercase block">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-input-base"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="label-uppercase block">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="form-input-base"
                placeholder="Acme Inc."
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="label-uppercase block">
              Project Brief
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:border-primary outline-none transition-colors text-sm resize-y"
              placeholder="Tell us about your goals, requirements, and any specific needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all text-sm"
          >
            Send Project Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
