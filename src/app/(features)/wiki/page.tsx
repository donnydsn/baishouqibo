'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, MessageCircle, Eye, Star, Tag, ChevronDown, ChevronUp, CheckCircle, Sparkles, Trophy } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';

/* ============================================
   模拟数据
   ============================================ */

const mockQuestions = [
  {
    id: '1',
    title: '完全没有直播经验，真的能学会吗？',
    tags: ['新手入门', '直播技巧'],
    answers: 8,
    views: 256,
    points: 15,
    author: '张老师',
    createdAt: '2025-01-15',
    accepted: true,
    content: '完全可以！白手启播的核心就是"以教代学"，我们不需要你是直播专家，只需要你愿意学习和分享。训练营会从最基础的设备调试、话术模板开始，手把手带你入门。很多优秀的领教员一开始也是零基础的小白。',
    bestAnswer: '作为一位从零开始的宝妈，我可以负责任地说，白手启播的训练营真的非常友好。第一天学设备调试，第二天学话术框架，第三天就能上播实操了。关键是"以教代学"的模式，你不是在死记硬背，而是在教别人的过程中自然掌握了技能。',
  },
  {
    id: '2',
    title: '7天训练营每天需要投入多少时间？',
    tags: ['训练营', '时间安排'],
    answers: 5,
    views: 189,
    points: 10,
    author: '李教练',
    createdAt: '2025-01-14',
    accepted: true,
    content: '训练营每天晚上30~60分钟的课程，加上课后练习大约需要额外30分钟。总体来说，每天投入1~1.5小时即可完成全部学习任务。课程支持回放，时间灵活安排。',
    bestAnswer: '我是在职上班族，每天晚上抽出40分钟参加课程，周末再花1小时复习和实操。7天下来感觉收获非常大，完全不会影响正常工作。关键是课程内容很精炼，没有废话。',
  },
  {
    id: '3',
    title: '传承激励和传销有什么区别？',
    tags: ['分润体系', '合规'],
    answers: 12,
    views: 432,
    points: 20,
    author: '王导师',
    createdAt: '2025-01-13',
    accepted: true,
    content: '这是一个非常好的问题。传承激励只有1层，完全合规。传销的核心特征是"超过3级的层级分销"和"以拉人头为主要盈利方式"，而白手启播的分润体系完全不同——收益来源于真实的带班教学服务。',
    bestAnswer: '从法律角度来看，传销的定义是"超过3级的层级分销"加上"入门费模式"。白手启播的传承激励只有1层，而且所有收益都来源于真实的直播带班教学服务，不存在"拉人头赚差价"的情况。我们也有专业法律顾问做过合规审查。',
  },
  {
    id: '4',
    title: '如果7天内觉得不合适，退款流程是怎样的？',
    tags: ['退款', '零风险'],
    answers: 3,
    views: 156,
    points: 8,
    author: '赵老师',
    createdAt: '2025-01-12',
    accepted: false,
    content: '7天内无理由退全款，这是我们的承诺。退款流程非常简单：联系你的推荐人或直接联系客服，提交退款申请后1~3个工作日内原路退回。没有任何附加条件。',
  },
  {
    id: '5',
    title: '如何从教学员晋升为认证领教员？',
    tags: ['晋升', '领教员'],
    answers: 6,
    views: 298,
    points: 12,
    author: '陈教练',
    createdAt: '2025-01-11',
    accepted: true,
    content: '晋升路径：结业教学员 → 见习领教员（跟班）→ 实习领教员（试讲）→ 认证领教员。整个过程注重实战能力，不设学历门槛。只要你认真完成训练营学习并通过考核，就有机会晋升。',
    bestAnswer: '我用了大约3周时间从学员晋升为认证领教员。关键是训练营期间要认真做笔记、积极参与互动，结业后主动申请跟班学习。见习期间多观察资深领教员的教学方式，实习时大胆试讲，认证考核主要看你的实操能力。',
  },
  {
    id: '6',
    title: '积分有什么用？如何获取更多积分？',
    tags: ['积分', '玩法'],
    answers: 9,
    views: 345,
    points: 18,
    author: '刘导师',
    createdAt: '2025-01-10',
    accepted: true,
    content: '积分系统是共建知识库的核心激励机制。积分可以用来解锁高级课程内容、兑换专属福利、提升社区等级等。获取积分的方式包括：提问、回答问题、回答被采纳、每日签到、邀请好友等。',
    bestAnswer: '我目前积累了1200+积分，主要通过回答问题获得的。每次回答被采纳可以获得20积分，普通回答也能获得5积分。建议多关注新问题，及时回答被采纳的概率更高。另外每日签到也能稳定获得积分。',
  },
];

/* ============================================
   所有标签（去重）
   ============================================ */

const allTags = Array.from(new Set(mockQuestions.flatMap((q) => q.tags)));

/* ============================================
   主页面
   ============================================ */

export default function WikiPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredQuestions = useMemo(() => {
    if (!selectedTag) return mockQuestions;
    return mockQuestions.filter((q) => q.tags.includes(selectedTag));
  }, [selectedTag]);

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
            <Brain className="w-3.5 h-3.5 mr-1.5" />
            共建知识库
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <GradientText>问答知识库</GradientText>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            汇集常见问题与精选回答，共建共享的直播知识社区
          </p>
        </motion.div>

        {/* 标签筛选 */}
        <motion.div
          className="scroll-container flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Tag className="w-4 h-4 text-white/40 mr-1" />
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedTag === null
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_12px_rgba(139,92,246,0.2)]'
                : 'bg-white/5 text-white/50 border border-white/10 hover:border-white/20 hover:text-white/70'
            }`}
          >
            全部
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_12px_rgba(139,92,246,0.2)]'
                  : 'bg-white/5 text-white/50 border border-white/10 hover:border-white/20 hover:text-white/70'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* 问题列表 */}
        <div className="flex flex-col gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredQuestions.map((question, index) => {
              const isExpanded = expandedId === question.id;
              return (
                <motion.div
                  key={question.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <GlassCard
                    className="overflow-hidden !p-5 sm:!p-6"
                    onClick={() => setExpandedId(isExpanded ? null : question.id)}
                  >
                    {/* 问题头部 */}
                    <div className="flex items-start gap-4">
                      {/* 积分标识 */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex flex-col items-center justify-center">
                        <Star className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-400 text-xs font-bold mt-0.5">{question.points}</span>
                      </div>

                      {/* 问题内容 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          {question.accepted && (
                            <Badge variant="success" className="text-[10px] px-1.5 py-0">
                              <CheckCircle className="w-3 h-3 mr-0.5" />
                              已采纳
                            </Badge>
                          )}
                          <span className="text-text-tertiary text-xs">{question.author}</span>
                          <span className="text-text-tertiary text-xs">{question.createdAt}</span>
                        </div>

                        <h3 className="text-white font-semibold text-base sm:text-lg mb-2 leading-snug">
                          {question.title}
                        </h3>

                        {/* 标签 */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {question.tags.map((tag) => (
                            <Badge key={tag} variant="info" className="text-[10px] px-2 py-0.5">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* 统计信息 */}
                        <div className="flex items-center gap-4 text-text-tertiary text-xs">
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-3.5 h-3.5" />
                            {question.answers} 回答
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" />
                            {question.views} 浏览
                          </span>
                          <span className="flex items-center gap-1 text-amber-400/70">
                            <Star className="w-3.5 h-3.5" />
                            {question.points} 积分
                          </span>
                        </div>
                      </div>

                      {/* 展开箭头 */}
                      <div className="flex-shrink-0 mt-2">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-white/30" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white/30" />
                        )}
                      </div>
                    </div>

                    {/* 展开详情 */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 pt-5 border-t border-white/10 px-2">
                            {/* 问题描述 */}
                            <div className="mb-5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                              <h4 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                                问题描述
                              </h4>
                              <p className="text-white/70 text-sm leading-relaxed">{question.content}</p>
                            </div>

                            {/* 最佳回答 */}
                            {question.bestAnswer && (
                              <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Trophy className="w-4 h-4 text-emerald-400" />
                                  <h4 className="text-emerald-300 text-xs font-medium uppercase tracking-wider">
                                    最佳回答
                                  </h4>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed">
                                  {question.bestAnswer}
                                </p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* 空状态 */}
        {filteredQuestions.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Brain className="w-12 h-12 text-white/20 mx-auto mb-4" />
            <p className="text-white/40 text-lg">暂无该标签下的问题</p>
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-4 text-purple-400 hover:text-purple-300 text-sm transition-colors"
            >
              查看全部问题
            </button>
          </motion.div>
        )}

        {/* 积分说明区域 */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard hover={false} className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  <GradientText variant="gold">积分体系说明</GradientText>
                </h3>
                <p className="text-text-tertiary text-sm">共建知识库的核心激励机制</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { action: '提出问题', points: '+2 积分', icon: '❓', desc: '每个有效问题' },
                { action: '回答问题', points: '+5 积分', icon: '💬', desc: '每个有效回答' },
                { action: '回答被采纳', points: '+20 积分', icon: '✅', desc: '最佳回答奖励' },
                { action: '每日签到', points: '+1 积分', icon: '📅', desc: '坚持就是胜利' },
              ].map((item, idx) => (
                <motion.div
                  key={item.action}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/[0.03] border border-white/5 rounded-xl p-4 text-center"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <p className="text-white/80 text-sm font-medium mb-1">{item.action}</p>
                  <p className="text-amber-400 text-sm font-bold mb-1">{item.points}</p>
                  <p className="text-text-tertiary text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/5">
              <p className="text-text-tertiary text-xs leading-relaxed text-center">
                积分可用于解锁高级课程内容、兑换专属福利、提升社区等级。更多玩法持续更新中...
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
