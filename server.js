const express = require('express');

const server = express();

const carsRouter = require('./route/carRoute')

server.use(express.json());
server.use('/cars',carsRouter);

module.exports = server;