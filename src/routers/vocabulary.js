import express from "express";
import VocabularyController from "../controllers/VocabularyController.js";

const vocabularyRouter = express.Router();
const controller = new VocabularyController();

// [GET] /api/v1/vocabulary/:id
vocabularyRouter.get("/:id", controller.getOne);

// [GET] /api/v1/vocabulary
vocabularyRouter.get("/", controller.get);

export default vocabularyRouter;
