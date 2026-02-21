import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Check,
  ExternalLink,
  Star,
  TrendingDown,
  X,
  ArrowLeft,
} from "lucide-react";
import { getProductBySlug } from "@/data/products";
import { TrustBadges } from "@/components/TrustBadges";
import { ProductFAQ } from "@/components/ProductFAQ";
import { RelatedProducts } from "@/components/RelatedProducts";
import { StickyDealBar } from "@/components/StickyDealBar";

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const retailers = (product.retailers ?? []).slice().sort((a, b) => a.price - b.price);
  const bestPrice = retailers.length ? retailers[0].price : product.current_price;

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 pb-24">
        <div className="mb-6">
          <Button asChild variant="ghost" className="px-0 text-slate-600 dark:text-slate-300">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to deals
            </Link>
          </Button>
        </div>

        {/* Product hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {product.discount_percentage && product.discount_percentage > 0 && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500 text-white hover:bg-red-600 flex items-center gap-2 px-3 py-2 text-sm">
                  <TrendingDown className="h-4 w-4" />
                  {product.discount_percentage}% off
                </Badge>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {product.name}
              </h1>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      "h-5 w-5 " +
                      (i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-300 dark:text-slate-700")
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                ({product.review_count.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price box */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                  {formatPrice(product.current_price)}
                </span>
                {product.original_price && product.original_price > product.current_price && (
                  <>
                    <span className="text-lg text-slate-500 dark:text-slate-400 line-through">
                      {formatPrice(product.original_price)}
                    </span>
                    <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                      Save {formatPrice(product.original_price - product.current_price)}
                    </span>
                  </>
                )}
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Button className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto" asChild>
                  <a
                    href={retailers[0]?.affiliate_url ?? "#where-to-buy"}
                    target={retailers[0]?.affiliate_url ? "_blank" : undefined}
                    rel={retailers[0]?.affiliate_url ? "noopener noreferrer" : undefined}
                  >
                    View Best Price <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" asChild>
                  <a href="#where-to-buy">Compare retailers</a>
                </Button>
              </div>

              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Prices may change. Always check final price and availability on the retailer page.
              </p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Specs */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-950">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Specs
            </h2>
            {product.specs && Object.keys(product.specs).length > 0 ? (
              <dl className="mt-4 space-y-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex items-start justify-between gap-4">
                    <dt className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                      {key.replace(/_/g, " ")}
                    </dt>
                    <dd className="text-sm font-semibold text-slate-900 dark:text-white text-right">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                No specs available.
              </p>
            )}
          </div>

          {/* Pros */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-950">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Pros
            </h2>
            {product.pros && product.pros.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {pro}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                No pros listed.
              </p>
            )}
          </div>

          {/* Cons */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-950">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Cons
            </h2>
            {product.cons && product.cons.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {product.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {con}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                No cons listed.
              </p>
            )}
          </div>
        </div>

        {/* Where to Buy */}
        <div id="where-to-buy" className="mt-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Where to Buy
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Compare prices, stock, and pick the best deal.
              </p>
            </div>
          </div>

          {/* Affiliate disclosure box */}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-100 p-5">
            <div className="text-sm font-bold">Affiliate disclosure</div>
            <p className="mt-2 text-sm leading-relaxed">
              {product.affiliate_disclosure ??
                "This page may contain affiliate links. If you buy through them, we may earn a commission at no extra cost to you."}
            </p>
          </div>

          {retailers.length > 0 ? (
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Retailer</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead className="text-right">Deal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {retailers.map((r) => {
                    const isBest = r.price === bestPrice;
                    return (
                      <TableRow
                        key={r.name}
                        className={
                          isBest
                            ? "bg-teal-50/70 dark:bg-teal-950/20"
                            : undefined
                        }
                      >
                        <TableCell className="font-semibold">{r.name}</TableCell>
                        <TableCell className="font-semibold">
                          {formatPrice(r.price)}
                          {isBest ? (
                            <span className="ml-2 inline-flex rounded-full bg-teal-100 px-2 py-0.5 text-xs font-bold text-teal-800 dark:bg-teal-950 dark:text-teal-200">
                              Best
                            </span>
                          ) : null}
                        </TableCell>
                        <TableCell>
                          <Badge variant={r.in_stock ? "default" : "secondary"}>
                            {r.in_stock ? "In stock" : "Out of stock"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            asChild
                            className="bg-teal-600 hover:bg-teal-700"
                            disabled={!r.in_stock}
                          >
                            <a
                              href={r.affiliate_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-disabled={!r.in_stock}
                            >
                              View Deal <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 text-slate-600 dark:text-slate-300">
              No retailers listed for this product yet.
            </div>
          )}
        </div>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Quick answers about pricing, links, and availability.
          </p>
          <div className="mt-6">
            <ProductFAQ productName={product.name} />
          </div>
        </section>

        <RelatedProducts product={product} />

        <StickyDealBar
          productName={product.name}
          bestPrice={bestPrice}
          bestUrl={retailers[0]?.affiliate_url}
        />

      </div>
    </div>
  );
}
