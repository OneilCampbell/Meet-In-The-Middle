# Meet In The Middle

It's finally the weekend, and you and your friends are planning to go out together and blow off some steam. Once again the conversation, and sometimes even the debate, of where to go arises. 

Wouldn't it be much easier if that process could be streamlined and made easier? If the burden to make a decision no longer rested on your shoulders? 

Well, fret no longer. Meet In The Middle is here to the rescue!

Simply enter your location and your prefered choice of drink (beer, wine, or cocktails), music(hip-hop, edm, live jazz), food(burgers, wings, quesadillas), and/or activity(billards, dancing, socializing). Our App will then generate a list of places that not only best match your preferences but are also in your area.

Do you often have competing or differing interests with another member of your group? Or maybe you are simply tired of being the one friend that travels the furthest to accomodate everyone else.

The group planning feature of our app allows you to create an event, enter your location and preferences, then send the event to your friends via a link, so that they can also enter their own locations and personal preferences. All of this information is then aggregated to generate a list of venues that best match the combination of preferences and are also relatively equidistant from you and all your friends. Then you can simply vote in real time on the venue that you all want to go to.

<span>
  <img src="https://res.cloudinary.com/oneilcampbell/image/upload/v1557007352/MeetInTheMiddle.png" alt="homepage" >
  <img src="https://res.cloudinary.com/oneilcampbell/image/upload/v1557007352/MeetInTheMiddle2.png" alt="preferences" >
  <img src="https://res.cloudinary.com/oneilcampbell/image/upload/v1557007352/MeetInTheMiddle3.png" alt="results" >
</span>




## To Contribute to our project
### Getting Started
- Fork and clone this repository
- Inside the new directory, run the following commands in your CLI:
    - <code>npm install</code>
    - <code>npm run db:init</code>
    - <code>npm run db:reset</code>
    - <code>npm run db:seed</code>
- Code away!
- Submit a Pull Request

## React Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Express Backend

The backend of this project was built using Express, PostgreSQL, Sequelize and a number of node packages(pg, pg-hstore, body-parser, morgan, sequelize, etc.) which will be installed via the <code>npm install</code> command mentioned earlier. For a full list of all node packages, see the list of dependencies in the package.json file.

There are three commands that need to be run any time a change is made to the backend files (./models/models.js, ./scripts/seed.js, ./scripts/resetDb.js, ./server.js) in order to restart the server and incorporate the changes. These commands also mentioned earlier, are:

- <code>npm run db:init</code>
- <code>npm run db:reset</code>
- <code>npm run db:seed</code>


We look forward to seeing your pull requests!
