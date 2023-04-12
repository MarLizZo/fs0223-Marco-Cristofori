// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function giveMeRandom(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}

function checkArray(arr) {
    let arrAddition = [];
    let result = 0;
    for (let el of arr) {
        el < 5 ? console.log(`Il numero ${el} è inferiore o uguale a 5`) : console.log(`Il numero ${el} è maggiore di 5`);
        if (el > 5) {
            arrAddition.push(el);
        }
    }
    if (arrAddition.length > 0) {
        for (let num of arrAddition) {
            result += num;
        }
        console.log(`Il risultato dei numeri maggiori di 5 nell'array è ${result}`);
    } else {
        console.log("Nessun numero maggiore di 5, operazione annullata!");
    }
}


console.log("================= BEGIN EX.1 EXTRA =================");

let myArr = giveMeRandom(8);
checkArray(myArr);

console.log("================= END EX.1 EXTRA =================");

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

function shoppingCartTotal(arr) {
    let total = 0;
    for (let obj of shoppingCart) {
        total += obj.price * obj.quantity;
    }
    return total;
}

let shoppingCart = [
    {
        price: 20,
        name: "Gaming Mouse",
        id: 1,
        quantity: 2
    },
    {
        price: 45,
        name: "Cooling Fan",
        id: 2,
        quantity: 4
    },
    {
        price: 405,
        name: "Monitor 4K",
        id: 2,
        quantity: 1
    }
]

console.log("================= BEGIN EX.2 EXTRA =================");

console.log(shoppingCartTotal(shoppingCart));

console.log("================= END EX.2 EXTRA =================");

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

function addToShoppingCart(obj) {
    shoppingCart.push(obj);
    return shoppingCart.length;
}

let newObj = {
    price : 125,
    name : "RAM 16GB",
    id : 3,
    quantity : 2
}

console.log("================= BEGIN EX.3 EXTRA =================");

console.log(`Gli elementi nell'array prima dell'operazione sono ${shoppingCart.length}`);
addToShoppingCart(newObj);
console.log(`Gli elementi nell'array dopo l'operazione sono ${shoppingCart.length}`);

console.log("================= END EX.3 EXTRA =================");

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(arr) {
    let max = 0;
    for (let el of arr) {
        if (el.price > max) {
            max = el.price;
        }
    }
    return max;
}

console.log("================= BEGIN EX.4 EXTRA =================");

console.log(`L'articolo più costoso nell'array costa ${maxShoppingCart(shoppingCart)}`);

console.log("================= END EX.4 EXTRA =================");


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(arr) {
    return arr[arr.length - 1];
}

console.log("================= BEGIN EX.5 EXTRA =================");

console.log("L'ultimo elemento aggiunto è il seguente:");
console.log(latestShoppingCart(shoppingCart));

console.log("================= END EX.5 EXTRA =================");


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(num) {
    let counter = 0;

    while (counter != 3) {
        let rand = Math.floor(Math.random() * 10);
        console.log(rand);
        if (rand > num) {
            counter++;
            if (counter == 3) {
                console.log("Value three times bigger! Breaking the loop..");
                break;
            }
        } else {
            counter = 0;
        }
    }
}

console.log("================= BEGIN EX.6 EXTRA =================");

loopUntil(4);

console.log("================= END EX.6 EXTRA =================");


/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

function average(arr) {
    let num = 0;
    for (let el of arr) {
        if (isNaN(el)) {
            continue;
        } else {
            num += el;
        }
    }
    return num / arr.length;
}

let myNewArr = [1, 4, 7, 22, 89, "html", "css", 43];


console.log("================= BEGIN EX.7 EXTRA =================");

console.log(`La media aritmetica dei numeri dell'array è ${average(myNewArr)}`);

console.log("================= END EX.7 EXTRA =================");


/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

function longest(arr) {
    let len = 0;
    let longStr = "";
    for (el of arr) {
        if (el.length > len) {
            len = el.length;
            longStr = el;
        }
    }
    return longStr;
}

let StrArr = ["Javascript", "Rocks", "But", "Also", "C#", "Does"];

console.log("================= BEGIN EX.8 EXTRA =================");

console.log(`La parola più lunga nell'array è ${longest(StrArr)}`);

console.log("================= END EX.8 EXTRA ================="); 


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

function antiSpam(str) {
    if (str.includes("SPAM") ||  str.includes("SCAM")) {
        return false;
    } else {
        return true;
    }
}

let emailContent = "mymail@spam.it";

console.log("================= BEGIN EX.9 EXTRA =================");

console.log("La mail contiene le parole SPAM o SCAM? " + antiSpam(emailContent));

console.log("================= END EX.9 EXTRA =================");


/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

function checkDate(date) {
    let days = 0;
    let now = new Date();
    if (now.getTime() > date.getTime()) {
        days = (now.getTime() - date.getTime()) / 86400000;
    } else {
        days = (date.getTime() - now.getTime()) / 86400000;
    }
    return days;
}

let pastDate = new Date();
pastDate.setMonth(pastDate.getMonth() + 2);

console.log("================= BEGIN EX.10 EXTRA =================");

console.log(`I giorni passati dalla data specificata sono ${checkDate(pastDate)}`);

console.log("================= END EX.10 EXTRA =================");


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x, y) {
    let arr = [];
    for (let i = 0; i < y; i++) {
        for (let i2 = 0; i2 < x; i2++) {
            arr.push(String(i) + String(i2));
        }
    }
    return arr;
}

console.log("================= BEGIN EX.11 EXTRA =================");

console.log("Matrix generator!");
console.log(matrixGenerator(3, 9));

console.log("================= END EX.11 EXTRA =================");
