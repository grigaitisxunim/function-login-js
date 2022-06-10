const http = require("http");
const PORT = 3000;
const handler = (request, response) => {
  const { url, method } = request;
  console.log({
    url,
    method,
  });
  response.end();
};

http
  .createServer(handler)
  .listen(PORT, () => console.log("server running at", PORT));
