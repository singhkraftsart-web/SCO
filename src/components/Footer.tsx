import Link from 'next/link';
import { internalLinks } from '@/data/content';
import { siteConfig, whatsappUrl } from '@/lib/site';

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 container-px py-14 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-black">Speak-Up English Online Academy</h2>
          <p className="mt-4 text-white/70">Premium yet affordable online spoken English, communication skills, interview English, and public speaking classes for India.</p>
        </div>
        <div>
          <h3 className="font-bold text-sky">SEO Courses</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">{internalLinks.slice(0, 5).map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="font-bold text-sky">Admissions</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><a href={whatsappUrl()}>Book Free Demo</a></li>
            <li><a href={`tel:${siteConfig.phone}`}>{siteConfig.displayPhone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-sky">Social Growth</h3>
          <p className="mt-4 text-sm text-white/75">Follow daily reels, YouTube Shorts, English challenges, and student success stories.</p>
          <div className="mt-5 flex gap-3 text-sm font-bold"><a href={siteConfig.instagram}>Instagram</a><a href={siteConfig.youtube}>YouTube</a><a href={siteConfig.facebook}>Facebook</a></div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">© {new Date().getFullYear()} Speak-Up English Online Academy. All rights reserved.</div>
    </footer>
  );
}
