import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { brand } from "@/data/content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: brand.name,
  description: brand.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full overflow-x-hidden`}>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-[#0a0a0a] text-zinc-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
