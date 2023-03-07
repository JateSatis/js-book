import "./App.css";
import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";

//# Data
import data from "./data/lessonsData.json";

//# Components
import Info from "./pages/Info";

export const LessonsContext = createContext();

function App() {
  const [lessonsData, setLessonsData] = useState(data);

  return (
    <LessonsContext.Provider value={{ lessonsData, setLessonsData }}>
      <div className="App">
        <Routes>
          <Route element={<Info />} path="/" />
        </Routes>
      </div>
    </LessonsContext.Provider>
  );
}

export default App;
