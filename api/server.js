const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const express = require('express');
const path = require('path');

server.use(middlewares);
server.use('/images/*', express.static(path.join(__dirname, 'images')));
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
  '/images/*': '/images/$1',
  '/blog/:resource/:id/show': '/:resource/:id'
}));
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

module.exports = server;
