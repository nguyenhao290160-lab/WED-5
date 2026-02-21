"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchForm({ defaultQuery = "" }: { defaultQuery?: string }) {
  const [q, setQ] = useState(defaultQuery);
  const router = useRouter();

  const canSubmit = useMemo(() => q.trim().length > 0, [q]);

  return (
    <form
      className="flex w-full items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        const query = q.trim();
        if (!query) return;
        router.push(`/search?q=${encodeURIComponent(query)}`);
      }}
    >
      <div className="relative w-full">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search deals (laptop, phone, earbuds...)"
          className="pl-9"
          aria-label="Search products"
        />
      </div>
      <Button
        type="submit"
        className="bg-teal-600 hover:bg-teal-700"
        disabled={!canSubmit}
      >
        Search
      </Button>
    </form>
  );
}
