import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { UserCheck, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import ClosingCTA from '@/components/ClosingCTA';

export const metadata: Metadata = {
  title: 'Meet Our Directors | Civil & Structural Engineering',
  description: 'Meet the directors of Jortin Limited: Karithi John, Managing Director, and Eng. Martin Mutuma, Civil and Structural Engineer. 30+ years combined.',
  alternates: {
    canonical: 'https://www.jortinlimited.co.ke/team',
  },
  openGraph: {
    title: 'Meet the Directors of Jortin Limited',
    description: 'Strategic leadership and engineering expertise, with over 30 years of combined experience in Kenyan construction and project delivery.',
    url: 'https://www.jortinlimited.co.ke/team',
    images: ['/images/workers-ppe.jpg'],
  },
};

export default function TeamPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-navy text-white pt-20 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Our Team
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              The people accountable for <span className="text-brand-gold">your project</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Clients do not hire a logo; they hire people. At Jortin Limited, the directors are directly involved in planning, engineering and delivery, which means decisions are made quickly and responsibility is never unclear. Together they bring more than 30 years of combined experience.
            </p>
          </div>
        </div>
      </section>

      {/* DIRECTORS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Karithi John */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover-lift">
              <div className="space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-brand-navy text-amber-400 flex items-center justify-center font-black text-2xl shadow-inner">
                  KJ
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-brand-navy">Karithi John</h2>
                  <div className="text-amber-600 font-bold text-sm tracking-wide mt-0.5">Managing Director</div>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Karithi John leads the company's strategy, client relationships and business development. He holds a Master's degree in Strategic Planning and has more than 20 years of professional experience. He ensures every project is properly planned, resourced and aligned with client objectives, and leads our consulting work in strategic planning, tender writing, training and monitoring and evaluation.
                </p>
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Focus Areas:</div>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    <span className="px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 font-medium">Strategy &amp; Planning</span>
                    <span className="px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 font-medium">Client &amp; Partner Relations</span>
                    <span className="px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 font-medium">Procurement &amp; Tendering</span>
                    <span className="px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 font-medium">Consulting &amp; M&amp;E</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Eng. Martin Mutuma */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover-lift">
              <div className="space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-brand-navy text-amber-400 flex items-center justify-center font-black text-2xl shadow-inner">
                  MM
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-brand-navy">Eng. Martin Mutuma</h2>
                  <div className="text-amber-600 font-bold text-sm tracking-wide mt-0.5">Technical Director · Civil &amp; Structural Engineer</div>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Eng. Martin Mutuma is a Civil and Structural Engineer trained at Jomo Kenyatta University of Agriculture and Technology (JKUAT), with more than 8 years of practice. He leads structural design, technical quality and site supervision, ensuring every structure is built to design and to standard.
                </p>
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Focus Areas:</div>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    <span className="px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 font-medium">Structural Design (BS 8110 / EC2)</span>
                    <span className="px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 font-medium">Civil Works &amp; Drainage</span>
                    <span className="px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 font-medium">Site Supervision</span>
                    <span className="px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 font-medium">Quality Control &amp; HSE</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP PROMISE */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">How our leadership shows up on your project</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Direct Access</h3>
              <p className="text-slate-600 text-sm">You can reach a director directly by phone or WhatsApp, not just a rotating site foreman.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Engineering Sign-off</h3>
              <p className="text-slate-600 text-sm">Every critical structural decision is checked and signed off by a qualified engineer.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center font-bold">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Clear Accountability</h3>
              <p className="text-slate-600 text-sm">One team, one point of contact, one standard across the entire project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SITE TEAM IMAGE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 max-w-4xl mx-auto relative aspect-[16/9]">
            <Image 
              src="/images/workers-ppe.jpg" 
              alt="Jortin Limited directors inspecting reinforcement on a construction site" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCTA />
    </>
  );
}
