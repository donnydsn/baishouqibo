'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'gold' | 'success' | 'info';
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  const variantClass = {
    default: 'bg-white/10 text-white/70',
    primary: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    gold: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    info: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30',
  }[variant];

  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-medium', variantClass, className)}>
      {children}
    </span>
  );
}
