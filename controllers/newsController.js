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
	restock: function(req, res) {
		
		sectionScrape = function(region) {

			axios
				.get("https://news.un.org/en/news/region/" + region)
				.then((page) => {

					const $ = cheerio.load(page.data);

					$("div.views-row").each((i, element) => {

						const result = {
							sphere: region,
							date: $(element).find("div.story-date").text(),
							title: $(element).find("h1.story-title").text(),
							link: "https://news.un.org" + $(element).find("h1.story-title").children("a").attr("href"),
							category: $(element).find("div.topics").text(),
							summary: $(element).find("div.body-wrapper").children("div.news-body").text(),
							imageLink: $(element).find("img").attr("src"),
							imageAuthor: $(element).find("div.field-name-field-scald-photo-credit").children("span.un-news-teaser").text()
						};

						if(result.title) {
							db.NewsArticle
								.create(result)
								.then((dbNewsArt) => console.log(dbNewsArt))
								.catch((err) => console.log(err));
						}

					});

					console.log("Articles scraped" + region);

				})
				.catch((err) => {
					res.json(err);
					console.log(err);
				});

		}

		const regions = ["africa", "americas", "asia-pacific", "middle-east", "europe"];

		db.NewsArticle.remove({}, regions.forEach((region) => sectionScrape(region)));

		res.send("Articles scraped from https://news.un.org");

	}
}