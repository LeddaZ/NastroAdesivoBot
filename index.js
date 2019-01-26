//Il Busata by @LeddaZ
//Scritto in node.js

//Dichiarazione variabili
//Moduli npm richiesti
const Bot = require("node-telegram-bot-api");
const request = require("request");
//Token del bot
const token = "697036602:AAHwtJbcP7mp-nNzepGJibUUruUOksLOqXY";
//Trigger
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
const trigger19 = "BusiAudio";
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
const trigger52 = "dio can";
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
const trigger87 = "andate via";
const trigger88 = "merja ha le mani gi";
const trigger89 = "busi è un po' tardo";
const trigger90 = "guerra a 90";
const trigger91 = "koreani mangiacani";
const trigger92 = "ledda studia chimica";
const trigger93 = "sfoglia il quaderno";
const trigger94 = "stare al mondo";
const trigger95 = "basta battere";
const trigger96 = "si diventa deficienti";
const trigger97 = "metto 2 subito";
const trigger98 = "porta la cartellina";
//Testo di Businfo e /start
const businfo_text = "<b>Il Busata</b> by @LeddaZ\nVersione <b>1.6.5</b> del 26/1/2019\nDigita <b>BusiTrigger</b> per la lista dei trigger\n<a href=\"https://github.com/LeddaZ/NastroAdesivoBot/\">Codice del bot su GitHub</a>\nTrigger: 93 (23 parole, 8 foto e 62 audio)";
//Attivazione del bot
const bot = new Bot(token, { polling: true });

//Codice del bot
bot.on("message", (msg) => {
    //Pulsanti per BusiAudio
    var opts = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Pagina 1', callback_data: '1' }],
                [{ text: 'Pagina 2', callback_data: '2' }],
                [{ text: 'Pagina 3', callback_data: '3' }],
                [{ text: 'Pagina 4', callback_data: '4' }]
            ]
        }
    };
    //Risposte ai trigger
    if (msg.text.toString().toLowerCase().indexOf(trigger1) === 0)
        bot.sendMessage(msg.chat.id, "LODDOOOOOOOOOO!");
    if (msg.text.toString().toLowerCase().indexOf(trigger2) === 0)
        bot.sendMessage(msg.chat.id, "BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!");
    if (msg.text.toString().toLowerCase().indexOf(trigger3) === 0)
        bot.sendMessage(msg.chat.id, "AAAH NON HA LO SCOTCH! E IO METTO DUE E NOTA SUL REGISTROOOOOOH!");
    if (msg.text.toString().toLowerCase().indexOf(trigger4) === 0)
        bot.sendMessage(msg.chat.id, "MERJAAA VAI FUORI DALLA PORTAAAAAH!");
    if (msg.text.toString().toLowerCase().indexOf(trigger5) === 0)
        bot.sendMessage(msg.chat.id, businfo_text, { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(trigger6) === 0)
        bot.sendMessage(msg.chat.id, "<b>Trigger del Busi</b>\nLoddo, Non ho lo scotch, Buongiorno, Businfo, Popopopo, Merjaaa, Chi sei?, Salute, Punto Z, Paesaggio veneto, Farfalle, BioBusi, Non ho la tavola, Ma non ho fatto niente, BusiAudio, BusiFoto, Dio <qualsiasi cosa>, Straccia la carta, Non ho capito, Orario, Animalismo a scuola, Cani", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(trigger7) === 0)
        bot.sendMessage(msg.chat.id, "CHI È QUESTO? AH È GUERAAAAAAH!");
    if (msg.text.toString().toLowerCase().indexOf(trigger8) === 0)
        bot.sendMessage(msg.chat.id, "<a href=\"https://i.ytimg.com/vi/q2l06PW6Uts/maxresdefault.jpg/\">LE TIGRI SOFFRONOOOOH!</a>", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(trigger10) === 0)
        bot.sendMessage(msg.chat.id, "SEI BELLABONA?");
    if (msg.text.toString().toLowerCase().indexOf(trigger11) === 0)
        bot.sendMessage(msg.chat.id, "Dire 'salute' quando si STERNUTA è buona educazione, ma in alcuni casi, come nella 2IE, disturba la lezione, quindi non si dice, PENA... L'INFERNOOOOOOH! CI SIAMO CAPITIIIIH?");
    if (msg.text.toString().toLowerCase().indexOf(trigger12) === 0)
        bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");
    if (msg.text.toString().toLowerCase().indexOf(trigger13) === 0)
        bot.sendMessage(msg.chat.id, "<a href=\"http://www.paesaggioveneto.it/\">Paesaggio Veneto - Un'idea di Renato Busata</a>", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(trigger14) === 0)
        bot.sendMessage(msg.chat.id, "Le farfalle fanno AAAAAHHHHHH!");
    if (msg.text.toString().toLowerCase().indexOf(trigger15) === 0)
        bot.sendMessage(msg.chat.id, "<b>Renato Busata</b> si laurea in architettura presso l'Istituto Universitario di Architettura di Venezia nel 1983. Dal 1989 è docente di disegno presso istituti e licei padovani. Tra le varie pubblicazioni si segnalano 'Testimonianze storiche e artistiche', edito dal Comune di Rubano; 'Piccolo manuale per affrontare un progetto di architettura' di Gangemi Editore, con l'introduzione di Franco Purini e Luigi Monetti; 'Architetture tra Roma e Milano nel secondo dopoguerra', Ed. Libreria Progetto. Nel 2006 è dottore di ricerca in Composizione architettonica presso l'Università IUAV di Venezia.", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(trigger16) === 0)
        bot.sendMessage(msg.chat.id, "DUEEEEEEEEEE!");
    if (msg.text.toString().toLowerCase().indexOf(trigger18) === 0)
        bot.sendMessage(msg.chat.id, "VAI VIAAAAAAAAH!");
    if (msg.text.toString().indexOf(trigger19) === 0)
        bot.sendMessage(msg.chat.id, 'BusiAudio - Seleziona la pagina', opts);
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
        bot.sendMessage(msg.chat.id, "<a href=\"https://t1.ea.ltmcdn.com/it/images/5/2/4/img_il_cane_procione_come_animale_domestico_1425_paso_0_600.jpg/\">I CANI PROCIONI SOFFRONOOOOH!</a>", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(trigger35) === 0)
        bot.sendMessage(msg.chat.id, "<a href=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Mink_coat_lunaraine.jpg/275px-Mink_coat_lunaraine.jpg/\">NON COMPRATE I CAPPOTTI CON LE PELLICCIE CHE VI PORTATE DIETRO LA SOFFERENZA DEGLI ANIMALIIIIIH!</a>", { parse_mode: "HTML" });
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
        bot.sendMessage(msg.chat.id, "<b>Lista foto del Busi</b>\nTigre, Cane procione, Pelliccia, Oh no, Non sono parallele, Busecs, Busecs2, Triggered", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(trigger46) === 0)
        bot.sendMessage(msg.chat.id, "<a href=\"http://deaddrop.ftp.sh/wrQSmPlj55IH.jpg/\">Oh no, non sono parallele...</a>", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(trigger47) === 0)
        bot.sendMessage(msg.chat.id, "<a href=\"http://deaddrop.ftp.sh/YJa8N__BT0E4.jpg/\">NON SONO PARALLELEEEEEEEEH!</a>", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(trigger48) === 0)
        if (msg.text.toString().toLowerCase().indexOf(trigger49) === 0)
            bot.sendMessage(msg.chat.id, "<a href=\"http://deaddrop.ftp.sh/NagriUpAqytQ.jpg/\">BUONGIORNOH!</a>", { parse_mode: "HTML" });
        else
            bot.sendMessage(msg.chat.id, "<a href=\"http://deaddrop.ftp.sh/K5wZ-5klUlCz.jpg/\">DUEEEEH!</a>", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(trigger50) === 0)
        bot.sendMessage(msg.chat.id, "<a href=\"http://deaddrop.ftp.sh/E_FJlFM2gc0a.jpg/\">NON SI SPRECA LA CARTAAAAAH!</a>", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(trigger51) === 0)
        if (msg.text.toString().toLowerCase().indexOf(trigger52) === 0)
            bot.sendMessage(msg.chat.id, "CHI È STO QUA? HO SENTITO UN CAGNOLINO PRECEDUTO DA QUALCOS'ALTROOOH!");
        else
            bot.sendMessage(msg.chat.id, "AH IO DEVO FARE LE INDAGINI, SÌ PERCHÉ LA GENTE BESTEMMIAAAAH!");
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
        bot.sendMessage(msg.chat.id, "L'ALUNNO STRACCIA, DISTRUGGE, FA A PEZZETTI LA TAVOLA DI DISEGNOOOH!\nTI VA DI LUSSO MERJA, DI SOLITO PER QUESTE COSE METTO NOTA SUL REGISTROOOOOOH!");
    if (msg.text.toString().toLowerCase().indexOf(trigger62) === 0)
        bot.sendMessage(msg.chat.id, businfo_text, { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(trigger63) === 0)
        bot.sendMessage(msg.chat.id, "EEH TI ARRANGI NON È POSSIBILE CHE DEVO SEMPRE SPIEGARE LE STESSE COSEEEH!");
    if (msg.text.toString().toLowerCase().indexOf(trigger64) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/nwVgAgxNtgUC.mp3");
    if (msg.text.toString().toLowerCase().indexOf(trigger65) === 0)
        bot.sendMessage(msg.chat.id, "<a href=\"https://it-it.facebook.com/pages/biz/community/Animalismo-a-scuola-169759173228670/\">ANDATE A VEDERE I MIEI POST SU ANIMALISMO A SCUOLA CHE VI INTERROGOOOOH!</a>", { parse_mode: "HTML" });
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
    if (msg.text.toString().toLowerCase().indexOf(trigger89) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/iOTQpRkYkDsB.mp3");
    if (msg.text.toString().toLowerCase().indexOf(trigger90) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/9p0Z10a9-MO4.mp3");
    if (msg.text.toString().toLowerCase().indexOf(trigger91) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/ScdPvRncuuBJ.mp3");
    if (msg.text.toString().toLowerCase().indexOf(trigger92) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/Ju5ru3hcX48y.mp3");
    if (msg.text.toString().toLowerCase().indexOf(trigger93) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/xX0PXKeHbZ_2.mp3");
    if (msg.text.toString().toLowerCase().indexOf(trigger94) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/ef7lyZ_R4v8q.mp3");
    if (msg.text.toString().toLowerCase().indexOf(trigger95) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/NQqAasiOd5QJ.mp3");
    if (msg.text.toString().toLowerCase().indexOf(trigger96) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/9vlhOmgwt3t4.mp3");
    if (msg.text.toString().toLowerCase().indexOf(trigger97) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/9HgttDKhk5kc.mp3");
    if (msg.text.toString().toLowerCase().indexOf(trigger98) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/Z631CgcvNgqb.mp3");
});

//Risposta alla pressione di un pulsante su BusiAudio
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    let text;

    //Lista audio pagina 1
    if (action === '1') {
        text = 'BusiAudio - Pagina 1\nAutoCAD, Brutto sto qua, Busata è un sapiente, Busirena, Compassione, Due, Gomma, Hai capito, Busi16, Insolente, Nirvana lento, Nirvana, Norvegia, Ti caccio via, Violenza privata, Palazzo, Facebook, Cosmo, Orco, Orco2';
    }

    //Lista audio pagina 2
    if (action === '2') {
        text = "BusiAudio - Pagina 2\nChe schifo, BusiAcuto, Marchesin, Viva la rivoluzione, Bassi, Benvegnù, Cacciato via, Guerra, Marchesin vai via, Carta stracciata, Mi avete stufato, Vedovato traffica, Terrapiattisti, Orari, Povero Guerra, Moro, Macchine, Falasco, Busi bestemmia, Merja fa andare Busi all'inferno";
    }

    //Lista audio pagina 3
    if (action === '3') {
        text = "BusiAudio - Pagina 3\nDevo finire la tavola, Denti, Colpa di Guerra, Vedovato, Ti tieni il 2, Mister Fantastico, Governo, Il taglio di Guerra, Busi va all'inferno, Soddisfa il Busi, Andate via, Merja ha le mani giù, Busi è un po' tardo, Guerra a 90, Koreani mangiacani, Ledda studia chimica, Sfoglia il quaderno, Stare al mondo, Basta battere, Si diventa deficienti";
    }

    //Lista audio pagina 4
    if (action === '4') {
        text = "BusiAudio - Pagina 4\nMetto 2 subito, Porta la cartellina";
    }

    //Visualizzazione dei pulsanti anche dopo l'attivazione
    var opts = {
        chat_id: msg.chat.id,
        message_id: msg.message_id,
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Pagina 1', callback_data: '1' }],
                [{ text: 'Pagina 2', callback_data: '2' }],
                [{ text: 'Pagina 3', callback_data: '3' }],
                [{ text: 'Pagina 4', callback_data: '4' }]
            ]
        }
    };

    //Modifica del messaggio per visualizzare la lista di audio
    bot.editMessageText(text, opts);
});
//Fine del codice