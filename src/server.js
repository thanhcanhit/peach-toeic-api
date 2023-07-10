import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

import router from "./routers/index.js";

// Environment variables
dotenv.config();

(async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URL);
		console.log("Connected to database: " + process.env.DATABASE_URL);
	} catch (err) {
		console.log("Error connecting to database " + err.message);
	}
})();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(morgan("common"));
app.use(cors());

router(app);

app.listen(port, () => console.log("App listening on port " + port));
