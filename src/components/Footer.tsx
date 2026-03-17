const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-sm font-semibold text-foreground">Iron Vault Digital</p>
            <p className="text-xs text-muted-foreground mt-1">
              Building better digital products.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#process" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Iron Vault Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
