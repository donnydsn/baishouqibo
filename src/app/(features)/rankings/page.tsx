'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Medal,
  Crown,
  Users,
  GraduationCap,
  Mic,
  DollarSign,
  TrendingUp,
  ChevronDown,
  Star,
  Zap,
} from 'lucide-react';
import { mockRankings, type RankingItem } from '@/data/mock-rankings';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { cn, formatCurrency } from '@/lib/utils';

/* ============================================
   类型定义
   ============================================ */

type DimensionKey = 'classCount' | 'studentCount' | 'instructorCount' | 'totalEarnings';
type TierKey = 'heaven' | 'earth' | 'human';

interface DimensionTab {
  key: DimensionKey;
  label: string;
  icon: React.ReactNode;
  unit: string;
  formatFn: (v: number) => string;
}

interface TierTab {
  key: TierKey;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  filterFn: (item: RankingItem) => boolean;
}

/* ============================================
   常量配置
   ============================================ */

const dimensions: DimensionTab[] = [
  {
    key: 'classCount',
    label: '带班数',
    icon: <Users className="w-4 h-4" />,
    unit: '班',
    formatFn: (v) => v.toLocaleString('zh-CN'),
  },
  {
    key: 'studentCount',
    label: '培养学员数',
    icon: <GraduationCap className="w-4 h-4" />,
    unit: '人',
    formatFn: (v) => v.toLocaleString('zh-CN'),
  },
  {
    key: 'instructorCount',
    label: '孵化讲师数',
    icon: <Mic className="w-4 h-4" />,
    unit: '人',
    formatFn: (v) => v.toLocaleString('zh-CN'),
  },
  {
    key: 'totalEarnings',
    label: '总计收益',
    icon: <DollarSign className="w-4 h-4" />,
    unit: '',
    formatFn: (v) => formatCurrency(v),
  },
];

const tiers: TierTab[] = [
  {
    key: 'heaven',
    label: '天榜',
    sublabel: '四五年级',
    icon: <Crown className="w-4 h-4" />,
    filterFn: (item) => item.level >= 4,
  },
  {
    key: 'earth',
    label: '地榜',
    sublabel: '二三年级',
    icon: <Trophy className="w-4 h-4" />,
    filterFn: (item) => item.level >= 2 && item.level <= 3,
  },
  {
    key: 'human',
    label: '人榜',
    sublabel: '全段位',
    icon: <Medal className="w-4 h-4" />,
    filterFn: () => true,
  },
];

/* ============================================
   前三名特殊卡片
   ============================================ */

function TopThreeCard({
  item,
  dimension,
  rank,
}: {
  item: RankingItem;
  dimension: DimensionTab;
  rank: 1 | 2 | 3;
}) {
  const value = item[dimension.key];

  const rankConfig = {
    1: {
      badge: 'bg-gradient-to-br from-amber-400 to-yellow-600',
      icon: <Crown className="w-5 h-5 text-yellow-900" />,
      label: '冠军',
      glow: 'shadow-[0_0_30px_rgba(251,191,36,0.3)]',
      border: 'border-amber-500/40',
      size: 'lg',
    },
    2: {
      badge: 'bg-gradient-to-br from-slate-300 to-slate-500',
      icon: <Trophy className="w-5 h-5 text-slate-800" />,
      label: '亚军',
      glow: 'shadow-[0_0_25px_rgba(148,163,184,0.25)]',
      border: 'border-slate-400/40',
      size: 'md',
    },
    3: {
      badge: 'bg-gradient-to-br from-amber-600 to-amber-800',
      icon: <Medal className="w-5 h-5 text-amber-200" />,
      label: '季军',
      glow: 'shadow-[0_0_25px_rgba(180,83,9,0.25)]',
      border: 'border-amber-700/40',
      size: 'md',
    },
  };

  const config = rankConfig[rank];
  const isFirst = rank === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: rank * 0.15 }}
      className={cn(isFirst ? 'md:-mt-4' : '')}
    >
      <GlassCard
        hover={false}
        className={cn(
          'relative overflow-hidden text-center',
          config.glow,
          config.border,
          isFirst ? 'p-6 md:p-8' : 'p-5 md:p-6'
        )}
      >
        {/* 顶部光效 */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: rank === 1
              ? 'linear-gradient(90deg, transparent, rgba(251,191,36,0.6), transparent)'
              : rank === 2
              ? 'linear-gradient(90deg, transparent, rgba(148,163,184,0.5), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(180,83,9,0.5), transparent)',
          }}
        />

        {/* 排名徽章 */}
        <div
          className={cn(
            'mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-3',
            config.badge
          )}
        >
          {config.icon}
        </div>

        {/* 称号 */}
        <Badge
          variant={rank === 1 ? 'gold' : rank === 2 ? 'default' : 'primary'}
          className="mb-2"
        >
          {config.label}
        </Badge>

        {/* 头像占位 */}
        <div
          className={cn(
            'mx-auto rounded-full flex items-center justify-center text-white font-bold mb-3',
            isFirst ? 'w-16 h-16 text-xl' : 'w-14 h-14 text-lg'
          )}
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(6,182,212,0.4))',
          }}
        >
          {item.nickname.charAt(0)}
        </div>

        {/* 昵称 */}
        <h3 className={cn('font-bold text-white mb-1', isFirst ? 'text-xl' : 'text-lg')}>
          {item.nickname}
        </h3>
        <p className="text-text-tertiary text-xs mb-3">
          {item.levelName}
        </p>

        {/* 核心数据 */}
        <div className={cn('font-bold', isFirst ? 'text-2xl' : 'text-xl')}>
          <AnimatedCounter
            value={value}
            formatFn={dimension.formatFn}
            className={isFirst ? 'gradient-text-gold' : 'gradient-text'}
          />
        </div>
        <p className="text-text-tertiary text-xs mt-1">
          {dimension.label}
          {dimension.unit ? `（${dimension.unit}）` : ''}
        </p>

        {/* 附加信息 */}
        <div className="flex items-center justify-center gap-3 mt-3 text-xs text-text-tertiary">
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {item.classCount} 班
          </span>
          <span className="flex items-center gap-1">
            <GraduationCap className="w-3 h-3" />
            {item.studentCount} 人
          </span>
        </div>
      </GlassCard>
    </motion.div>
  );
}

/* ============================================
   普通排名列表项
   ============================================ */

function RankingRow({
  item,
  dimension,
  index,
}: {
  item: RankingItem;
  dimension: DimensionTab;
  index: number;
}) {
  const value = item[dimension.key];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <GlassCard
        hover={false}
        className="flex items-center gap-4 py-3 px-4"
      >
        {/* 排名 */}
        <div className="w-8 text-center flex-shrink-0">
          <span className="text-lg font-bold text-white/40 font-mono">{item.rank}</span>
        </div>

        {/* 头像 */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.3))',
          }}
        >
          {item.nickname.charAt(0)}
        </div>

        {/* 信息 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white text-sm truncate">{item.nickname}</span>
            <Badge variant="info" className="text-[10px] px-1.5 py-0 flex-shrink-0">
              {item.levelName}
            </Badge>
          </div>
        </div>

        {/* 核心数值 */}
        <div className="text-right flex-shrink-0">
          <AnimatedCounter
            value={value}
            formatFn={dimension.formatFn}
            className="font-bold text-white text-sm"
          />
          <p className="text-text-tertiary text-[10px]">{dimension.unit}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

/* ============================================
   主页面
   ============================================ */

export default function RankingsPage() {
  const [activeDimension, setActiveDimension] = useState<DimensionKey>('classCount');
  const [activeTier, setActiveTier] = useState<TierKey>('heaven');

  const currentDimension = dimensions.find((d) => d.key === activeDimension)!;
  const currentTier = tiers.find((t) => t.key === activeTier)!;

  // 根据当前维度和段位筛选、排序
  const filteredRankings = useMemo(() => {
    const filtered = mockRankings.filter(currentTier.filterFn);
    return [...filtered].sort((a, b) => b[activeDimension] - a[activeDimension]);
  }, [activeDimension, activeTier]);

  const topThree = filteredRankings.slice(0, 3);
  const restRankings = filteredRankings.slice(3);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-amber-600/8 blur-[100px]" />
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="gold" className="mb-4">
            <Trophy className="w-3 h-3 mr-1" />
            高手排行榜
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <GradientText variant="gold">见证每一位高手的荣耀</GradientText>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            多维度排名，全面展示领教员实力。带班数、学员数、讲师数、总收益，谁是最强王者？
          </p>
        </motion.div>

        {/* 维度Tab切换 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassCard hover={false} className="p-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {dimensions.map((dim) => (
                <button
                  key={dim.key}
                  onClick={() => setActiveDimension(dim.key)}
                  className={cn(
                    'flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all duration-200 text-sm font-medium',
                    activeDimension === dim.key
                      ? 'border-purple-500/50 bg-purple-500/15 text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                      : 'border-white/5 bg-white/[0.02] text-white/50 hover:border-white/15 hover:bg-white/[0.04] hover:text-white/70'
                  )}
                >
                  {dim.icon}
                  <span>{dim.label}</span>
                </button>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* 段位Tab切换 */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3">
            {tiers.map((tier) => (
              <button
                key={tier.key}
                onClick={() => setActiveTier(tier.key)}
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-200 text-sm',
                  activeTier === tier.key
                    ? 'border-amber-500/50 bg-amber-500/15 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                    : 'border-white/5 bg-white/[0.02] text-white/40 hover:border-white/15 hover:bg-white/[0.04] hover:text-white/60'
                )}
              >
                {tier.icon}
                <span className="font-medium">{tier.label}</span>
                <span className="text-xs opacity-60">({tier.sublabel})</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* 排行榜内容 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeDimension}-${activeTier}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredRankings.length === 0 ? (
              <GlassCard hover={false} className="text-center py-16">
                <Trophy className="w-12 h-12 text-white/10 mx-auto mb-4" />
                <p className="text-text-tertiary text-lg">该段位暂无排名数据</p>
                <p className="text-text-tertiary text-sm mt-1">请切换其他段位查看</p>
              </GlassCard>
            ) : (
              <>
                {/* 前三名特殊展示 */}
                {topThree.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                    {/* 桌面端：亚军 - 冠军 - 季军 */}
                    {/* 移动端：冠军 - 亚军 - 季军 */}
                    <div className="hidden md:block">
                      {topThree[1] && (
                        <TopThreeCard
                          item={topThree[1]}
                          dimension={currentDimension}
                          rank={2}
                        />
                      )}
                    </div>
                    <div className="order-first md:order-none">
                      {topThree[0] && (
                        <TopThreeCard
                          item={topThree[0]}
                          dimension={currentDimension}
                          rank={1}
                        />
                      )}
                    </div>
                    <div>
                      {topThree[2] && (
                        <TopThreeCard
                          item={topThree[2]}
                          dimension={currentDimension}
                          rank={3}
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* 其余排名列表 */}
                {restRankings.length > 0 && (
                  <div className="space-y-3">
                    {restRankings.map((item, index) => (
                      <RankingRow
                        key={item.id}
                        item={item}
                        dimension={currentDimension}
                        index={index}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* 底部统计 */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard hover={false} className="p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-white/70">平台数据总览</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <AnimatedCounter
                  value={mockRankings.reduce((sum, r) => sum + r.classCount, 0)}
                  className="text-xl font-bold gradient-text"
                />
                <p className="text-text-tertiary text-xs mt-1">总带班数</p>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  value={mockRankings.reduce((sum, r) => sum + r.studentCount, 0)}
                  className="text-xl font-bold gradient-text-cyan"
                />
                <p className="text-text-tertiary text-xs mt-1">总学员数</p>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  value={mockRankings.reduce((sum, r) => sum + r.instructorCount, 0)}
                  className="text-xl font-bold gradient-text-gold"
                />
                <p className="text-text-tertiary text-xs mt-1">总孵化讲师</p>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  value={mockRankings.reduce((sum, r) => sum + r.totalEarnings, 0)}
                  formatFn={formatCurrency}
                  className="text-xl font-bold gradient-text-gold"
                />
                <p className="text-text-tertiary text-xs mt-1">总收益</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
