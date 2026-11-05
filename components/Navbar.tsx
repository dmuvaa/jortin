'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 focus:outline-none" aria-label="Jortin Limited Home">
              <Image 
                src="/images/logo.png" 
                alt="Jortin Limited Logo" 
                width={190} 
                height={45} 
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
              {NAV_ITEMS.map((item) => {
                const isActive = (item.href === '/' && pathname === '/') || 
                                 (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-semibold transition-colors duration-150 py-1 border-b-2 ${
                      isActive
                        ? 'text-brand-navy border-brand-gold font-bold'
                        : 'text-slate-600 hover:text-brand-navy border-transparent hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact" className="btn-gold text-sm shadow-md">
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <Link href="/contact" className="btn-gold text-xs px-3 py-2 min-h-[38px] font-semibold sm:inline-flex">
                Quote
              </Link>
              <button
                type="button"
                onClick={toggleMenu}
                className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu-drawer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/60 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-menu-drawer"
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <Image src="/images/logo.png" alt="Jortin Limited" width={140} height={35} className="h-8 w-auto object-contain" />
          <button
            type="button"
            onClick={toggleMenu}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = (item.href === '/' && pathname === '/') || 
                             (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 px-4 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-amber-50 text-brand-navy font-bold border-l-4 border-brand-gold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="p-5 border-t border-slate-100 space-y-3 bg-slate-50">
          <Link href="/contact" className="btn-gold w-full text-center text-sm">
            Request a Quote
          </Link>
          <a
            href="https://wa.me/254722902688?text=Hello%20Jortin%20Limited%2C%20I%20found%20you%20through%20your%20website.%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-700 transition-colors"
          >
            Chat on WhatsApp
          </a>
          <div className="text-xs text-slate-500 text-center pt-2">
            Call: <a href="tel:+254722902688" className="text-brand-navy font-semibold">0722 902 688</a>
          </div>
        </div>
      </div>
    </>
  );
}
