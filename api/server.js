const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const path = require('path');

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
  '/images/*': '/images/$1',
}));
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

module.exports = server;
