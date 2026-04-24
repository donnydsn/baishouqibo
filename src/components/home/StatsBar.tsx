'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { GlassCard } from '@/components/ui/GlassCard';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { mockStats } from '@/data/mock-stats';

const stats = [
  { label: '累计轮次', value: mockStats.totalRounds, suffix: ' 轮', formatFn: formatNumber },
  { label: '总学员数', value: mockStats.totalStudents, suffix: ' 人', formatFn: formatNumber },
  { label: '认证讲师', value: mockStats.totalInstructors, suffix: ' 位', formatFn: formatNumber },
  { label: '累计分润', value: mockStats.totalEarnings, prefix: '', formatFn: formatCurrency },
];

export function StatsBar() {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="glass-card-no-hover text-center py-8 sm:py-10">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text-gold mb-3">
                  <AnimatedCounter
                    value={stat.value}
                    duration={2000}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    formatFn={stat.formatFn}
                  />
                </div>
                <div className="text-xs sm:text-sm text-white/40 tracking-wider">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
