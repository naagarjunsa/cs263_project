const http = require("http");
const fs = require("fs").promises;

let cnt = 0;

// sleep function since NodeJS doesn't provide one
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const requestListener = async function (req, res, cnt) {
  // add 2 second delay to every 10th request
  if (cnt % 10 === 0) {
    console.log("Adding delay of 2 seconds. count: ", cnt);
    await sleep(2000);
  }
  const contents = await fs.readFile(__dirname + "/hello.html"); // read html file
  res.setHeader("Connection", "keep-alive");
  res.writeHead(200); // 200 OK
  res.end(contents); // send data to client side
};

// set router
const server = http.createServer((req, res) => {
  cnt++;
  requestListener(req, res, cnt);
});
const host = "localhost";
const port = 8080;

// set listen port
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

