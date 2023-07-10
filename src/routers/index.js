const topicRouter = require("./topic.js");
const vocabularyRouter = require("./vocabulary.js");

function router(app) {
	app.use("/api/v1/vocabulary", vocabularyRouter);
	app.use("/api/v1/topic", topicRouter);
}

module.exports =  router;
