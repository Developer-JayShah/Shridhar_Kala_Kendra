"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on the main landing hero page
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="border-t border-white/10 bg-black/80 text-xs text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 text-center">
        © {new Date().getFullYear()} Shridhar Kala Kendra. All rights reserved.
      </div>
    </footer>
  );
}
