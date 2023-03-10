import React from "react";
import { Link } from "react-router-dom";

//# Components
import CourseBundler from "../components/CourseInfo/CourseBundler";

const LessonsPage = ({
  lesson: { title, part, prevLessonLink, nextLessonLink },
}) => {
  return (
    <div className="lesson_page">
      <Link to={prevLessonLink}>Previous lesson</Link>
      <br />
      {nextLessonLink ? <Link to={nextLessonLink}>Next lesson </Link> : null}
      <CourseBundler title={title} />
    </div>
  );
};

export default LessonsPage;
