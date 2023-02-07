import React from "react";
import useLocalStorage from "use-local-storage";
import ToDo from "../ToDo/ToDo";
import Moon from "../../assets/images/icon-moon.svg";
import Sun from "../../assets/images/icon-sun.svg";
import lightBG from '../../assets/images/bg-desktop-light.jpg';
import darkBG from '../../assets/images/bg-desktop-dark.jpg';
import "./App.scss";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const toggleTheme = () => {
    const appBg = document.querySelector('[data-theme]');
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    theme === 'dark'
      ? appBg.style.backgroundImage = `url(${lightBG})`
      : appBg.style.backgroundImage = `url(${darkBG})`;
  };

  return (
    <div className="appBg" data-theme={theme}>
      <div className="app">
        <header>
          <h1>TODO</h1>
          <img
            onClick={toggleTheme}
            src={theme === "light" ? Moon : Sun}
            alt="Toggle Theme"
          />
        </header>

        <main>
          <ToDo />
        </main>
      </div>

    </div>
  );
}

export default App;
