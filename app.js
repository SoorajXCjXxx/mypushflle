const { Telegraf } = require('telegraf');
require('dotenv').config();
const axios = require("axios");
const bot = new Telegraf(process.env.api);
// let words = bot.hears('s');
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.hears('hello', (ctx) => ctx.reply('Hey there'));
bot.hears('kitto', (ctx) => ctx.reply('Brother please add me in your gp'));
bot.hears('k', (c) => c.reply('Brother please add me in your gp'));
bot.on('message', (c)=> c.reply('fuck u '));
// bot.text('hello',(ctx)=>ctx.reply("hello brother"))

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));