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
              <img className="radio__checkMark" src={checkMark} alt="checked" />
              <input className="radio__checkbox" type="radio" />
            </div>

            <li className="item">Complete online JavaScript course</li>
          </div>

          <div className="listItemContainer">
            <div className="radio">
              <img className="radio__checkMark" src={checkMark} alt="checked" />
              <input className="radio__checkbox" type="radio" />
            </div>

            <li className="item">Jog around the park 3x</li>
          </div>

          <div className="listItemContainer">
            <div className="radio">
              <img className="radio__checkMark" src={checkMark} alt="checked" />
              <input className="radio__checkbox" type="radio" />
            </div>

            <li className="item">10 minutes meditation</li>
          </div>

          <div className="listItemContainer">
            <div className="radio">
              <img className="radio__checkMark" src={checkMark} alt="checked" />
              <input className="radio__checkbox" type="radio" />
            </div>

            <li className="item">Read for 1 hour</li>
          </div>

          <div className="listItemContainer">
            <div className="radio">
              <img className="radio__checkMark" src={checkMark} alt="checked" />
              <input className="radio__checkbox" type="radio" />
            </div>

            <li className="item">Pick up groceries</li>
          </div>

          <div className="listItemContainer">
            <div className="radio">
              <img className="radio__checkMark" src={checkMark} alt="checked" />
              <input className="radio__checkbox" type="radio" />
            </div>

            <li className="item">Complete Todo App on Frontend Mentor</li>
          </div>
        </ul>
      </form>
    );
  }
}

export default ToDo;
