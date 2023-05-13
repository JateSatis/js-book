import React, { useLayoutEffect } from "react";
import { FaBars } from "react-icons/fa";

//# Components
import CourseBundler from "../components/CourseInfo/CourseBundler";
import WideContentLinks from "../components/LessonNavigation/WideContentLinks";
import NarrowContentLinks from "../components/LessonNavigation/NarrowContentLinks";

const LessonsPage = ({
  lesson: { title, part, prevLessonLink, nextLessonLink },
}) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lesson-page-wrapper">
      <WideContentLinks
        prevLessonLink={prevLessonLink}
        nextLessonLink={nextLessonLink}
      />
      <div className="lesson-page">
        <NarrowContentLinks
          prevLessonLink={prevLessonLink}
          nextLessonLink={nextLessonLink}
        />
        <div className="lesson-page__bars wide-content">
          <div className="lesson-page__bars-logo-wrapper">
            <FaBars className="lesson-page__bars-logo" />
          </div>
        </div>
        <div className="width-limiter">
          <CourseBundler title={title} />
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;
