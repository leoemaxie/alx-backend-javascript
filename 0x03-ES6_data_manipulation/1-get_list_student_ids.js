/**
 * Returns an array of student IDs from the given array of students.
 *
 * @param {Array} students - The array of students.
 * @returns {Array} - An array of student IDs.
 */
export default function getListStudentIds(students) {
  return students.map((student) => student.id);
}
