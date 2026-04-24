'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-white/80 font-bold text-xs">
              白
            </div>
            <span className="text-base font-semibold text-white/90 hidden sm:block">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm text-white/50 hover:text-white/90 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden sm:block text-sm text-white/50 hover:text-white/90 transition-colors"
            >
              登录
            </Link>
            <Link
              href="/register"
              className="hidden sm:block text-sm text-white/80 hover:text-white transition-colors"
            >
              加入
            </Link>

            <button
              className="lg:hidden p-2 text-white/50 hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/[0.04]">
          <div className="max-w-6xl mx-auto px-6 py-8 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3.5 text-white/50 hover:text-white/90 transition-colors text-[15px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 flex gap-4">
              <Link
                href="/login"
                className="flex-1 text-center py-2.5 text-sm text-white/50 hover:text-white/90 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                登录
              </Link>
              <Link
                href="/register"
                className="flex-1 text-center py-2.5 text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                加入
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
