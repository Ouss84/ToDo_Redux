import * as actionTypes from "./actions";

const initialState = {
  notes: [
    {
      id: 1,
      title: "Create clean app",
      task: "npx create-react-app",
      done: true,
    },
    {
      id: 2,
      title: "Install Redux",
      task: "npm install redux",
      done: false,
    },
    {
      id: 3,
      title: "Install Complementary Packages​",
      task: "npm install react-redux and npm install --save-dev redux-devtools",
      done: false,
    },
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        notes: [
          ...state.notes,
          {
            id: new Date().valueOf(),
            ...action.payload,
            done: false,
          },
        ],
      };
    case actionTypes.REMOVE_TODO:
      const shortnedList = state.notes.filter(
        (item) => item.id !== action.payload
      );

      return { ...state, notes: shortnedList };
    case actionTypes.TODO_DONE:
      const taskDone = state.notes.map((item) => {
        return item.id === action.payload
          ? { ...item, done: !item.done }
          : { ...item };
      });
      return { ...state, notes: taskDone };

    default:
      return state;
  }
};
export default reducer;
