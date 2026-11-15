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

const featuredHomeServices = [
  {
    slug: 'consultancy',
    title: 'Consultancy & Design',
    summary:
      'Feasibility studies, accurate BOQs, structural design (BS 8110 / Eurocode 2) and tender-ready documents before breaking ground.',
    image: '/images/consultancy-design.jpg',
    alt: 'Engineer reviewing structural drawings and a bill of quantities',
  },
  {
    slug: 'structural',
    title: 'Structural & Civil Works',
    summary:
      'Pad and strip foundations, reinforced concrete columns, beams, slabs, structural steel and rigorous formwork inspection.',
    image: '/images/column-formwork.jpg',
    alt: 'Reinforced concrete columns in formwork on a building site',
  },
  {
    slug: 'building',
    title: 'Building Construction',
    summary:
      'Residential homes, commercial blocks, renovations, walling, partitioning and high-standard interior and exterior finishes.',
    image: '/images/house-structure.jpg',
    alt: 'Two-storey block building under construction, with scaffolding',
  },
  {
    slug: 'roads',
    title: 'Road Works & Drainage',
    summary:
      'NCA 8 registered road rehabilitation, earthworks, grading, access driveways, drainage culverts and road safety structures.',
    image: '/images/road-works.jpg',
    alt: 'Road rehabilitation works with earthmoving equipment in Kenya',
  },
  {
    slug: 'water',
    title: 'Water & Sanitation',
    summary:
      'Borehole drilling, solar and pump equipping, water reticulation, storage towers and robust sanitation systems across Kenya.',
    image: '/images/water-tower.jpg',
    alt: 'Steel water tower and tank on a planted site',
  },
  {
    slug: 'electrical',
    title: 'Electrical & Mechanical',
    summary:
      'Building wiring, fittings, plumbing installations and MEP coordination integrated to eliminate rework and clashes.',
    image: '/images/electrical-mechanical.jpg',
    alt: 'Electrician installing wiring and fittings in a new building',
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-brand-navy text-white pt-20 pb-28 overflow-hidden min-h-[640px] flex items-center">
        {/* Background Image with Contrast Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-home-bg.jpg" 
            alt="Construction site in Kenya with multi-storey concrete framework and tower crane" 
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient: deep dark navy behind text on the left, translucent on the right to reveal the construction site */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071527]/95 via-[#0b1f3b]/75 to-[#0b1f3b]/30" />
          <div className="absolute inset-0 bg-slate-950/25" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
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
      <section id="services" className="py-20 bg-slate-50 border-y border-slate-200">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:gap-0 max-md:divide-y max-md:divide-slate-200">
            {featuredHomeServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover-lift border border-slate-200 flex flex-col h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 max-md:rounded-none max-md:border-0 max-md:shadow-none max-md:py-8 max-md:first:pt-0"
              >
                <div className="relative h-48 w-full">
                  <Image src={item.image} alt={item.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy group-hover:text-amber-800 transition-colors">{item.title}</h3>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">{item.summary}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy group-hover:text-amber-600 pt-2">
                    Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
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

      {/* SECTION 5: TRUSTED ACROSS SECTORS (WITH CITY-STREET.JPG) */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400">
                PROVEN ACROSS SECTORS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Trusted across public, development and private sectors
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                From public infrastructure under IFMIS and PPIP procurement standards to development partners and private property developers, our engineering leadership delivers projects that stand up to inspection.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200">Public infrastructure delivered under IFMIS and PPIP standards</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200">Donor and NGO projects with transparent M&amp;E and photographic reporting</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200">Commercial and residential structures built to exact engineering specs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200">Direct supervision by registered directors on every active site</span>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                  <span>Work With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 aspect-[4/3] lg:aspect-[16/11]">
              <Image 
                src="/images/city-street.jpg" 
                alt="Magadi Road civil works and infrastructure supervised in Ongata Rongai, Kenya"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO WE BUILD FOR */}
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
                  Procurement teams need certainty before they award a contract. Jortin Limited is an <strong className="text-brand-navy">NCA 8 contractor for road works and water works</strong>, holds a current <strong className="text-brand-navy">KRA tax compliance certificate</strong>, and is registered for public procurement. Certificates are available on request.
                </p>
                <p className="text-slate-600 text-sm">
                  Our documents are in order, current and available on request, so your evaluation moves faster.
                </p>
              </div>
              <div className="lg:col-span-1 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link href="/about#compliance" className="btn-gold text-center">
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

      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">Led by experienced directors</h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Jortin Limited is led by Karithi John, Managing Director, with more than 20 years of experience and a Master&apos;s in Strategic Planning, and Eng. Martin Mutuma, Technical Director, a JKUAT-trained civil and structural engineer with more than 8 years of practice. Together they bring over 30 years of combined experience to every contract.
          </p>
          <Link href="/team" className="inline-flex items-center gap-2 font-bold text-brand-navy hover:text-amber-600">
            <span>Meet the Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
