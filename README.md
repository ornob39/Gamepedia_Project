# Gamepedia

## A database server of games across all platforms

- Website Features
  - Search for any games in the database
    - View Game Trailer, Screenshots and Metacritic Score and link to Metacritic
  - Add your own review
    - Create a review
    - Update your previous review
    - Delete your review(s)
  - User Authentication
    - Signup for a new user account
    - Log in with your existing one
    - JSON Web Token is used for secure authentication system.

## Development Stack

- Frontend

  - Angular 11 was used to developed the front end.
  - For UI design, Angular Material Design pattern was followed.
  - Angular Flex was also used alongside with bootstrap 5 for responsive experience.

- Backend
  - NodeJS and ExpressJS was used for backend server.
  - MongoAtlas was used as NOSQL database management.
  - Morgan was used for monitoring the server.
  - Mongoose was used to manage the database.
  - A REST API was created using Express Router
  - For game data, public API was used.

## Deployment of the website

- Heroku was used to deploy the website
- Express generator was used to create a template then it was changed to support our APIs.

## Links

- Main development repository: <https://github.com/ornob39/Gamepedia_Project>
- Deployment repository for Heroku: <https://github.com/ornob39/Gamepedia-Server>
- Website URL : <https://gamepedia-1.herokuapp.com/>
