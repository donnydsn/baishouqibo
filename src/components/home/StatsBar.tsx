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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="text-center py-8">
                <div className="text-3xl md:text-4xl font-bold gradient-text-gold mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    duration={2000}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    formatFn={stat.formatFn}
                  />
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
