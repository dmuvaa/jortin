import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-24 bg-slate-50 min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 mx-auto flex items-center justify-center font-extrabold text-2xl">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">This page is still under construction.</h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          The page you are looking for has moved or does not exist. Head back to the homepage, explore our services, or call us on <a href="tel:+254722902688" className="font-bold text-brand-navy underline">0722 902 688</a> and we will point you in the right direction.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/" className="btn-gold">
            Back to Home
          </Link>
          <Link href="/services" className="btn-outline-navy">
            View Services
          </Link>
          <Link href="/contact" className="btn-outline-navy">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
