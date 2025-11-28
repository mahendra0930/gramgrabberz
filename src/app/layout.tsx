import type { Metadata } from "next";
import { DM_Sans as RootFont } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { LocaleProvider } from "@/features/i18n/locale-provider";
import { ReactQueryProvider } from "@/features/react-query/react-query-provider";

import { cn } from "@/lib/utils";
import { siteMetadata } from "@/lib/site";
import { getLocale, getMessages } from "next-intl/server";

import "./globals.css";

const geistSans = RootFont({
  variable: "--font-root-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google AdSense Verification Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5140104627268162"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body className={cn("antialiased", geistSans.className)}>
        <LocaleProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <ReactQueryProvider>
              {children}
              <Toaster closeButton />
            </ReactQueryProvider>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
