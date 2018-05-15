const 
	express = require("express"),
	controllers = require("../controllers");

const 
	router = express.Router(),
	countries = controllers.countriesController
	

router.route("/").get(countries.findAll);

router.route("/refresh").get(countries.restock);

router.route("/:id")
	.get(countries.findByCountry)
	

module.exports = router;