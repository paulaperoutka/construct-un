const db = require("../models");

module.exports = {
	findAll: function(req, res) {
		db.Resolution
			.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	},
	findById: function(req, res) {
		db.Resolution
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	},
	create: function(req, res) {
		db.Resolution
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	},
	update: function(req, res) {
		db.Resolution
			.findOneAndUpdate({_id: req.params.id}, req.body)
			.then(dbmodel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	},
	delete: function(req, res) {
		db.Resolution
			.findById({_id: req.paams.id})
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	}
};