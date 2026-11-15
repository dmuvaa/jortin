import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Target, CheckCircle2, ShieldCheck, FileCheck, Building, HardHat, Mail } from 'lucide-react';
import ClosingCTA from '@/components/ClosingCTA';

export const metadata: Metadata = {
  title: { absolute: 'About Us | Kenyan-Owned Construction Firm | Jortin' },
  description: 'Jortin Limited is a fully Kenyan-owned, engineering-led construction company in Ongata Rongai, Kajiado County. Our vision, mission and values.',
  alternates: {
    canonical: 'https://www.jortinlimited.co.ke/about',
  },
  openGraph: {
    title: 'About Jortin Limited | Kenyan-Owned Construction Company',
    description: 'Engineering-led construction from Ongata Rongai, serving government, NGOs, development partners and private clients across Kenya.',
    url: 'https://www.jortinlimited.co.ke/about',
    images: ['/images/hero-about-bg.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-navy text-white pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-about-bg.jpg" 
            alt="Aerial view of the Nairobi skyline from the KICC rooftop at golden hour" 
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071527]/95 via-[#0b1f3b]/75 to-[#0b1f3b]/35" />
          <div className="absolute inset-0 bg-slate-950/20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              About Us
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Kenyan owned. Engineering led. <span className="text-brand-gold">Built to deliver.</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
              Jortin Limited is a fully Kenyan-owned and managed construction company headquartered in Ongata Rongai, Kajiado County. We provide <Link href="/services" className="font-semibold text-white underline decoration-amber-400 underline-offset-2">complete construction solutions</Link>, from consultancy and design through structural works, building, roads and water works, for clients who need a contractor that is technically strong, fully compliant and dependable on delivery.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
                From consultancy to completed structures
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Jortin Limited is a Kenyan-owned construction company. The company is new; the experience behind it is not. Our directors bring more than 30 years of combined experience in strategic planning, <Link href="/team" className="font-semibold text-brand-navy underline decoration-amber-400 underline-offset-2">civil and structural engineering</Link>, and project delivery.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We were founded on a simple observation: clients in Kenya, whether a county government, an NGO or a private developer, too often have to manage separate consultants, contractors and suppliers who do not talk to each other. Jortin brings those disciplines together, so the person who designs your structure is part of the team that builds and supervises it.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy">At a glance</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" /> Fully Kenyan-owned and managed</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" /> NCA 8 registered for road works and water works</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" /> KRA tax compliant</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" /> Registered on government procurement platforms IFMIS and PPIP</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" /> Headquartered at Ongata Business Centre, Magadi Road, Ongata Rongai</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative aspect-[4/3]">
                <Image 
                  src="/images/building-crane.jpg" 
                  alt="Building construction site with tower cranes in the Nairobi area" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-brand-gold transition-colors shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-brand-navy">Our Vision</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                To become the leading construction and infrastructure delivery partner for government, development agencies and private clients in Kenya and across Africa.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-brand-gold transition-colors shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-brand-navy">Our Mission</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                To deliver timely, efficient and value-driven construction services, from consultancy to completed structures, through ethical practice, technical excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Core Values</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What guides every project we take on</h2>
            <p className="text-slate-300 text-base">Five core principles embedded into our procurement, engineering and site delivery.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 rounded-xl bg-brand-navy-card border border-slate-700/80 space-y-2">
              <div className="text-amber-400 font-bold text-sm tracking-wider">01</div>
              <h3 className="text-lg font-bold text-white">Integrity</h3>
              <p className="text-slate-300 text-sm leading-relaxed">We do the right thing, honestly and transparently, on every single contract.</p>
            </div>
            <div className="p-6 rounded-xl bg-brand-navy-card border border-slate-700/80 space-y-2">
              <div className="text-amber-400 font-bold text-sm tracking-wider">02</div>
              <h3 className="text-lg font-bold text-white">Professionalism</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Qualified people, sound engineering methods and respect for clients and communities.</p>
            </div>
            <div className="p-6 rounded-xl bg-brand-navy-card border border-slate-700/80 space-y-2">
              <div className="text-amber-400 font-bold text-sm tracking-wider">03</div>
              <h3 className="text-lg font-bold text-white">Efficiency</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Well-planned works that save time and cost without ever cutting corners.</p>
            </div>
            <div className="p-6 rounded-xl bg-brand-navy-card border border-slate-700/80 space-y-2">
              <div className="text-amber-400 font-bold text-sm tracking-wider">04</div>
              <h3 className="text-lg font-bold text-white">Innovation</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Digital tools and modern site methods that improve quality, speed and progress reporting.</p>
            </div>
            <div className="p-6 rounded-xl bg-brand-navy-card border border-slate-700/80 space-y-2">
              <div className="text-amber-400 font-bold text-sm tracking-wider">05</div>
              <h3 className="text-lg font-bold text-white">Compliance</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Full adherence to NCA, KRA, NEMA, OSHA and public procurement requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative aspect-[4/3]">
              <Image 
                src="/images/workers-ppe.jpg" 
                alt="Construction team observing safety procedures on a Kenyan site" 
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Delivery Discipline
              </div>
              <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">How we work</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-brand-navy text-base">Engineering-led delivery</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Structural design, site supervision and quality control are led by a qualified civil and structural engineer.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-brand-navy text-base">Digital project management</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">We track progress and report from site in real time, so clients and funders always know where the project stands.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-brand-navy text-base">Cost-effective, timely delivery</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Accurate BOQs, realistic programmes and disciplined site management keep projects on budget and on schedule.</p>
                </div>
              </div>
              <div className="pt-2">
                <Link href="/team" className="btn-gold inline-flex text-sm">
                  Meet the Directors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">Why Jortin</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            The company is young. The people leading the work are not. Karithi John, Managing Director, holds a Master&apos;s degree in Strategic Planning and leads planning, client relationships and tender writing. Eng. Martin Mutuma, Technical Director, is a civil and structural engineer trained at JKUAT. He leads technical quality and site supervision.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            You deal with the directors, not only a rotating foreman. The person who plans the work and the engineer who checks the structure are the people you can reach. If an assignment later moves from advice into construction, the same team stays accountable. We would rather give an honest programme, and flag a delay early, than promise a handover date the site cannot support.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            We would rather narrow a scope that sits outside our NCA 8 road works and water works classes than oversell a class we do not hold. Designs and methods are written for Kenyan site conditions. Because we also build, we have a reason to care about material quality, drainage, and what happens after handover.
          </p>
          <Link href="/team" className="btn-gold inline-flex text-sm">
            Meet the Directors
          </Link>
        </div>
      </section>

      <section id="compliance" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">Registration and compliance</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              These are the declarations we stand behind. Certificates and supporting documents are shared with procurement teams on request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, title: 'National Construction Authority', body: 'Registered for road works and water works, class NCA 8. We do not claim NCA 5 or a building-works class.' },
              { icon: CheckCircle2, title: 'Tax compliance', body: 'Tax compliant with the Kenya Revenue Authority.' },
              { icon: FileCheck, title: 'Public procurement', body: 'Registered to supply national and county government, including IFMIS and PPIP.' },
              { icon: Building, title: 'Ownership', body: 'A Kenyan-owned construction company, managed in Kenya.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-navy">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">
                    {item.body}
                    {item.title === 'National Construction Authority' ? (
                      <>
                        {' '}
                        Registration can be checked on the{' '}
                        <a href="https://nca.go.ke" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-navy hover:text-amber-800">
                          NCA contractor search portal
                        </a>
                        .
                      </>
                    ) : null}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <HardHat className="w-6 h-6 text-amber-400" />
              <h3 className="text-2xl font-bold">Sites</h3>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              Work on site follows NEMA environmental guidance and OSHA occupational health and safety standards. Personal protective equipment is required on every Jortin site.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 text-center max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">Documents on request</h3>
            <p className="text-slate-700 text-base">
              Certificates are shared with procurement officers and evaluation committees when they ask. Full certificate scans are not published on this website.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="/contact?enquiry=documents" className="btn-gold">
                Request Documents
              </Link>
              <a href="mailto:jortinlimited@gmail.com" className="btn-outline-navy">
                <Mail className="w-4 h-4" />
                Email jortinlimited@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCTA />
    </>
  );
}
