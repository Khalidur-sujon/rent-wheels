import * as mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
	mongoose.set("strictQuery", true);

	if (!process.env.MONGODB_URL) return console.log("Missing MongoDB url");

	if (isConnected) {
		console.log("Mongodb connection already eastablished");
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			dbName: "RentWheels",
		});
		isConnected = true;
		console.log("MongoDB connected.");
	} catch (error) {
		console.log(error);
	}
};
