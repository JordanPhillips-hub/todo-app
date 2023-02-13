import CompleteItem from "../CompleteItem/CompleteItem";
import { Draggable } from "react-beautiful-dnd";
import cross from "../../assets/images/icon-cross.svg";
import "../TodoItem/TodoItem.scss";

const TodoItem = ({ handleDeleteItem, item, index, handleToggleCompleted }) => (
  <Draggable key={item.id} draggableId={`draggable-${item.id}`} index={index}>
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
        <CompleteItem
          handleToggleCompleted={handleToggleCompleted}
          completed={item.completed}
          itemId={item.id}
        />
        <li
          className={
            item.completed ? "listItem__item complete" : "listItem__item"
          }
        >
          {item.text}
        </li>
        <img
          onClick={handleDeleteItem}
          className="listItem__delete"
          src={cross}
          alt="delete"
        />
      </div>
    )}
  </Draggable>
);

export default TodoItem;
