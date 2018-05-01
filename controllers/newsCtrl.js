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
	comment: function(req, res) {
		db.NewsArticle
			.findOneAndUpdate({_id: req.params.id}, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(400).json(err));
	},
	restock: function(req, res) {
		
		sectionScrape = function(sphere) {

			axios
				.get("https://news.un.org/en/news/region/" + sphere)
				.then((page) => {

					const $ = cheerio.load(page.data);

					$("div.views-row").each((i, element) => {

						const result = {
							sphere: sphere,
							date: $(element).find("span").children(".date-display-single").text(),
							title: $(element).find("h1").children(".story-title").text(),
							link: $(element).find("h1").children("a").attr("href"),
							category: $(element).find("div.field-item").children("a").text(),
							summary: $(element).find("p").text(),
							imageLink: $(element).find("img").attr("src")
						};

						db.NewsArticle
							.create(result)
							.then((dbNewsArt) => console.log(dbNewsArt))
							.catch((err) => console.log(err));

					});

					res.send("Articles scraped from https://news.un.org/en/news/region/" + sphere);

				})
				.catch((err) => res.json(err));

		}

		const spheres = ["africa", "americas", "asia-pacific", "middle-east", "europe"];

	}
}