import React from 'react';

/**
 * Elementos gráficos institucionais inspirados nos cartazes da COTASGU:
 * - Grid de pontos verdes e azuis (Dot Grid)
 * - Arcos e curvas de estrada
 */

export const DotGrid: React.FC<{
  rows?: number;
  cols?: number;
  color?: string;
  className?: string;
}> = ({ rows = 3, cols = 4, color = '#1E7B34', className = '' }) => {
  return (
    <div
      className={`grid gap-2.5 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        width: `${cols * 14}px`,
      }}
      aria-hidden="true"
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full inline-block transition-opacity opacity-75"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export const RoadCurveGraphic: React.FC<{
  className?: string;
  inverted?: boolean;
}> = ({ className = '', inverted = false }) => {
  return (
    <svg
      viewBox="0 0 600 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full pointer-events-none select-none ${className}`}
      style={{ transform: inverted ? 'scaleX(-1)' : undefined }}
      aria-hidden="true"
    >
      <path
        d="M0,180 Q300,160 600,20"
        stroke="#1E7B34"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M0,200 Q320,180 600,50"
        stroke="#0A2558"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.95"
      />
      <path
        d="M20,195 Q310,175 580,42"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeDasharray="16 14"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
};
