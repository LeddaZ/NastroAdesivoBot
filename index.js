const Bot = require('node-telegram-bot-api');
const lc = require('lower-case');
const request = require('request');
const token = '697036602:AAHwtJbcP7mp-nNzepGJibUUruUOksLOqXY';
const url = 'https://launchlibrary.net/1.3/launch';
const trigger = 'loddo';
const trigger2 = 'Loddo';
const trigger3 = 'buongiorno prof';
const trigger4 = 'Buongiorno prof';
const trigger5 = 'non ho lo scotch';
const trigger6 = 'Non ho lo scotch';
const trigger7 = 'popopopo';
const trigger8 = 'Popopopo';
const bot = new Bot(token, {polling: true});
bot.on('message', (msg) => {
  if (msg.text.toString() === trigger)
    bot.sendMessage(msg.chat.id, 'LODDOOOOOOOOOO!');
  if (msg.text.toString() === trigger2)
    bot.sendMessage(msg.chat.id, 'LODDOOOOOOOOOO!');
  if (msg.text.toString() === trigger3)
    bot.sendMessage(msg.chat.id, 'BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!');
  if (msg.text.toString() === trigger4)
    bot.sendMessage(msg.chat.id, 'BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!');
  if (msg.text.toString() === trigger5)
    bot.sendMessage(msg.chat.id, 'AAAH NON HA LO SCOTCH! E IO METTO DUE E NOTA SUL REGISTROOOOOOH!');
  if (msg.text.toString() === trigger6)
    bot.sendMessage(msg.chat.id, 'AAAH NON HA LO SCOTCH! E IO METTO DUE E NOTA SUL REGISTROOOOOOH!');
  if (msg.text.toString() === trigger7)
    bot.sendMessage(msg.chat.id, 'MERJAAA VAI FUORI DALLA PORTAAAAAH!');
  if (msg.text.toString() === trigger8)
    bot.sendMessage(msg.chat.id, 'MERJAAA VAI FUORI DALLA PORTAAAAAH!');
})
