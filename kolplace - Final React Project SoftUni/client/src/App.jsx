import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [theme, setTheme] = useState("dark");

  // dynamically set page title
  useEffect(() => {
    document.title = "KolPlace - Your Online Shop";
  }, []);

  // change app theme class on theme on btn click
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div className={`app-${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
