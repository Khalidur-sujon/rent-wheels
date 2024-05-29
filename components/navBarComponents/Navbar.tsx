"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@uidotdev/usehooks";

import { burgerMenu } from "@/public/svg-icons";
import { navButtons } from "@/constants/index";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const pathname = usePathname();

	const isSmallerDevice = useMediaQuery(
		"only screen and (max-width : 768px)"
	);

	useEffect(() => {
		if (!isSmallerDevice) {
			setShowMobileMenu(false);
		}
	}, [isSmallerDevice]);

	const handleCloseMobileMenu = () => {
		setTimeout(() => {
			setShowMobileMenu(!showMobileMenu);
		}, 250);
	};

	return (
		<>
			<nav className="fixed z-40 flex h-[5.75rem] w-screen items-center justify-between bg-white px-6 dark:border-b-gray850 dark:bg-gray900 lg:h-[6.25rem] lg:border-b lg:px-[3.75rem]">
				<Link
					href="/"
					className="text-2xl font-semibold text-blue500 md:text-3xl"
				>
					RentWheels
				</Link>

				{/* Nav Links */}
				<div className="flex items-center">
					{navButtons.map((button) => (
						<Link key={button.path} href={button.path}>
							<p
								className={`${
									pathname === button.path
										? "text-blue500"
										: "text-gray700 dark:text-white200"
								} mr-7 font-medium hidden md:flex`}
							>
								{button.title}
							</p>
						</Link>
					))}
				</div>

				{/* Humberger Menu */}
				<Image
					src={burgerMenu}
					height={24}
					width={24}
					alt="mobile menu icon"
					className="md:hidden cursor-pointer hover:scale-110 transition duration-200"
					onClick={handleCloseMobileMenu}
				/>
			</nav>

			{/* Mobile Nav  */}
			{showMobileMenu && (
				<MobileNavbar
					pathname={pathname}
					handleCloseMobileMenu={handleCloseMobileMenu}
				/>
			)}
		</>
	);
};

export default Navbar;
