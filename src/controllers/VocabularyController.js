import Vocabulary from "../models/Vocabulary.js";

class VocabularyController {
	// [GET] /api/v1/vocabulary?topic=<topicId>
	async get(req, res, next) {
		const topicId = req.query.topic;
		const queryObject = {};

		if (topicId) {
			queryObject.topic = topicId;
		}

		try {
			const vocabularies = await Vocabulary.find(queryObject);
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

export default VocabularyController;
