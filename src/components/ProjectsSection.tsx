import { ExternalLink, Github } from "lucide-react";
import projectSign from "@/assets/project-sign.jpg";
import projectEcom from "@/assets/project-4.jpg";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Audio to Sign Language Translator",
    description:
      "NLP-based Django web application that converts speech input into animated sign gestures. Implements speech-to-text pipeline with NLP preprocessing (tokenization, lemmatization, phrase mapping) using NLTK.",
    image: projectSign,
    tags: ["Django", "Python", "NLP", "NLTK", "HTML5", "CSS3"],
    liveUrl: "#",
    githubUrl: "https://github.com/acchu0230/audio-to-sign-language-translator",
  },
  {
    title: "E-Commerce Website",
    description:
      "Full-featured e-commerce platform built with Django featuring product catalog, shopping cart, order management, user authentication, and payment integration.",
    image: projectEcom,
    tags: ["React js"],
    liveUrl: "#",
    githubUrl: "https://github.com/acchu0230",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real-world applications showcasing full-stack development skills.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} direction="scale" delay={i * 200}>
              <div className="group perspective-container h-full">
                <div className="tilt-card glass rounded-2xl overflow-hidden card-shadow h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {/* <a
                        href={project.liveUrl}
                        className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity"
                      >
                        <ExternalLink size={18} />
                      </a> */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary text-foreground hover:opacity-80 transition-opacity"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
