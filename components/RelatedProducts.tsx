import { products, ProductWithRetailers } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function RelatedProducts({
  product,
}: {
  product: ProductWithRetailers;
}) {
  const related = products
    .filter((p) => p.category_id === product.category_id && p.slug !== product.slug)
    .slice(0, 6);

  if (!related.length) return null;

  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            You may also like
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Similar deals from the same category.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
