import React from 'react';
import { Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_120%,rgba(34,211,238,0.15),rgba(59,130,246,0)_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-sm text-white/60">© {new Date().getFullYear()} NeonVault. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10" aria-label="Github">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
