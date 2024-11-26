const http = require("http");
const url = require("url");

const processEndpoint = (name, method, req, res, callback) => {

  const parsedUrl = url.parse(req.url, true);
  const endpoint = parsedUrl.pathname;
  if (endpoint === name && req.method === method) {
    callback(req, res);
  }
};

const rootHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
};

const server = http.createServer((req, res) => {
  processEndpoint("/", "GET", req, res, rootHandler);
});

try {
  server.listen(8000, () => {
    console.log("HTTP server is running on http://localhost:8000/");
  });
} catch (e) {
  console.error("Something went wrong:", e);
}
