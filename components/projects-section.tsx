import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  { title: "Jan Saathi", eyebrow: "Citizen services · 2026", description: "A multilingual AI citizen-services assistant helping people discover government welfare schemes through voice input and a Gemini-powered chatbot.", tags: ["React", "Express", "Gemini AI"], github: "https://github.com/rishi1188/Jan-Saathi" },
  { title: "Entity Resolution Pipeline", eyebrow: "AI / ML · 2026", description: "A precision-and-recall driven system for deduplicating messy person records with blocking, weighted similarity, semantic matching, and a FastAPI service.", tags: ["Python", "FastAPI", "Sentence-Transformers"], github: "https://github.com/rishi1188/Entity-resolution-pipeline" },
  { title: "Todo App", eyebrow: "Mobile · 2026", description: "A cross-platform task manager with Firebase authentication, a NestJS and MongoDB backend, priorities, deadlines, categories, and smart sorting.", tags: ["React Native", "TypeScript", "MongoDB"], github: "https://github.com/rishi1188/Todo-App" },
  { title: "Pipeline Builder", eyebrow: "Workflow editor · 2026", description: "A visual workflow editor with reusable node abstractions and graph-based validation that detects cycles and returns live pipeline statistics.", tags: ["ReactFlow", "FastAPI", "Zustand"], github: "https://github.com/rishi1188/Pipeline-Builder" },
  { title: "AssetFlow", eyebrow: "Enterprise systems · 2026", description: "An asset and resource management platform covering allocation, booking, maintenance, auditing, role-based access, KPI dashboards, and analytics exports.", tags: ["React", "Tailwind", "JWT"], github: "https://github.com/rishi1188/Asset-Resource-Management-System" },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-stone-200 px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Selected work</p>
            <h2 className="font-display text-4xl tracking-tight text-[#262626] md:text-5xl">Things I&apos;ve built.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">A collection of products and systems shaped by curiosity, care, and a bias toward shipping.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className={`group flex min-h-[310px] flex-col justify-between rounded-2xl border border-stone-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-xl hover:shadow-stone-200/60 ${index === 0 ? "md:col-span-2 md:min-h-[280px]" : ""}`}>
              <div>
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-slate-400">{project.eyebrow}</p>
                    <h3 className="font-display text-3xl text-[#262626]">{project.title}</h3>
                  </div>
                  <span className="text-sm text-slate-400">0{index + 1}</span>
                </div>
                <p className="max-w-xl text-[15px] leading-7 text-slate-600">{project.description}</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-stone-200 bg-[#f9f8f6] px-3 py-1 text-xs text-slate-600">{tag}</span>)}</div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#262626] transition-colors hover:text-slate-500" aria-label={`View ${project.title} on GitHub`}><Github className="h-4 w-4" /> Code <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
