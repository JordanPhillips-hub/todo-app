import React from "react";
import "../ToDo/ToDo.scss";

class ToDo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className="todo">
        <input
          className="todo__input"
          type="text"
          placeholder="Create a new todo..."
        />
      </form>
    );
  }
}

export default ToDo;
