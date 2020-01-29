import React, { useState } from "react";

export default function TodoForm(props) {
  const [item, setItem] = useState("");

  const handleChanges = e => {
    setItem({ [e.target.name]: e.target.value });
  };

  const submitItem = e => {
    console.log(props.addItem);
    e.preventDefault();
    setItem({ item: "" });
    props.addItem(e, item);
  };

  return (
    <div>
      <form onSubmit={submitItem}>
        <input
          placeholder="Todo"
          type="text"
          value={item.item}
          name="item"
          onChange={handleChanges}
        />
        <button className='add-btn'>Add</button>
      </form>
    </div>
  );
}