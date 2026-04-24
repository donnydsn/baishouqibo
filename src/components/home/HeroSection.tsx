'use client';

import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/GradientText';
import { GlowButton } from '@/components/ui/GlowButton';
import { SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="bg-glow bg-glow-1" />
        <div className="bg-glow bg-glow-2" />
        <div className="bg-glow bg-glow-3" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-white/60 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            全然利他 · 零风险参与 · 指数增长变现
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <GradientText as="span" className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight block">
            白手启播
          </GradientText>
          <span className="text-white/80 text-xl sm:text-2xl md:text-3xl font-normal mt-4 block leading-relaxed">
            以教代学 · 指数变现 · 改写人生
          </span>
        </motion.h1>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {SITE_CONFIG.description}
        </motion.p>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12 text-sm text-white/40"
        >
          <span>✅ 不卖货不卖课</span>
          <span>✅ 纯聊天知识分享</span>
          <span>✅ 7天无理由退全款</span>
          <span>✅ 1带9出3指数增长</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GlowButton size="lg" href="/calculator">
            💰 模拟我的收益
          </GlowButton>
          <GlowButton variant="outline" size="lg" href="/roadmap">
            🚀 了解成长路径
          </GlowButton>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-20"
        >
          <div className="w-5 h-9 border-2 border-white/15 rounded-full mx-auto flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1 bg-white/30 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
