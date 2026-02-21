"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function StickyDealBar({
  productName,
  bestPrice,
  bestUrl,
}: {
  productName: string;
  bestPrice: number;
  bestUrl?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 520);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const label = useMemo(() => {
    if (productName.length <= 44) return productName;
    return productName.slice(0, 41) + "…";
  }, [productName]);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-slate-900 dark:text-white">
            {label}
          </div>
          <div className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
            Best price today: <span className="font-bold">{formatPrice(bestPrice)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden sm:inline-flex"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Top
          </Button>

          <Button
            className="bg-teal-600 hover:bg-teal-700"
            asChild
          >
            <a
              href={bestUrl ?? "#where-to-buy"}
              target={bestUrl ? "_blank" : undefined}
              rel={bestUrl ? "noopener noreferrer" : undefined}
            >
              View deal <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
