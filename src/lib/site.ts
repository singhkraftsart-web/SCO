export const siteConfig = {
  name: 'Speak-Up English Online Academy',
  shortName: 'Speak-Up Academy',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://speak-up-academy-alpha.vercel.app',
  phone: '+919039014433',
  displayPhone: '+91 90390 14433',
  email: 'speakupenglishonlineacademy@gmail.com',
  address: 'Online spoken English academy serving students across India',
  instagram: 'https://www.instagram.com/',
  youtube: 'https://www.youtube.com/',
  facebook: 'https://www.facebook.com/',
  gscVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || ''
};

export function absoluteUrl(path = '/') {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function whatsappUrl(message = 'Hi, I want to book a free spoken English demo class.') {
  return `https://wa.me/${siteConfig.phone.replace('+', '')}?text=${encodeURIComponent(message)}`;
}
