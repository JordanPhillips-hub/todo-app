import React from "react";
import Button from "../Buttons/Button";
import checkMark from "../../assets/images/icon-check.svg";
import cross from "../../assets/images/icon-cross.svg";
import "./TodoItem.scss";

const TodoItem = ({ item, handleToggleCompleted, handleDeleteItem, index }) => (
  <div key={item.id} className="listItem">
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
      className={item.completed ? "listItem__item complete" : "listItem__item"}
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

export default TodoItem;
