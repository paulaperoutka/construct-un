const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
	country: {
		type: String,
		required: true
  },
  capital: {
		type: String,
		
	},
	officialLanguage: {
		type: String,
		
  },
  flag: {
		type: String,
		
	},
	area: {
		type: String,
		
	},
	population: {
		type: String,
		
  },
  currency: {
		type: String,
		
  },
	comments: []	
});

module.exports = mongoose.model("Country", countrySchema);