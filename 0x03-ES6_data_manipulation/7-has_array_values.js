/**
 * Checks if a Set contains all the values from an array.
 *
 * @param {Set} set - The Set to check.
 * @param {Array} array - The array of values to check.
 * @returns {boolean} - Returns true if the Set contains all the values from the array, otherwise returns false.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
