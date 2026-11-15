import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, FileCheck, Building, CheckCircle2, HardHat, Mail } from 'lucide-react';
import ClosingCTA from '@/components/ClosingCTA';
import JumpNav from '@/components/JumpNav';

export const metadata: Metadata = {
  title: 'NCA 8 Registered Contractor: Roads & Water | Jortin',
  description: 'Jortin Limited is NCA 8 registered for road works and water works, tax compliant, and registered for public procurement. Certificates are shared on request.',
  alternates: {
    canonical: 'https://www.jortinlimited.co.ke/compliance',
  },
  openGraph: {
    title: 'Registration & Compliance | Jortin Limited',
    description: 'High-level declarations of NCA registration, tax compliance, public procurement and site safety. Certificates are shared on request.',
    url: 'https://www.jortinlimited.co.ke/compliance',
    images: ['/images/hero-home-bg.jpg'],
  },
};

const declarations = [
  {
    id: 'nca',
    icon: ShieldCheck,
    title: 'National Construction Authority',
    body: 'Registered for road works and water works, category NCA 8.',
  },
  {
    id: 'tax',
    icon: CheckCircle2,
    title: 'Tax compliance',
    body: 'Tax compliant with the Kenya Revenue Authority.',
  },
  {
    id: 'procurement',
    icon: FileCheck,
    title: 'Public procurement',
    body: 'Registered to supply national and county government, including IFMIS and PPIP.',
  },
  {
    id: 'ownership',
    icon: Building,
    title: 'Ownership',
    body: 'A Kenyan-owned construction company, managed in Kenya.',
  },
];

export default function CompliancePage() {
  return (
    <>
      <section className="relative bg-brand-navy text-white pt-20 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Compliance &amp; Registrations
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Registration and <span className="text-brand-gold">compliance</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              These are the declarations we stand behind. Certificates and supporting documents are shared with procurement teams on request.
            </p>
          </div>
          <div className="pt-8">
            <JumpNav
              items={[
                { href: '#nca', label: 'NCA' },
                { href: '#tax', label: 'Tax' },
                { href: '#procurement', label: 'Procurement' },
                { href: '#ownership', label: 'Ownership' },
                { href: '#sites', label: 'Sites' },
                { href: '#documents', label: 'Documents' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {declarations.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  id={item.id}
                  key={item.id}
                  className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover-lift"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-extrabold text-brand-navy">{item.title}</h2>
                  <p className="text-slate-700 leading-relaxed">{item.body}</p>
                </article>
              );
            })}
          </div>

          <div id="sites" className="bg-brand-navy text-white rounded-2xl p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <HardHat className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold">Sites</h2>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              Work on site follows NEMA environmental guidance and OSHA occupational health and safety standards. Personal protective equipment is required on every Jortin site.
            </p>
          </div>

          <div id="documents" className="bg-amber-50 rounded-2xl p-8 sm:p-12 border border-amber-200 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">Documents on request</h2>
            <p className="text-slate-700 text-base">
              Certificates are shared with procurement officers and evaluation committees when they ask.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="/contact?enquiry=documents" className="btn-gold">
                Request documents
              </Link>
              <a href="mailto:jortinlimited@gmail.com" className="btn-outline-navy">
                <Mail className="w-4 h-4" />
                Email jortinlimited@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
