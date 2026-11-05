import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Target, CheckCircle2, Shield, Award, Zap, Lightbulb, Scale } from 'lucide-react';
import ClosingCTA from '@/components/ClosingCTA';

export const metadata: Metadata = {
  title: 'About Us | Kenyan-Owned Construction Firm | Jortin',
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
            alt="Nairobi skyline viewed from the south, the region Jortin Limited serves" 
            fill
            className="object-cover opacity-25 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy/95 to-brand-navy/85" />
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
              Jortin Limited is a fully Kenyan-owned and managed construction company headquartered in Ongata Rongai, Kajiado County. We provide complete construction solutions, from consultancy and design through structural works, building, roads and water works, for clients who need a contractor that is technically strong, fully compliant and dependable on delivery.
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
                Jortin Limited was incorporated in Kenya on 5 February 2025 (Company No. PVT-GYU53RVX). The company is new; the experience behind it is not. Our directors bring more than 30 years of combined experience in strategic planning, civil and structural engineering, and project delivery.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We were founded on a simple observation: clients in Kenya, whether a county government, an NGO or a private developer, too often have to manage separate consultants, contractors and suppliers who do not talk to each other. Jortin brings those disciplines together, so the person who designs your structure is part of the team that builds and supervises it.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy">At a glance</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" /> Fully Kenyan-owned and managed</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" /> NCA 8 registered for Road Works (95311/R/0925) and Water Works (95311/W/0925)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" /> KRA Tax Compliance Certificate valid to 26 August 2027</li>
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

      {/* CLOSING CTA */}
      <ClosingCTA />
    </>
  );
}
