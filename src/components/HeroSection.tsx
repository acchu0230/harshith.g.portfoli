import { ArrowDown, Download } from "lucide-react";
import HeroScene from "./HeroScene";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background/50 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pointer-events-none">
        <p className="text-primary font-medium text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in">
          Full Stack Developer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
          Hi, I'm{" "}
          <span className="text-gradient">Harshith G</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10">
          Full Stack Developer with hands-on experience building scalable web
          applications using Django & React.js. Strong foundation in Python, SQL,
          and core CS concepts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-primary font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="/Harshith_G_cv.pdf"
            download
            className="px-8 py-3 rounded-lg bg-secondary text-foreground font-semibold hover:bg-secondary/80 transition-colors inline-flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce z-10"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
