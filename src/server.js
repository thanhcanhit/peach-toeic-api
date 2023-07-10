const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const router = require("./routers/index.js");

// Path

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
