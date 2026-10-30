import React from 'react';
import { MessageCircle, Instagram, ArrowUp } from 'lucide-react';
import {
  getWhatsAppUrl,
  WHATSAPP_DISPLAY,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from '../config/cotasgu';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061838] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Info & Official Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white p-3.5 rounded-xl inline-block shadow-sm">
              <img
                src="/assets/logo-cotasgu-transparent.png"
                alt="COTASGU – Cooperativa de Transportes"
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <h3 className="text-lg font-bold text-white tracking-tight">
              COTASGU – Cooperativa de Transportes
            </h3>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              O transporte move o Brasil. Fortalecendo pessoas, construindo oportunidades e
              valorizando os trabalhadores do setor rodoviário de cargas.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp da COTASGU"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-pink-600/20 hover:bg-pink-600/30 text-pink-400 flex items-center justify-center transition-colors"
                aria-label="Instagram da COTASGU"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-emerald-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#missao" className="hover:text-emerald-400 transition-colors">
                  Nossa missão
                </a>
              </li>
              <li>
                <a href="#cooperativa" className="hover:text-emerald-400 transition-colors">
                  A cooperativa
                </a>
              </li>
              <li>
                <a href="#valores" className="hover:text-emerald-400 transition-colors">
                  Propósito e Valores
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-emerald-400 transition-colors">
                  Benefícios ao Associado
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-emerald-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contacts Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Canais Oficiais
            </h4>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 text-sm">
              <div>
                <span className="text-xs text-slate-400 block">WhatsApp Oficial:</span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-400 hover:text-emerald-300 text-base"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-400 block">Instagram Oficial:</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-200 hover:text-pink-300"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </div>

              <div className="pt-1">
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de conversar com a COTASGU.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#1E7B34] hover:bg-[#155E27] px-3.5 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Iniciar conversa no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © {currentYear} COTASGU – Cooperativa de Transportes. Todos os direitos reservados.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            O transporte move o Brasil.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
