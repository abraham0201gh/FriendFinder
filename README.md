Deployed site:  https://friendfinder-heroku18.herokuapp.com/

# Friend Finder - Node and Express Servers

### Overview

This full-stack site takes in results from users' completed surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match.   Theis app is deployed to Heroku.

### Instructions

1. The survey consists of 10 questions.  Each answer is based a scale of 1 to 5 according to how much the user agrees or disagrees with a question.

2. The `server.js` file requires the basic NPM packages: `express` and `path`.

3. The `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` that displays the survey page.
   * A default, catch-all route that leads to `home.html`, which displays the home page.

4. The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This is used to handle incoming survey results. This route is also used to handle the compatibility logic.

5. The application's data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects roughly follows the format below.

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

6. The user's most compatible friend is determined using the following as a guide:

   * Each user's results are converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * A score difference is determined by comparing the current user's scores against those from other users, question by question. The differences are added up to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * The absolute value of the differences is used. Put another way: no negative solutions! The app calculates both `5-3` and `3-5` as `2`, and so on.
   * The closest match is the user with the least amount of difference.

7. Once the current user's most compatible friend is found, the result is displayed as a modal pop-up.
   * The modal displays both the name and picture of the closest match.

