export const toggleExerciseInWorkout = (workoutExercises, exerciseToToggle) => {
  const existingExercise = workoutExercises.find(
    exercise => exercise.id === exerciseToToggle.id
  );
  if (existingExercise) {
    return workoutExercises.filter(el => el.id !== existingExercise.id);
  }
  const newArray = [...workoutExercises, exerciseToToggle];
  return newArray.map(obj => ({ ...obj, isActive: false, isPressed: true }));
};

export const setActiveExercise = exercises => {
  let activeIndex = -1;
  const updateArray = exercises.map((el, i) => {
    if (el.isActive === true && i < exercises.length - 1) {
      activeIndex = i;
      return {
        ...el,
        isActive: false
      };
    }
    return el;
  });
  return updateArray.map((el, i) => {
    if (i === activeIndex + 1) {
      return {
        ...el,
        isActive: true
      };
    }
    return el;
  });
};

export const getNextExerciseName = exercises => {
  const nextExercise = exercises.find(
    (el, i, array) => el.isActive === true && i < array.length - 1
  );
  if (nextExercise) {
    const index = exercises.indexOf(nextExercise);
    return exercises[index + 1].name;
  }
  return exercises[0].name;
};

export const getNextExerciseLink = exercises => {
  const nextExercise = exercises.find(
    (el, i, array) => el.isActive === true && i < array.length - 1
  );
  if (nextExercise) {
    const index = exercises.indexOf(nextExercise);
    return exercises[index + 1].link;
  }
  return exercises[0].link;
};

export const resetToInitialState = exercises => {
  return exercises.map(el => {
    if (el.isActive === true) {
      return {
        ...el,
        isActive: false
      };
    }
    return el;
  });
};
