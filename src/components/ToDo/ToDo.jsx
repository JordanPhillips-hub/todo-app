import React from "react";
import checkMark from "../../assets/images/icon-check.svg";
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

  handleCompletedToggle = (e) => {
    const { target: radioButton } = e;
    const checkMark = radioButton.nextSibling;
    radioButton.classList.toggle("radio--showBackground");
    checkMark.classList.toggle("radio__checkMark--showCheckMark");
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
          <div className="listItemContainer">
            <div className="radio">
              <input
                onClick={this.handleCompletedToggle}
                className="radio__checkbox"
                type="radio"
              />
              <img className="radio__checkMark" src={checkMark} alt="checked" />
            </div>

            <li className="item">Complete online JavaScript course</li>
          </div>

          <div className="listItemContainer">
            <div className="radio">
              <input
                onClick={this.handleCompletedToggle}
                className="radio__checkbox"
                type="radio"
              />
              <img className="radio__checkMark" src={checkMark} alt="checked" />
            </div>

            <li className="item">Jog around the park 3x</li>
          </div>

          <div className="listItemContainer">
            <div className="radio">
              <input
                onClick={this.handleCompletedToggle}
                className="radio__checkbox"
                type="radio"
              />
              <img className="radio__checkMark" src={checkMark} alt="checked" />
            </div>

            <li className="item">10 minutes meditation</li>
          </div>

          <div className="listItemContainer">
            <div className="radio">
              <input
                onClick={this.handleCompletedToggle}
                className="radio__checkbox"
                type="radio"
              />
              <img className="radio__checkMark" src={checkMark} alt="checked" />
            </div>

            <li className="item">Read for 1 hour</li>
          </div>

          <div className="listItemContainer">
            <div className="radio">
              <input
                onClick={this.handleCompletedToggle}
                className="radio__checkbox"
                type="radio"
              />
              <img className="radio__checkMark" src={checkMark} alt="checked" />
            </div>

            <li className="item">Pick up groceries</li>
          </div>

          <div className="listItemContainer">
            <div className="radio">
              <input
                onClick={this.handleCompletedToggle}
                className="radio__checkbox"
                type="radio"
              />
              <img className="radio__checkMark" src={checkMark} alt="checked" />
            </div>

            <li className="item">Complete Todo App on Frontend Mentor</li>
          </div>
        </ul>
      </form>
    );
  }
}

export default ToDo;
