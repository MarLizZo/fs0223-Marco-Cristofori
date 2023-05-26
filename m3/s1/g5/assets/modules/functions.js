export function createEl(name, classes, text, id) {
    let el = document.createElement(name);
    classes ? classes.forEach((cl) => el.classList.add(cl)) : 0;
    text ? (el.textContent = text) : 0;
    id ? (el.id = id) : 0;
    return el;
}
export function byid(id) {
    return document.getElementById(id);
}
//# sourceMappingURL=functions.js.map