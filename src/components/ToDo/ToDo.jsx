import React from "react";
import checkMark from "../../assets/images/icon-check.svg";
import cross from "../../assets/images/icon-cross.svg";
import "../ToDo/ToDo.scss";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      items: [],
    };
  }

  // Method for handling input change
  handleTodoInput = ({ target: { value } }) =>
    this.setState({
      text: value,
    });

  // Method for handling completion of ToDo task
  handleCompleteItem = (e) => {
    const { target: btn } = e;

    // Get reference to checkMark element
    const checkMark = btn.nextSibling;
    // Get reference to list item element
    const listItem = checkMark.parentElement.nextSibling;
    btn.classList.toggle("showBackground");
    checkMark.classList.toggle("showCheckMark");
    listItem.classList.toggle("complete");
  };

  // Method for handling form submission
  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const newItem = {
      text: text,
    };

    // Update state to add new item and clear input text
    this.setState((prev) => ({
      items: [...prev.items, newItem],
      text: "",
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="todo">
        {/* Input element for creating new ToDo tasks */}
        <input
          onChange={this.handleTodoInput}
          className="todo__input"
          type="text"
          placeholder="Create a new todo..."
          autoComplete="off"
        />

        {/* Unordered list to display ToDo tasks */}
        <ul className="todoList">
          {/* Map over items in state and render each task item */}
          {items.map((item, index) => {
            return (
              <div className="listItem">
                <div className="completeItem">
                  <button
                    onClick={this.handleCompleteItem}
                    className="btn completeItem--btn"
                    type="button"
                  />

                  <img
                    className="completeItem__checkMark"
                    src={checkMark}
                    alt="checked"
                  />
                </div>

                <li key={index} className="listItem__item">
                  {item.text}
                </li>

                <img
                  className="listItem__delete"
                  src={cross}
                  alt="Delete Item"
                />
              </div>
            );
          })}
        </ul>
      </form>
    );
  }
}

export default ToDo;
