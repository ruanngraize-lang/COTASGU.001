import React from 'react';
import { MessageCircle, CheckCircle2, ChevronRight, ShieldCheck, Users } from 'lucide-react';
import { getWhatsAppUrl, HERO_WHATSAPP_MESSAGE, WHATSAPP_DISPLAY } from '../config/cotasgu';
import { DotGrid } from './BrandDecorations';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/60"
    >
      {/* Decorative brand accents in background */}
      <div className="absolute top-12 right-6 hidden lg:block opacity-60 pointer-events-none">
        <DotGrid rows={3} cols={5} color="#1E7B34" />
      </div>

      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Primary CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            {/* Tagline kicker unboxed */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider text-[#0A2558] uppercase">
              <span className="w-2.5 h-0.5 bg-[#1E7B34] rounded-full inline-block" />
              <span>Cooperativa de Transportes</span>
              <span className="text-slate-300">·</span>
              <span className="text-[#1E7B34]">Juntos Somos Mais Fortes</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-[#0A2558] tracking-tight leading-[1.15] text-balance">
              O TRANSPORTE{' '}
              <span className="text-[#1E7B34] underline decoration-[#1E7B34]/30 decoration-4 underline-offset-4">
                MOVE
              </span>{' '}
              O{' '}
              <span className="text-[#1E7B34]">BRASIL.</span>
            </h1>

            {/* Complementary Headline */}
            <p className="text-xl sm:text-2xl font-medium text-slate-700 leading-snug">
              Quem move o transporte merece{' '}
              <span className="font-bold text-[#1E7B34]">reconhecimento</span>.
            </p>

            {/* Primary Value Proposition & Support text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              A <strong className="text-slate-900 font-semibold">COTASGU</strong> caminha ao lado do
              caminhoneiro autônomo e do motorista profissional, promovendo a união da categoria e gerando
              novas conquistas e segurança para a sua rotina nas estradas.
            </p>

            {/* Primary Action Button Box */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl(HERO_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-bold text-white bg-[#1E7B34] hover:bg-[#155E27] active:bg-[#0f461d] rounded-xl shadow-lg shadow-emerald-700/20 hover:shadow-xl hover:shadow-emerald-700/30 transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 shrink-0" />
                <span>FALE COM A COTASGU PELO WHATSAPP</span>
                <ChevronRight className="w-4 h-4 opacity-75 shrink-0" />
              </a>
            </div>

            {/* Micro-support text */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Conheça a cooperativa e descubra como fazer parte dessa união. Atendimento rápido em{' '}
              <span className="text-slate-700 font-semibold">{WHATSAPP_DISPLAY}</span>.
            </p>

            {/* Trust markers */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E7B34] shrink-0" />
                <span>Valorização da categoria</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1E7B34] shrink-0" />
                <span>Suporte e representação</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#1E7B34] shrink-0" />
                <span>União que gera resultados</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Impact Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <img
                src="/src/assets/images/hero_brazilian_truck_1793385262004.jpg"
                alt="Caminhão moderno transportando cargas em rodovia brasileira"
                className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Scrim with Institutional Brand Tagline */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061838]/90 via-[#061838]/20 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1">
                  <span>Estradas Brasileiras</span>
                  <span>·</span>
                  <span>Orgulho da Profissão</span>
                </div>
                <p className="text-base sm:text-lg font-bold leading-snug text-white">
                  Juntos, vamos mais longe.
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  A força do cooperativismo impulsionando o transporte de cargas de Norte a Sul.
                </p>
              </div>

              {/* Brand curved corner badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1E7B34]" />
                <span className="text-xs font-bold text-[#0A2558]">COTASGU Oficial</span>
              </div>
            </div>

            {/* Subtle decorative dot grid bottom-left */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block opacity-75 -z-10">
              <DotGrid rows={4} cols={4} color="#0A2558" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
