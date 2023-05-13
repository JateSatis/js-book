import React, { useState, useContext, useRef } from "react";
import { FaWindowClose } from "react-icons/fa";

import { LessonsContext } from "../../App";
import SearchOutput from "./SearchOutput";

import convertToId from "../../functions/convertToId";
import { scrollToComponent } from "../../functions/scrollToComponent";

const getLessons = (parts) => {
  return parts
    .reduce((accum, part) => {
      return accum.concat(part.lessonsData);
    }, [])
    .map((lesson) => lesson.title);
};

const LessonSearch = () => {
  const clearSearch = () => {
    setInput("");
    setSearchedLessons([]);
    document.getElementById("output-wrapper").style.display = "none";
  };

  const {
    data: { parts },
  } = useContext(LessonsContext);

  const [input, setInput] = useState("");
  const [searchedLessons, setSearchedLessons] = useState([]);

  const highlightedLesson = useRef(null);

  const removeHighlightFromLesson = () => {
    if (highlightedLesson.current) {
      document.getElementById(
        convertToId(highlightedLesson.current)
      ).firstChild.style.color = "var(--link)";
      highlightedLesson.current = null;
      document.removeEventListener("scroll", removeHighlightFromLesson);
    }
  };

  const lessons = getLessons(parts);

  const startSearch = () => {
    const lessonsSearch = document.getElementById("lessons-search");
    const searchWrapper = document.getElementById("search-wrapper");
    document.getElementById("parts_header").style.display = "none";
    document.documentElement.style.overflowY = "hidden";
    document.getElementById("form-logo").style.display = "block";
    lessonsSearch.classList.add("active-lessons-search");
    searchWrapper.classList.add("active-search-wrapper");
  };

  const endSearch = (lesson) => {
    const lessonsSearch = document.getElementById("lessons-search");
    const searchWrapper = document.getElementById("search-wrapper");
    document.getElementById("parts_header").style.display = "block";
    document.documentElement.style.overflowY = "visible";
    document.getElementById("form-logo").style.display = "none";
    document.getElementById("output-wrapper").style.display = "none";
    clearSearch();
    lessonsSearch.classList.remove("active-lessons-search");
    searchWrapper.classList.remove("active-search-wrapper");
    lesson &&
      (document.getElementById(convertToId(lesson)).firstChild.style.color =
        "var(--highlight-primary)");
    highlightedLesson.current = lesson;
  };

  const outputLesson = (event) => {
    setInput(event.target.value);
    if (event.target.value.length <= 1) {
      document.getElementById("output-wrapper").style.display = "none";
      setSearchedLessons([]);
      return;
    }
    document.getElementById("output-wrapper").style.display = "block";
    const lessonsStripped = lessons.map((lesson) => {
      return convertToId(lesson);
    });
    const correctLessons = lessonsStripped.filter((lesson) => {
      return lesson.includes(convertToId(input));
    });
    const outputLessons = lessons
      .filter((lesson) => {
        return correctLessons.includes(convertToId(lesson));
      })
      .map((lesson) => {
        if (lesson.split(" ").length >= 3) {
          return lesson.split(" ").slice(0, 4).join(" ") + "...";
        } else {
          return lesson;
        }
      });
    if (!outputLessons.length) {
      document.getElementById("output-wrapper").style.display = "none";
    }
    setSearchedLessons(outputLessons);
  };

  const startScrolling = async (lesson) => {
    endSearch(lesson);
    clearSearch();
    await setTimeout(() => {
      setSearchedLessons([]);
      scrollToComponent({ id: lesson, center: true, headerOffset: false });
    }, 500);
    await setTimeout(() => {
      document.addEventListener("scroll", removeHighlightFromLesson);
    }, 1500);
  };

  return (
    <div className="main__navigation_lessons-search" id="lessons-search">
      <div id="search-wrapper">
        <div className="main__navigation_form">
          <input
            type="text"
            placeholder="Поиск по учебнику"
            value={input}
            onChange={outputLesson}
            onFocus={startSearch}
            onKeyDown={(event) => {
              if (event.key === "Enter" && searchedLessons.length) {
                event.preventDefault();
                event.target.blur();
                startScrolling(searchedLessons[0]);
              }
            }}
          />
          <FaWindowClose
            className="main__navigation_form-logo"
            id="form-logo"
            onClick={() => endSearch()}
          />
        </div>
        <div className="main__navigation_output-wrapper" id="output-wrapper">
          {searchedLessons.map((lesson, index) => (
            <SearchOutput
              key={index}
              scroll={(lesson) => startScrolling(lesson)}
              lesson={lesson}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonSearch;
