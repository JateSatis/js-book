import React, { useState, useContext } from "react";

//# Components
import { LessonsContext } from "../../App";
import Part from "./Part";
import PartsHeader from "./PartsHeader";

//# Functions
import getTopComponent from "../../functions/getTopComponent";

const Parts = () => {
  const [topComponent, setTopComponent] = useState(null);
  const { data, setData } = useContext(LessonsContext);

  const updateTopComponent = () => {
    setTopComponent(getTopComponent("part"));
    setData({
      ...data,
      topComponent: topComponent,
    });
  };

  document.addEventListener("scroll", updateTopComponent);

  return (
    <div className="parts">
      <PartsHeader></PartsHeader>
      <div className="width_limiter">
        {data.parts.map(({ title, lessonsData }, index) => (
          <Part title={title} lessons={lessonsData} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
