import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Gauge, Zap, Wallet } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Audited Smart Contracts',
    desc: 'Institutional security with real-time monitoring and multi-sig custody.'
  },
  {
    icon: Gauge,
    title: 'Adaptive Yield Engine',
    desc: 'On-chain strategies that rebalance across protocols to optimize risk-adjusted returns.'
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    desc: 'Low-latency execution with gas-optimized operations and live portfolio metrics.'
  },
  {
    icon: Wallet,
    title: 'Self-Custody First',
    desc: 'Connect your wallet and retain full control of your assets at every step.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
        >
          Everything you expect from a pro crypto platform
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-white/70"
        >
          Designed for serious investors, with the sleekness of a modern Web3 experience.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-cyan-400/30 hover:bg-white/10"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-b from-cyan-400 to-blue-600 text-black shadow-lg shadow-cyan-500/20">
              {React.createElement(f.icon, { className: 'h-5 w-5' })}
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
