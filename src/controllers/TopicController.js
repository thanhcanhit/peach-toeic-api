const Topic = require("../models/Topic.js");

class TopicController {
	// [GET] /api/v1/topic
	// ?limit=<number>&offset=number
	async get(req, res, next) {
		try {
			const { limit, offset } = req.query;

			const topics = await Topic.find({}).skip(offset).limit(limit);
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

module.exports = TopicController;
