import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-12 border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-700/60">
          
          {/* Col 1: About & Badges */}
          <div className="space-y-4">
            <Link href="/" className="inline-block focus:outline-none" aria-label="Jortin Limited Home">
              <Image 
                src="/images/logo-white.png" 
                alt="Jortin Limited Logo" 
                width={180} 
                height={42} 
                className="h-10 w-auto object-contain brightness-110" 
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              Jortin Limited is a fully Kenyan-owned construction company in Ongata Rongai, Kajiado County. We deliver consultancy, structural and civil works, building, roads and water works for government, NGOs, development partners and private clients.
            </p>
            <div className="pt-2 space-y-1.5 text-xs text-slate-300">
              <div className="font-medium text-amber-400">Company No. PVT-GYU53RVX</div>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-[11px] font-medium">NCA 8 Road Works</span>
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-[11px] font-medium">NCA 8 Water Works</span>
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-[11px] font-medium">KRA Tax Compliant</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/projects" className="text-slate-300 hover:text-white transition-colors">Sector Projects</Link></li>
              <li><Link href="/team" className="text-slate-300 hover:text-white transition-colors">Meet the Team</Link></li>
              <li><Link href="/compliance" className="text-slate-300 hover:text-white transition-colors">Compliance &amp; Registration</Link></li>
              <li><Link href="/clients" className="text-slate-300 hover:text-white transition-colors">Clients &amp; Partners</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services#consultancy" className="text-slate-300 hover:text-white transition-colors">Consultancy &amp; Design</Link></li>
              <li><Link href="/services#structural" className="text-slate-300 hover:text-white transition-colors">Structural &amp; Civil Works</Link></li>
              <li><Link href="/services#building" className="text-slate-300 hover:text-white transition-colors">Building Construction</Link></li>
              <li><Link href="/services#roads" className="text-slate-300 hover:text-white transition-colors">Road Works &amp; Drainage</Link></li>
              <li><Link href="/services#water" className="text-slate-300 hover:text-white transition-colors">Boreholes &amp; Water Works</Link></li>
              <li><Link href="/services#electrical" className="text-slate-300 hover:text-white transition-colors">Electrical &amp; Mechanical</Link></li>
              <li><Link href="/services#project-management" className="text-slate-300 hover:text-white transition-colors">Project Management</Link></li>
              <li><Link href="/services#procurement" className="text-slate-300 hover:text-white transition-colors">Procurement &amp; Maintenance</Link></li>
              <li><Link href="/services#consulting" className="text-slate-300 hover:text-white transition-colors">Strategic Advisory &amp; M&amp;E</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">Contact &amp; Office</h3>
            <div className="text-sm space-y-3 text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Ongata Business Centre, 2nd Floor, Room 23, Magadi Road, Ongata Rongai, Kajiado County</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>P.O. Box 654-00511, Ongata Rongai, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <a href="tel:+254722902688" className="text-white hover:text-amber-400 font-semibold transition-colors">+254 722 902 688</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <a href="mailto:jortinlimited@gmail.com" className="text-slate-300 hover:text-amber-400 transition-colors">jortinlimited@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Legal Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p>© 2026 Jortin Limited. Company No. PVT-GYU53RVX. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <span>Ongata Rongai, Kenya</span>
            <span>•</span>
            <a href="/CREDITS.txt" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white underline transition-colors">
              Photo Credits
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
