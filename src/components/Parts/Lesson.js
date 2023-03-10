import React from "react";
import { Link } from "react-router-dom";

import convertToId from "../../functions/convertToId";

const Lesson = ({ part, title }) => {
  return (
    <li className="lesson" id={convertToId(title)}>
      <Link to={`${convertToId(part)}/${convertToId(title)}`}>{title}</Link>
    </li>
  );
};

export default Lesson;
