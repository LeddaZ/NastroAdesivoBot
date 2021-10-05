/*
Il Busata by @LeddaZ
Scritto in Node.js con https://github.com/yagop/node-telegram-bot-api
*/

// Moduli npm richiesti
const Bot = require("node-telegram-bot-api");
let bot;
const request = require("request");
const dotenv = require('dotenv').config();
const { exec } = require("child_process");
const fs = require('fs');

// Lettura della token del bot da .env
const token = process.env.TOKEN;

// Dichiarazione del bot
bot = new Bot(token, { polling: true });
module.exports = bot;

// Trigger
var trigger = ["loddo", "buongiorno", "non ho lo scotch", "popopopo", "merja", "merja bocciato", "tigre", "chi sei", "salute",
               "punto z", "farfalle", "non ho la tavola", "due", "ma non ho fatto niente", "autocad", "brutto sto qua",
               "busata è un sapiente", "busirena", "compassione", "gomma", "hai capito", "busi16", "insolente", "nirvana lento",
               "nirvana", "norvegia", "ti caccio via", "violenza privata", "cane procione", "pelliccia", "palazzo", "facebook",
               "cosmo", "orco", "orco2", "orco can", "che schifo", "busiacuto", "marchesin", "marchesin vai via",
               "viva la rivoluzione", "oh no", "non sono parallele", "busecs", "busecs2", "triggered", "dio", "dio can", "bassi",
               "benvegn", "cacciato via", "madonna", "ges", "guerra", "guerra a 90", "carta stracciata", "mi avete stufato",
               "straccia la carta", "non ho capito", "orari", "animalismo a scuola", "sofferenza", "terrapiattisti",
               "povero guerra", "moro", "macchine", "falasco", "busi bestemmia", "merja fa andare busi all'inferno",
               "devo finire la tavola", "denti", "colpa di guerra", "vedovato", "vedovato traffica", "vedovato è un poeta",
               "ti tieni il 2", "mister fantastico", "governo", "il taglio di guerra", "busi va all'inferno", "soddisfa il busi",
               "andate via", "merja ha le mani gi", "busi è un po' tardo", "koreani mangiacani", "ledda studia chimica",
               "sfoglia il quaderno", "stare al mondo", "basta battere", "si diventa deficienti", "metto 2 subito",
               "porta la cartellina", "liliana segre", "busata perde tutto", "ciuccia il t", "il filo", "previo terrorismo",
               "busi è perfido", "calma assoluta", "rivoluzionario", "120 tavole", "cattivo", "busasci", "paperette", "ferragosto",
               "telecamera", "tigri stecchite", "ventiquattrore", "via", "voti", "nota", "titoli", "prospettiva", "foglia", "collina", "quanto manca", "calci", "luce"];

// Lettura della versione del bot da package.json
const pjson = require('./package.json');
var ver = pjson.version;

/*
Lettura della data della versione (data in cui package.json è stato
modificato per l'ultima volta)
*/
const stats = fs.statSync("package.json");
var mtime = stats.mtime;

// Formato della data (g/m/a)
var g = { day: 'numeric' };
var m = { month: 'numeric' };
var a = { year: 'numeric' };

// Creazione della stringa con la data
var data = mtime.toLocaleDateString('it-IT', g) + "/" + mtime.toLocaleDateString('it-IT', m) + "/" + mtime.toLocaleDateString('it-IT', a);

// Testo di /businfo e /start
var start = "<b>NastroAdesivoBot</b>\nVersione <code>" + ver + "</code> del " + data + "\nDigita /busitrigger per la lista di trigger e comandi\n<a href=\"https://github.com/LeddaZ/NastroAdesivoBot/\">Codice sorgente</a> - <a href=\"https://github.com/LeddaZ/NastroAdesivoBot/blob/master/extra/changelog.md\">Changelog</a>\nIspirato al mitico <b>Renato Busata</b> e creato da @LeddaZ"

// neofetch --stdout
let nfout;
function nf() {
    exec("neofetch --stdout --cpu_temp C --disable title underline", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        nfout = stdout;
    });
}
/* Eseguo all'avvio del bot altrimenti la prima volta che si invia
 * /bustats viene fuori undefined */
nf();

// Codice del bot
bot.on("message", (msg) => {

    // Risposte ai trigger
    if (msg.text.toString().toLowerCase().indexOf(trigger[0]) === 0)
        bot.sendMessage(msg.chat.id, "LODDOOOOOOOOOO!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[1]) === 0)
        bot.sendMessage(msg.chat.id, "BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[2]) === 0)
        bot.sendMessage(msg.chat.id, "AAAH NON HA LO SCOTCH! E IO METTO DUE E NOTA SUL REGISTROOOOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[3]) === 0)
        bot.sendMessage(msg.chat.id, "MERJA VAI FUORI DALLA PORTAAAAAH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[4]) === 0)
        if (msg.text.toString().toLowerCase().indexOf(trigger[5]) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/xYqnRB_VmHcP.mp3");
        else
            bot.sendMessage(msg.chat.id, "CHI È QUESTO? AH È GUERAAAAAAH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[6]) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/dhwt3sdqh0yi.jpg", {
            caption: "LE TIGRI SOFFRONOOOH!"
        });

    if (msg.text.toString().toLowerCase().indexOf(trigger[7]) === 0)
        bot.sendMessage(msg.chat.id, "SEI BELLABONA?");

    if (msg.text.toString().toLowerCase().indexOf(trigger[8]) === 0)
        bot.sendMessage(msg.chat.id, "Dire 'salute' quando si st<b>E</b>rnuta è buona educazione, ma in alcuni casi, come in 2IE, disturba la lezione, quindi non si dice, pena... L'INFERNOOOOOOH! CI SIAMO CAPITIIIIH?", { parse_mode: "HTML" });

    if (msg.text.toString().toLowerCase().indexOf(trigger[9]) === 0)
        bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[10]) === 0)
        bot.sendMessage(msg.chat.id, "Le farfalle fanno AAAAAHHHHHH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[11]) === 0)
        bot.sendMessage(msg.chat.id, "DUEEEEEEEEEE!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[12]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/iMEJ6vF4IHh5.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[13]) === 0)
        bot.sendMessage(msg.chat.id, "VAI VIAAAAAAAAH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[14]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/CujnZBJRaRS9.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[15]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/ieWe74fWX_mI.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[16]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/CtKUN2Ennh95.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[17]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/_fdSsKsjKAyW.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[18]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/zXV_OyRnOoef.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[19]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/ntHniD7G8_4y.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[20]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/J4JKLnhTSP_M.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[21]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/pfMF_fKstdo0.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[22]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/d0JkpQhlhpYe.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[23]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/i2XwCaBHsCTj.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[24]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/ZVTUvo1ylD9l.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[25]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/LfJFmpMuCu2W.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[26]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/JpOZ2bW3i30n.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[27]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/EZj0Kk3pzC34.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[28]) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/w3re5eCSKAZH.jpg", {
            caption: "I CANI PROCIONI SOFFRONOOOOH!"
        });

    if (msg.text.toString().toLowerCase().indexOf(trigger[29]) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/bGhGBE9Lphly.jpg", {
            caption: "NON COMPRATE I CAPPOTTI CON LE PELLICCIE CHE VI PORTATE DIETRO LA SOFFERENZA DEGLI ANIMALIIIIIH!"
        });

    if (msg.text.toString().toLowerCase().indexOf(trigger[30]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/bNUb7iOEMkMn.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[31]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/082QoWMMz_Ow.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[32]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/0GA2Xeg9sRd5.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[33]) === 0)
        if (msg.text.toString().toLowerCase().indexOf(trigger[34]) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/90d2gas3dwQa.mp3");
        else if (msg.text.toString().toLowerCase().indexOf(trigger[35]) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/TaVCIJF-hx8K.mp3");
        else
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/EcF4bCUdfWiL.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[36]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/qIdbEkxljQHX.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[37]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/SVMEfdg7yV2V.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[38]) === 0)
        if (msg.text.toString().toLowerCase().indexOf(trigger[39]) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/v2FGaTXnhYoA.mp3");
        else
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/t2a9IJtcvqWD.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[40]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/UWhCnzcJps7h.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[41]) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/OrMKeQznAg7I.jpg");

    if (msg.text.toString().toLowerCase().indexOf(trigger[42]) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/Te-eVs1x7Heu.jpg", {
            caption: "NON SONO PARALLELEEEEEEEEH!"
        });

    if (msg.text.toString().toLowerCase().indexOf(trigger[43]) === 0)
        if (msg.text.toString().toLowerCase().indexOf(trigger[44]) === 0)
            bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/iOhBd72rorCk.jpg", {
                caption: "BUONGIORNOH!"
            });
        else
            bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/9EWnUFVLww8J.jpg", {
                caption: "DUEEEEH!"
            });

    if (msg.text.toString().toLowerCase().indexOf(trigger[45]) === 0)
        bot.sendPhoto(msg.chat.id, "http://deaddrop.ftp.sh/fsE3xvStWuDi.jpg", {
            caption: "NON SI SPRECA LA CARTAAAAAH!"
        });

    if (msg.text.toString().toLowerCase().indexOf(trigger[46]) === 0 || msg.text.toString().toLowerCase().indexOf(trigger[47]) === 0 || msg.text.toString().toLowerCase().indexOf(trigger[48]) === 0)
        if (msg.text.toString().toLowerCase().indexOf(trigger[49]) === 0)
            bot.sendMessage(msg.chat.id, "CHI È STO QUA? HO SENTITO UN CAGNOLINO PRECEDUTO DA QUALCOS'ALTROOOH!");
        else
            bot.sendMessage(msg.chat.id, "AH IO DEVO FARE LE INDAGINI, SÌ PERCHÉ LA GENTE BESTEMMIAAAAH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[50]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/Z5FNub-4rnEC.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[51]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/BkD_psaw6nUb.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[52]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/_8BZYN9rxHtc.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[53]) === 0)
        if (msg.text.toString().toLowerCase().indexOf(trigger[54]) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/9p0Z10a9-MO4.mp3")
        else
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/9DJk-rQW1X7x.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[55]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/wUwwPneHVcVT.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[56]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/tgKhWh5aaxM5.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[57]) === 0)
        bot.sendMessage(msg.chat.id, "L'ALUNNO STRACCIA, DISTRUGGE, FA A PEZZETTI LA TAVOLA DI DISEGNOOOH!\nTI VA DI LUSSO MERJA, DI SOLITO PER QUESTE COSE METTO NOTA SUL REGISTROOOOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[58]) === 0)
        bot.sendMessage(msg.chat.id, "EEH TI ARRANGI NON È POSSIBILE CHE DEVO SEMPRE SPIEGARE LE STESSE COSEEEH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[59]) === 0)
        bot.sendMessage(msg.chat.id, "http://deaddrop.ftp.sh/nwVgAgxNtgUC.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[60]) === 0)
        bot.sendMessage(msg.chat.id, "ANDATE A VEDERE I MIEI POST SU ANIMALISMO A SCUOLA SU FEISBUC CHE VI INTEROGOOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[61]) === 0)
        bot.sendMessage(msg.chat.id, "NON COMPRATE I CAPPOTTI CON LE PELLICCE DI MURMANSKI, PERCHÉ VI PORTATE DIETRO LA SOFFERENZA DEGLI ANIMALI MALTRATTATI DAI CINESIIIIH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[62]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/hBCOhFQAAJZk.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[63]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/XeH6ckkMP16w.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[64]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/6W-beHCght8X.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[65]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/U2n5sRgsBmvS.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[66]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/c3-KYyuDk0CE.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[67]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/to6_gflluipH.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[68]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/uVw2PjBpWQr7.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[69]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/BtaXAJcmqD5l.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[70]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/-WMAqO6nrQlS.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[71]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/vSiLVwwsKYdD.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[72]) === 0)
        if (msg.text.toString().toLowerCase().indexOf(trigger[73]) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/rYz_zqeMxbea.mp3");
        else if (msg.text.toString().toLowerCase().indexOf(trigger[74]) === 0)
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/QOMX04E_5Ojz.mp3");
        else
            bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/x68Lmdlf3Tct.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[75]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/jVW5DHcGRCe6.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[76]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/SDvT6rC0ZJqv.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[77]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/GbTgmxUb3tIv.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[78]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/oLe3lUTpyW5n.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[79]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/g9g8eys-t_a-.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[80]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/kO61IBhvI4aY.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[81]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/u-e1QXxaSZHR.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[82]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/3osIzrc1zEj3.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[83]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/iOTQpRkYkDsB.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[84]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/ScdPvRncuuBJ.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[85]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/Ju5ru3hcX48y.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[86]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/xX0PXKeHbZ_2.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[87]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/ef7lyZ_R4v8q.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[88]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/NQqAasiOd5QJ.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[89]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/9vlhOmgwt3t4.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[90]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/9HgttDKhk5kc.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[91]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/Z631CgcvNgqb.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[92]) === 0)
        bot.sendMessage(msg.chat.id, "SECONDO ME LA LETTERA DI LILIANA SEGRE È INSULSA MA L'INTERVISTA HA UNA POTENZA INCREDIBILE, QUINDI ASCOLTATELA SU RAI PLAY CHE VI INTEROGOOOOH!!!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[93]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/MgHib6OXaAd6.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[94]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/AmMZxta5Vcdx.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[95]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/8TOZ8fMLQ3Tc.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[96]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/hYPu-2IQFFqH.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[97]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/wAI8xEGIjEgl.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[98]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/bwjA4pNQtn_D.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[99]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/XPcgiFJ63me6.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[100]) === 0)
        bot.sendMessage(msg.chat.id, "EH UNA VOLTA FACEVAMO 120 TAVOLE ALL'ANNOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[101]) === 0)
        bot.sendMessage(msg.chat.id, "IL BUSATA È CATTIVOOOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[102]) === 0)
        bot.sendMessage(msg.chat.id, "<code>|||||||||||||||\n|||||||||||||||\nDUEDUEDUEDU||||\nEDUEDUEDUED||||\n|||||||||||||||\n|||||||||||||||\n||||UEDUEDUEDUE\n||||DUEDUEDUEDU\n|||||||||||||||\n|||||||||||||||</code>", { parse_mode: "HTML" });

    if (msg.text.toString().toLowerCase().indexOf(trigger[103]) === 0)
        bot.sendMessage(msg.chat.id, "OH! LE PAPERETTEEEH! AH LEDDA DOVREMO ISCRIVERLO A QUALCHE ASSOCIAZIONE, LUI CI TIENE A QUESTE COSEEEH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[104]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/CH1bB95rCFVE.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[105]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/WQol4ymy-2Kg.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[106]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/slHvVa-MuTsg.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[107]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/QTq3QoowANVr.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[108]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/_ygGIX0tgwj7.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[109]) === 0)
        bot.sendMessage(msg.chat.id, "IL PROSSIMO CHE MI CHIEDE QUANDO CAMBIO I VOTI SI BECCA DUE! LI CAMBIERÒ QUANDO SARÀ ORA!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[110]) === 0)
        bot.sendMessage(msg.chat.id, "MERJAAAAA! IO AVANZO UNA NOTA DA TE!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[111]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/Fg1aqSnMOkW0.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[112]) === 0)
        bot.sendMessage(msg.chat.id, "ALLORA, PER LA PROSPETTIVA SI FANNO I BINARI DEL TRENOOH... POI SI FA LA STAZIONE E L'ALBERELLOHHHHHH! E LE RETTE SI DEVONO INCONTRARE ALL'INFINITO, CI SIAMO CAPITIIIIIIIH?!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[113]) === 0)
        bot.sendAudio(msg.chat.id, "http://deaddrop.ftp.sh/To-GMSxabH0g.mp3");

    if (msg.text.toString().toLowerCase().indexOf(trigger[114]) === 0)
        bot.sendMessage(msg.chat.id, "ALBERELLOOOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[115]) === 0)
        bot.sendMessage(msg.chat.id, "MANCANO CINQUE MINUTI, METTERE VIAAAAH! PULIRE I TAVOLI CHE ARRIVA UN'ALTRA CLASSEEEEEEEEH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[116]) === 0)
        bot.sendMessage(msg.chat.id, "QUA SI È SPENTO TUTTOOH! SÌ PERCHÉ IL BUSATA SCALCIA, ED È COLPA VOSTRA CHE MI FATE ANDARE ALL'INFERNOOOH!");

    if (msg.text.toString().toLowerCase().indexOf(trigger[117]) === 0)
        bot.sendMessage(msg.chat.id, "SPOSTATI CHE NON PASSA LA LUCEEEH!");

});

// Codice di /start e /businfo
bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, start, { parse_mode: "HTML" });

});

bot.onText(/\/businfo/, (msg) => {

    bot.sendMessage(msg.chat.id, start, { parse_mode: "HTML" });

});

// Codice di /busitrigger
bot.onText(/\/busitrigger/, (msg) => {

    bot.sendMessage(msg.chat.id, "<b>Trigger del Busi</b>\n120 tavole, Animalismo a scuola, Buongiorno, Busascii, Calci, Cattivo, Chi sei?, Collina, Farfalle, Liliana Segre, Loddo, Luce, Ma non ho fatto niente, Merjaaa, Non ho capito, Non ho la tavola, Non ho lo scotch, Nota, Orario, Paperette, Popopopo, Prospettiva, Punto Z, Qualsiasi bestemmia (non letteralmente), Quanto manca?, Salute, Sofferenza, Straccia la carta, Voti\n\n<b>Comandi del Busi</b>\n/start - Avvia il bot\n/busiaudio - Visualizza la lista di audio del Busi\n/busifoto - Visualizza la lista di foto del Busi\n/businfo - Visualizza versione e autore del bot\n/busitrigger - Visualizza la lista di trigger e comandi\n/bustats - Visualizza statistiche sul bot\n/nota - Genera una nota del Busi\n/consegna - Simula la consegna di una tavola. Chi non ce l'ha si becca DUE!\n/trovabusi - Mostra alcuni link riguardanti il Busi", { parse_mode: "HTML" });

});

// Codice di /biobusi
bot.onText(/\/biobusi/, (msg) => {

    bot.sendMessage(msg.chat.id, "<b>Renato Busata</b> si laurea in architettura presso l'Istituto Universitario di Architettura di Venezia nel 1983. Dal 1989 è docente di disegno presso istituti e licei padovani. Tra le varie pubblicazioni si segnalano 'Testimonianze storiche e artistiche', edito dal Comune di Rubano; 'Piccolo manuale per affrontare un progetto di architettura' di Gangemi Editore, con l'introduzione di Franco Purini e Luigi Monetti; 'Architetture tra Roma e Milano nel secondo dopoguerra', Ed. Libreria Progetto. Nel 2006 è dottore di ricerca in Composizione architettonica presso l'Università IUAV di Venezia.", { parse_mode: "HTML" });

});

// Codice di /busiaudio
bot.onText(/\/busiaudio/, (msg) => {

    bot.sendMessage(msg.chat.id, "<b>Audio del Busata</b>\nSeleziona una pagina", {
        reply_markup: { inline_keyboard: [[
                { text: 'Pagina 1', callback_data: '1' },
                { text: 'Pagina 2', callback_data: '2' },
                { text: 'Pagina 3', callback_data: '3' },
                { text: 'Pagina 4', callback_data: '4' }
            ]]}, parse_mode: "HTML" });

});

// Codice di /busifoto
bot.onText(/\/busifoto/, (msg) => {

    bot.sendMessage(msg.chat.id, "<b>Lista di foto del Busi</b>\nBusecs, Busecs2, Cane procione, Non sono parallele, Oh no, Pelliccia, Tigre, Triggered", { parse_mode: "HTML" });

});

// Codice di /trovabusi
bot.onText(/\/trovabusi/, (msg) => {

    bot.sendMessage(msg.chat.id, "<b>Dove trovare il Busi</b>\n<a href=\"https://www.amazon.it/s?i=stripbooks&rh=p_27%3ARenato+Busata&ref=dp_byline_sr_book_1/\">Amazon</a>\n<a href=\"https://it-it.facebook.com/renato.busata/\">Facebook</a>\n<a href=\"https://www.ibs.it/libri/autori/Renato%20Busata/\">IBS</a>\n<a href=\"https://it.linkedin.com/in/renato-busata-1862856b/\">LinkedIn</a>\n<a href=\"https://www.paginebianche.it/padova/renato-busata.aejihcgfii/\">PagineBianche</a>\n<a href=\"https://didattica.unipd.it/off/docente/6B85B690A4276AB18048CD49115FA3CC/\">Università degli Studi di Padova</a>\n<a href=\"https://it-it.facebook.com/pages/biz/community/Animalismo-a-scuola-169759173228670/\">Animalismo a scuola</a>", { parse_mode: "HTML" });

});

// Codice di /nota
bot.onText(/\/nota/, (msg) => {

    // Numero di note
    var nota = Math.floor(Math.random() * (8 - 1) + 1);

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

// testoEsito dev'essere pubblica se verrà usata al di fuori da questo blocco di codice
var testoEsito = "";
// Codice di /consegna
bot.onText(/\/consegna/, (msg) => {

    // Numero di tavole
    var tav = Math.floor(Math.random() * (15 - 1) + 1);

    // Numero di possibili correzioni
    var esito = Math.floor(Math.random() * (5 - 1) + 1);

    if (esito === 1) {
        testoEsito = "Allora, questa è la tavola " + tav + "...\nLa tavola non si presenta neanche male... BRUTTO STO QUA! I SEGNI DEVONO ESSERE PIÙ OMOGENEI, POSSIBILE CHE NON L'ABBIATE ANCORA CAPITOOH!? TI METTO SEI E MEZZO RE-GA-LA-TO, CHI È CHE TIENE LA CONTABILITÀ DEI VOTI? SCRIVI BASTA SEIIIH!\nHai mezzi voti?"
        bot.sendMessage(msg.chat.id, testoEsito, {
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Sì', callback_data: 'si' },
                    { text: 'No', callback_data: 'no' }
                ]]
            }
        });
    }

    if (esito === 2) {
        testoEsito = "Allora, questa è la tavola " + tav + "...\nMA NON È POSSIBILE CHE UNA MEDIANA SIA A 17 DA UNA PARTE E A 12 DALL'ALTRA! È TUTTO STORTOOOH! ADESSO VAI AL POSTO E TI BECCHI CINQUEEEH!"
        bot.sendMessage(msg.chat.id, testoEsito);
    }

    if (esito === 3) {
        testoEsito = "Allora, questa è la tavola " + tav + "...\nVE L'HO DETTO MILLE VOLTE, IL CARTIGLIO SI FA DA METÀ FOGLIO, DEVO SEMPRE RIPETERE LE STESSE COSEEEEH! PER STAVOLTA METTIAMO SEI, MA È REGALATOOOH!"
        bot.sendMessage(msg.chat.id, testoEsito);
    }

    if (esito === 4) {
        testoEsito = "Allora, questa è la tavola " + tav + "...\nLa tavola si presenta bene... I segni sono omogenei e non ci sono errori gravi, anche i titoli sono fatti bene... Tutto sommato è una bella tavola, mettiamo sette."
        bot.sendMessage(msg.chat.id, testoEsito);
    }

    if (esito === 5) {
        testoEsito = "Allora, questa è la tavola " + tav + "...\nCOS'È STO SEGNO ORRIBILE?! VAI AL POSTO E SISTEMALO ALTRIMENTI TI BECCHI TRE E TE LO TIENIIIH!"
        bot.sendMessage(msg.chat.id, testoEsito);
    }

});

// Risposte ai pulsanti di /consegna e /busiaudio
bot.on('callback_query', function onCallbackQuery(callbackQuery) {

    var action = callbackQuery.data;
    var msg = callbackQuery.message;
    let testoFinale;

    // /consegna
    // Con mezzo voto
    if (action === 'si') {
        testoFinale = 'VAI A PRENDERE LA TAVOLA, NON MI FIDO DI VOI!';
    }

    // Senza mezzo voto
    if (action === 'no') {
        testoFinale = "E ALLORA TI TIENI SEI E VAI AL POSTO!";
    }

    // /busiaudio (20 audio per pagina)
    // Pagina 1
    if (action === '1') {
        testoFinale = "<b>Audio del Busata - Pagina 1</b>\nAndate via, AutoCAD, Bassi, Basta battere, Benvegnù, Brutto sto qua, Busata è un sapiente, Busata perde tutto, Busi bestemmia, Busi è perfido, Busi è un po’ tardo, Busi va all’inferno, Busi16, BusiAcuto, Busirena, Cacciato via, Calma assoluta, Carta stracciata, Che schifo, Ciuccia il tè";
    }

    // Pagina 2
    if (action === '2') {
        testoFinale = "<b>Audio del Busata - Pagina 2</b>\nColpa di Guerra, Compassione, Cosmo, Denti, Devo finire la tavola, Due, Facebook, Falasco, Ferragosto, Foglia, Gomma, Governo, Guerra, Guerra a 90, Hai capito, Il filo, Il taglio di Guerra, Insolente, Koreani mangiacani, Ledda studia chimica";
    }

    // Pagina 3
    if (action === '3') {
        testoFinale = "<b>Audio del Busata - Pagina 3</b>\nMacchine, Marchesin, Marchesin vai via, Merja bocciato, Merja fa andare Busi all’inferno, Merja ha le mani giù, Metto 2 subito, Mi avete stufato, Mister Fantastico, Moro, Nirvana, Nirvana lento, Norvegia, Orari, Orco, Orco can, Orco2, Palazzo, Porta la cartellina, Povero Guerra";
    }

    // Pagina 4
    if (action === '4') {
        testoFinale = "<b>Audio del Busata - Pagina 4</b>\nPrevio terrorismo, Rivoluzionario, Sfoglia il quaderno, Si diventa deficienti, Soddisfa il Busi, Stare al mondo, Telecamera, Terrapiattisti, Ti caccio via, Ti tieni il 2, Tigri stecchite, Titoli, Vedovato, Vedovato è un poeta, Vedovato traffica, Ventiquattrore, Via, Violenza privata, Viva la rivoluzione";
    }

    /* Ri-dichiarazione dei pulsanti per /busiaudio, così possono essere
       mantenuti dopo l'interazione */
    var opzioni = {
        chat_id: msg.chat.id,
        message_id: msg.message_id,
        reply_markup: {
            inline_keyboard: [[
                { text: 'Pagina 1', callback_data: '1' },
                { text: 'Pagina 2', callback_data: '2' },
                { text: 'Pagina 3', callback_data: '3' },
                { text: 'Pagina 4', callback_data: '4' }
            ]]
        },
        parse_mode: "HTML"
    };

    // Invio del risultato (e rimozione dei pulsanti per /consegna)
    if (action === 'si' || action === 'no') {
        bot.editMessageText(testoEsito, { chat_id: msg.chat.id, message_id: msg.message_id }).then(
            bot.sendMessage(msg.chat.id, testoFinale)
        );
    } else {
        bot.editMessageText(testoFinale, opzioni);
    }

});

// Codice di /bustats
bot.onText(/\/bustats/, (msg) => {

    // RAM utilizzata in MB
    var mem = Math.round(process.memoryUsage().heapUsed / Math.pow(1024, 2) * 100) / 100;

    // Tempo di attivita' (h:m:s)
    var uptime = process.uptime();
    var h = Math.floor(uptime / (60*60));
    var m = Math.floor(uptime % (60*60) / 60);
    var s = Math.floor(uptime % 60);
    // Aggiunge lo zero davanti a min e sec se necessario
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    // Dimensione renato.js in KB
    const stats = fs.statSync("renato.js");
    var dim = Math.round(stats.size / 1024 * 100) / 100;

    // neofetch
    nf();

    // Visualizzazione statistiche
    bot.sendMessage(msg.chat.id, "<b>Le BusiStatistiche</b>\nRAM utilizzata: " + mem + " MB\nDimensione del codice (<code>renato.js</code>): " + dim + " KB\nTempo di attività (h:m:s): " + h + ":" + m + ":" + s + "\n\n<b>Il server che tiene in piedi tutto</b>\n" + nfout, { parse_mode: "HTML" });

});

/*

Fine del codice

U n i t e v i  a l  c u l t o  d e l  B u s a t a .

*/
