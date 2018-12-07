// Already Installed:  (1) NPM install;  (2) NPM init -y [to get package.JSON];  (3) NPM express;  (4) NPM path; and (5) NPM body-parser  [node.modules for each packages]

// Require these libraries/dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser")

// Express app set up (configuration) and set port  (server provider defined or PORT 8080)
var app = express();
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded (set up to handle data parsing)
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

// Parse application/json
app.use(bodyParser.json())

// Require routes for apiRoutes and htmlRoutes files, and pass the express "app" to use with this function.  apiRoutes is listed first because that is where the data is being pulled from to display in html pages.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Server listening started
app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
});





