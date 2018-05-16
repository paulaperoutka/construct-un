const 
	express = require("express"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	routes = require("./routes"),
  path = require("path"),
  passport = require('passport');
  config = require('./config');
const 
	PORT = process.env.PORT || 3001,
	app = express();

process.setMaxListeners(Infinity);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
// const authCheckMiddleware = require('./middleware/auth-check');
// app.use('/api', authCheckMiddleware);

// authentication routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/loginApi');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.use("/api/news", routes.newsAPI);
//countries api route
app.use("/api/countries", routes.countriesAPI);

app.use("/api/resolutions", routes.resolutionAPI);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ConstructUN");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

// The websocket server. WIP. Could be external file(?)

const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8989 })

const users = []

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}

wss.on('connection', (ws) => {
  let index
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    switch (data.type) {
      case 'ADD_USER': {
        index = users.length
        users.push({ name: data.name, id: index + 1 })
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }))
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws)
        break
      }
      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author
        }, ws)
        break
      default:
        break
    }
  })

  ws.on('close', () => {
    users.splice(index, 1)
    broadcast({
      type: 'USERS_LIST',
      users
    }, ws)
  })
})