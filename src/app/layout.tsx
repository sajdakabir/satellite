import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import BackgroundGrain from "@/components/BackgroundGrain";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "march",
  description: "second brain for makers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter font-light bg-dashboard text-text`}
      >
        <BackgroundGrain />
        <main className="min-h-screen max-w-screen-lg mx-auto">{children}</main>
      </body>
    </html>
  );
}
