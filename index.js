const http = require('http');
const port = 3000;
const fs = require('fs');

const createHelloText = function writeAndCreateFile() {
  fs.writeFile('hello-world.txt', 'Hello to this great world!', err => {
    if (err) console.log('write error ' + err);
    fs.readFile('hello-world.txt', (err, data) => {
      if (err) throw err;
      console.log(data.toString());
    })
    });
  };

const requestHandler = (req, res) => {
  res.end(createHelloText());
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log('Error: ' + err);
  }
  console.log(`Server is listening on ${port}`);
});
