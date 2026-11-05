import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  HardHat, 
  FileText, 
  Award, 
  TrendingUp, 
  Check, 
  Building2, 
  Users, 
  Layers 
} from 'lucide-react';
import ClosingCTA from '@/components/ClosingCTA';

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-brand-navy text-white pt-20 pb-28 overflow-hidden min-h-[640px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-home-bg.jpg" 
            alt="Construction site in Kenya with engineers in safety gear reviewing works" 
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy/95 to-brand-navy/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-400 pulse-badge" />
              Construction Consultancy · Structural &amp; Civil Works · Building · Roads · Water Works
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Engineering-led construction for Kenya's <span className="text-brand-gold">roads, water</span> and <span className="text-brand-gold">buildings</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
              Jortin Limited is a fully Kenyan-owned construction company based in Ongata Rongai, Kajiado County. We take projects from first sketch to final handover, with a qualified civil and structural engineer guiding every stage. Government agencies, NGOs, development partners and private clients rely on us for work that is compliant, well documented and delivered on time.
            </p>

            {/* Hero Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/contact" className="btn-gold text-base">
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-outline-white text-base">
                Explore Our Services
              </Link>
            </div>

            {/* Trust Strip below hero buttons */}
            <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                NCA 8 Road Works
              </span>
              <span className="inline-flex items-center gap-1.5 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                NCA 8 Water Works
              </span>
              <span className="inline-flex items-center gap-1.5 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                KRA Tax Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                Registered on IFMIS &amp; PPIP
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-brand-dark text-white py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl lg:text-4xl font-extrabold text-amber-400">30+</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Years Combined Experience</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl lg:text-4xl font-extrabold text-white">NCA 8</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Road &amp; Water Works Registered</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl lg:text-4xl font-extrabold text-amber-400">9</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Integrated Service Lines</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl lg:text-4xl font-extrabold text-white">100%</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Kenyan Owned &amp; Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ONE PARTNER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Left */}
            <div className="space-y-6">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Lifecycle Capability
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
                One partner, from consultancy to completed structures
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Most projects fail in the gaps between design, procurement and site work. We close those gaps. Our team plans, designs, builds and supervises under one roof, so you deal with one accountable contractor and one clear line of communication.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether you are a county department rehabilitating access roads, an NGO drilling a borehole for a community, or a developer putting up a commercial block, you get the same disciplined approach: sound engineering, honest costing and transparent reporting.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    Qualified civil and structural engineer guiding every stage from BOQ to handover
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    Zero hand-off disconnects between architectural design, costing and construction
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    Auditable compliance with NCA, KRA, NEMA and OSHA standards
                  </span>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center gap-2 font-bold text-brand-navy hover:text-amber-600 transition-colors">
                  <span>About Jortin Limited</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Image Right with Floating Badge */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] relative">
                <Image 
                  src="/images/rebar-worker.jpg" 
                  alt="Steel reinforcement cages prepared for a reinforced concrete foundation" 
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 sm:left-6 bg-brand-gold text-brand-navy p-5 rounded-xl shadow-xl max-w-xs border border-amber-300">
                <div className="text-2xl font-black">30+ Years</div>
                <div className="text-xs font-bold leading-snug mt-1">
                  Combined professional experience in structural engineering and strategic project delivery.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DO (SERVICES) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Services built around your project
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Nine integrated service lines, built around the way infrastructure is actually delivered in Kenya.
            </p>
          </div>

          {/* Services Grid (6 Featured) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Consultancy & Design */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover-lift border border-slate-200 flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/images/consultancy-design.jpg" alt="Engineer reviewing structural drawings and a bill of quantities" fill className="object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">01 · Engineering</span>
                  <h3 className="text-xl font-bold text-brand-navy mt-1">Consultancy &amp; Design</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Feasibility studies, accurate BOQs, structural design (BS 8110 / Eurocode 2) and tender-ready documents before breaking ground.
                  </p>
                </div>
                <Link href="/services#consultancy" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-amber-600 pt-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 2. Structural & Civil Works */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover-lift border border-slate-200 flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/images/structural-civil.jpg" alt="Reinforcement cages for a reinforced concrete foundation in Kenya" fill className="object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">02 · Substructure &amp; Frame</span>
                  <h3 className="text-xl font-bold text-brand-navy mt-1">Structural &amp; Civil Works</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Pad and strip foundations, reinforced concrete columns, beams, slabs, structural steel and rigorous formwork inspection.
                  </p>
                </div>
                <Link href="/services#structural" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-amber-600 pt-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 3. Building Construction */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover-lift border border-slate-200 flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/images/building-construction.jpg" alt="Multi-storey building under construction with tower cranes" fill className="object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">03 · Commercial &amp; Residential</span>
                  <h3 className="text-xl font-bold text-brand-navy mt-1">Building Construction</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Residential homes, commercial blocks, renovations, walling, partitioning and high-standard interior and exterior finishes.
                  </p>
                </div>
                <Link href="/services#building" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-amber-600 pt-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 4. Road Works & Civil Works */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover-lift border border-slate-200 flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/images/road-works.jpg" alt="Road rehabilitation works with earthmoving equipment in Kenya" fill className="object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">04 · NCA 8 Road Works</span>
                  <h3 className="text-xl font-bold text-brand-navy mt-1">Road Works &amp; Drainage</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    NCA 8 registered road rehabilitation, earthworks, grading, access driveways, drainage culverts and road safety structures.
                  </p>
                </div>
                <Link href="/services#roads" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-amber-600 pt-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 5. Water & Sanitation */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover-lift border border-slate-200 flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/images/water-sanitation.jpg" alt="Borehole drilling rig at a community water project in Kenya" fill className="object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">05 · NCA 8 Water Works</span>
                  <h3 className="text-xl font-bold text-brand-navy mt-1">Water &amp; Sanitation</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Borehole drilling, solar and pump equipping, water reticulation, storage towers and robust sanitation systems across Kenya.
                  </p>
                </div>
                <Link href="/services#water" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-amber-600 pt-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 6. Electrical & Mechanical */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover-lift border border-slate-200 flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/images/electrical-mechanical.jpg" alt="Electrician installing wiring and fittings in a new building" fill className="object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">06 · Building Services</span>
                  <h3 className="text-xl font-bold text-brand-navy mt-1">Electrical &amp; Mechanical</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Building wiring, fittings, plumbing installations and MEP coordination integrated to eliminate rework and clashes.
                  </p>
                </div>
                <Link href="/services#electrical" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-amber-600 pt-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-gold inline-flex text-base px-8">
              <span>View All 9 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CLIENTS CHOOSE JORTIN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Our Standard
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              A partner you can trust on site and on paper
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Why government agencies, development partners, NGOs and private developers award contracts to Jortin Limited.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 hover-lift space-y-3">
              <div className="w-12 h-12 rounded-lg bg-brand-navy text-amber-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Engineering Leadership</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every project is guided by a qualified civil and structural engineer, so structural drawings, reinforcement details and design intent carry through to site.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 hover-lift space-y-3">
              <div className="w-12 h-12 rounded-lg bg-brand-navy text-amber-400 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Full Lifecycle Capability</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Consultancy, design, construction, supervision and maintenance delivered by one accountable team, with no blame-shifting or hand-off gaps.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 hover-lift space-y-3">
              <div className="w-12 h-12 rounded-lg bg-brand-navy text-amber-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Compliance You Can Audit</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                NCA, KRA, NEMA and OSHA requirements built into how we work, with clean documentation that stands up to scrutiny from donors and government audit teams.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 hover-lift space-y-3">
              <div className="w-12 h-12 rounded-lg bg-brand-navy text-amber-400 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Digital Project Reporting</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Real-time site updates, progress tracking and photographic milestones keep you informed without chasing site foremen for updates.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 hover-lift space-y-3">
              <div className="w-12 h-12 rounded-lg bg-brand-navy text-amber-400 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Value Without Shortcuts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Careful planning and honest BOQs that save time and money without compromising on reinforcement bar grades, concrete ratios or safety.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 hover-lift space-y-3">
              <div className="w-12 h-12 rounded-lg bg-brand-navy text-amber-400 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Direct Director Access</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                You deal directly with Karithi John (Managing Director) and Eng. Martin Mutuma (Technical Director), ensuring prompt decisions and absolute accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO WE BUILD FOR */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Target Sectors
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Who we build for
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              We understand the specific procurement rules, documentation standards and reporting needs of each client category.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-white">Government Agencies</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                National and county institutions delivering public roads, community water systems and public buildings through IFMIS and PPIP.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-white">NGOs &amp; Non-Profits</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Organisations working in education, health, water and agriculture that need dependable field delivery and transparent reporting.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-white">Development Partners</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Donor-funded programmes demanding international procurement standards, strict financial governance and robust M&amp;E support.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-white">Private Sector</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Developers, commercial businesses and property owners investing in residential homes, commercial blocks and private infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMPLIANCE & TENDER READY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 rounded-2xl p-8 sm:p-12 border border-amber-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-3 py-1 rounded-full">
                  Tender Ready
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  Registered, compliant and ready to tender
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  Procurement teams need certainty before they award a contract. Jortin Limited is registered with the National Construction Authority as an <strong className="text-brand-navy">NCA 8 contractor for Road Works and Water Works</strong>, valid until 31 July 2028. We hold a current <strong className="text-brand-navy">KRA Tax Compliance Certificate</strong> (valid to 26 August 2027) and are registered on government procurement platforms, including <strong className="text-brand-navy">IFMIS and PPIP</strong>.
                </p>
                <p className="text-slate-600 text-sm">
                  Our documents are in order, current and available on request, so your evaluation moves faster.
                </p>
              </div>
              <div className="lg:col-span-1 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link href="/compliance" className="btn-gold text-center">
                  See Registration &amp; Compliance
                </Link>
                <Link href="/contact?enquiry=documents" className="btn-outline-navy text-center">
                  Request Certificates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TRUSTED BY CLIENTS (LOGO GRID) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Trusted by clients across the industry
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Property developers, consulting engineering firms, architectural studios and commercial enterprises rely on our delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center text-center font-bold text-slate-800 text-sm h-28 hover-lift">
              <Image src="/images/client-periurban.png" alt="Periurban Properties logo, a client of Jortin Limited" width={160} height={60} className="max-h-16 w-auto object-contain" />
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center text-center font-bold text-slate-800 text-sm h-28 hover-lift">
              <Image src="/images/client-dapan.png" alt="Dapan Engineering Limited logo, a client of Jortin Limited" width={160} height={60} className="max-h-16 w-auto object-contain" />
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center text-center font-bold text-slate-800 text-sm h-28 hover-lift">
              <Image src="/images/client-bn-architects.png" alt="BN Architects logo, a client of Jortin Limited" width={160} height={60} className="max-h-16 w-auto object-contain" />
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center text-center font-bold text-slate-800 text-sm h-28 hover-lift">
              <Image src="/images/client-art-tic.png" alt="ART.TIC Studio logo, a client of Jortin Limited" width={160} height={60} className="max-h-16 w-auto object-contain" />
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center text-center font-bold text-slate-800 text-sm h-28 hover-lift">
              <Image src="/images/client-kirrn.png" alt="KIRRN LTD logo, a client of Jortin Limited" width={160} height={60} className="max-h-16 w-auto object-contain" />
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/clients" className="inline-flex items-center gap-2 font-bold text-brand-navy hover:text-amber-600 transition-colors">
              <span>Meet Our Clients &amp; Sector Partners</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCTA />
    </>
  );
}
