import React, { useState, useEffect, useContext } from "react";

//# Components
import { LessonsContext } from "../Info";

//# Functions
import scrollToComponent from "../../functions/scrollToComponent";

const PartsHeader = () => {
  const {
    lessonsData: { parts, topComponent },
  } = useContext(LessonsContext);

  const [prevAnchor, setPrevAnchor] = useState(null);

  useEffect(() => {
    if (!topComponent) return;
    if (prevAnchor) prevAnchor.style.color = "black";
    const topComponentId = topComponent.querySelector("h1").innerText;
    const anchor = document.getElementById(topComponentId);
    anchor.style.color = "red";
    setPrevAnchor(anchor);
  }, [topComponent]);

  return (
    <nav
      id="parts_header"
      style={{
        position: "sticky",
        top: 0,
        display: "flex",
        backgroundColor: "gray",
      }}
    >
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
          style={{ marginLeft: "20px" }}
          key={index}
        >
          {part.title}
        </h1>
      ))}
    </nav>
  );
};

export default PartsHeader;
