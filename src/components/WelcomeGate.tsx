import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "ivd_access_granted";
const DELAY_MS = 30000;

const WelcomeGate = ({ children }: { children: React.ReactNode }) => {
  const [showGate, setShowGate] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") return;
    const timer = setTimeout(() => setShowGate(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) errs.name = "Name is required";
    else if (trimmedName.length > 100) errs.name = "Name is too long";

    if (!trimmedEmail) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) errs.email = "Enter a valid email";
    else if (trimmedEmail.length > 255) errs.email = "Email is too long";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = new URLSearchParams();
    formData.append("form-name", "welcome-gate");
    formData.append("name", name.trim());
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
    setShowGate(false);
    setDismissed(true);
  };

  const handleDismiss = () => {
    setShowGate(false);
    setDismissed(true);
  };

  return (
    <>
      {children}

      {/* Hidden Netlify form for bot detection */}
      <form name="welcome-gate" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="welcome-gate" />
        <input name="name" />
        <input name="email" />
      </form>

      <AnimatePresence>
        {showGate && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-[100] w-full max-w-sm"
          >
            <div className="bg-card border border-border shadow-2xl p-6 relative">
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground text-lg leading-none"
                aria-label="Close"
              >
                ×
              </button>

              <div className="mb-4">
                <span className="text-[10px] font-bold tracking-widest gold-text border border-primary px-2 py-0.5 inline-block mb-3">
                  IVD
                </span>
                <h2 className="text-lg font-bold tracking-tight text-foreground mb-1">
                  Stay in the loop
                </h2>
                <p className="text-xs text-muted-foreground">
                  Drop your details and we'll be in touch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    className="w-full bg-background border border-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={255}
                    className="w-full bg-background border border-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 border border-primary text-primary text-[11px] tracking-[0.15em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  SUBMIT
                </button>
              </form>

              <p className="text-[10px] text-muted-foreground text-center mt-3">
                Your details are kept private and never shared.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WelcomeGate;
