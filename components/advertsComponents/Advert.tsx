import React from "react";
import Image from "next/image";

interface AdvertProps {
	title: string;
	description: string;
	imageSrc: string;
	additionalStyles: string;
}

const Advert: React.FC<AdvertProps> = ({
	title,
	description,
	imageSrc,
	additionalStyles,
}) => {
	return (
		<div
			className={`${additionalStyles} h-60 flex w-full flex-col justify-between rounded-xl overflow-hidden px-6 pb-3 pt-6 sm:h-[22.5rem]`}
		>
			{/* Text Content */}
			<div className="flex flex-col">
				<p className="w-full text-white sm:text-3xl lg:w-1/2">
					{title}
				</p>
				<p className="mt-4 w-full text-xs text-white sm:text-base lg:w-1/2">
					{description}
				</p>
			</div>
			{/* Image Content */}
			<div className="w-full  flex items-center justify-center">
				<Image
					src={imageSrc}
					alt="car-picture-for-advert"
					width={192}
					height={56}
					className="z-20 ml-0 h-[4.2rem] w-[14rem] self-center xs:h-[5rem] xs:w-[18rem] sm:ml-6 sm:h-[7.25rem] sm:w-[25.5rem]"
				/>
			</div>
		</div>
	);
};

export default Advert;
