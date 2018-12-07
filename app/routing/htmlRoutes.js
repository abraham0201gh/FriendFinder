// Route data for user to view and what data user is abe to post to the server to store

var path = require("path");

// Set require to use this module in other .js files
module.exports = function (app) {

// A GET route to `/survey` that displays the survey page
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
});

// A default, catch-all route that leads to `home.html` and displays the home page (if using the app and URL not already defined and if not go to survey page)
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
}); 
}
