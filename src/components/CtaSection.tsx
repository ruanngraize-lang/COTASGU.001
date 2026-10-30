import React from 'react';
import { MessageCircle, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import {
  getWhatsAppUrl,
  DEFAULT_WHATSAPP_MESSAGE,
  WHATSAPP_DISPLAY,
  WHATSAPP_INTERNATIONAL,
} from '../config/cotasgu';
import { DotGrid } from './BrandDecorations';

export const CtaSection: React.FC = () => {
  return (
    <section
      id="contato"
      className="relative py-24 md:py-32 bg-[#0A2558] text-white overflow-hidden"
    >
      {/* Background Photography with Deep Navy Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/highway_scenic_route_1793385263745.jpg"
          alt="Rodovia brasileira com transporte de cargas ao anoitecer"
          className="w-full h-full object-cover object-center opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061838] via-[#0A2558]/95 to-[#061838]/90" />
      </div>

      {/* Subtle brand dots decoration */}
      <div className="absolute top-10 right-10 hidden sm:block opacity-30 z-10">
        <DotGrid rows={4} cols={5} color="#2BA349" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Unboxed Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-xs font-bold text-emerald-400 uppercase tracking-widest bg-white/5 rounded-md border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Atendimento Direto e Descomplicado</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-4xl mx-auto text-balance">
          Você também faz parte de{' '}
          <span className="text-[#2BA349]">quem move o Brasil.</span>
        </h2>

        {/* Complementary Text */}
        <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
          Conheça a <strong>COTASGU</strong> e saiba mais sobre nossa cooperativa de transportes.
          Estamos prontos para atender você com atenção, respeito e agilidade.
        </p>

        {/* Central High-Conversion Card */}
        <div className="mt-10 max-w-xl mx-auto bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 shadow-2xl">
          <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
            Canal Oficial de Atendimento
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white mb-6 font-mono tabular-nums tracking-wide">
            {WHATSAPP_DISPLAY}
          </div>

          <a
            href={getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#1E7B34] hover:bg-[#166028] active:bg-[#0f461d] rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-6 h-6 fill-white/20" />
            <span>ENTRE EM CONTATO PELO WHATSAPP</span>
          </a>

          <p className="text-xs text-slate-300 mt-4 italic font-normal">
            Mensagem automática pré-configurada para facilitar seu primeiro contato.
          </p>
        </div>

        {/* Guarantees / Direct Contact Indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Resposta rápida e personalizada</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Canal 100% verificado</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Atendimento em todo o território nacional</span>
          </div>
        </div>
      </div>
    </section>
  );
};
