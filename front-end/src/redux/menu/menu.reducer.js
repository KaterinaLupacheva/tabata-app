const INITIAL_STATE = {
  sections: [
    {
      title: 'Random Workout',
      linkUrl: 'parameters',
      id: 1,
    },
    {
      title: 'Create Workout',
      linkUrl: 'create-workout',
      id: 2,
    },
  ],
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuReducer;
