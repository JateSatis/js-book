import convertToId from "./convertToId";


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
