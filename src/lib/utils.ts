export function formatNumber(num: number): string {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '亿';
  }
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  }
  return num.toLocaleString('zh-CN');
}

export function formatCurrency(num: number): string {
  if (num >= 100000000) {
    return '¥' + (num / 100000000).toFixed(2) + '亿';
  }
  if (num >= 10000) {
    return '¥' + (num / 10000).toFixed(2) + '万';
  }
  return '¥' + num.toLocaleString('zh-CN');
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
