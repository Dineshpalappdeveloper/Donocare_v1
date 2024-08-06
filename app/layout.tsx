import NavBar from "@/components/re/navBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });
import logo from "../public/logo.jpg";
export const metadata: Metadata = {
  title: "DonoCare",
  description: "DonoCare Consultancy Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={logo} />
      </head>
      <body className="{inter.className} bg-lB font-poppins scroll-smooth">
        <div>
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
