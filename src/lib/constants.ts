import { Level, LevelInfo, Speed, SpeedInfo, RoundPeriod, RoundInfo } from '@/types/calculator';

export const LEVELS: LevelInfo[] = [
  { level: 1, name: '一年级', seedMoney: 690 },
  { level: 2, name: '二年级', seedMoney: 1690 },
  { level: 3, name: '三年级', seedMoney: 3690 },
  { level: 4, name: '四年级', seedMoney: 6960 },
  { level: 5, name: '五年级', seedMoney: 9690 },
];

export const SPEEDS: SpeedInfo[] = [
  { speed: 1, label: '1x 速', description: '每轮带 1 个班' },
  { speed: 2, label: '2x 速', description: '每轮带 2 个班' },
  { speed: 3, label: '3x 速', description: '每轮带 3 个班' },
  { speed: 4, label: '4x 速', description: '每轮带 4 个班' },
];

export const ROUNDS: RoundInfo[] = [
  { period: 'week', label: '1 周', rounds: 1 },
  { period: 'month', label: '1 月', rounds: 4 },
  { period: 'quarter', label: '1 季', rounds: 12 },
  { period: 'year', label: '1 年', rounds: 52 },
];

export const SITE_CONFIG = {
  name: '白手启播',
  slogan: '以教代学 · 指数变现 · 改写人生',
  description: '最低成本，最短时间，教会小白教会更多小白做直播',
  icp: '京ICP备XXXXXXXX号',
};

export const NAV_ITEMS = [
  { label: '最新动态', href: '/news', icon: 'newspaper' },
  { label: '高手排行', href: '/rankings', icon: 'trophy' },
  { label: '成长进阶', href: '/roadmap', icon: 'rocket' },
  { label: '分润计算', href: '/calculator', icon: 'calculator' },
  { label: '官方文档', href: '/docs', icon: 'book-open' },
  { label: '知识库', href: '/wiki', icon: 'brain' },
];

export const STATS = {
  totalRounds: 128,
  totalStudents: 3680,
  totalInstructors: 426,
  totalEarnings: 2860000,
};
