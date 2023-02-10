import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import ListOptions from "../ListOptions/ListOptions";
import "../ToDo/ToDo.scss";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      items: [],
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
      filtered: [...prev.filtered, newItem],
      text: "",
    }));

    createTodo.value = "";
    e.preventDefault();
  };

  handleToggleCompleted = (id) => {
    this.setState((prev) => {
      const updateItem = (items) =>
        items.map((item) => {
          if (item.id === id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        });

      return {
        items: updateItem(prev.items),
        filtered: updateItem(prev.filtered),
      };
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
    const optionButton = e.target.innerText;
    const { items } = this.state;

    switch (optionButton) {
      case "Active":
        this.setState({
          filtered: items.filter((item) => !item.completed),
          isFiltered: true,
        });
        break;
      case "Completed":
        this.setState({
          filtered: items.filter((item) => item.completed),
          isFiltered: true,
        });
        break;
      case "Clear Completed":
        this.setState({
          items: items.filter((item) => !item.completed),
          completed: [],
          isFiltered: false,
        });
        break;
      default:
        this.setState({ isFiltered: false });
        break;
    }
  };

  render() {
    const { items, isFiltered, filtered } = this.state;
    const itemsLength = isFiltered ? filtered.length : items.length;

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
              ? items.map((item, index) => (
                  <TodoItem
                    key={item.id}
                    item={item}
                    handleToggleCompleted={this.handleToggleCompleted}
                    handleDeleteItem={this.handleDeleteItem}
                    index={index}
                  />
                ))
              : filtered.map((item, index) => (
                  <TodoItem
                    key={item.id}
                    item={item}
                    handleToggleCompleted={this.handleToggleCompleted}
                    handleDeleteItem={this.handleDeleteItem}
                    index={index}
                  />
                ))}
          </ul>
          <ListOptions
            className="btn btn--transparent"
            itemsLeft={itemsLength}
            handleFiltered={this.handleFiltered}
          />
        </div>
      </form>
    );
  }
}

export default ToDo;
