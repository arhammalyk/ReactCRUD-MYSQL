const initialState = {
  tasks: [],
};

const userTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};
export default userTasksReducer;
