"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles = ["Software Developer", "Web Enthusiast"];

export function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentTitle.substring(0, displayText.length - 1)
          : currentTitle.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p className="text-neon-cyan text-sm font-mono mb-4 tracking-wider">
          {"Hello, I'm"}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          <span className="text-balance bg-gradient-to-r from-foreground via-neon-cyan to-foreground bg-clip-text text-transparent">
            T.Rushivardhan Reddy
          </span>
        </h1>

        <div className="h-12 md:h-16 flex items-center justify-center mb-8">
          <span className="text-xl sm:text-2xl md:text-3xl font-mono text-muted-foreground">
            {displayText}
            <span
              className="inline-block w-0.5 h-6 md:h-8 bg-neon-cyan ml-1 animate-pulse"
              style={{ boxShadow: "0 0 8px var(--neon-cyan)" }}
            />
          </span>
        </div>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          I build accessible, pixel-perfect digital experiences for the web.
          Passionate about crafting clean code and creating intuitive user
          interfaces.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <Button
            variant="outline"
            size="icon"
            className="border-border hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"
            asChild
          >
            <a
              href="https://github.com/rishi1188"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-border hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/rishi-reddy2818/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-border hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"
            asChild
          >
            <a href="mailto:hello@example.com" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
