import Link from 'next/link';
import { clients } from '@/lib/services';

export default function ClientGrid({ linked = false }: { linked?: boolean }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      {clients.map((client) => {
        const card = (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center h-28 hover-lift">
            <div className="font-bold text-brand-navy text-sm sm:text-base">{client.name}</div>
            <div className="text-xs text-slate-500 mt-1">{client.field}</div>
          </div>
        );

        return linked ? (
          <Link key={client.slug} href={`/clients#${client.slug}`} className="block">
            {card}
          </Link>
        ) : (
          <div key={client.slug} id={client.slug}>
            {card}
          </div>
        );
      })}
    </div>
  );
}
