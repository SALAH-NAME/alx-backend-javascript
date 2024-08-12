function getListStudentIds(arr) {
  let newArr = [];
  if (arr instanceof Array) {
    newArr = arr.map((el) => el.id);
  }
  return newArr;
}

export default getListStudentIds;
