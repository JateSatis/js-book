import React from "react";
import { Link } from "react-router-dom";

const PartPage = ({ part: { title, lessons, prevPartLink, nextPartLink } }) => {
  return (
    <>
      <div>{title}</div>
      {prevPartLink ? <Link to={prevPartLink}>Prev lesson</Link> : null}
      <Link to={nextPartLink}>Next Lesson</Link>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index}>{lesson.title}</li>
        ))}
      </ul>
    </>
  );
};

export default PartPage;
