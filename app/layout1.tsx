import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "XL Axiata",
	description: "Beli Paket Internet Termurah Disini!",
	keywords: "XL",
	icons: "xl-logo.png"
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Navbar />
			<body className={inter.className}>{children}</body>
		</html>
	)
}
