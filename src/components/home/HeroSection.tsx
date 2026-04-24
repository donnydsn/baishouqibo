'use client';

import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/GradientText';
import { GlowButton } from '@/components/ui/GlowButton';
import { SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="bg-glow bg-glow-1" />
        <div className="bg-glow bg-glow-2" />
        <div className="bg-glow bg-glow-3" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            全然利他 · 零风险参与 · 指数增长变现
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <GradientText as="span" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            白手启播
          </GradientText>
          <br />
          <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mt-2 block">
            以教代学 · 指数变现 · 改写人生
          </span>
        </motion.h1>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          {SITE_CONFIG.description}
        </motion.p>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-white/50"
        >
          <span className="flex items-center gap-1">✅ 不卖货不卖课</span>
          <span className="flex items-center gap-1">✅ 纯聊天知识分享</span>
          <span className="flex items-center gap-1">✅ 7天无理由退全款</span>
          <span className="flex items-center gap-1">✅ 1带9出3指数增长</span>
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
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full mx-auto flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-white/40 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
