import React from "react";
import { Link } from "react-router-dom";

import convertToId from "../../functions/convertToId";

const Lesson = ({ part, title }) => {
  return (
    <div className="part__lesson-list_lesson">
      <li id={convertToId(title)}>
        <Link
          className="part__lesson-link"
          to={`${convertToId(part)}/${convertToId(title)}`}
        >
          {title}
        </Link>
      </li>
    </div>
  );
};

export default Lesson;
