import React from "react";
import { Link } from "react-router-dom";

//# Components
import Lesson from "./Lesson";

//# Functions
import convertToId from "../../functions/convertToId";

const Part = ({ title, lessons }) => {
  return (
    <section className="part" id={convertToId(title)}>
      <h1 className="part__title">
        <Link className="part__part-link" to={`${convertToId(title)}`}>
          {title}
        </Link>
      </h1>
      <ul className="part__lesson-list">
        {lessons.map((lesson, index) => (
          <Lesson part={title} title={lesson.title} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Part;
