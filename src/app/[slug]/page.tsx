import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FAQSection, InternalLinkGrid, Pricing, ScheduleAndDemo, Testimonials } from '@/components/Sections';
import { JsonLd } from '@/components/JsonLd';
import { landingPages } from '@/data/content';
import { absoluteUrl, whatsappUrl } from '@/lib/site';

export function generateStaticParams() { return landingPages.map((page) => ({ slug: page.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = landingPages.find((item) => item.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: absoluteUrl(`/${page.slug}`) }, openGraph: { title: page.title, description: page.description, url: absoluteUrl(`/${page.slug}`) }, twitter: { card: 'summary_large_image', title: page.title, description: page.description } };
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = landingPages.find((item) => item.slug === slug);
  if (!page) notFound();
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };
  const courseSchema = { '@context': 'https://schema.org', '@type': 'Course', name: page.h1, description: page.description, provider: { '@type': 'EducationalOrganization', name: 'Speak-Up English Online Academy', sameAs: absoluteUrl('/') }, offers: { '@type': 'Offer', price: '1500', priceCurrency: 'INR', url: absoluteUrl(`/${page.slug}`) } };
  return <><JsonLd data={faqSchema} /><JsonLd data={courseSchema} /><section className="bg-navy text-white"><div className="mx-auto max-w-7xl container-px py-16 lg:py-24"><p className="text-sm font-black uppercase tracking-[.24em] text-sky">{page.keyword}</p><h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{page.h1}</h1><p className="mt-6 max-w-3xl text-lg text-white/75">Designed for {page.audience}. Learn through live Zoom classes, breakout rooms, daily speaking practice, trainer feedback, and confidence-building activities.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a className="btn-primary" href={whatsappUrl(`Hi, I want a free demo for ${page.h1}`)}>Book Free Demo</a><a className="btn-secondary" href="#demo">Check Batches</a></div></div></section><section className="section"><div className="mx-auto max-w-7xl container-px"><div className="grid gap-6 md:grid-cols-4">{page.outcomes.map((o) => <div key={o} className="card"><span className="text-3xl">🎯</span><h2 className="mt-4 text-xl font-black text-navy dark:text-white">{o}</h2></div>)}</div></div></section><Pricing /><Testimonials /><ScheduleAndDemo /><FAQSection customFaqs={page.faqs} /><InternalLinkGrid /></>;
}
