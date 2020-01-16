export const toggleButtonPressed = (exercises, pressedExercise) => {
    return exercises.map(exercise => exercise.id === pressedExercise.id
        ? {...exercise, isPressed: !pressedExercise.isPressed}
        : exercise
    );
};