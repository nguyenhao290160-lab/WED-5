import Link from "next/link";
import { Sparkles } from "lucide-react";

export function PromoBar() {
  return (
    <div className="border-b border-slate-200/70 bg-teal-600 text-white dark:border-slate-800/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          <span className="font-semibold">
            Deal Drop: fresh picks and price checks updated daily
          </span>
        </div>
        <Link
          href="/affiliate-disclosure"
          className="underline/30 hover:underline whitespace-nowrap"
        >
          How we earn (affiliate)
        </Link>
      </div>
    </div>
  );
}
