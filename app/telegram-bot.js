'use strict'

const TOKEN = '468842881:AAGI68ZCubLbUo4JF4CDVZxmvBp14eBhYz4'
const CHAT_ID = '-218892414'

const TelegramBot = require('node-telegram-bot-api');

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/booking (.+) (.+)/, (msg, match) => {
  const resp = `Имя: ${match[1]}\nТелефон: ${match[2]}`;

  bot.sendMessage(CHAT_ID, resp);
});