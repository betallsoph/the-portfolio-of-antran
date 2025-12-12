import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/aos-init";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neobrutalism Portfolio",
  description: "A portfolio website with Neobrutalism design style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
