import express from "express";
import TopicController from "../controllers/TopicController.js";

const topicRouter = express.Router();
const controller = new TopicController();

// [GET] /api/v1/topic/:id
topicRouter.get("/:id", controller.getOne);

// [GET] /api/v1/topic
topicRouter.get("/", controller.get);

export default topicRouter;
