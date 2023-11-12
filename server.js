const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to Node.js Server!\n');
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
