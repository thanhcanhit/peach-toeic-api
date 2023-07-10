import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

import router from "./routers/index.js";
import Topic from "./models/Topic.js";
import Vocabulary from "./models/Vocabulary.js";

// Path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Environment variables
dotenv.config();

// Connect database
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

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("common"));
app.use(cors());

router(app);

app.listen(port, () => console.log("App listening on port " + port));
