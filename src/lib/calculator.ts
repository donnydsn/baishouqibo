import { Level, Speed, RoundPeriod, CalculatorResult, RoundEarnings, LevelInfo, SpeedInfo, RoundInfo } from '@/types/calculator';
import { LEVELS, SPEEDS, ROUNDS } from './constants';

export function calculateEarnings(
  level: Level,
  period: RoundPeriod,
  speed: Speed
): CalculatorResult {
  const levelInfo = LEVELS.find(l => l.level === level)!;
  const speedInfo = SPEEDS.find(s => s.speed === speed)!;
  const roundInfo = ROUNDS.find(r => r.period === period)!;
  const totalRounds = roundInfo.rounds;
  const seedMoney = levelInfo.seedMoney;
  const investment = seedMoney;

  const roundDetails: RoundEarnings[] = [];
  let cumulativeEarning = 0;
  let paybackRound = -1;

  for (let r = 1; r <= totalRounds; r++) {
    const instructors = Math.pow(4, r - 1) * speed;
    const newStudents = instructors * 9;
    const totalSeed = newStudents * seedMoney;

    const classFee = totalSeed * 0.4;
    const referralFee = totalSeed * 0.3;
    const inheritance = totalSeed * 0.1;
    const platformFee = totalSeed * 0.2;
    const totalEarning = classFee + referralFee + inheritance;

    cumulativeEarning += totalEarning;

    if (paybackRound === -1 && cumulativeEarning >= investment) {
      paybackRound = r;
    }

    // 计算累计团队规模
    let totalTeamSize = 0;
    for (let i = 1; i <= r; i++) {
      totalTeamSize += Math.pow(4, i - 1) * speed * 9;
    }

    roundDetails.push({
      round: r,
      instructors: Math.round(instructors),
      newStudents: Math.round(newStudents),
      totalSeed: Math.round(totalSeed),
      classFee: Math.round(classFee),
      referralFee: Math.round(referralFee),
      inheritance: Math.round(inheritance),
      platformFee: Math.round(platformFee),
      totalEarning: Math.round(totalEarning),
      cumulativeEarning: Math.round(cumulativeEarning),
      totalTeamSize: Math.round(totalTeamSize),
    });
  }

  const totalEarning = cumulativeEarning;
  const roi = ((totalEarning - investment) / investment) * 100;

  return {
    level: levelInfo,
    rounds: roundInfo,
    speed: speedInfo,
    totalRounds,
    roundDetails,
    totalEarning: Math.round(totalEarning),
    totalInvestment: investment,
    roi: Math.round(roi * 100) / 100,
    paybackRound,
  };
}
