import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Header_navbar from "@/components/navbar";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ovis",
  description: "Every details about us in Ovis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        {children}
      </body>
    </html>
  );
}
