function showEffect(elem, resolve) {
    elem.style.transition = 'opacity 1s';
    elem.style.opacity = '1';

    setTimeout(() => {
        resolve();
    }, 1000);
}

export default showEffect;

