import { createEl } from "./modules/functions.js";

type DatiCapo = {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
};

let myArr: Capo[] = [];

class Capo {
    protected dati: DatiCapo;

    constructor(_obj: DatiCapo) {
        this.dati = _obj;
        this.CLogga();
        this.creaCols();
    }

    get mostraPrezzo(): number {
        return this.dati.prezzoivainclusa;
    }

    get getsaldocapo(): number {
        // ritorna il prezzo scontato
        return (this.dati.prezzoivainclusa * this.dati.saldo) / 100;
    }

    protected creaCols(): void {
        // crea le cols dentro la row
        let row: HTMLElement | null = document.querySelector(".row");
        let col: HTMLElement | null = createEl("div", [
            "col-4",
            "d-flex",
            "flex-column",
            "align-items-center",
            "border-2",
            "border-bottom",
            "border-success",
            "pb-3",
        ]);
        let p_1: HTMLElement = createEl(
            "p",
            ["m-0", "mb-2"],
            `Nome Capo: ${this.dati.capo}`
        );
        let p_2: HTMLElement = createEl(
            "p",
            ["m-0"],
            `Prezzo: ${this.mostraPrezzo}$`
        );
        let p_3: HTMLElement = createEl(
            "p",
            ["m-0"],
            `Prezzo scontato: ${this.getsaldocapo}$`
        );
        col.append(p_1, p_2, p_3);
        row?.appendChild(col);
    }

    protected CLogga(): void {
        // console logga
        console.log(
            `Il capo > ${this.dati.capo} < ha un prezzo di ${this.mostraPrezzo}$ ma con lo sconto del ${this.dati.saldo}% lo paghi solo ${this.getsaldocapo}$!`
        );
    }
}

function istanziaClassi(obj: DatiCapo): void {
    let myIstance: Capo = new Capo(obj);
    myArr.push(myIstance);
}

window.onload = function () {
    fetch("assets/Abbigliamento.json")
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Errore nel leggere il JSON");
            }
        })
        .then((res: DatiCapo[]) => {
            console.log(res);
            res.forEach((el) => istanziaClassi(el));
            console.log(myArr);
        })
        .catch((err) => console.log(err));
};
