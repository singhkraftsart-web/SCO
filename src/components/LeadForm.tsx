'use client';

import { useState } from 'react';

type Kind = 'demo' | 'enrollment';

export function LeadForm({ kind = 'demo' }: { kind?: Kind }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(formData: FormData) {
    setStatus('loading');
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, kind }) });
    setStatus(res.ok ? 'success' : 'error');
  }

  return (
    <form action={onSubmit} className="card space-y-4">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-sky">{kind === 'demo' ? 'Free Demo Booking' : 'Enrollment Form'}</p>
        <h3 className="mt-2 text-2xl font-black text-navy dark:text-white">Reserve your seat in 30 seconds</h3>
      </div>
      <input className="input" name="name" required placeholder="Your name" />
      <input className="input" name="phone" required placeholder="WhatsApp number" inputMode="tel" />
      <select className="input" name="goal" defaultValue="">
        <option value="" disabled>Main goal</option>
        <option>Job interview English</option><option>Office communication</option><option>Basic spoken English</option><option>Public speaking</option><option>Homemaker daily English</option>
      </select>
      <select className="input" name="time" defaultValue="">
        <option value="" disabled>Preferred timing</option>
        <option>Morning</option><option>Afternoon</option><option>Evening</option><option>Any flexible batch</option>
      </select>
      <button disabled={status === 'loading'} className="btn-primary w-full" type="submit">{status === 'loading' ? 'Submitting...' : kind === 'demo' ? 'Book My Free Demo' : 'Reserve My Seat'}</button>
      {status === 'success' && <p className="rounded-2xl bg-green-50 p-3 text-sm font-bold text-green-700">Thank you! We saved your request and will contact you on WhatsApp.</p>}
      {status === 'error' && <p className="rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-700">Something went wrong. Please try WhatsApp directly.</p>}
    </form>
  );
}
