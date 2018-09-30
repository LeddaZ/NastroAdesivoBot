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
const trigger18 = 'chi sei?';
const trigger19 = 'Chi sei?';
const trigger20 = 'chi sei tu?';
const trigger21 = 'Chi sei tu?';
const trigger22 = 'Salute';
const trigger23 = 'salute';
const trigger24 = 'Punto z';
const trigger25 = 'punto z';
const trigger26 = 'Punto Z';
const trigger27 = 'punto z';
const trigger28 = 'Paesaggio veneto';
const trigger29 = 'paesaggio veneto';
const trigger30 = 'Farfalle';
const trigger31 = 'farfalle';
const trigger32 = 'BioBusi';
const trigger33 = 'Non ho la tavola';
const trigger34 = 'non ho la tavola';
const trigger35 = 'Due';
const trigger36 = 'due';
const trigger37 = 'Ma non ho fatto niente';
const trigger38 = 'ma non ho fatto niente';
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
    bot.sendMessage(msg.chat.id, 'Il Busi 1.1.6 by @LeddaZ\nDigita BusiTrigger per la lista dei comandi\nCodice del bot: https://github.com/LeddaZ/NastroAdesivoBot');
  if (msg.text.toString() === trigger10)
    bot.sendMessage(msg.chat.id, 'Il Busi 1.1.6 by @LeddaZ\nDigita BusiTrigger per la lista dei comandi\nCodice del bot: https://github.com/LeddaZ/NastroAdesivoBot');
  if (msg.text.toString() === trigger11)
    bot.sendMessage(msg.chat.id, 'Trigger del Busi\nLoddo - Non ho lo scotch - Buongiorno prof - Buongiorno - Businfo - Popopopo - Tigre - Merjaaa - Chi sei? - Chi sei tu? - Salute - Punto Z - Paesaggio veneto - Farfalle - BioBusi - Non ho la tavola - Due - Ma non ho fatto niente');
  if (msg.text.toString() === trigger12)
    bot.sendMessage(msg.chat.id, 'CHI È QUESTO? AH È GUERAAAAAAH!');
  if (msg.text.toString() === trigger13)
    bot.sendMessage(msg.chat.id, 'CHI È QUESTO? AH È GUERAAAAAAH!');
  if (msg.text.toString() === trigger14)
    bot.sendMessage(msg.chat.id, 'https://i.ytimg.com/vi/q2l06PW6Uts/maxresdefault.jpg\nLE TIGRI SOFFRONOOOOH!');
  if (msg.text.toString() === trigger15)
    bot.sendMessage(msg.chat.id, 'https://i.ytimg.com/vi/q2l06PW6Uts/maxresdefault.jpg\nLE TIGRI SOFFRONOOOOH!');
  if (msg.text.toString() === trigger16)
    bot.sendMessage(msg.chat.id, 'BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!');
  if (msg.text.toString() === trigger17)
    bot.sendMessage(msg.chat.id, 'BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!');
  if (msg.text.toString() === trigger18)
    bot.sendMessage(msg.chat.id, 'SEI BELLABONA?');
  if (msg.text.toString() === trigger19)
    bot.sendMessage(msg.chat.id, 'SEI BELLABONA?');
  if (msg.text.toString() === trigger20)
    bot.sendMessage(msg.chat.id, 'SEI BELLABONA?');
  if (msg.text.toString() === trigger21)
    bot.sendMessage(msg.chat.id, 'SEI BELLABONA?');
  if (msg.text.toString() === trigger22)
    bot.sendMessage(msg.chat.id, "Dire 'salute' quando si StErNutA è buona educazione, ma in alcuni casi, come nella 2IE, disturba la lezione, quindi non si dice, PENA... L'INFERNOOOOOOH! CI SIAMO CAPITIIIIH?");
  if (msg.text.toString() === trigger23)
    bot.sendMessage(msg.chat.id, "Dire 'salute' quando si StErNutA è buona educazione, ma in alcuni casi, come nella 2IE, disturba la lezione, quindi non si dice, PENA... L'INFERNOOOOOOH! CI SIAMO CAPITIIIIH?");
  if (msg.text.toString() === trigger24)
    bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");
  if (msg.text.toString() === trigger25)
    bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");
  if (msg.text.toString() === trigger26)
    bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");
  if (msg.text.toString() === trigger27)
    bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");
  if (msg.text.toString() === trigger28)
    bot.sendMessage(msg.chat.id, "http://www.paesaggioveneto.it/");
  if (msg.text.toString() === trigger29)
    bot.sendMessage(msg.chat.id, "http://www.paesaggioveneto.it/");
  if (msg.text.toString() === trigger30)
    bot.sendMessage(msg.chat.id, "Le farfalle fanno AAAAAHHHHHH!");
  if (msg.text.toString() === trigger31)
    bot.sendMessage(msg.chat.id, "Le farfalle fanno AAAAAHHHHHH!");
  if (msg.text.toString() === trigger32)
    bot.sendMessage(msg.chat.id, "Renato Busata si laurea in architettura presso l'Istituto Universitario di Architettura di Venezia nel 1983. Dal 1989 è docente di disegno presso istituti e licei padovani. Tra le varie pubblicazioni si segnalano 'Testimonianze storiche e artistiche', edito dal Comune di Rubano; 'Piccolo manuale per affrontare un progetto di architettura' di Gangemi Editore, con l'introduzione di Franco Purini e Luigi Monetti; 'Architetture tra Roma e Milano nel secondo dopoguerra', Ed. Libreria Progetto. Nel 2006 è dottore di ricerca in Composizione architettonica presso l'Università IUAV di Venezia.");
  if (msg.text.toString() === trigger33)
    bot.sendMessage(msg.chat.id, "DUEEEEEEEEEE!");
  if (msg.text.toString() === trigger34)
    bot.sendMessage(msg.chat.id, "DUEEEEEEEEEE!");
  if (msg.text.toString() === trigger35)
    bot.sendMessage(msg.chat.id, "LO DICO IO QUANDO METTERE DUE!");
  if (msg.text.toString() === trigger36)
    bot.sendMessage(msg.chat.id, "LO DICO IO QUANDO METTERE DUE!");
  if (msg.text.toString() === trigger37)
    bot.sendMessage(msg.chat.id, "VAI VIAAAAAAAAH!");
  if (msg.text.toString() === trigger38)
    bot.sendMessage(msg.chat.id, "VAI VIAAAAAAAAH!");
})
