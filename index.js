const Bot = require('node-telegram-bot-api');
const request = require('request');
const token = '697036602:AAHwtJbcP7mp-nNzepGJibUUruUOksLOqXY';
const trigger = 'loddo';
const trigger2 = 'Loddo';
const trigger3 = 'buongiorno prof';
const trigger4 = 'Buongiorno prof';
const trigger5 = 'non ho lo scotch';
const trigger6 = 'Non ho lo scotch';
const trigger7 = 'popopopo';
const trigger8 = 'Popopopo';
const trigger9 = 'Businfo';
const trigger10 = 'businfo';
const trigger11 = 'BusiTrigger';
const trigger12 = 'Merjaaa';
const trigger13 = 'merjaaa';
const trigger14 = 'tigre';
const trigger15 = 'Tigre';
const trigger16 = 'Buongiorno';
const trigger17 = 'buongiorno';
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
  if (msg.text.toString() === trigger9)
    bot.sendMessage(msg.chat.id, 'Il Busi 1.1.0 by @LeddaZ - Digita BusiTrigger per i comandi');
  if (msg.text.toString() === trigger10)
    bot.sendMessage(msg.chat.id, 'Il Busi 1.1.0 by @LeddaZ - Digita BusiTrigger per i comandi');
  if (msg.text.toString() === trigger11)
    bot.sendMessage(msg.chat.id, 'Comandi del Busi - Loddo; Non ho lo scotch; Buongiorno prof; Buongiorno; Businfo; Popopopo; Tigre; Merjaaa');
  if (msg.text.toString() === trigger12)
    bot.sendMessage(msg.chat.id, 'CHI È QUESTO? AH È GUERAAAAAAH!');
  if (msg.text.toString() === trigger13)
    bot.sendMessage(msg.chat.id, 'CHI È QUESTO? AH È GUERAAAAAAH!');
  if (msg.text.toString() === trigger14)
    bot.sendMessage(msg.chat.id, 'https://i.ytimg.com/vi/q2l06PW6Uts/maxresdefault.jpg LE TIGRI SOFFRONOOOOH!');
  if (msg.text.toString() === trigger15)
    bot.sendMessage(msg.chat.id, 'https://i.ytimg.com/vi/q2l06PW6Uts/maxresdefault.jpg LE TIGRI SOFFRONOOOOH!');
  if (msg.text.toString() === trigger16)
    bot.sendMessage(msg.chat.id, 'BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!');
  if (msg.text.toString() === trigger17)
    bot.sendMessage(msg.chat.id, 'BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!');
})
