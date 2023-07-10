const Vocabulary = require("../models/Vocabulary.js");

class VocabularyController {
	// [GET] /api/v1/vocabulary
	// ?topic=<topicId>&limit=<limitQuantity>&skip=<skipQuantity>
	async get(req, res, next) {
		const topicId = req.query.topic;
		const limitQuantity = req.query.limit;
		const skipQuantity = req.query.skip;

		const queryObject = {};

		if (topicId) {
			queryObject.topic = topicId;
		}

		try {
			const vocabularies = await Vocabulary.find(queryObject)
				.skip(skipQuantity)
				.limit(limitQuantity);
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

module.exports =  VocabularyController;
