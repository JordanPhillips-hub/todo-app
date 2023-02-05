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

  handleTodoInput = ({ target: { value } }) =>
    this.setState({
      text: value,
    });

  handleCompleteItem = (e) => {
    const { target: btn } = e;
    const checkMark = btn.nextSibling;
    const listItem = checkMark.parentElement.nextSibling;
    btn.classList.toggle("showBackground");
    checkMark.classList.toggle("showCheckMark");
    listItem.classList.toggle("complete");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const newItem = {
      text: text,
    };

    this.setState((prev) => ({
      items: [...prev.items, newItem],
      text: "",
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="todo">
        <input
          onChange={this.handleTodoInput}
          className="todo__input"
          type="text"
          placeholder="Create a new todo..."
          autoComplete="off"
        />

        <ul className="todoList">
          {items.map((item, index) => {
            return (
              <div className="listItem">
                <div className="completeItem">
                  <button
                    onClick={this.handleCompleteItem}
                    className="btn completeItem--btn"
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
