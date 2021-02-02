# NastroAdesivoBot ![Versione](https://img.shields.io/github/v/release/LeddaZ/NastroAdesivoBot?color=%23005000&label=Versione)
Il bot Telegram del Busi scritto in Node.js.

# Note di rilascio
Le [note di rilascio](https://github.com/LeddaZ/NastroAdesivoBot/blob/master/extra/note.md) contengono tutte le modifiche introdotte con ogni aggiornamento del bot.

# Foto e audio
A [questo](https://github.com/LeddaZ/NastroAdesivoBot/blob/master/extra/link.txt) link si trovano tutte le foto e i file audio utilizzati nel bot.

# Codice del bot
È possibile scaricare la versione più recente del codice di **NastroAdesivoBot** cliccando [qui](https://github.com/LeddaZ/NastroAdesivoBot/archive/master.zip)

Per scaricare una versione precedente visitare la sezione [Releases](https://github.com/LeddaZ/NastroAdesivoBot/releases), cercare la versione desiderata e cliccare su `Source code (zip)` sotto ad `Assets`

# Avviare il bot
Per avviare il codice su un proprio bot seguire queste istruzioni:
- Creare un bot con [BotFather](https://t.me/BotFather) e annotarsi la token del bot
- Nelle impostazioni del bot attivare la tastiera inline; inoltre se il bot viene aggiunto a un gruppo dovrà essere amministratore per assicurare il corretto funzionamento
- Installare [Node.js](https://nodejs.org/it/). È consigliato installare l'ultima versione LTS, dato che il bot viene testato su Node 14 LTS
- Installare [Git](https://git-scm.com/)
- Aprire una nuova finestra del terminale/prompt dei comandi
- Clonare la repository con `git clone https://github.com/LeddaZ/NastroAdesivoBot.git`
- Spostarsi nella cartella con `cd NastroAdesivoBot`
- Installare i moduli npm necessari con `npm install` (se si verificano errori utilzzare `sudo npm install` su Linux/macOS o un prompt con permessi di amministratore su Windows)
- Creare un file chiamato `.env` (`touch .env` su Linux/macOS e `type nul > .env` su Windows)
- Aprire il file con un editor di testo (consiglio [Notepad++](https://notepad-plus-plus.org/) su Windows)
- Scrivere `TOKEN = xyz` nel file, sostituendo `xyz` con la token del bot generata da BotFather
- Salvare il file e chiudere l'editor
- Eseguire `npm start` per avviare il bot

# Software utilizzati per creare il bot
- [Node.js](https://nodejs.org/it/): il linguaggio di programmazione
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api): l'API utilizzata dal bot
- [Telegram](https://telegram.org/): meglio di WhatsApp
- [BotFather](https://t.me/BotFather): il bot per creare i bot
- [Deaddrop](https://t.me/dead_drop_bot): un servizio che fornisce link diretti per qualsiasi file caricato su Telegram
- [Heroku](https://heroku.com/): la piattaforma utilizzata per il deploy del bot, ossia per farlo restare online su un server senza usare il mio computer
- [Visual Studio Code](https://code.visualstudio.com/): l'editor di codice che uso/ho usato per scrivere il bot
- [Notepad++](https://notepad-plus-plus.org/): quello che usavo prima di VS Code
- [GitHub](https://github.com/): questo sito per caricare il codice sorgente del bot
- [release-it](https://github.com/release-it/release-it): modulo npm per generare automaticamente le [pubblicazioni](https://github.com/LeddaZ/NastroAdesivoBot/releases) su GitHub
- [auto-changelog](https://github.com/CookPete/auto-changelog): genera il changelog delle pubblicazioni leggendo tutti i commit tra una versione e l'altra
- [Stack Overflow](https://stackoverflow.com/) e tutti quelli che fanno domande e rispondono: senza "prendere in presto" codice da loro il bot non sarebbe a questo punto
- [heroku-node-telegram-bot](https://github.com/odditive/heroku-node-telegram-bot): grazie a questo esempio ho finalmente capito come hostare il bot su Heroku

**Nel 2019 il Busi ha cambiato scuola, quindi è improbabile che vengano aggiunti nuovi trigger/audio/foto; comunque il bot rimarrà online**

_Online dal 27 settembre 2018_
