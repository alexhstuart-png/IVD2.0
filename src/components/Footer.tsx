const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-sm font-bold tracking-widest gold-text border border-primary px-2 py-0.5">IVD</span>
            <p className="text-xs text-muted-foreground mt-3">
              Iron Vault Digital · Perth, Western Australia
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#why" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Iron Vault Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
