# Tabata - Fitness App

Fitness Progressive Web App ([PWA](https://ramonak.io/posts/what-is-progressive-web-app)) based on [Tabata](https://en.wikipedia.org/wiki/High-intensity_interval_training#Tabata_regimen) - a version of High Intensity Interval Training (HIIT).

## Features

- Random workout - every time you'll get a new set of exercises based on chosen workout duration (4, 8 or 12 minutes), number of sets (1, 2 or 4) and focus muscle group (whole body, upper body, lower body, cardio).
- Create workout - chose the exercises from the list, chose number of sets and you are good to go!
- Tabata timer - 20 sec of workout - 10 sec rest with voice countdown.
- Notification about next exercise in workout - are shown during rest period.
- List of exercises in workout - active exercises is highlighted. Autoscroll to active exercise.
- Video of exercises - are shown during workout.
- Repeat workout - after finishing workout, you can repeat it from the beginning.
- No sign in required, no data collection.

## Status

The app is still work in progress. New features and bug fixes are added constantly. But the core app is fully functioning.

## Technologies

### Front-end

- React.js
- Redux
- SCSS
- Responsive design

### Back-end

- Spring Boot (Java Framework)
- PostgreSQL Database
- Vaadin Framework for admin console

## Launch - Front-end

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Install dependencies:

```
npm install
```

### npm scripts

* `npm start` - start development server
* `npm run build` - build into the `public/` directory

## Launch - Back-end

Back-end app is deployed to Heroku: [Tabata-backend](https://tabata-backend.herokuapp.com/)
