import { whatsappUrl } from '@/lib/site';

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-navy/95 p-3 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a className="rounded-full bg-sky px-4 py-3 text-center text-sm font-black text-navy" href={whatsappUrl()}>Free Demo</a>
        <a className="rounded-full bg-white px-4 py-3 text-center text-sm font-black text-navy" href="tel:+919039014433">Call Now</a>
      </div>
    </div>
  );
}

export function FloatingWhatsApp() {
  return <a aria-label="Chat on WhatsApp" className="fixed bottom-20 right-4 z-40 hidden rounded-full bg-green-500 px-5 py-3 font-black text-white shadow-2xl lg:block" href={whatsappUrl()}>WhatsApp</a>;
}
