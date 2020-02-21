import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import exercisesReducer from "./exercises/exercises.reducer";
import menuReducer from "./menu/menu.reducer";
import workoutReducer from "./workout/workout.reducer";
import circuitReducer from "./circuit/circuit.reducer";
import timerReducer from "./timer/timer.reducer";
import audioReducer from "./audio/audio.reducer";
import durationReducer from "./duration/duration.reducer";
import muscleGroupReducer from "./muscle-group/muscle-group.reducer";

export default combineReducers({
  user: userReducer,
  exercises: exercisesReducer,
  menu: menuReducer,
  workout: workoutReducer,
  circuit: circuitReducer,
  timer: timerReducer,
  audio: audioReducer,
  duration: durationReducer,
  muscleGroup: muscleGroupReducer
});
