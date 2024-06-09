/**
 * Creates a new Int8 typed array with the specified length, sets the value at the given position, and returns the underlying ArrayBuffer.
 * @param {number} length - The length of the typed array.
 * @param {number} position - The position at which to set the value.
 * @param {number} value - The value to set at the specified position.
 * @returns {ArrayBuffer|string} - The underlying ArrayBuffer if the position is within range, otherwise returns the string "Position outside range".
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const array = new Int8Array(buffer);

  try {
    array[position] = value;
    return buffer;
  } catch (error) {
    return "Position outside range";
  }
}
