function getListStudentIds(arg) {
  if (!Array.isArray(arg))
    return [];
  return arg.map((el) => el.id);
}

export default getListStudentIds;
