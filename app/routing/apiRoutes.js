
// Pull in, import, and require the data we want to display on our API Routes
var surveyData = require ("../data/friends.js");


//Using data in other parts of the program with module.exports ("app" in the parameter represents express)
module.exports = function(app) {

// Get route with url `/api/friends`. Used to display the data of all possible friends in JSON format (using "surveyData").
app.get("/api/friends", function(req, res) {
    res.json(surveyData);
});

// Post route `/api/friends` used to handle incoming survey results in friends.js file. This route is also used to handle the compatibility logic.
app.post("/api/friends", function(req, res) {

  // User input into newFriend where req.body is equal to the JSON post data sent from the user (involves body parsing middleware)  
  var newFriend = req.body;

  // Add newFriend input data into the friends array
  surveyData.push(newFriend);
  //console.log(newFriend);
  
  // Function call
  var match = matchComparison(newFriend);
  //console.log(match);

  res.send(match);
});
}

function matchComparison (newFriend) {

  // User's input is converted into an aray of numbers. Match friend scores request.  
  // User's matched selection
  var friendMatch;
  // Score difference for each comparison (user and match option)
  var userTotal = 0;
  //  Set above total possible socre to begin comparison processs (then reset to new lower comparison number)
  var matchTotal = 41;   

  // For loop (outer object loop) to compare scores (included -1 to excluse comparison with self since last added to array)
  for (var i = 0; i < surveyData.length - 1; i++) {

      // Loop score comparisons bewtween one match option and user  
      for (var m = 0; m < surveyData[i].scores.length; m++) {
      userTotal += Math.abs(surveyData[i].scores[m] - newFriend.scores[m]);
      //console.log(newFriend.scores);
      //console.log(surveyData[i].scores[m] + "  ;  " + newFriend.scores[m]);

      }  
 
      // If true then storing into friendMatch
      if (userTotal < matchTotal) {
         friendMatch = surveyData[i];
         matchTotal = userTotal
      }

      //else {console.log(i + " match score = " + userTotal);
      //console.log("-------");
      //};

      // Reseting to zero for next match comparison in the loop
      userTotal = 0;
    
      }

  return friendMatch;
  }



