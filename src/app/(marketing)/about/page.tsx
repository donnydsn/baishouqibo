'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  GraduationCap,
  TrendingUp,
  Heart,
  Users,
  Briefcase,
  Baby,
  Coffee,
  Store,
  Mic,
  Video,
  BookOpen,
  Sunset,
  GraduationCap as Graduation,
  RefreshCw,
  MessageSquare,
  DollarSign,
  Rocket,
  Mail,
  MessageCircle,
  Sparkles,
  Target,
  Eye,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

/* ============================================
   数据定义
   ============================================ */

/** 4 个核心优势 */
const advantages = [
  {
    icon: Shield,
    title: '零风险参与',
    description: '7天无理由退全款，没有任何试错成本。先体验后决定，让你的每一次投入都有保障。',
    gradient: 'from-emerald-500 to-teal-500',
    color: 'emerald',
  },
  {
    icon: GraduationCap,
    title: '以教代学',
    description: '不需要你是专家，在教别人的过程中自然掌握技能。从学员到领教员，边学边教边赚钱。',
    gradient: 'from-purple-500 to-indigo-500',
    color: 'purple',
  },
  {
    icon: TrendingUp,
    title: '指数增长',
    description: '基于「1带9出3」裂变模型，收益呈指数级增长。每一轮的积累都在为下一轮的爆发蓄力。',
    gradient: 'from-amber-500 to-orange-500',
    color: 'amber',
  },
  {
    icon: Heart,
    title: '全然利他',
    description: '帮助别人成功，自己自然成功。传承激励只有1层，完全合规，真正的利他就是最好的利己。',
    gradient: 'from-cyan-500 to-blue-500',
    color: 'cyan',
  },
];

/** 13 类细分人群 */
const targetAudiences = [
  { icon: Briefcase, label: '想做副业的上班族', desc: '利用业余时间开启第二收入曲线' },
  { icon: Baby, label: '全职宝妈/宝爸', desc: '灵活时间安排，在家也能创造价值' },
  { icon: Coffee, label: '自由职业者', desc: '时间自由，收入更有保障' },
  { icon: Store, label: '创业者/小老板', desc: '低成本拓展新业务线，增加收入来源' },
  { icon: Mic, label: '自媒体从业者', desc: '直播能力是自媒体人的核心竞争力' },
  { icon: Video, label: '直播行业新人', desc: '系统化学习，少走弯路' },
  { icon: BookOpen, label: '知识分享爱好者', desc: '把你的知识变成收入' },
  { icon: Sunset, label: '退休人员', desc: '发挥余热，实现自我价值' },
  { icon: Graduation, label: '大学生/毕业生', desc: '提前积累实战经验和社会能力' },
  { icon: RefreshCw, label: '转型期的职场人', desc: '掌握新技能，打开新赛道' },
  { icon: MessageSquare, label: '想提升表达力的人', desc: '直播是最好的表达力训练场' },
  { icon: DollarSign, label: '寻找被动收入的人', desc: '传承激励体系，一次投入持续收益' },
  { icon: Rocket, label: '渴望改变命运的普通人', desc: '低门槛高上限，普通人也能逆袭' },
];

/** 核心数据 */
const coreStats = [
  { label: '7天', sublabel: '零基础入门', value: 7, suffix: ' 天', icon: '⚡' },
  { label: '1带9出3', sublabel: '裂变模型', value: 27, suffix: 'x', icon: '🚀' },
  { label: '80%', sublabel: '分润给参与者', value: 80, suffix: '%', icon: '💰' },
  { label: '100万', sublabel: '目标帮助人数', value: 100, suffix: '万+', icon: '🎯' },
];

/* ============================================
   动画变体
   ============================================ */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/* ============================================
   主页面
   ============================================ */

export default function AboutPage() {
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==============================
            1. 项目简介
           ============================== */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="primary" className="mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            关于白手启播
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <GradientText>让每个人都能在 AI 时代找到自己的位置</GradientText>
          </h1>

          <div className="max-w-3xl mx-auto">
            <GlassCard hover={false} className="p-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-white font-semibold text-xl">白手启播是什么？</h2>
              </div>
              <div className="space-y-4 text-white/60 text-sm sm:text-base leading-relaxed">
                <p>
                  <span className="text-white/90 font-medium">白手启播</span>
                  是一个创新的「以教代学」直播培训平台。我们的核心理念是：不需要你是直播专家，只要愿意学习和分享，就能在教别人的过程中快速掌握直播技能。
                </p>
                <p>
                  平台采用{' '}
                  <span className="text-purple-300 font-medium">「1带9出3」裂变模型</span>
                  ：每位领教员带9个学员，其中3个孵化为新领教员。通过传承激励体系，收益呈指数级增长，实现能力、财力、心力的飞轮效应。
                </p>
                <p>
                  7天训练营零基础入门，7天无理由退全款，真正做到
                  <span className="text-emerald-300 font-medium">零风险参与</span>。
                  从学员到领教员，从个人成长到团队裂变，白手启播为普通人打开了一条全新的逆袭之路。
                </p>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* ==============================
            2. 为什么选择我们 - 4个核心优势
           ============================== */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText variant="cyan">为什么选择我们</GradientText>
            </h2>
            <p className="text-white/50 text-lg">四大核心优势，颠覆传统直播培训模式</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={adv.title}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full p-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${adv.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{adv.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{adv.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ==============================
            3. 适合人群 - 13类细分人群
           ============================== */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText variant="gold">适合人群</GradientText>
            </h2>
            <p className="text-white/50 text-lg">无论你是谁，这里都有属于你的位置</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetAudiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={audience.label}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-5 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm mb-1">{audience.label}</h4>
                        <p className="text-text-tertiary text-xs leading-relaxed">{audience.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ==============================
            4. 核心数据
           ============================== */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText>核心数据</GradientText>
            </h2>
            <p className="text-white/50 text-lg">用数字说话</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {coreStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="text-center py-8">
                  <span className="text-3xl mb-3 block">{stat.icon}</span>
                  <div className="text-3xl md:text-4xl font-bold gradient-text-gold mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      duration={2000}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-white font-medium text-sm mb-1">{stat.label}</div>
                  <div className="text-text-tertiary text-xs">{stat.sublabel}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ==============================
            5. 联系我们
           ============================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText variant="cyan">联系我们</GradientText>
            </h2>
            <p className="text-white/50 text-lg">期待与你同行，共创未来</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <GlassCard className="p-8 text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">微信公众号</h3>
                <p className="text-text-tertiary text-sm mb-4">关注公众号获取最新动态和课程信息</p>
                <Badge variant="success">白手启播官方</Badge>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassCard className="p-8 text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">合作邮箱</h3>
                <p className="text-text-tertiary text-sm mb-4">商务合作、媒体咨询、讲师申请</p>
                <Badge variant="primary">contact@baishouqibo.com</Badge>
              </GlassCard>
            </motion.div>
          </div>

          {/* 底部 CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard hover={false} className="p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Rocket className="w-5 h-5 text-amber-400" />
                <h3 className="text-white font-semibold text-lg">准备好开始了吗？</h3>
              </div>
              <p className="text-text-secondary text-sm mb-6">
                7天零基础训练营，7天无理由退全款，零风险开启你的直播之路
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Badge variant="gold" className="text-sm px-4 py-1.5">
                  零风险承诺
                </Badge>
                <Badge variant="primary" className="text-sm px-4 py-1.5">
                  以教代学
                </Badge>
                <Badge variant="success" className="text-sm px-4 py-1.5">
                  指数增长
                </Badge>
                <Badge variant="info" className="text-sm px-4 py-1.5">
                  全然利他
                </Badge>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
