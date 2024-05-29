import React from "react";

import AdvertsDisplay from "@/components/advertsComponents/AdvertsDisplay";

const page = () => {
	return (
		<main className="flex flex-col items-center p-2  bg-white200 dark:bg-gray900">
			<div className="mt-24 w-full max-w-[90rem] flex flex-col  items-center pt-5 ">
				<AdvertsDisplay />
			</div>
		</main>
	);
};

export default page;
