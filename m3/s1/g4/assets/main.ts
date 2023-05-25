// import { createEl } from './modules/functions';

function createEl(_tagName: string, _classes?: string[]): HTMLElement {
    let el = document.createElement(_tagName);
    _classes ? _classes.forEach((cl) => el.classList.add(cl)) : 0;
    return el;
}
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

let myArr: DatiCapo[] = [];

class Capo implements DatiCapo {
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

    constructor(
        _id: number,
        _codprod: number,
        _collezione: string,
        _capo: string,
        _modello: number,
        _quantita: number,
        _colore: string,
        _prezzoivaesclusa: number,
        _prezzoivainclusa: number,
        _disponibile: string,
        _saldo: number
    ) {
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

    get mostraPrezzo(): number {
        return this.prezzoivainclusa;
    }

    get getsaldocapo(): number {
        // ritorna il prezzo scontato
        return (this.prezzoivainclusa * this.saldo) / 100;
    }

    creaCols(): void {
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
        let p_1: HTMLElement = createEl("p", ["m-0", "mb-2"]);
        p_1.innerText = `Nome Capo: ${this.capo}`;
        let p_2: HTMLElement = createEl("p", ["m-0"]);
        p_2.innerText = `Prezzo: ${this.mostraPrezzo}$`;
        let p_3: HTMLElement = createEl("p", ["m-0"]);
        p_3.innerText = `Prezzo scontato: ${this.getsaldocapo}$`;
        col.append(p_1, p_2, p_3);
        row?.appendChild(col);
    }

    CLogga(): void {
        // console logga
        console.log(
            `Il capo > ${this.capo} < ha un prezzo di ${this.mostraPrezzo}$ ma con lo sconto del ${this.saldo}% lo paghi solo ${this.getsaldocapo}$!`
        );
    }
}

function istanziaClassi(obj: DatiCapo): void {
    let myIstance = new Capo(
        obj.id,
        obj.codprod,
        obj.collezione,
        obj.capo,
        obj.modello,
        obj.quantita,
        obj.colore,
        obj.prezzoivaesclusa,
        obj.prezzoivainclusa,
        obj.disponibile,
        obj.saldo
    );
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
