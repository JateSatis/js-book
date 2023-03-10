import React, { useState, useEffect, useContext } from "react";

//# Components
import { LessonsContext } from "../../App";

//# Functions
import scrollToComponent from "../../functions/scrollToComponent";

const PartsHeader = () => {
  const {
    data: { parts, topComponent },
  } = useContext(LessonsContext);

  const [prevAnchor, setPrevAnchor] = useState(null);

  useEffect(() => {
    if (!topComponent) return;
    if (prevAnchor) prevAnchor.style.color = "var(--text)";
    const topComponentId = topComponent.querySelector("h1").innerText;
    const anchor = document.getElementById(topComponentId);
    anchor.style.color = "var(--highlight-primary)";
    setPrevAnchor(anchor);
  }, [topComponent]);

  return (
    <nav className="parts__parts-header" id="parts_header">
      <div className="scroll_inner">
        {parts.map((part, index) => (
          <h1
            onClick={(e) =>
              scrollToComponent(
                e.target.innerText,
                document.getElementById("parts_header").getBoundingClientRect()
                  .height
              )
            }
            id={part.title}
            key={index}
          >
            {part.title}
          </h1>
        ))}
      </div>
    </nav>
  );
};

export default PartsHeader;
