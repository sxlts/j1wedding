import "./globals.css";
import type { Metadata } from "next";
import { Bad_Script, Inter } from "next/font/google";
import Image from "next/image";

const badScript = Bad_Script({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-bad'
});
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Свадьба Данила и Дарья",
  description: "Приглашение на свадьбу",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${badScript.variable} font-inter relative`}>
        {children}
        <Image src="/leaves.avif" alt="background" fill className="-z-10"/>
      </body>
    </html>
  );
}
