import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { MapPin, Mail, Phone, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Request a Construction Quote | Jortin Ongata Rongai',
  description: 'Request a quote from Jortin Limited, Ongata Business Centre, Magadi Road, Ongata Rongai. Call 0722 902 688 or email jortinlimited@gmail.com.',
  alternates: {
    canonical: 'https://www.jortinlimited.co.ke/contact',
  },
  openGraph: {
    title: 'Contact Jortin Limited | Request a Construction Quote',
    description: 'Call, email, WhatsApp or visit us on Magadi Road, Ongata Rongai. Share your brief and get clear next steps from our engineers.',
    url: 'https://www.jortinlimited.co.ke/contact',
    images: ['/images/hero-home-bg.jpg'],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-navy text-white pt-20 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Contact &amp; Quotation
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Request a <span className="text-brand-gold">quote</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Planning a building, road, water or structural project? Share a few details and our engineering team will come back to you with clear next steps, whether that is a site visit, a BOQ or a full proposal.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + DETAILS SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Form Left (7 Cols) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 bg-white rounded-2xl border border-slate-200">Loading quote form...</div>}>
                <QuoteForm />
              </Suspense>
            </div>

            {/* Details Right (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Office Box */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-brand-navy">Contact details</h2>
                
                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-700 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">Office Location</div>
                      <p className="text-slate-600 mt-0.5">Ongata Business Centre, 2nd Floor, Room 23<br />Magadi Road, Ongata Rongai, Kajiado County</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-700 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">Postal Address</div>
                      <p className="text-slate-600 mt-0.5">P.O. Box 654-00511, Ongata Rongai, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-700 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">Phone / WhatsApp</div>
                      <a href="tel:+254722902688" className="text-slate-800 font-semibold hover:text-amber-600 block mt-0.5">+254 722 902 688 (0722 902 688)</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-700 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">Email Address</div>
                      <a href="mailto:jortinlimited@gmail.com" className="text-slate-800 font-semibold hover:text-amber-600 block mt-0.5">jortinlimited@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-700 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">Office Hours</div>
                      <p className="text-slate-600 mt-0.5">Monday to Friday: 8:00 AM – 5:00 PM<br />Saturday: By appointment</p>
                    </div>
                  </div>
                </div>

                {/* Direct Call & WhatsApp Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <a href="tel:+254722902688" className="btn-outline-navy flex-1 text-center text-sm">
                    Call Now
                  </a>
                  <a 
                    href="https://wa.me/254722902688?text=Hello%20Jortin%20Limited%2C%20I%20found%20you%20through%20your%20website.%20I%20would%20like%20to%20discuss%20a%20project." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-gold flex-1 text-center text-sm"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Interactive Google Maps Embed */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="font-bold text-sm text-brand-navy px-2">Map Location: Ongata Business Centre</div>
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <iframe 
                    title="Google Maps Location for Ongata Business Centre, Magadi Road, Ongata Rongai"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.453303681498!2d36.750567!3d-1.396263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f059bd028a39d%3A0x7d6f55e0c52bb13!2sOngata%20Rongai!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
                    className="w-full h-full border-0" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
