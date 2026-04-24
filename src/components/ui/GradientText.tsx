'use client';

import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'gold' | 'cyan';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export function GradientText({ children, className, variant = 'primary', as: Tag = 'span' }: GradientTextProps) {
  const variantClass = {
    primary: 'gradient-text',
    gold: 'gradient-text-gold',
    cyan: 'gradient-text-cyan',
  }[variant];

  return <Tag className={cn(variantClass, className)}>{children}</Tag>;
}
