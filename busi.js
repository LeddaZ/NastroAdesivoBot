/*
Il Busata by @LeddaZ
Scritto in Node.js con https://github.com/yagop/node-telegram-bot-api
*/


// Moduli npm richiesti
var Bot = require("node-telegram-bot-api");
let bot;
var request = require("request");
var dotenv = require('dotenv').config();

// Lettura della token del bot da .env
var token = process.env.TOKEN;

// Impostazione webhook per heroku
if (process.env.NODE_ENV === 'production') {
    bot = new Bot(token);
    bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
    bot = new Bot(token, { polling: true });
}

// Dichiarazione del bot
module.exports = bot;

// Trigger
var t1 = "loddo";
var t2 = "buongiorno";
var t3 = "non ho lo scotch";
var t4 = "popopopo";
var t7 = "merja";
var t8 = "tigre";
var t10 = "chi sei";
var t11 = "salute";
var t12 = "punto z";
var t14 = "farfalle";
var t16 = "non ho la tavola";
var t17 = "due";
var t18 = "ma non ho fatto niente";
var t20 = "autocad";
var t21 = "brutto sto qua";
var t22 = "busata è un sapiente";
var t23 = "busirena";
var t24 = "compassione";
var t25 = "gomma";
var t26 = "hai capito";
var t27 = "busi16";
var t28 = "insolente";
var t29 = "nirvana lento";
var t30 = "nirvana";
var t31 = "norvegia";
var t32 = "ti caccio via";
var t33 = "violenza privata";
var t34 = "cane procione";
var t35 = "pelliccia";
var t36 = "palazzo";
var t37 = "facebook";
var t38 = "cosmo";
var t39 = "orco2";
var t40 = "orco";
var t41 = "che schifo";
var t42 = "busiacuto";
var t43 = "marchesin";
var t44 = "viva la rivoluzione";
var t46 = "oh no";
var t47 = "non sono parallele";
var t48 = "busecs";
var t49 = "busecs2";
var t50 = "triggered";
var t51 = "dio";
var t52 = "dio can";
var t53 = "bassi";
var t54 = "benvegn";
var t55 = "cacciato via";
var t56 = "guerra";
var t57 = "marchesin vai via";
var t58 = "carta stracciata";
var t59 = "mi avete stufato";
var t60 = "vedovato traffica";
var t61 = "straccia la carta";
var t63 = "non ho capito";
var t64 = "orari"
var t65 = "animalismo a scuola";
var t66 = "sofferenza";
var t70 = "terrapiattisti";
var t71 = "povero guerra";
var t72 = "moro";
var t73 = "macchine";
var t74 = "falasco";
var t75 = "busi bestemmia";
var t76 = "merja fa andare busi all'inferno";
var t77 = "devo finire la tavola";
var t78 = "denti";
var t79 = "colpa di guerra";
var t80 = "vedovato";
var t81 = "ti tieni il 2";
var t82 = "mister fantastico";
var t83 = "governo";
var t84 = "il taglio di guerra";
var t85 = "busi va all'inferno";
var t86 = "soddisfa il busi";
var t87 = "andate via";
var t88 = "merja ha le mani gi";
var t89 = "busi è un po' tardo";
var t90 = "guerra a 90";
var t91 = "koreani mangiacani";
var t92 = "ledda studia chimica";
var t93 = "sfoglia il quaderno";
var t94 = "stare al mondo";
var t95 = "basta battere";
var t96 = "si diventa deficienti";
var t97 = "metto 2 subito";
var t98 = "porta la cartellina";
var t99 = "liliana segre";
var t100 = "merja bocciato";
var t101 = "vedovato è un poeta";
var t102 = "busata perde tutto";
var t103 = "ciuccia il t";
var t104 = "il filo";
var t105 = "previo terrorismo";
var t107 = "busi è perfido";
var t108 = "orco can";
var t109 = "calma assoluta";
var t110 = "rivoluzionario";
var t111 = "120 tavole";
var t112 = "cattivo";
var t113 = "busasci";
var t115 = "paperette";
var t117 = "busicasa";
var t118 = "ferragosto";
var t119 = "telecamera";
var t120 = "tigri stecchite";
var t121 = "ventiquattrore";
var t122 = "via";
var t123 = "voti";
var t124 = "nota";
var t125 = "titoli";
var t126 = "madonna";
var t127 = "ges";
var t128 = "prospettiva";
var t129 = "foglia";
var t130 = "collina";
var t131 = "quanto manca";
var t132 = "calci";
var t133 = "luce";

// Lettura della versione del bot da package.json
var pjson = require('./package.json');
var ver = pjson.version;

/*
Lettura della data della versione (data in cui package.json è stato
modificato per l'ultima volta)
*/
var fs = require('fs');
var stats = fs.statSync("package.json");
var mtime = stats.mtime;
// Formato della data (g/m/a)
var d = {
    day: 'numeric'
};
var m = {
    month: 'numeric'
};
var y = {
    year: 'numeric'
};
// Creazione della stringa con la data
var data = mtime.toLocaleDateString('it-IT', d) + "/" + mtime.toLocaleDateString('it-IT', m) + "/" + mtime.toLocaleDateString('it-IT', y);

// Testo di /businfo e /start
var start = "<b>NastroAdesivoBot</b>\nVersione <code>" + ver + "</code> del " + data + "\nDigita /busitrigger per la lista di trigger e comandi\n<a href=\"https://github.com/LeddaZ/NastroAdesivoBot/\">Codice sorgente del bot</a> - <a href=\"https://github.com/LeddaZ/NastroAdesivoBot/blob/master/extra/note.md\">Note di rilascio</a>\nIspirato al mitico <b>Renato Busata</b> e creato da @LeddaZ"


// Codice del bot
bot.on("message", (msg) => {

    // Risposte ai trigger
    if (msg.text.toString().toLowerCase().indexOf(t1) === 0)
        bot.sendMessage(msg.chat.id, "LODDOOOOOOOOOO!");

    if (msg.text.toString().toLowerCase().indexOf(t2) === 0)
        bot.sendMessage(msg.chat.id, "BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!");

    if (msg.text.toString().toLowerCase().indexOf(t3) === 0)
        bot.sendMessage(msg.chat.id, "AAAH NON HA LO SCOTCH! E IO METTO DUE E NOTA SUL REGISTROOOOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(t4) === 0)
        bot.sendMessage(msg.chat.id, "MERJA VAI FUORI DALLA PORTAAAAAH!");

    if (msg.text.toString().toLowerCase().indexOf(t7) === 0)
        if (msg.text.toString().toLowerCase().indexOf(t100) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/xYqnRB_VmHcP.mp3");
        else
            bot.sendMessage(msg.chat.id, "CHI È QUESTO? AH È GUERAAAAAAH!");

    if (msg.text.toString().toLowerCase().indexOf(t8) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/dhwt3sdqh0yi.jpg", {
            caption: "LE TIGRI SOFFRONOOOH!"
        });

    if (msg.text.toString().toLowerCase().indexOf(t10) === 0)
        bot.sendMessage(msg.chat.id, "SEI BELLABONA?");

    if (msg.text.toString().toLowerCase().indexOf(t11) === 0)
        bot.sendMessage(msg.chat.id, "Dire 'salute' quando si st<b>E</b>rnuta è buona educazione, ma in alcuni casi, come in 2IE, disturba la lezione, quindi non si dice, pena... L'INFERNOOOOOOH! CI SIAMO CAPITIIIIH?", {
            parse_mode: "HTML"
        });

    if (msg.text.toString().toLowerCase().indexOf(t12) === 0)
        bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(t14) === 0)
        bot.sendMessage(msg.chat.id, "Le farfalle fanno AAAAAHHHHHH!");

    if (msg.text.toString().toLowerCase().indexOf(t16) === 0)
        bot.sendMessage(msg.chat.id, "DUEEEEEEEEEE!");

    if (msg.text.toString().toLowerCase().indexOf(t18) === 0)
        bot.sendMessage(msg.chat.id, "VAI VIAAAAAAAAH!");

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
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/w3re5eCSKAZH.jpg", {
            caption: "I CANI PROCIONI SOFFRONOOOOH!"
        });

    if (msg.text.toString().toLowerCase().indexOf(t35) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/bGhGBE9Lphly.jpg", {
            caption: "NON COMPRATE I CAPPOTTI CON LE PELLICCIE CHE VI PORTATE DIETRO LA SOFFERENZA DEGLI ANIMALIIIIIH!"
        });

    if (msg.text.toString().toLowerCase().indexOf(t36) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/bNUb7iOEMkMn.mp3");

    if (msg.text.toString().toLowerCase().indexOf(t37) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/082QoWMMz_Ow.mp3");

    if (msg.text.toString().toLowerCase().indexOf(t38) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/0GA2Xeg9sRd5.mp3");

    if (msg.text.toString().toLowerCase().indexOf(t40) === 0)
        if (msg.text.toString().toLowerCase().indexOf(t39) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/90d2gas3dwQa.mp3");
        else if (msg.text.toString().toLowerCase().indexOf(t108) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/TaVCIJF-hx8K.mp3");
        else
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

    if (msg.text.toString().toLowerCase().indexOf(t46) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/OrMKeQznAg7I.jpg");

    if (msg.text.toString().toLowerCase().indexOf(t47) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/Te-eVs1x7Heu.jpg", {
            caption: "NON SONO PARALLELEEEEEEEEH!"
        });

    if (msg.text.toString().toLowerCase().indexOf(t48) === 0)
        if (msg.text.toString().toLowerCase().indexOf(t49) === 0)
            bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/iOhBd72rorCk.jpg", {
                caption: "BUONGIORNOH!"
            });
        else
            bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/9EWnUFVLww8J.jpg", {
                caption: "DUEEEEH!"
            });

    if (msg.text.toString().toLowerCase().indexOf(t50) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/fsE3xvStWuDi.jpg", {
            caption: "NON SI SPRECA LA CARTAAAAAH!"
        });

    if (msg.text.toString().toLowerCase().indexOf(t51) === 0 || msg.text.toString().toLowerCase().indexOf(t126) === 0 || msg.text.toString().toLowerCase().indexOf(t127) === 0)
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
        if (msg.text.toString().toLowerCase().indexOf(t90) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/9p0Z10a9-MO4.mp3")
        else
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
        bot.sendMessage(msg.chat.id, "<a href=\"https://it-it.facebook.com/pages/biz/community/Animalismo-a-scuola-169759173228670/\">ANDATE A VEDERE I MIEI POST SU ANIMALISMO A SCUOLA SU FEISBUC CHE VI INTEROGOOOOH!</a>", {
            parse_mode: "HTML"
        });

    if (msg.text.toString().toLowerCase().indexOf(t66) === 0)
        bot.sendMessage(msg.chat.id, "NON COMPRATE I CAPPOTTI CON LE PELLICCE DI MURMANSKI, PERCHÉ VI PORTATE DIETRO LA SOFFERENZA DEGLI ANIMALI MALTRATTATI DAI CINESIIIIH!");

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
        bot.sendMessage(msg.chat.id, "SECONDO ME LA LETTERA DI LILIANA SEGRE È INSULSA MA L'INTERVISTA HA UNA POTENZA INCREDIBILE, QUINDI ASCOLTATELA SU RAI PLAY CHE VI INTEROGOOOOH!!!");

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

    if (msg.text.toString().toLowerCase().indexOf(t109) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/bwjA4pNQtn_D.mp3");

    if (msg.text.toString().toLowerCase().indexOf(t110) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/XPcgiFJ63me6.mp3");

    if (msg.text.toString().toLowerCase().indexOf(t111) === 0)
        bot.sendMessage(msg.chat.id, "EH UNA VOLTA FACEVAMO 120 TAVOLE ALL'ANNOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(t112) === 0)
        bot.sendMessage(msg.chat.id, "IL BUSATA È CATTIVOOOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(t113) === 0)
        bot.sendMessage(msg.chat.id, "<code>|||||||||||||||\n|||||||||||||||\nDUEDUEDUEDU||||\nEDUEDUEDUED||||\n|||||||||||||||\n|||||||||||||||\n||||UEDUEDUEDUE\n||||DUEDUEDUEDU\n|||||||||||||||\n|||||||||||||||</code>", {
            parse_mode: "HTML"
        });

    if (msg.text.toString().toLowerCase().indexOf(t115) === 0)
        bot.sendMessage(msg.chat.id, "OH! LE PAPERETTEEEH! AH LEDDA DOVREMO ISCRIVERLO A QUALCHE ASSOCIAZIONE, LUI CI TIENE A QUESTE COSEEEH!");

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

    if (msg.text.toString().toLowerCase().indexOf(t128) === 0)
        bot.sendMessage(msg.chat.id, "ALLORA, PER LA PROSPETTIVA SI FANNO I BINARI DEL TRENOOH... POI SI FA LA STAZIONE E L'ALBERELLOHHHHHH! E LE RETTE SI DEVONO INCONTRARE ALL'INFINITO, CI SIAMO CAPITIIIIIIIH?!");

    if (msg.text.toString().toLowerCase().indexOf(t129) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/To-GMSxabH0g.mp3");

    if (msg.text.toString().toLowerCase().indexOf(t130) === 0)
        bot.sendMessage(msg.chat.id, "ALBERELLOOOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(t131) === 0)
        bot.sendMessage(msg.chat.id, "MANCANO CINQUE MINUTI, METTERE VIAAAAH! PULIRE I TAVOLI CHE ARRIVA UN'ALTRA CLASSEEEEEEEEH!");

    if (msg.text.toString().toLowerCase().indexOf(t132) === 0)
        bot.sendMessage(msg.chat.id, "QUA SI È SPENTO TUTTOOH! SÌ PERCHÉ IL BUSATA SCALCIA, ED È COLPA VOSTRA CHE MI FATE ANDARE ALL'INFERNOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(t133) === 0)
        bot.sendMessage(msg.chat.id, "SPOSTATI CHE NON PASSA LA LUCEEEH!");

});


// Codice di /start e /businfo
bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, start, {
        parse_mode: "HTML"
    });

});

bot.onText(/\/businfo/, (msg) => {

    bot.sendMessage(msg.chat.id, start, {
        parse_mode: "HTML"
    });

});


// Codice di /busitrigger
bot.onText(/\/busitrigger/, (msg) => {

    bot.sendMessage(msg.chat.id, "<b>Trigger del Busi</b>\n120 tavole, Animalismo a scuola, Buongiorno, Busascii, Calci, Cattivo, Chi sei?, Collina, Farfalle, Liliana Segre, Loddo, Luce, Ma non ho fatto niente, Merjaaa, Non ho capito, Non ho la tavola, Non ho lo scotch, Nota, Orario, Paperette, Popopopo, Prospettiva, Punto Z, Qualsiasi bestemmia, Quanto manca?, Salute, Sofferenza, Straccia la carta, Voti\n\n<b>Comandi del Busi</b>\n/start - Avvia il bot\n/busiaudio - Visualizza la lista di audio del Busi\n/busifoto - Visualizza la lista di foto del Busi\n/businfo - Visualizza versione e autore del bot\n/busitrigger - Visualizza la lista di trigger e comandi\n/bustats - Visualizza statistiche sul bot\n/nota - Genera una nota del Busi\n/consegna - Simula la consegna di una tavola. Chi non ce l'ha si becca DUE!\n/trovabusi - Mostra alcuni link riguardanti il Busi", {
        parse_mode: "HTML"
    });

});


// Codice di /biobusi
bot.onText(/\/biobusi/, (msg) => {

    bot.sendMessage(msg.chat.id, "<b>Renato Busata</b> si laurea in architettura presso l'Istituto Universitario di Architettura di Venezia nel 1983. Dal 1989 è docente di disegno presso istituti e licei padovani. Tra le varie pubblicazioni si segnalano 'Testimonianze storiche e artistiche', edito dal Comune di Rubano; 'Piccolo manuale per affrontare un progetto di architettura' di Gangemi Editore, con l'introduzione di Franco Purini e Luigi Monetti; 'Architetture tra Roma e Milano nel secondo dopoguerra', Ed. Libreria Progetto. Nel 2006 è dottore di ricerca in Composizione architettonica presso l'Università IUAV di Venezia.", {
        parse_mode: "HTML"
    });

});


// Codice di /busiaudio
bot.onText(/\/busiaudio/, (msg) => {

    bot.sendMessage(msg.chat.id, "<b>Lista di audio del Busi</b>\nAndate via, AutoCAD, Bassi, Basta battere, Benvegnù, Brutto sto qua, Busata è un sapiente, Busata perde tutto, Busi bestemmia, Busi è perfido, Busi è un po’ tardo, Busi va all’inferno, Busi16, BusiAcuto, Busirena, Cacciato via, Calma assoluta, Carta stracciata, Che schifo, Ciuccia il tè, Colpa di Guerra, Compassione, Cosmo, Denti, Devo finire la tavola, Due, Facebook, Falasco, Ferragosto, Foglia, Gomma, Governo, Guerra, Guerra a 90, Hai capito, Il filo, Il taglio di Guerra, Insolente, Koreani mangiacani, Ledda studia chimica, Macchine, Marchesin, Marchesin vai via, Merja bocciato, Merja fa andare Busi all’inferno, Merja ha le mani giù, Metto 2 subito, Mi avete stufato, Mister Fantastico, Moro, Nirvana, Nirvana lento, Norvegia, Orari, Orco, Orco can, Orco2, Palazzo, Porta la cartellina, Povero Guerra, Previo terrorismo, Rivoluzionario, Sfoglia il quaderno, Si diventa deficienti, Soddisfa il Busi, Stare al mondo, Telecamera, Terrapiattisti, Ti caccio via, Ti tieni il 2, Tigri stecchite, Titoli, Vedovato, Vedovato è un poeta, Vedovato traffica, Ventiquattrore, Via, Violenza privata, Viva la rivoluzione", {
        parse_mode: "HTML"
    });

});


// Codice di /busifoto
bot.onText(/\/busifoto/, (msg) => {

    bot.sendMessage(msg.chat.id, "<b>Lista di foto del Busi</b>\nBusecs, Busecs2, Cane procione, Non sono parallele, Oh no, Pelliccia, Tigre, Triggered", {
        parse_mode: "HTML"
    });

});


// Codice di /trovabusi
bot.onText(/\/trovabusi/, (msg) => {

    bot.sendMessage(msg.chat.id, "<b>Dove trovare il Busi</b>\n<a href=\"https://www.amazon.it/s?i=stripbooks&rh=p_27%3ARenato+Busata&ref=dp_byline_sr_book_1/\">Amazon</a>\n<a href=\"https://it-it.facebook.com/renato.busata/\">Facebook</a>\n<a href=\"https://www.ibs.it/libri/autori/Renato%20Busata/\">IBS</a>\n<a href=\"https://it.linkedin.com/in/renato-busata-1862856b/\">LinkedIn</a>\n<a href=\"https://www.paginebianche.it/padova/renato-busata.aejihcgfii/\">PagineBianche</a>\n<a href=\"https://didattica.unipd.it/off/docente/6B85B690A4276AB18048CD49115FA3CC/\">Università degli Studi di Padova</a>", {
        parse_mode: "HTML"
    });

});


// Codice di /nota
bot.onText(/\/nota/, (msg) => {

    // Numero di note
    var nota = Math.floor(Math.random() * (8 - 1 + 1) + 1)

    // Testo delle note
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

    else if (nota === 7)
        bot.sendMessage(msg.chat.id, msg.from.first_name + " gira per la classe chiedendo il materiale da disegno.");

    else if (nota === 8)
        bot.sendMessage(msg.chat.id, "L'alunno " + msg.from.first_name + " si pulisce i pantaloni.");

});


// Codice di /consegna
bot.onText(/\/consegna/, (msg) => {

    // Numero di tavole
    var tav = Math.floor(Math.random() * (15 - 1 + 1) + 1)

    // Numero di possibili correzioni
    var esito = Math.floor(Math.random() * (5 - 1 + 1) + 1)

    if (esito === 1)
        bot.sendMessage(msg.chat.id, "Allora, questa è la tavola " + tav + "...\nLa tavola non si presenta neanche male... BRUTTO STO QUA! I SEGNI DEVONO ESSERE PIÙ OMOGENEI, POSSIBILE CHE NON L'ABBIATE ANCORA CAPITOOH!? TI METTO SEI E MEZZO RE-GA-LA-TO, CHI È CHE TIENE LA CONTABILITÀ DEI VOTI? SCRIVI BASTA SEIIIH!\nHai mezzi voti?", {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: 'Sì',
                        callback_data: 'si'
                    },
                    {
                        text: 'No',
                        callback_data: 'no'
                    }
                    ]
                ]
            }
        });

    if (esito === 2)
        bot.sendMessage(msg.chat.id, "Allora, questa è la tavola " + tav + "...\nMA NON È POSSIBILE CHE UNA MEDIANA SIA A 17 DA UNA PARTE E A 12 DALL'ALTRA! È TUTTO STORTOOOH! ADESSO VAI AL POSTO E TI BECCHI CINQUEEEH!");

    if (esito === 3)
        bot.sendMessage(msg.chat.id, "Allora, questa è la tavola " + tav + "...\nVE L'HO DETTO MILLE VOLTE, IL CARTIGLIO SI FA DA METÀ FOGLIO, DEVO SEMPRE RIPETERE LE STESSE COSEEEEH! PER STAVOLTA METTIAMO SEI, MA È REGALATOOOH!");

    if (esito === 4)
        bot.sendMessage(msg.chat.id, "Allora, questa è la tavola " + tav + "...\nLa tavola si presenta bene... I segni sono omogenei e non ci sono errori gravi, anche i titoli sono fatti bene... Tutto sommato è una bella tavola, mettiamo sette.");

    if (esito === 5)
        bot.sendMessage(msg.chat.id, "Allora, questa è la tavola " + tav + "...\nCOS'È STO SEGNO ORRIBILE?! VAI AL POSTO E SISTEMALO ALTRIMENTI TI BECCHI TRE E TE LO TIENIIIH!");

});


// Risposta al mezzo voto su /consegna
bot.on('callback_query', function onCallbackQuery(callbackQuery) {

    var action = callbackQuery.data;
    var msg = callbackQuery.message;
    let text;

    // Con mezzo voto
    if (action === 'si') {
        text = 'VAI A PRENDERE LA TAVOLA, NON MI FIDO DI VOI!';
    }

    // Senza mezzo voto
    if (action === 'no') {
        text = "E ALLORA TI TIENI SEI E VAI AL POSTO!";
    }

    // Invio del testo del mezzo voto
    bot.sendMessage(msg.chat.id, text);

});

// Codice di /bustats
bot.onText(/\/bustats/, (msg) => {

    // RAM utilizzata in MB
    var mem = process.memoryUsage().heapUsed / 1024 / 1024;

    // Dimensione index.js in KB
    var fs = require("fs");
    var stats = fs.statSync("busi.js")
    var dim = Math.round(stats["size"] / 1024.0 * 100) / 100

    // Visualizzazione statistiche
    bot.sendMessage(msg.chat.id, "<b>Statistiche del Busi</b>\n<b>RAM utilizzata: </b>" + Math.round(mem * 100) / 100 + " MB\n<b>Dimensione del codice (<code>busi.js</code>): </b>" + dim + " KB\n", {
        parse_mode: "HTML"
    });

});

/*
Fine del codice

R. B. & L. L.
*/