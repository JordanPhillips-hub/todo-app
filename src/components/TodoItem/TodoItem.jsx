import React from "react";
import Button from "../Buttons/Button";
import checkMark from "../../assets/images/icon-check.svg";
import cross from "../../assets/images/icon-cross.svg";
import "./TodoItem.scss";

function TodoItem(props) {
  const { item, handleToggleCompleted, handleDeleteItem, index } = props;

  const listItems = document.querySelectorAll(".listItem");
  listItems.forEach((item) => {
    item.addEventListener("dragstart", () => {
      item.classList.add("listItem--dragging");
    });

    item.addEventListener("dragend", () => {
      item.classList.remove("listItem--dragging");
    });
  });

  return (
    <div key={item.id} className="listItem" draggable="true">
      <div className="completeItem">
        <Button
          onClick={() => handleToggleCompleted(item.id)}
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
          item.completed ? "listItem__item complete" : "listItem__item"
        }
      >
        {item.text}
      </li>

      <img
        onClick={() => handleDeleteItem(index)}
        className="listItem__delete"
        src={cross}
        alt="delete"
      />
    </div>
  );
}

export default TodoItem;
