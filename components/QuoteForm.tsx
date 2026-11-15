'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, AlertCircle, ArrowRight, MessageSquare } from 'lucide-react';

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState('');
  const [service, setService] = useState('');
  const [more, setMore] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  // Pre-fill from query params
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const enquiryParam = searchParams.get('enquiry');

    if (serviceParam) {
      const serviceMap: Record<string, string> = {
        'consultancy': 'Consultancy & Design',
        'structural': 'Structural & Civil Works',
        'building': 'Building Construction',
        'roads': 'Road Works & Civil Works',
        'water': 'Water & Sanitation',
        'electrical': 'Electrical & Mechanical',
        'project-management': 'Project Management & Supervision',
        'procurement': 'Procurement & Maintenance',
        'consulting': 'Consulting & Project Management'
      };
      setService(serviceMap[serviceParam] || serviceParam);
    }

    if (enquiryParam === 'documents') {
      setMore('Please share the compliance documents for a tender.');
    } else if (enquiryParam === 'references') {
      setMore('Please share project references.');
    }
  }, [searchParams]);

  // Synchronize aria-invalid with :user-invalid state (Modern Web Guidance)
  const syncAria = (el: HTMLElement | null) => {
    if (!el || !(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) return;
    el.setAttribute('aria-invalid', el.matches(':user-invalid') ? 'true' : 'false');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      // Focus first invalid field
      const firstInvalid = form.querySelector<HTMLElement>(':invalid');
      firstInvalid?.focus();
      return;
    }

    const data = new FormData(form);
    const fullName = data.get('full_name') as string;
    const org = data.get('organization') as string;
    const phone = data.get('phone') as string;
    const email = data.get('email') as string;
    const sNeeded = data.get('service_needed') as string;
    const location = data.get('location') as string;
    const note = data.get('more') as string;

    const message = `Hello Jortin Limited, I submitted a quote request on your website:
- Name: ${fullName}${org ? ` (${org})` : ''}
- Service: ${sNeeded}
- Location: ${location || 'Not specified'}
- Phone: ${phone}
- Email: ${email}${note ? `\n- More information: ${note}` : ''}`;

    setWaLink(`https://wa.me/254722902688?text=${encodeURIComponent(message)}`);
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-brand-navy">Tell us about your project</h2>
      </div>

      {submitted ? (
        <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-4">
          <div className="flex items-center gap-3 font-bold text-lg text-emerald-900">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <span>Thank you. Your request has reached our team.</span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Our civil and structural engineering team will review your brief and contact you shortly with clear next steps. For immediate assistance or urgent tenders, you can hand over this request directly via WhatsApp:
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forward Enquiry to WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                formRef.current?.reset();
              }}
              className="inline-flex items-center justify-center px-4 py-3 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Full Name */}
          <div className="field">
            <label htmlFor="full-name" className="block text-sm font-semibold text-slate-800 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="full-name"
              name="full_name"
              required
              autoComplete="name"
              className="form-input"
              placeholder="e.g. David Mwangi"
              onBlur={(e) => syncAria(e.currentTarget)}
              onInput={(e) => syncAria(e.currentTarget)}
              aria-describedby="full-name-error"
            />
            <div id="full-name-error" className="field-error-msg">
              <AlertCircle className="w-3.5 h-3.5" /> Please enter your full name.
            </div>
          </div>

          {/* Organisation */}
          <div className="field">
            <label htmlFor="organization" className="block text-sm font-semibold text-slate-800 mb-1">
              Organisation / Company <span className="text-xs text-slate-500 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              autoComplete="organization"
              className="form-input"
              placeholder="e.g. County Department, NGO name or Company"
            />
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="field">
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-800 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                autoComplete="tel"
                className="form-input"
                placeholder="e.g. 0722 000 000"
                onBlur={(e) => syncAria(e.currentTarget)}
                onInput={(e) => syncAria(e.currentTarget)}
                aria-describedby="phone-error"
              />
              <div id="phone-error" className="field-error-msg">
                <AlertCircle className="w-3.5 h-3.5" /> Please enter a valid phone number.
              </div>
            </div>
            <div className="field">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="form-input"
                placeholder="e.g. name@organisation.co.ke"
                onBlur={(e) => syncAria(e.currentTarget)}
                onInput={(e) => syncAria(e.currentTarget)}
                aria-describedby="email-error"
              />
              <div id="email-error" className="field-error-msg">
                <AlertCircle className="w-3.5 h-3.5" /> Please enter a valid email address.
              </div>
            </div>
          </div>

          {/* Service Needed */}
          <div className="field">
            <label htmlFor="service-needed" className="block text-sm font-semibold text-slate-800 mb-1">
              Service Needed <span className="text-red-500">*</span>
            </label>
            <select
              id="service-needed"
              name="service_needed"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="form-select"
              onBlur={(e) => syncAria(e.currentTarget)}
              onInput={(e) => syncAria(e.currentTarget)}
              aria-describedby="service-needed-error"
            >
              <option value="" disabled>Select the primary service required</option>
              <option value="Consultancy & Design">Consultancy &amp; Design</option>
              <option value="Structural & Civil Works">Structural &amp; Civil Works</option>
              <option value="Building Construction">Building Construction</option>
              <option value="Road Works & Civil Works">Road Works &amp; Civil Works (NCA 8)</option>
              <option value="Water & Sanitation">Water &amp; Sanitation (NCA 8)</option>
              <option value="Electrical & Mechanical">Electrical &amp; Mechanical</option>
              <option value="Project Management & Supervision">Project Management &amp; Supervision</option>
              <option value="Procurement & Maintenance">Procurement &amp; Maintenance</option>
              <option value="Consulting & Project Management">Consulting &amp; Project Management</option>
              <option value="Not sure yet">Not sure yet (Need Engineering Advisory)</option>
            </select>
            <div id="service-needed-error" className="field-error-msg">
              <AlertCircle className="w-3.5 h-3.5" /> Please select the service needed.
            </div>
          </div>

          <div className="field">
            <label htmlFor="location" className="block text-sm font-semibold text-slate-800 mb-1">
              Project Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              className="form-input"
              placeholder="e.g. Ongata Rongai, Kajiado"
              onBlur={(e) => syncAria(e.currentTarget)}
              onInput={(e) => syncAria(e.currentTarget)}
              aria-describedby="location-error"
            />
            <div id="location-error" className="field-error-msg">
              <AlertCircle className="w-3.5 h-3.5" /> Please provide the project location.
            </div>
          </div>

          <div className="field">
            <label htmlFor="more" className="block text-sm font-semibold text-slate-800 mb-1">
              More information
            </label>
            <textarea
              id="more"
              name="more"
              rows={4}
              value={more}
              onChange={(e) => setMore(e.target.value)}
              className="form-textarea"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-gold focus:ring-amber-400"
            />
            <label htmlFor="consent" className="text-xs text-slate-600">
              I agree to Jortin Limited contacting me about this enquiry. <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button type="submit" className="btn-gold w-full text-base py-3 cursor-pointer">
              <span>Send My Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
