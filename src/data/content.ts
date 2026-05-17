import { absoluteUrl } from '@/lib/site';

export type LandingPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  audience: string;
  keyword: string;
  outcomes: string[];
  faqs: { question: string; answer: string }[];
};

export const testimonials = [
  { name: 'Priya Sharma', role: 'Job seeker, Bhopal', text: 'I could understand English but was afraid to speak. The Zoom practice and interview sessions helped me introduce myself confidently.' },
  { name: 'Rohit Verma', role: 'Software engineer, Pune', text: 'The flexible timing helped me attend after office. I improved my meeting English, client-call confidence, and presentation skills.' },
  { name: 'Neha Khan', role: 'Homemaker, Indore', text: 'The trainers are friendly and the class environment is judgment-free. I started speaking in daily situations within a few weeks.' }
];

export const faqs = [
  { question: 'Are these spoken English classes suitable for beginners?', answer: 'Yes. Our live classes are beginner-friendly and include sentence formation, vocabulary, daily conversation practice, confidence building, and speaking activities.' },
  { question: 'What are the class timings?', answer: 'Classes run online from 7 AM to 9 PM, with flexible batches designed for students, working professionals, job seekers, homemakers, and IT professionals.' },
  { question: 'Do you provide a free demo class?', answer: 'Yes. You can book a free demo class on WhatsApp or through the demo form before enrolling.' },
  { question: 'Is the course useful for job interviews?', answer: 'Yes. We include self-introduction practice, HR questions, group discussion, professional communication, and confidence-building exercises.' }
];

const pageFaqs = (topic: string) => [
  { question: `Who should join ${topic}?`, answer: `${topic} is ideal for Indian learners who want live speaking practice, confidence, vocabulary, interview communication, and real-world English conversations.` },
  { question: 'How are online classes conducted?', answer: 'Classes are conducted live on Zoom with trainer guidance, breakout room practice, public speaking tasks, storytelling, and peer conversation.' },
  { question: 'Can I book a free demo?', answer: 'Yes. Click the WhatsApp or demo CTA and our team will help you choose a suitable batch.' }
];

export const landingPages: LandingPage[] = [
  { slug: 'spoken-english-classes-online', title: 'Spoken English Classes Online in India | Live Zoom Practice', description: 'Join online spoken English classes in India with live Zoom practice, flexible batches, confidence building, interview English, and affordable plans. Book a free demo.', h1: 'Spoken English Classes Online in India with Live Speaking Practice', audience: 'students, freshers, homemakers, job seekers, and professionals', keyword: 'spoken english classes online', outcomes: ['Speak English without hesitation', 'Practice daily-use English sentences', 'Improve grammar through real conversations', 'Build confidence with group activities'], faqs: pageFaqs('spoken English classes online') },
  { slug: 'spoken-english-for-job-interview', title: 'Spoken English for Job Interview | HR Round Practice', description: 'Prepare for interviews with English self-introduction, HR answers, group discussion, and professional communication practice. Book your free demo class.', h1: 'Spoken English for Job Interview Preparation', audience: 'freshers, job seekers, and career switchers', keyword: 'spoken english for job interview', outcomes: ['Answer “Tell me about yourself” confidently', 'Practice HR interview questions', 'Improve group discussion English', 'Speak professionally in interviews'], faqs: pageFaqs('spoken English for job interview') },
  { slug: 'english-classes-working-professionals', title: 'Online English Classes for Working Professionals in India', description: 'Improve office English, meetings, client calls, presentations, and workplace communication with flexible online English classes for professionals.', h1: 'Online English Classes for Working Professionals in India', audience: 'office employees, managers, and working professionals', keyword: 'online english classes for working professionals', outcomes: ['Speak in meetings confidently', 'Handle client calls in English', 'Give clear team updates', 'Improve presentation and public speaking skills'], faqs: pageFaqs('online English classes for working professionals') },
  { slug: 'spoken-english-for-beginners', title: 'Spoken English for Beginners | Basic English Speaking Course', description: 'Start speaking English from basic level with sentence making, vocabulary, simple grammar, and live practice for Indian beginners.', h1: 'Spoken English for Beginners from Basic to Confident Speaking', audience: 'beginners and Hindi medium learners', keyword: 'spoken english for beginners', outcomes: ['Make simple English sentences', 'Use daily conversation phrases', 'Stop translating word-by-word', 'Speak confidently in safe practice sessions'], faqs: pageFaqs('spoken English for beginners') },
  { slug: 'communication-skills-classes', title: 'Communication Skills Classes Online | Speak with Confidence', description: 'Build communication skills for interviews, office meetings, presentations, public speaking, and daily conversations through live online classes.', h1: 'Communication Skills Classes Online for Confident English Speaking', audience: 'students and professionals who want better communication', keyword: 'communication skills classes', outcomes: ['Improve clarity and confidence', 'Develop presentation skills', 'Practice public speaking', 'Learn professional body language and tone'], faqs: pageFaqs('communication skills classes') },
  { slug: 'spoken-english-for-homemakers', title: 'Spoken English Classes for Homemakers | Learn English Online', description: 'Online spoken English classes for homemakers to speak confidently in daily life, school meetings, shopping, travel, and social situations.', h1: 'Spoken English Classes for Homemakers in India', audience: 'homemakers and ladies who want daily-life English confidence', keyword: 'spoken english for homemakers', outcomes: ['Speak confidently with teachers and relatives', 'Use English while shopping and travelling', 'Support children with English conversations', 'Build self-confidence'], faqs: pageFaqs('spoken English for homemakers') },
  { slug: 'english-for-it-professionals', title: 'English Communication for IT Professionals | Meetings & Interviews', description: 'Improve English communication for software jobs, standups, client calls, interviews, presentations, and workplace confidence.', h1: 'English Communication Course for IT Professionals', audience: 'software engineers, IT freshers, and tech employees', keyword: 'english for it professionals', outcomes: ['Speak better in standup meetings', 'Handle client communication', 'Explain technical work clearly', 'Improve interview and presentation English'], faqs: pageFaqs('English for IT professionals') },
  { slug: 'public-speaking-course-online', title: 'Public Speaking Course Online | English Confidence Training', description: 'Join online public speaking classes with storytelling, stage confidence, presentation practice, and live feedback for Indian learners.', h1: 'Public Speaking Course Online with Live English Practice', audience: 'learners who want stage confidence and powerful communication', keyword: 'public speaking course online', outcomes: ['Remove stage fear', 'Structure short speeches', 'Practice storytelling', 'Speak with better voice, tone, and confidence'], faqs: pageFaqs('public speaking course online') }
];

export const cities = ['Bhopal', 'Indore', 'Pune', 'Bangalore', 'Hyderabad', 'Delhi', 'Mumbai'];

export const blogs = [
  { slug: 'how-to-speak-english-confidently', title: 'How to Speak English Confidently: A Practical Guide for Indian Learners', description: 'Learn simple daily habits, speaking drills, and confidence-building methods to speak English without fear.', category: 'Confidence', readTime: '6 min', keywords: ['speak English confidently', 'remove English speaking fear'], intro: 'Confidence comes from repeated speaking practice, not only grammar study. Start small, speak daily, and use real-life topics.' },
  { slug: '100-daily-use-english-sentences', title: '100 Daily Use English Sentences for Beginners', description: 'Practice useful English sentences for home, school, office, phone calls, shopping, travel, and daily conversations.', category: 'Daily English', readTime: '8 min', keywords: ['daily use English sentences', 'English speaking practice'], intro: 'Daily-use sentences help beginners start speaking quickly because they can be used immediately in real conversations.' },
  { slug: 'english-for-job-interviews', title: 'English for Job Interviews: Self Introduction, HR Answers and GD Practice', description: 'Prepare interview English with self-introduction, HR answers, group discussion phrases, and confidence tips.', category: 'Interview English', readTime: '7 min', keywords: ['spoken English for job interview', 'interview English'], intro: 'Interview English should be clear, polite, and confident. Practice common answers aloud until they sound natural.' },
  { slug: 'office-english-communication', title: 'Office English Communication for Meetings, Calls and Presentations', description: 'Learn professional English phrases for team meetings, client calls, presentations, and workplace updates.', category: 'Office English', readTime: '6 min', keywords: ['office English communication', 'English for working professionals'], intro: 'Good office English helps you explain ideas clearly, participate in meetings, and build professional confidence.' },
  { slug: 'spoken-english-for-beginners', title: 'Spoken English for Beginners: Start from Basic Sentences', description: 'A beginner-friendly roadmap for sentence formation, vocabulary, listening, speaking practice, and confidence.', category: 'Beginners', readTime: '6 min', keywords: ['spoken English for beginners', 'basic English speaking course'], intro: 'Beginners should focus on simple sentences, daily topics, listening, and guided speaking practice before advanced grammar.' }
];

export const internalLinks = landingPages.map((page) => ({ label: page.h1.replace(' in India', ''), href: `/${page.slug}` }));

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Speak-Up English Online Academy',
    url: absoluteUrl('/'),
    description: 'Live online spoken English classes, communication skills training, public speaking, and interview English practice for Indian learners.',
    areaServed: { '@type': 'Country', name: 'India' },
    telephone: '+91-9039014433',
    email: 'speakupenglishonlineacademy@gmail.com',
    sameAs: ['https://www.instagram.com/', 'https://www.youtube.com/', 'https://www.facebook.com/']
  };
}
