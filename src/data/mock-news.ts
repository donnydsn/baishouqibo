export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'announcement' | 'event' | 'story' | 'system';
  tags: string[];
  publishedAt: string;
  coverImage?: string;
}

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: '🎉 白手启播第 128 轮训练营圆满结业！',
    summary: '本期共 36 位学员顺利结业，其中 12 位成功晋升为认证领教员，创历史新高！',
    content: '本期训练营历时 7 天，36 位来自各行各业的学员齐聚一堂...',
    category: 'announcement',
    tags: ['结业', '里程碑'],
    publishedAt: '2025-01-15',
  },
  {
    id: '2',
    title: '🏆 月度排行榜揭晓：张老师连续 3 月蝉联榜首',
    summary: '张老师本月累计带班 4 轮，培养学员 36 人，孵化讲师 12 人，总计收益突破 10 万！',
    content: '张老师从一名普通的直播小白，经过 6 个月的成长...',
    category: 'story',
    tags: ['排行榜', '标杆'],
    publishedAt: '2025-01-12',
  },
  {
    id: '3',
    title: '📢 平台升级：共建知识库积分系统正式上线',
    summary: '提问+5分、回答+10分、被采纳+50分，快来分享你的智慧！',
    content: '为了鼓励成员之间的知识共享和互助成长...',
    category: 'system',
    tags: ['升级', '知识库'],
    publishedAt: '2025-01-10',
  },
  {
    id: '4',
    title: '🔥 春节特别活动：邀请好友加入，双方各获 100 积分',
    summary: '活动时间：1月20日-2月10日，邀请越多奖励越丰厚！',
    content: '新春佳节之际，白手启播推出特别邀请活动...',
    category: 'event',
    tags: ['活动', '邀请'],
    publishedAt: '2025-01-08',
  },
  {
    id: '5',
    title: '📖 新手必读：7 天训练营完全指南 v2.0 发布',
    summary: '全新升级的训练营指南，涵盖直播技巧、带班方法、分润规则等核心内容。',
    content: '经过多期训练营的实践总结，我们对指南进行了全面升级...',
    category: 'announcement',
    tags: ['指南', '新手'],
    publishedAt: '2025-01-05',
  },
  {
    id: '6',
    title: '🌟 学员故事：从宝妈到认证领教员的蜕变之路',
    summary: '李女士分享她如何在照顾家庭的同时，通过白手启播实现月入过万。',
    content: '我叫李雪，是一位两个孩子的妈妈...',
    category: 'story',
    tags: ['故事', '蜕变'],
    publishedAt: '2025-01-03',
  },
];
