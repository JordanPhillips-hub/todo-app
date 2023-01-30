import React from "react";
import DarkTheme from "../assets/images/icon-moon.svg";
import LightTheme from "../assets/images/icon-sun.svg";

class ThemeToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light",
    });
  };

  render() {
    const { theme } = this.state;

    return (
      <div className="theme-toggle-container">
        <img
          onClick={this.toggleTheme}
          src={theme === "light" ? DarkTheme : LightTheme}
          alt="Toggle Theme"
        />
      </div>
    );
  }
}

export default ThemeToggle;
