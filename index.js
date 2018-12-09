const Bot = require("node-telegram-bot-api");
const request = require("request");
const token = "697036602:AAHwtJbcP7mp-nNzepGJibUUruUOksLOqXY";
const trigger1 = "loddo";
const trigger2 = "buongiorno";
const trigger3 = "non ho lo scotch";
const trigger4 = "popopopo";
const trigger5 = "businfo";
const trigger6 = "busitrigger";
const trigger7 = "merja";
const trigger8 = "tigre";
const trigger10 = "chi sei";
const trigger11 = "salute";
const trigger12 = "punto z";
const trigger13 = "paesaggio veneto";
const trigger14 = "farfalle";
const trigger15 = "biobusi";
const trigger16 = "non ho la tavola";
const trigger17 = "due";
const trigger18 = "ma non ho fatto niente";
const trigger19 = "busiaudio";
const trigger20 = "autocad";
const trigger21 = "brutto sto qua";
const trigger22 = "busata è un sapiente";
const trigger23 = "busirena";
const trigger24 = "compassione";
const trigger25 = "gomma";
const trigger26 = "hai capito";
const trigger27 = "busi16";
const trigger28 = "insolente";
const trigger29 = "nirvana lento";
const trigger30 = "nirvana";
const trigger31 = "norvegia";
const trigger32 = "ti caccio via";
const trigger33 = "violenza privata";
const trigger34 = "cane procione";
const trigger35 = "pelliccia";
const trigger36 = "palazzo";
const trigger37 = "facebook";
const trigger38 = "cosmo";
const trigger39 = "orco2";
const trigger40 = "orco";
const trigger41 = "che schifo";
const trigger42 = "busiacuto";
const trigger43 = "marchesin";
const trigger44 = "viva la rivoluzione";
const trigger45 = "busifoto";
const trigger46 = "oh no";
const trigger47 = "non sono parallele";
const trigger48 = "busecs";
const trigger49 = "busecs2";
const trigger50 = "triggered";
const trigger51 = "dio";
const trigger52 = "dio cane";
const trigger53 = "bassi";
const trigger54 = "benvegn";
const trigger55 = "cacciato via";
const trigger56 = "guerra";
const trigger57 = "marchesin vai via";
const trigger58 = "carta stracciata";
const trigger59 = "mi avete stufato";
const trigger60 = "vedovato traffica";
const trigger61 = "straccia la carta";
const trigger62 = "/start";
const trigger63 = "non ho capito";
const trigger64 = "orari"
const trigger65 = "animalismo a scuola";
const trigger66 = "cani";
const trigger67 = "Pagina 1";
const trigger68 = "Pagina 2";
const trigger69 = "Pagina 3";
const trigger70 = "terrapiattisti";
const trigger71 = "povero guerra";
const trigger72 = "moro";
const trigger73 = "macchine";
const trigger74 = "falasco";
const trigger75 = "busi bestemmia";
const trigger76 = "merja fa andare busi all'inferno";
const trigger77 = "devo finire la tavola";
const trigger78 = "denti";
const trigger79 = "colpa di guerra";
const trigger80 = "vedovato";
const trigger81 = "ti tieni il 2";
const trigger82 = "mister fantastico";
const trigger83 = "governo";
const trigger84 = "il taglio di guerra";
const trigger85 = "busi va all'inferno";
const trigger86 = "soddisfa il busi";
const trigger87 = "andate via"
const trigger88 = "merja ha le mani gi"
const businfo_text = "Il Busi 1.4.0 by @LeddaZ\nDigita BusiTrigger per la lista dei trigger\nCodice del bot: https://github.com/LeddaZ/NastroAdesivoBot\nTrigger: 88 (29 parole, 8 foto e 51 audio)"
const bot = new Bot(token, {polling: true});
bot.on("message", (msg) => {
  if (msg.text.toString().toLowerCase().indexOf(trigger1) === 0)
    bot.sendMessage(msg.chat.id, "LODDOOOOOOOOOO!");
  if (msg.text.toString().toLowerCase().indexOf(trigger2) === 0)
    bot.sendMessage(msg.chat.id, "BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger3) === 0)
    bot.sendMessage(msg.chat.id, "AAAH NON HA LO SCOTCH! E IO METTO DUE E NOTA SUL REGISTROOOOOOH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger4) === 0)
    bot.sendMessage(msg.chat.id, "MERJAAA VAI FUORI DALLA PORTAAAAAH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger5) === 0)
    bot.sendMessage(msg.chat.id, businfo_text);
  if (msg.text.toString().toLowerCase().indexOf(trigger6) === 0)
    bot.sendMessage(msg.chat.id, "Trigger del Busi\nLoddo; Non ho lo scotch; Buongiorno; Businfo; Popopopo; Merjaaa; Chi sei?; Salute; Punto Z; Paesaggio veneto; Farfalle; BioBusi; Non ho la tavola; Ma non ho fatto niente; BusiAudio; BusiFoto; Dio <qualsiasi cosa>; Straccia la carta; Non ho capito; Orario; Animalismo a scuola; Cani");
  if (msg.text.toString().toLowerCase().indexOf(trigger7) === 0)
    bot.sendMessage(msg.chat.id, "CHI È QUESTO? AH È GUERAAAAAAH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger8) === 0)
    bot.sendMessage(msg.chat.id, "https://i.ytimg.com/vi/q2l06PW6Uts/maxresdefault.jpg\nLE TIGRI SOFFRONOOOOH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger10) === 0)
    bot.sendMessage(msg.chat.id, "SEI BELLABONA?");
  if (msg.text.toString().toLowerCase().indexOf(trigger11) === 0)
    bot.sendMessage(msg.chat.id, "Dire "salute" quando si StErNutA è buona educazione, ma in alcuni casi, come nella 2IE, disturba la lezione, quindi non si dice, PENA... L"INFERNOOOOOOH! CI SIAMO CAPITIIIIH?");
  if (msg.text.toString().toLowerCase().indexOf(trigger12) === 0)
    bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL"INFINITOOOH!");
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
    bot.sendMessage(msg.chat.id, "Seleziona una pagina", {
      "reply_markup": {
    "keyboard": [["Pagina 1"], ["Pagina 2"], ["Pagina 3"]]
    }
    if (msg.text.toString().indexOf(trigger67) === 0) {
      bot.sendMessage(msg.chat.id, "BusiAudio - Pagina 1\nAutoCAD; Brutto sto qua; Busata è un sapiente; Busirena; Compassione; Due; Gomma; Hai capito; Busi16; Insolente; Nirvana lento; Nirvana; Norvegia; Ti caccio via; Violenza privata; Palazzo; Facebook; Cosmo; Orco; Orco2");
    }
    if (msg.text.toString().indexOf(trigger68) === 0) {
      bot.sendMessage(msg.chat.id, "BusiAudio - Pagina 2\nChe schifo; BusiAcuto; Marchesin; Rivoluzione; Bassi; Benvegnù; Cacciato via; Guerra; Marchesin vai via; Carta stracciata; Mi avete stufato; Vedovato traffica; Terrapiattisti; Orari; Povero Guerra; Moro; Macchine; Falasco; Busi Bestemmia; Merja fa andare Busi all'inferno");
    }    
    if (msg.text.toString().indexOf(trigger69) === 0) {
      bot.sendMessage(msg.chat.id, "BusiAudio - Pagina 3\nDevo finire la tavola; Denti; Colpa di Guerra; Vedovato; Ti tieni il 2; Mister Fantastico; Governo; Il taglio di Guerra; Busi va all'inferno; Soddisfa il Busi; Andate via; Merja ha le mani giù");
    }
  );
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
  if (msg.text.toString().toLowerCase().indexOf(trigger34) === 0)
    bot.sendMessage(msg.chat.id, "https://t1.ea.ltmcdn.com/it/images/5/2/4/img_il_cane_procione_come_animale_domestico_1425_paso_0_600.jpg\nI CANI PROCIONI SOFFRONOOOOH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger35) === 0)
    bot.sendMessage(msg.chat.id, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Mink_coat_lunaraine.jpg/275px-Mink_coat_lunaraine.jpg\nNON COMPRATE I CAPPOTTI CON LE PELLICCIE CHE VI PORTATE DIETRO LA SOFFERENZA DEGLI ANIMALIIIIIH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger36) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/bNUb7iOEMkMn.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger37) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/082QoWMMz_Ow.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger38) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/0GA2Xeg9sRd5.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger39) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/90d2gas3dwQa.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger40) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/EcF4bCUdfWiL.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger41) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/qIdbEkxljQHX.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger42) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/SVMEfdg7yV2V.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger43) === 0)
	if (msg.text.toString().toLowerCase().indexOf(trigger57) === 0)
	  bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/v2FGaTXnhYoA.mp3");
    else
	  bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/t2a9IJtcvqWD.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger44) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/UWhCnzcJps7h.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger45) === 0)
	bot.sendMessage(msg.chat.id, "Lista foto del Busi:\nTigre; Cane procione; Pelliccia; Oh no; Non sono parallele; Busecs; Busecs2; Triggered");
  if (msg.text.toString().toLowerCase().indexOf(trigger46) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/wrQSmPlj55IH.jpg\nOh no, non sono parallele...");
  if (msg.text.toString().toLowerCase().indexOf(trigger47) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/YJa8N__BT0E4.jpg\nNON SONO PARALLELEEEEEEEEH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger48) === 0)
	if (msg.text.toString().toLowerCase().indexOf(trigger49) === 0)
      bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/NagriUpAqytQ.jpg\nBUONGIORNOH!");
    else
	  bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/K5wZ-5klUlCz.jpg\nDUEEEEH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger50) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/E_FJlFM2gc0a.jpg\nNON SI SPRECA LA CARTAAAAAH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger51) === 0)
	if (msg.text.toString().toLowerCase().indexOf(trigger52) === 0)
	  bot.sendMessage(msg.chat.id, "CHI È STO QUA? HO SENTITO UN CAGNOLINO PRECEDUTO DA QUALCOS'ALTROOOH!");
    else
	  bot.sendMessage(msg.chat.id, "AH IO DEVO FARE LE INDAGINI, SÌ PERCHÉ LA GENTE BESTEMIAAAAH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger53) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/Z5FNub-4rnEC.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger54) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/BkD_psaw6nUb.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger55) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/_8BZYN9rxHtc.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger56) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/9DJk-rQW1X7x.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger58) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/wUwwPneHVcVT.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger59) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/tgKhWh5aaxM5.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger60) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/rYz_zqeMxbea.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger61) === 0)
	bot.sendMessage(msg.chat.id, "L'ALUNNO STRACCIA, DISTRUGGE, FA A PEZZETTI LA TAVOLA DA DISEGNOOOH!\nTI VA DI LUSSO MERJA, DI SOLITO PER QUESTE COSE METTO NOTA SUL REGISTROOOOOOH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger62) === 0)
	bot.sendMessage(msg.chat.id, businfo_text);
  if (msg.text.toString().toLowerCase().indexOf(trigger63) === 0)
	bot.sendMessage(msg.chat.id, "EEH TI ARRANGI NON È POSSIBILE CHE DEVO SEMPRE SPIEGARE LE STESSE COSEEEH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger64) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/nwVgAgxNtgUC.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger65) === 0)
	bot.sendMessage(msg.chat.id, "https://it-it.facebook.com/pages/biz/community/Animalismo-a-scuola-169759173228670/\nANDATE A FARE LE RICERCHEEEEH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger66) === 0)
	bot.sendMessage(msg.chat.id, "NON COMPRATE I CAPPOTTI CON LE PELLICCE DI MURMANSKI, PERCHÉ I CINESI FANNO SOFFRIRE I CANIIIIH!");
  if (msg.text.toString().toLowerCase().indexOf(trigger70) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/hBCOhFQAAJZk.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger71) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/XeH6ckkMP16w.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger72) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/6W-beHCght8X.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger73) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/U2n5sRgsBmvS.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger74) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/c3-KYyuDk0CE.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger75) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/to6_gflluipH.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger76) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/uVw2PjBpWQr7.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger77) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/BtaXAJcmqD5l.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger78) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/-WMAqO6nrQlS.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger79) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/vSiLVwwsKYdD.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger80) === 0)
    if (msg.text.toString().toLowerCase().indexOf(trigger60) === 0)
      bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/rYz_zqeMxbea.mp3");
    else
	  bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/x68Lmdlf3Tct.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger81) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/jVW5DHcGRCe6.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger82) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/SDvT6rC0ZJqv.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger83) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/GbTgmxUb3tIv.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger84) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/oLe3lUTpyW5n.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger85) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/g9g8eys-t_a-.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger86) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/kO61IBhvI4aY.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger87) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/u-e1QXxaSZHR.mp3");
  if (msg.text.toString().toLowerCase().indexOf(trigger88) === 0)
	bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/3osIzrc1zEj3.mp3");
})
