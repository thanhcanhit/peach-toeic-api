const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
	_id: { type: Number, required: true },
	name: { type: String, required: true },
	meaning: { type: String },
	imgPath:{ type: String},
});

module.exports =  mongoose.model("Topic", topicSchema);
