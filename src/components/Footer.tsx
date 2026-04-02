const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2025 Harshith G. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="https://github.com/acchu0230" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/harshith-g" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
        <a href="mailto:achu7619@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
