const 
	express = require("express"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	routes = require("./api_routes"),
	path = require("path");

const 
	PORT = process.env.PORT || 3001,
	app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api/news", routes.newsAPI);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ConstructUN");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});