'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
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
    <section className="py-20 sm:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text-gold mb-3">
                <AnimatedCounter
                  value={stat.value}
                  duration={2000}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  formatFn={stat.formatFn}
                />
              </div>
              <div className="text-xs text-white/30 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
