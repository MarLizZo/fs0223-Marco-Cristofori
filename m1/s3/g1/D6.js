/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1,l2) {
    return l1 * l2;
}

console.log("================= BEGIN EX.1 =================");

console.log(area(5, 15));

console.log("================= END EX.1 =================");


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(x,y) {
    return x != y ? x + y : (x + y) * 3;
}

console.log("================= BEGIN EX.2 =================");

console.log(crazySum(12, 12));
console.log(crazySum(12, 23));

console.log("================= END EX.2 =================");


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(x) {
    if (x <= 19) {
        return 19 - x;
    } else {
        return (x - 19) * 3;
    }
}

console.log("================= BEGIN EX.3 =================");

console.log(crazyDiff(9));
console.log(crazyDiff(29));

console.log("================= END EX.3 =================");


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    return n >= 20 && n <= 100 || n == 400 ? true : false;
}


console.log("================= BEGIN EX.4 =================");

console.log(boundary(27));
console.log(boundary(120));
console.log(boundary(400));

console.log("================= END EX.4 =================");


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
    let newStr;
    if (str.startsWith("EPICODE")) {
        return str;
    } else {
        return "EPICODE " + str;
    }
    return newStr;
}


console.log("================= BEGIN EX.5 =================");

console.log(epify("Senza EPICODE all'inizio"));
console.log(epify("EPICODE all'inizio"));

console.log("================= END EX.5 =================");


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
    if (n % 3 == 0) {
        console.log(`Il numero ${n} è un multiplo di 3!`);
    } else {
        console.log(`Il numero ${n} non è un multiplo di 3!`);
    }
    if (n % 7 == 0) {
        console.log(`Il numero ${n} è un multiplo di 7!`);
    } else {
        console.log(`Il numero ${n} non è un multiplo di 7!`);
    }
}


console.log("================= BEGIN EX.6 =================");

check3and7(9);
check3and7(28);
check3and7(42);
check3and7(50);

console.log("================= END EX.6 =================");


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
    console.log(`La parola ${str} scritta al contrario è ` + str.split('').reverse().join(''));
}


console.log("================= BEGIN EX.7 =================");

reverseString('Javascript');

console.log("================= END EX.7 =================");


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str) {
    let newStr = str.split(' ');
    for (let stringa of newStr) {
        stringa[0] = stringa[0].toUpperCase();
    }
    finalArr = newStr.join(' ');
    console.log(finalArr);

    // newStr.map(x => x[0].toUpperCase());
    // console.log(newStr);
}


console.log("================= BEGIN EX.8 =================");

upperFirst("javascript really rocks!");

console.log("================= END EX.8 =================");


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
    arr = str.split('');
    arr.pop();
    arr.shift();
    newArr = arr.join('');
    console.log(newArr);
}


console.log("================= BEGIN EX.9 =================");

cutString("Javascript");

console.log("================= END EX.9 =================");


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    for (let i = 0; i < n; i++) {
        console.log(Math.floor(Math.random() * 10));
    }
}

console.log("================= BEGIN EX.10 =================");

giveMeRandom(5);

console.log("================= END EX.10 =================");