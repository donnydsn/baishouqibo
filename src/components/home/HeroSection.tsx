'use client';

import { motion } from 'framer-motion';
import { GradientText } from '@/components/ui/GradientText';
import { GlowButton } from '@/components/ui/GlowButton';
import { SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            全然利他 · 零风险参与 · 指数增长变现
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <GradientText as="span" className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight block">
            白手启播
          </GradientText>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl font-normal text-white/60 mb-8"
        >
          以教代学 · 指数变现 · 改写人生
        </motion.p>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base text-white/40 max-w-lg mx-auto mb-12 leading-relaxed"
        >
          {SITE_CONFIG.description}
        </motion.p>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-14 text-xs text-white/25"
        >
          <span>不卖货不卖课</span>
          <span>纯聊天知识分享</span>
          <span>7天无理由退全款</span>
          <span>1带9出3指数增长</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GlowButton size="lg" href="/calculator">
            模拟我的收益
          </GlowButton>
          <GlowButton variant="outline" size="lg" href="/roadmap">
            了解成长路径
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
