export default function JumpNav({
  items,
  tone = 'dark',
}: {
  items: { href: string; label: string }[];
  tone?: 'dark' | 'light';
}) {
  const itemClass =
    tone === 'dark'
      ? 'px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-brand-navy transition-colors'
      : 'px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-amber-400 hover:text-brand-navy transition-colors';

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
