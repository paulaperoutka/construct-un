const 
	express = require("express"),
	controllers = require("../controllers");

const 
	router = express.Router();
	newsCtrl = controllers.newsCtrl;

router.route("/").get(newsCtrl.findAll);

router.route("/refresh").get(newsCtrl.restock);

router.route("/article/:id")
	.get(newsCtrl.findById)
	.put(newsCtrl.comment);

module.exports = router;
