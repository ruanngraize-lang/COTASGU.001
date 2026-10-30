import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../config/cotasgu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Nossa missão', href: '#missao' },
    { label: 'A cooperativa', href: '#cooperativa' },
    { label: 'Propósito & Valores', href: '#valores' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-600 rounded-md"
            aria-label="COTASGU – Página Inicial"
          >
            <img
              src="/assets/logo-cotasgu-transparent.png"
              alt="COTASGU – Cooperativa de Transportes"
              className="h-10 sm:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition-colors hover:text-[#0A2558] hover:underline underline-offset-8 decoration-[#1E7B34] decoration-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (Fale Conosco WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-[#1E7B34] hover:bg-[#155E27] active:bg-[#0f461d] rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Fale conosco</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center p-2 text-white bg-[#1E7B34] rounded-lg focus-visible:outline-2 focus-visible:outline-emerald-600"
              aria-label="WhatsApp COTASGU"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-600"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0A2558] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <div className="text-xs text-slate-500 px-3">
              Atendimento oficial via WhatsApp: <strong className="text-slate-700">{WHATSAPP_DISPLAY}</strong>
            </div>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#1E7B34] hover:bg-[#155E27] rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Fale com a COTASGU no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 opacity-75" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
