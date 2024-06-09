/**
 * Returns an array of students filtered by location.
 *
 * @param {Array} students - The array of student objects.
 * @param {string} location - The location to filter by.
 * @returns {Array} - The filtered array of students.
 */
export default function getStudentsByLocation(students, location) {
  return students.filter((student) => student.location == location);
}
