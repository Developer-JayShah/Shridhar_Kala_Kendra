"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Shuffle helper
function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Props = {
  name?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  images: string[];
};

export default function HeroCollage({
  name = "Shridhar Kala Kendra",
  subtitle = "National Award-Winning International Kathak Performer & Academy",
  ctaHref = "/about",
  ctaLabel = "KATHAK DANCE",
  images,
}: Props) {
  // 1) Build a deterministic list of tiles (no randomness)
  const baseTiles = React.useMemo(() => {
    const TILE_COUNT = 15;
    return Array.from({ length: TILE_COUNT }).map(
      (_, i) => images[i % images.length]
    );
  }, [images]);

  // 2) State to hold the shuffled order on the client
  const [tiles, setTiles] = React.useState<string[]>([]);

  // 3) After mount, shuffle once
  React.useEffect(() => {
    setTiles(shuffle(baseTiles));
  }, [baseTiles]);

  const tilesToRender = tiles.length ? tiles : baseTiles;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* FULL-SCREEN COLLAGE GRID */}
      <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 grid-rows-3">
        {tilesToRender.map((src, idx) => (
          <motion.div
            key={src + idx}
            className="relative"
            initial={{ scale: 1 }}
            animate={{ scale: idx % 4 === 0 ? 1.04 : 1 }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src={src}
              alt="Kathak collage"
              fill
              sizes="20vw"
              className="object-cover"
              priority={idx < 8}
            />
          </motion.div>
        ))}
      </div>

      {/* DARK OVERLAY LIKE REFERENCE */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0),rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.7)_100%)]" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex h-screen items-center justify-center text-center px-4">
        <div>
          {/* ANIMATED LOGO CIRCLE */}
          <motion.div
            className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-amber-200/80 bg-black/50"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -6, 6, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-xl" aria-hidden="true">
              💃
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            className="font-serif text-white text-4xl md:text-6xl lg:text-7xl tracking-wide drop-shadow-[0_6px_18px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {name}
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            className="mt-4 text-sm md:text-base text-white/85 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href={ctaHref}
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-black hover:bg-amber-100 transition"
            >
              {ctaLabel}
            </Link>
          </motion.div>

          {/* SOCIAL ICONS ROW */}
          <motion.div
            className="mt-10 flex items-center justify-center gap-4 text-white/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Instagram */}
            <a
              href="https://instagram.com/your_instagram_here"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 rounded-md bg-white/15 px-4 py-2 text-xs hover:bg-white/25 transition"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  ry="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
              </svg>
              <span>Instagram</span>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/your_youtube_here"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex items-center gap-2 rounded-md bg-white/15 px-4 py-2 text-xs hover:bg-white/25 transition"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="12"
                  rx="3"
                  ry="3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <polygon points="11,9 16,12 11,15" fill="currentColor" />
              </svg>
              <span>YouTube</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/your_facebook_here"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-2 rounded-md bg-white/15 px-4 py-2 text-xs hover:bg-white/25 transition"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M14 8h2V4h-2a4 4 0 0 0-4 4v2H8v4h2v6h4v-6h2.5L17 10h-3V8a1 1 0 0 1 1-1z"
                  fill="currentColor"
                />
              </svg>
              <span>Facebook</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@shreedharkalakendra.com"
              aria-label="Email"
              className="flex items-center gap-2 rounded-md bg-white/15 px-4 py-2 text-xs hover:bg-white/25 transition"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  ry="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M5 7l7 6 7-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              <span>Email</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
