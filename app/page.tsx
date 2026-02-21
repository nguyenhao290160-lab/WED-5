import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";
import { TrustBadges } from "@/components/TrustBadges";

export default function HomePage() {
  const products = getFeaturedProducts();

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-200 px-4 py-2 text-sm font-semibold">
                <Zap className="h-4 w-4" />
                Updated daily • Real deals • No fluff
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Find the Best Tech Deals
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                Compare prices across trusted retailers, see stock instantly, and
                grab the best value on laptops, phones, and gadgets.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-teal-600 hover:bg-teal-700">
                  <Link href="#featured">
                    Browse Featured Deals <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/category/laptops">Explore Categories</Link>
                </Button>
              </div>

              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Affiliate disclosure: we may earn a commission when you buy via
                links — at no extra cost to you.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 shadow-sm p-6">
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  Today’s highlights
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />
                    Best price comparison table on every product page
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />
                    Fast-loading cards and responsive images
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />
                    Clear disclosures + price disclaimers
                  </li>
                </ul>
                <div className="mt-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Pro tip
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                    Sort by discount and always check stock before buying.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TechDeals */}
      <section className="py-10 sm:py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Built for fast comparisons
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Inspired by the best e‑commerce UX patterns — reimagined with our own design.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section id="featured" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Featured Deals
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Our top picks right now — ranked by discount.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link href="/category/laptops">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
