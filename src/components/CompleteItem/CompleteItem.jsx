import Button from "../Buttons/Button";
import checkMark from "../../assets/images/icon-check.svg";
import "../TodoItem/TodoItem.scss";

const CompleteItem = ({ toggleTodoCompletion, completed }) => (
  <div className="completeItem">
    <Button
      onClick={toggleTodoCompletion}
      className={
        completed
          ? "btn btn--completeItem showCompletedBackground"
          : "btn btn--completeItem"
      }
    />

    <img
      className={
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
