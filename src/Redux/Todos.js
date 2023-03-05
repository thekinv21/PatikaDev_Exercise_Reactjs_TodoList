import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "1",
      todo: "Learn ReactJS",
      description: "Learn All Hooks",
    },
    {
      id: "2",
      todo: "Learn Python",
      description: "What is this?",
    },
    {
      id: "3",
      todo: "Learn C#",
      description: "Learn how To use that",
    },
    {
      id: "4",
      todo: "Learn Java",
      description: "Learn Spring Boot",
    },
    {
      id: "5",
      todo: "Learn Swift",
      description: "Mobile Development",
    },
  ],              //*----------------Yapılacak Todolar listesi---------------------
  completed: [], //*----------------Bitirilen Todolar listesi---------------------
  selectedTodo: null, //*---------------Güncellemk için seçilen Todo---------------------
  completedTodo: null, //*---------------Bitirmek için seçilen Todo---------------------
  statusTodo : null , //*----------------Todo yapılıp yapılmadığını bilmek için-----------
};

export const todos = createSlice({
  name: "todos",
  initialState,

  reducers: {
    //?-------------------Add Todo in Todolist------------------

    addTodo: (state, action) => {
      state.todos = [
        {
          id: action.payload.id,
          todo: action.payload.todo,
          description: action.payload.description,
        },
        ...state.todos,
      ];
    },

    //?-------------------Remove Todo in Todolist------------------

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((del) => del.id !== action.payload);
    },

    //?-------------------Update Todo in Todolist------------------

    updateTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );

      state.todos[todoIndex].todo = action.payload.todo;
      state.todos[todoIndex].description = action.payload.description;
    },

    //?-------------------Select editing Todo in Todolist----------

    setSelectedTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      state.selectedTodo = selectedTodo;
    },

    //?-------------------Clear Todos in Todolist------------------

    clearAllTodo: (state) => {
      state.todos = [];
    },

    //?-------------------Completed Todos in Todolist-------------

    completedTodo: (state, action) => {
      const completeTodo = state.todos.find((todo) => todo === action.payload);
      state.completedTodo = completeTodo;
      state.completed.push(action.payload);
    }

  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  clearAllTodo,
  setSelectedTodo,
  completedTodo
} = todos.actions;
export default todos.reducer;
