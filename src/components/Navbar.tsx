import { useState } from "react";
import { Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const navLinks = [
  { label: "SERVICES", href: "/#services" },
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/#why" },
  { label: "CONTACT", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-widest gold-text border border-primary px-2 py-0.5">IVD</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.15em] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 border border-primary text-primary text-[11px] tracking-[0.15em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            onClick={() => trackEvent("cta_click", { cta_label: "Unlock Growth", cta_location: "navbar" })}
          >
            UNLOCK GROWTH
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="section-container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[11px] tracking-[0.15em] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => { trackEvent("cta_click", { cta_label: "Unlock Growth", cta_location: "navbar_mobile" }); setIsOpen(false); }}
              className="px-5 py-2 border border-primary text-primary text-[11px] tracking-[0.15em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-center"
            >
              UNLOCK GROWTH
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
