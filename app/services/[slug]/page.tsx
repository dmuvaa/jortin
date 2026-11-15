import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { CSSProperties, ReactNode } from 'react';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { getService, services, type ServiceImage } from '@/lib/services';
import { getServiceDetail } from '@/lib/service-details';
import { getServicePhotoFrame } from '@/lib/service-photos';

type Props = { params: Promise<{ slug: string }> };

const photoCaptions: Record<string, string> = {
  '/images/consultancy-design.jpg': 'Representative photograph of design work. Not a named Jortin contract.',
  '/images/column-formwork.jpg': 'Reinforced concrete columns in formwork on a Jortin site.',
  '/images/house-structure.jpg': 'A two-storey house built by Jortin, during construction.',
  '/images/house-complete.jpg': 'The same house after completion.',
  '/images/house-progress.jpg': 'Front elevation of the same house before finishes.',
  '/images/road-works.jpg': 'Representative photograph. Not a named Jortin road contract.',
  '/images/water-tower.jpg': 'A steel water tower completed by Jortin.',
  '/images/electrical-mechanical.jpg': 'Representative photograph. Not a named Jortin contract.',
  '/images/project-management.jpg': 'Representative photograph. Not a named Jortin contract.',
  '/images/procurement-maintenance.jpg': 'Representative photograph. Not a named Jortin contract.',
  '/images/consulting.jpg': 'Representative photograph. Not a named Jortin contract.',
};

const phrases: { phrase: string; href: string; external?: boolean }[] = [
  { phrase: 'Project Management and Supervision', href: '/services/project-management' },
  { phrase: 'Consultancy and Design', href: '/services/consultancy' },
  { phrase: 'Structural and Civil Works', href: '/services/structural' },
  { phrase: 'Procurement and Maintenance', href: '/services/procurement' },
  { phrase: 'NCA contractor search portal', href: 'https://nca.go.ke', external: true },
];

function SectionHeading({ id, children, kicker }: { id?: string; children: ReactNode; kicker?: string }) {
  return (
    <header>
      {kicker ? (
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#B8821F]">{kicker}</p>
      ) : null}
      <h2 id={id} className="mt-2 text-3xl sm:text-[2.5rem] font-bold tracking-tight text-brand-navy leading-tight">
        {children}
        <span className="mt-4 block h-1 w-12 bg-[#E5A93C]" aria-hidden="true" />
      </h2>
    </header>
  );
}

function linkedText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let rest = text;
  let key = 0;

  while (rest.length > 0) {
    let match: { index: number; phrase: string; href: string; external?: boolean } | null = null;
    for (const rule of phrases) {
      const index = rest.indexOf(rule.phrase);
      if (index !== -1 && (match === null || index < match.index)) {
        match = { index, phrase: rule.phrase, href: rule.href, external: rule.external };
      }
    }
    if (!match) {
      nodes.push(rest);
      break;
    }
    if (match.index > 0) nodes.push(rest.slice(0, match.index));
    const className = 'font-semibold text-brand-navy hover:text-amber-800';
    nodes.push(
      match.external ? (
        <a key={key++} href={match.href} target="_blank" rel="noopener noreferrer" className={className}>
          {match.phrase}
        </a>
      ) : (
        <Link key={key++} href={match.href} className={className}>
          {match.phrase}
        </Link>
      ),
    );
    rest = rest.slice(match.index + match.phrase.length);
  }

  return nodes;
}

function ServicePhoto({
  src,
  alt,
  variant,
  priority,
  sizes,
}: {
  src: string;
  alt: string;
  variant: 'hero' | 'inline';
  priority?: boolean;
  sizes?: string;
}) {
  const frame = getServicePhotoFrame(src);
  const position = variant === 'hero' ? (frame.heroPosition ?? frame.objectPosition) : frame.objectPosition;
  const style: CSSProperties = { objectPosition: position };

  if (variant === 'hero') {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        style={style}
        sizes="100vw"
      />
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-slate-200/80"
      style={{ aspectRatio: `${frame.width} / ${frame.height}` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={style}
        sizes={sizes ?? '(min-width: 1024px) 56rem, 100vw'}
      />
    </div>
  );
}

function contactAside(slug: string, headline: string) {
  return (
    <aside className="lg:sticky lg:top-28 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#B8821F]">Next step</p>
      <h3 className="mt-2 text-xl font-bold text-brand-navy leading-snug">Talk to us about {headline}</h3>
      <p className="mt-3 text-slate-600 leading-relaxed">
        Share drawings, a site location or a short brief. We will tell you what we need and whether the scope fits how we work.
      </p>
      <div className="mt-6">
        <Link href={`/contact?service=${slug}`} className="btn-gold w-full justify-center">
          <span>Contact Jortin</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <p className="mt-6 text-sm text-slate-500 leading-relaxed">
        Registration and company credentials are on the{' '}
        <Link href="/about#compliance" className="font-semibold text-brand-navy hover:text-amber-800">
          About page
        </Link>
        .
      </p>
    </aside>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  const service = getService(slug);
  if (!detail || !service) return {};

  return {
    title: { absolute: detail.metaTitle },
    description: detail.description,
    alternates: { canonical: `https://www.jortinlimited.co.ke/services/${service.slug}` },
    openGraph: {
      title: detail.metaTitle,
      description: detail.description,
      url: `https://www.jortinlimited.co.ke/services/${service.slug}`,
      images: [service.image.src],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  const detail = getServiceDetail(slug);
  if (!service || !detail) notFound();

  const gallery: ServiceImage[] = (service.gallery ?? []).filter(
    (photo) => photo.src !== service.image.src,
  );
  const whatsapp = `https://wa.me/254722902688?text=${encodeURIComponent(`Hello Jortin Limited, I would like to discuss ${detail.headline}.`)}`;
  const heroFrame = getServicePhotoFrame(service.image.src);
  const heroIsPortrait = heroFrame.height > heroFrame.width;

  return (
    <>
      <section
        className={`relative flex items-end overflow-hidden bg-brand-navy text-white ${
          heroIsPortrait ? 'min-h-[32rem] sm:min-h-[40rem]' : 'min-h-[26rem] sm:min-h-[30rem]'
        }`}
      >
        <ServicePhoto src={service.image.src} alt={service.image.alt} variant="hero" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071527] via-[#071527]/50 to-[#071527]/15" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-36 sm:pb-16 sm:pt-44">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#E5A93C]">Our services</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
            {detail.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200 leading-relaxed sm:text-xl">{detail.lead}</p>
        </div>
      </section>

      <section className="bg-[#f6f7f9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">{linkedText(detail.includedIntro)}</p>
              {detail.more.map((paragraph) => (
                <p key={paragraph} className="text-lg text-slate-600 leading-relaxed">
                  {linkedText(paragraph)}
                </p>
              ))}
              {detail.includedClose ? (
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-[#E5A93C] pl-5">
                  {linkedText(detail.includedClose)}
                </p>
              ) : null}
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="w-full max-w-sm">{contactAside(slug, detail.headline)}</div>
            </div>
          </div>

          {gallery.length > 0 ? (
            <div className="mt-16 sm:mt-20 space-y-10">
              <SectionHeading kicker="Site photography">More from this service</SectionHeading>
              <div className={`grid gap-8 ${gallery.length > 1 ? 'lg:grid-cols-1' : ''}`}>
                {gallery.map((photo) => (
                  <figure key={photo.src} className="space-y-3">
                    <ServicePhoto
                      src={photo.src}
                      alt={photo.alt}
                      variant="inline"
                      sizes="(min-width: 1280px) 80rem, 100vw"
                    />
                    <figcaption className="text-sm text-slate-500 leading-relaxed max-w-3xl">
                      {photoCaptions[photo.src] ?? photo.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section id="included" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="Scope">What this covers</SectionHeading>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {detail.included.map((point) => (
              <li
                key={point}
                className="h-full rounded-2xl border border-slate-200 bg-[#fafbfc] p-6 shadow-sm border-l-4 border-l-[#E5A93C]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E5A93C] text-[#0B1F3B]">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
                <p className="mt-4 text-slate-800 leading-relaxed">{linkedText(point)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="process" className="border-y border-slate-200 bg-[#f6f7f9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
            <header className="lg:col-span-4 lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#B8821F]">Working with us</p>
              <h2 className="mt-2 text-3xl sm:text-[2.35rem] font-bold tracking-tight text-brand-navy leading-tight">
                How Jortin handles {detail.headline.toLowerCase()}
                <span className="mt-4 block h-1 w-12 bg-[#E5A93C]" aria-hidden="true" />
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">{linkedText(detail.processIntro)}</p>
            </header>
            <ol className="mt-12 lg:col-span-8 lg:mt-0">
              {detail.steps.map((step, index) => (
                <li key={step.title} className="relative pb-10 last:pb-0 pl-11 sm:pl-14">
                  {index < detail.steps.length - 1 ? (
                    <span
                      className="absolute left-[15px] sm:left-[19px] top-9 bottom-0 w-0.5 bg-[#E5A93C]/70"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span
                    className="absolute left-0 top-0 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-brand-navy text-sm sm:text-base font-extrabold text-[#E5A93C] ring-4 ring-[#f6f7f9]"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-navy leading-snug">{step.title}</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">{linkedText(step.text)}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="questions" className="bg-[#f6f7f9] py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="FAQ">Questions</SectionHeading>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white px-6 sm:px-8 divide-y divide-slate-200">
            {detail.faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none text-lg font-bold text-brand-navy flex items-start justify-between gap-6">
                  <span>{faq.q}</span>
                  <span className="text-[#B8821F] text-xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="pt-3 text-lg text-slate-600 leading-relaxed pb-1">{linkedText(faq.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{detail.ctaTitle}</h2>
            <p className="text-slate-300 text-lg leading-relaxed">{detail.ctaBody}</p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full lg:w-auto">
            <Link href={`/contact?service=${service.slug}`} className="btn-gold w-full sm:w-auto">
              <span>{detail.quoteLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+254722902688" className="btn-outline-white w-full sm:w-auto">
              <Phone className="w-4 h-4" />
              Call 0722 902 688
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full sm:w-auto">
              WhatsApp Jortin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}