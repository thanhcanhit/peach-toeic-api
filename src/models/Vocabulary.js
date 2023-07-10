const mongoose = require("mongoose");

const vocabularySchema = new mongoose.Schema({
	_id: { type: Number, required: true },
	name: { type: String },
	pronounce: { type: String },
	explain: { type: String },
	meaning: { type: String },
	example: { english: String, vietnamse: String },
	imgPath: { type: String },
	soundPath: { type: String },
	topic: { type: Number, ref: "Topic" },
});

module.exports =  mongoose.model("Vocabulary", vocabularySchema);
