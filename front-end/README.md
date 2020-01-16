# Tabata - Fitness App

Fitness Web App based on [Tabata](https://en.wikipedia.org/wiki/High-intensity_interval_training#Tabata_regimen) - a version of High Intensity Interval Training (HIIT).

## Features

- Random workout - every time you'll get a new set of exercises based on chosen workout duration (4, 8 or 12 minutes), number of sets (1, 2 or 4) and focus muscle group (whole body, upper body, lower body, cardio).
- Create workout - chose the exercises from the list, chose number of sets and you are good to go!
- Tabata timer - 20 sec of workout - 10 sec rest.
- Notification about next exercise in workout - are shown during rest period.
- List of exercises in workout - active exercises is highlighted. Autoscroll to active exercise.
- Video of exercises - are shown during workout.
- Repeat workout - after finishing workout, you can repeat it from the beginning.

## Status

The app is still work in progress. New features and bug fixes are added constantly. But the core app is fully functioning.

## Technologies

### Front-end

- React.js

### Back-end

- Spring Boot (Java Framework)
- PostgreSQL Database
- Vaadin Framework for admin console

## Launch

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
