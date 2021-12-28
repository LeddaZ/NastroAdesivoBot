# Changelog

## Versione 4.0.1
- È stata riaggiunta la data della versione in `/businfo`

## Versione 4.0.0
- Il bot è stato riscritto in Python. Manca solo `neofetch` in `/bustats`, forse verrà riaggiunto più avanti

## Versione 3.1.0
- Il codice che esegue `neofetch` per visualizzare le specifiche del server in `/bustats` è stato completamente rifatto, inoltre ora l'uptime si aggiorna correttamente
- Il codice che restituisce la data della versione è stato semplificato
- Pulizia generale del codice

## Versione 3.0.0
- I trigger sono stati inseriti in un array (prima c'era una variabile per ogni trigger)
- `/busitrigger` è stato migliorato
- `BusiCasa` è stato rimosso

## Versione 2.5.4
- Aggiornato `/businfo`

## Versione 2.5.3
- Aggiornate alcune dipendenze per risolvere falle di sicurezza

## Versione 2.5.2
- È stata riaggiunta la data della versione
- Sono state aggiunte le specifiche del server a `/bustats`
- Altri miglioramenti al codice

## Versione 2.5.1
- È stata rimossa la data della versione
- Sono state aggiornate le dipendenze
- Diversi miglioramenti nel codice

## Versione 2.5.0
- Il codice è stato notevolmente migliorato, riorganizzato e riformattato
- Il bot non è più hostato su Heroku (temporaneamente, forse)
- Sono stati riaggiunti i pulsanti per cambiare pagina su `/busiaudio`
- Il messaggio originale di `/consegna` non viene eliminato; ora vengono solo rimossi i pulsanti del mezzo voto
- È stato riaggiunto il tempo di attività in `/bustats`

## Versione 2.4.3
- Il bot ora utilizza Node 14 LTS invece del 12

## Versione 2.4.2
- È stata aggiornata una dipendenza per risolvere una falla di sicurezza

## Versione 2.4.1
- Il link della pagina Animalismo a scuola è stato spostato su `/trovabusi`

## Versione 2.4.0
- La formattazione del codice è stata migliorata
- Alcune parti del codice sono state rifatte
- I pulsanti del mezzo voto su `/consegna` vengono rimossi dopo la selezione
- `/businfo` è stato aggiornato

## Versione 2.3.8
- `/businfo` è stato migliorato
- I link per i trigger delle foto sono stati aggiornati
- È stata rimossa la descrizione della foto da `Oh no`

## Versione 2.3.7
- Aggiorato `node-fetch` per risolvere una falla di sicurezza

## Versione 2.3.6
- È stato corretto il link del changelog in `/businfo`

## Versione 2.3.5
- È stato modificato il trigger `Animalismo a scuola`
- Il trigger `Cani` è stato modificato e rinominato in `Sofferenza`

## Versione 2.3.4
- Rimosso il sistema operativo da `/bustats`
- Aggiornate le dipendenze (in particolare `bl` per risolvere una falla di sicurezza)

## Versione 2.3.3
- Corretta la stringa della dimensione del codice (`bot.js` invece di `index.js`)

## Versione 2.3.2
- È stato aggiunto il sistema operativo in `/bustats`
- È stata aggiunta una nuova nota
- Dipendenze aggiornate

## Versione 2.3.1
- Il tempo di attività è stato rimosso da `/bustats` perché essendo su Heroku ogni tanto si resettava, quindi era inutile
- Miglioramenti minori al codice

## Versione 2.3.0
- Il bot è nuovamente hostato su Heroku (adesso non andrà più offline a caso, o almeno lo spero)

## Versione 2.2.5
- Miglioramenti generali al codice

## Versione 2.2.4
- Dipendenze aggiornate (risolto anche un problema di sicurezza)

## Versione 2.2.3
- La visualizzazione del tempo di attività in ore funziona (finalmente)

## Versione 2.2.2
- La visualizzazione del tempo di attività è stata migliorata

## Versione 2.2.1
- Il tempo di attività viene visualizzato in minuti se > 60 s o in ore se > 3600 s (avrebbe dovuto farlo anche prima ma il codice non funzionava)
- Altri miglioramenti minori al codice

## Versione 2.2.0
- È stato aggiunto il comando `/bustats` per visualizzare alcune statistiche sul bot

## Versione 2.1.5
- Rimossa una dipendenza non necessaria

## Versione 2.1.4
- Il bot non è più hostato su Now

## Versione 2.1.3
- Il bot può nuovamente essere avviato su Node.js 12.x

## Versione 2.1.2
- È stato aggiunto il link al changelog in `/businfo`
- Le dipendenze sono state aggiornate

## Versione 2.1.1
- Ritorno a Now

## Versione 2.1.0
- Il deploy del bot viene fatto con Heroku e non più con Now, ora il bot non dovrebbe più andare offline
- Dato che Heroku usa sempre l'ultima versione di Node.js il bot ora richiede almeno Node 13.9.0

## Versione 2.0.15
- Le tavole sono state diminuite da 15 a 14
- Il codice è stato migliorato
- Le dipendenze sono state aggiornate alle ultime versioni disponibili

## Versione 2.0.14
- Miglioramenti minori al codice

## Versione 2.0.13
- Sono stati aggiunti i trigger `Calci` e `Luce`
- Miglioramenti minori al codice

## Versione 2.0.12
- È stata riaggiunta la data della versione in `/businfo`
- Sono stati apportati altri miglioramenti a `/businfo`
- Il codice del bot è stato reso più leggibile

## Versione 2.0.11
- È stata migliorata la descrizione di `/busitrigger`

## Versione 2.0.10
- È stato aggiunto il trigger `Quanto manca?`
- Ora il bot richiede Node.js 12.0.0 o una versione successiva

## Versione 2.0.9
- `/nota` utilizza solo il nome

## Versione 2.0.8
- `/nota` utilizza il nickname se l'utente che lo attiva non ha uno username
- `/businfo` è stato migliorato

## Versione 2.0.7
- I comandi `/busitrigger`, `/busiaudio` e `/busifoto` sono stati riordinati in ordine alfabetico
- "Gesù" viene rilevato anche senza accento

## Versione 2.0.6
- È stato aggiunto il trigger `Collina`

## Versione 2.0.5
- `/businfo` è stato aggiornato correttamente

## Versione 2.0.4
- È stato ripristinato il nome in `Popopopo`
- `/trigger` è stato modificato in `/busitrigger`

## Versione 2.0.3
- È stato aggiunto l'audio `Foglia`

## Versione 2.0.2
- `/trigger` e `/comandi` sono stati uniti in `/trigger`
- `/foto` è stato rinominato in `/busifoto`
- `/audio` è stato rinominato in `/busiaudio`
- Sono stati rimossi i trigger non funzionanti o trasformati in comandi da `/trigger`

## Versione 2.0.1
- `/caccia` e `/ritorna` sono stati rimossi

## Versione 2.0.0
- `/voto` è stato sostituito da `/consegna`; simula la consegna di una tavola e in alcuni casi c'è anche il mezzo voto
- L'audio `Orco` funziona di nuovo
- Sono stati aggiunti i comandi `/caccia` e `/ritorna` per bannare e unbannare qualcuno in un gruppo
- È stata aggiunta una nuova nota
- Il trigger `Loddo` funziona di nuovo
- È stato aggiunto il trigger `Prospettiva`
- Il bot ora reagisce a qualsiasi bestemmia
- È stato rimosso il nome da `popopopo`
- BusiAudio è stato sostituito da `/audio` e non è più diviso in pagine
- BusiTrigger è stato sostituito da `/trigger`
- BusiFoto è stato sostituito da `/foto`
- BioBusi è stato sostituito da `/biobusi`
- Businfo è stato sostituito da `/businfo` e sono stati rimossi la data della versione e il numero di trigger
- `Paesaggio veneto` è stato sostituito dal comando `/trovabusi` con dei link relativi al Busi; di conseguenza `BusiAmazon` è stato rimosso
- È stato aggiunto il comando `/comandi` con le descrizioni di tutti i comandi del bot
- `/nota` utilizza gli username al posto dei nomi
- Modificato il testo di `Liliana Segre`
- Corretto un bug con gli audio di Guerra

## Versione 1.9.3
- È stato corretto il link del codice sorgente in Businfo

## Versione 1.9.2
- La token del bot è stata nascosta per motivi di sicurezza

## Versione 1.9.1
- Sono stati aggiunti i trigger `Voti` e `Nota`
- È stato aggiunto l'audio `Titoli`

## Versione 1.9.0
- Sono stati aggiunti i trigger `BusiAmazon` e `BusiCasa`
- Sono stati aggiunti gli audio `Ferragosto`, `Telecamera`, `Tigri stecchite`, `Ventiquattrore` e `Via`

## Versione 1.8.0
- È stata modificata la formattazione del testo in Businfo
- È stato aggiunto il comando /nota

## Versione 1.7.4
- È stato modificato il testo del trigger "Salute"
- È stato aggunto il trigger Busascii

## Versione 1.7.3
- È stato aggiunto il trigger "Cattivo"

## Versione 1.7.2
- Sono stati aggiunti gli audio "Calma assoluta" e "Rivoluzionario"
- È stato aggiunto il trigger "120 tavole"

## Versione 1.7.1
- Sono state aggiunte tre nuove frasi per /voto
- È stata modificata la frase del voto 2
- Sono stati aggiunti gli audio "Busi è perfido" e "Orco can"

## Versione 1.7.0
- È stato aggiunto il comando "/voto". Genera un numero casuale da 1 a 8 e restituisce una valutazione del Busi.

## Versione 1.6.8
- Sono stati aggiunti gli audio "Busata perde tutto", "Ciuccia il tè", "Il filo" e "Previo terrorismo"

## Versione 1.6.7
- Ora i link delle foto e degli audio sono nascosti

## Versione 1.6.6
- È stato aggiunto il trigger "Liliana Segre"
- È stata modificata la formattazione del testo in BusiAudio
- Sono stati aggiunti gli audio "Merja bocciato" e "Vedovato è un poeta"

## Versione 1.6.5
- Sono stati risolti alcuni problemi con BusiAudio

## Versione 1.6.4
- È stata modificata la formattazione del testo in alcuni trigger

## Versione 1.6.3
- È stato aggiunto l'audio Porta la cartellina

## Versione 1.6.2
- BusiAudio ora funziona correttamente (è necessario scrivere BusiAudio in questo modo)

## Versione 1.6.1
- È stato corretto un bug che mandava il messaggio di BusiAudio con qualsiasi messaggio inviato al bot che non era già incluso nei trigger

## Versione 1.6.0
- È stata migliorata la formattazione del testo in BusiTrigger, BusiAudio e BusiFoto
- BusiAudio è stato diviso in pagine da 20 audio ciascuna con i pulsanti per cambiare pagina (tastiera inline)
- È stato corretto il numero di trigger e audio

## Versione 1.5.2
- Il nome del creatore del Bot è stato ri-aggiornato
- Sono stati aggiunti gli audio Busi è un po' tardo, Guerra a 90, Koreani mangiacani, Ledda studia chimica, sfoglia il quaderno, stare al mondo, basta battere, si diventa deficienti e metto 2 subito

## Versione 1.5.1
- Il nome del creatore del Bot in Businfo è stato aggiornato

## Versione 1.5.0
- BusiAudio non è più diviso in pagine
- Tutti i trigger che restituivano un link con del testo (ad es. le foto) ora restituiscono solo il testo. Cliccando sul testo si può accedere al link (grazie HTML e Telegram che supporta il Markdown)
- È stato modificato il testo del trigger Animalismo a scuola

## Versione 1.4.2
- Corretto un problema con la formattazione HTML in Businfo

## Versione 1.4.1
- Il link del codice può essere aperto cliccando su "Codice del bot" in Businfo

## Versione 1.4.0
- BusiAudio è stato diviso in pagine da 20 audio ciascuna
- Sono stati aggiunti gli audio orari, terrapiattisti, povero Guerra, moro, macchine, Falasco, Busi bestemmia, Merja fa andare Busi all'inferno, devo finire la tavola, denti, colpa di Guerra, Vedovato, ti tieni il 2, Mister Fantastico, Governo, il taglio di Guerra, Busi va all'inferno, soddisfa il Busi, andate via, Merja ha le mani giù

## Versione 1.3.6
- Sono stati aggiunti i trigger orario, animalismo a scuola e cani
- È stato modificato il testo del trigger straccia la carta

## Versione 1.3.5
- È stato aggiunto il trigger "non ho capito"

## Versione 1.3.4
- È stato aggiunto il trigger "straccia la carta"
- Ora viene visualizzato il testo di "Businfo" quando si avvia il bot con /start

## Versione 1.3.3
- BusiTrigger ora mostra il numero di trigger
- Sono stati aggiunti gli audio Bassi, Benvegnù, cacciato via, Guerra, Marchesin vai via, carta stracciata, mi avete stufato e Vedovato traffica

## Versione 1.3.2
- Busisecs è stato ri-rinominato in busecs2 (comunque invia un'immagine al posto di due perché adesso nel codice ci sono gli if annidati)
- Il trigger del cagnolino invia solo il messaggio corretto
- Formattazione del testo migliorata in BusiTrigger, BusiAudio e BusiFoto

## Versione 1.3.1
- Busecs2 è stato rinominato in Busisecs (altrimenti mandava due immagini)
- Ora si può scrivere Dio seguito da qualsiasi cosa :)

## Versione 1.3.0
- Nuovi audio disponibili: Palazzo, Facebook, cosmo, orco, orco2, che schifo, BusiAcuto, Marchesin e viva la rivoluzione
- È stato aggiunto il trigger BusiFoto con le seguenti immagini: oh no, non sono parallele, busecs, busecs2 e triggered
- Che figo ora ci sono ben 50 trigger nel bot

## Versione 1.2.1
- Sono stati aggiunti i trigger pelliccia e cane procione

## Versione 1.2.0
- È stato rimosso il trigger due (interferisce con l'audio)    
- Ora non è più obbligatorio rispettare maiuscole e minuscole quando si scrive un trigger
- È stato aggiunto il trigger Busiaudio con i seguenti audio: AutoCAD - Brutto sto qua - Busata è un sapiente - Busirena - Compassione - Due - Gomma - Hai capito - Busi16 - Insolente - Nirvana lento - Nirvana - Norvegia - Ti caccio via - Violenza privata

## Versione 1.1.6
- Formattazione del testo migliore in alcuni trigger

## Versione 1.1.5
- Sono stati aggiunti i trigger due e ma non ho fatto niente (per l'effetto migliore usarlo dopo popopopo)

## Versione 1.1.4
- Sono stati aggiunti i trigger BioBusi e non ho la tavola.

## Versione 1.1.3
- È stato rimosso il trigger dispensa

## Versione 1.1.2
- Sono stati aggiunti i trigger punto Z, paesaggio veneto, dispensa e farfalle

## Versione 1.1.1
- Il trigger businfo mostra anche il link del codice sorgente
- Sono stati aggiunti i trigger chi sei?, chi sei tu? e salute
- Buongiorno è stato riaggiunto insieme a buongiorno prof

## Versione 1.1.0
- Sono stati aggiunti i trigger tigre e Merjaaa

## Versione 1.0.1
- Sono stati aggiunti i trigger BusiTrigger (mostra i trigger disponibili) e businfo (mostra versione e autore del bot)
- Buongiorno è stato rinominato in buongiorno prof

## Versione 1.0.0
- Quattro trigger disponibili: Loddo, non ho lo scotch, popopopo e buongiorno
