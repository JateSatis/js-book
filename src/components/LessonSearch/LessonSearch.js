import React, { useState, useContext } from "react";

import { LessonsContext } from "../Info";

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
        <input type="button" value="Search" onClick={searchLesson} />
      </form>
      <div
        style={{
          position: "absolute",
          zIndex: 1000,
        }}
      >
        {searchedLessons.map((lesson) => (
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "beige",
              padding: 5,
              margin: 0,
              marginBottom: 10,
              cursor: "pointer",
            }}
            onClick={() => {
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
