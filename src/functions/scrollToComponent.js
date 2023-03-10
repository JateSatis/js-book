import convertToId from "./convertToId";

/**
 * Applies the scrolling to required element
 * @param {*} id - id of the element to scroll to
 * @param {*} offset - distance that should be considered because of header
 */
const scrollToComponent = (id = "", offset = 0) => {
  const part = document.querySelector(`#${convertToId(id)}`);
  let partPosition = part.getBoundingClientRect().top;
  let offsetPosition = partPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export default scrollToComponent;
