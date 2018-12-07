
// Survey user responses, and compatability score data stored in the "friends" array of objects (use JSON). 

var friendsArray = [
{
  "name":"Amy",
  "photo":"https://www.pexels.com/photo/woman-in-green-zip-hooded-jacket-on-white-mountain-with-fogs-during-daytime-134068/",
  "scores":[
      3,
      4,
      3,
      5,
      3,
      1,
      3,
      3,
      4,
      5
  ]
},
{
    "name":"Ben",
    "photo":"https://www.pexels.com/photo/man-wearing-white-sweater-and-black-shorts-about-to-run-936094/",
    "scores":[
        4,
        1,
        2,
        3,
        3,
        2,
        5,
        3,
        3,
        1
    ]
  },
  {
    "name":"Diane",
    "photo":"https://www.pexels.com/photo/woman-wearing-red-jacket-1579934/",
    "scores":[
        3,
        3,
        2,
        3,
        3,
        4,
        5,
        2,
        3,
        3
    ]
  },
  {
    "name":"Henry",
    "photo":"https://www.pexels.com/photo/adults-apron-business-counter-580613/",
    "scores":[
        3,
        2,
        3,
        2,
        2,
        3,
        5,
        5,
        2,
        2
    ]
  },
  {
    "name":"Jenny",
    "photo":"https://www.pexels.com/photo/women-wearing-white-long-sleeved-collared-shirt-holding-bitcoin-1037915/",
    "scores":[
        5,
        4,
        4,
        4,
        5,
        4,
        5,
        3,
        4,
        4
    ]
  }
];

//console.log(friendsArray)

// Set require to use this module in other .js files to use the data in this array
module.exports = friendsArray;



