import React, { useState, useContext } from "react";

//# Components
import { LessonsContext } from "../Info";
import Part from "./Part";
import PartsHeader from "./PartsHeader";

//# Functions
import getTopComponent from "../../functions/getTopComponent";

const Parts = () => {
  const [topComponent, setTopComponent] = useState(null);
  const { lessonsData, setLessonsData } = useContext(LessonsContext);

  const updateTopComponent = () => {
    setTopComponent(getTopComponent("part"));
    setLessonsData({
      ...lessonsData,
      topComponent: topComponent,
    });
  };

  document.addEventListener("scroll", updateTopComponent);

  return (
    <>
      <PartsHeader></PartsHeader>
      {lessonsData.parts.map(({ title, lessons }, index) => (
        <Part title={title} lessons={lessons} key={index} />
      ))}
    </>
  );
};

export default Parts;
