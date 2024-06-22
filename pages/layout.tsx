import Navbar from "@/src/components/navbar";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-8 bg-gradient-to-r from-red-300 to-stone-100">
        <main>{children}</main>
      </div>
    </div>
  );
}
