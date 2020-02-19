# NastroAdesivoBot ![Versione](https://img.shields.io/github/v/release/LeddaZ/NastroAdesivoBot?color=%23005000&label=Versione)
Il bot Telegram del Busi scritto in Node.js.

# Note di rilascio
Per leggere le modifiche introdotte con gli aggiornamenti del bot ci sono le [note di rilascio](https://github.com/LeddaZ/NastroAdesivoBot/blob/master/note.md).

# Foto e audio
A [questo](https://github.com/LeddaZ/NastroAdesivoBot/blob/master/link.txt) link si trovano tutte le foto e i file audio utilizzati nel bot.

# Codice del bot
È possibile scaricare la versione più recente del codice di **NastroAdesivoBot** cliccando sul pulsante verde `Clone or download`, quindi su `Download ZIP`.

![Codice](https://github.com/LeddaZ/NastroAdesivoBot/blob/master/codice.png)

Per scaricare una versione precedente visitare la sezione [Releases](https://github.com/LeddaZ/NastroAdesivoBot/releases), cercare la versione desiderata e cliccare su `Source code (zip)` sotto ad `Assets`

# Avviare il bot
Per avviare il codice su un proprio bot seguire queste istruzioni:
- Creare un bot con [BotFather](https://t.me/BotFather) e annotarsi la token del bot
- Nelle impostazioni del bot attivare la tastiera inline; inoltre se il bot viene aggiunto a un gruppo dovrà essere amministratore per funzionare
- Installare [Node.js](https://nodejs.org/it/). È consigliato installare l'ultima versione LTS, dato che il bot viene testato su Node 12 LTS
- Installare [Git](https://git-scm.com/)
- Aprire una nuova finestra del terminale/prompt dei comandi
- Clonare la repository con `git clone https://github.com/LeddaZ/NastroAdesivoBot.git`
- Spostarsi nella cartella con `cd NastroAdesivoBot`
- Installare i moduli npm necessari con `npm install` (se si verificano errori utilzzare `sudo npm install` su Linux/macOS o un prompt con permessi di amministratore su Windows)
- Creare un file chiamato `.env` (`touch .env` su Linux/macOS e `type nul > .env` su Windows)
- Aprire il file con un editor di testo (consiglio [Notepad++](https://notepad-plus-plus.org/))
- Copiare e incollare `TOKEN = xyz` nel file, quindi sostituire `xyz` con la token del bot generata da BotFather
- Salvare il file e chiudere l'editor
- Eseguire `node index.js` per avviare il bot

# Software utilizzati per creare il bot
- [Node.js](https://nodejs.org/it/): il linguaggio di programmazione
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api): l'API utilizzata dal bot
- [Telegram](https://telegram.org/): meglio di WhatsApp
- [BotFather](https://t.me/BotFather): il bot per creare i bot
- [Deaddrop](https://t.me/dead_drop_bot): un servizio che fornisce link diretti per qualsiasi file caricato su Telegram
- [Now](https://zeit.co/now): la piattaforma utilizzata per il deploy del bot, ossia per farlo restare online su un server senza usare il mio computer
- [Visual Studio Code](https://code.visualstudio.com/): l'editor di codice che uso/ho usato per scrivere il bot
- [Notepad++](https://notepad-plus-plus.org/): quello che usavo prima di VS Code
- [GitHub](https://github.com/): questo sito per caricare il codice sorgente del bot
- [release-it](https://github.com/release-it/release-it): modulo npm per generare automaticamente le pubblicazioni su GitHub
- [auto-changelog](https://github.com/CookPete/auto-changelog): genera il changelog delle pubblicazioni automaticamente dai commit

**Nel 2019 il Busi ha cambiato scuola, quindi è improbabile che vengano aggiunti nuovi trigger/audio/foto; comunque il bot rimarrà online**

_Online dal 27 settembre 2018_
