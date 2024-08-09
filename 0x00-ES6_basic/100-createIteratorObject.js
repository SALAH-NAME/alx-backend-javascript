function createIteratorObject(report) {
  const res = [];
  for (const idx of Object.values(report.allEmployees)) {
    res.push(...idx);
  }
  return res;
}

export default createIteratorObject;
