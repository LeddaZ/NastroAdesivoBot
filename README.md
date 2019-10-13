# NastroAdesivoBot
Il bot Telegram del Busi scritto in Node.js.

# Note di rilascio
Per leggere i cambiamenti nelle varie versioni del bot ci sono le [note di rilascio](https://github.com/LeddaZ/NastroAdesivoBot/blob/master/note.md).

# Foto e audio
A [questo](https://github.com/LeddaZ/NastroAdesivoBot/blob/master/link.txt) link si trovano tutte le foto e i file audio utilizzati nel bot.

# Codice del bot
È possibile scaricare la versione più recente del codice di **NastroAdesivoBot** cliccando sul pulsante verde `Clone or download`, quindi su `Download ZIP`.

![Codice](https://github.com/LeddaZ/NastroAdesivoBot/blob/master/codice.png)

Per scaricare una versione precedente andare nella sezione [Releases](https://github.com/LeddaZ/NastroAdesivoBot/releases), cercare la versione desiderata e cliccare su `Source code (zip)` sotto ad `Assets`

# Avviare il bot
Per avviare il codice su un proprio bot seguire queste istruzioni:
- Creare un bot con [BotFather](https://t.me/BotFather) e annotarsi la token del bot
- Nelle impostazioni del bot attivare la tastiera inline; inoltre se il bot viene aggiunto a un gruppo dovrà essere amministratore per funzionare
- Installare [Node.js](https://nodejs.org/it/)
- Installare [Git](https://git-scm.com/)
- Aprire una nuova finestra del terminale/prompt dei comandi
- Clonare la repository con `git clone https://github.com/LeddaZ/NastroAdesivoBot.git`
- Spostarsi nella cartella con `cd NastroAdesivoBot`
- Installare i moduli npm necessari con `npm install` (se si verificano errori utilzzare `sudo npm install` su Linux/macOS o un prompt con permessi di amministratore su Windows)
- Creare un file chiamato `.env` (`touch .env` su Linux/macOS e `type nul > .env` su Windows)
- Aprire il file con un editor di testo (consiglio [Notepad++](https://notepad-plus-plus.org/))
- Copiare e incollare `STABLE_TOKEN = token` nel file, quindi sostituire `token` con la token del bot generata da BotFather
- Salvare il file e chiudere l'editor
- Eseguire `node index.js` per avviare il bot

# Programmi utilizzati per creare il bot
- [Node.js](https://nodejs.org/it/): il linguaggio di programmazione
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api): l'API che fa funzionare il bot
- [Telegram](https://telegram.org/): la piattaforma di messaggistica istantanea utilizzata dal bot
- [BotFather](https://t.me/BotFather): il bot per creare i bot
- [Deaddrop](https://t.me/dead_drop_bot): il servizio in cui sono caricati tutti gli audio e alcune foto del bot
- [Now](https://zeit.co/): la piattaforma utilizzata per il deploy del bot, ossia per farlo restare online su un server senza usare il mio computer
- [Visual Studio Code](https://code.visualstudio.com/): l'editor di codice che ho usato per scrivere il bot
- [Notepad++](https://notepad-plus-plus.org/): quello che usavo prima di VS Code
- [GitHub](https://github.com/): questo sito

**Dopo 3 anni (2016-2019) il Busi ha cambiato scuola, quindi è improbabile che vengano aggiunti nuovi trigger/audio/foto al bot (comunque continuerà a funzionare)**

_Online dal 27 settembre 2018_