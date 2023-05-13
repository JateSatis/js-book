import React from "react";

const SearchOutput = ({ scroll, lesson }) => {
  return (
    <div className="lesson-anchor" onClick={() => scroll(lesson)}>
      {lesson}
    </div>
  );
};

export default SearchOutput;
