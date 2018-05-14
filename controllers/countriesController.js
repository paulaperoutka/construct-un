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

		const countries = ["Afghanistan"," Albania"," Algeria"," Angola"," Argentina"," Armenia"," Australia"," Austria"," Azerbaijan"," Bangladesh"," Belarus"," Belgium"," Belize"," Benin"," Bhutan"," Bolivia"," Bosnia_and_Herzegovina"," Botswana"," Brasil"," Brunei"," Bulgaria"," Burkina_Faso"," Burundi"," Cambodia"," Cameroon"," Canada"," Central_African_Republic"," Chad"," Chili"," China"," Colombia"," Congo"," Costa_Rica"," Croatia"," Cuba"," Czech_Republic"," Democratic_Republic_of_the_Congo"," Denmark"," Djibouti"," Dominican_Republic"," Ecuador"," Egypt"," Equatorial_Guinea"," Eritrea"," Estonia"," Ethiopia"," Finland"," France"," French_Guiana"," Gabon"," Gambia"," Georgia"," Germany"," Ghana"," Greece"," Greenland"," Guatemala"," Guinea"," Guinea-Bissau"," Guyana"," Haiti"," Honduras"," Hungary"," Iceland"," India"," Indonesia"," Iran"," Iraq"," Ireland"," Israel"," Italy"," Ivory_Coast"," Jamaica"," Japan"," Jordan"," Kazakhstan"," Kenya"," Kuwait"," Kyrgyzstan"," Laos"," Latvia"," Lebanon"," Lesotho"," Liberia"," Lituania"," Luxembourg"," Lybia"," Macedonia"," Madagascar"," Malawi"," Malaysia"," Mali"," Mauritania"," Mexico"," Moldavia"," Mongolia"," Montenegro"," Morocco"," Mozambique"," Nanibia"," Nepal"," Netherlands"," New_Guinea"," New_Zealand"," Nicaragua"," Niger"," Nigeria"," North_Korea"," Norway"," Oman"," Pakistan"," Panama"," Paraguay"," Peru"," Philippines"," Poland"," Portugal"," Puerto_Rico"," Qatar"," Romania"," Russia"," Rwanda"," Salvador"," Senegal"," Serbia"," Sierra_Leone"," Slovakia"," Somalia"," South_Africa"," South_Korea"," Spain"," Sri_Lanka"," Sudan"," Surinam"," Swaziland"," Sweden"," Switzerland"," Syria"," Taiwan"," Tajikistan"," Thailand"," Togo"," Trinidad_and_Tabago"," Tunisia"," Turkey"," Turkmenistan"," USA"," Uganda"," Ukraine"," United_Arab_Emerates"," United_Kingdom"," Uruguay"," Uzbekistan"," Venezuela"," Viet-Nam"," Western_Sahara"," Yemen"," Zambia"," Zimbabwe"]

		db.Country
			.remove({})
			.then(countries.forEach(country => sectionScrape(country)))
			.catch(err => console.log(err));

		res.send("Countries Scraped from wikipedia");

	}
}