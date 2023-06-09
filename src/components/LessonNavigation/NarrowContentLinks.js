import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaAngleLeft, FaBars } from "react-icons/fa";

const NarrowContentLinks = ({ prevLessonLink, nextLessonLink }) => {
  return (
    <div className="narrow-content">
      <div className="lesson-page__mobile_navigation width-limiter">
        <div className="lesson-page__mobile_bars">
          <FaBars className="lesson-page__mobile_bars-logo" />
        </div>
        <div className="lesson-page__mobile_link-wrapper">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="lesson-page__mobile_prev-lesson-link mobile-lesson-link"
            to={prevLessonLink}
          >
            <FaAngleLeft className="lesson-page__mobile_lesson-link-logo" />
          </Link>
          {nextLessonLink ? (
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="lesson-page__mobile_prev-lesson-link mobile-lesson-link"
              to={nextLessonLink}
            >
              <FaAngleRight className="lesson-page__mobile_lesson-link-logo" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NarrowContentLinks;
