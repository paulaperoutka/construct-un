const express = require("express");
const router = express.Router();

const controllers = require("../controllers");
const resolutions = controllers.resolutionsController;

router.route("/")
	.get(resolutions.findAll)
	.post(resolutions.create);

router.route("/:id")
	.get(resolutions.findById)
	// 	.put(resolutions.update);
	.delete(resolutions.delete);

module.exports = router;
