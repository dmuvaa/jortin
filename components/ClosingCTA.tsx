import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function ClosingCTA() {
  return (
    <section className="py-16 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5a93c_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-navy-card border border-slate-700/80 rounded-2xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Planning a building, road or water project?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Share your brief with our engineering team. We will advise on scope, costing and the right approach, then give you clear next steps.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link href="/contact" className="btn-gold w-full sm:w-auto text-center">
              Request a Quote
            </Link>
            <a href="tel:+254722902688" className="btn-outline-white w-full sm:w-auto text-center">
              <Phone className="w-4 h-4 text-amber-400" />
              Call 0722 902 688
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
