'use client';

import { motion } from 'framer-motion';
import {
  Eye,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Mic,
  Star,
  Crown,
  Settings,
  Handshake,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';

/* ============================================
   阶段数据定义
   ============================================ */

interface RoadmapStage {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  conditions: string[];
  benefits: string[];
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

const stages: RoadmapStage[] = [
  {
    id: 1,
    name: '直播间意向学员',
    subtitle: '种子萌芽',
    description: '在公域直播间（抖音/视频号等）观看直播，对项目产生兴趣，开始了解平台模式。',
    conditions: ['关注平台公域直播间', '观看直播并互动', '对项目产生兴趣'],
    benefits: ['免费了解项目模式', '获取基础直播知识', '与分享者建立联系'],
    icon: <Eye className="w-6 h-6" />,
    color: 'from-slate-400 to-slate-500',
    glowColor: 'rgba(148,163,184,0.3)',
  },
  {
    id: 2,
    name: '私域公开课准学员',
    subtitle: '初识门径',
    description: '通过分享者初试和平台复试后，参加免费私域公开课（1~3天），深入了解平台运营体系。',
    conditions: ['通过分享者初试', '通过平台复试', '加入私域社群'],
    benefits: ['免费参加1~3天公开课', '体验平台教学模式', '获得专属学习资料'],
    icon: <BookOpen className="w-6 h-6" />,
    color: 'from-blue-400 to-blue-500',
    glowColor: 'rgba(96,165,250,0.3)',
  },
  {
    id: 3,
    name: '7天训练营教学员',
    subtitle: '以教代学',
    description: '付款参加7天训练营，以教代学，在实践中快速成长。7天内无理由退全款，零风险参与。',
    conditions: ['完成公开课学习', '缴纳训练营费用', '签署学习协议'],
    benefits: ['7天无理由全额退款保障', '以教代学实战训练', '获得一对一个性化指导'],
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-cyan-400 to-cyan-500',
    glowColor: 'rgba(34,211,238,0.3)',
  },
  {
    id: 4,
    name: '结业教学员',
    subtitle: '初出茅庐',
    description: '完成训练营全部课程，获得结业证书，具备独立直播能力，可开始自己的直播事业。',
    conditions: ['完成7天训练营全部课程', '通过结业考核', '提交结业作品'],
    benefits: ['获得官方结业证书', '具备独立直播能力', '可申请成为见习领教员'],
    icon: <Award className="w-6 h-6" />,
    color: 'from-emerald-400 to-emerald-500',
    glowColor: 'rgba(52,211,153,0.3)',
  },
  {
    id: 5,
    name: '见习领教员（跟班）',
    subtitle: '观摩学习',
    description: '跟随认证领教员观摩学习，了解带班流程、教学方法，积累实战经验。',
    conditions: ['持有结业证书', '通过见习申请审核', '完成跟班观摩课时'],
    benefits: ['近距离观摩认证领教员带班', '学习完整带班流程', '获得见习期辅导反馈'],
    icon: <Users className="w-6 h-6" />,
    color: 'from-violet-400 to-violet-500',
    glowColor: 'rgba(167,139,250,0.3)',
  },
  {
    id: 6,
    name: '实习领教员（试讲）',
    subtitle: '小试牛刀',
    description: '在认证领教员指导下尝试试讲部分课程，逐步建立教学信心，打磨授课技巧。',
    conditions: ['完成见习期全部观摩', '获得导师推荐', '通过试讲资格评估'],
    benefits: ['在导师指导下试讲课程', '获得专业授课反馈', '积累真实教学经验'],
    icon: <Mic className="w-6 h-6" />,
    color: 'from-purple-400 to-purple-500',
    glowColor: 'rgba(192,132,252,0.3)',
  },
  {
    id: 7,
    name: '认证领教员（主讲/坐镇）',
    subtitle: '独当一面',
    description: '通过考核成为认证领教员，独立带班讲课，开始获得分润收益，实现知识变现。',
    conditions: ['通过实习期考核', '完成认证考试', '签署领教员合作协议'],
    benefits: ['独立带班讲课资格', '获得分润收益（课酬+传承激励）', '优先参与平台高级培训'],
    icon: <Star className="w-6 h-6" />,
    color: 'from-amber-400 to-amber-500',
    glowColor: 'rgba(251,191,36,0.3)',
  },
  {
    id: 8,
    name: '高级认证领教员',
    subtitle: '桃李天下',
    description: '在训练营和公开课双重讲课，培养更多新领教员，扩大个人影响力，收益倍增。',
    conditions: ['累计带班达到一定数量', '成功孵化多名新领教员', '通过高级认证评审'],
    benefits: ['训练营+公开课双重讲课', '培养新领教员获得传承激励', '享受更高分润比例'],
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-orange-400 to-orange-500',
    glowColor: 'rgba(251,146,60,0.3)',
  },
  {
    id: 9,
    name: '平台运营管理层',
    subtitle: '运筹帷幄',
    description: '进入平台运营管理，参与平台决策和发展规划，从参与者升级为管理者。',
    conditions: ['展现卓越的运营能力', '获得平台核心团队推荐', '通过管理层评审'],
    benefits: ['参与平台战略决策', '获得管理层专项收益', '拥有平台发展话语权'],
    icon: <Settings className="w-6 h-6" />,
    color: 'from-rose-400 to-rose-500',
    glowColor: 'rgba(251,113,133,0.3)',
  },
  {
    id: 10,
    name: '平台合伙人',
    subtitle: '共创未来',
    description: '成为平台合伙人，分享平台整体收益，与平台共同成长，实现财富与事业的双重飞跃。',
    conditions: ['在平台做出杰出贡献', '获得合伙人资格评审通过', '签署合伙人协议'],
    benefits: ['分享平台整体收益', '参与平台顶层设计', '获得合伙人专属权益与荣誉'],
    icon: <Handshake className="w-6 h-6" />,
    color: 'from-yellow-300 to-amber-500',
    glowColor: 'rgba(252,211,77,0.4)',
  },
];

/* ============================================
   单个阶段卡片组件
   ============================================ */

function StageCard({ stage, index }: { stage: RoadmapStage; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start gap-6 sm:gap-10">
      {/* 左侧内容 / 占位 */}
      <div className={`hidden md:block w-1/2 ${isLeft ? '' : 'order-last'}`}>
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <GlassCard
              hover={false}
              className="relative overflow-hidden group !p-6 sm:!p-8"
            >
              {/* 卡片顶部光效 */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-60"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stage.glowColor}, transparent)`,
                }}
              />

              <div className="flex items-start gap-4">
                {/* 图标 */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{
                    background: `linear-gradient(135deg, ${stage.glowColor}, rgba(139,92,246,0.3))`,
                  }}
                >
                  {stage.icon}
                </div>

                <div className="flex-1 min-w-0">
                  {/* 阶段编号与名称 */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-white/30">STAGE {String(stage.id).padStart(2, '0')}</span>
                    <Badge variant="primary" className="text-[10px] px-2 py-0">
                      {stage.subtitle}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{stage.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {stage.description}
                  </p>

                  {/* 所需条件 */}
                  <div className="mb-3">
                    <p className="text-xs font-medium text-white/30 mb-2 flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" />
                      所需条件
                    </p>
                    <div className="space-y-2.5">
                      {stage.conditions.map((condition, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-white/55">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-emerald-400/60 flex-shrink-0" />
                          <span>{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 权益说明 */}
                  <div>
                    <p className="text-xs font-medium text-white/30 mb-2 flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" />
                      权益说明
                    </p>
                    <div className="space-y-2.5">
                      {stage.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-white/55">
                          <Star className="w-3.5 h-3.5 mt-0.5 text-amber-400/60 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ) : (
          <div />
        )}
      </div>

      {/* 中间时间线节点 */}
      <motion.div
        className="relative flex-shrink-0 z-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {/* 外圈光晕 */}
        <div
          className="absolute inset-[-6px] rounded-full opacity-40 blur-sm"
          style={{ background: stage.glowColor }}
        />
        {/* 节点圆圈 */}
        <div
          className={`relative w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br ${stage.color}`}
        >
          {stage.id}
        </div>
      </motion.div>

      {/* 右侧内容 / 占位 */}
      <div className={`hidden md:block w-1/2 ${isLeft ? '' : 'order-first'}`}>
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <GlassCard
              hover={false}
              className="relative overflow-hidden group !p-6 sm:!p-8"
            >
              {/* 卡片顶部光效 */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-60"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stage.glowColor}, transparent)`,
                }}
              />

              <div className="flex items-start gap-4">
                {/* 图标 */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{
                    background: `linear-gradient(135deg, ${stage.glowColor}, rgba(139,92,246,0.3))`,
                  }}
                >
                  {stage.icon}
                </div>

                <div className="flex-1 min-w-0">
                  {/* 阶段编号与名称 */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-white/30">STAGE {String(stage.id).padStart(2, '0')}</span>
                    <Badge variant="primary" className="text-[10px] px-2 py-0">
                      {stage.subtitle}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{stage.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {stage.description}
                  </p>

                  {/* 所需条件 */}
                  <div className="mb-3">
                    <p className="text-xs font-medium text-white/30 mb-2 flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" />
                      所需条件
                    </p>
                    <div className="space-y-2.5">
                      {stage.conditions.map((condition, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-white/55">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-emerald-400/60 flex-shrink-0" />
                          <span>{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 权益说明 */}
                  <div>
                    <p className="text-xs font-medium text-white/30 mb-2 flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" />
                      权益说明
                    </p>
                    <div className="space-y-2.5">
                      {stage.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-white/55">
                          <Star className="w-3.5 h-3.5 mt-0.5 text-amber-400/60 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ) : (
          <div />
        )}
      </div>

      {/* 移动端卡片（始终显示在右侧） */}
      <motion.div
        className="md:hidden flex-1"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <GlassCard hover={false} className="relative overflow-hidden !p-6 sm:!p-8">
          <div
            className="absolute top-0 left-0 right-0 h-1 opacity-60"
            style={{
              background: `linear-gradient(90deg, transparent, ${stage.glowColor}, transparent)`,
            }}
          />
          <div className="flex items-start gap-3">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white"
              style={{
                background: `linear-gradient(135deg, ${stage.glowColor}, rgba(139,92,246,0.3))`,
              }}
            >
              {stage.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono text-white/30">STAGE {String(stage.id).padStart(2, '0')}</span>
                <Badge variant="primary" className="text-[10px] px-2 py-0">
                  {stage.subtitle}
                </Badge>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">{stage.name}</h3>
              <p className="text-white/40 text-xs leading-relaxed mb-3">
                {stage.description}
              </p>
              <div className="mb-2">
                <p className="text-[10px] font-medium text-white/30 mb-1.5">所需条件</p>
                <div className="space-y-2.5">
                  {stage.conditions.map((condition, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-white/55">
                      <CheckCircle2 className="w-3 h-3 mt-0.5 text-emerald-400/60 flex-shrink-0" />
                      <span>{condition}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-medium text-white/30 mb-1.5">权益说明</p>
                <div className="space-y-2.5">
                  {stage.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-white/55">
                      <Star className="w-3 h-3 mt-0.5 text-amber-400/60 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

/* ============================================
   主页面
   ============================================ */

export default function RoadmapPage() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] py-20 sm:py-28 overflow-hidden">
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
        {/* 渐变光球 */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* 页面标题 */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="primary" className="mb-4">
            <Crown className="w-3 h-3 mr-1" />
            成长进阶路
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <GradientText>从直播间小白到平台合伙人</GradientText>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-sm mb-12 sm:mb-16">
            10个阶段，完整成长路径。每一步都有清晰的目标和丰厚的回报，助你实现从学习者到合伙人的蜕变。
          </p>
        </motion.div>

        {/* 时间线 */}
        <div className="relative">
          {/* 垂直连接线（桌面端） */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-500/60 via-cyan-500/60 to-amber-500/60"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'linear' }}
            />
          </div>

          {/* 垂直连接线（移动端） */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-500/60 via-cyan-500/60 to-amber-500/60"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'linear' }}
            />
          </div>

          {/* 阶段列表 */}
          <div className="space-y-8 sm:space-y-12">
            {stages.map((stage, index) => (
              <StageCard key={stage.id} stage={stage} index={index} />
            ))}
          </div>
        </div>

        {/* 底部CTA */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard hover={false} className="inline-block px-8 py-6">
            <p className="text-white/40 text-sm mb-2">准备好开始你的成长之旅了吗？</p>
            <p className="text-lg font-semibold">
              <GradientText variant="gold">每一步成长，都有看得见的回报</GradientText>
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
