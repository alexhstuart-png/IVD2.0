const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-24 md:py-32 max-w-3xl">
        <a href="/" className="inline-block mb-12 text-sm font-bold tracking-widest gold-text border border-primary px-2 py-0.5">IVD</a>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: March 2026</p>

        <div className="space-y-10 text-sm leading-relaxed text-secondary-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Introduction</h2>
            <p>Iron Vault Digital (ABN: 17 636 500 418) is committed to protecting your privacy. This policy explains how we collect, use, and manage your personal information.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Information We Collect</h2>
            <p>We collect your name, email address, phone number, and business details when you submit an enquiry form or engage with our lead generation campaigns.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">How We Use Your Information</h2>
            <p>We use your information to respond to enquiries, provide digital marketing services, and communicate about your project. We do not sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Third-Party Tools</h2>
            <p>We use tools including Google Analytics, Meta Ads, and Stripe. These services have their own privacy policies and may collect data independently.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Data Security</h2>
            <p>We take reasonable steps to protect your information from misuse, loss, or unauthorised access.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at{" "}
              <a href="mailto:alex@ironvaultdigital.com.au" className="gold-text hover:underline">alex@ironvaultdigital.com.au</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Contact</h2>
            <p>Iron Vault Digital</p>
            <p><a href="mailto:alex@ironvaultdigital.com.au" className="gold-text hover:underline">alex@ironvaultdigital.com.au</a></p>
            <p><a href="https://ironvaultdigital.com.au" className="gold-text hover:underline">ironvaultdigital.com.au</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
