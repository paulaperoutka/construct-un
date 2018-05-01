const 
	express = request("express"),
	controllers = require("../controllers");

const 
	router = express.Router();
	newsCtrl = controllers.newsCtrl;

router.route("/").get(newsCtrl.findAll);

router.router("/:id")
	.get(newsCtrl.findById)
	.put(newsCtrl.comment);

router.route("/:refresh").get(newsCtrl.restock);

module.exports = ("newsAPI", router);
