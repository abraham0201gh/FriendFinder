
// Pull in, import, and require the data we want to display on our API Routes
var surveyData = require ("../data/friends.js");


//Using data in other parts of the program with module.exports ("app" in the parameter represents express)
module.exports = function(app) {

// Get route with url `/api/friends`. Use to display the data of all possible friends in JSON format (using "surveyData") in friends.js file.
app.get("/api/friends", function(req, res) {
    res.json(surveyData);
});

// Post route to `/api/friends` used to handle incoming survey results in friends.js file. This route is also used to handle the compatibility. logic.
app.post("/api/friends", function(req, res) {

  // User input into newFriend where req.body is equal to the JSON post data sent from the user (involves body parsing middleware)  
  var newFriend = req.body;

  // RegEx Pattern to remove spaces from newFriend input data
  newFriend.routename = newFriend.name.replace(/\s+/g, "").toLowerCase();
  //console.log(newFriend);

  // Add newFriend input data into the friends array
  surveyData.push(newFriend);

  // Display newFriend input data in JSON format
  res.json(newFriend);

  //console.log(newFriend);

  // Function call
  matchComparison();

});
}

// Adjust to complete loop 
// Send/route to modal for display to user

function matchComparison () {
  // User's input is converted into an aray of numbers. Match friend scores request.  
  var inputArray = [];
  var matchScores = req.body.scores;
  var totalDifference = 0;

  // For loop to compare scores
  for (var i = 0; i < surveyData.length; i++) {
    if (i != newFriend) {
    console.log(surveyData[i]);
    
      var userTotal = 0;
      var matchTotal = 0;
    }
      // Loop score comparisons with user and match options
      for (var m = 0; m < surveyData[i].scores.length; m++) {
      userTotal += Math.abs(surveyData[i].scores[m] - matchTotal);

      // If found a closer match, set closer match to "match"
      if (userTotal < matchTotal) {
        friendMatch = surveyData[i];

      }  
    }    
  }

// Telling server to send closest match (least point difference)
res.send(friendMatch)  
}; 


// Create route to closest match
// app.post("/", function(req, res){
//   req.body.id = surveyData.length;
//   surveyData.push(req.body);
//   res.send(surveyData);
// });


