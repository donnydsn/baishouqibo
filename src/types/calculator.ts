export type Level = 1 | 2 | 3 | 4 | 5;

export interface LevelInfo {
  level: Level;
  name: string;
  seedMoney: number;
}

export type Speed = 1 | 2 | 3 | 4;

export interface SpeedInfo {
  speed: Speed;
  label: string;
  description: string;
}

export type RoundPeriod = 'week' | 'month' | 'quarter' | 'year';

export interface RoundInfo {
  period: RoundPeriod;
  label: string;
  rounds: number;
}

export interface RoundEarnings {
  round: number;
  instructors: number;
  newStudents: number;
  totalSeed: number;
  classFee: number;
  referralFee: number;
  inheritance: number;
  platformFee: number;
  totalEarning: number;
  cumulativeEarning: number;
  totalTeamSize: number;
}

export interface CalculatorResult {
  level: LevelInfo;
  rounds: RoundInfo;
  speed: SpeedInfo;
  totalRounds: number;
  roundDetails: RoundEarnings[];
  totalEarning: number;
  totalInvestment: number;
  roi: number;
  paybackRound: number;
}
