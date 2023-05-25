import { createEl } from "./modules/functions.js";
let myArr = [];
class Capo {
    constructor(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
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
    get mostraPrezzo() {
        return this.prezzoivainclusa;
    }
    get getsaldocapo() {
        // ritorna il prezzo scontato
        return (this.prezzoivainclusa * this.saldo) / 100;
    }
    creaCols() {
        // crea le cols dentro la row
        let row = document.querySelector(".row");
        let col = createEl("div", [
            "col-4",
            "d-flex",
            "flex-column",
            "align-items-center",
            "border-2",
            "border-bottom",
            "border-success",
            "pb-3",
        ]);
        let p_1 = createEl("p", ["m-0", "mb-2"], `Nome Capo: ${this.capo}`);
        let p_2 = createEl("p", ["m-0"], `Prezzo: ${this.mostraPrezzo}$`);
        let p_3 = createEl("p", ["m-0"], `Prezzo scontato: ${this.getsaldocapo}$`);
        col.append(p_1, p_2, p_3);
        row === null || row === void 0 ? void 0 : row.appendChild(col);
    }
    CLogga() {
        // console logga
        console.log(`Il capo > ${this.capo} < ha un prezzo di ${this.mostraPrezzo}$ ma con lo sconto del ${this.saldo}% lo paghi solo ${this.getsaldocapo}$!`);
    }
}
function istanziaClassi(obj) {
    let myIstance = new Capo(obj.id, obj.codprod, obj.collezione, obj.capo, obj.modello, obj.quantita, obj.colore, obj.prezzoivaesclusa, obj.prezzoivainclusa, obj.disponibile, obj.saldo);
    myArr.push(myIstance);
}
window.onload = function () {
    fetch("assets/Abbigliamento.json")
        .then((res) => {
        if (res.ok) {
            return res.json();
        }
        else {
            throw new Error("Errore nel leggere il JSON");
        }
    })
        .then((res) => {
        console.log(res);
        res.forEach((el) => istanziaClassi(el));
        console.log(myArr);
    })
        .catch((err) => console.log(err));
};
//# sourceMappingURL=main.js.map