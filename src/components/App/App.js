import React from "react";
import { useState, useEffect } from 'react';
import useLocalStorage from "use-local-storage";
import ToDo from "../ToDo/ToDo";
import Moon from "../../assets/images/icon-moon.svg";
import Sun from "../../assets/images/icon-sun.svg";
import desktopLightBG from '../../assets/images/bg-desktop-light.jpg';
import desktopDarkBG from '../../assets/images/bg-desktop-dark.jpg';
import mobileLightBG from '../../assets/images/bg-mobile-light.jpg';
import mobileDarkBG from '../../assets/images/bg-mobile-dark.jpg';
import "./App.scss";

/* This component is the main component of the application and serves as a container
 for the header, main, and footer components. It also implements a toggle feature
 that switches between the light and dark themes. */

function App() {
  // Custom hook that uses local storage to store the theme
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  // State that stores the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function that toggles the theme
  const toggleTheme = () => {
    const appBg = document.querySelector('[data-theme]');
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    const desktopBg = newTheme === "dark" ? desktopDarkBG : desktopLightBG;
    const mobileBg = newTheme === "dark" ? mobileDarkBG : mobileLightBG;
    const bgImage = windowWidth <= 600 ? mobileBg : desktopBg;
    appBg.style.backgroundImage = `url(${bgImage})`;
  };

  // Event listener that updates the window width state
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect that changes the background image based on the current theme
  useEffect(() => {
    const appBg = document.querySelector('[data-theme]');
    const desktopBg = theme === "dark" ? desktopDarkBG : desktopLightBG;
    const mobileBg = theme === "dark" ? mobileDarkBG : mobileLightBG;
    const bgImage = windowWidth <= 600 ? mobileBg : desktopBg;
    appBg.style.backgroundImage = `url(${bgImage})`;
  }, [theme, windowWidth]);

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
          <ToDo />
        </main>

        <footer>
          <small>Drag and drop to reorder list</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
