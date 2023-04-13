
/* ESERCIZIO 1
    Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function () {
    document.querySelector('h1').textContent = "Javascript DOM Manipulation!";
}

changeTitle();

/* ESERCIZIO 2
    Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    document.querySelector('h1').classList.add('myHeading');
}

addClassToTitle();

/* ESERCIZIO 3
    Scrivi una funzione per che cambi il testo dei p figli di un div
    */

const changePcontent = function () {
    let pArr = document.querySelectorAll('div p');
    for (let el of pArr) {
    el.textContent = "Testo modificato tramite JavaScript. Parkour!!";
    }
}

changePcontent();

/* ESERCIZIO 4
    Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
    */

const changeUrls = function () {
    let aArr = document.querySelectorAll('a:not(footer a)');
    for (let a of aArr) {
    a.href = "https://www.google.com";
    }
}

changeUrls();

/* ESERCIZIO 5
    Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
    let uArr = document.querySelectorAll('ul');
    let newL = document.createElement('li');
    newL.textContent = "4th";
    uArr[1].append(newL);
}

addToTheSecond();

/* ESERCIZIO 6
    Scrivi una funzione che aggiunga un secondo paragrafo al primo div
*/

const addParagraph = function () {
    let fDiv = document.querySelector('div');
    let newP = document.createElement('p');
    newP.textContent = "Paragrafo creato con Javascript. Parkour!!"
    fDiv.append(newP);
}

addParagraph();

/* ESERCIZIO 7
    Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    document.querySelector('ul').style.display = 'none';
}

hideFirstUl();

/* ESERCIZIO 8 
    Scrivi una funzione che renda verde il background di ogni lista non ordinata
    */

const paintItGreen = function () {
    let uArr = document.querySelectorAll('ul');
    uArr.forEach((v) => v.style.backgroundColor = "green");
}

paintItGreen();

/* ESERCIZIO 9
    Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
    */

let myH1 = document.querySelector('h1');

const makeItClickable = function () {
    myH1.textContent = myH1.textContent.substring(0, myH1.textContent.length - 1);
}

myH1.addEventListener('click', makeItClickable);


/* ESERCIZIO 10
    Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

let myFooter = document.querySelector('footer');

const revealFooterLink = function () {
    let myA = myFooter.querySelector('a');
    alert(myA.href);
}

myFooter.addEventListener('click', revealFooterLink);

/* ESERCIZIO 11
    Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
    La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

function genTrTd(val) {
    return val == "tr" ? document.createElement('tr') : document.createElement('td')
}

const generateTable = function () {
    let tDiv = document.querySelector('#tableArea');
    let table = document.createElement('table');
    table.createTHead();
    table.createTBody();

    //create heading
    let myTHead = table.querySelector('thead');
    let fTr = document.createElement('tr');
    myTHead.append(fTr);

    let myTHeadTr = table.querySelector('thead tr');
    for (let i = 0; i < 4; i++) {
        let td = genTrTd('td');
        td.style.borderBottom = "1px solid #FF00D6";
        myTHeadTr.append(td);
    }

    //fill heading
    let tHs = table.querySelectorAll('thead td');
    tHs[0].textContent = 'Immagine';
    tHs[1].textContent = 'Nome prodotto';
    tHs[2].textContent = 'Quantità';
    tHs[3].textContent = 'Prezzo';
    //console.log(tHs);


    //table body
    let myTBody = table.querySelector('tbody');
    for (let i = 0; i < 5; i++) {
        let myTr = document.createElement('tr');
        myTBody.append(myTr);
        for (let x = 0; x < 4; x++) {
            let myTd = document.createElement('td');
            myTd.textContent = "Testo per test... Parkour!!"
            myTd.style.borderBottom = "1px solid #FF00D6";
            let actualTr = myTBody.querySelectorAll('tr');
            actualTr[i].append(myTd);
        }
    }
    //console.log(myTBody);

    //finally add the table to the html
    table.style.width = "100%";
    table.style.textAlign = "center";
    table.style.border = "1px solid #FF00D6";
    tDiv.append(table);
}

generateTable();

/* ESERCIZIO 12
    Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () {
    let tableB = document.querySelector('#tableArea table tbody');
    let newTr = genTrTd('tr');
    tableB.append(newTr);
    let tableBTr = tableB.querySelector('tr:last-child');
    for (let i = 0; i < 4; i++) {
        let newTd = genTrTd('td');
        newTd.textContent = "Un'altra riga aggiunta.. Parkour!!"
        tableBTr.append(newTd);
    }
}

addRow();

/* ESERCIZIO 14
    Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

let table = document.getElementById('tableArea');

function hideAllImages() {
    let imgs = table.querySelectorAll('tbody tr td:first-child');
    console.log(imgs);
    imgs.forEach(val => val.style.textContent = "Parkour!!");
}

table.addEventListener('click', hideAllImages);


/* EXTRA ESERCIZIO 15
    Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

function getRandomColor() {
    return Math.floor(Math.random() * 256);
}

let myH2 = document.querySelector('#changeMyColor');

const changeColorWithRandom = function () {
    myH2.style.color = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}

myH2.addEventListener('click', changeColorWithRandom);

/* EXTRA ESERCIZIO 16
    Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let myArr = document.querySelectorAll('h1, h2, h3, p, a, li');

    myArr.forEach(val => {
        let subsArr = val.textContent.split("");
        subsArr.forEach((char, i) => {
            for (let x = 0; x < vowels.length; x++) {
                if (char == vowels[x]) {
                    subsArr.splice(i, 1);
                }
            }
        })
        //console.log(subsArr);
    })
}

deleteVowels();