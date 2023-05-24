var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(reddito) {
        this.codredd = 78; //metto 78% perché non so nulla sulla finanza.. :')
        this.tasseINPS = 3599; //tassa fissa iniziale di 3599
        this.tasseIRPEF = 23; //fissa iniziale al 23%
        this.redditoAnnuoLordo = reddito;
    }
    return Lavoratore;
}());
var Calcolo = /** @class */ (function (_super) {
    __extends(Calcolo, _super);
    function Calcolo(reddito) {
        return _super.call(this, reddito) || this;
    }
    Object.defineProperty(Calcolo.prototype, "getUtileTasse", {
        get: function () {
            return (this.redditoAnnuoLordo * 78) / 100;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calcolo.prototype, "getTasseINPS", {
        get: function () {
            this.redditoAnnuoLordo > 46123
                ? (this.tasseINPS = (this.redditoAnnuoLordo * 24) / 100)
                : 0; // setta tassa inps
            return this.tasseINPS;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calcolo.prototype, "getTasseIRPEF", {
        get: function () {
            this.getUtileTasse < 15000 ? 0 : (this.tasseIRPEF = 27); // setta tassa irpef
            return (this.getUtileTasse * this.tasseIRPEF) / 100;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calcolo.prototype, "getRedditoNetto", {
        get: function () {
            return this.redditoAnnuoLordo - this.getTasseINPS - this.getTasseIRPEF;
        },
        enumerable: false,
        configurable: true
    });
    return Calcolo;
}(Lavoratore));
// test iniziale
// let dev = new Calcolo(35000);
// console.log("Utile tasse - " + dev.getUtileTasse);
// console.log("Tassa INPS - " + dev.getTasseINPS);
// console.log("Tassa IRPEF - " + dev.getTasseIRPEF);
// console.log("Reddito Netto - " + dev.getRedditoNetto);
window.onload = function () {
    var _a;
    (_a = document.getElementById("calc-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var inputVal = document.querySelector("input");
        var redd = new Calcolo(Number(inputVal === null || inputVal === void 0 ? void 0 : inputVal.value));
        document.getElementById("inps").textContent = "".concat(String(redd.getTasseINPS), " $");
        document.getElementById("irpef").textContent = "".concat(String(redd.getTasseIRPEF), " $");
        document.getElementById("netto").textContent = "".concat(String(redd.getRedditoNetto), " $");
    });
};
