const 
	express = require("express"),
	controllers = require("../controllers");

const 
	router = express.Router();
	newsCtrl = controllers.newsCtrl;

router.route("/").get(newsCtrl.findAll)

router.route("/:id")
	.get(newsCtrl.findById)
	.put(newsCtrl.comment)

router.route("/refresh").get(newsCtrl.restock)

module.exports = router;
