/**
 * Calculates the offset of an element relative to the top of the viewport considering the height of the header
 * @param {*} comp - component, offset of which needs to be calculated
 * @returns absolute offset value of the element (both negative or positive)
 */

const getTopOffset = (comp) => {
  const AbsoluteTopOffset = comp.getBoundingClientRect().top;
  const header_offset = document
    .getElementById("parts_header")
    .getBoundingClientRect().height;
  if (AbsoluteTopOffset > 0) {
    return Math.abs(AbsoluteTopOffset) - header_offset;
  }
  return Math.abs(AbsoluteTopOffset) + header_offset;
};

/**
 * @param {*} className - class name of elements, between which the closest to the top should be found
 * @returns components, that is currently the nearest to the top of the viewport, considering the header
 */

const getTopComponent = (className) => {
  const components = Array.from(document.querySelectorAll(`.${className}`));
  if (!components.length) return null;
  const topComponent = components.reduce((accum, comp) => {
    const currentTop = getTopOffset(accum);
    const newTop = getTopOffset(comp);
    return currentTop > newTop ? comp : accum;
  });

  return topComponent;
};

export default getTopComponent;
