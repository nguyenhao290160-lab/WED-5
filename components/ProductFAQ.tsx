import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ProductFAQ({
  productName,
}: {
  productName: string;
}) {
  const items = [
    {
      q: "Why do prices differ between retailers?",
      a: "Retailers run different promos, bundles, and inventory-based pricing. Use the comparison table to quickly spot the best current deal.",
    },
    {
      q: "Do you update prices in real time?",
      a: "We refresh featured deals regularly, but prices can change quickly. Always confirm final price and availability on the retailer’s checkout page.",
    },
    {
      q: "What does the affiliate disclosure mean?",
      a: "Some links are affiliate links. If you purchase through them, we may earn a commission — at no extra cost to you.",
    },
    {
      q: `Is ${productName} a good value right now?`,
      a: "A good value usually means a meaningful discount, reputable seller, and in-stock status. Check the ‘Best’ row and compare savings versus the typical price.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((it, idx) => (
        <AccordionItem
          key={idx}
          value={`item-${idx}`}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 px-4 mb-3 bg-white dark:bg-slate-950"
        >
          <AccordionTrigger className="text-left text-slate-900 dark:text-white">
            {it.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-slate-600 dark:text-slate-300">
            {it.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
