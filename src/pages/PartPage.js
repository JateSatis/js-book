import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import WideContentLinks from "../components/LessonNavigation/WideContentLinks";
import NarrowContentLinks from "../components/LessonNavigation/NarrowContentLinks";
import { Title } from "../components/CourseInfo/Chapters";
import convertToId from "../functions/convertToId";

const PartPage = ({ part: { title, lessons, prevPartLink, nextPartLink } }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="part-page-wrapper">
      <WideContentLinks
        prevLessonLink={prevPartLink}
        nextLessonLink={nextPartLink}
      />
      <NarrowContentLinks
        prevLessonLink={prevPartLink}
        nextLessonLink={nextPartLink}
      />
      <div className="lesson-page__bars wide-content">
        <div className="lesson-page__bars-logo-wrapper">
          <FaBars className="lesson-page__bars-logo" />
        </div>
      </div>
      <div className="part-page__content-wrapper width-limiter">
        <Title>{title}</Title>
        <div className="part-page__lessons-wrapper">
          {lessons.map((lesson, index) => (
            <Link
              className="part-page__lesson-link"
              to={`${convertToId(lesson.title)}`}
              key={index}
            >
              {lesson.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PartPage;
