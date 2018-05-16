const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
	sphere: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	summary: {
		type: String,
		required: true
	},
	imageLink: {
		type: String,
		required: true
	},
	imageAuthor: {
		type: String,
		required: true
	},
	comments: [{
		user: String,
		body: String
	}]	
});

module.exports = mongoose.model("NewsArticle", articleSchema);