import React from 'react';
import { Shield, Eye, TrendingUp, HeartHandshake, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/cotasgu';
import { DotGrid } from './BrandDecorations';

export const AboutSection: React.FC = () => {
  const boardCommitments = [
    {
      title: 'Representação Ativa',
      description: 'Defendemos seus direitos e interesses em todas as instâncias.',
      icon: Shield,
    },
    {
      title: 'Gestão Transparente',
      description: 'Atuamos com ética, transparência e prestação de contas.',
      icon: Eye,
    },
    {
      title: 'Desenvolvimento Contínuo',
      description: 'Buscamos soluções e oportunidades para gerar mais resultados para você.',
      icon: TrendingUp,
    },
    {
      title: 'Compromisso com Você',
      description: 'Nosso trabalho tem um só propósito: valorizar o associado e fortalecer a categoria.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section
      id="cooperativa"
      className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-[#1E7B34] uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1E7B34]" />
            <span>Sobre a COTASGU</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2558] tracking-tight leading-tight text-balance">
            Uma cooperativa que valoriza{' '}
            <span className="text-[#1E7B34]">quem move o Brasil.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            A <strong>COTASGU</strong> é uma cooperativa de transportes que acredita na força das pessoas
            e na importância de construir oportunidades por meio da união. Nosso propósito é valorizar
            os profissionais do transporte e contribuir para o fortalecimento do setor rodoviário brasileiro.
          </p>
        </div>

        {/* 2-Column Split: Photography + Institutional Commitments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Portrait & Convoy Photography with Editorial Overlay */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white h-full flex flex-col justify-between">
              <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-72">
                <img
                  src="/src/assets/images/driver_professional_1793385263638.jpg"
                  alt="Motorista profissional de transporte rodoviário parceiro da COTASGU"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-[#0A2558]">
                  Orgulho na Estrada
                </div>
              </div>

              {/* Card Footer Quote */}
              <div className="p-6 bg-white border-t border-slate-100 flex-1 flex flex-col justify-center">
                <p className="text-sm font-semibold text-[#0A2558] italic leading-snug">
                  “O caminho é feito por quem faz. A COTASGU caminha ao seu lado todos os dias.”
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                  <span className="font-medium text-slate-700">COTASGU · Cooperativa de Transportes</span>
                  <span className="text-[#1E7B34] font-semibold">Juntos somos mais fortes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Board Commitments ("TRABALHANDO POR VOCÊ") */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-200/90 relative">
            <div className="absolute top-6 right-6 hidden sm:block opacity-60">
              <DotGrid rows={3} cols={3} color="#1E7B34" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Diretoria Atuante
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2558] tracking-tight">
                TRABALHANDO POR VOCÊ.
              </h3>

              <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal">
                A diretoria da COTASGU trabalha diariamente para representar, defender e fortalecer cada associado.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                {boardCommitments.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60 hover:border-emerald-200 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#1E7B34] flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-[#0A2558] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Institutional Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#1E7B34] shrink-0" />
                <span>Cooperativa transparente com suporte direto aos associados</span>
              </div>

              <a
                href={getWhatsAppUrl("Olá! Gostaria de conversar com a equipe da COTASGU para tirar dúvidas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#1E7B34] hover:bg-[#155E27] rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Tirar dúvidas pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
