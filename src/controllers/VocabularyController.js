const Vocabulary = require("../models/Vocabulary.js");

class VocabularyController {
	// [GET] /api/v1/vocabulary
	// ?topic=<number>&limit=<number>&offset=<number>
	async get(req, res, next) {
		const { topic, limit, offset } = req.query;

		const queryObject = {};

		if (topic) {
			queryObject.topic = topic;
		}

		try {
			const vocabularies = await Vocabulary.find(queryObject)
				.skip(offset)
				.limit(limit);
			res.json(vocabularies);
		} catch (err) {
			next(err);
		}
	}

	// [GET] /api/v1/vocabulary/:id
	async getOne(req, res, next) {
		try {
			const vocabulary = await Vocabulary.find({
				_id: req.params.id,
			}).populate("topic");
			res.json(vocabulary);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = VocabularyController;
