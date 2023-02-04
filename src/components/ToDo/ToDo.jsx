import React from "react";
import checkMark from "../../assets/images/icon-check.svg";
import cross from "../../assets/images/icon-cross.svg";
import "../ToDo/ToDo.scss";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleTodoInput = ({ target: { value } }) =>
    this.setState({
      text: value,
    });

  handleCompleteItem = (e) => {
    const { target: radioButton } = e;
    e.preventDefault();
    const checkMark = radioButton.nextSibling;
    radioButton.classList.toggle("completeItem--showBackground");
    checkMark.classList.toggle("completeItem__checkMark--showCheckMark");

    const listItem = checkMark.parentElement.nextSibling;
    listItem.classList.toggle("item--complete");
  };

  render() {
    return (
      <form className="todo">
        <input
          onChange={this.handleTodoInput}
          className="todo__input"
          type="text"
          placeholder="Create a new todo..."
        />

        <ul className="todoList">
          <div className="listItem">
            <div className="completeItem">
              <button
                onClick={this.handleCompleteItem}
                className="btn completeItem--btn"
              />
              <img
                className="completeItem__checkMark"
                src={checkMark}
                alt="checked"
              />
            </div>

            <li className="listItem__item">
              Complete online JavaScript course
            </li>

            <img className="listItem__delete" src={cross} alt="Delete Item" />
          </div>

          <div className="listItem">
            <div className="completeItem">
              <button
                onClick={this.handleCompleteItem}
                className="btn completeItem--btn"
              />
              <img
                className="completeItem__checkMark"
                src={checkMark}
                alt="checked"
              />
            </div>

            <li className="listItem__item">Jog around the park 3x</li>

            <img className="listItem__delete" src={cross} alt="Delete Item" />
          </div>

          <div className="listItem">
            <div className="completeItem">
              <button
                onClick={this.handleCompleteItem}
                className="btn completeItem--btn"
              />
              <img
                className="completeItem__checkMark"
                src={checkMark}
                alt="checked"
              />
            </div>

            <li className="listItem__item">10 minutes meditation</li>

            <img className="listItem__delete" src={cross} alt="Delete Item" />
          </div>

          <div className="listItem">
            <div className="completeItem">
              <button
                onClick={this.handleCompleteItem}
                className="btn completeItem--btn"
              />
              <img
                className="completeItem__checkMark"
                src={checkMark}
                alt="checked"
              />
            </div>

            <li className="listItem__item">Read for 1 hour</li>

            <img className="listItem__delete" src={cross} alt="Delete Item" />
          </div>

          <div className="listItem">
            <div className="completeItem">
              <button
                onClick={this.handleCompleteItem}
                className="btn completeItem--btn"
              />
              <img
                className="completeItem__checkMark"
                src={checkMark}
                alt="checked"
              />
            </div>

            <li className="listItem__item">Pick up groceries</li>

            <img className="listItem__delete" src={cross} alt="Delete Item" />
          </div>

          <div className="listItem">
            <div className="completeItem">
              <button
                onClick={this.handleCompleteItem}
                className="btn completeItem--btn"
              />
              <img
                className="completeItem__checkMark"
                src={checkMark}
                alt="checked"
              />
            </div>

            <li className="listItem__item">
              Complete Todo App on Frontend Mentor
            </li>

            <img className="listItem__delete" src={cross} alt="Delete Item" />
          </div>
        </ul>
      </form>
    );
  }
}

export default ToDo;
