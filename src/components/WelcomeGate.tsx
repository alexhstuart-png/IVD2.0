import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "ivd_access_granted";

const WelcomeGate = ({ children }: { children: React.ReactNode }) => {
  const [granted, setGranted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setGranted(true);
    }
    setLoading(false);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    const trimmedName = name.trim();
    const trimmedCompany = company.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) errs.name = "Name is required";
    else if (trimmedName.length > 100) errs.name = "Name is too long";

    if (!trimmedCompany) errs.company = "Company is required";
    else if (trimmedCompany.length > 100) errs.company = "Company is too long";

    if (!trimmedEmail) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) errs.email = "Enter a valid email";
    else if (trimmedEmail.length > 255) errs.email = "Email is too long";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Submit to Netlify
    const formData = new URLSearchParams();
    formData.append("form-name", "welcome-gate");
    formData.append("name", name.trim());
    formData.append("company", company.trim());
    formData.append("email", email.trim());

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
    } catch {
      // Allow access even if submission fails
    }

    localStorage.setItem(STORAGE_KEY, "true");
    setGranted(true);
  };

  if (loading) return null;

  if (granted) return <>{children}</>;

  return (
    <>
      {/* Hidden Netlify form for bot detection */}
      <form name="welcome-gate" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="welcome-gate" />
        <input name="name" />
        <input name="company" />
        <input name="email" />
      </form>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md"
          >
            <div className="text-center mb-10">
              <span className="text-sm font-bold tracking-widest gold-text border border-primary px-3 py-1 inline-block mb-6">
                IVD
              </span>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground mb-3">
                Welcome to <span className="gold-italic">Iron Vault Digital</span>
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details to access the site.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  maxLength={100}
                  className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                {errors.company && <p className="text-destructive text-xs mt-1">{errors.company}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 border border-primary text-primary text-[11px] tracking-[0.15em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all mt-2"
              >
                ENTER SITE
              </button>
            </form>

            <p className="text-[10px] text-muted-foreground text-center mt-6">
              Your details are kept private and never shared.
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default WelcomeGate;
