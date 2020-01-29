import React, { useReducer } from "react";
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import {
  reducer,
  initialState,
  ADD_ITEM,
  TOGGLE_ITEM,
  CLEAR_COMPLETED
} from "../todoList/reducers/reducer";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const toggleItem = itemId => {
    dispatch({ type: TOGGLE_ITEM, payload: itemId });
  };

  const clearCompleted = e => {
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Shopping List</h1>
        <TodoForm addItem={addItem} />
      </div>
      <TodoList
        todo={state.todo}
        toggleItem={toggleItem}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default Todo;