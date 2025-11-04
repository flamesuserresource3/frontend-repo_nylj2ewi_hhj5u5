import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient & noise overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6">
        {/* Minimal Navbar */}
        <div className="flex items-center justify-between py-6">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-b from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">NeonVault</span>
          </motion.div>

          <motion.div
            className="hidden gap-6 md:flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a href="#features" className="text-sm text-white/80 transition hover:text-white">Features</a>
            <a href="#roadmap" className="text-sm text-white/80 transition hover:text-white">Roadmap</a>
            <a href="#" className="text-sm text-white/80 transition hover:text-white">Docs</a>
          </motion.div>

          <motion.a
            href="#" 
            className="hidden rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur transition hover:bg-white/20 md:inline-flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Launch App
          </motion.a>
        </div>

        {/* Hero Copy */}
        <div className="flex grow items-center">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
            >
              Next‑gen crypto investing • On‑chain, transparent, secure
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-5 bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl"
            >
              Invest in the future with confidence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mx-auto mt-5 max-w-2xl text-lg text-white/70"
            >
              NeonVault blends institutional‑grade strategies with a sleek Web3 experience. Transparent yields, automated rebalancing, and real‑time insight into your portfolio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 flex items-center justify-center gap-3"
            >
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] focus:outline-none"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Explore Features
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3"
            >
              {[
                { label: 'Assets Secured', value: '$250M+' },
                { label: 'APY Range', value: '4% – 18%' },
                { label: 'Active Countries', value: '72' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/60">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
