'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
}

export function GlowButton({ children, className, variant = 'primary', size = 'md', onClick, href }: GlowButtonProps) {
  const sizeClass = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }[size];

  const variantClass = {
    primary: 'glow-button',
    secondary: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_6px_20px_rgba(6,182,212,0.5)] hover:-translate-y-0.5',
    outline: 'border border-white/20 text-white rounded-xl font-semibold transition-all hover:bg-white/10 hover:border-white/30',
  }[variant];

  if (href) {
    return (
      <a href={href} className={cn(variantClass, sizeClass, className)}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cn(variantClass, sizeClass, className)}>
      {children}
    </button>
  );
}
