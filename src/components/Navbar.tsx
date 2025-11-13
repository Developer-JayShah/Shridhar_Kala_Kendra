"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Hide navbar on the landing hero page
  if (pathname === "/") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-3 text-sm text-white">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black text-xs font-bold tracking-[0.2em]">
            SKK
          </span>
          <div className="leading-tight">
            <p className="font-semibold">Shridhar Kala Kendra</p>
            <p className="text-[11px] text-neutral-200">
              Kathak • Classes • Performances
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="hover:text-amber-200 transition">About</Link>
          <Link href="/classes" className="hover:text-amber-200 transition">Classes</Link>
          <Link href="/performances" className="hover:text-amber-200 transition">Performances</Link>
          <Link href="/gallery" className="hover:text-amber-200 transition">Gallery</Link>
          <Link href="/contact" className="hover:text-amber-200 transition">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
