'use client';

import { motion } from 'framer-motion';
import { GlowButton } from '@/components/ui/GlowButton';
import { GradientText } from '@/components/ui/GradientText';

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card !p-10 sm:!p-14 md:!p-16 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.06] via-transparent to-cyan-500/[0.06] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
              <GradientText>改变，从这一刻开始</GradientText>
            </h2>
            <p className="text-base sm:text-lg text-white/50 mb-3 max-w-xl mx-auto leading-relaxed">
              白手启播属于最简单的纯聊天知识分享直播，不卖货也不卖课。
              免费学习，可白嫖，全然利他，只为帮助普通人翻身逆袭。
            </p>
            <p className="text-xs sm:text-sm text-white/30 mb-10">
              7 天无理由退全款 · 零风险参与 · 支付金额仅为参与指数增长变现体系
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowButton size="lg" href="/register">
                🚀 立即加入白手启播
              </GlowButton>
              <GlowButton variant="outline" size="lg" href="/calculator">
                💰 先算算能赚多少
              </GlowButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
