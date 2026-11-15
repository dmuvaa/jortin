import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import ClosingCTA from '@/components/ClosingCTA';
import JumpNav from '@/components/JumpNav';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Construction Services in Kenya: Roads, Water | Jortin',
  description: 'Consultancy, structural and civil works, building, road works, water and sanitation, MEP and project management. One accountable contractor in Kenya.',
  alternates: {
    canonical: 'https://www.jortinlimited.co.ke/services',
  },
  openGraph: {
    title: 'Construction Services in Kenya | Jortin Limited',
    description: 'Nine integrated service lines: design, structural works, building, roads, water, MEP, project management, procurement and consulting.',
    url: 'https://www.jortinlimited.co.ke/services',
    images: ['/images/consultancy-design.jpg'],
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-brand-navy text-white pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rebar-worker.jpg"
            alt="Construction rebar reinforcement works in Kenya"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071527]/95 via-[#0b1f3b]/80 to-[#0b1f3b]/40" />
          <div className="absolute inset-0 bg-slate-950/20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 enter">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Our Services
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Construction services from <span className="text-brand-gold">consultancy to maintenance</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Infrastructure is delivered in stages, and every stage affects the next. Our nine service lines cover the full project lifecycle, from feasibility studies and structural design to roads, water systems, buildings and long-term maintenance.
            </p>
          </div>
          <div className="pt-8">
            <JumpNav items={services.map((service) => ({ href: `#${service.slug}`, label: service.nav }))} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => {
            const imageFirst = index % 2 === 1;
            const copy = (
              <div className="space-y-5">
                <h2 className="text-3xl font-extrabold text-brand-navy">{service.title}</h2>
                <p className="text-slate-600 text-base leading-relaxed">{service.body}</p>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link href={`/services/${service.slug}`} className="btn-gold text-sm">
                    <span>{service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href={`/contact?service=${service.slug}`} className="btn-outline-navy text-sm">
                    Request a quote
                  </Link>
                </div>
              </div>
            );
            const photo = (
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative aspect-[4/3]">
                <Image src={service.image.src} alt={service.image.alt} fill className="object-cover" sizes="(min-width: 1024px) 36rem, 100vw" />
              </div>
            );

            return (
              <div key={service.slug} id={service.slug} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
                <div className={imageFirst ? 'order-2 lg:order-1' : undefined}>{imageFirst ? photo : copy}</div>
                <div className={imageFirst ? 'order-1 lg:order-2' : undefined}>{imageFirst ? copy : photo}</div>
              </div>
            );
          })}
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
