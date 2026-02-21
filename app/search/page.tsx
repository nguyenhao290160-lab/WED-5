import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = (searchParams.q ?? "").trim();
  const query = q.toLowerCase();

  const results = query
    ? products.filter((p) => {
        const hay = `${p.name} ${p.description}`.toLowerCase();
        return hay.includes(query);
      })
    : [];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-semibold">Search</h1>

      {!q ? (
        <p className="mt-2 text-sm text-slate-600">
          Type a keyword in the search bar to find deals.
        </p>
      ) : (
        <p className="mt-2 text-sm text-slate-600">
          Results for <span className="font-medium">“{q}”</span>
        </p>
      )}

      {q && (
        <div className="mt-6">
          {results.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  slug={p.slug}
                  image_url={p.image_url}
                  current_price={p.current_price}
                  original_price={p.original_price}
                  discount_percentage={p.discount_percentage}
                  rating={p.rating}
                  review_count={p.review_count}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-600">
              No matches found. Try searching for “laptop”, “phone”, or a brand
              name.
            </p>
          )}
        </div>
      )}
    </main>
  );
}
