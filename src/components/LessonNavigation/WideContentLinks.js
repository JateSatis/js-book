import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const WideContentLinks = ({ prevLessonLink, nextLessonLink }) => {
  return (
    <>
      <Link
        className="lesson-page__prev-lesson-link lesson-link wide-content"
        to={prevLessonLink}
      >
        <FaAngleLeft className="lesson-page__lesson-link-logo" />
      </Link>
      {nextLessonLink ? (
        <Link
          className="lesson-page__next-lesson-link lesson-link wide-content"
          to={nextLessonLink}
        >
          <FaAngleRight className="lesson-page__lesson-link-logo" />
        </Link>
      ) : null}
    </>
  );
};

export default WideContentLinks;
