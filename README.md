# Exercise-Tracker using MERN Stack
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Inside project, in the backend directory you can run:

### `node server.js`
Runs the backend server.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.


The page will reload if you make edits.<br />
You will also see any lint errors in the console.
To test the server API, I'm using a tool called [Insomnia](https://insomnia.rest/).
[Postman](https://www.getpostman.com/) is a great tool for this purpose too.
## Database Connection
For this project I'm hosting the database using MongoDB Atlas, I'm using a free tier on MongoDB Atlas, you can use a local database.
[MongoDb Atlas-Getting started](https://codeforgeek.com/mongodb-atlas-node-js/)

#### Note:
To test the backend server you need to:
- Inside the root folder (“mern-exercise-tracker”)
- In terminal run `cd backend`
- then run `node server.js`

## API endpoints
- The server URL is [https://localhost:5000](https://localhost:5000)
- You can send a GET request to [https://localhost:5000/users/](https://localhost:5000/users/) and get a list of users back 
- You can send a GET request to [https://localhost:5000/exercises/](https://localhost:5000/exercises/) and get a list of exercises back
- To add a user, enter the url: [http://localhost:5000/users/add](http://localhost:5000/users/add), and the JSON.
- To post an exercise to [http://localhost:5000/exercises/add](http://localhost:5000/exercises/add), to check send a GET request to [http://localhost:5000/exercises/](http://localhost:5000/exercises/), or the MongoDB Atlas dashboard.
- Given an id of the exercise `/:id` GET endpoint returns an exercise item.
- To update an existing exercise item, use the `/update/:id` POST endpoint.
- To delete the exercise, send a DELETE request.


## Frontend

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

The front is connected to the the back using `axios` library, so we can send HTTP request to the backend




## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


