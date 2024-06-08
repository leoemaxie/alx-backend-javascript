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
