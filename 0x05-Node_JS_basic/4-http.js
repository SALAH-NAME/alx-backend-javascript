// 4-http.js

const http = require('http');

const hostname = '127.0.0.1';
const serverPort = 1245;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

server.listen(serverPort, hostname, () => {});

module.exports = server;
