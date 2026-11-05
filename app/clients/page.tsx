import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import ClosingCTA from '@/components/ClosingCTA';

export const metadata: Metadata = {
  title: 'Our Clients | Construction Partner in Kenya | Jortin',
  description: 'Jortin Limited works with government agencies, NGOs, development partners and private clients, including Periurban Properties and Dapan Engineering.',
  alternates: {
    canonical: 'https://www.jortinlimited.co.ke/clients',
  },
  openGraph: {
    title: 'Clients & Partners | Jortin Limited',
    description: 'The organisations we work with, and the client groups we serve across public, donor-funded and private construction in Kenya.',
    url: 'https://www.jortinlimited.co.ke/clients',
    images: ['/images/hero-home-bg.jpg'],
  },
};

export default function ClientsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-navy text-white pt-20 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Clients &amp; Partners
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Trusted by clients who <span className="text-brand-gold">expect delivery</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Our clients range from property developers and engineering firms to architects and design studios. What they share is a need for a contractor who does what was agreed, documents it properly and communicates clearly from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* LOGO GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">Track Record</span>
            <h2 className="text-3xl font-extrabold text-brand-navy">Clients we have worked with</h2>
            <p className="text-slate-600 text-base">We collaborate with forward-thinking organisations across the built environment.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center font-bold text-slate-800 h-32 flex items-center justify-center hover-lift">
              <Image src="/images/client-periurban.png" alt="Periurban Properties logo, a client of Jortin Limited" width={160} height={60} className="max-h-20 w-auto object-contain" />
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center font-bold text-slate-800 h-32 flex items-center justify-center hover-lift">
              <Image src="/images/client-dapan.png" alt="Dapan Engineering Limited logo, a client of Jortin Limited" width={160} height={60} className="max-h-20 w-auto object-contain" />
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center font-bold text-slate-800 h-32 flex items-center justify-center hover-lift">
              <Image src="/images/client-bn-architects.png" alt="BN Architects logo, a client of Jortin Limited" width={160} height={60} className="max-h-20 w-auto object-contain" />
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center font-bold text-slate-800 h-32 flex items-center justify-center hover-lift">
              <Image src="/images/client-art-tic.png" alt="ART.TIC Studio logo, a client of Jortin Limited" width={160} height={60} className="max-h-20 w-auto object-contain" />
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center font-bold text-slate-800 h-32 flex items-center justify-center hover-lift">
              <Image src="/images/client-kirrn.png" alt="KIRRN LTD logo, a client of Jortin Limited" width={160} height={60} className="max-h-20 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl font-extrabold text-brand-navy">Who we serve</h2>
            <p className="text-slate-600 text-base">Distinct capabilities tailored to your institutional structure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <h3 className="text-xl font-bold text-brand-navy">Government Agencies</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                National and county institutions delivering roads, water systems and public buildings. We are registered on IFMIS and PPIP and understand public procurement requirements, compliance thresholds and milestone reporting.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <h3 className="text-xl font-bold text-brand-navy">NGOs &amp; Non-Profits</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Organisations working in education, healthcare, water and agriculture that need dependable delivery in the field and reporting they can share with their boards, communities and international donors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <h3 className="text-xl font-bold text-brand-navy">Development Partners</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Donor-funded projects that require international procurement standards, rigorous documentation, environmental and social safeguards and monitoring and evaluation support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <h3 className="text-xl font-bold text-brand-navy">Private Sector</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Developers, commercial businesses and property owners who want quality buildings and infrastructure, delivered strictly on time, safely and within verified budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT OUR CLIENTS CAN EXPECT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl font-extrabold text-brand-navy">What our clients can expect</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-base text-slate-800 font-medium">A clear scope and an honest BOQ before work begins</span>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-base text-slate-800 font-medium">Engineer-led quality control and sign-off on site</span>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-base text-slate-800 font-medium">Regular, digital progress reporting with photographic records</span>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-base text-slate-800 font-medium">Full compliance with NCA, KRA, NEMA and OSHA requirements</span>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-base text-slate-800 font-medium">A single accountable team from inception to handover</span>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCTA />
    </>
  );
}
