const express = require("express");
const accountsRouter = require("../routers/accountsRouter")

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use("/accounts", accountsRouter);

module.exports = server;
