import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, FileCheck, Building, CheckCircle2, HardHat, Mail } from 'lucide-react';
import CopyButton from '@/components/CopyButton';
import ClosingCTA from '@/components/ClosingCTA';

export const metadata: Metadata = {
  title: 'NCA 8 Registered Contractor: Roads & Water | Jortin',
  description: 'Jortin Limited is NCA 8 registered for Road Works and Water Works, KRA tax compliant and registered on IFMIS and PPIP. Documents available on request.',
  alternates: {
    canonical: 'https://www.jortinlimited.co.ke/compliance',
  },
  openGraph: {
    title: 'Registration & Compliance | Jortin Limited',
    description: 'NCA 8 Road Works and Water Works registration, KRA tax compliance and procurement platform registration. Verified and current.',
    url: 'https://www.jortinlimited.co.ke/compliance',
    images: ['/images/hero-home-bg.jpg'],
  },
};

export default function CompliancePage() {
  return (
    <>
      {/* HERO */}
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
              Public and donor-funded procurement depends on verified documents. Jortin Limited keeps its registrations current and makes them available to procurement teams on request, so your evaluation is straightforward and your audit trail is clean.
            </p>
          </div>
        </div>
      </section>

      {/* COMPLIANCE DETAILS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* NCA TABLE */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded">Regulator Verified</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-2">National Construction Authority (NCA) Registration</h2>
              <p className="text-slate-600 text-sm mt-1">Jortin Limited is registered with the National Construction Authority in the following official contractor categories:</p>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 font-bold text-brand-navy">
                  <tr>
                    <th scope="col" className="px-6 py-4">Category</th>
                    <th scope="col" className="px-6 py-4">Class</th>
                    <th scope="col" className="px-6 py-4">Registration No.</th>
                    <th scope="col" className="px-6 py-4">Issued</th>
                    <th scope="col" className="px-6 py-4">Valid Until</th>
                    <th scope="col" className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
                  <tr className="hover:bg-slate-50/80">
                    <td className="px-6 py-4 font-bold text-brand-navy">Road Works</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-amber-100 text-amber-800 font-bold text-xs">NCA 8</span></td>
                    <td className="px-6 py-4 font-mono font-semibold">95311/R/0925</td>
                    <td className="px-6 py-4">2 September 2025</td>
                    <td className="px-6 py-4 font-semibold text-emerald-700">31 July 2028</td>
                    <td className="px-6 py-4 text-right">
                      <CopyButton textToCopy="95311/R/0925" label="Copy Reg No." />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="px-6 py-4 font-bold text-brand-navy">Water Works</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-amber-100 text-amber-800 font-bold text-xs">NCA 8</span></td>
                    <td className="px-6 py-4 font-mono font-semibold">95311/W/0925</td>
                    <td className="px-6 py-4">2 September 2025</td>
                    <td className="px-6 py-4 font-semibold text-emerald-700">31 July 2028</td>
                    <td className="px-6 py-4 text-right">
                      <CopyButton textToCopy="95311/W/0925" label="Copy Reg No." />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500">
              Registration status can be independently verified on the official NCA Contractor Search Portal at <a href="https://nca.go.ke" target="_blank" rel="noopener noreferrer" className="underline text-brand-navy">nca.go.ke</a>.
            </p>
          </div>

          {/* THREE COLUMNS: COMPANY REG, KRA, PROCUREMENT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Company Reg */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Company Registration</h3>
              <div className="text-sm space-y-1.5 text-slate-700">
                <div><span className="text-slate-500">Legal Name:</span> <strong>Jortin Limited</strong></div>
                <div><span className="text-slate-500">Company No.:</span> <strong className="font-mono">PVT-GYU53RVX</strong></div>
                <div><span className="text-slate-500">Incorporation Date:</span> <strong>5 February 2025</strong></div>
                <div><span className="text-slate-500">Ownership:</span> <strong>Fully Kenyan-owned &amp; managed</strong></div>
              </div>
              <div className="pt-1">
                <CopyButton textToCopy="PVT-GYU53RVX" label="Copy Company No." />
              </div>
            </div>

            {/* Tax Compliance */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Tax Compliance (KRA)</h3>
              <div className="text-sm space-y-1.5 text-slate-700">
                <div><span className="text-slate-500">Status:</span> <strong className="text-emerald-700 font-bold">Valid &amp; Current</strong></div>
                <div><span className="text-slate-500">Valid Until:</span> <strong>26 August 2027</strong></div>
                <p className="text-xs text-slate-600 mt-2">Jortin Limited holds an active Tax Compliance Certificate issued by the Kenya Revenue Authority.</p>
              </div>
            </div>

            {/* Procurement Platforms */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Procurement Platforms</h3>
              <div className="text-sm space-y-1.5 text-slate-700">
                <div><span className="text-slate-500">IFMIS:</span> <strong>Registered Government Supplier</strong></div>
                <div><span className="text-slate-500">PPIP:</span> <strong>Public Procurement Portal Listed</strong></div>
                <p className="text-xs text-slate-600 mt-2">Configured to respond swiftly to national and county government expressions of interest and tenders.</p>
              </div>
            </div>

          </div>

          {/* HSE SECTION */}
          <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <HardHat className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold">Health, Safety and Environment (HSE)</h2>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              Compliance does not stop at paperwork. On site, we work in strict alignment with Kenyan regulatory standards, including <strong className="text-white">NEMA environmental guidelines</strong> and <strong className="text-white">OSHA occupational health and safety standards</strong>. Full Personal Protective Equipment (PPE) is mandatory on every Jortin site from mobilisation to project handover.
            </p>
          </div>

          {/* REQUEST COMPLIANCE DOCUMENTS */}
          <div className="bg-amber-50 rounded-2xl p-8 sm:p-12 border border-amber-200 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">Request compliance documents</h2>
            <p className="text-slate-700 text-base">
              Procurement officers, project managers and tender evaluation committees can request verified copies of our certificates, company registration documents and CR12 for evaluation.
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
