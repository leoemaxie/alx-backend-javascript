/**
 * Updates the unique items in a map.
 * @param {Map} map - The map to update.
 * @returns {Map} - The updated map.
 */
export default function updateUniqueItems(map) {
  map.forEach((value, key) => (value == 1 ? map.set(key, 100) : ""));
  return map;
}
