//Il Busata by @LeddaZ
//Scritto in node.js con https://github.com/yagop/node-telegram-bot-api

//Dichiarazione variabili

//Moduli npm richiesti
const Bot = require("node-telegram-bot-api");
const request = require("request");

//Token del bot
const token = "697036602:AAHwtJbcP7mp-nNzepGJibUUruUOksLOqXY";

//Trigger
const t1 = "loddo";
const t2 = "buongiorno";
const t3 = "non ho lo scotch";
const t4 = "popopopo";
const t5 = "businfo";
const t6 = "busitrigger";
const t7 = "merja";
const t8 = "tigre";
const t10 = "chi sei";
const t11 = "salute";
const t12 = "punto z";
const t13 = "paesaggio veneto";
const t14 = "farfalle";
const t15 = "biobusi";
const t16 = "non ho la tavola";
const t17 = "due";
const t18 = "ma non ho fatto niente";
const t19 = "BusiAudio";
const t20 = "autocad";
const t21 = "brutto sto qua";
const t22 = "busata è un sapiente";
const t23 = "busirena";
const t24 = "compassione";
const t25 = "gomma";
const t26 = "hai capito";
const t27 = "busi16";
const t28 = "insolente";
const t29 = "nirvana lento";
const t30 = "nirvana";
const t31 = "norvegia";
const t32 = "ti caccio via";
const t33 = "violenza privata";
const t34 = "cane procione";
const t35 = "pelliccia";
const t36 = "palazzo";
const t37 = "facebook";
const t38 = "cosmo";
const t39 = "orco2";
const t40 = "orco";
const t41 = "che schifo";
const t42 = "busiacuto";
const t43 = "marchesin";
const t44 = "viva la rivoluzione";
const t45 = "busifoto";
const t46 = "oh no";
const t47 = "non sono parallele";
const t48 = "busecs";
const t49 = "busecs2";
const t50 = "triggered";
const t51 = "dio";
const t52 = "dio can";
const t53 = "bassi";
const t54 = "benvegn";
const t55 = "cacciato via";
const t56 = "guerra";
const t57 = "marchesin vai via";
const t58 = "carta stracciata";
const t59 = "mi avete stufato";
const t60 = "vedovato traffica";
const t61 = "straccia la carta";
const t63 = "non ho capito";
const t64 = "orari"
const t65 = "animalismo a scuola";
const t66 = "cani";
const t70 = "terrapiattisti";
const t71 = "povero guerra";
const t72 = "moro";
const t73 = "macchine";
const t74 = "falasco";
const t75 = "busi bestemmia";
const t76 = "merja fa andare busi all'inferno";
const t77 = "devo finire la tavola";
const t78 = "denti";
const t79 = "colpa di guerra";
const t80 = "vedovato";
const t81 = "ti tieni il 2";
const t82 = "mister fantastico";
const t83 = "governo";
const t84 = "il taglio di guerra";
const t85 = "busi va all'inferno";
const t86 = "soddisfa il busi";
const t87 = "andate via";
const t88 = "merja ha le mani gi";
const t89 = "busi è un po' tardo";
const t90 = "guerra a 90";
const t91 = "koreani mangiacani";
const t92 = "ledda studia chimica";
const t93 = "sfoglia il quaderno";
const t94 = "stare al mondo";
const t95 = "basta battere";
const t96 = "si diventa deficienti";
const t97 = "metto 2 subito";
const t98 = "porta la cartellina";
const t99 = "liliana segre";
const t100 = "merja bocciato";
const t101 = "vedovato è un poeta";
const t102 = "busata perde tutto";
const t103 = "ciuccia il t";
const t104 = "il filo";
const t105 = "previo terrorismo";
const t107 = "busi è perfido"
const t108 = "orco can"
const t109 = "calma assoluta"
const t110 = "rivoluzionario"
const t111 = "120 tavole"
const t112 = "cattivo"
const t113 = "busasci"
const t115 = "paperette"
const t116 = "busiamazon"
const t117 = "busicasa"
const t118 = "ferragosto"
const t119 = "telecamera"
const t120 = "tigri stecchite"
const t121 = "ventiquattrore"
const t122 = "via"
const t123 = "voti"
const t124 = "nota"
const t125 = "titoli"

//Testo di Businfo e /start
const businfo_text = "<b>Il Busata</b> by @LeddaZ\nVersione <code>1.9.1</code> dell'8/6/2019\nDigita <code>BusiTrigger</code> per la lista dei trigger\n<a href=\"https://github.com/LeddaZ/NastroTestBot/\">Codice del bot su GitHub</a>\n120 trigger (33 parole, 3 comandi, 8 foto e 78 audio)";

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
    if (msg.text.toString().toLowerCase().indexOf(t1) === 0)
        bot.sendAudio(msg.chat.id, "LODDOOOOOOOOOO!");
    if (msg.text.toString().toLowerCase().indexOf(t2) === 0)
        bot.sendMessage(msg.chat.id, "BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!");
    if (msg.text.toString().toLowerCase().indexOf(t3) === 0)
        bot.sendMessage(msg.chat.id, "AAAH NON HA LO SCOTCH! E IO METTO DUE E NOTA SUL REGISTROOOOOOH!");
    if (msg.text.toString().toLowerCase().indexOf(t4) === 0)
        bot.sendMessage(msg.chat.id, "MERJAAA VAI FUORI DALLA PORTAAAAAH!");
    if (msg.text.toString().toLowerCase().indexOf(t5) === 0)
        bot.sendMessage(msg.chat.id, businfo_text, { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(t6) === 0)
        bot.sendMessage(msg.chat.id, "<b>Trigger del Busi</b>\nLoddo, Non ho lo scotch, Buongiorno, Businfo, Popopopo, Merjaaa, Chi sei?, Salute, Punto Z, Paesaggio veneto, Farfalle, BioBusi, Non ho la tavola, Ma non ho fatto niente, BusiAudio, BusiFoto, Dio <code>qualsiasi cosa</code>, Straccia la carta, Non ho capito, Orario, Animalismo a scuola, Cani, Liliana Segre, /voto, 120 tavole, Cattivo, Busascii, /nota, Paperette, BusiAmazon, Voti, Nota", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(t7) === 0)
        if (msg.text.toString().toLowerCase().indexOf(t100) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/xYqnRB_VmHcP.mp3");
        else
            bot.sendMessage(msg.chat.id, "CHI È QUESTO? AH È GUERAAAAAAH!");
    if (msg.text.toString().toLowerCase().indexOf(t8) === 0)
        bot.sendPhoto(msg.chat.id, "https://i.ytimg.com/vi/q2l06PW6Uts/maxresdefault.jpg", { caption: "LE TIGRI SOFFRONOOOH!" });
    if (msg.text.toString().toLowerCase().indexOf(t10) === 0)
        bot.sendMessage(msg.chat.id, "SEI BELLABONA?");
    if (msg.text.toString().toLowerCase().indexOf(t11) === 0)
        bot.sendMessage(msg.chat.id, "Dire 'salute' quando si stErnuta è buona educazione, ma in alcuni casi, come in 2IE, disturba la lezione, quindi non si dice, pena... L'INFERNOOOOOOH! CI SIAMO CAPITIIIIH?");
    if (msg.text.toString().toLowerCase().indexOf(t12) === 0)
        bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");
    if (msg.text.toString().toLowerCase().indexOf(t13) === 0)
        bot.sendMessage(msg.chat.id, "<a href=\"http://www.paesaggioveneto.it/\">Paesaggio Veneto - Un'idea di Renato Busata</a>", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(t14) === 0)
        bot.sendMessage(msg.chat.id, "Le farfalle fanno AAAAAHHHHHH!");
    if (msg.text.toString().toLowerCase().indexOf(t15) === 0)
        bot.sendMessage(msg.chat.id, "<b>Renato Busata</b> si laurea in architettura presso l'Istituto Universitario di Architettura di Venezia nel 1983. Dal 1989 è docente di disegno presso istituti e licei padovani. Tra le varie pubblicazioni si segnalano 'Testimonianze storiche e artistiche', edito dal Comune di Rubano; 'Piccolo manuale per affrontare un progetto di architettura' di Gangemi Editore, con l'introduzione di Franco Purini e Luigi Monetti; 'Architetture tra Roma e Milano nel secondo dopoguerra', Ed. Libreria Progetto. Nel 2006 è dottore di ricerca in Composizione architettonica presso l'Università IUAV di Venezia.", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(t16) === 0)
        bot.sendMessage(msg.chat.id, "DUEEEEEEEEEE!");
    if (msg.text.toString().toLowerCase().indexOf(t18) === 0)
        bot.sendMessage(msg.chat.id, "VAI VIAAAAAAAAH!");
    if (msg.text.toString().indexOf(t19) === 0)
        bot.sendMessage(msg.chat.id, 'Lista audio del Busi\nSeleziona la pagina', opts);
    if (msg.text.toString().toLowerCase().indexOf(t20) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/CujnZBJRaRS9.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t21) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/ieWe74fWX_mI.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t22) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/CtKUN2Ennh95.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t23) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/_fdSsKsjKAyW.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t24) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/zXV_OyRnOoef.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t17) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/iMEJ6vF4IHh5.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t25) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/ntHniD7G8_4y.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t26) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/J4JKLnhTSP_M.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t27) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/pfMF_fKstdo0.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t28) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/d0JkpQhlhpYe.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t29) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/i2XwCaBHsCTj.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t30) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/ZVTUvo1ylD9l.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t31) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/LfJFmpMuCu2W.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t32) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/JpOZ2bW3i30n.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t33) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/EZj0Kk3pzC34.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t34) === 0)
        bot.sendPhoto(msg.chat.id, "https://t1.ea.ltmcdn.com/it/images/5/2/4/img_il_cane_procione_come_animale_domestico_1425_paso_0_600.jpg", { caption: "I CANI PROCIONI SOFFRONOOOOH!" });
    if (msg.text.toString().toLowerCase().indexOf(t35) === 0)
        bot.sendPhoto(msg.chat.id, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Mink_coat_lunaraine.jpg/275px-Mink_coat_lunaraine.jpg", { caption: "NON COMPRATE I CAPPOTTI CON LE PELLICCIE CHE VI PORTATE DIETRO LA SOFFERENZA DEGLI ANIMALIIIIIH!" });
    if (msg.text.toString().toLowerCase().indexOf(t36) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/bNUb7iOEMkMn.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t37) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/082QoWMMz_Ow.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t38) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/0GA2Xeg9sRd5.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t39) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/90d2gas3dwQa.mp3");
    if (msg.text.toString().toLowerCase(t40) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/EcF4bCUdfWiL.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t41) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/qIdbEkxljQHX.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t42) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/SVMEfdg7yV2V.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t43) === 0)
        if (msg.text.toString().toLowerCase().indexOf(t57) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/v2FGaTXnhYoA.mp3");
        else
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/t2a9IJtcvqWD.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t44) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/UWhCnzcJps7h.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t45) === 0)
        bot.sendMessage(msg.chat.id, "<b>Lista foto del Busi</b>\nTigre, Cane procione, Pelliccia, Oh no, Non sono parallele, Busecs, Busecs2, Triggered", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(t46) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/wrQSmPlj55IH.jpg", { caption: "Oh no, non sono parallele..." });
    if (msg.text.toString().toLowerCase().indexOf(t47) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/YJa8N__BT0E4.jpg", { caption: "NON SONO PARALLELEEEEEEEEH!" });
    if (msg.text.toString().toLowerCase().indexOf(t48) === 0)
        if (msg.text.toString().toLowerCase().indexOf(t49) === 0)
            bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/NagriUpAqytQ.jpg", { caption: "BUONGIORNOH!" });
        else
            bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/K5wZ-5klUlCz.jpg", { caption: "DUEEEEH!" });
    if (msg.text.toString().toLowerCase().indexOf(t50) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/E_FJlFM2gc0a.jpg", { caption: "NON SI SPRECA LA CARTAAAAAH!" });
    if (msg.text.toString().toLowerCase().indexOf(t51) === 0)
        if (msg.text.toString().toLowerCase().indexOf(t52) === 0)
            bot.sendMessage(msg.chat.id, "CHI È STO QUA? HO SENTITO UN CAGNOLINO PRECEDUTO DA QUALCOS'ALTROOOH!");
        else
            bot.sendMessage(msg.chat.id, "AH IO DEVO FARE LE INDAGINI, SÌ PERCHÉ LA GENTE BESTEMMIAAAAH!");
    if (msg.text.toString().toLowerCase().indexOf(t53) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/Z5FNub-4rnEC.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t54) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/BkD_psaw6nUb.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t55) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/_8BZYN9rxHtc.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t56) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/9DJk-rQW1X7x.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t58) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/wUwwPneHVcVT.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t59) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/tgKhWh5aaxM5.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t60) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/rYz_zqeMxbea.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t61) === 0)
        bot.sendMessage(msg.chat.id, "L'ALUNNO STRACCIA, DISTRUGGE, FA A PEZZETTI LA TAVOLA DI DISEGNOOOH!\nTI VA DI LUSSO MERJA, DI SOLITO PER QUESTE COSE METTO NOTA SUL REGISTROOOOOOH!");
    if (msg.text.toString().toLowerCase().indexOf(t63) === 0)
        bot.sendMessage(msg.chat.id, "EEH TI ARRANGI NON È POSSIBILE CHE DEVO SEMPRE SPIEGARE LE STESSE COSEEEH!");
    if (msg.text.toString().toLowerCase().indexOf(t64) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/nwVgAgxNtgUC.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t65) === 0)
        bot.sendMessage(msg.chat.id, "<a href=\"https://it-it.facebook.com/pages/biz/community/Animalismo-a-scuola-169759173228670/\">ANDATE A VEDERE I MIEI POST SU ANIMALISMO A SCUOLA CHE VI INTEROGOOOOH!</a>", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(t66) === 0)
        bot.sendMessage(msg.chat.id, "NON COMPRATE I CAPPOTTI CON LE PELLICCE DI MURMANSKI, PERCHÉ I CINESI FANNO SOFFRIRE I CANIIIIH!");
    if (msg.text.toString().toLowerCase().indexOf(t70) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/hBCOhFQAAJZk.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t71) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/XeH6ckkMP16w.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t72) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/6W-beHCght8X.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t73) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/U2n5sRgsBmvS.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t74) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/c3-KYyuDk0CE.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t75) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/to6_gflluipH.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t76) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/uVw2PjBpWQr7.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t77) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/BtaXAJcmqD5l.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t78) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/-WMAqO6nrQlS.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t79) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/vSiLVwwsKYdD.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t80) === 0)
        if (msg.text.toString().toLowerCase().indexOf(t60) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/rYz_zqeMxbea.mp3");
        else if (msg.text.toString().toLowerCase().indexOf(t101) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/QOMX04E_5Ojz.mp3");
        else
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/x68Lmdlf3Tct.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t81) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/jVW5DHcGRCe6.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t82) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/SDvT6rC0ZJqv.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t83) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/GbTgmxUb3tIv.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t84) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/oLe3lUTpyW5n.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t85) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/g9g8eys-t_a-.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t86) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/kO61IBhvI4aY.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t87) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/u-e1QXxaSZHR.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t88) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/3osIzrc1zEj3.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t89) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/iOTQpRkYkDsB.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t90) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/9p0Z10a9-MO4.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t91) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/ScdPvRncuuBJ.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t92) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/Ju5ru3hcX48y.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t93) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/xX0PXKeHbZ_2.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t94) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/ef7lyZ_R4v8q.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t95) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/NQqAasiOd5QJ.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t96) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/9vlhOmgwt3t4.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t97) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/9HgttDKhk5kc.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t98) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/Z631CgcvNgqb.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t99) === 0)
        bot.sendMessage(msg.chat.id, "LA LETTERA DI LILIANA SEGRE È INSULSA MA L'INTERVISTA HA UNA POTENZA INCREDIBILE, QUINDI ASCOLTATELA SU RAI PLAY CHE VI INTEROGOOOOH!!!");
    if (msg.text.toString().toLowerCase().indexOf(t102) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/MgHib6OXaAd6.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t103) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/AmMZxta5Vcdx.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t104) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/8TOZ8fMLQ3Tc.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t105) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/hYPu-2IQFFqH.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t107) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/wAI8xEGIjEgl.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t108) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/TaVCIJF-hx8K.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t109) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/bwjA4pNQtn_D.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t110) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/XPcgiFJ63me6.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t111) === 0)
        bot.sendMessage(msg.chat.id, "EH UNA VOLTA FACEVAMO 120 TAVOLE ALL'ANNOOOH!");
    if (msg.text.toString().toLowerCase().indexOf(t112) === 0)
        bot.sendMessage(msg.chat.id, "IL BUSATA È CATTIVOOOOOH!");
    if (msg.text.toString().toLowerCase().indexOf(t113) === 0)
        bot.sendMessage(msg.chat.id, "<code>|||||||||||||||\n|||||||||||||||\nDUEDUEDUEDU||||\nEDUEDUEDUED||||\n|||||||||||||||\n|||||||||||||||\n||||UEDUEDUEDUE\n||||DUEDUEDUEDU\n|||||||||||||||\n|||||||||||||||</code>", { parse_mode: "HTML" });
    if (msg.text.toString().toLowerCase().indexOf(t115) === 0)
        bot.sendMessage(msg.chat.id, "OH! LE PAPERETTEEEH! AH LEDDA DOVREMO ISCRIVERLO A QUALCHE ASSOCIAZIONE, LUI CI TIENE A QUESTE COSEEEH!");
    if (msg.text.toString().toLowerCase().indexOf(t116) === 0)
        bot.sendMessage(msg.chat.id, "https://www.amazon.it/s?i=stripbooks&rh=p_27%3ARenato+Busata&ref=dp_byline_sr_book_1");
    if (msg.text.toString().toLowerCase().indexOf(t117) === 0)
        bot.sendLocation(msg.chat.id, 45.4244592, 11.8302266) & bot.sendMessage(msg.chat.id, "SE VENITE A TROVARE IL BUSATA VI CACCIA VIAAAAH!");
    if (msg.text.toString().toLowerCase().indexOf(t118) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/CH1bB95rCFVE.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t119) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/WQol4ymy-2Kg.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t120) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/slHvVa-MuTsg.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t121) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/QTq3QoowANVr.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t122) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/_ygGIX0tgwj7.mp3");
    if (msg.text.toString().toLowerCase().indexOf(t123) === 0)
        bot.sendMessage(msg.chat.id, "IL PROSSIMO CHE MI CHIEDE QUANDO CAMBIO I VOTI SI BECCA DUE! LI CAMBIERÒ QUANDO SARÀ ORA!");
    if (msg.text.toString().toLowerCase().indexOf(t124) === 0)
        bot.sendMessage(msg.chat.id, "MERJAAAAA! IO AVANZO UNA NOTA DA TE!");
    if (msg.text.toString().toLowerCase().indexOf(t125) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/Fg1aqSnMOkW0.mp3");
});

//Visualizzazione di Businfo con /start
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, businfo_text, { parse_mode: "HTML" });
});

//Codice di /voto
bot.onText(/\/voto/, (msg) => {
    var voto = Math.floor(Math.random() * (10 - 0 + 1) + 0)
    if (voto === 1)
        bot.sendMessage(msg.chat.id, "QUESTO NON HA FATTO NIENTEEEEH! TI METTO UNOOO!");
    else if (voto === 0)
        bot.sendMessage(msg.chat.id, "SIGNORI LA TAVOLA ERA IN SCADENZA UN MESE FA, CHI NON CE L'HA LA PROSSIMA VOLTA SI BECCA DUE! CI SIAMO CAPITIIIIH?!");
    else if (voto === 2)
        bot.sendMessage(msg.chat.id, "NO HO QUASI FINITO ADESSO TI METTO DUEEEH!");
    else if (voto === 3)
        bot.sendMessage(msg.chat.id, "QUESTI FANNO TROPPO CASINO, ADESSO TI MANDO AL POSTO E TI BECCHI TRE! RINGRAZIA I TUOI COMPAGNI!");
    else if (voto === 4)
        bot.sendMessage(msg.chat.id, "QUA È TUTTO SBAGLIATOOH! AH MI SONO STUFATO DI RIPETERE SEMPRE LE STESSE COSE, ADESSO TI BECCHI QUATTRO E TE LO TIENI! SEMPRE COSÌ CON VOI!");
    else if (voto === 5)
        bot.sendMessage(msg.chat.id, "QUESTA LINEA È STORTAAAH! FAI I SEGNI PIÙ OMOGENEIIIIH! CINQUEEEH!");
    else if (voto === 6)
        bot.sendMessage(msg.chat.id, "AH GUARDA TI METTO SEI REGALATOOOH! CHI È CHE TIENE LA CONTABILITÀ DEI VOTI? SCRIVI BASTA SEIIIH!");
    else if (voto === 7)
        bot.sendMessage(msg.chat.id, "LA TAVOLA SI PRESENTA ABBASTANZA BENE... I DISEGNI SONO GIUSTI... SETTEEH!");
    else if (voto === 8)
        bot.sendMessage(msg.chat.id, "OTTO? IMPOSSIBILE, IL BUSATA NON METTE VOTI COSÌ ALTI, FATE SEMPRE DUECENTO ERRORI VOI!");
    else if (voto === 9)
        bot.sendMessage(msg.chat.id, "ADESSO TI BECCHI QUATTRO! NON TIRATEMI FUORI LA STORIA 'EH MA AGLI ALTRI NON L'HA DETTO', FATE SEMPRE UN SACCO DI ERRORI E AL BUSATA NE SFUGGE QUALCUNO!");
    else if (voto === 10)
        bot.sendMessage(msg.chat.id, "QUESTO DISEGNO È SBAGLIATO DAL FONDOOOH! METTO CINQUE INVECE DI TRE PERCHÉ CI HAI LAVORATO!");
});

//Codice di /nota
bot.onText(/\/nota/, (msg) => {
    var nota = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    if (nota === 1)
        bot.sendMessage(msg.chat.id, msg.from.first_name + ", in laboratorio, sfoglia appunti di chimica invece di disegnare.");
    else if (nota === 2)
        bot.sendMessage(msg.chat.id, msg.from.first_name + " in laboratorio non si applica.");
    else if (nota === 3)
        bot.sendMessage(msg.chat.id, msg.from.first_name + ", per suscitare l'ilarità dei compagni, straccia la tavola di disegno dando colpi con la testa.");
    else if (nota === 4)
        bot.sendMessage(msg.chat.id, msg.from.first_name + " in laboratorio non disegna e non fa nulla.");
    else if (nota === 5)
        bot.sendMessage(msg.chat.id, msg.from.first_name + " svuota lo zaino per pulirlo, poi chiede di avere il materiale per pulire il banco.");
    else if (nota === 6)
        bot.sendMessage(msg.chat.id, msg.from.first_name + " disturba continuamente la lezione chiaccherando.");
});

//Risposta alla pressione di un pulsante su BusiAudio
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    let text;

    //Lista audio pagina 1
    if (action === '1') {
        text = 'Lista audio del Busi\nPagina 1\nAutoCAD, Brutto sto qua, Busata è un sapiente, Busirena, Compassione, Due, Gomma, Hai capito, Busi16, Insolente, Nirvana lento, Nirvana, Norvegia, Ti caccio via, Violenza privata, Palazzo, Facebook, Cosmo, Orco, Orco2';
    }

    //Lista audio pagina 2
    if (action === '2') {
        text = "Lista audio del Busi\nPagina 2\nChe schifo, BusiAcuto, Marchesin, Viva la rivoluzione, Bassi, Benvegnù, Cacciato via, Guerra, Marchesin vai via, Carta stracciata, Mi avete stufato, Vedovato traffica, Terrapiattisti, Orari, Povero Guerra, Moro, Macchine, Falasco, Busi bestemmia, Merja fa andare Busi all'inferno";
    }

    //Lista audio pagina 3
    if (action === '3') {
        text = "Lista audio del Busi\nPagina 3\nDevo finire la tavola, Denti, Colpa di Guerra, Vedovato, Ti tieni il 2, Mister Fantastico, Governo, Il taglio di Guerra, Busi va all'inferno, Soddisfa il Busi, Andate via, Merja ha le mani giù, Busi è un po' tardo, Guerra a 90, Koreani mangiacani, Ledda studia chimica, Sfoglia il quaderno, Stare al mondo, Basta battere, Si diventa deficienti";
    }

    //Lista audio pagina 4
    if (action === '4') {
        text = "Lista audio del Busi\nPagina 4\nMetto 2 subito, Porta la cartellina, Merja bocciato, Vedovato è un poeta, Busata perde tutto, Ciuccia il tè, Il filo, Previo terrorismo, Busi è perfido, Orco can, Calma assoluta, Rivoluzionario, Ferragosto, Telecamera, Tigri stecchite, Ventiquattrore, Via, Titoli";
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

//R. B.
