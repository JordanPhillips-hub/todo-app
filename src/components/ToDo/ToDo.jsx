import React from "react";
import "../ToDo/ToDo.scss";
import TodoList from "./ToDoList";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = ({ target: { value } }) =>
    this.setState({
      text: value,
    });

  render() {
    return (
      <form className="todo">
        <input
          onChange={this.handleChange}
          className="todo__input"
          type="text"
          placeholder="Create a new todo..."
        />

        <TodoList />
      </form>
    );
  }
}

export default ToDo;
