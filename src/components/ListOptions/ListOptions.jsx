import Button from "../Buttons/Button";
import "../ListOptions/ListOptions.scss";

function ListOptions(props) {
  const { itemsLeft } = props;
  return (
    <div className="listOptions">
      <p className="itemsLeft">{itemsLeft} items left</p>

      <div className="activeOptions">
        <Button className="btn btn--transparent" text="All" />
        <Button className="btn btn--transparent" text="Active" />
        <Button className="btn btn--transparent" text="Completed" />
      </div>
      <Button className="btn btn--transparent" text="Clear Completed" />
    </div>
  );
}

export default ListOptions;
