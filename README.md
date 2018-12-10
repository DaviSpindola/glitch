This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

Develop version

### `yarn run develop`

Build version

### `yarn run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### The application structure is divided in two layers:

- session layer - components derived from user session
- app layer - component derived from user state (url based)

session layer includes:

- Navigation bar
- Publication container
- Post container
- Settings container

app layer includes:

- navigation feed
- profile canopy

stack:

- firestore
- cloud storage
- app engine
- react
