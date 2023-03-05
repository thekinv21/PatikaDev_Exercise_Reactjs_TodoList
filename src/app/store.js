import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../Redux/Todos.js";

export const store = configureStore({
  reducer: {
    todo: todosReducer,
  },
});
