import React, { useState, useContext } from "react";

import { LessonsContext } from "../../App";

import convertToId from "../../functions/convertToId";
import scrollToComponent from "../../functions/scrollToComponent";

const LessonSearch = () => {
  const {
    lessonsData: { parts },
  } = useContext(LessonsContext);

  const [input, setInput] = useState("");
  const [searchedLessons, setSearchedLessons] = useState([]);

  const lessons = parts.reduce((accum, part) => {
    return accum.concat(part.lessons);
  }, []);

  const searchLesson = (event) => {
    setInput(event.target.value);

    const lessonsStripped = lessons.map((lesson) => {
      return convertToId(lesson);
    });

    const correctLessons = lessonsStripped.filter((lesson) => {
      return lesson.includes(convertToId(input));
    });

    setSearchedLessons(correctLessons);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Поиск по учебнику"
          value={input}
          onChange={searchLesson}
        />
      </form>
      <div
        style={{
          position: "absolute",
          zIndex: 1000,
        }}
      >
        {searchedLessons.map((lesson) => (
          <div
            className="lesson_anchor"
            onClick={(e) => {
              setTimeout(() => {
                scrollToComponent(
                  lesson,
                  document
                    .getElementById("parts_header")
                    .getBoundingClientRect().height
                );
                setInput("");
                setSearchedLessons([]);
              }, 500);
            }}
          >
            {lesson}
          </div>
        ))}
      </div>
    </>
  );
};

export default LessonSearch;
