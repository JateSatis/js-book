import React, { useState, useEffect, useContext } from "react";

//# Components
import { LessonsContext } from "../../App";
import PartNavigator from "./PartNavigator";

//# Functions
import {
  scrollToComponent,
  scrollToHorizontalComponent,
} from "../../functions/scrollToComponent";
import convertToId from "../../functions/convertToId";

const PartsHeader = () => {
  const {
    data: { parts, topComponent },
  } = useContext(LessonsContext);

  const [prevAnchor, setPrevAnchor] = useState(null);

  useEffect(() => {
    const firstPartAnchor = document.getElementById("классы_и_объекты_anchor");
    firstPartAnchor.classList.add("active-part-anchor");
  }, []);

  useEffect(() => {
    if (!topComponent) return;
    if (prevAnchor) prevAnchor.classList.remove("active-part-anchor");
    const topComponentId = topComponent.querySelector("h1").innerText;
    const anchorId = `${convertToId(topComponentId)}_anchor`;
    const anchor = document.getElementById(anchorId);
    anchor.classList.add("active-part-anchor");
    scrollToHorizontalComponent(anchorId, "parts_header", 32);
    setPrevAnchor(anchor);
  }, [topComponent]);

  return (
    <nav className="parts__parts-header" id="parts_header">
      <div className="scroll-inner">
        {parts.map((part, index) => (
          <PartNavigator
            key={index}
            title={part.title}
            onScroll={(element) =>
              scrollToComponent({ id: element, offset: 10 })
            }
          />
        ))}
      </div>
    </nav>
  );
};

export default PartsHeader;
