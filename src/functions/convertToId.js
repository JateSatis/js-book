const convertToId = (value = "") => {
  return value
    .replaceAll(" ", "_")
    .replaceAll(",", "")
    .replaceAll(":", "")
    .replaceAll(";", "")
    .replaceAll("!", "")
    .replaceAll("?", "")
    .replaceAll(".", "")
    .replaceAll("&", "")
    .toLowerCase();
};

export default convertToId;
