import React from 'react';
import {
  Award,
  Users2,
  TrendingUp,
  Search,
  Handshake,
  UserCheck,
  ShieldAlert,
  Scale,
  Fuel,
  CreditCard,
  Building2,
  Scale as ScaleIcon,
  MessageCircle,
} from 'lucide-react';
import { getWhatsAppUrl, BENEFITS_WHATSAPP_MESSAGE } from '../config/cotasgu';
import { DotGrid } from './BrandDecorations';

export const ValuesSection: React.FC = () => {
  const threeCorePillars = [
    {
      id: 'valorizacao',
      title: 'VALORIZAÇÃO',
      subtitle: 'Reconhecimento Real',
      description:
        'Reconhecer a importância de quem trabalha diariamente para movimentar o Brasil de ponta a ponta.',
      icon: Award,
    },
    {
      id: 'uniao',
      title: 'UNIÃO',
      subtitle: 'Força Coletiva',
      description:
        'Fortalecer a cooperação e a construção coletiva de oportunidades sólidas para todos os membros.',
      icon: Users2,
    },
    {
      id: 'oportunidades',
      title: 'OPORTUNIDADES',
      subtitle: 'Crescimento Sustentável',
      description:
        'Incentivar o desenvolvimento, a redução de despesas e o crescimento contínuo dos profissionais do transporte.',
      icon: TrendingUp,
    },
  ];

  const valuesCycle = [
    {
      name: 'Transparência',
      desc: 'Clareza em cada processo, gestão aberta e prestação de contas periódica.',
      icon: Search,
    },
    {
      name: 'Cooperação',
      desc: 'O princípio fundamental: o sucesso de cada um fortalece a conquista de todos.',
      icon: Handshake,
    },
    {
      name: 'Respeito',
      desc: 'Dignidade, consideração e reconhecimento a quem enfrenta as estradas todos os dias.',
      icon: UserCheck,
    },
    {
      name: 'Compromisso',
      desc: 'Atuação incansável em favor dos direitos, da segurança e do bem-estar do cooperado.',
      icon: ShieldAlert,
    },
    {
      name: 'Ética',
      desc: 'Integridade inegociável em todos os acordos, contratos e relações com parceiros.',
      icon: Scale,
    },
  ];

  const associationBenefits = [
    {
      title: 'Combustível',
      highlight: 'Condições Especiais',
      desc: 'Condições especiais para abastecer com economia e seguir sempre em frente na sua rota.',
      icon: Fuel,
    },
    {
      title: 'Economia',
      highlight: 'Reduza Custos',
      desc: 'Reduza custos operacionais e aumente seus ganhos líquidos com soluções inteligentes da cooperativa.',
      icon: TrendingUp,
    },
    {
      title: 'Convênios',
      highlight: 'Vantagens Exclusivas',
      desc: 'Parcerias que oferecem descontos e vantagens exclusivas para você e para a sua família.',
      icon: Building2,
    },
    {
      title: 'Benefícios',
      highlight: 'Apoio no Dia a Dia',
      desc: 'Mais facilidades, assistência e apoio direto para a rotina diária do transportador.',
      icon: CreditCard,
    },
    {
      title: 'Suporte Jurídico',
      highlight: 'Segurança & Legalidade',
      desc: 'Apoio e representação legal para que você possa rodar com tranquilidade e focar no que importa.',
      icon: ScaleIcon,
    },
  ];

  return (
    <div id="valores">
      {/* 1. SEÇÃO 05: Três Pilares Principais (VALORIZAÇÃO, UNIÃO, OPORTUNIDADES) */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1E7B34] uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1E7B34]" />
              <span>Pilares Institucionais</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2558] tracking-tight text-balance">
              Propósito e Valores da COTASGU
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Três fundamentos que guiam cada ação e projeto da nossa cooperativa de transportes.
            </p>
          </div>

          {/* 3 Main Pillars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {threeCorePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#1E7B34] mb-6">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-semibold text-[#1E7B34] tracking-wide uppercase">
                      {pillar.subtitle}
                    </span>

                    <h3 className="text-2xl font-extrabold text-[#0A2558] mt-1 mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E7B34]" />
                    <span>COTASGU · O transporte move o Brasil</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 5 Core Values from Flyer ("NOSSOS VALORES") */}
          <div className="mt-20 pt-16 border-t border-slate-200/80">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Princípios Irrevogáveis
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2558] mt-1">
                Nossos Valores
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                A bússola ética que rege a governança da COTASGU e o relacionamento com todos os associados.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {valuesCycle.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/70 text-center flex flex-col items-center hover:bg-white hover:border-[#1E7B34]/40 hover:shadow-sm transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0A2558] mb-3 shadow-xs">
                      <Icon className="w-5 h-5 text-[#1E7B34]" />
                    </div>
                    <h4 className="text-base font-bold text-[#0A2558] mb-1.5">
                      {val.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Seção Complementar: "SER ASSOCIADO VALE A PENA" (do cartaz de benefícios) */}
      <section
        id="beneficios"
        className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/60 relative overflow-hidden"
      >
        <div className="absolute top-10 right-10 hidden lg:block opacity-50">
          <DotGrid rows={4} cols={4} color="#1E7B34" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1E7B34] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#1E7B34]" />
              <span>Vantagens do Cooperativismo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2558] tracking-tight leading-tight text-balance">
              Ser associado <span className="text-[#1E7B34]">vale a pena.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-700 font-normal">
              Sua contribuição fortalece uma estrutura que negocia melhores condições, garante suporte
              e acompanha você em cada quilômetro rodado.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {associationBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-[#1E7B34]/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1E7B34] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-semibold text-[#1E7B34] uppercase tracking-wider">
                      {item.highlight}
                    </span>

                    <h3 className="text-xl font-bold text-[#0A2558] mt-1 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">Benefício Exclusivo</span>
                    <a
                      href={getWhatsAppUrl(`Olá! Gostaria de saber mais sobre o benefício de ${item.title} da COTASGU.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#1E7B34] hover:text-[#155E27] inline-flex items-center gap-1"
                    >
                      <span>Consultar</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Final Highlight Card: Suporte e Parceria */}
            <div className="bg-[#0A2558] text-white rounded-2xl p-6 sm:p-7 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6" />
                </div>

                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Faça Parte
                </span>

                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Juntos Somos Mais Fortes
                </h3>

                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  Descubra como se associar à COTASGU e faça parte de uma cooperativa pensada por e para quem move o transporte no Brasil.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={getWhatsAppUrl(BENEFITS_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-[#1E7B34] hover:bg-[#155E27] rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quero Ser Associado</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
