const http = require('http'); // Loads the http module 
var fs = require('fs').promises;

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

const requestListener = async function (request, response, flag) {
    
    if (flag) {
        await sleep(1000);
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.write('CPU Task Finished!\n');
        response.end();
    }
    else {
        const contents = await fs.readFile(__dirname + "/hello.html");
        response.setHeader("Connection", "keep-alive");
        response.writeHead(200); 
        response.end(contents);
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