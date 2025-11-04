import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Roadmap from './components/Roadmap.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <Hero />
      <Features />
      <Roadmap />
      <Footer />
    </div>
  );
}
