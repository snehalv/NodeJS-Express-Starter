const http = require('http');
const app = require('./index');
const port = 3010;
const server = http.createServer(app);
server.listen(port);
