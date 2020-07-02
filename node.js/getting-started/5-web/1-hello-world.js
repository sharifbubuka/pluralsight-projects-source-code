const http = require('http');

const requestListener = (req, res) => {
  console.log(req, {depth: 0});
  res.write('Hello Nodemon\n');
  res.end();
};

const server = http.createServer();
server.on('request', requestListener);

server.listen(4243, () => {
  console.log('Server is running...');
});
