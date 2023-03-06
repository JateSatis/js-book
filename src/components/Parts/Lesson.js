import React from "react";

import convertToId from "../../functions/convertToId";

const Lesson = ({ title }) => {
  return (
    <li className="lesson" id={convertToId(title)}>
      {title}
    </li>
  );
};

export default Lesson;
