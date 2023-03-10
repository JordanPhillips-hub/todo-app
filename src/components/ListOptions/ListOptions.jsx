import Button from "../Buttons/Button";
import "../ListOptions/ListOptions.scss";

// ListOptions component displays the count of items left and options to filter the todos.
const ListOptions = ({ itemsLeft, className, filterTodos }) => {
  // Array of options to filter the todos.
  const activeOptions = ["All", "Active", "Completed"];
  const isMobile = window.innerWidth < 600;

  return (
    <>
      <div className="listOptions">
        <p className="itemsLeft">
          {itemsLeft === 1
            ? `${itemsLeft} item left`
            : `${itemsLeft} items left`}
        </p>

        {!isMobile && (
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
        )}

        <Button
          className={className}
          text="Clear Completed"
          onClick={filterTodos}
        />
      </div>

      {isMobile && (
        <div className="mobileListOptions">
          <div className="mobileActiveOptions">
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
      )}
    </>
  );
};

export default ListOptions;
