import React, { useContext } from "react";

//# Components
import LessonSearch from "../components/LessonSearch/LessonSearch";
import Parts from "../components/Parts/Parts";
import { LessonsContext } from "../App";

const Info = () => {

	const { lessonsData, setLessonsData } = useContext(LessonsContext)

  return (
    <>
      <LessonSearch></LessonSearch>
      <Parts></Parts>
    </>
  );
};

export default Info;
