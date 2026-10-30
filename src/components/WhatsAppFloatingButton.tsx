import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../config/cotasgu';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 select-none"
    >
      {/* Speech Bubble / Badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-slate-200/80 animate-in fade-in slide-in-from-right-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Fale com a COTASGU: <strong>{WHATSAPP_DISPLAY}</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded ml-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing Floating Action Button */}
      <a
        href={getWhatsAppUrl("Olá! Gostaria de falar com a COTASGU.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a COTASGU pelo WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      >
        {/* Soft pulse effect */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"
          style={{ animationDuration: '3s' }}
        />

        <MessageCircle className="w-7 h-7 fill-white/20 transition-transform group-hover:scale-110" />
      </a>
    </aside>
  );
};
