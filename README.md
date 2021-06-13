# Tabata - Fitness App

Fitness Progressive Web App ([PWA](https://ramonak.io/posts/what-is-progressive-web-app)) based on [Tabata](https://en.wikipedia.org/wiki/High-intensity_interval_training#Tabata_regimen) - a version of High Intensity Interval Training (HIIT).

## Features

- Random workout - every time you'll get a new set of exercises based on chosen workout duration (4, 8 or 12 minutes), number of sets (1, 2 or 4) and focus muscle group (whole body, upper body, lower body, cardio).
- Create workout - chose the exercises from the list, chose number of sets and you are good to go!
- Tabata timer - 20 sec of workout, 10 sec - rest. Voice countdown.
- Notifications with video of the next exercise in workout - are shown during rest period.
- List of exercises in workout - active exercises is highlighted. Autoscroll to active exercise.
- Video of exercises - are shown during workout.
- Repeat workout - after finishing workout, you can repeat it from the beginning.
- No sign in required, no data collection.

## Status

The app is fully functioning. I'm adding a new available exercises from time to time. Occasional bugfixing.

## Technologies

### Front-end

- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Progressive Web App](https://ramonak.io/posts/what-is-progressive-web-app)
- [Sass](https://sass-lang.com/)
- [React-spring animation](https://www.react-spring.io/)
- Responsive design

### Back-end

- [Spring Boot](https://spring.io/projects/spring-boot) (Java Framework)
- [Spring Security](https://spring.io/projects/spring-security)
- [PostgreSQL Database](https://www.postgresql.org/)
- [Vaadin Framework](https://vaadin.com/) for admin console

### CI/CD

- [GitHub Actions](https://github.com/features/actions) for automated build and deploy to server

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

* `mvn spring-boot:run` - start backend server
