import Link from 'next/link';
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                白
              </div>
              <span className="text-lg font-bold gradient-text">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">功能板块</h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/30 hover:text-white/60 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">关于我们</h3>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-white/30 hover:text-white/60 transition-colors">使命愿景</Link></li>
              <li><Link href="/docs" className="text-sm text-white/30 hover:text-white/60 transition-colors">官方文档</Link></li>
              <li><Link href="/roadmap" className="text-sm text-white/30 hover:text-white/60 transition-colors">成长进阶</Link></li>
              <li><Link href="/calculator" className="text-sm text-white/30 hover:text-white/60 transition-colors">收益计算</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">联系我们</h3>
            <ul className="space-y-2.5">
              <li><span className="text-sm text-white/30">微信公众号：白手启播</span></li>
              <li><span className="text-sm text-white/30">合作邮箱：hi@baishouqibo.com</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            © 2025 {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/20">
            <span>{SITE_CONFIG.icp}</span>
            <span>·</span>
            <span>用最低成本，最短时间，改变人生</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
