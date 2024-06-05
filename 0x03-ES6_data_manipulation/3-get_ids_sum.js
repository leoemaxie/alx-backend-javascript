export default function getListStudentIds(students) {
  return students.map((student) => student.id).reduce((a, b) => a + b);
}
