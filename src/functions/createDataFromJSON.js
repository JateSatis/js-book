import {
  createNextLessonLink,
  createPrevLessonLink,
  createNextPartLink,
  createPrevPartLink,
} from "./linkCreator";

/**
 * Accepts an array as a parameter that should contain these four elements
 * @param lessonJSON - an initial object that's going to be converted
 * @param partTitle
 * @param partIndex
 * @param partArray - info about the part, in which the lesson is contained
 * @returns
 */

const convertToLessonFormat = (params) => {
  const [lessonJSON, partTitle, partIndex, partArray] = params;
  const lessonsData = lessonJSON.map((lesson, lessonIndex, lessonArray) => {
    const linkParams = [lessonIndex, lessonArray, partIndex, partArray];
    const prevLessonLink = createPrevLessonLink(linkParams);
    const nextLessonLink = createNextLessonLink(linkParams);
    return {
      part: partTitle,
      prevLessonLink,
      nextLessonLink,
      ...lesson,
    };
  });
  return lessonsData;
};

/**
 * Each part of the book contains an array of lessons. this function creates a single array that contains all those lessons
 * @param {*} data - main application data json file
 * @returns arrat of every lesson in the book
 */
export const createLessonsData = (data) => {
  const lessonsArray = data.parts.reduce(
    (accum, part, partIndex, partArray) => {
      const lessonJSON = part.lessonsData;
      const transformParams = [lessonJSON, part.title, partIndex, partArray];
      const lessonsData = convertToLessonFormat(transformParams);
      return accum.concat(lessonsData);
    },
    []
  );
  return lessonsArray;
};

export const createPartsData = (data) => {
  const partsData = data.parts.map((part, partIndex, partArray) => {
    const linkParams = [partIndex, partArray];
    const nextPartLink = createNextPartLink(linkParams);
    const prevPartLink = createPrevPartLink(linkParams);
    return {
      title: part.title,
      lessons: part.lessonsData,
      prevPartLink,
      nextPartLink,
    };
  });
  return partsData;
};
