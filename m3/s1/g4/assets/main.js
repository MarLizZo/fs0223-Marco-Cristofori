import { createEl } from "./modules/functions.js";
let myArr = [];
class Capo {
    constructor(_obj) {
        this.dati = _obj;
        this.CLogga();
        this.creaCols();
    }
    get mostraPrezzo() {
        return this.dati.prezzoivainclusa;
    }
    get getsaldocapo() {
        // ritorna il prezzo scontato
        return (this.dati.prezzoivainclusa * this.dati.saldo) / 100;
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
        let p_1 = createEl("p", ["m-0", "mb-2"], `Nome Capo: ${this.dati.capo}`);
        let p_2 = createEl("p", ["m-0"], `Prezzo: ${this.mostraPrezzo}$`);
        let p_3 = createEl("p", ["m-0"], `Prezzo scontato: ${this.getsaldocapo}$`);
        col.append(p_1, p_2, p_3);
        row === null || row === void 0 ? void 0 : row.appendChild(col);
    }
    CLogga() {
        // console logga
        console.log(`Il capo > ${this.dati.capo} < ha un prezzo di ${this.mostraPrezzo}$ ma con lo sconto del ${this.dati.saldo}% lo paghi solo ${this.getsaldocapo}$!`);
    }
}
function istanziaClassi(obj) {
    let myIstance = new Capo(obj);
    //myArr.push(myIstance);
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