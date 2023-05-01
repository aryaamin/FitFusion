const { Client } = require("pg");
const fs = require("fs");

const data = fs.readFileSync("config.txt");

const clientdata = JSON.parse("{" + data + "}");

const client = new Client(clientdata);
client.connect();

module.exports = client;
