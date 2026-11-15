export default function JumpNav({
  items,
  tone = 'dark',
}: {
  items: { href: string; label: string }[];
  tone?: 'dark' | 'light' | 'photo';
}) {
  const itemClass =
    tone === 'photo'
      ? 'inline-flex items-center h-8 px-3 rounded-full border border-white/30 bg-white/15 text-white hover:bg-[#E5A93C] hover:text-[#0B1F3B] hover:border-[#E5A93C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F3B] transition-colors'
      : tone === 'dark'
        ? 'inline-flex items-center h-8 px-3 rounded-full bg-slate-800 text-slate-200 hover:bg-[#E5A93C] hover:text-[#0B1F3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C] focus-visible:ring-offset-2 transition-colors'
        : 'inline-flex items-center h-8 px-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#E5A93C] hover:text-[#0B1F3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C] focus-visible:ring-offset-2 transition-colors';

  return (
    <nav aria-label="On this page" className="flex flex-wrap gap-2 text-xs font-semibold">
      {items.map((item) => (
        <a key={item.href} href={item.href} className={itemClass}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
