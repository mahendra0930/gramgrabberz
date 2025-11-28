import React from "react";
import AdBanner from "@/components/AdBanner";

import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col"><AdBanner />
      <Header />
      <main className="flex-1">{children}</main><AdBanner />
      <Footer />
    </div>
  );
}
