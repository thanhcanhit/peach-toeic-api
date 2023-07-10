import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
	_id: { type: Number, required: true },
	name: { type: String, required: true },
	meaning: { type: String },
});

export default mongoose.model("Topic", topicSchema);
