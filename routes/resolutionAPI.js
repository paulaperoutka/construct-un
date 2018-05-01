const resolutionRouter = require("express");

const resolutionsController = require("../controllers/resolutionsController");

resolutionRouter.route("/")
	.get(resolutionsController.findAll)
	.post(resolutionsController.create)

resolutionRouter.route("/:id")
	.get(resolutionsController.findById)
	.put(resolutionsController.update)
	.delete(articlesController.delete)

module.exports = resolutionRouter;