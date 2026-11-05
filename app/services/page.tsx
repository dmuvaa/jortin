import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import ClosingCTA from '@/components/ClosingCTA';

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
      {/* HERO */}
      <section className="relative bg-brand-navy text-white pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/hero-home-bg.jpg" alt="Construction background" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Our Services
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Construction services from <span className="text-brand-gold">consultancy to maintenance</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Infrastructure is delivered in stages, and every stage affects the next. Our nine service lines cover the full project lifecycle, from feasibility studies and structural design to roads, water systems, buildings and long-term maintenance. Engage us for one stage or the whole project; either way, you get engineering-led delivery and transparent reporting.
            </p>
          </div>

          {/* Quick Jump Links Pill Bar */}
          <div className="pt-8">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Jump to a service line:</div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <a href="#consultancy" className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-brand-navy transition-colors">Consultancy &amp; Design</a>
              <a href="#structural" className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-brand-navy transition-colors">Structural &amp; Civil Works</a>
              <a href="#building" className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-brand-navy transition-colors">Building Construction</a>
              <a href="#roads" className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-brand-navy transition-colors">Road Works &amp; Civil Works</a>
              <a href="#water" className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-brand-navy transition-colors">Water &amp; Sanitation</a>
              <a href="#electrical" className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-brand-navy transition-colors">Electrical &amp; Mechanical</a>
              <a href="#project-management" className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-brand-navy transition-colors">Project Management</a>
              <a href="#procurement" className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-brand-navy transition-colors">Procurement &amp; Maintenance</a>
              <a href="#consulting" className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-brand-navy transition-colors">Consulting &amp; Advisory</a>
            </div>
          </div>
        </div>
      </section>

      {/* 9 SERVICES DETAILED SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* 01 Consultancy & Design */}
          <div id="consultancy" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
            <div className="space-y-5">
              <div className="text-3xl font-black text-amber-500">01</div>
              <h2 className="text-3xl font-extrabold text-brand-navy">Consultancy &amp; Design</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Good projects are won or lost before ground is broken. Our consultancy team turns ideas into costed, buildable and tender-ready plans. We combine structural engineering expertise with practical site experience, so designs are efficient, compliant and realistic to construct.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Building consultancy, feasibility studies and costing (BOQ)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Architectural design coordination</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Structural engineering and design (BS 8110 / Eurocode 2)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Quantity surveying and cost estimation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Tender writing and bid documentation</li>
              </ul>
              <div className="pt-2">
                <Link href="/contact?service=consultancy" className="btn-gold text-sm">
                  Request a consultancy quote
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative aspect-[4/3]">
                <Image src="/images/consultancy-design.jpg" alt="Engineer reviewing structural drawings and a bill of quantities" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* 02 Structural & Civil Works */}
          <div id="structural" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative aspect-[4/3]">
                <Image src="/images/structural-civil.jpg" alt="Reinforcement cages for a reinforced concrete foundation in Kenya" fill className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-5">
              <div className="text-3xl font-black text-amber-500">02</div>
              <h2 className="text-3xl font-extrabold text-brand-navy">Structural &amp; Civil Works</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                The structure is the part of a building you cannot afford to get wrong. We build foundations and reinforced concrete frames exactly to design, with engineer-led checks on reinforcement, formwork and concrete at every critical stage. Clients in Ongata Rongai, Kajiado and across Kenya trust us for structural work that is safe, durable and properly documented.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Foundations: pad, strip, strap and combined footings</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Reinforced concrete columns, beams, slabs and staircases</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Structural steel works and engineered formwork</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Site investigation and geotechnical assessment</li>
              </ul>
              <div className="pt-2">
                <Link href="/contact?service=structural" className="btn-gold text-sm">
                  Request a structural works quote
                </Link>
              </div>
            </div>
          </div>

          {/* 03 Building Construction */}
          <div id="building" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
            <div className="space-y-5">
              <div className="text-3xl font-black text-amber-500">03</div>
              <h2 className="text-3xl font-extrabold text-brand-navy">Building Construction</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                From family homes to commercial blocks, we deliver buildings with quality workmanship and clean finishes. Our team manages masonry, finishing and coordination of specialist trades, so you receive a building that matches the drawings and is ready to occupy.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Residential and commercial buildings</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Masonry and walling (GFL and standard block)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Renovations, extensions and partitioning</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Interior and exterior finishing</li>
              </ul>
              <div className="pt-2">
                <Link href="/contact?service=building" className="btn-gold text-sm">
                  Request a building quote
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative aspect-[4/3]">
                <Image src="/images/building-construction.jpg" alt="Multi-storey building under construction with tower cranes" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* 04 Road Works & Civil Works */}
          <div id="roads" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative aspect-[4/3]">
                <Image src="/images/road-works.jpg" alt="Road rehabilitation works with earthmoving equipment in Kenya" fill className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-5">
              <div className="text-3xl font-black text-amber-500">04</div>
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded">NCA 8 Road Works Registered</div>
              <h2 className="text-3xl font-extrabold text-brand-navy">Road Works &amp; Civil Works</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                As an NCA 8 registered road works contractor, we build and rehabilitate roads that keep people and goods moving. We handle earthworks, grading and drainage with the same care as the running surface, because good drainage is what makes a Kenyan road last through the rains.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Road construction and rehabilitation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Earthworks, excavation and grading</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Drainage systems, stone pitching and culverts</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Access roads, driveways and perimeter pavements</li>
              </ul>
              <div className="pt-2">
                <Link href="/contact?service=roads" className="btn-gold text-sm">
                  Request a road works quote
                </Link>
              </div>
            </div>
          </div>

          {/* 05 Water & Sanitation */}
          <div id="water" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
            <div className="space-y-5">
              <div className="text-3xl font-black text-amber-500">05</div>
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded">NCA 8 Water Works Registered</div>
              <h2 className="text-3xl font-extrabold text-brand-navy">Water &amp; Sanitation</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Reliable water changes lives in schools, health centres, homes and communities. As an NCA 8 registered water works contractor, we drill and equip boreholes, install reticulation and storage, and build sanitation infrastructure designed for long service in Kenyan conditions.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Borehole drilling, solar / electric pump equipping</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Water reticulation networks and community water kiosks</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Elevated steel and masonry storage tank installation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Sanitation, septic systems and drainage infrastructure</li>
              </ul>
              <div className="pt-2">
                <Link href="/contact?service=water" className="btn-gold text-sm">
                  Request a water works quote
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative aspect-[4/3]">
                <Image src="/images/water-sanitation.jpg" alt="Borehole drilling rig at a community water project in Kenya" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* 06 Electrical & Mechanical */}
          <div id="electrical" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative aspect-[4/3]">
                <Image src="/images/electrical-mechanical.jpg" alt="Electrician installing wiring and fittings in a new building" fill className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-5">
              <div className="text-3xl font-black text-amber-500">06</div>
              <h2 className="text-3xl font-extrabold text-brand-navy">Electrical &amp; Mechanical</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Building services must be safe, coordinated and installed in the right sequence. We deliver and coordinate electrical and mechanical installations alongside the main works, avoiding clashes, rework and delays.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Electrical wiring, distribution boards and fittings</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Plumbing installations and internal routing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Mechanical services coordination</li>
              </ul>
              <div className="pt-2">
                <Link href="/contact?service=electrical" className="btn-gold text-sm">
                  Request an M&amp;E quote
                </Link>
              </div>
            </div>
          </div>

          {/* 07 Project Management & Supervision */}
          <div id="project-management" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
            <div className="space-y-5">
              <div className="text-3xl font-black text-amber-500">07</div>
              <h2 className="text-3xl font-extrabold text-brand-navy">Project Management &amp; Supervision</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Disciplined supervision is what keeps a project on time, on budget and safe. We manage programmes, contractors and quality on site, and report progress digitally so clients and funders have a real-time view. Health, safety and environmental compliance are built in from day one.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Site supervision and contract administration</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Programme of works and CPM scheduling</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Subcontractor coordination and quality control</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> HSE and PPE compliance (NEMA / OSHA standards)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Digital project tracking and progress reporting</li>
              </ul>
              <div className="pt-2">
                <Link href="/contact?service=project-management" className="btn-gold text-sm">
                  Request a project management quote
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative aspect-[4/3]">
                <Image src="/images/project-management.jpg" alt="Site supervisors in PPE reviewing the programme of works" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* 08 Procurement & Maintenance */}
          <div id="procurement" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative aspect-[4/3]">
                <Image src="/images/procurement-maintenance.jpg" alt="Construction materials stacked and ready for delivery to site" fill className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-5">
              <div className="text-3xl font-black text-amber-500">08</div>
              <h2 className="text-3xl font-extrabold text-brand-navy">Procurement &amp; Maintenance</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We source construction materials and PPE reliably, and we stay with you after handover. Planned maintenance protects your investment and keeps buildings, roads and water systems performing as intended.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Verified construction materials procurement</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Certified PPE supply and site safety gear</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Post-construction snagging and defect liability care</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Planned preventive maintenance contracts</li>
              </ul>
              <div className="pt-2">
                <Link href="/contact?service=procurement" className="btn-gold text-sm">
                  Request a procurement or maintenance quote
                </Link>
              </div>
            </div>
          </div>

          {/* 09 Consulting & Project Management */}
          <div id="consulting" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-slate-100">
            <div className="space-y-5">
              <div className="text-3xl font-black text-amber-500">09</div>
              <h2 className="text-3xl font-extrabold text-brand-navy">Consulting &amp; Project Management</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Beyond construction, we help organisations plan, bid and deliver better. Drawing on our Managing Director's background in strategic planning, we support institutions, contractors and NGOs with advisory services that strengthen capacity and accountability.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Strategic planning and institutional business advisory</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Public procurement tender writing and bid strategy</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Technical training and workforce capacity building</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Monitoring and evaluation (M&amp;E) framework support</li>
              </ul>
              <div className="pt-2">
                <Link href="/contact?service=consulting" className="btn-gold text-sm">
                  Request a consulting quote
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative aspect-[4/3]">
                <Image src="/images/consulting.jpg" alt="Team planning session for a construction tender and M&E framework" fill className="object-cover" />
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
