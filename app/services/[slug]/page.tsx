import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ArrowRight } from 'lucide-react';
import ClosingCTA from '@/components/ClosingCTA';
import JumpNav from '@/components/JumpNav';
import { getService, services } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `https://www.jortinlimited.co.ke/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Jortin Limited`,
      description: service.summary,
      url: `https://www.jortinlimited.co.ke/services/${service.slug}`,
      images: [service.image.src],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const photos = [service.image, ...(service.gallery ?? [])];

  return (
    <>
      <section className="relative bg-brand-navy text-white pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={service.image.src} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071527]/95 via-[#0b1f3b]/80 to-[#0b1f3b]/45" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 enter">
            <Link href="/services" className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-white">
              Services
            </Link>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{service.body}</p>
            <div className="pt-2">
              <Link href={`/contact?service=${service.slug}`} className="btn-gold text-sm">
                <span>Request a quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <JumpNav
              items={[
                { href: '#scope', label: 'Scope' },
                { href: '#photos', label: 'Photos' },
                ...services.map((item) => ({ href: `/services/${item.slug}`, label: item.nav })),
              ]}
            />
          </div>
        </div>
      </section>

      <section id="scope" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <ul className="space-y-2.5 text-sm text-slate-700">
            {service.points.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
          <div id="photos" className="grid gap-4 sm:grid-cols-2">
            {photos.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 1024px) 24rem, 100vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-navy">All services</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                aria-current={item.slug === service.slug ? 'page' : undefined}
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-bold text-brand-navy hover:border-amber-400 hover-lift aria-[current=page]:border-amber-400"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
