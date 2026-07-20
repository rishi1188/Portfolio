"use client";

import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/rishi1188",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rishi-reddy2818/",
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+918919666260",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:rushivardhan804@gmail.com",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-neon-cyan text-sm font-mono mb-2">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          {"Let's Work Together"}
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          {"I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!"}
        </p>

        <Button
          className="bg-neon-cyan text-background hover:bg-neon-cyan/90 mb-10"
          asChild
        >
          <a href="mailto:rushivardhan804@gmail.com">
            <Mail className="w-4 h-4 mr-2" />
            Say Hello
          </a>
        </Button>

        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              size="icon"
              className="border-border hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"
              asChild
            >
              <a
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
