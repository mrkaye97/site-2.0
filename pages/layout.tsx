import Navbar from "@/src/components/navbar";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex justify-center px-8 bg-darker-blue overflow-hidden">
        <main className="w-full max-w-screen-xl">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
