import React, { Component } from "react";
import * as uuid from "uuid";
//https://github.com/microsoft/TypeScript/issues/3337 fixed the import issue I was getting for the above

import {
    List
  } from 'semantic-ui-react'
  
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.state = {
      list: [],
      input: ""
    };
  }

  addItem = () => {
    const Items = {
      id: uuid.v4(),
      value: this.input.current.value,
      Date: new Date().toUTCString()
    };

    if (localStorage.getItem("list") == null) {
      const list = [];
      list.push(Items);
      localStorage.setItem("list", JSON.stringify(list));
    } else {
      const list = JSON.parse(localStorage.getItem("list"));
      list.push(Items);
      localStorage.setItem("list", JSON.stringify(list));
    }
    this.setState({
      list: JSON.parse(localStorage.getItem("list"))
    });
  };

  componentDidMount() {
    const list = window.localStorage.getItem("list");
    const parsedList = JSON.parse(list);
    if (list == null) {
      return false;
    } else {
      this.setState({
        list: parsedList
      });
    }
  }

  deleteItem = event => {
    let index = event.target.getAttribute("data-key");
    let listValue = JSON.parse(localStorage.getItem("list"));
    listValue.splice(index, 1);
    this.setState({ list: listValue });
    localStorage.setItem("list", JSON.stringify(listValue));
    console.log(localStorage, 'local storage')
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      input: ""
    });
    console.log(this.state.list, "list");
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Add Item..." ref={this.input} />
            <button onClick={this.addItem} className="button">
              Add
            </button>
          </form>
          <List className="orderedList">
            {this.state.list.map((item, index) => {
              return (
                <List.Item key={item.id}>
                  {" "}
                  {item.value}
                  <button
                    className="button"
                    type="button"
                    value="delete"
                    data-key={index}
                    onClick={this.deleteItem}
                  >
                    Delete
                  </button>
                </List.Item>
              );
            })}
          </List>
        </div>
      </div>
    );
  }
}

export default TodoList;
