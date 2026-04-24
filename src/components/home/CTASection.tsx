'use client';

import { motion } from 'framer-motion';
import { GlowButton } from '@/components/ui/GlowButton';
import { GradientText } from '@/components/ui/GradientText';

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card !p-10 sm:!p-14 md:!p-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 leading-tight">
            <GradientText>改变，从这一刻开始</GradientText>
          </h2>
          <p className="text-sm sm:text-base text-white/40 mb-3 max-w-md mx-auto leading-relaxed">
            白手启播属于最简单的纯聊天知识分享直播，不卖货也不卖课。
            免费学习，可白嫖，全然利他，只为帮助普通人翻身逆袭。
          </p>
          <p className="text-xs text-white/25 mb-8">
            7 天无理由退全款 · 零风险参与 · 支付金额仅为参与指数增长变现体系
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton size="lg" href="/register">
              立即加入白手启播
            </GlowButton>
            <GlowButton variant="outline" size="lg" href="/calculator">
              先算算能赚多少
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
