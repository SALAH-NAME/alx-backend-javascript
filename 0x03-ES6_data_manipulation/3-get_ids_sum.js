function getStudentIdsSum(students) {
  return students.reduce((agg, student) => agg + student.id, 0);
}

export default getStudentIdsSum;
