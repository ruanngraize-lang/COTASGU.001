import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MissionSection } from './components/MissionSection';
import { AboutSection } from './components/AboutSection';
import { ValuesSection } from './components/ValuesSection';
import { CtaSection } from './components/CtaSection';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#1E7B34] selection:text-white">
      {/* SEÇÃO 01 — HEADER / NAVEGAÇÃO */}
      <Header />

      {/* MAIN CONTENT LANDING PAGE */}
      <main className="flex-1">
        {/* SEÇÃO 02 — HERO / APRESENTAÇÃO PRINCIPAL */}
        <Hero />

        {/* SEÇÃO 03 — NOSSA MISSÃO */}
        <MissionSection />

        {/* SEÇÃO 04 — SOBRE A COTASGU */}
        <AboutSection />

        {/* SEÇÃO 05 — PROPÓSITO E VALORES & BENEFÍCIOS */}
        <ValuesSection />

        {/* SEÇÃO 06 — CHAMADA PARA AÇÃO / CONVERSÃO */}
        <CtaSection />

        {/* SEÇÃO 07 — REDES SOCIAIS */}
        <SocialSection />
      </main>

      {/* SEÇÃO 08 — FOOTER / RODAPÉ */}
      <Footer />

      {/* WHATSAPP FLOATING CONVERSION BUTTON */}
      <WhatsAppFloatingButton />
    </div>
  );
}
