'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  FileText,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Users,
  DollarSign,
  GraduationCap,
  Shield,
  MessageCircle,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

/* ============================================
   文档数据结构
   ============================================ */

interface DocSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  badgeVariant: 'default' | 'primary' | 'gold' | 'success' | 'info';
  docs: DocItem[];
}

interface DocItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

/* ============================================
   文档内容
   ============================================ */

const docSections: DocSection[] = [
  {
    id: 'intro',
    title: '项目介绍',
    icon: <BookOpen className="w-4 h-4" />,
    badgeVariant: 'primary',
    docs: [
      {
        id: 'what-is',
        title: '白手启播是什么',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              <span className="text-white font-medium">白手启播</span>是一个以「以教代学、指数变现」为核心的直播知识分享平台。
              我们致力于帮助普通人零成本、零风险地开启直播之路，通过教会他人来实现自我成长和财富增长。
            </p>
            <p className="text-text-secondary leading-relaxed">
              平台采用独特的「1 带 9 出 3」裂变模型，每位领教员每轮带 9 名学员，其中 3 名可孵化为新领教员，
              形成指数级的团队增长。通过分润体系，参与者可以从带班课酬、分享销酬和传承激励三个维度获得收益。
            </p>
            <div className="glass-card p-4 mt-4">
              <h4 className="text-white font-medium mb-2">核心理念</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">&#x2022;</span>
                  <span>纯聊天知识分享，不卖货不卖课，全然利他</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">&#x2022;</span>
                  <span>零风险参与，最低成本开启直播之路</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">&#x2022;</span>
                  <span>指数增长的变现体系，实现财富自由</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#x2022;</span>
                  <span>以教代学，在帮助他人的同时提升自我</span>
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: 'why-choose',
        title: '为什么选择白手启播',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              在众多直播培训平台中，白手启播凭借以下独特优势脱颖而出：
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: '零门槛入门', desc: '无需直播经验，无需设备投入，一部手机即可开始', color: 'text-purple-400' },
                { label: '零风险参与', desc: '不卖货不卖课，纯知识分享，无任何资金风险', color: 'text-cyan-400' },
                { label: '指数增长', desc: '「1带9出3」裂变模型，团队规模指数级扩张', color: 'text-amber-400' },
                { label: '多维收益', desc: '带班课酬+分享销酬+传承激励，三重收入来源', color: 'text-emerald-400' },
                { label: '系统培训', desc: '7天训练营+持续带班指导，快速掌握直播技能', color: 'text-pink-400' },
                { label: '互助社区', desc: '活跃的成员社区，经验分享，共同成长', color: 'text-blue-400' },
              ].map((item) => (
                <div key={item.label} className="glass-card p-4">
                  <h4 className={cn('font-medium mb-1', item.color)}>{item.label}</h4>
                  <p className="text-text-tertiary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: 'who-suitable',
        title: '适合什么人',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              白手启播适合以下人群：
            </p>
            <div className="space-y-3">
              {[
                {
                  title: '想尝试直播但不知从何下手的小白',
                  desc: '没有直播经验？没关系！我们的7天训练营会从零开始，手把手教你开播。',
                  icon: '🌱',
                },
                {
                  title: '寻找副业或创业机会的上班族',
                  desc: '利用业余时间参与，不影响主业。通过指数增长体系，逐步实现副业收入超过主业。',
                  icon: '💼',
                },
                {
                  title: '希望实现经济独立的宝妈/自由职业者',
                  desc: '时间灵活，在家即可操作。已有众多宝妈通过白手启播实现月入过万。',
                  icon: '👩',
                },
                {
                  title: '热爱分享、善于沟通的知识传播者',
                  desc: '如果你乐于帮助他人成长，白手启播的「以教代学」理念与你不谋而合。',
                  icon: '🎓',
                },
                {
                  title: '想要建立个人品牌和影响力的创业者',
                  desc: '通过带班和分享，快速积累粉丝和影响力，为未来发展奠定基础。',
                  icon: '🚀',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                    <p className="text-text-tertiary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 'process',
    title: '参与流程',
    icon: <Users className="w-4 h-4" />,
    badgeVariant: 'info',
    docs: [
      {
        id: 'how-to-join',
        title: '如何加入',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              加入白手启播非常简单，只需以下几步：
            </p>
            <div className="space-y-4">
              {[
                { step: 1, title: '了解平台', desc: '阅读本文档库，全面了解白手启播的理念、模式和收益体系。' },
                { step: 2, title: '参加公开课', desc: '报名参加免费的私域公开课，由资深领教员为你详细讲解平台运作方式。' },
                { step: 3, title: '报名训练营', desc: '公开课后如感兴趣，可报名参加7天训练营，开始系统学习。' },
                { step: 4, title: '缴纳种子金', desc: '根据所选等级缴纳对应种子金，正式成为学员。种子金将在后续轮次中作为分润基础。' },
                { step: 5, title: '完成训练', desc: '认真完成7天训练营的所有课程和任务，掌握直播核心技能。' },
                { step: 6, title: '结业晋升', desc: '达到结业标准后，可申请成为认证领教员，开始带班获得收益。' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-text-tertiary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: 'public-class',
        title: '私域公开课',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              私域公开课是了解白手启播的第一步，也是最重要的一步。在公开课中，你将：
            </p>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">&#x2713;</span>
                <span>了解白手启播的创立背景和发展历程</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">&#x2713;</span>
                <span>深入理解「1带9出3」裂变模型和分润体系</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">&#x2713;</span>
                <span>听取真实学员的成长故事和收益分享</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">&#x2713;</span>
                <span>与领教员面对面交流，解答你的疑问</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">&#x2713;</span>
                <span>了解训练营的课程安排和结业要求</span>
              </li>
            </ul>
            <div className="glass-card p-4 mt-4">
              <h4 className="text-amber-300 font-medium mb-2">温馨提示</h4>
              <p className="text-text-tertiary text-sm">
                公开课完全免费，不收取任何费用。我们建议你在报名训练营前，务必先参加公开课，
                充分了解平台后再做决定。理性参与，是对自己负责。
              </p>
            </div>
          </div>
        ),
      },
      {
        id: 'training-camp',
        title: '7天训练营',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              7天训练营是白手启播的核心培训环节，通过系统化的课程安排，帮助学员快速掌握直播技能和带班能力。
            </p>
            <div className="glass-card p-4">
              <h4 className="text-white font-medium mb-3">训练营特点</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-lg bg-white/[0.02]">
                  <p className="text-2xl font-bold gradient-text">7</p>
                  <p className="text-text-tertiary text-xs mt-1">天系统培训</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-white/[0.02]">
                  <p className="text-2xl font-bold gradient-text-gold">9</p>
                  <p className="text-text-tertiary text-xs mt-1">人小班教学</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-white/[0.02]">
                  <p className="text-2xl font-bold gradient-text-cyan">1v1</p>
                  <p className="text-text-tertiary text-xs mt-1">导师辅导</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-white/[0.02]">
                  <p className="text-2xl font-bold text-emerald-400">100%</p>
                  <p className="text-text-tertiary text-xs mt-1">实战导向</p>
                </div>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed">
              训练营期间，学员需要完成每日课程学习、实操练习和作业提交。领教员会全程陪伴，
              及时反馈和指导。完成所有课程并达到结业标准的学员，将获得结业证书，
              并有资格申请成为认证领教员。
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: 'profit',
    title: '分润体系',
    icon: <DollarSign className="w-4 h-4" />,
    badgeVariant: 'gold',
    docs: [
      {
        id: 'earning-rules',
        title: '收益规则详解',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              白手启播的分润体系设计公平透明，确保每位参与者都能获得合理的回报。总收益的 80% 分配给参与者，
              20% 用于平台运营维护。
            </p>
            <div className="space-y-3">
              {[
                {
                  title: '带班课酬（40%）',
                  desc: '领教员每带一轮学员，可获得该轮总种子金的 40% 作为课酬。这是最主要的收入来源。',
                  color: 'bg-purple-500',
                  percentage: '40%',
                },
                {
                  title: '分享销酬（30%）',
                  desc: '成功推荐新学员加入训练营的领教员，可获得被推荐人种子金的 30% 作为分享奖励。',
                  color: 'bg-indigo-500',
                  percentage: '30%',
                },
                {
                  title: '传承激励（10%）',
                  desc: '你直接培养的领教员在后续带班中产生的收益，你可获得 10% 的传承激励，最多传承 3 代。',
                  color: 'bg-cyan-500',
                  percentage: '10%',
                },
                {
                  title: '平台运营（20%）',
                  desc: '用于平台技术开发、服务器维护、客服支持和持续优化的运营费用。',
                  color: 'bg-white/20',
                  percentage: '20%',
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <span className={cn('text-sm font-bold px-2 py-0.5 rounded-md', item.color === 'bg-white/20' ? 'text-white/50' : 'text-white')}>
                      {item.percentage}
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 mb-2">
                    <div className={cn('h-full rounded-full', item.color)} style={{ width: item.percentage }} />
                  </div>
                  <p className="text-text-tertiary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: 'inheritance',
        title: '传承激励说明',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              传承激励是白手启播分润体系中最具特色的部分，它鼓励领教员用心培养下一代领教员，
              形成良性的师徒传承关系。
            </p>
            <div className="glass-card p-4">
              <h4 className="text-white font-medium mb-3">传承层级</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-300 font-bold">1</div>
                  <div>
                    <p className="text-white text-sm font-medium">一代传承</p>
                    <p className="text-text-tertiary text-xs">你直接培养的领教员收益的 10%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold">2</div>
                  <div>
                    <p className="text-white text-sm font-medium">二代传承</p>
                    <p className="text-text-tertiary text-xs">你徒弟培养的领教员收益的 5%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <div className="w-10 h-10 rounded-full bg-amber-500/30 flex items-center justify-center text-amber-300 font-bold">3</div>
                  <div>
                    <p className="text-white text-sm font-medium">三代传承</p>
                    <p className="text-text-tertiary text-xs">你徒孙培养的领教员收益的 3%</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-text-tertiary text-sm">
              注：传承激励最多计算到第三代，超过三代不再享受传承收益。传承激励不影响被传承人的正常收益。
            </p>
          </div>
        ),
      },
      {
        id: 'levels-seeds',
        title: '等级与种子金',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              白手启播设有多个等级，不同等级对应不同的种子金和收益基数。等级越高，
              每轮的收益基数越大，但需要的投入也相应增加。
            </p>
            <div className="space-y-2">
              {[
                { level: 1, name: '启航级', seed: '99 元', desc: '适合初次尝试的学员', color: 'text-cyan-400' },
                { level: 2, name: '进阶级', seed: '299 元', desc: '适合有一定基础的学员', color: 'text-purple-400' },
                { level: 3, name: '精英级', seed: '599 元', desc: '适合认真投入的学员', color: 'text-amber-400' },
                { level: 4, name: '领航级', seed: '999 元', desc: '适合全力冲刺的学员', color: 'text-emerald-400' },
                { level: 5, name: '传奇级', seed: '1999 元', desc: '适合志在高远的学员', color: 'text-pink-400' },
              ].map((item) => (
                <div key={item.level} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 font-bold text-sm">
                      {item.level}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{item.name}</p>
                      <p className="text-text-tertiary text-xs">{item.desc}</p>
                    </div>
                  </div>
                  <span className={cn('font-mono font-semibold text-sm', item.color)}>{item.seed}</span>
                </div>
              ))}
            </div>
            <div className="glass-card p-4 mt-4">
              <h4 className="text-amber-300 font-medium mb-2">温馨提示</h4>
              <p className="text-text-tertiary text-sm">
                请根据自身经济情况理性选择等级。等级越高收益基数越大，但同时也意味着更高的投入。
                建议新手从启航级开始，熟悉平台运作后再考虑升级。
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 'handbook',
    title: '训练营手册',
    icon: <GraduationCap className="w-4 h-4" />,
    badgeVariant: 'success',
    docs: [
      {
        id: 'schedule',
        title: '7天课程安排',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              7天训练营的课程经过精心设计，循序渐进地帮助学员掌握直播核心技能。
            </p>
            <div className="space-y-2">
              {[
                { day: 1, title: '破冰与认知', desc: '自我介绍、了解平台、明确目标、建立学习小组', tag: '基础' },
                { day: 2, title: '直播基础', desc: '直播设备调试、话术练习、镜头感培养、互动技巧', tag: '基础' },
                { day: 3, title: '内容策划', desc: '选题方法、内容框架、脚本编写、话题准备', tag: '核心' },
                { day: 4, title: '流量获取', desc: '平台算法、推荐机制、引流方法、粉丝运营', tag: '核心' },
                { day: 5, title: '带班技巧', desc: '教学方法、学员管理、问题解答、进度跟踪', tag: '进阶' },
                { day: 6, title: '实战演练', desc: '模拟带班、实战开播、复盘总结、优化提升', tag: '实战' },
                { day: 7, title: '结业考核', desc: '综合考核、结业答辩、等级评定、未来规划', tag: '考核' },
              ].map((item) => (
                <div key={item.day} className="flex items-start gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">D{item.day}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white text-sm font-medium">{item.title}</h4>
                      <Badge variant={item.tag === '核心' ? 'primary' : item.tag === '实战' ? 'gold' : item.tag === '考核' ? 'info' : 'default'} className="text-[10px] px-1.5 py-0">
                        {item.tag}
                      </Badge>
                    </div>
                    <p className="text-text-tertiary text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: 'teaching-guide',
        title: '带班指南',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              作为领教员，带班是你的核心工作。以下是一些实用的带班指南：
            </p>
            <div className="space-y-3">
              {[
                {
                  title: '建立信任关系',
                  points: [
                    '开班第一天进行自我介绍，分享个人成长故事',
                    '主动关心每位学员的学习进度和心理状态',
                    '及时回复学员的问题和消息',
                  ],
                },
                {
                  title: '教学方法',
                  points: [
                    '理论与实践相结合，每节课都安排实操环节',
                    '鼓励学员互相交流，形成学习小组',
                    '针对不同水平的学员给予差异化指导',
                  ],
                },
                {
                  title: '进度管理',
                  points: [
                    '每日检查学员的作业完成情况',
                    '对进度落后的学员给予额外关注',
                    '记录每位学员的成长轨迹，及时给予正向反馈',
                  ],
                },
                {
                  title: '问题处理',
                  points: [
                    '建立常见问题库，快速解答学员疑问',
                    '遇到复杂问题及时向上级领教员请教',
                    '定期组织答疑环节，集中解决共性问题',
                  ],
                },
              ].map((section) => (
                <div key={section.title} className="glass-card p-4">
                  <h4 className="text-white font-medium mb-2">{section.title}</h4>
                  <ul className="space-y-1.5">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-tertiary text-sm">
                        <span className="text-emerald-400 mt-0.5">&#x2713;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: 'graduation',
        title: '结业标准',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              达到以下标准的学员可以顺利结业，并获得结业证书：
            </p>
            <div className="space-y-3">
              {[
                { title: '出勤率', desc: '7天课程出勤率达到 100%（允许补课）', required: true },
                { title: '作业完成', desc: '按时提交所有课后作业，且评分达到合格线', required: true },
                { title: '实战开播', desc: '至少完成 3 次实战开播，每次时长不少于 30 分钟', required: true },
                { title: '带班模拟', desc: '完成至少 1 次模拟带班，通过领教员评审', required: true },
                { title: '结业考核', desc: '通过综合考核，包括理论测试和实操评估', required: true },
                { title: '学员互评', desc: '获得同组学员的好评率达到 80% 以上', required: false },
              ].map((item) => (
                <div key={item.title} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'w-2 h-2 rounded-full',
                      item.required ? 'bg-emerald-400' : 'bg-amber-400'
                    )} />
                    <div>
                      <p className="text-white text-sm font-medium">{item.title}</p>
                      <p className="text-text-tertiary text-xs">{item.desc}</p>
                    </div>
                  </div>
                  <Badge variant={item.required ? 'success' : 'gold'} className="text-[10px]">
                    {item.required ? '必达' : '加分'}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 'rules',
    title: '平台规则',
    icon: <Shield className="w-4 h-4" />,
    badgeVariant: 'default',
    docs: [
      {
        id: 'conduct',
        title: '行为规范',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              所有白手启播成员应遵守以下行为规范，共同维护良好的平台环境：
            </p>
            <div className="space-y-3">
              {[
                { title: '诚信为本', desc: '如实分享个人经历和收益，不得夸大或虚构。' },
                { title: '尊重他人', desc: '尊重每位成员，不进行人身攻击、歧视或骚扰。' },
                { title: '积极分享', desc: '主动分享学习心得和经验，帮助他人成长。' },
                { title: '保护隐私', desc: '不泄露其他成员的个人信息和隐私数据。' },
                { title: '遵守法律', desc: '所有行为必须符合国家法律法规，不得从事违法活动。' },
                { title: '禁止传销', desc: '严格按照平台规则运作，不得以任何形式从事传销活动。' },
                { title: '禁止诱导', desc: '不得以虚假承诺诱导他人加入或升级等级。' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Shield className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white text-sm font-medium mb-0.5">{item.title}</h4>
                    <p className="text-text-tertiary text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: 'violations',
        title: '违规处理',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              对于违反平台规则的行为，白手启播将采取以下处理措施：
            </p>
            <div className="space-y-3">
              {[
                { level: '一级警告', desc: '首次轻微违规，给予口头警告并记录在案。', color: 'text-amber-400' },
                { level: '二级警告', desc: '再次违规或情节较重，给予书面警告，暂停部分权限。', color: 'text-orange-400' },
                { level: '暂停资格', desc: '严重违规，暂停参与资格 30 天，期间不可带班和推荐。', color: 'text-red-400' },
                { level: '永久封禁', desc: '极其严重违规（如传销、诈骗等），永久取消参与资格。', color: 'text-red-500' },
              ].map((item) => (
                <div key={item.level} className="glass-card p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={cn('font-medium', item.color)}>{item.level}</h4>
                  </div>
                  <p className="text-text-tertiary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="glass-card p-4 mt-4">
              <h4 className="text-white font-medium mb-2">申诉机制</h4>
              <p className="text-text-tertiary text-sm">
                如对处理结果有异议，可在收到通知后 7 个工作日内向平台申诉委员会提交书面申诉。
                申诉委员会将在 15 个工作日内给出最终裁决。
              </p>
            </div>
          </div>
        ),
      },
      {
        id: 'privacy',
        title: '隐私保护',
        content: (
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              白手启播高度重视成员的隐私保护，承诺遵守以下原则：
            </p>
            <div className="space-y-3">
              {[
                { title: '最小化收集', desc: '仅收集提供服务所必需的最少个人信息。' },
                { title: '明确告知', desc: '收集个人信息前，明确告知收集目的和使用方式。' },
                { title: '安全存储', desc: '采用加密技术存储个人信息，防止数据泄露。' },
                { title: '限制访问', desc: '严格限制个人信息的访问权限，仅授权人员可查看。' },
                { title: '用户权利', desc: '成员有权查看、修改和删除自己的个人信息。' },
                { title: '禁止共享', desc: '未经成员同意，不向任何第三方共享个人信息。' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Shield className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white text-sm font-medium mb-0.5">{item.title}</h4>
                    <p className="text-text-tertiary text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 'faq',
    title: '常见问题 FAQ',
    icon: <HelpCircle className="w-4 h-4" />,
    badgeVariant: 'info',
    docs: [
      {
        id: 'faq-list',
        title: '10个常见问题与回答',
        content: (
          <div className="space-y-3">
            {[
              {
                q: '白手启播是传销吗？',
                a: '不是。白手启播是正规的知识分享平台，核心是「以教代学」，通过教会他人做直播来获得收益。我们有真实的课程内容和服务，所有收益来源于知识分享和教学活动，而非拉人头。平台严格遵守国家法律法规。',
              },
              {
                q: '加入需要多少钱？',
                a: '参加公开课完全免费。报名训练营需要根据所选等级缴纳种子金，最低等级「启航级」仅需 99 元。种子金将作为分润基础，在后续轮次中通过收益逐步回收。',
              },
              {
                q: '没有直播经验可以参加吗？',
                a: '完全可以！白手启播专为零基础学员设计，7天训练营会从最基础的设备调试、话术练习开始教起。只要你有一部手机和学习的意愿，就可以参加。',
              },
              {
                q: '每天需要投入多少时间？',
                a: '训练营期间，建议每天投入 2-3 小时进行课程学习和实操练习。结业成为领教员后，每轮带班大约需要 7 天，每天 1-2 小时即可。',
              },
              {
                q: '多久可以回本？',
                a: '回本时间取决于你选择的等级和裂变速度。以启航级为例，正常情况下 2-3 轮即可回本。等级越高，单轮收益越大，但回本所需轮次也相应增加。你可以使用收益计算器进行详细模拟。',
              },
              {
                q: '收益如何提现？',
                a: '收益支持提现到支付宝或微信钱包。每轮结束后，收益将在 3 个工作日内结算到你的账户余额，最低提现金额为 10 元，提现手续费为 1%。',
              },
              {
                q: '如果中途不想继续了怎么办？',
                a: '你可以随时选择退出。已缴纳的种子金将按照平台退款政策处理：开课前全额退款，开课后按已上课天数比例扣除后退还剩余部分。',
              },
              {
                q: '如何成为领教员？',
                a: '完成7天训练营并达到结业标准后，即可申请成为认证领教员。申请通过后，你将开始带班，获得带班课酬、分享销酬和传承激励三重收益。',
              },
              {
                q: '可以同时参加多个训练营吗？',
                a: '为了保证学习质量，每位学员同一时间只能参加一个训练营。完成当前训练营并结业后，方可报名参加下一轮。',
              },
              {
                q: '遇到问题如何获得帮助？',
                a: '你可以通过以下方式获得帮助：1）直接联系你的带班领教员；2）在平台社区提问，其他成员和领教员会热心解答；3）联系平台客服，工作时间内在线响应。',
              },
            ].map((item, index) => (
              <div key={index} className="glass-card p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold text-xs mt-0.5">
                    Q
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-2">{item.q}</h4>
                    <p className="text-text-tertiary text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
];

/* ============================================
   目录树组件
   ============================================ */

function Sidebar({
  activeDocId,
  onSelect,
  expandedSections,
  toggleSection,
}: {
  activeDocId: string;
  onSelect: (docId: string) => void;
  expandedSections: Set<string>;
  toggleSection: (sectionId: string) => void;
}) {
  return (
    <nav className="space-y-1">
      {docSections.map((section) => {
        const isExpanded = expandedSections.has(section.id);
        const isActiveInSection = section.docs.some((doc) => doc.id === activeDocId);

        return (
          <div key={section.id}>
            {/* 分类标题 */}
            <button
              onClick={() => toggleSection(section.id)}
              className={cn(
                'flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                isActiveInSection
                  ? 'text-white bg-white/[0.06]'
                  : 'text-white/50 hover:text-white/70 hover:bg-white/[0.03]'
              )}
            >
              <div className="flex items-center gap-2.5">
                <span className={cn(
                  'transition-colors',
                  isActiveInSection ? 'text-purple-400' : 'text-white/30'
                )}>
                  {section.icon}
                </span>
                <span>{section.title}</span>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </button>

            {/* 子文档列表 */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="ml-4 pl-3 border-l border-white/8 space-y-0.5 mt-1 mb-2">
                    {section.docs.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => onSelect(doc.id)}
                        className={cn(
                          'flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm transition-all duration-200',
                          activeDocId === doc.id
                            ? 'text-purple-300 bg-purple-500/10 border border-purple-500/20'
                            : 'text-white/40 hover:text-white/60 hover:bg-white/[0.03]'
                        )}
                      >
                        <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{doc.title}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}

/* ============================================
   主页面
   ============================================ */

export default function DocsPage() {
  // 默认展开第一个分类，选中第一个文档
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set([docSections[0].id])
  );
  const [activeDocId, setActiveDocId] = useState<string>(docSections[0].docs[0].id);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const handleSelect = (docId: string) => {
    setActiveDocId(docId);
    // 确保所在分类展开
    for (const section of docSections) {
      if (section.docs.some((doc) => doc.id === docId)) {
        setExpandedSections((prev) => {
          const next = new Set(prev);
          next.add(section.id);
          return next;
        });
        break;
      }
    }
  };

  // 查找当前活跃文档
  const activeDoc = docSections
    .flatMap((s) => s.docs)
    .find((d) => d.id === activeDocId);

  const activeSection = docSections.find((s) =>
    s.docs.some((d) => d.id === activeDocId)
  );

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="primary" className="mb-4">
            <BookOpen className="w-3.5 h-3.5 mr-1.5" />
            官方文档
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <GradientText>文档库</GradientText>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            全面了解白手启播的项目介绍、参与流程、分润体系和平台规则
          </p>
        </motion.div>

        {/* 主体：左侧目录 + 右侧内容 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* 左侧目录树 */}
          <motion.div
            className="lg:col-span-4 xl:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard hover={false} className="sticky top-24">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <h3 className="text-white font-semibold text-sm">目录导航</h3>
              </div>
              <Sidebar
                activeDocId={activeDocId}
                onSelect={handleSelect}
                expandedSections={expandedSections}
                toggleSection={toggleSection}
              />
            </GlassCard>
          </motion.div>

          {/* 右侧内容展示 */}
          <motion.div
            className="lg:col-span-8 xl:col-span-9"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {activeDoc && activeSection && (
                <motion.div
                  key={activeDocId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard hover={false} className="min-h-[500px]">
                    {/* 面包屑 */}
                    <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                      <Badge variant={activeSection.badgeVariant}>
                        {activeSection.icon}
                        <span className="ml-1.5">{activeSection.title}</span>
                      </Badge>
                      <ChevronRight className="w-3.5 h-3.5 text-white/20" />
                      <span className="text-white/50 text-sm">{activeDoc.title}</span>
                    </div>

                    {/* 文档标题 */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                      <GradientText>{activeDoc.title}</GradientText>
                    </h2>

                    {/* 文档内容 */}
                    <div className="text-base">
                      {activeDoc.content}
                    </div>
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
