import React from "react";
import Moon from "../assets/images/icon-moon.svg";
import Sun from "../assets/images/icon-sun.svg";

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
          src={theme === "light" ? Moon : Sun}
          alt="Toggle Theme"
        />
      </div>
    );
  }
}

export default ThemeToggle;
