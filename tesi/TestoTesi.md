> In questo file butto giu' testo per non preoccuparmi preventivamente della formattazione con latex. A quello ci penso dopo (bibliografia compresa, che in questo file sono sotto forma di cit.)

## Metodo

Questo studio nasce per analizzare le diverse opzioni di spostamento per muoversi all'interno del Comune di Milano, valutandole per velocità, costo ed efficienza. L'idea è quella di trovare il mezzo di trasporto più conveniente nella media. Le opzioni prese in considerazione sono: mezzi pubblici ATM, macchina di proprietà, bicicletta, pedovia e 2 servizi di car sharing, Car2Go ed Enjoy.

Stabilire a priori quale delle opzioni elencate sia la migliore non è facile, Milano infatti rientra tra le prime 100 città a livello globale per livello di congestione stradale (cit. dati TomTomIndex del 2019), con un traffico tale da far raddoppiare i tempi di percorrenza normali su strada durante le rush hour della mattina.

Il metodo scelto per poter analizzare le prestazioni delle varie opzioni di spostamento, in grado di tenere in considerazione avvenimenti in tempo reale come traffico e incidenti, è stato quello della simulazione via software basata su dati in tempo reale.

### La simulazione (abstract)

Per fare un confronto alla pari di ogni opzione di spostamento è stata costruita una simulazione via software.

L'idea alla base della simulazione è quella di simulare un utente "U" che si trova in un dato punto "A" di coordinate (w, x) che vuole dirigersi in un punto B di coordinate (y, z) chiedendo a un ipotetico servizio di navigazione di fornire, sulla base di dati in tempo reale (come traffico, orari dei mezzi pubblici, incidenti e strade chiuse), le migliori soluzioni di percorrenza di tale tratta per ogni mezzo di trasporto preso in considerazione, salvandone i risultati. Il tutto eseguito più volte durante l'arco della giornata, con diversi punti di partenza e di arrivo e di diversa lunghezza.

### La simulazione (implementazione)

#### Generazione delle tratte

Ogni singola simulazione di percorrenza è stata effettuata con una tratta generata con una funzione random su richiesta. La funzione progettata per la generazione delle tratte crea due coordinate A e B a random e utilizza alcuni constraint per decidere se restituire la tratta o ripetere il processo di generazione. I constraint utilizzati sono i seguenti: le tratte generate devono essere lunghe almeno 2km in via aerea; i punti di partenza e di arrivo delle tratte devono essere all'interno del Comune di Milano.

Il primo constraint ...
