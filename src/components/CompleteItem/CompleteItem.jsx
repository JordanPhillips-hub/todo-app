import Button from "../Buttons/Button";
import checkMark from "../../assets/images/icon-check.svg";
import "../TodoItem/TodoItem.scss";

// CompleteItem component represents the completion status of a todo item
const CompleteItem = ({ toggleTodoCompletion, completed }) => (
  <div className="completeItem">
    <Button
      onClick={toggleTodoCompletion}
      className={
        // If the todo item is completed, the button will have a different background color
        completed
          ? "btn btn--completeItem showCompletedBackground"
          : "btn btn--completeItem"
      }
    />

    <img
      className={
        // If the todo item is completed, the check mark will be visible.
        completed
          ? "completeItem__checkMark showCheckMark"
          : "completeItem__checkMark"
      }
      src={checkMark}
      alt="checked"
    />
  </div>
);

export default CompleteItem;
