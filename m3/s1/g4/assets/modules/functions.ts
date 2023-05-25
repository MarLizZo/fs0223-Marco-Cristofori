export function createEl(_tagName: string, _classes?: string[]): HTMLElement {
    let el = document.createElement(_tagName);
    _classes ? _classes.forEach((cl) => el.classList.add(cl)) : 0;
    return el;
}
