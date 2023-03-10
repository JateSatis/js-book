/**
 * @param {string} initialString - any
 * @returns a string that is converted to the format, suitable for most uses (no blank spaces, no special characters, etc.)
 */

const convertToId = (initialString = "") => {
  return initialString
    .replaceAll(" ", "_")
    .replaceAll(",", "")
    .replaceAll(":", "")
    .replaceAll(";", "")
    .replaceAll("!", "")
    .replaceAll("?", "")
    .replaceAll(".", "")
    .replaceAll("&", "")
    .replaceAll('"', "")
    .replaceAll("*", "")
    .toLowerCase();
};

export default convertToId;
