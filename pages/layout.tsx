import Navbar from "@/src/components/navbar";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-h-dvh">
      <header>
        <Navbar />
      </header>
      <main
        className={`flex flex-col items-center justify-center min-h-screen px-8 ${inter.className} bg-gradient-to-r from-red-300 to-stone-100`}
      >
        <main>{children}</main>
      </main>{" "}
    </div>
  );
}
