import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ elements: {
      userButtonPopoverCard: "border-1 border-gray-400",
    } }}>
      <html lang="en" className="bg-white">
        <body className={`${inter.className} bg-white`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
