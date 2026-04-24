'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { LEVELS, SPEEDS, ROUNDS } from '@/lib/constants';
import { calculateEarnings } from '@/lib/calculator';
import { formatCurrency, formatNumber, cn } from '@/lib/utils';
import type { Level, Speed, RoundPeriod, CalculatorResult, RoundEarnings } from '@/types/calculator';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

/* ============================================
   图表组件（需要 'use client'）
   ============================================ */

/** 自定义 Tooltip 样式 */
function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div className="glass-card p-3 text-sm min-w-[160px]">
      <p className="text-white/60 mb-2">第 {label} 轮</p>
      {payload.map((entry, idx) => (
        <div key={idx} className="flex items-center justify-between gap-4 mb-1">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-white/70">{entry.name}</span>
          </span>
          <span className="text-white font-medium">{formatCurrency(entry.value)}</span>
        </div>
      ))}
    </div>
  );
}

/** 累计收益面积图 */
function CumulativeChart({ data }: { data: RoundEarnings[] }) {
  const chartData = data.map((d) => ({
    round: d.round,
    cumulativeEarning: d.cumulativeEarning,
    totalInvestment: d.totalSeed,
  }));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="gradientEarning" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gradientSeed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
        <XAxis
          dataKey="round"
          tick={{ fill: '#94a3b8', fontSize: 12 }}
          axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          tickLine={false}
          label={{ value: '轮次', position: 'insideBottom', offset: -5, fill: '#64748b', fontSize: 12 }}
        />
        <YAxis
          tickFormatter={(v: number) => formatNumber(v)}
          tick={{ fill: '#94a3b8', fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          width={70}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="cumulativeEarning"
          name="累计收益"
          stroke="#a855f7"
          strokeWidth={2}
          fill="url(#gradientEarning)"
        />
        <Area
          type="monotone"
          dataKey="totalInvestment"
          name="当轮种子金"
          stroke="#06b6d4"
          strokeWidth={2}
          fill="url(#gradientSeed)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

/** 每轮分润构成柱状图 */
function RoundBreakdownChart({ data }: { data: RoundEarnings[] }) {
  const chartData = data.map((d) => ({
    round: d.round,
    带班课酬: d.classFee,
    分享销酬: d.referralFee,
    传承激励: d.inheritance,
    平台运营: d.platformFee,
  }));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
        <XAxis
          dataKey="round"
          tick={{ fill: '#94a3b8', fontSize: 12 }}
          axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          tickLine={false}
          label={{ value: '轮次', position: 'insideBottom', offset: -5, fill: '#64748b', fontSize: 12 }}
        />
        <YAxis
          tickFormatter={(v: number) => formatNumber(v)}
          tick={{ fill: '#94a3b8', fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          width={70}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="带班课酬" stackId="a" fill="#a855f7" radius={[0, 0, 0, 0]} />
        <Bar dataKey="分享销酬" stackId="a" fill="#6366f1" radius={[0, 0, 0, 0]} />
        <Bar dataKey="传承激励" stackId="a" fill="#06b6d4" radius={[0, 0, 0, 0]} />
        <Bar dataKey="平台运营" stackId="a" fill="rgba(255,255,255,0.15)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

/* ============================================
   主页面
   ============================================ */

export default function CalculatorPage() {
  const [selectedLevel, setSelectedLevel] = useState<Level>(1);
  const [selectedPeriod, setSelectedPeriod] = useState<RoundPeriod>('month');
  const [selectedSpeed, setSelectedSpeed] = useState<Speed>(1);

  const result: CalculatorResult = useMemo(
    () => calculateEarnings(selectedLevel, selectedPeriod, selectedSpeed),
    [selectedLevel, selectedPeriod, selectedSpeed]
  );

  // 用于表格展示：轮次过多时只展示关键轮次
  const displayRounds = useMemo(() => {
    const { roundDetails, totalRounds } = result;
    if (totalRounds <= 12) return roundDetails;
    // 选取关键轮次：前6轮 + 回本轮 + 之后每10%取一个
    const keyRounds = roundDetails.slice(0, 6);
    const paybackIdx = result.paybackRound > 6 ? result.paybackRound - 1 : -1;
    const step = Math.max(1, Math.floor(totalRounds / 10));
    const seen = new Set<number>();
    for (let i = 6; i < totalRounds; i += step) {
      if (!seen.has(i)) {
        keyRounds.push(roundDetails[i]);
        seen.add(i);
      }
    }
    if (paybackIdx >= 0 && !seen.has(paybackIdx)) {
      keyRounds.push(roundDetails[paybackIdx]);
    }
    // 确保最后一轮
    if (totalRounds - 1 >= 0 && !seen.has(totalRounds - 1)) {
      keyRounds.push(roundDetails[totalRounds - 1]);
    }
    // 按轮次排序
    keyRounds.sort((a, b) => a.round - b.round);
    // 去重
    const unique = new Map<number, RoundEarnings>();
    for (const r of keyRounds) unique.set(r.round, r);
    return Array.from(unique.values()).sort((a, b) => a.round - b.round);
  }, [result]);

  // 图表数据：轮次过多时采样
  const chartData = useMemo(() => {
    const { roundDetails, totalRounds } = result;
    if (totalRounds <= 30) return roundDetails;
    const step = Math.max(1, Math.floor(totalRounds / 30));
    const sampled: RoundEarnings[] = [];
    for (let i = 0; i < totalRounds; i += step) {
      sampled.push(roundDetails[i]);
    }
    if (sampled[sampled.length - 1].round !== totalRounds) {
      sampled.push(roundDetails[totalRounds - 1]);
    }
    return sampled;
  }, [result]);

  const currentLevelInfo = LEVELS.find((l) => l.level === selectedLevel)!;

  return (
    <section className="relative min-h-screen py-16 sm:py-20 overflow-hidden">
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* 页面标题 */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="primary" className="mb-4">
            分润收益模拟计算器
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <GradientText>预览你的指数增长收益</GradientText>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            基于「1 带 9 出 3」裂变模型，模拟不同等级、速度和周期下的分润收益
          </p>
        </motion.div>

        {/* 主体：左右布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          {/* ========== 左侧：输入控制区 ========== */}
          <motion.div
            className="lg:col-span-4 space-y-5 sm:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 等级选择器 */}
            <GlassCard hover={false} className="space-y-4 !p-5 sm:!p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🎓</span>
                <h3 className="text-white font-semibold text-lg">选择等级</h3>
              </div>
              <p className="text-text-tertiary text-sm">种子金越高，每轮收益基数越大</p>
              <div className="grid grid-cols-1 gap-3">
                {LEVELS.map((l) => (
                  <button
                    key={l.level}
                    onClick={() => setSelectedLevel(l.level)}
                    className={cn(
                      'relative flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 text-left',
                      selectedLevel === l.level
                        ? 'border-purple-500/50 bg-purple-500/10 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                        : 'border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          'w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold',
                          selectedLevel === l.level
                            ? 'bg-purple-500/30 text-purple-300'
                            : 'bg-white/5 text-white/40'
                        )}
                      >
                        {l.level}
                      </span>
                      <span className={cn('font-medium', selectedLevel === l.level ? 'text-white' : 'text-white/60')}>
                        {l.name}
                      </span>
                    </div>
                    <span
                      className={cn(
                        'font-mono font-semibold',
                        selectedLevel === l.level ? 'text-amber-400' : 'text-white/30'
                      )}
                    >
                      {formatCurrency(l.seedMoney)}
                    </span>
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* 轮次选择器 */}
            <GlassCard hover={false} className="space-y-4 !p-5 sm:!p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">⏱️</span>
                <h3 className="text-white font-semibold text-lg">模拟周期</h3>
              </div>
              <p className="text-text-tertiary text-sm">选择要模拟的时间跨度</p>
              <div className="grid grid-cols-2 gap-3">
                {ROUNDS.map((r) => (
                  <button
                    key={r.period}
                    onClick={() => setSelectedPeriod(r.period)}
                    className={cn(
                      'flex flex-col items-center px-4 py-3 rounded-xl border transition-all duration-200',
                      selectedPeriod === r.period
                        ? 'border-cyan-500/50 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : 'border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                    )}
                  >
                    <span
                      className={cn(
                        'font-bold text-lg',
                        selectedPeriod === r.period ? 'text-cyan-300' : 'text-white/40'
                      )}
                    >
                      {r.label}
                    </span>
                    <span className="text-text-tertiary text-xs mt-0.5">{r.rounds} 轮</span>
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* 速度选择器 */}
            <GlassCard hover={false} className="space-y-4 !p-5 sm:!p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🚀</span>
                <h3 className="text-white font-semibold text-lg">裂变速度</h3>
              </div>
              <p className="text-text-tertiary text-sm">每轮同时带班的数量</p>
              <div className="grid grid-cols-4 gap-3">
                {SPEEDS.map((s) => (
                  <button
                    key={s.speed}
                    onClick={() => setSelectedSpeed(s.speed)}
                    className={cn(
                      'flex flex-col items-center px-3 py-3 rounded-xl border transition-all duration-200',
                      selectedSpeed === s.speed
                        ? 'border-amber-500/50 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                        : 'border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                    )}
                  >
                    <span
                      className={cn(
                        'font-bold text-lg',
                        selectedSpeed === s.speed ? 'text-amber-400' : 'text-white/40'
                      )}
                    >
                      {s.speed}x
                    </span>
                    <span className="text-text-tertiary text-[10px] mt-0.5 text-center leading-tight">
                      {s.description}
                    </span>
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* 模型说明 */}
            <GlassCard hover={false} className="space-y-3 !p-5 sm:!p-6">
              <h4 className="text-white/80 font-medium text-sm">数学模型说明</h4>
              <div className="space-y-2 text-xs text-text-tertiary leading-relaxed">
                <p>
                  <span className="text-purple-400 font-medium">1 带 9 出 3：</span>
                  每轮每个领教员带 9 个学员，其中 3 个孵化为新领教员
                </p>
                <p>
                  <span className="text-cyan-400 font-medium">领教员增长：</span>
                  第 N 轮领教员数 = 4^(N-1) x 速度
                </p>
                <p>
                  <span className="text-amber-400 font-medium">分润比例：</span>
                  带班课酬 40% + 分享销酬 30% + 传承激励 10% = 80% 给参与者
                </p>
                <p>
                  <span className="text-white/40 font-medium">平台运营：</span>
                  20% 用于平台运营维护
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* ========== 右侧：结果展示区 ========== */}
          <motion.div
            className="lg:col-span-8 space-y-5 sm:space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* 关键指标卡片 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <motion.div
                key={`invest-${selectedLevel}-${selectedPeriod}-${selectedSpeed}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard hover={false} className="text-center !p-5 sm:!p-6">
                  <p className="text-text-tertiary text-xs mb-2">总投资（种子金）</p>
                  <AnimatedCounter
                    value={result.totalInvestment}
                    formatFn={formatCurrency}
                    className="text-xl lg:text-2xl font-bold text-white"
                  />
                </GlassCard>
              </motion.div>

              <motion.div
                key={`earning-${selectedLevel}-${selectedPeriod}-${selectedSpeed}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <GlassCard hover={false} glow className="text-center !p-5 sm:!p-6">
                  <p className="text-text-tertiary text-xs mb-2">总收益</p>
                  <AnimatedCounter
                    value={result.totalEarning}
                    formatFn={formatCurrency}
                    className="text-xl lg:text-2xl font-bold gradient-text-gold"
                  />
                </GlassCard>
              </motion.div>

              <motion.div
                key={`roi-${selectedLevel}-${selectedPeriod}-${selectedSpeed}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <GlassCard hover={false} className="text-center !p-5 sm:!p-6">
                  <p className="text-text-tertiary text-xs mb-2">投资回报率 ROI</p>
                  <AnimatedCounter
                    value={Math.round(result.roi)}
                    suffix="%"
                    className="text-xl lg:text-2xl font-bold text-emerald-400"
                  />
                </GlassCard>
              </motion.div>

              <motion.div
                key={`payback-${selectedLevel}-${selectedPeriod}-${selectedSpeed}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <GlassCard hover={false} className="text-center !p-5 sm:!p-6">
                  <p className="text-text-tertiary text-xs mb-2">回本轮次</p>
                  {result.paybackRound > 0 ? (
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-xl lg:text-2xl font-bold text-cyan-400">
                        第 {result.paybackRound}
                      </span>
                      <span className="text-text-tertiary text-sm">轮</span>
                    </div>
                  ) : (
                    <span className="text-xl lg:text-2xl font-bold text-white/30">--</span>
                  )}
                </GlassCard>
              </motion.div>
            </div>

            {/* 收益概览条 */}
            <GlassCard hover={false} className="!p-5 sm:!p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">收益概览</h3>
                  <p className="text-text-tertiary text-sm mt-1">
                    {currentLevelInfo.name} · {result.rounds.label} · {result.speed.label} · 共{' '}
                    {result.totalRounds} 轮
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="gold">净收益 {formatCurrency(result.totalEarning - result.totalInvestment)}</Badge>
                </div>
              </div>

              {/* 分润比例条 */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                <div className="text-center">
                  <div className="h-2 rounded-full bg-purple-500 mb-1.5" />
                  <p className="text-xs text-text-tertiary">带班课酬</p>
                  <p className="text-sm font-semibold text-purple-300">40%</p>
                </div>
                <div className="text-center">
                  <div className="h-2 rounded-full bg-indigo-500 mb-1.5" />
                  <p className="text-xs text-text-tertiary">分享销酬</p>
                  <p className="text-sm font-semibold text-indigo-300">30%</p>
                </div>
                <div className="text-center">
                  <div className="h-2 rounded-full bg-cyan-500 mb-1.5" />
                  <p className="text-xs text-text-tertiary">传承激励</p>
                  <p className="text-sm font-semibold text-cyan-300">10%</p>
                </div>
                <div className="text-center">
                  <div className="h-2 rounded-full bg-white/15 mb-1.5" />
                  <p className="text-xs text-text-tertiary">平台运营</p>
                  <p className="text-sm font-semibold text-white/40">20%</p>
                </div>
              </div>

              {/* 累计收益面积图 */}
              <div className="overflow-hidden">
                <h4 className="text-white/70 text-sm font-medium mb-3">累计收益趋势</h4>
                <CumulativeChart data={chartData} />
              </div>
            </GlassCard>

            {/* 分润构成柱状图 */}
            <GlassCard hover={false} className="!p-5 sm:!p-6">
              <h3 className="text-white font-semibold text-lg mb-1">每轮分润构成</h3>
              <p className="text-text-tertiary text-sm mb-4">各轮次收益来源明细</p>
              <div className="overflow-hidden">
              <RoundBreakdownChart data={chartData} />
              </div>
            </GlassCard>

            {/* 数据表格 */}
            <GlassCard hover={false} className="!p-5 sm:!p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">轮次明细</h3>
                  <p className="text-text-tertiary text-sm mt-1">
                    {displayRounds.length === result.totalRounds
                      ? `共 ${result.totalRounds} 轮`
                      : `显示 ${displayRounds.length} / ${result.totalRounds} 轮（关键轮次采样）`}
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-text-tertiary font-medium py-3 px-3">轮次</th>
                      <th className="text-right text-text-tertiary font-medium py-3 px-3">领教员</th>
                      <th className="text-right text-text-tertiary font-medium py-3 px-3">新学员</th>
                      <th className="text-right text-text-tertiary font-medium py-3 px-3">当轮收益</th>
                      <th className="text-right text-text-tertiary font-medium py-3 px-3">累计收益</th>
                      <th className="text-right text-text-tertiary font-medium py-3 px-3">团队规模</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence mode="popLayout">
                      {displayRounds.map((d) => {
                        const isPayback = d.round === result.paybackRound;
                        return (
                          <motion.tr
                            key={`${selectedLevel}-${selectedPeriod}-${selectedSpeed}-${d.round}`}
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                              'border-b border-white/5 transition-colors',
                              isPayback && 'bg-emerald-500/5'
                            )}
                          >
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-2">
                                <span className="text-white/80 font-medium">第 {d.round} 轮</span>
                                {isPayback && (
                                  <Badge variant="success" className="text-[10px] px-1.5 py-0">
                                    回本
                                  </Badge>
                                )}
                              </div>
                            </td>
                            <td className="text-right py-3 px-3 text-white/70 font-mono">
                              {formatNumber(d.instructors)}
                            </td>
                            <td className="text-right py-3 px-3 text-white/70 font-mono">
                              {formatNumber(d.newStudents)}
                            </td>
                            <td className="text-right py-3 px-3 text-amber-400 font-mono font-medium">
                              {formatCurrency(d.totalEarning)}
                            </td>
                            <td className="text-right py-3 px-3 text-purple-300 font-mono font-medium">
                              {formatCurrency(d.cumulativeEarning)}
                            </td>
                            <td className="text-right py-3 px-3 text-cyan-400/80 font-mono">
                              {formatNumber(d.totalTeamSize)}
                            </td>
                          </motion.tr>
                        );
                      })}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
