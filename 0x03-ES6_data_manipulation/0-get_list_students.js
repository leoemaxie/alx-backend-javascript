export default function getListStudents(students, location) {
  return students.filter((student) => student.location == location);
}
