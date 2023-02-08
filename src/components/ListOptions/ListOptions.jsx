import Button from "../Buttons/Button";
import "../ListOptions/ListOptions.scss";

function ListOptions(props) {
  const { itemsLeft } = props;
  const activeOptions = ["All", "Active", "Completed", "Clear Completed"];

  return (
    <div className="listOptions">
      <p className="itemsLeft">{itemsLeft} items left</p>

      <div className="activeOptions">
        {activeOptions.map((option, index) => (
          <Button key={index} className="btn btn--transparent" text={option} />
        ))}
      </div>
    </div>
  );
}

export default ListOptions;
