import Link from 'next/link';
import { FadeUp } from '@/components/Animated';
import { LeadForm } from '@/components/LeadForm';
import { faqs, internalLinks, testimonials } from '@/data/content';
import { whatsappUrl } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-hero-grid bg-[length:28px_28px] opacity-70" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-sky/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 container-px py-16 md:grid-cols-[1.1fr_.9fr] lg:py-24">
        <FadeUp>
          <div className="inline-flex rounded-full border border-sky/30 bg-white/10 px-4 py-2 text-sm font-bold text-sky">Admissions open • Free demo • 7 AM to 9 PM</div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Online Spoken English Classes in India for Working Professionals, Job Seekers & Beginners</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/78">Speak English confidently with live Zoom practice, breakout rooms, public speaking, interview preparation, and communication skills training designed for Indian mobile users.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a className="btn-primary" href={whatsappUrl()}>Book Free Demo on WhatsApp</a><Link className="btn-secondary" href="/spoken-english-classes-online">Explore Course</Link></div>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm"><Trust value="300+" label="Learners" /><Trust value="₹1500" label="Starting plan" /><Trust value="Live" label="Zoom practice" /></div>
        </FadeUp>
        <FadeUp delay={0.1}><LeadForm /></FadeUp>
      </div>
    </section>
  );
}

function Trust({ value, label }: { value: string; label: string }) { return <div className="rounded-3xl border border-white/10 bg-white/10 p-4"><strong className="block text-2xl text-sky">{value}</strong><span className="text-white/70">{label}</span></div>; }

export function Highlights() {
  const items = ['Daily live speaking practice', 'Breakout rooms and group discussions', 'Interview English and HR answers', 'Office meetings and client-call English', 'Public speaking and storytelling', 'Hindi-medium friendly beginner support'];
  return <section className="section bg-ice dark:bg-slate-900"><div className="mx-auto max-w-7xl container-px"><SectionTitle eyebrow="Course Highlights" title="Everything you need to speak English confidently" text="A practical academy experience focused on speaking output, confidence, career growth, and admissions conversion." /><div className="mt-10 grid gap-4 md:grid-cols-3">{items.map((item) => <FadeUp key={item}><div className="card h-full"><span className="text-3xl">✅</span><h3 className="mt-4 text-xl font-black text-navy dark:text-white">{item}</h3><p className="mt-2 text-slate-600 dark:text-slate-300">Practice with real learners and receive friendly guidance in every session.</p></div></FadeUp>)}</div></div></section>;
}

export function Pricing() {
  return <section className="section"><div className="mx-auto max-w-7xl container-px"><SectionTitle eyebrow="Affordable Pricing" title="Premium training, student-friendly fee" text="Transparent course plans built for Indian students, job seekers, homemakers, and professionals." /><div className="mt-10 grid gap-6 md:grid-cols-2"><Price name="3-Month Confidence Plan" price="₹1500" features={['Live Zoom classes', 'Daily speaking practice', 'Interview basics', 'Flexible batches']} /><Price name="6-Month Career Growth Plan" price="₹2500" popular features={['Everything in 3-month plan', 'Advanced communication', 'Public speaking', 'Workplace English practice']} /></div></div></section>;
}
function Price({ name, price, features, popular=false }: { name: string; price: string; features: string[]; popular?: boolean }) { return <div className={`card relative ${popular ? 'border-sky shadow-glow' : ''}`}>{popular && <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-xs font-black text-navy">Best Value</span>}<h3 className="text-2xl font-black text-navy dark:text-white">{name}</h3><p className="mt-4 text-5xl font-black text-royal dark:text-sky">{price}</p><ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">{features.map((f) => <li key={f}>✅ {f}</li>)}</ul><a className="btn-primary mt-8 w-full" href={whatsappUrl(`Hi, I want to enroll in ${name}`)}>Pay Securely & Join Today</a></div>; }

export function Testimonials() { return <section className="section bg-navy text-white"><div className="mx-auto max-w-7xl container-px"><SectionTitle eyebrow="Student Proof" title="Transformations that build trust" text="Use testimonials, Google reviews, WhatsApp screenshots, and student videos to improve conversions." light /><div className="mt-10 grid gap-6 md:grid-cols-3">{testimonials.map((t) => <div className="rounded-3xl bg-white/10 p-6" key={t.name}><p className="text-white/80">“{t.text}”</p><h3 className="mt-5 font-black text-sky">{t.name}</h3><p className="text-sm text-white/60">{t.role}</p></div>)}</div></div></section>; }

export function FAQSection({ customFaqs = faqs }: { customFaqs?: typeof faqs }) { return <section className="section bg-ice dark:bg-slate-900"><div className="mx-auto max-w-4xl container-px"><SectionTitle eyebrow="FAQ" title="Questions students ask before joining" text="Clear answers reduce hesitation and increase demo bookings." /> <div className="mt-8 space-y-4">{customFaqs.map((faq) => <details key={faq.question} className="card group"><summary className="cursor-pointer text-lg font-black text-navy dark:text-white">{faq.question}</summary><p className="mt-3 text-slate-600 dark:text-slate-300">{faq.answer}</p></details>)}</div></div></section>; }

export function ScheduleAndDemo() { return <section id="demo" className="section"><div className="mx-auto grid max-w-7xl gap-8 container-px md:grid-cols-2"><div><SectionTitle eyebrow="Flexible Schedule" title="New practice opportunities from 7 AM to 9 PM" text="Morning, afternoon, and evening batches help learners attend before college, after office, or during homemaker-friendly hours." /><div className="mt-8 grid grid-cols-2 gap-4">{['7 AM Morning batch', '1 PM Afternoon batch', '6 PM Evening batch', '9 PM Last batch'].map((s) => <div key={s} className="card font-bold">{s}</div>)}</div></div><LeadForm /></div></section>; }

export function InternalLinkGrid() { return <section className="section"><div className="mx-auto max-w-7xl container-px"><SectionTitle eyebrow="Topical Authority" title="SEO landing pages for every learner intent" text="Dedicated pages target high-intent Google keywords and internally link to build topical authority." /><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{internalLinks.map((link) => <Link className="rounded-2xl border border-slate-200 p-4 font-bold hover:border-sky dark:border-white/10" href={link.href} key={link.href}>{link.label}</Link>)}</div></div></section>; }

export function SocialProof() { return <section className="section bg-gradient-to-br from-royal to-navy text-white"><div className="mx-auto max-w-7xl container-px"><SectionTitle eyebrow="Viral Social Engine" title="Reels, YouTube Shorts, and WhatsApp admissions funnel" text="Daily hooks: Stop saying this, interview answers, office English, Hindi-to-English sentences, student transformations, and 30-day speaking challenges." light /><div className="mt-10 grid gap-4 md:grid-cols-3">{['Instagram Reels: 2 daily English tips', 'YouTube Shorts: interview + office English', 'WhatsApp: free PDF and demo reminders'].map((x) => <div className="rounded-3xl bg-white/10 p-6 font-black" key={x}>{x}</div>)}</div></div></section>; }

function SectionTitle({ eyebrow, title, text, light=false }: { eyebrow: string; title: string; text: string; light?: boolean }) { return <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[.24em] text-sky">{eyebrow}</p><h2 className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-navy dark:text-white'}`}>{title}</h2><p className={`mt-4 text-lg ${light ? 'text-white/70' : 'text-slate-600 dark:text-slate-300'}`}>{text}</p></div>; }
