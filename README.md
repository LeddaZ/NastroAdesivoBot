# NastroAdesivoBot ![Versione](https://img.shields.io/github/v/release/LeddaZ/NastroAdesivoBot?color=red&label=Ultima%20versione)
Il bot Telegram del Busi scritto in Python.

# Changelog
Il [changelog](https://github.com/LeddaZ/NastroAdesivoBot/blob/master/extra/changelog.md) contiene tutte le modifiche introdotte con ogni aggiornamento del bot.

# Foto e audio
A [questo](https://github.com/LeddaZ/NastroAdesivoBot/blob/master/extra/link.txt) link si trovano tutte le foto e i file audio utilizzati nel bot.

# Codice del bot
È possibile scaricare la versione più recente del codice di **NastroAdesivoBot** cliccando [qui](https://github.com/LeddaZ/NastroAdesivoBot/archive/master.zip)

Per scaricare una versione specifica visitare la sezione [Releases](https://github.com/LeddaZ/NastroAdesivoBot/releases), cercare la versione desiderata e cliccare su `Source code (zip)` sotto ad `Assets`. È inoltre possibile trovare il codice dell'ultima release del bot a [questo](https://github.com/LeddaZ/NastroAdesivoBot/archive/release.zip) link (il ramo `master` potrebbe avere modifiche non ancora pubblicate ufficialmente).

# Avviare il bot
Per avviare il codice su un proprio bot seguire queste istruzioni:
- Creare un bot con [BotFather](https://t.me/BotFather) e annotarsi la token del bot
- Nelle impostazioni del bot attivare la tastiera inline; inoltre se il bot viene aggiunto a un gruppo dovrà essere amministratore per assicurare il corretto funzionamento
- Installare [Python](https://www.python.org/downloads/).
- Installare [Git](https://git-scm.com/)
- Aprire una nuova finestra del terminale/prompt dei comandi
- Clonare la repository con `git clone https://github.com/LeddaZ/NastroAdesivoBot.git`
- Spostarsi nella cartella con `cd NastroAdesivoBot`
- Installare i moduli necessari con `pip install -r requirements.txt`
- Creare un file chiamato `.env` (`touch .env` su Linux/macOS e `type nul > .env` su Windows)
- Aprire il file con un editor di testo (consiglio [Notepad++](https://notepad-plus-plus.org/) su Windows)
- Scrivere `BOT_TOKEN = xyz` nel file, sostituendo `xyz` con la token del bot generata da BotFather
- Scrivere `GITHUB_TOKEN = xyz` nel file, sostituendo `xyz` con la token di GitHub necessaria per leggere la versione del bot. Per informazioni su come creare una token su GitHub, leggere [qui](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- Salvare il file e chiudere l'editor
- Eseguire `python renato.py` per avviare il bot

# Software utilizzati per creare il bot
- [Python](https://www.python.org/downloads/): il linguaggio di programmazione
- [python-telegram-bot](https://github.com/python-telegram-bot/python-telegram-bot): l'API utilizzata dal bot per interfacciarsi con Telegram
- [Telegram](https://telegram.org/): meglio di WhatsApp
- [BotFather](https://t.me/BotFather): il bot per creare i bot
- [Deaddrop](https://t.me/dead_drop_bot): un servizio che fornisce link diretti per qualsiasi file caricato su Telegram
- [Visual Studio Code](https://code.visualstudio.com/): l'editor di codice che uso attualmente per scrivere il bot
- [Notepad++](https://notepad-plus-plus.org/): quello che usavo prima di VS Code
- [GitHub](https://github.com/): questo sito per caricare il codice sorgente del bot
- [release-it](https://github.com/release-it/release-it): modulo npm per generare automaticamente le [release](https://github.com/LeddaZ/NastroAdesivoBot/releases) su GitHub
- [auto-changelog](https://github.com/CookPete/auto-changelog): genera il changelog delle release leggendo tutti i commit tra una versione e l'altra
- [Stack Overflow](https://stackoverflow.com/) e tutti quelli che fanno domande e rispondono: senza "prendere in presto" codice da loro il bot non sarebbe a questo punto

**Nel 2019 il Busi ha cambiato scuola, quindi è improbabile che vengano aggiunti nuovi trigger/audio/foto**

_Online dal 27 settembre 2018_
