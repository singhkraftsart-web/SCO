import { FAQSection, Hero, Highlights, InternalLinkGrid, Pricing, ScheduleAndDemo, SocialProof, Testimonials } from '@/components/Sections';
import { JsonLd } from '@/components/JsonLd';
import { faqs } from '@/data/content';
import { absoluteUrl } from '@/lib/site';

export default function HomePage() {
  const courseSchema = { '@context': 'https://schema.org', '@type': 'Course', name: 'Online Spoken English Classes in India', description: 'Live online spoken English classes with Zoom practice, interview English, public speaking, and communication skills training.', provider: { '@type': 'EducationalOrganization', name: 'Speak-Up English Online Academy', sameAs: absoluteUrl('/') }, offers: { '@type': 'Offer', price: '1500', priceCurrency: 'INR', availability: 'https://schema.org/InStock' } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };
  return <><JsonLd data={courseSchema} /><JsonLd data={faqSchema} /><Hero /><Highlights /><Pricing /><Testimonials /><ScheduleAndDemo /><InternalLinkGrid /><SocialProof /><FAQSection /></>;
}
