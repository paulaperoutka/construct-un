const 
	axios = require("axios"),
	db = require("../models");

module.exports = {
	findAll: function(req, res) {
		db.Country
			.find(req.query)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(400).json(err));
	},
	findByCountry: function(req, res) {
		db.Country
			.find({ country: req.params.id })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(400).json(err));
	},
	restock: function(req, res) {
		
		sectionScrape = function(country) {
      
			axios
				.get("https://restcountries.eu/rest/v2/name/" + country)
				.then(page => {

					
					let cData= page.data[0]
					
						const result = {
							country: country.trim(),
							capital: cData.capital,
							officialLanguage: cData.languages[0].name,
							flag: cData.flag,
							area: cData.area,
							population: cData.population,
							currency: cData.currencies[0].name
							
						};

						
							db.Country
								.create(result)
								.then(dbCountry => console.log(dbCountry))
								.catch(err => console.log(err));
						

					

					console.log("Country Scraped" + country);

				})
				.catch(err => res.json(err));

		}

		const countries = ["Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bangladesh", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brasil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chili", "China", "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominican Republic", "Ecuador", "Egypt", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Finland", "France", "French Guiana", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Lituania", "Luxembourg", "Lybia", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Mali", "Mauritania", "Mexico", "Moldavia", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Nanibia", "Nepal", "Netherlands", "New Guinea", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "Salvador", "Saudi Arabia", "Senegal", "Serbia", "Sierra Leone", "Slovakia", "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Surinam", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Thailand", "Togo", "Trinidad and Tabago", "Tunisia", "Turkey", "Turkmenistan", "United States of America", "Uganda", "Ukraine", "United Arab Emerates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Viet-Nam", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]

		db.Country
			.remove({})
			.then(countries.forEach(country => sectionScrape(country)))
			.catch(err => console.log(err));

		res.send("Countries Scraped from wikipedia");

	}
}