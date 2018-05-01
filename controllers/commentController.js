const db = require("../models");

module.exports = {
	comment: function(req, res) {
		switch(req.model) {
			case "article":
				const comment = req.comment;
				db.NewsArticle
					.findOneAndUpdate(
						{_id: req.params.id}, 
						{$push: {comments: comment}}
					)
					.then(dbModel => res.json(dbModel))
					.catch(err => res.status(400).json(err));
				break;
			default:
				res.send("Unrecognized database model"); 
		}
	}
}