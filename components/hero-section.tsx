import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[88vh] items-center overflow-hidden px-6 pb-20 pt-32 md:px-12 lg:px-20">
      <div className="pointer-events-none absolute -right-24 top-16 h-96 w-96 rounded-full bg-stone-200/50 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Computer Science · AI / ML</p>
        <h1 className="max-w-5xl font-display text-6xl leading-[0.98] tracking-[-0.04em] text-[#262626] sm:text-7xl md:text-8xl lg:text-[8.2rem]">Building useful<br /><span className="text-slate-500">things with intent.</span></h1>
        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-stone-200 pt-6 md:flex-row md:items-end">
          <p className="max-w-md text-base leading-7 text-slate-600">I&apos;m Rushivardhan Reddy, an AI/ML undergraduate who turns complex ideas into thoughtful, production-minded digital experiences.</p>
          <div className="flex items-center gap-5"><a href="https://github.com/rishi1188" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 transition-colors hover:text-[#262626]"><Github className="h-5 w-5" /></a><a href="https://www.linkedin.com/in/rishi-reddy2818/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 transition-colors hover:text-[#262626]"><Linkedin className="h-5 w-5" /></a><a href="mailto:rushivardhan804@gmail.com" aria-label="Email" className="text-slate-500 transition-colors hover:text-[#262626]"><Mail className="h-5 w-5" /></a><a href="#projects" className="ml-3 inline-flex items-center gap-2 rounded-full bg-[#262626] px-5 py-3 text-sm text-white transition-colors hover:bg-slate-600">Explore work <ArrowUpRight className="h-4 w-4" /></a></div>
        </div>
        <a href="#projects" className="mt-20 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-400 hover:text-[#262626]"><ArrowDown className="h-4 w-4" /> Scroll to explore</a>
      </div>
    </section>
  );
}
