import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FAQSection, Pricing, ScheduleAndDemo, Testimonials } from '@/components/Sections';
import { JsonLd } from '@/components/JsonLd';
import { cities } from '@/data/content';
import { absoluteUrl, whatsappUrl } from '@/lib/site';

const citySlugs = cities.map((city) => city.toLowerCase());
export function generateStaticParams() { return citySlugs.map((city) => ({ city })); }
const title = (city: string) => `Online Spoken English Classes in ${city} | Live Zoom Practice`;
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> { const { city: cityParam } = await params; const city = decodeURIComponent(cityParam); const name = cities.find((c) => c.toLowerCase() === city); if (!name) return {}; return { title: title(name), description: `Join online spoken English classes in ${name} with live Zoom practice, flexible batches, interview English, communication skills, and free demo booking.`, alternates: { canonical: absoluteUrl(`/spoken-english-classes-in-${city}`) } }; }
export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const name = cities.find((c) => c.toLowerCase() === decodeURIComponent(city));
  if (!name) notFound();
  const faqs = [{ question: `Do you offer spoken English classes in ${name}?`, answer: `Yes. Learners from ${name} can join our live online spoken English classes from anywhere using Zoom.` }, { question: 'Are timings flexible?', answer: 'Yes. Batches are available from 7 AM to 9 PM for students, working professionals, homemakers, and job seekers.' }, { question: 'Can I attend a free demo?', answer: 'Yes. Book your free demo on WhatsApp before enrolling.' }];
  const localSchema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: `Speak-Up English Online Academy - ${name}`, areaServed: name, url: absoluteUrl(`/spoken-english-classes-in-${name.toLowerCase()}`), telephone: '+91-9039014433', priceRange: '₹1500-₹2500' };
  return <><JsonLd data={localSchema} /><section className="bg-navy text-white"><div className="mx-auto max-w-7xl container-px py-16 lg:py-24"><p className="text-sky font-black uppercase tracking-[.24em]">Local SEO Page</p><h1 className="mt-4 text-4xl font-black sm:text-6xl">Online Spoken English Classes in {name}</h1><p className="mt-6 max-w-3xl text-lg text-white/75">Join live Zoom-based English speaking classes in {name} for beginners, students, job seekers, homemakers, IT professionals, and working professionals.</p><a className="btn-primary mt-8" href={whatsappUrl(`Hi, I want a free demo for online spoken English classes in ${name}`)}>Book Free Demo in {name}</a></div></section><Pricing /><Testimonials /><ScheduleAndDemo /><FAQSection customFaqs={faqs} /></>;
}
