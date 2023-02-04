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

  handleChange = ({ target: { value } }) =>
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
          onChange={this.handleChange}
          className="todo__input"
          type="text"
          placeholder="Create a new todo..."
        />

        <ul className="todoList">
          <div className="listItem">
            <div className="completeItem">
              <button
                onClick={this.handleCompleteItem}
                className="completeItem__btn"
              />
              <img
                className="completeItem__checkMark"
                src={checkMark}
                alt="checked"
              />
            </div>

            <li className="item">Complete online JavaScript course</li>

            <img src={cross} alt="Delete Item" />
          </div>

          <div className="listItem">
            <div className="completeItem">
              <button
                onClick={this.handleCompleteItem}
                className="completeItem__btn"
              />
              <img
                className="completeItem__checkMark"
                src={checkMark}
                alt="checked"
              />
            </div>

            <li className="item">Jog around the park 3x</li>
          </div>

          <div className="listItem">
            <div className="completeItem">
              <button
                onClick={this.handleCompleteItem}
                className="completeItem__btn"
              />
              <img
                className="completeItem__checkMark"
                src={checkMark}
                alt="checked"
              />
            </div>

            <li className="item">10 minutes meditation</li>
          </div>

          <div className="listItem">
            <div className="completeItem">
              <button
                onClick={this.handleCompleteItem}
                className="completeItem__btn"
              />
              <img
                className="completeItem__checkMark"
                src={checkMark}
                alt="checked"
              />
            </div>

            <li className="item">Read for 1 hour</li>
          </div>

          <div className="listItem">
            <div className="completeItem">
              <button
                onClick={this.handleCompleteItem}
                className="completeItem__btn"
              />
              <img
                className="completeItem__checkMark"
                src={checkMark}
                alt="checked"
              />
            </div>

            <li className="item">Pick up groceries</li>
          </div>

          <div className="listItem">
            <div className="completeItem">
              <button
                onClick={this.handleCompleteItem}
                className="completeItem__btn"
              />
              <img
                className="completeItem__checkMark"
                src={checkMark}
                alt="checked"
              />
            </div>

            <li className="item">Complete Todo App on Frontend Mentor</li>
          </div>
        </ul>
      </form>
    );
  }
}

export default ToDo;
