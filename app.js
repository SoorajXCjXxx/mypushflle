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
bot.start((ctx) => ctx.reply('Enter I am Richard'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.hears('hello', (ctx) => ctx.reply('Hey there'));
bot.hears('kitto', (ctx) => ctx.reply('Brother please add me in your gp'));
bot.hears('k', (c) => c.reply('Brother please add me in your gp'));
bot.hears('I am Richard', (c) => c.reply('Bro how the war is going'));
// bot.hears('', (c) => c.reply('Bro how the war is going'));
bot.on('message', (c)=> c.reply(' Thanks for chating with richard '));
// bot.text('hello',(ctx)=>ctx.reply("hello brother"))

bot.launch();


process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

