const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resolutionSchema = new Schema ({
	title: {
		type: String,
		required:true
	},
	author: {
		type: String,
		required: true
	},
	sponsoringStates: {
		type: String,
	},
	objective: {
		type: String, 
		required: true
	},
	proposalBody: {
		type: String, 
		required: true
	}
});

const Resolution = mongoose.model("Resolution", resolutionSchema);

module.exports = Resolution;