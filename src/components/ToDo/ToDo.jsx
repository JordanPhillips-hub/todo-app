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
      active: [],
      completed: [],
      isFiltered: false,
      filtered: [],
    };
  }

  handleTodoInput = ({ target: { value } }) =>
    this.setState({
      text: value,
    });

  handleSubmit = (e) => {
    const createTodo = document.getElementById("todoInput");
    const { text } = this.state;
    const newItem = {
      text: text,
      completed: false,
      id: Date.now(),
    };

    this.setState((prev) => ({
      items: [...prev.items, newItem],
      text: "",
    }));

    createTodo.value = "";
    e.preventDefault();
  };

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
    this.setState((prev) => {
      if (prev.isFiltered) {
        return {
          filtered: prev.filtered.filter((item, i) => i !== index),
          items: prev.items.filter((item, i) => item !== prev.filtered[index]),
        };
      } else {
        return {
          items: prev.items.filter((item, i) => i !== index),
        };
      }
    });
  };

  handleFiltered = (e) => {
    const { items } = this.state;
    const optionButton = e.target;

    if (optionButton.innerText === "Active") {
      const active = items.filter((item) => !item.completed);
      this.setState({ active: active });
      this.setState({ isFiltered: true });
      this.setState((prev) => ({
        filtered: [...prev.active],
      }));
    } else if (optionButton.innerText === "Completed") {
      const completed = items.filter((item) => item.completed);
      this.setState({ completed: completed });
      this.setState({ isFiltered: true });
      this.setState((prev) => ({
        filtered: [...prev.completed],
      }));
    } else {
      this.setState({ isFiltered: false });
    }
  };

  displayItemsLeft = () => {};

  render() {
    const { items, isFiltered, filtered } = this.state;
    const itemsLength = items.length;
    const filteredLength = filtered.length;

    return (
      <form onSubmit={this.handleSubmit} className="todo">
        <input
          onChange={this.handleTodoInput}
          id="todoInput"
          className="todo__input"
          type="text"
          placeholder="Create a new todo..."
          autoComplete="off"
        />

        <div className="todoListWrapper">
          <ul className="todoList">
            {!isFiltered
              ? items.map((item, index) => {
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
                })
              : filtered.map((item, index) => {
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
          <ListOptions
            className="btn btn--transparent"
            itemsLeft={isFiltered ? filteredLength : itemsLength}
            test={this.handleFiltered}
          />
        </div>
      </form>
    );
  }
}

export default ToDo;
