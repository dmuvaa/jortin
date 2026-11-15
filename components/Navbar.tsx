'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { services } from '@/lib/services';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
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
                const itemClass = `text-sm font-semibold transition-colors duration-150 py-1 border-b-2 ${
                  isActive
                    ? 'text-brand-navy border-brand-gold font-bold'
                    : 'text-slate-600 hover:text-brand-navy border-transparent hover:border-slate-300'
                }`;

                if (item.href === '/services') {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                          setServicesOpen(false);
                        }
                      }}
                    >
                      <Link
                        href="/services"
                        className={`${itemClass} inline-flex items-center gap-1`}
                        aria-haspopup="true"
                        aria-expanded={servicesOpen}
                        onFocus={() => setServicesOpen(true)}
                      >
                        Services
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </Link>
                      <div className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 ${servicesOpen ? 'block' : 'hidden'}`}>
                        <div className="rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
                          {services.map((service) => {
                            const href = `/services/${service.slug}`;
                            const current = pathname === href;
                            return (
                              <Link
                                key={service.slug}
                                href={href}
                                aria-current={current ? 'page' : undefined}
                                className={`block px-4 py-2.5 text-sm font-semibold ${
                                  current ? 'bg-amber-50 text-brand-navy' : 'text-slate-700 hover:bg-slate-50 hover:text-brand-navy'
                                }`}
                                onClick={() => setServicesOpen(false)}
                              >
                                {service.title}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link key={item.href} href={item.href} className={itemClass}>
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
            <div className="flex lg:hidden items-center">
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
            const itemClass = `block py-3 px-4 rounded-lg text-base font-semibold transition-colors ${
              isActive
                ? 'bg-amber-50 text-brand-navy font-bold border-l-4 border-brand-gold'
                : 'text-slate-700 hover:bg-slate-100'
            }`;

            if (item.href === '/services') {
              const servicesActive = pathname === '/services' || pathname.startsWith('/services/');
              return (
                <div key={item.href}>
                  <div className="flex items-stretch gap-1">
                    <Link href="/services" className={`${itemClass} flex-1`}>
                      Services
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      className={`shrink-0 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100 ${
                        servicesActive ? 'text-brand-navy' : ''
                      }`}
                      aria-expanded={mobileServicesOpen}
                      aria-label={mobileServicesOpen ? 'Hide service list' : 'Show service list'}
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {mobileServicesOpen ? (
                    <div className="ml-4 mt-1 space-y-0.5 border-l border-slate-200 pl-2">
                      {services.map((service) => {
                        const href = `/services/${service.slug}`;
                        const current = pathname === href;
                        return (
                          <Link
                            key={service.slug}
                            href={href}
                            aria-current={current ? 'page' : undefined}
                            className={`block rounded-lg px-3 py-2 text-sm font-semibold ${
                              current ? 'text-brand-navy bg-amber-50' : 'text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            {service.title}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={itemClass}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
