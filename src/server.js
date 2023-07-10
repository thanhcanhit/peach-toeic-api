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

function transformName(name) {
	name = name.trim();
	name = name.toLowerCase();
	name = name.split(" ");
	return `${name.join("_")}`;
}

(async() => {
	const topics = await Topic.find({});
	for (const topic of topics) {
		const transName = transformName(topic.name);
		const imgPath = `/images/${transName}/${transName}.jpg`;
		await Topic.updateOne({_id: topic._id}, {$set: {imgPath: imgPath}})
	}
})()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));
app.use(morgan("common"));
app.use(cors());

router(app);

app.listen(port, () => console.log("App listening on port " + port));
