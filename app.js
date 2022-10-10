const { Telegraf } = require('telegraf');
require('dotenv').config();
const axios = require("axios");
const bot = new Telegraf(process.env.api);
var http = require('http');
let port = process.env.PORT|| 8000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(port);
// let words = bot.hears('s');

