import topicRouter from "./topic.js";
import vocabularyRouter from "./vocabulary.js";

function router(app) {
	app.use("/api/v1/vocabulary", vocabularyRouter);
	app.use("/api/v1/topic", topicRouter);
}

export default router;
