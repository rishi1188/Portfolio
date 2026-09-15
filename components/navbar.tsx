"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [{ name: "Work", href: "#projects" }, { name: "About", href: "#skills" }, { name: "Contact", href: "#contact" }];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <nav className="fixed left-0 right-0 top-0 z-50 border-b border-stone-200/80 bg-[#f9f8f6]/85 backdrop-blur-md">
    <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-12 lg:px-20">
      <a href="#home" className="font-display text-xl tracking-tight text-[#262626]">R.</a>
      <div className="hidden items-center gap-8 md:flex">{navLinks.map((link) => <a key={link.name} href={link.href} className="text-sm text-slate-500 transition-colors hover:text-[#262626]">{link.name}</a>)}</div>
      <button className="text-[#262626] md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
    {open && <div className="border-t border-stone-200 bg-[#f9f8f6] px-6 py-5 md:hidden">{navLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-slate-600">{link.name}</a>)}</div>}
  </nav>;
}
