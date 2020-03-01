import React from "react";

import Item from './Item';

export default function TodoList(props) {
  return (
    <div>
      {props.todo.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}