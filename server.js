const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from Node.js!');
    }
});

server.listen(5000, () => {
    console.log('HTTP server is running on http://localhost:5000/');
});
