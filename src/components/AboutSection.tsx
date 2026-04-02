import { Code, Palette, Zap, GraduationCap } from "lucide-react";
import AboutScene from "./AboutScene";
import ScrollReveal from "./ScrollReveal";
import harshithImg from "@/assets/harshith.jpeg";

const highlights = [
  { icon: Code, label: "Full Stack Development", desc: "Django backend & React.js frontend" },
  { icon: Palette, label: "Web Technologies", desc: "HTML5, CSS3, JavaScript, Python" },
  { icon: Zap, label: "Database & Tools", desc: "Oracle SQL, Git, GitHub, VS Code" },
  { icon: GraduationCap, label: "Published Researcher", desc: "Thesis published in IJSREM Journal" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
                <img
                  src={harshithImg}
                  alt="Harshith G"
                  className="relative w-64 h-72 md:w-80 md:h-96 object-cover rounded-2xl border-2 border-primary/20"
                />
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm Harshith G, a Full Stack Developer based in Bengaluru, India.
                I build scalable web applications using Django for backend and
                React.js for dynamic frontend interfaces.
              </p>
              <div className="glass rounded-xl p-4 mb-6">
                <p className="text-foreground text-sm font-semibold mb-2">Education</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">MCA — Bangalore Institute of Technology</span>
                    <span className="text-primary font-medium">8.2 CGPA</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">BSc — Vijaya College, Bengaluru</span>
                    <span className="text-primary font-medium">7.6 CGPA</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid gap-4">
              {highlights.map((h, i) => (
                <ScrollReveal key={h.label} direction="right" delay={i * 150}>
                  <div className="flex items-start gap-4 p-4 rounded-xl glass hover:border-primary/30 transition-colors">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <h.icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{h.label}</p>
                      <p className="text-muted-foreground text-sm">{h.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
