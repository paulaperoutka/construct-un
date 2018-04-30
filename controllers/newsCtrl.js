const 
	axios = require("axios"),
	cheerio = require("cheerio"),
	db = require("../models");

module.exports = {
	findAll: function(req, res) {
		db.NewsArticle
			.find(req.query)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(400).json(err));
	},
	findById: function(req, res) {
		db.NewsArticle
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(400).json(err));
	},
	// comment: function(req, res) {
	// 	.findOneAndUpdate({_id: req.params.id}, req.body)
	// 	.then(dbModel => res.json(dbModel))
	// 	.catch(err => res.status(400).json(err))
	// },
	restock: function(req, res) {
		axios
			.get("*")
			.then((res) => {
				const $ = cheerio.load(res.data);
				// scrape from html
			}).catch((err) => res.json(err));
	}
}