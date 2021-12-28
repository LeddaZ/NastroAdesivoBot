#
# Il Busata by @LeddaZ
# Scritto in Python con https://github.com/python-telegram-bot/python-telegram-bot
# 

# Importazione dei moduli necessari
import dateparser
from dotenv import load_dotenv
import github3
import math
import os
from process_uptime import getuptime
import psutil
import random
import telegram
from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import CallbackQueryHandler, CommandHandler, Filters, MessageHandler, Updater

# Carica il file .env per leggere le variabili (token in questo caso)
load_dotenv()

# Login a GitHub per prendere i dati della repository
gh = github3.login(token = os.getenv('GITHUB_TOKEN'))
repository = gh.repository(owner = 'LeddaZ', repository = 'NastroAdesivoBot')

# Imposta l'ultima versione del bot dall'ultimo tag pubblicato
for tag in repository.tags():
    assert isinstance(tag, github3.repos.tag.RepoTag)
    ver = '{}'.format(tag.name)[1:]
    break

# Data dell'ultimo commit nel branch release, ossia la data
# dell'ultima versione
lastCommitHash = repository.branch("release").latest_sha()
lastCommitDate = repository.git_commit(lastCommitHash).committer['date']
date = dateparser.parse(lastCommitDate)
dateStr = str(date.day) + "/" + str(date.month) + "/" + str(date.year)


# Trigger
trigger = ["loddo", "buongiorno", "non ho lo scotch", "popopopo", "merja", "merja bocciato", "tigre", "chi sei", "salute",
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
           "telecamera", "tigri stecchite", "ventiquattrore", "via", "voti", "nota", "titoli", "prospettiva", "foglia",
           "collina", "quanto manca", "calci", "luce"]

def message(update, context):
    if (update.message.text.lower().startswith(trigger[0])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "LODDOOOOOOOOOO!")

    if (update.message.text.lower().startswith(trigger[1])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!")

    if (update.message.text.lower().startswith(trigger[2])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "AAAH NON HA LO SCOTCH! E IO METTO DUE E NOTA SUL REGISTROOOOOOH!")

    if (update.message.text.lower().startswith(trigger[3])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "MERJA VAI FUORI DALLA PORTAAAAAH!")

    if (update.message.text.lower().startswith(trigger[4])):
        if (update.message.text.lower().startswith(trigger[5])):
            context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/xYqnRB_VmHcP.mp3")
        else:
            context.bot.send_message(chat_id = update.effective_chat.id, text = "CHI È QUESTO? AH È GUERAAAAAAH!")

    if (update.message.text.lower().startswith(trigger[6])):
        context.bot.send_photo(chat_id = update.effective_chat.id, photo = "http://deaddrop.ftp.sh/dhwt3sdqh0yi.jpg", caption = "LE TIGRI SOFFRONOOOH!")

    if (update.message.text.lower().startswith(trigger[7])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "SEI BELLABONA?")

    if (update.message.text.lower().startswith(trigger[8])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "Dire 'salute' quando si st<b>E</b>rnuta è buona educazione, ma in alcuni casi, come in 2IE, disturba la lezione, quindi non si dice, pena... L'INFERNOOOOOOH! CI SIAMO CAPITIIIIH?", parse_mode = telegram.ParseMode.HTML)

    if (update.message.text.lower().startswith(trigger[9])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "IL PUNTO Z È ALL'INFINITOOOH!")

    if (update.message.text.lower().startswith(trigger[10])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "Le farfalle fanno AAAAAHHHHHH!")

    if (update.message.text.lower().startswith(trigger[11])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "DUEEEEEEEEEE!")

    if (update.message.text.lower().startswith(trigger[12])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/iMEJ6vF4IHh5.mp3")

    if (update.message.text.lower().startswith(trigger[13])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "VAI VIAAAAAAAAH!")

    if (update.message.text.lower().startswith(trigger[14])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/CujnZBJRaRS9.mp3")

    if (update.message.text.lower().startswith(trigger[15])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/ieWe74fWX_mI.mp3")

    if (update.message.text.lower().startswith(trigger[16])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/CtKUN2Ennh95.mp3")

    if (update.message.text.lower().startswith(trigger[17])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/_fdSsKsjKAyW.mp3")

    if (update.message.text.lower().startswith(trigger[18])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/zXV_OyRnOoef.mp3")

    if (update.message.text.lower().startswith(trigger[19])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/ntHniD7G8_4y.mp3")

    if (update.message.text.lower().startswith(trigger[20])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/J4JKLnhTSP_M.mp3")

    if (update.message.text.lower().startswith(trigger[21])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/pfMF_fKstdo0.mp3")

    if (update.message.text.lower().startswith(trigger[22])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/d0JkpQhlhpYe.mp3")

    if (update.message.text.lower().startswith(trigger[23])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/i2XwCaBHsCTj.mp3")

    if (update.message.text.lower().startswith(trigger[24])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/ZVTUvo1ylD9l.mp3")

    if (update.message.text.lower().startswith(trigger[25])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/LfJFmpMuCu2W.mp3")

    if (update.message.text.lower().startswith(trigger[26])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/JpOZ2bW3i30n.mp3")

    if (update.message.text.lower().startswith(trigger[27])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/EZj0Kk3pzC34.mp3")

    if (update.message.text.lower().startswith(trigger[28])):
        context.bot.send_photo(chat_id = update.effective_chat.id, photo = "http://deaddrop.ftp.sh/w3re5eCSKAZH.jpg", caption = "I CANI PROCIONI SOFFRONOOOOH!")

    if (update.message.text.lower().startswith(trigger[29])):
        context.bot.send_photo(chat_id = update.effective_chat.id, photo = "http://deaddrop.ftp.sh/bGhGBE9Lphly.jpg", caption = "NON COMPRATE I CAPPOTTI CON LE PELLICCIE CHE VI PORTATE DIETRO LA SOFFERENZA DEGLI ANIMALIIIIIH!")

    if (update.message.text.lower().startswith(trigger[30])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/bNUb7iOEMkMn.mp3")

    if (update.message.text.lower().startswith(trigger[31])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/082QoWMMz_Ow.mp3")

    if (update.message.text.lower().startswith(trigger[32])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/0GA2Xeg9sRd5.mp3")

    if (update.message.text.lower().startswith(trigger[33])):
        if (update.message.text.lower().startswith(trigger[34])):
            context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/90d2gas3dwQa.mp3")
        elif (update.message.text.lower().startswith(trigger[35])):
            context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/TaVCIJF-hx8K.mp3")
        else:
            context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/EcF4bCUdfWiL.mp3")

    if (update.message.text.lower().startswith(trigger[36])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/qIdbEkxljQHX.mp3")

    if (update.message.text.lower().startswith(trigger[37])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/SVMEfdg7yV2V.mp3")

    if (update.message.text.lower().startswith(trigger[38])):
        if (update.message.text.lower().startswith(trigger[39])):
            context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/v2FGaTXnhYoA.mp3")
        else:
            context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/t2a9IJtcvqWD.mp3")

    if (update.message.text.lower().startswith(trigger[40])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/UWhCnzcJps7h.mp3")

    if (update.message.text.lower().startswith(trigger[41])):
        context.bot.send_photo(chat_id = update.effective_chat.id, photo = "http://deaddrop.ftp.sh/OrMKeQznAg7I.jpg")

    if (update.message.text.lower().startswith(trigger[42])):
        context.bot.send_photo(chat_id = update.effective_chat.id, photo = "http://deaddrop.ftp.sh/Te-eVs1x7Heu.jpg", caption = "NON SONO PARALLELEEEEEEEEH!")

    if (update.message.text.lower().startswith(trigger[43])):
        if (update.message.text.lower().startswith(trigger[44])):
            context.bot.send_photo(chat_id = update.effective_chat.id, photo = "http://deaddrop.ftp.sh/iOhBd72rorCk.jpg", caption = "BUONGIORNOH!")
        else:
            context.bot.send_photo(chat_id = update.effective_chat.id, photo = "http://deaddrop.ftp.sh/9EWnUFVLww8J.jpg", caption = "DUEEEEH!")

    if (update.message.text.lower().startswith(trigger[45])):
        context.bot.send_photo(chat_id = update.effective_chat.id, photo = "http://deaddrop.ftp.sh/fsE3xvStWuDi.jpg", caption = "NON SI SPRECA LA CARTAAAAAH!")

    if (update.message.text.lower().startswith(trigger[46]) or update.message.text.lower().startswith(trigger[47]) or update.message.text.lower().startswith(trigger[48])):
        if (update.message.text.lower().startswith(trigger[49])):
            context.bot.send_message(chat_id = update.effective_chat.id, text = "CHI È STO QUA? HO SENTITO UN CAGNOLINO PRECEDUTO DA QUALCOS'ALTROOOH!")
        else:
            context.bot.send_message(chat_id = update.effective_chat.id, text = "AH IO DEVO FARE LE INDAGINI, SÌ PERCHÉ LA GENTE BESTEMMIAAAAH!")

    if (update.message.text.lower().startswith(trigger[50])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/Z5FNub-4rnEC.mp3")

    if (update.message.text.lower().startswith(trigger[51])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/BkD_psaw6nUb.mp3")

    if (update.message.text.lower().startswith(trigger[52])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/_8BZYN9rxHtc.mp3")

    if (update.message.text.lower().startswith(trigger[53])):
        if (update.message.text.lower().startswith(trigger[54])):
            context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/9p0Z10a9-MO4.mp3")
        else:
            context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/9DJk-rQW1X7x.mp3")

    if (update.message.text.lower().startswith(trigger[55])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/wUwwPneHVcVT.mp3")

    if (update.message.text.lower().startswith(trigger[56])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/tgKhWh5aaxM5.mp3")

    if (update.message.text.lower().startswith(trigger[57])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "L'ALUNNO STRACCIA, DISTRUGGE, FA A PEZZETTI LA TAVOLA DI DISEGNOOOH!\nTI VA DI LUSSO MERJA, DI SOLITO PER QUESTE COSE METTO NOTA SUL REGISTROOOOOOH!")

    if (update.message.text.lower().startswith(trigger[58])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "EEH TI ARRANGI NON È POSSIBILE CHE DEVO SEMPRE SPIEGARE LE STESSE COSEEEH!")

    if (update.message.text.lower().startswith(trigger[59])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "http://deaddrop.ftp.sh/nwVgAgxNtgUC.mp3")

    if (update.message.text.lower().startswith(trigger[60])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "ANDATE A VEDERE I MIEI POST SU ANIMALISMO A SCUOLA SU FEISBUC CHE VI INTEROGOOOOH!")

    if (update.message.text.lower().startswith(trigger[61])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "NON COMPRATE I CAPPOTTI CON LE PELLICCE DI MURMANSKI, PERCHÉ VI PORTATE DIETRO LA SOFFERENZA DEGLI ANIMALI MALTRATTATI DAI CINESIIIIH!")

    if (update.message.text.lower().startswith(trigger[62])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/hBCOhFQAAJZk.mp3")

    if (update.message.text.lower().startswith(trigger[63])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/XeH6ckkMP16w.mp3")

    if (update.message.text.lower().startswith(trigger[64])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/6W-beHCght8X.mp3")

    if (update.message.text.lower().startswith(trigger[65])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/U2n5sRgsBmvS.mp3")

    if (update.message.text.lower().startswith(trigger[66])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/c3-KYyuDk0CE.mp3")

    if (update.message.text.lower().startswith(trigger[67])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/to6_gflluipH.mp3")

    if (update.message.text.lower().startswith(trigger[68])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/uVw2PjBpWQr7.mp3")

    if (update.message.text.lower().startswith(trigger[69])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/BtaXAJcmqD5l.mp3")

    if (update.message.text.lower().startswith(trigger[70])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/-WMAqO6nrQlS.mp3")

    if (update.message.text.lower().startswith(trigger[71])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/vSiLVwwsKYdD.mp3")

    if (update.message.text.lower().startswith(trigger[72])):
        if (update.message.text.lower().startswith(trigger[73])):
            context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/rYz_zqeMxbea.mp3")
        elif (update.message.text.lower().startswith(trigger[74])):
            context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/QOMX04E_5Ojz.mp3")
        else:
            context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/x68Lmdlf3Tct.mp3")

    if (update.message.text.lower().startswith(trigger[75])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/jVW5DHcGRCe6.mp3")

    if (update.message.text.lower().startswith(trigger[76])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/SDvT6rC0ZJqv.mp3")

    if (update.message.text.lower().startswith(trigger[77])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/GbTgmxUb3tIv.mp3")

    if (update.message.text.lower().startswith(trigger[78])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/oLe3lUTpyW5n.mp3")

    if (update.message.text.lower().startswith(trigger[79])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/g9g8eys-t_a-.mp3")

    if (update.message.text.lower().startswith(trigger[80])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/kO61IBhvI4aY.mp3")

    if (update.message.text.lower().startswith(trigger[81])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/u-e1QXxaSZHR.mp3")

    if (update.message.text.lower().startswith(trigger[82])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/3osIzrc1zEj3.mp3")

    if (update.message.text.lower().startswith(trigger[83])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/iOTQpRkYkDsB.mp3")

    if (update.message.text.lower().startswith(trigger[84])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/ScdPvRncuuBJ.mp3")

    if (update.message.text.lower().startswith(trigger[85])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/Ju5ru3hcX48y.mp3")

    if (update.message.text.lower().startswith(trigger[86])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/xX0PXKeHbZ_2.mp3")

    if (update.message.text.lower().startswith(trigger[87])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/ef7lyZ_R4v8q.mp3")

    if (update.message.text.lower().startswith(trigger[88])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/NQqAasiOd5QJ.mp3")

    if (update.message.text.lower().startswith(trigger[89])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/9vlhOmgwt3t4.mp3")

    if (update.message.text.lower().startswith(trigger[90])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/9HgttDKhk5kc.mp3")

    if (update.message.text.lower().startswith(trigger[91])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/Z631CgcvNgqb.mp3")

    if (update.message.text.lower().startswith(trigger[92])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "SECONDO ME LA LETTERA DI LILIANA SEGRE È INSULSA MA L'INTERVISTA HA UNA POTENZA INCREDIBILE, QUINDI ASCOLTATELA SU RAI PLAY CHE VI INTEROGOOOOH!!!")

    if (update.message.text.lower().startswith(trigger[93])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/MgHib6OXaAd6.mp3")

    if (update.message.text.lower().startswith(trigger[94])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/AmMZxta5Vcdx.mp3")

    if (update.message.text.lower().startswith(trigger[95])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/8TOZ8fMLQ3Tc.mp3")

    if (update.message.text.lower().startswith(trigger[96])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/hYPu-2IQFFqH.mp3")

    if (update.message.text.lower().startswith(trigger[97])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/wAI8xEGIjEgl.mp3")

    if (update.message.text.lower().startswith(trigger[98])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/bwjA4pNQtn_D.mp3")

    if (update.message.text.lower().startswith(trigger[99])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/XPcgiFJ63me6.mp3")

    if (update.message.text.lower().startswith(trigger[100])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "EH UNA VOLTA FACEVAMO 120 TAVOLE ALL'ANNOOOH!")

    if (update.message.text.lower().startswith(trigger[101])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "IL BUSATA È CATTIVOOOOOH!")

    if (update.message.text.lower().startswith(trigger[102])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "<code>|||||||||||||||\n|||||||||||||||\nDUEDUEDUEDU||||\nEDUEDUEDUED||||\n|||||||||||||||\n|||||||||||||||\n||||UEDUEDUEDUE\n||||DUEDUEDUEDU\n|||||||||||||||\n|||||||||||||||</code>", parse_mode = telegram.ParseMode.HTML)

    if (update.message.text.lower().startswith(trigger[103])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "OH! LE PAPERETTEEEH! AH LEDDA DOVREMO ISCRIVERLO A QUALCHE ASSOCIAZIONE, LUI CI TIENE A QUESTE COSEEEH!")

    if (update.message.text.lower().startswith(trigger[104])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/CH1bB95rCFVE.mp3")

    if (update.message.text.lower().startswith(trigger[105])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/WQol4ymy-2Kg.mp3")

    if (update.message.text.lower().startswith(trigger[106])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/slHvVa-MuTsg.mp3")

    if (update.message.text.lower().startswith(trigger[107])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/QTq3QoowANVr.mp3")

    if (update.message.text.lower().startswith(trigger[108])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/_ygGIX0tgwj7.mp3")

    if (update.message.text.lower().startswith(trigger[109])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "IL PROSSIMO CHE MI CHIEDE QUANDO CAMBIO I VOTI SI BECCA DUE! LI CAMBIERÒ QUANDO SARÀ ORA!")

    if (update.message.text.lower().startswith(trigger[110])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "MERJAAAAA! IO AVANZO UNA NOTA DA TE!")

    if (update.message.text.lower().startswith(trigger[111])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/Fg1aqSnMOkW0.mp3")

    if (update.message.text.lower().startswith(trigger[112])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "ALLORA, PER LA PROSPETTIVA SI FANNO I BINARI DEL TRENOOH... POI SI FA LA STAZIONE E L'ALBERELLOHHHHHH! E LE RETTE SI DEVONO INCONTRARE ALL'INFINITO, CI SIAMO CAPITIIIIIIIH?!")

    if (update.message.text.lower().startswith(trigger[113])):
        context.bot.send_audio(chat_id = update.effective_chat.id, audio = "http://deaddrop.ftp.sh/To-GMSxabH0g.mp3")

    if (update.message.text.lower().startswith(trigger[114])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "ALBERELLOOOOOH!")

    if (update.message.text.lower().startswith(trigger[115])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "MANCANO CINQUE MINUTI, METTERE VIAAAAH! PULIRE I TAVOLI CHE ARRIVA UN'ALTRA CLASSEEEEEEEEH!")

    if (update.message.text.lower().startswith(trigger[116])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "QUA SI È SPENTO TUTTOOH! SÌ PERCHÉ IL BUSATA SCALCIA, ED È COLPA VOSTRA CHE MI FATE ANDARE ALL'INFERNOOOH!")

    if (update.message.text.lower().startswith(trigger[117])):
        context.bot.send_message(chat_id = update.effective_chat.id, text = "SPOSTATI CHE NON PASSA LA LUCEEEH!")


# /busitrigger
def busitrigger(update, context):
    context.bot.send_message(chat_id = update.effective_chat.id, text = "<b>Trigger del Busi</b>\n120 tavole, Animalismo a scuola, Buongiorno, Busascii, Calci, Cattivo, Chi sei?, Collina, Farfalle, Liliana Segre, Loddo, Luce, Ma non ho fatto niente, Merjaaa, Non ho capito, Non ho la tavola, Non ho lo scotch, Nota, Orario, Paperette, Popopopo, Prospettiva, Punto Z, Qualsiasi bestemmia (non letteralmente), Quanto manca?, Salute, Sofferenza, Straccia la carta, Voti\n\n<b>Comandi del Busi</b>\n/start - Avvia il bot\n/busiaudio - Visualizza la lista di audio del Busi\n/busifoto - Visualizza la lista di foto del Busi\n/businfo - Visualizza versione e autore del bot\n/busitrigger - Visualizza la lista di trigger e comandi\n/bustats - Visualizza statistiche sul bot\n/nota - Genera una nota del Busi\n/consegna - Simula la consegna di una tavola. Chi non ce l'ha si becca DUE!\n/trovabusi - Mostra alcuni link riguardanti il Busi", parse_mode = telegram.ParseMode.HTML)


# /businfo e /start
startText = "<b>NastroAdesivoBot</b>\nVersione <code>" + ver + "</code> del " + dateStr + "\nDigita /busitrigger per la lista di trigger e comandi\n<a href=\"https://github.com/LeddaZ/NastroAdesivoBot/\">Codice sorgente</a> - <a href=\"https://github.com/LeddaZ/NastroAdesivoBot/blob/master/extra/changelog.md\">Changelog</a>\nIspirato al mitico <b>Renato Busata</b> e creato da @LeddaZ"

def businfo(update, context):
    context.bot.send_message(chat_id = update.effective_chat.id, text = startText, parse_mode = telegram.ParseMode.HTML)

def start(update, context):
    context.bot.send_message(chat_id = update.effective_chat.id, text = startText, parse_mode = telegram.ParseMode.HTML)


# /biobusi
def biobusi(update, context):
    context.bot.send_message(chat_id = update.effective_chat.id, text = "<b>Renato Busata</b> si laurea in architettura presso l'Istituto Universitario di Architettura di Venezia nel 1983. Dal 1989 è docente di disegno presso istituti e licei padovani. Tra le varie pubblicazioni si segnalano 'Testimonianze storiche e artistiche', edito dal Comune di Rubano; 'Piccolo manuale per affrontare un progetto di architettura' di Gangemi Editore, con l'introduzione di Franco Purini e Luigi Monetti; 'Architetture tra Roma e Milano nel secondo dopoguerra', Ed. Libreria Progetto. Nel 2006 è dottore di ricerca in Composizione architettonica presso l'Università IUAV di Venezia.", parse_mode = telegram.ParseMode.HTML)


# /busiaudio
global pulsanti # I pulsanti sono globali così rimangono dopo l'interazione
def busiaudio(update, context):
    # Pulsanti che appariranno sotto il messaggio
    keyboard = [
        [
            InlineKeyboardButton("Pagina 1", callback_data='1'),
            InlineKeyboardButton("Pagina 2", callback_data='2'),
            InlineKeyboardButton("Pagina 3", callback_data='3'),
            InlineKeyboardButton("Pagina 4", callback_data='4'),
        ],
    ]

    reply_markup = InlineKeyboardMarkup(keyboard)
    global pulsanti
    pulsanti = reply_markup

    update.message.reply_text("<b>Audio del Busata</b>\nSeleziona una pagina", reply_markup=reply_markup, parse_mode = telegram.ParseMode.HTML)


# /consegna
def consegna(update, context):
    nTavole = random.randrange(1, 15)
    nEsito = random.randrange(1, 5)
    match nEsito:
        case 1:
            global esito
            esito = "Allora, questa è la tavola " + str(nTavole) + "...\nLa tavola non si presenta neanche male... BRUTTO STO QUA! I SEGNI DEVONO ESSERE PIÙ OMOGENEI, POSSIBILE CHE NON L'ABBIATE ANCORA CAPITOOH!? TI METTO SEI E MEZZO RE-GA-LA-TO, CHI È CHE TIENE LA CONTABILITÀ DEI VOTI? SCRIVI BASTA SEIIIH!\nHai mezzi voti?"
            # Pulsanti che appariranno sotto il messaggio
            keyboard = [
                [
                    InlineKeyboardButton("Sì", callback_data='yes'),
                    InlineKeyboardButton("No", callback_data='no'),
                ],
            ]
            reply_markup = InlineKeyboardMarkup(keyboard)
            global pulsanti
            pulsanti = reply_markup
            context.bot.send_message(chat_id = update.effective_chat.id, text = esito, reply_markup = reply_markup)
        case 2:
            esito = "Allora, questa è la tavola " + str(nTavole) + "...\nMA NON È POSSIBILE CHE UNA MEDIANA SIA A 17 DA UNA PARTE E A 12 DALL'ALTRA! È TUTTO STORTOOOH! ADESSO VAI AL POSTO E TI BECCHI CINQUEEEH!"
            context.bot.send_message(chat_id = update.effective_chat.id, text = esito)
        case 3:
            esito = "Allora, questa è la tavola " + str(nTavole) + "...\nVE L'HO DETTO MILLE VOLTE, IL CARTIGLIO SI FA DA METÀ FOGLIO, DEVO SEMPRE RIPETERE LE STESSE COSEEEEH! PER STAVOLTA METTIAMO SEI, MA È REGALATOOOH!"
            context.bot.send_message(chat_id = update.effective_chat.id, text = esito)
        case 4:
            esito = "Allora, questa è la tavola " + str(nTavole) + "...\nLa tavola si presenta bene... I segni sono omogenei e non ci sono errori gravi, anche i titoli sono fatti bene... Tutto sommato è una bella tavola, mettiamo sette."
            context.bot.send_message(chat_id = update.effective_chat.id, text = esito)
        case 5:
            esito = "Allora, questa è la tavola " + str(nTavole) + "...\nCOS'È STO SEGNO ORRIBILE?! VAI AL POSTO E SISTEMALO ALTRIMENTI TI BECCHI TRE E TE LO TIENIIIH!"
            context.bot.send_message(chat_id = update.effective_chat.id, text = esito)


# Funzione per gestire le query dai pulsanti di /busiaudio e /consegna
def button(update, context):
    query = update.callback_query
    query.answer()

    testoFinale=""

    if(query.data == '1'):
        testoFinale = f"<b>Audio del Busata - Pagina {query.data}</b>\nAndate via, AutoCAD, Bassi, Basta battere, Benvegnù, Brutto sto qua, Busata è un sapiente, Busata perde tutto, Busi bestemmia, Busi è perfido, Busi è un po’ tardo, Busi va all’inferno, Busi16, BusiAcuto, Busirena, Cacciato via, Calma assoluta, Carta stracciata, Che schifo, Ciuccia il tè"
    elif(query.data == '2'):
        testoFinale = f"<b>Audio del Busata - Pagina {query.data}</b>\nColpa di Guerra, Compassione, Cosmo, Denti, Devo finire la tavola, Due, Facebook, Falasco, Ferragosto, Foglia, Gomma, Governo, Guerra, Guerra a 90, Hai capito, Il filo, Il taglio di Guerra, Insolente, Koreani mangiacani, Ledda studia chimica"
    elif(query.data == '3'):
        testoFinale = f"<b>Audio del Busata - Pagina {query.data}</b>\nMacchine, Marchesin, Marchesin vai via, Merja bocciato, Merja fa andare Busi all’inferno, Merja ha le mani giù, Metto 2 subito, Mi avete stufato, Mister Fantastico, Moro, Nirvana, Nirvana lento, Norvegia, Orari, Orco, Orco can, Orco2, Palazzo, Porta la cartellina, Povero Guerra"
    elif(query.data == '4'):
        testoFinale = f"<b>Audio del Busata - Pagina {query.data}</b>\nPrevio terrorismo, Rivoluzionario, Sfoglia il quaderno, Si diventa deficienti, Soddisfa il Busi, Stare al mondo, Telecamera, Terrapiattisti, Ti caccio via, Ti tieni il 2, Tigri stecchite, Titoli, Vedovato, Vedovato è un poeta, Vedovato traffica, Ventiquattrore, Via, Violenza privata, Viva la rivoluzione"
    elif(query.data == 'yes'):
        testoFinale = "VAI A PRENDERE LA TAVOLA, NON MI FIDO DI VOI!"
    elif(query.data == 'no'):
        testoFinale = "E ALLORA TI TIENI SEI E VAI AL POSTO!"

    # Manda il messaggio appropriato al comando
    if(query.data == 'yes' or query.data == 'no'):
        query.edit_message_text(text = esito)
        context.bot.send_message(chat_id = update.effective_chat.id, text = testoFinale)
    else:
        query.edit_message_text(text = testoFinale, reply_markup = pulsanti, parse_mode = telegram.ParseMode.HTML)


# /bustats
def bustats(update, context):
    # RAM utilizzata in MB
    process = psutil.Process()
    mem = str(round(process.memory_info().vms/1024/1024, 2))

    # Tempo di attività (h:mm:ss)
    uptime = getuptime()
    hr = 0
    min = 0
    times = math.trunc(getuptime()/60)
    sec = math.trunc(getuptime()-(60*times))
    if(uptime >= 60):
        min = times
    if(uptime >= 3600):
        hr = math.trunc(uptime/3600)
    # Aggiunge lo zero davanti a min e sec se necessario
    if (min < 10):
        min = "0" + str(min)
    if (sec < 10):
        sec = "0" + str(sec)
    uptimeStr = str(hr) + ":" + str(min) + ":" + str(sec)

    # Dimensione del file renato.py in KB
    fileSize = str(round(os.path.getsize("renato.py")/1024, 2))

    # Invia il messaggio
    context.bot.send_message(chat_id = update.effective_chat.id, text = "<b>Le BusiStatistiche</b>\nRAM utilizzata: " + mem + " MB\nDimensione del codice (<code>renato.py</code>): " + fileSize + " KB\nTempo di attività (h:mm:ss): " + uptimeStr, parse_mode = telegram.ParseMode.HTML)


# Esegue il bot
def main():
    updater = Updater(os.getenv('BOT_TOKEN'))

    updater.dispatcher.add_handler(CommandHandler('start', start))
    updater.dispatcher.add_handler(CallbackQueryHandler(button))
    updater.dispatcher.add_handler(CommandHandler('businfo', businfo))
    updater.dispatcher.add_handler(CommandHandler('busiaudio', busiaudio))
    updater.dispatcher.add_handler(CommandHandler('bustats', bustats))
    updater.dispatcher.add_handler(MessageHandler(Filters.text & (~Filters.command), message))
    updater.dispatcher.add_handler(CommandHandler('biobusi', biobusi))
    updater.dispatcher.add_handler(CommandHandler('busitrigger', busitrigger))
    updater.dispatcher.add_handler(CommandHandler('consegna', consegna))

    # Avvia il bot
    updater.start_polling()

    # Mostra che sta roba sta funzionando, o perlomeno è partita
    print("NastroAdesivoBot " + ver + " è online!")

    # Esegue il bot fino a che non si preme Ctrl-C
    updater.idle()  

# Scatenate l'inferno
if __name__ == '__main__':
    main()


# Fine del codice

# U n i t e v i  a l  c u l t o  d e l  B u s a t a .
