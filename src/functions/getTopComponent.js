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
