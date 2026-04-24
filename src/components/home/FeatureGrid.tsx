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
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeatureGrid() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            <GradientText>六大核心功能</GradientText>
          </h2>
          <p className="text-white/40 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            营销获客 + 会员管理，一站式赋能你的指数增长之路
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Link href={feature.href} className="block">
                  <GlassCard className="group h-full !p-6 sm:!p-7">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-medium text-white/80 mb-1.5 group-hover:text-white transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-white/35 leading-relaxed line-clamp-2">
                          {feature.description}
                        </p>
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
