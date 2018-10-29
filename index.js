const Bot = require('node-telegram-bot-api');
const request = require('request');
const token = '697036602:AAHwtJbcP7mp-nNzepGJibUUruUOksLOqXY';
const trigger1 = 'loddo';
const trigger2 = 'buongiorno';
const trigger3 = 'non ho lo scotch';
const trigger4 = 'popopopo';
const trigger5 = 'businfo';
const trigger6 = 'busitrigger';
const trigger7 = 'merjaaa';
const trigger8 = 'tigre';
const trigger10 = 'chi sei?';
const trigger11 = 'salute';
const trigger12 = 'punto z';
const trigger13 = 'paesaggio veneto';
const trigger14 = 'farfalle';
const trigger15 = 'biobusi';
const trigger16 = 'non ho la tavola';
const trigger17 = 'due';
const trigger18 = 'ma non ho fatto niente';
const trigger19 = 'busiaudio';
const trigger20 = 'autocad';
const trigger21 = 'brutto sto qua';
const trigger22 = 'busata è un sapiente';
const trigger23 = 'busirena';
const trigger24 = 'compassione';
const trigger25 = 'gomma';
const trigger26 = 'hai capito';
const trigger27 = 'busi16';
const trigger28 = 'insolente';
const trigger29 = 'nirvana lento';
const trigger30 = 'nirvana';
const trigger31 = 'norvegia';
const trigger32 = 'ti caccio via';
const trigger33 = 'violenza privata';
const bot = new Bot(token, {polling: true});
bot.on('message', (msg) => {
  if (msg.text.toString().toLowerCase().indexOf(trigger1) === 0)
    bot.sendMessage(msg.chat.id, 'LODDOOOOOOOOOO!');
  if (msg.text.toString().toLowerCase().indexOf(trigger2) === 0)
    bot.sendMessage(msg.chat.id, 'BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!');
  if (msg.text.toString().toLowerCase().indexOf(trigger3) === 0)
    bot.sendMessage(msg.chat.id, 'AAAH NON HA LO SCOTCH! E IO METTO DUE E NOTA SUL REGISTROOOOOOH!');
  if (msg.text.toString().toLowerCase().indexOf(trigger4) === 0)
    bot.sendMessage(msg.chat.id, 'MERJAAA VAI FUORI DALLA PORTAAAAAH!');
  if (msg.text.toString().toLowerCase().indexOf(trigger5) === 0)
    bot.sendMessage(msg.chat.id, 'Il Busi 1.2.0 by @LeddaZ\nDigita BusiTrigger per la lista dei comandi\nCodice del bot: https://github.com/LeddaZ/NastroAdesivoBot');
  if (msg.text.toString().toLowerCase().indexOf(trigger6) === 0)
    bot.sendMessage(msg.chat.id, 'Trigger del Busi\nLoddo - Non ho lo scotch - Buongiorno - Businfo - Popopopo - Tigre - Merjaaa - Chi sei? - Salute - Punto Z - Paesaggio veneto - Farfalle - BioBusi - Non ho la tavola - Ma non ho fatto niente - Busiaudio');
  if (msg.text.toString().toLowerCase().indexOf(trigger7) === 0)
    bot.sendMessage(msg.chat.id, 'CHI È QUESTO? AH È GUERAAAAAAH!');
  if (msg.text.toString().toLowerCase().indexOf(trigger8) === 0)
    bot.sendMessage(msg.chat.id, 'https://i.ytimg.com/vi/q2l06PW6Uts/maxresdefault.jpg\nLE TIGRI SOFFRONOOOOH!');
  if (msg.text.toString().toLowerCase().indexOf(trigger10) === 0)
    bot.sendMessage(msg.chat.id, 'SEI BELLABONA?');
  if (msg.text.toString().toLowerCase().indexOf(trigger11) === 0)
    bot.sendMessage(msg.chat.id, "Dire 'salute' quando si StErNutA è buona educazione, ma in alcuni casi, come nella 2IE, disturba la lezione, quindi non si dice, PENA... L'INFERNOOOOOOH! CI SIAMO CAPITIIIIH?");
  if (msg.text.toString().toLowerCase().indexOf(trigger12) === 0)
    bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger13) === 0)
    bot.sendMessage(msg.chat.id, "http://www.paesaggioveneto.it/");
  if (msg.text.toString().toLowerCase().indexOf(trigger14) === 0)
    bot.sendMessage(msg.chat.id, "Le farfalle fanno AAAAAHHHHHH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger15) === 0)
    bot.sendMessage(msg.chat.id, "Renato Busata si laurea in architettura presso l'Istituto Universitario di Architettura di Venezia nel 1983. Dal 1989 è docente di disegno presso istituti e licei padovani. Tra le varie pubblicazioni si segnalano 'Testimonianze storiche e artistiche', edito dal Comune di Rubano; 'Piccolo manuale per affrontare un progetto di architettura' di Gangemi Editore, con l'introduzione di Franco Purini e Luigi Monetti; 'Architetture tra Roma e Milano nel secondo dopoguerra', Ed. Libreria Progetto. Nel 2006 è dottore di ricerca in Composizione architettonica presso l'Università IUAV di Venezia.");
  if (msg.text.toString().toLowerCase().indexOf(trigger16) === 0)
    bot.sendMessage(msg.chat.id, "DUEEEEEEEEEE!");
  if (msg.text.toString().toLowerCase().indexOf(trigger18) === 0)
    bot.sendMessage(msg.chat.id, "VAI VIAAAAAAAAH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger19) === 0)
    bot.sendMessage(msg.chat.id, "Lista audio del Busi:\nAutoCAD - Brutto sto qua - Busata è un sapiente - Busirena - Compassione - Due - Gomma - Hai capito - Busi16 - Insolente - Nirvana lento - Nirvana - Norvegia - Ti caccio via - Violenza privata");
  if (msg.text.toString().toLowerCase().indexOf(trigger20) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/CujnZBJRaRS9.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger21) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/ieWe74fWX_mI.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger22) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/CtKUN2Ennh95.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger23) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/_fdSsKsjKAyW.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger24) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/zXV_OyRnOoef.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger17) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/iMEJ6vF4IHh5.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger25) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/ntHniD7G8_4y.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger26) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/J4JKLnhTSP_M.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger27) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/pfMF_fKstdo0.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger28) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/d0JkpQhlhpYe.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger29) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/i2XwCaBHsCTj.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger30) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/ZVTUvo1ylD9l.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger31) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/LfJFmpMuCu2W.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger32) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/JpOZ2bW3i30n.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger33) === 0)
    bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/EZj0Kk3pzC34.mp3");
})
