function printEffect(textEl, resolve) {
    if (!textEl) return resolve();
    const string = textEl.textContent.trim();
    textEl.textContent = "";
    textEl.style.opacity = '1';
    let i = 0;

    function type() {
        if (i < string.length) {
            textEl.textContent = string.slice(0, ++i);
            setTimeout(type, 150);
        } else {
            resolve();
        }
    }
    type();
}

export default printEffect;