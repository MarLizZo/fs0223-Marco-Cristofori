var operation = "+";
var str = "Il risultato è ";

function operationChanged() {
    var op = document.getElementById('operations');
    var choice = op.options[op.selectedIndex].text;
    if (choice == "Addizione") {
        document.getElementById('js-op').innerHTML = "+";
        operation = "+";
    } else if (choice == "Sottrazione") {
        document.getElementById('js-op').innerHTML = "-";
        operation = "-";
    } else if (choice == "Moltiplicazione") {
        document.getElementById('js-op').innerHTML = "*";
        operation = "*";
    } else if (choice == "Divisione") {
        document.getElementById('js-op').innerHTML = "/";
        operation = "/";
    }
}

function jsDoOperation() {
    var el_1 = document.getElementById('user-input').value;
    var el_2 = document.getElementById('user-input-2').value;
    if (operation == "+") {
        document.getElementById('js-result').innerHTML= str +  (Number(el_1) + Number(el_2));
    } else if (operation == "-") {
        document.getElementById('js-result').innerHTML= str +  (Number(el_1) - Number(el_2));
    } else if (operation == "*") {
        document.getElementById('js-result').innerHTML= str +  (Number(el_1) * Number(el_2));
    } else if (operation == "/") {
        document.getElementById('js-result').innerHTML= str +  (Number(el_1) / Number(el_2));
    }
}