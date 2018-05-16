const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resolutionSchema = new Schema ({
	memberNation: {
		type: String,
		required:true
	},
	resolutionTitle: {
		type: String,
		required: true
	},
	sponsoringState: {
		type: String,
	},
	objective: {
		type: String, 
		required: true
	},
	proposal: {
		type: String, 
		required: true
	}
});

const Resolution = mongoose.model("Resolution", resolutionSchema);

module.exports = Resolution;
