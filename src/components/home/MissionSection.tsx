'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import { Target, Eye, Heart } from 'lucide-react';

const missions = [
  {
    icon: Target,
    title: '使命',
    content: '用最低成本、最短时间，教会小白去教会更多小白做直播，以教代学快速提升真人表达力，让每个人都能在 AI 时代找到自己的位置。',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Eye,
    title: '愿景',
    content: '打造全球最大的以教代学直播社群，通过指数增长的变现体系，帮助 100 万普通人实现能力-财力-心力的飞轮效应，彻底改写人生剧本。',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Heart,
    title: '价值观',
    content: '全然利他、零风险参与、以教代学、指数增长、能力财力心力飞轮、Token 自由、ALL IN AI、抢先融入 AI 时代浪潮。',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export function MissionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText variant="cyan">使命 · 愿景 · 价值观</GradientText>
          </h2>
          <p className="text-white/50 text-lg">
            颠覆常识的创新思维，帮助普通人翻身逆袭
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <GlassCard className="h-full p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mission.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text mb-4">{mission.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{mission.content}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
