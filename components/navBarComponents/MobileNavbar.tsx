"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
	whiteCross,
	cross,
	darkModeHome,
	profilePic,
} from "@/public/svg-icons";
import { navButtons } from "@/constants";

interface MobileNavBarProps {
	theme: string | undefined;
	pathname: string;
	handleCloseMobileMenu: () => void;
	userId?: string | null | undefined;
	userImage?: string;
}

const MobileNavbar: React.FC<MobileNavBarProps> = ({
	theme,
	pathname,
	handleCloseMobileMenu,
	userId,
	userImage,
}) => {
	const [closeMenu, setCloseMenu] = useState(false);

	const handleCloseMenu = () => {
		setCloseMenu(true);
		handleCloseMobileMenu();
	};

	return (
		<>
			<motion.div
				animate={{ scale: closeMenu ? 0 : 1 }}
				initial={{ scale: 0 }}
				className="fixed z-50 bg-white100 dark:bg-gray850 p-6 top-6 inset-x-3 rounded-xl flex flex-col md:hidden "
			>
				<div className="flex justify-between mb-10">
					<p className="text-blue500  text-xl md:text-3xl">
						RentWheels
					</p>
					<Image
						src={theme === "light" ? cross : whiteCross}
						height={20}
						width={20}
						alt="close menu"
						className="cursor-pointer dark:text-white200 hover:scale-125 transition duration-200 "
						onClick={handleCloseMenu}
					/>
				</div>

				{/* Nav Links */}
				<div>
					{navButtons.slice(0, 3).map((button) => (
						<Link
							key={button.path}
							href={button.path}
							className={`flex rounded p-3 ${
								pathname === button.path
									? "bg-blue500 text-white"
									: "text-gray700 dark:text-white200"
							}`}
						>
							<Image
								src={
									button.images
										? button.path === pathname ||
										  theme !== "light"
											? button.images[1]
											: button.images[0]
										: darkModeHome
								}
								height={16}
								width={16}
								alt={`${button.title} icon`}
							/>
							<p className="ml-1.5 text-sm">{button.title}</p>
						</Link>
					))}

					{/* Profile Link */}
					<Link
						onClick={handleCloseMenu}
						href={userId ? "/profile" : "/sign-in"}
						className="mt-5 mb-3 rounded"
					>
						<button className="w-full flex items-center justify-center border-blue50 rounded-lg  bg-white text-blue500 dark:bg-gray700 dark:text-blue300 py-3.5 text-sm font-semibold">
							<Image
								src={userImage ? userImage : profilePic}
								height={20}
								width={20}
								alt="profile pic"
								className={`${
									userId
										? "mr-1.5 flex min-h-[20px] rounded-full "
										: "hidden"
								}`}
							/>

							<p>{userId ? "My Profile" : "Login"}</p>
						</button>
					</Link>

					<button
						className={`${
							userId ? "flex" : "hidden"
						} w-full items-center justify-center rounded bg-red400 py-3.5 text-sm font-semibold text-white mt-2`}
					>
						Logout
					</button>
				</div>
			</motion.div>

			<div
				className="fixed z-40 h-screen w-screen  bg-black dark:bg-gray900 opacity-50 dark:opacity-70 md:hidden"
				onClick={handleCloseMenu}
			/>
		</>
	);
};

export default MobileNavbar;
