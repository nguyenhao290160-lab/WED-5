import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { getCategoryBySlug, getProductsByCategory } from "@/data/products";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const products = getProductsByCategory(params.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {category.name}
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Browse the latest deals in {category.name.toLowerCase()}.
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-10 text-center">
          <p className="text-slate-600 dark:text-slate-300">
            No deals found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
