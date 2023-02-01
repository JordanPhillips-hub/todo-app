import React from "react";
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
          <div className="todoList__item">
            <div>
              <input className="checkbox" type="radio" name="" id="" />
            </div>

            <li>Complete online JavaScript course</li>
          </div>

          <div className="todoList__item">
            <div>
              <input type="radio" name="" id="" />
            </div>

            <li>Jog around the park 3x</li>
          </div>

          <div className="todoList__item">
            <div>
              <input type="radio" name="" id="" />
            </div>

            <li>10 minutes meditation</li>
          </div>

          <div className="todoList__item">
            <div>
              <input type="radio" name="" id="" />
            </div>
            <li>Read for 1 hour</li>
          </div>

          <div className="todoList__item">
            <div>
              <input type="radio" name="" id="" />
            </div>

            <li>Pick up groceries</li>
          </div>

          <div className="todoList__item">
            <div>
              <input type="radio" name="" id="" />
            </div>
            <li>Complete Todo App on Frontend Mentor</li>
          </div>
        </ul>
      </form>
    );
  }
}

export default ToDo;
