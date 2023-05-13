import React from "react";

//# Functions
import convertToId from "../../functions/convertToId";
import { scrollToHorizontalComponent } from "../../functions/scrollToComponent";

const PartNavigator = ({ onScroll, title }) => {
  return (
    <div
      id={`${convertToId(title)}_anchor`}
      className="parts__parts-header_part-wrapper"
      onClick={(event) => {
        scrollToHorizontalComponent(
          `${convertToId(title)}_anchor`,
          "parts_header",
          32
        );
        onScroll(event.target.innerText);
      }}
    >
      <h1 className="parts__parts-header_part">{title}</h1>
    </div>
  );
};

export default PartNavigator;
