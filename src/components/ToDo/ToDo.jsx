import React from "react";
import ListOptions from "../ListOptions/ListOptions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TodoItem from "../TodoItem/TodoItem";
import "./Todo.scss";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      items: [],
      filtered: [],
    };
  }

  onTodoInputChange = (e) => this.setState({ text: e.target.value });

  onFormSubmit = (e) => {
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
      const items = prev.items.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      });

      return {
        items,
        filtered: items,
      };
    });
  };

  handleDeleteItem = (index) => {
    this.setState((prev) => {
      const items = prev.items.filter((item, i) => i !== index);
      return {
        items,
        filtered: items,
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
      <form onSubmit={this.onFormSubmit} className="todo">
        <input
          onChange={this.onTodoInputChange}
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
              return { items, filtered: items };
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
                    <TodoItem
                      key={item.id}
                      item={item}
                      index={index}
                      handleDeleteItem={() => this.handleDeleteItem(index)}
                      handleToggleCompleted={() =>
                        this.handleToggleCompleted(item.id)
                      }
                    />
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
