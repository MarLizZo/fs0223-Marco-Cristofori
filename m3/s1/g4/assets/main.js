// import { createEl } from './modules/functions';
function createEl(_tagName, _classes) {
    var el = document.createElement(_tagName);
    _classes ? _classes.forEach(function (cl) { return el.classList.add(cl); }) : 0;
    return el;
}
var myArr = [];
var Capo = /** @class */ (function () {
    function Capo(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
        this.CLogga();
        this.creaCols();
    }
    Object.defineProperty(Capo.prototype, "mostraPrezzo", {
        get: function () {
            return this.prezzoivainclusa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Capo.prototype, "getsaldocapo", {
        get: function () {
            // ritorna il prezzo scontato
            return (this.prezzoivainclusa * this.saldo) / 100;
        },
        enumerable: false,
        configurable: true
    });
    Capo.prototype.creaCols = function () {
        // crea le cols dentro la row
        var row = document.querySelector(".row");
        var col = createEl("div", [
            "col-4",
            "d-flex",
            "flex-column",
            "align-items-center",
            "border-2",
            "border-bottom",
            "border-success",
            "pb-3",
        ]);
        var p_1 = createEl("p", ["m-0", "mb-2"]);
        p_1.innerText = "Nome Capo: ".concat(this.capo);
        var p_2 = createEl("p", ["m-0"]);
        p_2.innerText = "Prezzo: ".concat(this.mostraPrezzo, "$");
        var p_3 = createEl("p", ["m-0"]);
        p_3.innerText = "Prezzo scontato: ".concat(this.getsaldocapo, "$");
        col.append(p_1, p_2, p_3);
        row === null || row === void 0 ? void 0 : row.appendChild(col);
    };
    Capo.prototype.CLogga = function () {
        // console logga
        console.log("Il capo > ".concat(this.capo, " < ha un prezzo di ").concat(this.mostraPrezzo, "$ ma con lo sconto del ").concat(this.saldo, "% lo paghi solo ").concat(this.getsaldocapo, "$!"));
    };
    return Capo;
}());
function istanziaClassi(obj) {
    var myIstance = new Capo(obj.id, obj.codprod, obj.collezione, obj.capo, obj.modello, obj.quantita, obj.colore, obj.prezzoivaesclusa, obj.prezzoivainclusa, obj.disponibile, obj.saldo);
    myArr.push(myIstance);
}
window.onload = function () {
    fetch("assets/Abbigliamento.json")
        .then(function (res) {
        if (res.ok) {
            return res.json();
        }
        else {
            throw new Error("Errore nel leggere il JSON");
        }
    })
        .then(function (res) {
        console.log(res);
        res.forEach(function (el) { return istanziaClassi(el); });
        console.log(myArr);
    })
        .catch(function (err) { return console.log(err); });
};
