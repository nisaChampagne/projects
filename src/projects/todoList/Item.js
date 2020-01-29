import React from "react";

export default function Todo(props) {
  return (
    <div className="itemContainer" onClick={() => props.toggleItem(props.item.id)}>
      <p className={`item${props.item.completed ? " completed" : ""}`}>
        {props.item.name}
      </p>
    </div>
  );
}