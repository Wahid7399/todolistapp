import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todos")) ||[];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(state.filter((item) => item.id !== action.payload))
      );
      return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state, action) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(
          state.map((todo) => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                item: action.payload.item,
              };
            }
            return todo;
          })
        )
      );
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeTodos: (state, action) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(
          state.map((todo) => {
            if (todo.id === action.payload) {
              return {
                ...todo,
                completed: true,
              };
            }
            return todo;
          })
        )
      );
      
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;