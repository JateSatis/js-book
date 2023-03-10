import React from "react";

const SearchOutput = ({ scroll, lesson }) => {
  return (
    <div className="lesson_anchor" onClick={(event) => scroll(event, lesson)}>
      {lesson}
    </div>
  );
};

export default SearchOutput;
