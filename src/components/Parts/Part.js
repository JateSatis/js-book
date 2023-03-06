import React from "react";

//# Components
import Lesson from "./Lesson";

//# Functions
import convertToId from "../../functions/convertToId";

const Part = ({ title, lessons }) => {
  return (
    <section className="part" id={convertToId(title)}>
      <h1>{title}</h1>
      <ul>
        {lessons.map((lesson, index) => (
          <Lesson title={lesson} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Part;
