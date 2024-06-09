/**
 * Removes a specified substring from each element in a Set and returns the modified elements as a hyphen-separated string.
 * @param {Set} set - The Set containing the elements to be modified.
 * @param {string} startString - The substring to be removed from each element.
 * @returns {string} - The modified elements as a hyphen-separated string.
 */
export default function cleanSet(set, startString) {
  let array = [];

  if (!startString) return "";

  set.forEach((element) => {
    let index = element.indexOf(startString);

    if (index != -1) {
      array.push(element.slice(index + startString.length));
    }
  });

  return array.join("-");
}
