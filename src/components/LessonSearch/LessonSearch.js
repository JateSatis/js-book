import React, { useState, useContext } from "react";

import { LessonsContext } from "../../App";
import SearchOutput from "./SearchOutput";

import convertToId from "../../functions/convertToId";
import scrollToComponent from "../../functions/scrollToComponent";

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
  };

  const {
    data: { parts },
  } = useContext(LessonsContext);

  const [input, setInput] = useState("");
  const [searchedLessons, setSearchedLessons] = useState([]);

  const lessons = getLessons(parts);

  const outputLesson = (event) => {
    setInput(event.target.value);
    if (event.target.value.length <= 2) {
      setSearchedLessons([]);
      return;
    }

    const lessonsStripped = lessons.map((lesson) => {
      return convertToId(lesson);
    });

    const correctLessons = lessonsStripped.filter((lesson) => {
      return lesson.includes(convertToId(input));
    });

    const outputLessons = lessons.filter((lesson) => {
      return correctLessons.includes(convertToId(lesson));
    });

    setSearchedLessons(outputLessons);
  };

  const startScrolling = (event, lesson) => {
    setTimeout(() => {
      setSearchedLessons([]);
      scrollToComponent(
        lesson,
        document.getElementById("parts_header").getBoundingClientRect().height
      );
    }, 500);
    clearSearch();
  };

  return (
    <div className="main__navigation_lessons-search mb">
      <form>
        <input
          type="text"
          placeholder="Поиск по учебнику"
          value={input}
          onChange={outputLesson}
        />
      </form>
      <div>
        {searchedLessons.map((lesson, index) => (
          <SearchOutput
            key={index}
            scroll={(event, lesson) => startScrolling(event, lesson)}
            lesson={lesson}
          />
        ))}
      </div>
    </div>
  );
};

export default LessonSearch;
