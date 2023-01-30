import DarkTheme from "../assets/images/icon-moon.svg";
import LightTheme from "../assets/images/icon-sun.svg";

function ThemeToggle() {
  return (
    <div>
      <img src={DarkTheme} alt="Dark Theme" />
    </div>
  );
}

export default ThemeToggle;
