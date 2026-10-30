import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/cotasgu';
import { DotGrid, RoadCurveGraphic } from './BrandDecorations';

export const MissionSection: React.FC = () => {
  return (
    <section
      id="missao"
      className="relative py-20 md:py-28 bg-white overflow-hidden border-b border-slate-100"
    >
      {/* Visual background accents mimicking the reference poster curves */}
      <div className="absolute top-0 right-0 w-72 md:w-96 pointer-events-none opacity-40">
        <RoadCurveGraphic inverted />
      </div>

      <div className="absolute top-12 left-8 hidden sm:block opacity-70">
        <DotGrid rows={3} cols={4} color="#1E7B34" />
      </div>

      <div className="absolute bottom-12 right-8 hidden sm:block opacity-70">
        <DotGrid rows={3} cols={4} color="#0A2558" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Official Brand Logo Presentation */}
        <div className="flex justify-center mb-10">
          <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
            <img
              src="/assets/logo-cotasgu-transparent.png"
              alt="Logomarca Oficial COTASGU – Cooperativa de Transportes"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Section Title */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-widest text-[#0A2558] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E7B34]" />
          <span>Nossa missão</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E7B34]" />
        </div>

        {/* Mission Statement with Big Typography & Green Institutional Highlights */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A2558] tracking-tight leading-[1.15] max-w-4xl mx-auto text-balance">
          FORTALECER{' '}
          <span className="text-[#1E7B34] inline-block">PESSOAS.</span>
          <br className="hidden sm:inline" />{' '}
          CONSTRUIR{' '}
          <span className="text-[#1E7B34] inline-block">OPORTUNIDADES.</span>
        </h2>

        {/* Center Green Divider with Dot (Official visual signature) */}
        <div className="flex items-center justify-center gap-3 my-8" aria-hidden="true">
          <div className="h-0.5 w-16 sm:w-24 bg-[#1E7B34]/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#1E7B34]" />
          <div className="h-0.5 w-16 sm:w-24 bg-[#1E7B34]/40" />
        </div>

        {/* Institutional Mission Text */}
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-normal">
          Acreditamos na força da união e na importância de valorizar quem faz o transporte acontecer.
          Nosso propósito é fortalecer pessoas, incentivar a cooperação e construir novas oportunidades
          para os profissionais do transporte.
        </p>

        {/* Secondary Conversion Action */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de conversar com a COTASGU sobre a missão da cooperativa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#0A2558] hover:bg-[#163E8A] rounded-xl shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Converse com nossa equipe</span>
            <ArrowRight className="w-4 h-4 text-white/70" />
          </a>
        </div>
      </div>
    </section>
  );
};
