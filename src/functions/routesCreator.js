import { Route } from "react-router-dom";

import LessonPage from "../pages/LessonPage";
import PartPage from "../pages/PartPage";

import convertToId from "./convertToId";

/**
 * @param {*} lessonsArray
 * @returns an array of Route > LessonPage components with correct paths and props
 */
export const createLessonsRoutes = (lessonsData) => {
  const lessonsRoutes = lessonsData.map((lessonComp, index) => {
    const partLink = convertToId(lessonComp.part);
    const lessonLink = convertToId(lessonComp.title);
    return (
      <Route
        key={index}
        element={<LessonPage lesson={lessonComp} />}
        path={`${partLink}/${lessonLink}`}
      />
    );
  });
  return lessonsRoutes;
};

/**
 * @param {*} partArray
 * @returns an array of Route > PartPage components with correct paths and props
 */
export const createPartsRoutes = (partsData) => {
  const partsRoutes = partsData.map((part, index) => {
    const partLink = convertToId(part.title);
    return (
      <Route key={index} element={<PartPage part={part} />} path={partLink} />
    );
  });
  return partsRoutes;
};
