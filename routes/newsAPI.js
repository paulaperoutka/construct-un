const 
	express = require("express"),
	controllers = require("../controllers");

const 
	router = express.Router(),
	news = controllers.newsController,
	comments = controllers.commentController;

router.route("/").get(news.findAll);

router.route("/refresh").get(news.restock);

router.route("/article/:id")
	.get(news.findById)
	.put(comments.comment);

module.exports = router;
