import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Projects in Kenya | Jortin Limited',
  description: 'Explore the building, road, water and structural work Jortin Limited delivers for government, NGO and private clients across Kenya.',
  alternates: {
    canonical: 'https://www.jortinlimited.co.ke/projects',
  },
  openGraph: {
    title: 'Our Work | Building, Roads, Water and Structural Projects',
    description: 'See the scope and standard of work Jortin Limited delivers across building, roads, water and structural engineering in Kenya.',
    url: 'https://www.jortinlimited.co.ke/projects',
    images: ['/images/projects/project-building.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-navy text-white pt-20 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Projects &amp; Portfolio
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              The kind of work we deliver, <span className="text-brand-gold">sector by sector</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every project we take on is shaped by its site, its funder and its users. This page shows the type and standard of work we deliver across our four core sectors. Detailed project references, including client contacts where permitted, are available to procurement teams on request.
            </p>
            <p className="text-xs text-slate-400 italic">
              * Images on this page are representative of the type of work we undertake and may include stock or partner photography. Project references are provided on request.
            </p>
          </div>
        </div>
      </section>

      {/* SECTOR SHOWCASE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Building */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded border border-amber-200">
                Sector 01 · Building
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">Building Construction</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Residential and commercial buildings delivered from substructure to finishing. Our building work is led by engineering, so structural integrity, accurate quantities and clean finishes go together.
              </p>
              <div className="space-y-2 pt-2 text-sm text-slate-700">
                <div className="font-bold text-slate-900">Typical Scope:</div>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                  <li>Residential and commercial buildings</li>
                  <li>Renovations, extensions and partitioning</li>
                  <li>Masonry, walling and high-standard finishing</li>
                  <li>Coordination of electrical and plumbing installations</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link href="/services#building" className="text-sm font-bold text-brand-navy hover:text-amber-600 inline-flex items-center gap-1.5">
                  View building capabilities <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative aspect-[4/3]">
              <Image src="/images/projects/project-building.jpg" alt="Representative image of a multi-storey building under construction in Kenya" fill className="object-cover" />
            </div>
          </div>

          {/* Roads */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 border-t border-slate-100">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative aspect-[4/3]">
              <Image src="/images/projects/project-roads.jpg" alt="Representative image of road works and drainage construction on a Kenyan road" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded border border-amber-200">
                Sector 02 · Roads (NCA 8)
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">Roads &amp; Civil Works</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                As an NCA 8 registered road works contractor, we undertake road construction and rehabilitation, access roads and the drainage that protects them. We plan works to keep communities moving and to meet the reporting standards of public and donor clients.
              </p>
              <div className="space-y-2 pt-2 text-sm text-slate-700">
                <div className="font-bold text-slate-900">Typical Scope:</div>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                  <li>Road construction and rehabilitation</li>
                  <li>Earthworks, excavation and grading</li>
                  <li>Drainage systems and culverts</li>
                  <li>Access roads and driveways</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link href="/services#roads" className="text-sm font-bold text-brand-navy hover:text-amber-600 inline-flex items-center gap-1.5">
                  View road works capabilities <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Water */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 border-t border-slate-100">
            <div className="space-y-4">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded border border-amber-200">
                Sector 03 · Water (NCA 8)
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">Water &amp; Sanitation</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Water projects demand technical skill and community sensitivity. As an NCA 8 registered water works contractor, we deliver borehole drilling and equipping, reticulation, storage and sanitation for institutions, communities and private clients.
              </p>
              <div className="space-y-2 pt-2 text-sm text-slate-700">
                <div className="font-bold text-slate-900">Typical Scope:</div>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                  <li>Borehole drilling and equipping (solar &amp; grid power)</li>
                  <li>Water reticulation and distribution plumbing</li>
                  <li>Storage tank towers and cistern installations</li>
                  <li>Sanitation and drainage infrastructure</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link href="/services#water" className="text-sm font-bold text-brand-navy hover:text-amber-600 inline-flex items-center gap-1.5">
                  View water capabilities <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative aspect-[4/3]">
              <Image src="/images/projects/project-water.jpg" alt="Representative image of a borehole with water tanks serving a community in Kenya" fill className="object-cover" />
            </div>
          </div>

          {/* Structural */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 border-t border-slate-100">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative aspect-[4/3]">
              <Image src="/images/projects/project-structural.jpg" alt="Representative image of rebar cages and formwork for a reinforced concrete foundation" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded border border-amber-200">
                Sector 04 · Structural Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">Structural Works</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Structural works are where engineering leadership matters most. Our Technical Director, a JKUAT-trained civil and structural engineer, oversees design and site checks on foundations, reinforced concrete and structural steel.
              </p>
              <div className="space-y-2 pt-2 text-sm text-slate-700">
                <div className="font-bold text-slate-900">Typical Scope:</div>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                  <li>Pad, strip, strap and combined footings</li>
                  <li>Reinforced concrete columns, beams, slabs and staircases</li>
                  <li>Structural steel works and formwork inspections</li>
                  <li>Site investigation and geotechnical assessment</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link href="/services#structural" className="text-sm font-bold text-brand-navy hover:text-amber-600 inline-flex items-center gap-1.5">
                  View structural capabilities <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HOW EVERY PROJECT IS DELIVERED (6 STEPS) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">How every project is delivered</h2>
            <p className="text-slate-600 text-base">A disciplined 6-stage lifecycle ensuring quality, cost control and safety from day one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-navy text-amber-400 flex items-center justify-center font-bold text-lg">1</div>
              <h3 className="text-lg font-bold text-brand-navy">Brief &amp; Site Visit</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We listen, visit the site, inspect ground conditions and confirm what success looks like with all stakeholders.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-navy text-amber-400 flex items-center justify-center font-bold text-lg">2</div>
              <h3 className="text-lg font-bold text-brand-navy">Design &amp; Costing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Structural design, an honest BOQ with transparent material specifications, and a realistic CPM programme of works.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-navy text-amber-400 flex items-center justify-center font-bold text-lg">3</div>
              <h3 className="text-lg font-bold text-brand-navy">Mobilisation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Verified materials, certified PPE, qualified labour and all statutory approvals in place before breaking ground.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-navy text-amber-400 flex items-center justify-center font-bold text-lg">4</div>
              <h3 className="text-lg font-bold text-brand-navy">Construction &amp; Supervision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Engineer-led quality checks on reinforcement, concrete slump, curing and complete HSE compliance on site.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-navy text-amber-400 flex items-center justify-center font-bold text-lg">5</div>
              <h3 className="text-lg font-bold text-brand-navy">Reporting</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Digital progress updates, photographic milestones and financial reporting for clients, funders and audit teams.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-navy text-amber-400 flex items-center justify-center font-bold text-lg">6</div>
              <h3 className="text-lg font-bold text-brand-navy">Handover &amp; Maintenance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">As-built documentation, formal snagging sign-off, warranty handover and ongoing planned maintenance support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND FOR REFERENCES */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Need project references for a tender evaluation?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">We share detailed references, bills of quantities and technical drawings with procurement committees on request.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/contact?enquiry=references" className="btn-gold">
              Request References
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
