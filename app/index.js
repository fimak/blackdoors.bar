'use strict'

const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '468842881:AAGI68ZCubLbUo4JF4CDVZxmvBp14eBhYz4'
const CHAT_ID = '-218892414'

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
    const chatId = msg.chat.id;
    const resp = `Имя: ${match[1]} \n Телефон: ${match[2]}`;
    bot.sendMessage(CHAT_ID, resp);
    bot.sendMessage(chatId, 'Message has been sanded to GroupChat');
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});