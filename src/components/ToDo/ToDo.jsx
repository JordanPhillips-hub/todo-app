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
      filtered: [],
    };
  }

  componentDidMount() {
    const listContainer = document.getElementById("listContainer");

    listContainer.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(listContainer, e.clientY);
      const listItem = document.querySelector(".listItem--dragging");

      if (afterElement == null) {
        listContainer.appendChild(listItem);
      } else {
        listContainer.insertBefore(listItem, afterElement);
      }

      const items = [...this.state.items];
      const draggedItemIndex = items.findIndex(
        (item) => item.id === listItem.id
      );
      const [draggedItem] = items.splice(draggedItemIndex, 1);
      items.splice(
        [...listContainer.children].indexOf(listItem),
        0,
        draggedItem
      );

      // this.setState({ items });
    });

    function getDragAfterElement(container, y) {
      const draggableElements = [
        ...container.querySelectorAll(".listItem:not(.listItem--dragging)"),
      ];
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    }
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
      return {
        items: prev.items.filter((item, i) => i !== index),
        filtered: prev.filtered.filter((item, i) => i !== index),
      };
    });
  };

  handleFiltered = (e) => {
    const optionButton = e.target.innerText;
    const { items, filtered } = this.state;

    switch (optionButton) {
      case "Active":
        this.setState({
          items: filtered.filter((item) => !item.completed),
        });
        break;
      case "Completed":
        this.setState({
          items: filtered.filter((item) => item.completed),
        });
        break;
      case "Clear Completed":
        this.setState({
          filtered: filtered.filter((item) => !item.completed),
          items: items.filter((item) => !item.completed),
        });
        break;
      case "All":
        this.setState({
          items: filtered,
        });
        break;
      default:
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
          <ul id="listContainer" className="todoList">
            {items.map((item, index) => (
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
