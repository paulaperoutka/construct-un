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
							date: $(element).find("div.body-wrapper").children("div.story-date").text(),
							title: $(element).find("div.body-wrapper").children("h1.story-title").text(),
							link: $(element).find("div.body-wrapper").children("h1.story-title").has("a").attr("href"),
							category: $(element).find("div.body-wrapper").children("div.topics").text(),
							summary: $(element).find("div.body-wrapper").children("div.news-body").text(),
							imageLink: $(element).find("img").attr("src"),
							imageAuthor: $(element).find("div.field-name-field-scald-photo-credit").children("span.un-news-teaser-scald-credit")
						};

						if(result.title && result.link) {
							db.NewsArticle
								.create(result)
								.then((dbNewsArt) => console.log(dbNewsArt))
								.catch((err) => console.log(err));
						}

					});

					res.send("Articles scraped from https://news.un.org/en/news/region/" + sphere);

				})
				.catch((err) => res.json(err));

		}

		const spheres = ["africa", "americas", "asia-pacific", "middle-east", "europe"];

		sectionScrape("africa");

	}
}