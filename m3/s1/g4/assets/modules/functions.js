export function createEl(_tagName, _classes, _text) {
    let el = document.createElement(_tagName);
    _classes ? _classes.forEach((cl) => el.classList.add(cl)) : 0;
    _text ? (el.innerText = _text) : 0;
    return el;
}
//# sourceMappingURL=functions.js.map