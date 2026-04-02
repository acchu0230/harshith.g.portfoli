import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Email</p>
                  <a href="mailto:achu7619@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    achu7619@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Location</p>
                  <p className="text-muted-foreground text-sm">Bengaluru, Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">LinkedIn</p>
                  <a href="https://linkedin.com/in/harshith-g" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    linkedin.com/in/harshith-g
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Github size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">GitHub</p>
                  <a href="https://github.com/acchu0230" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    github.com/acchu0230
                  </a>
                </div>
              </div>
              <div className="glass rounded-2xl p-6 card-shadow">
                <p className="text-foreground font-display font-semibold mb-2">
                  Let's work together
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm open to freelance work, full-time positions, and exciting
                  collaboration opportunities. Feel free to reach out!
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary font-semibold text-primary-foreground text-sm hover:opacity-90 transition-opacity glow"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
