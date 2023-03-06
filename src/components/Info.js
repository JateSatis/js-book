import React, { useState, createContext } from "react";

//# Data
import data from "../data/lessonsData.json";

//# Components
import LessonSearch from "./LessonSearch/LessonSearch";
import Parts from "./Parts/Parts";

export const LessonsContext = createContext();

const Info = () => {
  const [lessonsData, setLessonsData] = useState(data);

  return (
    <LessonsContext.Provider value={{ lessonsData, setLessonsData }}>
      <LessonSearch></LessonSearch>
      <Parts></Parts>
    </LessonsContext.Provider>
  );
};

export default Info;
