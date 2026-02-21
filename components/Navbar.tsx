import Link from "next/link";
import { Zap } from "lucide-react";
import { SearchForm } from "@/components/SearchForm";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/category/laptops", label: "Laptops" },
  { href: "/category/smartphones", label: "Phones" },
  { href: "/category/tablets", label: "Tablets" },
  { href: "/category/audio", label: "Audio" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold tracking-tight text-slate-900 dark:text-white"
            aria-label="TechDeals home"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white shadow-sm">
              <Zap className="h-5 w-5" />
            </span>
            <span className="hidden text-lg sm:inline">TechDeals</span>
          </Link>

          <div className="hidden flex-1 md:block">
            <SearchForm />
          </div>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/affiliate-disclosure"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Disclosure
            </Link>
          </nav>
        </div>

        {/* Mobile: search + horizontal nav */}
        <div className="md:hidden pb-3">
          <SearchForm />
          <div className="mt-3 -mx-4 px-4">
            <div className="flex gap-3 overflow-x-auto text-sm font-semibold text-slate-600 dark:text-slate-300">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-1.5 dark:border-slate-800 hover:border-teal-400 hover:text-slate-900 dark:hover:text-white transition"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/affiliate-disclosure"
                className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-1.5 dark:border-slate-800 hover:border-teal-400 hover:text-slate-900 dark:hover:text-white transition"
              >
                Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
