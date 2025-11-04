import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const phases = [
  {
    title: 'Phase I — Foundation',
    points: [
      'Core protocol architecture',
      'Security audits & testnet',
      'Investor early access',
    ],
    done: true,
  },
  {
    title: 'Phase II — Expansion',
    points: [
      'Multi-chain deployment',
      'Yield strategy marketplace',
      'Advanced analytics dashboard',
    ],
    done: false,
  },
  {
    title: 'Phase III — Governance',
    points: [
      'Token launch & staking',
      'On-chain governance',
      'Treasury and grants program',
    ],
    done: false,
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative mx-auto max-w-7xl px-6 pb-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
        >
          Roadmap
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-white/70"
        >
          Transparent milestones that keep us accountable and you informed.
        </motion.p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/0 via-cyan-500/40 to-cyan-500/0" />

        <div className="space-y-8">
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={`grid items-start gap-6 md:grid-cols-2 ${idx % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-cyan-400 to-blue-600 text-black shadow-lg shadow-cyan-500/20">
                    {idx + 1}
                  </span>
                  <h3 className="text-xl font-semibold">{phase.title}</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {phase.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 ${phase.done ? 'text-cyan-400' : 'text-white/50'}`} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur">
                <p className="text-sm text-white/70">
                  {idx === 0 && 'Establishing a robust and secure base ensures long-term resilience and trust. We prioritize audits and transparency from day one.'}
                  {idx === 1 && 'Scaling across ecosystems unlocks new opportunities while our marketplace invites curated third-party strategies.'}
                  {idx === 2 && 'Decentralized governance aligns incentives and gives the community a direct voice in protocol evolution.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
