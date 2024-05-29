import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Rent Wheels",
	description: "RentWheels - A car booking site",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={` ${inter.className} h-screen w-screen flex items-center justify-center my-auto`}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
