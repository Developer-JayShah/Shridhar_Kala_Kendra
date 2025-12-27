import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bijalsangnaach — Kathak Academy",
  description:
    "National award-winning Kathak performer and academy based in New Jersey, USA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black text-white"}>
        <Navbar />
        {/* No pt-16 here – pages decide their own padding */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
