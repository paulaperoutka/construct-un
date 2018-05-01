const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
	sphere: {
		type: String,
		require: true
	},
	date: {
		type: String,
		require: true
	},
	title: {
		type: String,
		require: true
	},
	link: {
		type: String,
		require: true
	},
	category: {
		type: String,
		require: true
	},
	summary: {
		type: String,
		require: true
	}
});

module.exports = mongoose.model("NewsArticle", articleSchema);