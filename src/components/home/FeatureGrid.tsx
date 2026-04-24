'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import { Newspaper, Trophy, Rocket, Calculator, BookOpen, Brain } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Newspaper,
    title: '最新动态墙',
    description: '平台最新资讯、活动公告与成员成长故事',
    href: '/news',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Trophy,
    title: '高手排行榜',
    description: '多维度实力排名，天榜地榜人榜，激发成长动力',
    href: '/rankings',
    gradient: 'from-amber-500 to-orange-400',
  },
  {
    icon: Rocket,
    title: '成长进阶路',
    description: '从直播间小白到平台合伙人的完整成长路径',
    href: '/roadmap',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Calculator,
    title: '分润计算器',
    description: '模拟你的指数增长收益，看懂就渴望加入',
    href: '/calculator',
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    icon: BookOpen,
    title: '官方文档库',
    description: '项目规则、操作指南与常见问题一站式查阅',
    href: '/docs',
    gradient: 'from-indigo-500 to-blue-400',
  },
  {
    icon: Brain,
    title: '共建知识库',
    description: '问答积分、智慧共享，帮助他人也成就自己',
    href: '/wiki',
    gradient: 'from-rose-500 to-red-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function FeatureGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText>六大核心功能</GradientText>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            营销获客 + 会员管理，一站式赋能你的指数增长之路
          </p>
        </motion.div>

        {/* Feature Grid - 2 columns x 3 rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Link href={feature.href}>
                  <GlassCard className="group h-full p-8 hover:translate-y-[-6px] hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)]">
                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
