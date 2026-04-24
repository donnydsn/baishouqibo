'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Calendar, Tag, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { mockNews, type NewsItem } from '@/data/mock-news';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

/* ============================================
   分类配置
   ============================================ */

interface CategoryConfig {
  key: 'all' | NewsItem['category'];
  label: string;
  icon: React.ReactNode;
  badgeVariant: 'default' | 'primary' | 'gold' | 'success' | 'info';
}

const categories: CategoryConfig[] = [
  { key: 'all', label: '全部', icon: <Newspaper className="w-4 h-4" />, badgeVariant: 'default' },
  { key: 'announcement', label: '公告', icon: <Sparkles className="w-4 h-4" />, badgeVariant: 'primary' },
  { key: 'event', label: '活动', icon: <Tag className="w-4 h-4" />, badgeVariant: 'gold' },
  { key: 'story', label: '成员故事', icon: <Newspaper className="w-4 h-4" />, badgeVariant: 'success' },
  { key: 'system', label: '系统更新', icon: <Sparkles className="w-4 h-4" />, badgeVariant: 'info' },
];

const categoryBadgeMap: Record<NewsItem['category'], 'primary' | 'gold' | 'success' | 'info'> = {
  announcement: 'primary',
  event: 'gold',
  story: 'success',
  system: 'info',
};

const categoryLabelMap: Record<NewsItem['category'], string> = {
  announcement: '公告',
  event: '活动',
  story: '成员故事',
  system: '系统更新',
};

/* ============================================
   新闻卡片组件
   ============================================ */

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      layout
    >
      <GlassCard
        hover={true}
        glow={expanded}
        onClick={() => setExpanded(!expanded)}
        className="group relative overflow-hidden !p-5 sm:!p-6"
      >
        {/* 悬停发光效果 */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-amber-500/10 rounded-2xl blur-xl" />
        </div>

        <div className="relative z-10">
          {/* 卡片头部：分类标签 + 时间 */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Badge variant={categoryBadgeMap[item.category]}>
                {categoryLabelMap[item.category]}
              </Badge>
              {item.tags.map((tag) => (
                <Badge key={tag} variant="default" className="text-[10px] px-2 py-0.5">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-text-tertiary text-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>{item.publishedAt}</span>
            </div>
          </div>

          {/* 标题 */}
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-300 transition-colors duration-300">
            {item.title}
          </h3>

          {/* 摘要 */}
          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            {item.summary}
          </p>

          {/* 展开内容 */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-3 border-t border-white/10">
                  <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 展开/收起指示 */}
          <div className="flex items-center justify-center mt-3">
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-text-tertiary group-hover:text-purple-400 transition-colors"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

/* ============================================
   主页面
   ============================================ */

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | NewsItem['category']>('all');

  const filteredNews = useMemo(() => {
    if (activeCategory === 'all') return mockNews;
    return mockNews.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const activeCount = activeCategory === 'all'
    ? mockNews.length
    : mockNews.filter((item) => item.category === activeCategory).length;

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
      </div>

      <div className="relative z-10 px-5 sm:px-8 max-w-5xl mx-auto">
        {/* 页面标题 */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="primary" className="mb-4">
            <Newspaper className="w-3.5 h-3.5 mr-1.5" />
            最新动态
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <GradientText>动态墙</GradientText>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            了解白手启播的最新公告、活动、成员故事和系统更新
          </p>
        </motion.div>

        {/* 标签筛选栏 */}
        <motion.div
          className="scroll-container flex items-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm font-medium',
                activeCategory === cat.key
                  ? 'border-purple-500/50 bg-purple-500/15 text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                  : 'border-white/8 bg-white/[0.03] text-white/50 hover:border-white/15 hover:bg-white/[0.06] hover:text-white/70'
              )}
            >
              {cat.icon}
              <span>{cat.label}</span>
              <span
                className={cn(
                  'text-xs px-1.5 py-0.5 rounded-md',
                  activeCategory === cat.key
                    ? 'bg-purple-500/20 text-purple-300'
                    : 'bg-white/5 text-white/30'
                )}
              >
                {cat.key === 'all'
                  ? mockNews.length
                  : mockNews.filter((n) => n.category === cat.key).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* 结果统计 */}
        <motion.div
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-text-tertiary text-sm">
            共 <span className="text-white/70 font-medium">{activeCount}</span> 条动态
          </p>
          <div className="flex items-center gap-1.5 text-text-tertiary text-xs">
            <Tag className="w-3.5 h-3.5" />
            <span>点击卡片展开详情</span>
          </div>
        </motion.div>

        {/* 动态卡片列表 */}
        <div className="flex flex-col gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item, index) => (
              <NewsCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* 空状态 */}
        {filteredNews.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Newspaper className="w-12 h-12 text-white/10 mx-auto mb-4" />
            <p className="text-text-tertiary">暂无该分类的动态</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
