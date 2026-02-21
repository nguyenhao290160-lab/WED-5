import { BadgeCheck, Clock, ShieldCheck, TrendingUp } from "lucide-react";

const items = [
  {
    title: "Price checks",
    desc: "We refresh featured deals regularly so you can spot real drops.",
    icon: Clock,
  },
  {
    title: "Transparent links",
    desc: "Affiliate links are clearly labeled — your price stays the same.",
    icon: BadgeCheck,
  },
  {
    title: "Trusted retailers",
    desc: "We highlight reputable sellers and show stock when available.",
    icon: ShieldCheck,
  },
  {
    title: "Simple comparisons",
    desc: "Side‑by‑side tables help you pick the best value fast.",
    icon: TrendingUp,
  },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((i) => (
        <div
          key={i.title}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4"
        >
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-200">
              <i.icon className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {i.title}
              </div>
              <div className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {i.desc}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
