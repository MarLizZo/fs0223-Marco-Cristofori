/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// Stringa: la stringa è il dato principale di qualsiasi linguaggio. E una sequenza di lettere e numeri racchiuse all interno di apici che possono essere singoli o doppi.
// Number: il number è essenzialmente un numero. Il number in JS può sia essere un numero intero che un numero con virgola.
// Boolean: I booleani sono molto semplici. Sono bianchi o neri, nessuna via di mezzo. Solo che al posto di bianco e nero, abbiamo true o false.
// Array: Gli array sono insiemi di dati. Possono contenere qualsiasi dato descritto sopra, e possono contenere al loro interno anche altri array.
// Objects: Gli oggetti sono simili agli Array, ma a differenza di questi ultimi i dati al loro interno sono formati da coppie nome - valore. Esempio: 'nome' : 'mario'. Gli objects al loro interno possono anche ospitare funzioni.




/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Marco";
console.log(name);
document.getElementById('test-1').innerHTML = name;





/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20;
console.log(somma);

let num_1 = 12;
let num_2 = 20;
let risultato = num_1 + num_2;
console.log(risultato);




/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);




/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Cristofori";
console.log(name);
document.getElementById('test-2').innerHTML = name;

const random = "test-const";
//random = "prova cambiamento"; -- errore
//console.log(random); -- errore





/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log(sottrazione);





/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

let result = name1 == name2;
console.log(result);
document.getElementById('test-3').innerHTML = 'Il risultato è ' + result;


let result_2 = name1.toLowerCase() == name2.toLowerCase();
console.log(result_2);
document.getElementById('test-4').innerHTML = 'Il risultato con toLowerCase è ' + result_2;
