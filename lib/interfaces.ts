import mongoose from "mongoose";

export interface ReviewDocument {
	_id?: string;
	userId: string;
	carId: string;
	rating: number;
	title: string;
	content: string;
	datePosted?: Date;
}

export interface ReviewData {
	_id?: string;
	userId?: {
		_id?: string;
		image?: string;
		username?: string;
	};
	carId?: {
		_id?: string;
		carTitle: string;
		carImages: string[];
	};
	rating: number;
	title?: string;
	content?: string;
	createdAt?: string;
	updatedAt?: string;
}

interface CardAddedParams {
	car: mongoose.Types.ObjectId;
	reviews?: mongoose.Types.ObjectId[];
}

interface CarRentedParams {
	car: mongoose.Types.ObjectId;
	reviewId?: mongoose.Types.ObjectId[];
}

export interface UserParams {
	id: string;
	_id?: mongoose.Types.ObjectId;
	username: string;
	name?: string;
	email: string;
	image?: string;
	coverImage?: string;
	bio?: string;
	onboarded?: boolean;
	carsAdded?: CardAddedParams[];
	carsRented?: CarRentedParams[];
}

export interface DateRange {
	from: Date | string;
	to: Date | string;
}

export interface CarParams {
	userId: string;
	_id?: string;
	carTitle: string;
	carType: string;
	disabledDates?: {
		singleDates?: Date[] | string[];
		dateRanges?: DateRange[];
	};
	rentPrice?: string;
	carRented?: number;
	starRating?: number[];
	likes?: mongoose.Types.ObjectId[];
	capacity?: string;
	transmission?: string;
	location?: string;
	fuelCapacity?: string;
	shortDescription?: string;
	carImages: string[];
	liked?: boolean;
	path?: string;
}

export interface CarParamsExtended extends CarParams {
	reviews: ReviewData[];
}
