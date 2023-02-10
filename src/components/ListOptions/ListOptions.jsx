import Button from "../Buttons/Button";
import "../ListOptions/ListOptions.scss";

function ListOptions(props) {
  const { itemsLeft, className, test } = props;
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
            autoFocus={index === 0}
            onClick={test}
          />
        ))}
      </div>
    </div>
  );
}

export default ListOptions;
