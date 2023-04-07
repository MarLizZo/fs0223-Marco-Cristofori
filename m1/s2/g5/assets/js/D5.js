/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log("================== INIZIO ES. 1 ==================")

const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

console.log("================== FINE ES. 1 ==================")


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("================== INIZIO ES. 2 ==================")

let petsOrdered = pets.sort();
for (let i = 0; i < petsOrdered.length; i++) {
  console.log(petsOrdered[i]);
}

console.log("================== FINE ES. 2 ==================")


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("================== INIZIO ES. 3 ==================")

let petsRev = pets.reverse();
for (let i = 0; i < petsRev.length; i++) {
  console.log(petsRev[i]);
}

console.log("================== FINE ES. 3 ==================")


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("================== INIZIO ES. 4 ==================")

console.log(pets);
let element = pets.shift();
pets.push(element);
console.log(pets);

console.log("================== FINE ES. 4 ==================")


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log("================== INIZIO ES. 5 ==================")

console.log(cars);

for (car of cars) {
  car.licensePlate = "WANTED-00";
}

console.log(cars);

console.log("================== FINE ES. 5 ==================")


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("================== INIZIO ES. 6 ==================")

console.log(cars);

let newObj = {brand : "Fiat", model : "Grande Punto", color : "white", trims : ['life', 'active', 'GT']};
cars.push(newObj);

console.log(cars);

for (let car of cars) {
  car.trims.pop();
}

console.log(cars);

console.log("================== FINE ES. 6 ==================")


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

console.log("================== INIZIO ES. 7 ==================")

for (let car of cars) {
  justTrims.push(car.trims[0]);
}

console.log(justTrims);

console.log("================== FINE ES. 7 ==================")


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("================== INIZIO ES. 8 ==================")

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.startsWith('b')) {
    console.log(`Car '${cars[i].model}' is Fizz !`);
  } else {
    console.log(`Car '${cars[i].model}' is Buzz !`);
  }
}

console.log("================== FINE ES. 8 ==================")


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log("================== INIZIO ES. 9 ==================")

let out;
let ind = 0;

while (out != 32) {
  out = numericArray[ind];
  console.log(numericArray[ind]);
  ind++;
}

console.log("================== FINE ES. 9 ==================")


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

console.log("================== INIZIO ES. 10 ==================")

let newArr = [];

for (char of charactersArray) {
  switch (char) {
    case 'a':
      newArr.push(1);
      break;
    case 'b':
      newArr.push(2);
      break;
    case 'c':
      newArr.push(3);
      break;
    case 'd':
      newArr.push(4);
      break;
    case 'e':
      newArr.push(5);
      break;
    case 'f':
      newArr.push(6);
      break;
    case 'g':
      newArr.push(7);
      break;
    case 'h':
      newArr.push(8);
      break;
    case 'i':
      newArr.push(9);
      break;
    case 'l':
      newArr.push(10);
      break;
    case 'm':
      newArr.push(11);
      break;
    case 'n':
      newArr.push(12);
      break;
    case 'o':
      newArr.push(13);
      break;
    case 'p':
      newArr.push(14);
      break;
    case 'q':
      newArr.push(15);
      break;
    case 'r':
      newArr.push(16);
      break;
    case 's':
      newArr.push(17);
      break;
    case 't':
      newArr.push(18);
      break;
    case 'u':
      newArr.push(19);
      break;
    case 'v':
      newArr.push(20);
      break;
    case 'z':
      newArr.push(21);
      break;
  }
}

console.log(newArr);

console.log("================== FINE ES. 10 ==================")