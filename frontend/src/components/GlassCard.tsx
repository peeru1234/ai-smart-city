import React from 'react';
import { clsx } from 'clsx';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: 'cyan' | 'red' | 'emerald' | 'amber' | 'none';
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glow = 'none',
  hoverEffect = true,
  ...props
}) => {
  const glowClasses = {
    cyan: 'cyan-border-glow',
    red: 'border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.25)]',
    emerald: 'border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]',
    amber: 'border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.25)]',
    none: 'border-white/10'
  };

  return (
    <div
      className={clsx(
        "glass-panel rounded-2xl p-5 border transition-all duration-300 relative overflow-hidden",
        glowClasses[glow],
        hoverEffect && "glass-panel-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
