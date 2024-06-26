import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import localFont from "next/font/local";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable:"--inter" });
const denton = localFont({ src:"../fonts/denton-bold.ttf", variable:"--denton" });

export const metadata: Metadata = {
  title: "Aditya Parthiban",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={( inter.variable, denton.variable )}>{children}</body>
    </html>
  );
}
