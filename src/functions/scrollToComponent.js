import convertToId from "./convertToId";

/**
 * 
 * @param {string} id - id of the element to which it needs to scroll
 * @param {int} offset - amount of pixels from the top to offset
 * @param {boolean} headerOffset - should the offset of the sticky header be considered
 * @param {boolean} center - if set to true, scrolling is going to be to the center of the screen
 */
export const scrollToComponent = ({
  id = "",
  offset = 0,
  headerOffset = true,
  center = false,
}) => {
  if (headerOffset)
    offset += document
      .getElementById("parts_header")
      .getBoundingClientRect().height;
  if (center) {
    offset += window.innerHeight / 2;
  }

  const part = document.querySelector(`#${convertToId(id)}`);
  let partPosition = part.getBoundingClientRect().top;
  let offsetPosition = partPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

/**
 * Scrolls across a horizontal element
 * @param {string} childId - id of the child element, to which we need to scroll
 * @param {string} parentId - id of the parent element inside of which we are going to scroll
 * @param {int} offset - optional
 */
export const scrollToHorizontalComponent = (
  childId = "",
  parentId = "",
  offset = 0
) => {
  const child = document.getElementById(childId);
  const parent = document.getElementById(parentId);
  const childOffset = child.getBoundingClientRect().left;

  //# Here we calculate if the element to which we want to scroll is visible enough
  const visibilityRelatedToWindow =
    (window.innerWidth - childOffset) / window.innerWidth;
  const isVisibleEnough =
    visibilityRelatedToWindow > 0.2 && visibilityRelatedToWindow < 1.2;

  //# If it is visible enough, we don't activate scrolling
  if (!isVisibleEnough) {
    parent.scrollTo({
      left: childOffset - offset,
      behavior: "smooth",
    });
  }
};
