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
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Search
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {q ? (
            <>
              Results for <span className="font-semibold">“{q}”</span>
            </>
          ) : (
            "Type a keyword in the search bar to find deals."
          )}
        </p>

        {q && (
          <div className="mt-8">
            {results.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 p-6 text-slate-700 dark:text-slate-300">
                No matches found. Try searching for “laptop”, “phone”, or a brand name.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
