const express = require("express");
const VocabularyController = require("../controllers/VocabularyController.js");

const vocabularyRouter = express.Router();
const controller = new VocabularyController();

// [GET] /api/v1/vocabulary/:id
vocabularyRouter.get("/:id", controller.getOne);

// [GET] /api/v1/vocabulary
vocabularyRouter.get("/", controller.get);

module.exports =  vocabularyRouter;
