// 7-http_express.js
const express = require('express');
const fs = require('fs');

const server = express();
const SERVER_PORT = 1245;
const DATABASE_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  }
  if (filePath) {
    fs.readFile(filePath, (error, fileData) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      if (fileData) {
        const reportLines = [];
        const lines = fileData.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const headers = lines[0].split(',');
        const studentAttributes = headers.slice(0, headers.length - 1);

        for (const line of lines.slice(1)) {
          const studentDetails = line.split(',');
          const studentValues = studentDetails.slice(0, studentDetails.length - 1);
          const field = studentDetails[studentDetails.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentAttributes.map((attribute, index) => [
            attribute,
            studentValues[index],
          ]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups).reduce(
          (previous, current) => (previous || []).length + current.length,
        );
        reportLines.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          reportLines.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportLines.join('\n'));
      }
    });
  }
});

server.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

server.get('/students', (_, res) => {
  const responseLines = ['This is the list of our students'];

  countStudents(DATABASE_FILE)
    .then((report) => {
      responseLines.push(report);
      const responseText = responseLines.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((error) => {
      responseLines.push(error instanceof Error ? error.message : error.toString());
      const responseText = responseLines.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

server.listen(SERVER_PORT, () => {
  console.log(`Server listening on PORT ${SERVER_PORT}`);
});

module.exports = server;
