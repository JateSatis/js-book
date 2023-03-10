import convertToId from "./convertToId";

/**
 * Accepts an Array as it's argument that should contain
 * @param lessonIndex - index of the current lesson
 * @param lessonArray - array of all lessons in this part of the book
 * @param partIndex - index of the current part in the book
 * @param partArray - array of all parts in the book
 * @returns  a string value of the link to previous lesson or part in the book
 */

export const createPrevLessonLink = (params) => {
  const [lessonIndex, lessonArray, partIndex, partArray] = params;
  let link;
  if (!lessonIndex) {
    link = `${partArray[partIndex].title}`;
  } else {
    link = `${partArray[partIndex].title}/${
      lessonArray[lessonIndex - 1].title
    }`;
  }
  return `/${convertToId(link)}`;
};

/**
 * Accepts an Array as it's argument that should contain
 * @param lessonIndex - index of the current lesson
 * @param lessonArray - array of all lessons in this part of the book
 * @param partIndex - index of the current part in the book
 * @param partArray - array of all parts in the book
 * @returns  a string value of the link to next lesson or part in the book
 */
export const createNextLessonLink = (params) => {
  const [lessonIndex, lessonArray, partIndex, partArray] = params;
  let link;
  if (lessonIndex + 1 === lessonArray.length) {
    if (partIndex + 1 === partArray.length) {
      link = null;
    } else {
      link = partArray[partIndex + 1].title;
    }
  } else {
    link = `${partArray[partIndex].title}/${
      lessonArray[lessonIndex + 1].title
    }`;
  }
  return link && `/${convertToId(link)}`;
};

/**
 * Accepts an Array as it's argument that should contain
 * @param partIndex - index of the current part in the book
 * @param partArray - array of all parts in the book
 * @returns  a string value of the link to previous lesson or part in the book
 */

export const createPrevPartLink = (params) => {
  const [partIndex, partArray] = params;
  let link;
  if (partIndex) {
    const prevLessonsArray = partArray[partIndex - 1].lessonsData;
    link = `${partArray[partIndex - 1].title}/${
      prevLessonsArray[prevLessonsArray.length - 1].title
    }`;
  } else {
    link = null;
  }
  return link && `/${convertToId(link)}`;
};

/**
 * Accepts an Array as it's argument that should contain
 * @param partIndex - index of the current part in the book
 * @param partArray - array of all parts in the book
 * @returns  a string value of the link to next lesson or part in the book
 */
export const createNextPartLink = (params) => {
  const [partIndex, partArray] = params;
  let link = `${partArray[partIndex].title}/${partArray[partIndex].lessonsData[0].title}`;
  return `/${convertToId(link)}`;
};
