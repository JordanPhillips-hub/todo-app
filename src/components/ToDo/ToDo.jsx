import React from "react";
import ListOptions from "../ListOptions/ListOptions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TodoItem from "../TodoItem/TodoItem";
import "./Todo.scss";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "", // Represents the text input value for creating a new to-do item.
      items: [], // Holds the array of all to-do items.
      filtered: [], // Represents the filtered to-do items based on the selected option.
    };
  }

  // This method updates the value of the text input for creating a new to-do item.
  updateTodoInput = (e) => this.setState({ text: e.target.value });

  /* This method is called when the form for creating a new to-do item is submitted.
   it creates a new to-do item, adds it to the list of items, and clears the input field.*/
  onFormSubmit = (e) => {
    const createTodo = document.getElementById("todoInput");
    const { text } = this.state;
    const newItem = {
      text: text,
      completed: false,
      id: Date.now(), // A unique identifier for the to-do item.
    };

    // Adds the new item to the list of to-do items and updates the component state.
    this.setState((prev) => ({
      items: [...prev.items, newItem],
      filtered: [...prev.filtered, newItem],
      text: "",
    }));

    // Clears the input field.
    createTodo.value = "";
    e.preventDefault();
  };

  // This method toggles the completion status of a to-do item.
  toggleTodoCompletion = (id) => {
    this.setState((prev) => {
      // Maps over the list of to-do items and toggles the completion status of the item with the given id.
      const items = prev.items.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      });

      return {
        items,
        filtered: items,
      };
    });
  };

  // This method deletes a to-do item from the list.
  deleteTodo = (index) => {
    this.setState((prev) => {
      // Filters out the to-do item with the given index from the list.
      const items = prev.items.filter((item, i) => i !== index);
      return {
        items,
        filtered: items,
      };
    });
  };

  // filterTodos method filters the to-do items based on the selected option.
  filterTodos = (e) => {
    const optionButton = e.target.innerText;
    const { items, filtered } = this.state;

    switch (optionButton) {
      case "Active":
        // Filters out the completed to-do items from the list.
        this.setState({
          items: filtered.filter((item) => !item.completed),
        });
        break;
      case "Completed":
        // Filters out the active to-do items from the list.
        this.setState({
          items: filtered.filter((item) => item.completed),
        });
        break;
      case "Clear Completed":
        // Filters out the completed to-do items from the list.
        this.setState({
          filtered: filtered.filter((item) => !item.completed),
          items: items.filter((item) => !item.completed),
        });
        break;
      case "All":
        // Displays all the to-do items.
        this.setState({
          items: filtered,
        });
        break;
      default:
      // Do nothing
    }
  };

  render() {
    const { items, isFiltered, filtered } = this.state;
    const itemsLength = isFiltered ? filtered.length : items.length;

    return (
      // The form for creating a new to-do item.
      <form onSubmit={this.onFormSubmit} className="todo">
        <input
          onChange={this.updateTodoInput}
          id="todoInput"
          className="todo__input"
          type="text"
          placeholder="Create a new todo..."
          autoComplete="off"
        />

        <DragDropContext
          // This method is called when a to-do item is dragged and dropped.
          onDragEnd={(param) => {
            // The index of the to-do item that is being dragged.
            const srcIndex = param.source.index;
            // The index of the to-do item that is being dropped.
            const destIndex = param.destination.index;

            this.setState((prev) => {
              const items = [...prev.items];
              // Removes the to-do item from the source index and inserts it into the destination index.
              const [removed] = items.splice(srcIndex, 1);
              // Inserts the to-do item into the destination index.
              items.splice(destIndex, 0, removed);
              // Updates the state of the to-do items.
              return { items, filtered: items };
            });
          }}
        >
          <div className="todoListWrapper">
            <Droppable droppableId="droppable-1">
              {(provided, _) => (
                // The list of to-do items.
                <ul
                  id="listContainer"
                  className="todoList"
                  ref={provided.innerRef}
                  // This prop is required for the Droppable component to work.
                  {...provided.droppableProps}
                >
                  {items.map((item, index) => (
                    // The to-do item component.
                    <TodoItem
                      key={item.id}
                      item={item}
                      index={index}
                      deleteTodo={() => this.deleteTodo(index)}
                      toggleTodoCompletion={() =>
                        this.toggleTodoCompletion(item.id)
                      }
                    />
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>

            <ListOptions
              // The list options component.
              className="btn btn--transparent"
              itemsLeft={itemsLength}
              filterTodos={this.filterTodos}
            />
          </div>
        </DragDropContext>
      </form>
    );
  }
}

export default ToDo;
