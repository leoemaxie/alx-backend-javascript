/**
 * Calculates the sum of student IDs.
 *
 * @param {Array} students - An array of student objects.
 * @returns {number} - The sum of student IDs.
 */
export default function getStudentIdsSum(students) {
  return students.map((student) => student.id).reduce((a, b) => a + b);
}
