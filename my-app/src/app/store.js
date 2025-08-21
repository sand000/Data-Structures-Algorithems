import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todos/todoSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});

export default store;
