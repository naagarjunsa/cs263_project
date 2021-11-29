const http = require('http'); // Loads the http module 
var fs = require('fs').promises;

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

const requestListener = async function (req, res, flag) {
    
    if (flag) {
        await sleep(2000);
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.write('CPU Task Finished!\n');
        response.end();
    }
    else {
        const contents = await fs.readFile(__dirname + "/hello.html");
        res.setHeader("Connection", "keep-alive");
        res.writeHead(200); 
        res.end(contents);
    }
};

  
const server = http.createServer((request, response) => {
   
    if (request.url == '/') {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.write('Hello, World!\n');
        response.end();
    }

    if (request.url == '/io') {
        requestListener(request, response, false);
    }

    if (request.url == '/cpu') {
        requestListener(request, response, true);
    }

});

server.listen(8080, 'localhost', () => {});