> In questo file butto giu' testo per non preoccuparmi preventivamente della formattazione con latex. A quello ci penso dopo (bibliografia compresa, che in questo file sono sotto forma di cit.)

## Metodo

Questo studio nasce per analizzare le diverse opzioni di spostamento per muoversi all'interno del Comune di Milano, valutandole per velocità, costo ed efficienza. L'idea è quella di trovare il mezzo di trasporto più conveniente nella media. Le opzioni prese in considerazione sono: mezzi pubblici ATM, macchina di proprietà, bicicletta, pedovia e 2 servizi di car sharing, Car2Go ed Enjoy.

Stabilire a priori quale delle opzioni elencate sia la migliore non è facile, Milano infatti rientra tra le prime 100 città a livello globale per livello di congestione stradale (cit. dati TomTomIndex del 2019), con un traffico tale da far raddoppiare i tempi di percorrenza normali su strada durante le rush hour della mattina.

Il metodo scelto per poter analizzare le prestazioni delle varie opzioni di spostamento, in grado di tenere in considerazione eventi come traffico e incidenti, è stato quello della simulazione via software basata su dati in tempo reale.

### La simulazione (abstract)

Per fare un confronto alla pari di ogni opzione di spostamento è stata costruita una simulazione via software.

L'idea alla base della simulazione è quella di simulare un utente "U" che si trova in un dato punto "A" di coordinate (w, x) che vuole dirigersi in un punto B di coordinate (y, z) chiedendo a un ipotetico servizio di navigazione di fornire, sulla base di dati in tempo reale (come traffico, orari dei mezzi pubblici, incidenti e strade chiuse), le migliori soluzioni di percorrenza di tale tratta per ogni mezzo di trasporto preso in considerazione, salvandone i risultati. Il tutto eseguito più volte durante l'arco della giornata, con diversi punti di partenza e di arrivo e di diversa lunghezza.

### La simulazione (implementazione)

#### Generazione delle tratte

Ogni singola simulazione di percorrenza è stata effettuata con una tratta generata su richiesta con una funzione random. La funzione progettata per la generazione delle tratte crea due coordinate A e B a random e utilizza alcuni constraint per decidere se restituire la tratta o ripetere il processo di generazione. I constraint utilizzati per questo studio sono i seguenti: le tratte generate devono essere lunghe almeno 2km in via aerea; i punti di partenza e di arrivo delle tratte devono essere all'interno del Comune di Milano.

Il primo constraint è stato scelto appositamente per simulare delle tratte scomode da fare a piedi, ovvero tratte che supererebbero i 20/30 minuti di camminata per essere coperte e, allo stesso modo, per avere tratte che giustificherebbero l'uso della macchina, evitando quindi tratte 5 minuti di macchina.

Il secondo constraint è dovuto ai termini di servizio del car sharing, che obbliga l'utente a utilizzare i mezzi a disposizione del servizio solamente all'interno del Comune di Milano, escludendo le varie zone dell'hinterland che fanno provincia. Per fare un confronto alla pari sulle stesse tratte ho dovuto quindi escludere la periferia della città.

La generazione random delle tratte è stata scelta per non incentrare indirettamente lo studio su particolari categorie di utente, come strade piene di uffici per i lavoratori, strade con scuole e università per gli studenti o strade particolarmente trafficate per via della topografia della città. Il tentativo è stato quello di rendere la simulazione più neutra possibile, considerando una qualsiasi tipologia di utente.

#### Acquisizione dei dati

I dati alla base di questo studio sono stati forniti tramite A.P.I dai seguenti servizi: HereWeGo (here.com) per le soluzioni di percorrenza coi mezzi pubblici ATM; Waze (waze.com) per la percorrenza in macchina; OpenStreetMap (openstreetmap.org) per la percorrenza in bici e a piedi; ... per il car sharing.

##### Soluzioni di percorrenza

HereWeGo e Waze forniscono soluzioni di percorrenza in tempo reale, tenendo conto delle condizioni attuali del traffico e della posizione dei mezzi. In particolare, Waze prende in considerazione il traffico, gli incidenti, le strade chiuse per lavori e le deviazioni. HereWeGo prende in considerazione la posizione dei mezzi in tempo reale, stimando l'arrivo a una particolare fermata e il tempo di percorrenza sulla base di rallentamenti e orari del giorno. OpenStreetMap invece fornisce soluzioni di percorrenza statiche, sia pedovia che in bicicletta, che non dipendono quindi dal traffico o da altre condizioni stradali. I dati di quest'ultimo infatti sono stati usati solamente come termini di riferimento. Le A.P.I di tali servizi sono nella forma:

```go
Service.GetRoute(A, B coordinate) Solution
```

dove il risultato restituito, in formato JSON, contiene la miglior soluzione di percorrenza  per il servizio richiesto. Tra i dati contenuti nel risultato sono presenti informazioni come durata stimata del tragitto, step di navigazione, avvisi, alternative ecc... nella forma:

```go
type Solution struct {
  EstimatedTravelTime float64 // minutes
  ...
}
```

##### Car sharing

Dato che non sono stati trovati servizi per stimare la percorrenza di una tratta col car sharing, che includesse la ricerca di una macchina vicina al punto di partenza e infine una stima del percorso, ne è stato programmato uno ad hoc. In particolare, il servizio ... offre tramite un A.P.I una lista aggiornata in tempo reale di tutte le macchine parcheggiate, libere di essere prenotate.

```go
Service.GetFreeCars() []Car
```

Per ogni entry nella lista sono presenti i dati della macchina e le coordinate geografiche della posizione.

```go
type Car struct {
  Position coordinate
  ...
}
```

Per creare un servizio in grado di fornire una soluzione di percorrenza in car sharing basata su dati in tempo reale sono stati uniti due servizi, quello di OpenStreetMap per la percorrenza a piedi e quello di Waze per la percorrenza in macchina, usati nel seguente modo:

```go
func GetCarSharingRoute(A, B) Solution {
  freeCars = CarSharingService.GetFreeCars()
  C = findClosestCar(freeCars)

  footRoute = OpenStreetMap.GetRoute(A, C)
  carRoute = Waze.GetRoute(C, B)

  return Solution{
    footRoute.EstimatedTravelTime + carRoute.EstimatedTravelTime,
    ...
  }
}
```

Dato un utente "U" che vuole andare da un punto "A" a un punto "B" in car sharing, il servizio creato appositamente procede nel scaricare la lista aggiornata delle macchine libere, cerca tra queste la macchina più vicina al punto di partenza desiderato "A" e ne calcola il tragitto a piedi per raggiungerla, dopodichè calcola il resto del tragitto, dalla posizione della macchina al punto di destinazione desiderato "B", in macchina. Con questo metodo si è ottenuta una stima in tempo reale della percorrenza in car sharing per ogni tratta, che ha permesso a posteriori di ricavare altre informazioni utili, come per esempio il tempo medio per raggiungere un auto.
