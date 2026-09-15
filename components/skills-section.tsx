import {
  Braces,
  BrainCircuit,
  Box,
  Cloud,
  Code2,
  Container,
  Database,
  FileCode2,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  PanelsTopLeft,
  Send,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Skill = {
  name: string;
  icon: LucideIcon;
  tint: string;
};

type SkillCard = {
  eyebrow: string;
  title: string;
  description: string;
  skills: Skill[];
  badge?: string;
  className: string;
  accent: string;
};

const cards: SkillCard[] = [
  {
    eyebrow: "01 / FOUNDATION",
    title: "Languages & Core",
    description: "The primitives I use to turn ideas into reliable, maintainable software.",
    skills: [
      { name: "Java", icon: Code2, tint: "hover:border-orange-300 hover:bg-orange-50" },
      { name: "Python", icon: Braces, tint: "hover:border-blue-300 hover:bg-blue-50" },
      { name: "JavaScript", icon: Code2, tint: "hover:border-yellow-300 hover:bg-yellow-50" },
      { name: "TypeScript", icon: FileCode2, tint: "hover:border-blue-300 hover:bg-blue-50" },
      { name: "SQL", icon: Database, tint: "hover:border-emerald-300 hover:bg-emerald-50" },
    ],
    className: "lg:col-span-5",
    accent: "bg-amber-100 text-amber-700",
  },
  {
    eyebrow: "02 / INTERFACE",
    title: "Frontend & UI",
    description: "Interfaces that feel considered, responsive, and effortless to use.",
    skills: [
      { name: "React", icon: PanelsTopLeft, tint: "hover:border-cyan-300 hover:bg-cyan-50" },
      { name: "Next.js", icon: Globe2, tint: "hover:border-slate-400 hover:bg-slate-50" },
      { name: "Tailwind CSS", icon: Layers3, tint: "hover:border-sky-300 hover:bg-sky-50" },
      { name: "HTML5", icon: FileCode2, tint: "hover:border-orange-300 hover:bg-orange-50" },
      { name: "CSS3", icon: Braces, tint: "hover:border-indigo-300 hover:bg-indigo-50" },
    ],
    badge: "Component Architecture & Responsive Design",
    className: "lg:col-span-7",
    accent: "bg-cyan-100 text-cyan-700",
  },
  {
    eyebrow: "03 / SYSTEMS",
    title: "Backend & Database",
    description: "Practical APIs and data layers built for clarity, scale, and resilience.",
    skills: [
      { name: "Django REST Framework", icon: Server, tint: "hover:border-emerald-300 hover:bg-emerald-50" },
      { name: "Firebase", icon: Cloud, tint: "hover:border-amber-300 hover:bg-amber-50" },
      { name: "MongoDB", icon: Database, tint: "hover:border-green-300 hover:bg-green-50" },
      { name: "Node.js", icon: Terminal, tint: "hover:border-lime-300 hover:bg-lime-50" },
      { name: "REST APIs", icon: Network, tint: "hover:border-violet-300 hover:bg-violet-50" },
    ],
    badge: "Cloud & Storage",
    className: "lg:col-span-7",
    accent: "bg-emerald-100 text-emerald-700",
  },
  {
    eyebrow: "04 / INTELLIGENCE",
    title: "AI, ML & Tooling",
    description: "A focused toolkit for intelligent workflows, experimentation, and delivery.",
    skills: [
      { name: "LangChain", icon: Network, tint: "hover:border-teal-300 hover:bg-teal-50" },
      { name: "OpenAI APIs", icon: Sparkles, tint: "hover:border-violet-300 hover:bg-violet-50" },
      { name: "RAG Architectures", icon: BrainCircuit, tint: "hover:border-fuchsia-300 hover:bg-fuchsia-50" },
      { name: "Git", icon: GitBranch, tint: "hover:border-orange-300 hover:bg-orange-50" },
      { name: "Docker", icon: Container, tint: "hover:border-blue-300 hover:bg-blue-50" },
      { name: "Postman", icon: Send, tint: "hover:border-red-300 hover:bg-red-50" },
    ],
    className: "lg:col-span-5",
    accent: "bg-violet-100 text-violet-700",
  },
];

function SkillChip({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div
      className={`group/chip inline-flex cursor-default items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:scale-105 ${skill.tint}`}
    >
      <Icon className="size-4 text-zinc-500 transition-colors duration-300 group-hover/chip:text-zinc-800" aria-hidden="true" />
      <span>{skill.name}</span>
    </div>
  );
}

function SkillCardView({ card }: { card: SkillCard }) {
  return (
    <article className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 ${card.className}`}>
      <div className={`absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full opacity-60 blur-3xl ${card.accent.split(" ")[0]}`} aria-hidden="true" />
      <div className="relative flex h-full flex-col">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-[10px] font-bold tracking-[0.18em] text-zinc-400">{card.eyebrow}</p>
            <h3 className="font-display text-2xl text-zinc-900 sm:text-[1.7rem]">{card.title}</h3>
          </div>
          <span className={`flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${card.accent}`} aria-hidden="true">{card.eyebrow.slice(0, 2)}</span>
        </div>
        <p className="mb-7 max-w-md text-sm leading-6 text-zinc-500">{card.description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {card.skills.map((skill) => <SkillChip key={skill.name} skill={skill} />)}
        </div>
        {card.badge && <div className="mt-6 inline-flex w-fit rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[11px] font-medium tracking-wide text-zinc-500">{card.badge}</div>}
      </div>
    </article>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 font-mono text-xs font-bold tracking-[0.2em] text-zinc-500">// TECH STACK</p>
          <h2 className="font-display text-4xl leading-tight text-zinc-950 sm:text-5xl">Tools & Technologies I Build With</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500">A thoughtfully chosen stack for crafting digital products from first principles to polished, production-ready experiences.</p>
        </div>
        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {cards.map((card) => <SkillCardView key={card.title} card={card} />)}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
