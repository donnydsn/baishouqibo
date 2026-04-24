export interface RankingItem {
  id: string;
  rank: number;
  nickname: string;
  avatar: string;
  level: number;
  levelName: string;
  classCount: number;
  studentCount: number;
  instructorCount: number;
  totalEarnings: number;
}

export const mockRankings: RankingItem[] = [
  { id: '1', rank: 1, nickname: '张老师', avatar: '', level: 5, levelName: '五年级', classCount: 48, studentCount: 432, instructorCount: 144, totalEarnings: 286000 },
  { id: '2', rank: 2, nickname: '李教练', avatar: '', level: 4, levelName: '四年级', classCount: 36, studentCount: 324, instructorCount: 108, totalEarnings: 198000 },
  { id: '3', rank: 3, nickname: '王导师', avatar: '', level: 4, levelName: '四年级', classCount: 32, studentCount: 288, instructorCount: 96, totalEarnings: 176000 },
  { id: '4', rank: 4, nickname: '赵老师', avatar: '', level: 3, levelName: '三年级', classCount: 28, studentCount: 252, instructorCount: 84, totalEarnings: 142000 },
  { id: '5', rank: 5, nickname: '陈教练', avatar: '', level: 3, levelName: '三年级', classCount: 24, studentCount: 216, instructorCount: 72, totalEarnings: 118000 },
  { id: '6', rank: 6, nickname: '刘导师', avatar: '', level: 3, levelName: '三年级', classCount: 20, studentCount: 180, instructorCount: 60, totalEarnings: 96000 },
  { id: '7', rank: 7, nickname: '孙老师', avatar: '', level: 2, levelName: '二年级', classCount: 16, studentCount: 144, instructorCount: 48, totalEarnings: 76000 },
  { id: '8', rank: 8, nickname: '周教练', avatar: '', level: 2, levelName: '二年级', classCount: 12, studentCount: 108, instructorCount: 36, totalEarnings: 58000 },
  { id: '9', rank: 9, nickname: '吴导师', avatar: '', level: 2, levelName: '二年级', classCount: 10, studentCount: 90, instructorCount: 30, totalEarnings: 46000 },
  { id: '10', rank: 10, nickname: '郑老师', avatar: '', level: 1, levelName: '一年级', classCount: 8, studentCount: 72, instructorCount: 24, totalEarnings: 32000 },
];
