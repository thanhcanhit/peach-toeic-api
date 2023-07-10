import Topic from "../models/Topic.js";

class TopicController {
	// [GET] /api/v1/topic
	async get(req, res, next) {
		try {
			const topics = await Topic.find({});
			res.json(topics);
		} catch (err) {
			next(err);
		}
	}

	// [GET] /api/v1/topic/:id
	async getOne(req, res, next) {
		try {
			const topic = await Topic.find({ _id: req.params.id });
			res.json(topic);
		} catch (err) {
			next(err);
		}
	}
}

export default TopicController;
