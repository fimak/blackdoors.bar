const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '468842881:AAGI68ZCubLbUo4JF4CDVZxmvBp14eBhYz4'
const CHAT_ID = '-218892414'

const bot = new TelegramBot(TOKEN, {polling: true});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/../index.html');
});

app.post('/api/booking', function (req, res) {
    const message = `Имя: ${req.body.name}\nТелефон: ${req.body.phone}`;
    bot.sendMessage(CHAT_ID, message);
    console.log(req.body);
    res.send(message);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});