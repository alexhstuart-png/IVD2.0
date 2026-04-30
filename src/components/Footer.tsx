const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/40 pt-16 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left */}
          <div>
            <a href="/" className="font-serif text-xl gold-text leading-none">
              IRON VAULT <span className="italic">DIGITAL</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Built for industries that can't afford downtime.
            </p>
          </div>

          {/* Centre */}
          <div className="md:text-center">
            <div className="flex md:justify-center gap-6 mb-4 flex-wrap">
              <a href="/#case-studies" className="text-[11px] uppercase tracking-[0.15em] font-mono text-muted-foreground hover:text-primary transition-colors">Work</a>
              <a href="/#services" className="text-[11px] uppercase tracking-[0.15em] font-mono text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="/#why" className="text-[11px] uppercase tracking-[0.15em] font-mono text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="/#contact" className="text-[11px] uppercase tracking-[0.15em] font-mono text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-xs text-muted-foreground">
              Shift Intelligence —{" "}
              <a href="https://shiftintel.com.au" target="_blank" rel="noreferrer" className="gold-text hover:underline">
                shiftintel.com.au
              </a>
            </p>
          </div>

          {/* Right */}
          <div className="md:text-right space-y-2">
            <p className="text-xs text-muted-foreground font-mono">ABN 17 636 500 418</p>
            <p className="text-xs">
              <a href="mailto:alex@ironvaultdigital.com.au" className="text-foreground/90 hover:text-primary transition-colors">
                alex@ironvaultdigital.com.au
              </a>
            </p>
            <p className="text-xs text-muted-foreground">Kalgoorlie, Western Australia</p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[0.18em] font-mono text-muted-foreground">
            © {new Date().getFullYear()} Iron Vault Digital. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.18em] font-mono text-muted-foreground">
            Designed by <span className="gold-text">Iron Vault Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
