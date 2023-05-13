import "./styles/app.css";
import { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//# Hooks
import useTheme from "./hooks/useTheme";

//# Data
import data_json from "./data.json";

//# Components
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";

//# Functions
import {
  createLessonsRoutes,
  createPartsRoutes,
} from "./functions/routesCreator";
import {
  createLessonsData,
  createPartsData,
} from "./functions/createDataFromJSON";

export const LessonsContext = createContext();

const getPreferedTheme = () => {
  const preferedTheme = localStorage.getItem("theme");
  if (!preferedTheme) {
    localStorage.setItem("theme", "dark");
    return "dark";
  } else {
    return preferedTheme;
  }
};

function App() {
  const preferedTheme = getPreferedTheme();

  const [data, setData] = useState(data_json);
  const [theme, setTheme] = useTheme(preferedTheme);

  useEffect(() => {}, []);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  //# Converting lessons from all books to one array that we can later map to create lesson pages
  const lessonsData = createLessonsData(data);
  const partsData = createPartsData(data);

  //# Creating an array of lesson pages, each with it's route and props
  const lessonsRoutes = createLessonsRoutes(lessonsData);

  //# Creating an array of part pages, each with it's route and props
  const partsRoutes = createPartsRoutes(partsData);

  return (
    <LessonsContext.Provider value={{ data, setData, theme, toggleTheme }}>
      <div className="app">
        <Routes>
          {/* //# Layout component is the main blueprint of the app. It contains the header,
							//# footer and an <Outlet> that represents it's childs
					*/}
          <Route element={<Layout />} path="/">
            <Route element={<MainPage />} index />
            {lessonsRoutes}
            {partsRoutes}
          </Route>
        </Routes>
      </div>
    </LessonsContext.Provider>
  );
}

export default App;
