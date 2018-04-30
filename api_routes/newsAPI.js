const 
	router = request("express").Router(),
	newsCtrl = require("../controllers/newsCtrl");

router.route("/").get(newsCtrl.findAll);

router.router("/:id")
	.get(newsCtrl.findById)
	.put(newsCtrl.comment);

router.route("/:refresh").get(newsCtrl.restock);

module.exports = router;
