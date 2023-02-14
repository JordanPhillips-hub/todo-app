import React from "react";
import useLocalStorage from "use-local-storage";
import Todo from "../Todo/Todo";
import Moon from "../../assets/images/icon-moon.svg";
import Sun from "../../assets/images/icon-sun.svg";
import lightBG from '../../assets/images/bg-desktop-light.jpg';
import darkBG from '../../assets/images/bg-desktop-dark.jpg';
import "./App.scss";

/* This component is the main component of the application and serves as a container
 for the header, main, and footer components. It also implements a toggle feature
 that switches between the light and dark themes. */

function App() {
  // State hook that uses local storage to store the current theme
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  /* This function is triggered by a click on the toggle icon in the header. It changes
    the background image and the current theme stored in local storage. */
  const toggleTheme = () => {
    const appBg = document.querySelector('[data-theme]');
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    theme === 'dark'
      ? appBg.style.backgroundImage = `url(${lightBG})`
      : appBg.style.backgroundImage = `url(${darkBG})`;
  };

  // Adds an event listener that sets the background image when the window is loaded
  window.addEventListener(('load'), function () {
    const appBg = document.querySelector('[data-theme]');
    theme === 'dark'
      ? appBg.style.backgroundImage = `url(${darkBG})`
      : appBg.style.backgroundImage = `url(${lightBG})`;
  });

  return (
    <div id="AppBg" className="appBg" data-theme={theme}>
      <div className="app">
        <header>
          <h1>TODO</h1>
          <img
            onClick={toggleTheme}
            // Ternary operator that changes the icon based on the current theme
            src={theme === "light" ? Moon : Sun}
            alt="Toggle Theme"
          />
        </header>

        <main>
          <Todo />
        </main>

        <footer>
          <small>Drag and drop to reorder list</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
