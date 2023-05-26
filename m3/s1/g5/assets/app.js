"use strict";
class Smartphone {
    constructor(_carica, _elementsHTML) {
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
        this.registroChiamate = [];
        this.callCounter = 0;
        this.carica = _carica;
        this.elementsHTML = _elementsHTML;
        this.updateHTML();
        this.setupBtns();
    }
    ricarica(euro) {
        var _a;
        this.carica += euro;
        this.updateHTML();
        (_a = this.elementsHTML.errore) === null || _a === void 0 ? void 0 : _a.classList.add("opacity-0");
    }
    get numero404() {
        return `Il tuo credito residuo è di: ${this.carica.toFixed(2)}€`;
    }
    get getNumeroChiamate() {
        return this.registroChiamate.length;
    }
    chiamata(min) {
        var _a, _b;
        let calcolaCosto = this.carica - this.costoMinuto * min;
        if (calcolaCosto > 0) {
            //aggiungi chiamata all'array
            (_a = this.elementsHTML.errore) === null || _a === void 0 ? void 0 : _a.classList.add("opacity-0");
            let now = `${new Date().getDay() + 1}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
            let callDetails = {
                id: this.callCounter,
                durata: min,
                date: now,
            };
            this.callCounter++;
            this.registroChiamate.push(callDetails);
            //setta il nuovo credito
            this.carica -= this.costoMinuto * min;
            this.updateHTML();
        }
        else {
            // errore credito insuff
            (_b = this.elementsHTML.errore) === null || _b === void 0 ? void 0 : _b.classList.remove("opacity-0");
        }
    }
    azzeraChiamate() {
        var _a;
        this.registroChiamate = [];
        this.callCounter = 0;
        this.updateHTML();
        (_a = this.elementsHTML.errore) === null || _a === void 0 ? void 0 : _a.classList.add("opacity-0");
        this.elementsHTML.callsList.innerHTML = "";
    }
    get mostraRegistroChiamate() {
        return this.registroChiamate;
    }
    filtraChiamatePerDataOra(str) {
        var _a;
        (_a = this.elementsHTML.errore) === null || _a === void 0 ? void 0 : _a.classList.add("opacity-0");
        return this.registroChiamate.filter((el) => {
            el.date === str;
        });
    }
    updateHTML() {
        this.elementsHTML.credito.innerText = this.numero404;
        this.elementsHTML.numCalls.innerText = `${this.registroChiamate.length}`;
    }
    setupBtns() {
        var _a, _b, _c, _d;
        //event listeners on btns
        (_a = this.elementsHTML.btnRicarica) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            this.ricarica(5);
        });
        (_b = this.elementsHTML.btnAzzeraChiamate) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            this.azzeraChiamate();
        });
        (_c = this.elementsHTML.btnEffettuaChiamata) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
            this.chiamata(Number(this.elementsHTML.inputMin.value));
            this.elementsHTML.inputMin.value = "";
        });
        (_d = this.elementsHTML.btnMostraRegistro) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
            this.elementsHTML.callsList.innerHTML = "";
            this.mostraRegistroChiamate.forEach((el) => {
                var _a;
                //
                let col = createEl("div", [
                    "col",
                    "text-center",
                    "pb-2",
                    "mb-2",
                    "border-bottom",
                    "border-1",
                    "border-black",
                ]);
                let primo_p = createEl("p", ["m-0"], `ID: ${el.id}`);
                let secondo_p = createEl("p", ["m-0", "mt-1"], `Durata: ${el.durata}`);
                let terzo_p = createEl("p", ["m-0"], `Data: ${el.date}`);
                col.append(primo_p, secondo_p, terzo_p);
                (_a = this.elementsHTML.callsList) === null || _a === void 0 ? void 0 : _a.append(col);
            });
        });
    }
}
function createEl(name, classes, text, id) {
    let el = document.createElement(name);
    classes ? classes.forEach((cl) => el.classList.add(cl)) : 0;
    text ? (el.textContent = text) : 0;
    id ? (el.id = id) : 0;
    return el;
}
function byid(id) {
    return document.getElementById(id);
}
window.onload = function () {
    let els_1 = {
        credito: byid("credito-one"),
        numCalls: byid("num-chiamate-one"),
        callsList: byid("dettagli-chiamate-one"),
        btnRicarica: byid("ric-one"),
        inputMin: byid("num-min-one"),
        btnEffettuaChiamata: byid("call-one"),
        btnMostraRegistro: byid("reg-one"),
        btnAzzeraChiamate: byid("reset-one"),
        errore: byid("err-one"),
    };
    let els_2 = {
        credito: byid("credito-two"),
        numCalls: byid("num-chiamate-two"),
        callsList: byid("dettagli-chiamate-two"),
        btnRicarica: byid("ric-two"),
        inputMin: byid("num-min-two"),
        btnEffettuaChiamata: byid("call-two"),
        btnMostraRegistro: byid("reg-two"),
        btnAzzeraChiamate: byid("reset-two"),
        errore: byid("err-one"),
    };
    let els_3 = {
        credito: byid("credito-three"),
        numCalls: byid("num-chiamate-three"),
        callsList: byid("dettagli-chiamate-three"),
        btnRicarica: byid("ric-three"),
        inputMin: byid("num-min-three"),
        btnEffettuaChiamata: byid("call-three"),
        btnMostraRegistro: byid("reg-three"),
        btnAzzeraChiamate: byid("reset-three"),
        errore: byid("err-three"),
    };
    new Smartphone(5, els_1);
    new Smartphone(15, els_2);
    new Smartphone(50, els_3);
};
//# sourceMappingURL=app.js.map