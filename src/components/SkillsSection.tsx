import ScrollReveal from "./ScrollReveal";
import pythonImg from "@/assets/skills/python.png";
// import djangoImg from "@/assets/skills/";
import reactImg from "@/assets/skills/react.png";
import jsImg from "@/assets/skills/javascript.png";
import sqlImg from "@/assets/skills/sql.png";
import htmlImg from "@/assets/skills/html.png";
import cssImg from "@/assets/skills/css.png";
import gitImg from "@/assets/skills/git.png";
import githubImg from "@/assets/skills/github.png";


const skills = [
  { name: "Python", image: pythonImg, category: "Languages" },
  // { name: "Django", image: djangoImg, category: "Frameworks" },
  { name: "React.js", image: reactImg, category: "Frameworks" },
  { name: "JavaScript", image: jsImg, category: "Languages" },
  { name: "SQL / Oracle", image: sqlImg, category: "Database" },
  { name: "HTML5", image: htmlImg, category: "Frontend" },
  { name: "CSS3", image: cssImg, category: "Frontend" },
  { name: "Git", image: gitImg, category: "Tools" },
  { name: "GitHub", image: githubImg, category: "Tools" },
];

const certifications = [
  "Python – NICT",
  "Python FullStack – Pyspiders",
  "Introduction to Ethical Hacking – VTU",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} direction="scale" delay={i * 80}>
              <div className="group glass rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-primary/50 hover:glow transition-all duration-500 cursor-default perspective-container">
                <div className="w-16 h-16 md:w-20 md:h-20 relative group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-[0_0_12px_hsl(199_89%_48%_/_0.4)] transition-all duration-500"
                  />
                </div>
                <div className="text-center">
                  <p className="text-foreground font-medium text-sm">{skill.name}</p>
                  <p className="text-muted-foreground text-xs mt-1">{skill.category}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="glass rounded-2xl p-6 max-w-lg mx-auto">
            <p className="text-foreground text-sm font-semibold mb-3">Certifications</p>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
