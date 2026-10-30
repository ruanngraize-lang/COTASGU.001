import React from 'react';
import { Instagram, ArrowUpRight, Check, Image as ImageIcon } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../config/cotasgu';

export const SocialSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm relative overflow-hidden">
          {/* Subtle gradient accent along top border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0A2558] via-[#1E7B34] to-[#0A2558]" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 text-left space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1E7B34] uppercase tracking-wider">
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Canal Oficial no Instagram</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2558] tracking-tight">
                Acompanhe a COTASGU
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Fique por dentro das novidades, conteúdos e informações da nossa cooperativa.
                Acompanhe nosso trabalho na valorização dos motoristas e caminhoneiros do Brasil.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F77737] hover:opacity-95 rounded-xl shadow-md transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                  <span>SEGUIR NO INSTAGRAM</span>
                  <ArrowUpRight className="w-4 h-4 opacity-80" />
                </a>

                <div className="text-xs font-semibold text-slate-500">
                  Perfil verificado: <strong className="text-slate-800">{INSTAGRAM_HANDLE}</strong>
                </div>
              </div>
            </div>

            {/* Right Card Mockup: Instagram Feed Snippet */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-xs bg-white rounded-2xl border border-slate-200 p-4 shadow-md space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-0.5">
                      <div className="w-full h-full bg-white rounded-full p-0.5 flex items-center justify-center overflow-hidden">
                        <img
                          src="/assets/logo-cotasgu-transparent.png"
                          alt="COTASGU Instagram"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-slate-900">cotasgu</span>
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold">
                          ✓
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-500 block">Cooperativa de Transportes</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Post / Gallery Preview */}
                <div className="rounded-lg overflow-hidden bg-slate-900 aspect-video relative">
                  <img
                    src="/src/assets/images/truck_fleet_convoy_1793385262489.jpg"
                    alt="Frota de caminhões no Instagram da COTASGU"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs px-2 py-1 rounded text-[10px] text-white font-medium truncate">
                    O transporte move o Brasil · Juntos somos mais fortes
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 pt-1">
                  <p>
                    <strong className="text-slate-900 font-semibold">cotasgu</strong> Juntos vamos mais longe. Fortalecendo quem faz o transporte acontecer nas rodovias de todo o país. #COTASGU #Transporte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
