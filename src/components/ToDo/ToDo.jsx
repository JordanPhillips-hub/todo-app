import React from "react";
import Button from "../Buttons/Button";
import ListOptions from "../ListOptions/ListOptions";
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

  // Method for handling form submission
  handleSubmit = (e) => {
    const createTodo = document.getElementById("todoInput");
    const { text } = this.state;
    const newItem = {
      text: text,
      completed: false,
      id: Date.now(),
    };

    // Update state to add new item and clear input text
    this.setState((prev) => ({
      items: [...prev.items, newItem],
      text: "",
    }));

    // Reset text input to be empty
    createTodo.value = "";

    // Prevint default form submission
    e.preventDefault();
  };

  // Method for handling completion of ToDo task
  handleToggleCompleted = (id) => {
    this.setState((prev) => {
      const updatedItems = prev.items.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return { items: updatedItems };
    });
  };

  handleDeleteItem = (index) => {
    this.setState((prev) => ({
      items: prev.items.filter((item, i) => i !== index),
    }));
  };

  render() {
    const { items } = this.state;
    const itemsLength = items.length;

    return (
      <form onSubmit={this.handleSubmit} className="todo">
        {/* Input element for creating new ToDo tasks */}
        <input
          onChange={this.handleTodoInput}
          id="todoInput"
          className="todo__input"
          type="text"
          placeholder="Create a new todo..."
          autoComplete="off"
        />

        <div className="todoListWrapper">
          {/* Unordered list to display ToDo tasks */}
          <ul className="todoList">
            {/* Map over items in state and render each task item */}
            {items.map((item, index) => {
              return (
                <div key={item.id} className="listItem">
                  <div className="completeItem">
                    <Button
                      onClick={() => this.handleToggleCompleted(item.id)}
                      className={
                        item.completed
                          ? "btn btn--completeItem showCompletedBackground"
                          : "btn btn--completeItem"
                      }
                    />

                    <img
                      className={
                        item.completed
                          ? "completeItem__checkMark showCheckMark"
                          : "completeItem__checkMark"
                      }
                      src={checkMark}
                      alt="checked"
                    />
                  </div>

                  <li
                    className={
                      item.completed
                        ? "listItem__item complete"
                        : "listItem__item"
                    }
                  >
                    {item.text}
                  </li>

                  <img
                    onClick={() => this.handleDeleteItem(index)}
                    className="listItem__delete"
                    src={cross}
                    alt="Delete Item"
                  />
                </div>
              );
            })}
          </ul>
          <ListOptions itemsLeft={itemsLength} />
        </div>
      </form>
    );
  }
}

export default ToDo;
