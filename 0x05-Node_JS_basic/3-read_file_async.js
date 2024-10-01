// 3-read_file_async.js
const { promisify } = require('util');
const { readFile } = require('fs');

const readFileAsync = promisify(readFile);

function parseCsvLine(csvLine) {
  return csvLine.split(',').map((element) => element.trim());
}

function countStudents(filePath) {
  const studentGroups = {};
  const fieldCounts = {};

  return readFileAsync(filePath, 'utf-8')
    .then((fileContent) => {
      const lines = fileContent.trim().split('\n');
      lines.shift(); // Remove header line
      lines.forEach((line) => {
        const [firstName, , , field] = parseCsvLine(line);

        studentGroups[field] = studentGroups[field] || [];
        studentGroups[field].push(firstName);

        fieldCounts[field] = (fieldCounts[field] || 0) + 1;
      });

      const totalStudents = lines.length;
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, count] of Object.entries(fieldCounts)) {
        if (field !== 'field') {
          const studentList = studentGroups[field].join(', ');
          console.log(`Number of students in ${field}: ${count}. List: ${studentList}`);
        }
      }
    })
    .catch((error) => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
