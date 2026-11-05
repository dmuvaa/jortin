import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-brand-dark text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2 flex-wrap text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
            <MapPin className="w-3.5 h-3.5" />
            Ongata Rongai, Kajiado County
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="text-slate-300">NCA 8 Registered: Roads &amp; Water</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="tel:+254722902688" 
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            0722 902 688
          </a>
          <span className="hidden sm:inline text-slate-600">|</span>
          <a 
            href="mailto:jortinlimited@gmail.com" 
            className="hidden md:inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            jortinlimited@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
