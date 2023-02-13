import Button from "../Buttons/Button";
import "../ListOptions/ListOptions.scss";

function ListOptions(props) {
  const { itemsLeft, className, filterTodos } = props;
  const activeOptions = ["All", "Active", "Completed", "Clear Completed"];

  return (
    <div className="listOptions">
      <p className="itemsLeft">
        {itemsLeft === 1 ? `${itemsLeft} item left` : `${itemsLeft} items left`}
      </p>

      <div className="activeOptions">
        {activeOptions.map((option, index) => (
          <Button
            className={className}
            key={index}
            text={option}
            autoFocus={option === "All"}
            onClick={filterTodos}
          />
        ))}
      </div>
    </div>
  );
}

export default ListOptions;
