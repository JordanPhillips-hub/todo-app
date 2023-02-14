import { Draggable } from "react-beautiful-dnd";
import CompleteItem from "../CompleteItem/CompleteItem";
import cross from "../../assets/images/icon-cross.svg";
import "../TodoItem/TodoItem.scss";

const TodoItem = ({ deleteTodo, item, index, toggleTodoCompletion }) => (
  <Draggable key={item.id} draggableId={`draggable-${item.id}`} index={index}>
    {(provided, snapshot) => (
      <div
        key={item.id}
        className="listItem"
        // These props are required for the Draggable component to work.
        {...provided.draggableProps}
        ref={provided.innerRef}
        // Styles being applied when a to-do item is being dragged.
        style={{
          ...provided.draggableProps.style,
          opacity: snapshot.isDragging ? "0.7" : "1",
          boxShadow: snapshot.isDragging
            ? "0 0 0.4rem hsla(280, 87%, 65%, 0.8)"
            : "none",
        }}
      >
        <CompleteItem
          toggleTodoCompletion={toggleTodoCompletion}
          completed={item.completed}
          itemId={item.id}
        />
        <li
          // These props are required for the Draggable component to work.
          {...provided.dragHandleProps}
          className={
            item.completed ? "listItem__item complete" : "listItem__item"
          }
        >
          {item.text}
        </li>
        <img
          onClick={deleteTodo}
          className="listItem__delete"
          src={cross}
          alt="delete"
        />
      </div>
    )}
  </Draggable>
);

export default TodoItem;
