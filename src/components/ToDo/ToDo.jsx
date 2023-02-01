import React from "react";
import "../ToDo/ToDo.scss";

class ToDo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className="todo">
        <input
          className="todo__input"
          type="text"
          placeholder="Create a new todo..."
        />
      </main>
    );
  }
}

export default ToDo;
