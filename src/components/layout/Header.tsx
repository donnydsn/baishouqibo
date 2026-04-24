'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { GlowButton } from '@/components/ui/GlowButton';

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
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              白
            </div>
            <span className="text-lg font-bold gradient-text hidden sm:block">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-white/50 hover:text-white/90 rounded-lg hover:bg-white/[0.04] transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-2 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm text-white/30 hover:text-white/50 hover:border-white/[0.1] transition-all cursor-pointer">
              <Search className="w-3.5 h-3.5" />
              <span>搜索</span>
            </div>

            <div className="hidden sm:flex items-center gap-2.5">
              <GlowButton variant="outline" size="sm" href="/login">
                登录
              </GlowButton>
              <GlowButton size="sm" href="/register">
                免费加入
              </GlowButton>
            </div>

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
        <div className="lg:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/[0.04]">
          <div className="max-w-6xl mx-auto px-5 py-5 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-white/50 hover:text-white/90 hover:bg-white/[0.04] rounded-xl transition-all text-[15px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-5 flex gap-3">
              <GlowButton variant="outline" size="sm" href="/login" className="flex-1">
                登录
              </GlowButton>
              <GlowButton size="sm" href="/register" className="flex-1">
                免费加入
              </GlowButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
