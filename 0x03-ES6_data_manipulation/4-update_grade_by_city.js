/**
 * Updates the grade of students based on their city.
 *
 * @param {Array} students - The array of student objects.
 * @param {string} city - The city to filter the students by.
 * @param {Array} newGrades - The array of new grades to update.
 * @returns {Array} - The updated array of student objects.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location == city)
    .map((student) => {
      let grade = newGrades.filter((score) => score.studentId == student.id);

      if (grade.length > 0) {
        student.grade = grade[0].grade;
      } else {
        student.grade = "N/A";
      }

      return student;
    });
}
