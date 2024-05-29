"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@uidotdev/usehooks";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";

import { burgerMenu, darkModeIcon, lightModeIcon } from "@/public/svg-icons";
import { navButtons } from "@/constants/index";
import MobileNavbar from "./MobileNavbar";

const theme = "light";

const Navbar = () => {
	const { user } = useUser();
	const userImage = user?.profileImageUrl;
	const { userId } = useAuth();
	const [showMobileMenu, setShowMobileMenu] = useState(true);
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

					{/* User Links */}
					{userId ? (
						<div className="hidden md:flex">
							<UserButton afterSignOutUrl="/" />
						</div>
					) : (
						<Link href="/sign-in">
							<button className="hidden h-[2.75rem] w-[6.8rem] items-center justify-center rounded bg-blue500 font-semibold text-white md:flex">
								Login
							</button>
						</Link>
					)}

					<span className="mx-1 hidden w-[2.25rem] rotate-90 border-t border-blue-50 dark:border-gray850 md:flex" />

					{/* Theme icon */}
					<Image
						src={theme === "light" ? lightModeIcon : darkModeIcon}
						height={20}
						width={20}
						alt="light mode icon"
						className="cursor-pointer"
					/>
					<div className="mx-3 md:hidden">
						<UserButton afterSignOutUrl="/" />
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
				</div>
			</nav>

			{/* Mobile Nav  */}
			{showMobileMenu && (
				<MobileNavbar
					pathname={pathname}
					handleCloseMobileMenu={handleCloseMobileMenu}
					userId={userId}
					userImage={userImage}
				/>
			)}
		</>
	);
};

export default Navbar;
