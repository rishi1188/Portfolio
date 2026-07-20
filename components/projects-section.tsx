"use client";

import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Mind Uplift Campus",
    description:
      "A campus wellness MVP built during a hackathon, featuring AI-powered mental health assistance and mood journaling to support student well-being.",
    tags: ["React", "Node.js", "OpenAI", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce website presented during a technical seminar, featuring product catalog, cart functionality, and secure checkout.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-neon-cyan text-sm font-mono mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-neon-cyan/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                    <span className="text-neon-cyan font-mono text-sm">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-neon-cyan/10 text-neon-cyan rounded border border-neon-cyan/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border hover:border-neon-cyan hover:text-neon-cyan"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-neon-cyan text-background hover:bg-neon-cyan/90"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
