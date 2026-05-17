import Link from 'next/link';
import { siteConfig, whatsappUrl } from '@/lib/site';

const nav = [
  ['Courses', '/spoken-english-classes-online'],
  ['Interview English', '/spoken-english-for-job-interview'],
  ['Blog', '/blog'],
  ['Demo', '#demo'],
  ['Contact', '#contact']
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between container-px py-3" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 text-white" aria-label="Speak-Up English Online Academy home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky font-black text-navy">SU</span>
          <span className="leading-tight"><strong className="block">Speak-Up English</strong><span className="text-xs text-sky">Online Academy</span></span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="text-sm font-semibold text-white/80 hover:text-sky">{label}</Link>)}
        </div>
        <a href={whatsappUrl()} className="rounded-full bg-sky px-4 py-2 text-sm font-black text-navy">WhatsApp Demo</a>
      </nav>
    </header>
  );
}
