import React from "react";
import ListOptions from "../ListOptions/ListOptions";
import Button from "../Buttons/Button";
import checkMark from "../../assets/images/icon-check.svg";
import cross from "../../assets/images/icon-cross.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../ToDo/ToDo.scss";
import "../TodoItem/TodoItem.scss";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      items: [],
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

        <DragDropContext
          onDragEnd={(param) => {
            const srcIndex = param.source.index;
            const destIndex = param.destination.index;
            this.setState((prev) => {
              const items = [...prev.items];
              const [removed] = items.splice(srcIndex, 1);
              items.splice(destIndex, 0, removed);
              return { items };
            });
          }}
        >
          <div className="todoListWrapper">
            <Droppable droppableId="droppable-1">
              {(provided, _) => (
                <ul
                  id="listContainer"
                  className="todoList"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={"draggable-" + item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          key={item.id}
                          className="listItem"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.7" : "1",
                            boxShadow: snapshot.isDragging
                              ? "0 0 0.4rem hsla(280, 87%, 65%, 0.8)"
                              : "none",
                          }}
                        >
                          <div className="completeItem">
                            <Button
                              onClick={() =>
                                this.handleToggleCompleted(item.id)
                              }
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
                            alt="delete"
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
            <ListOptions
              className="btn btn--transparent"
              itemsLeft={itemsLength}
              handleFiltered={this.handleFiltered}
            />
          </div>
        </DragDropContext>
      </form>
    );
  }
}

export default ToDo;
