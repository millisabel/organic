import {debounce, isElementInViewport} from "../functions/functions.js";

function textStretchEffect(itemSelector){
    const item = document.querySelector(itemSelector);

    if (!item) return;

    const text = item.textContent.split('');
    item.innerHTML = text.map((char) => `<span style="display: inline-block; transition: transform 0.3s ease-out;">${char}</span>`).join('');

    const charsEl = Array.from(item.children);

    textEffect(charsEl, item);

    window.addEventListener("scroll", debounce(() => textEffect(charsEl, item), 200), { passive: true });
}

export default textStretchEffect;

function textEffect(array, item){
    const color = window.getComputedStyle(item).color;

    if(isElementInViewport(item) ){
        array.forEach((span, i) => {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    span.style.transform = "scaleY(1.4)";
                    span.style.color = "#EFD372";
                }, i * 50);

                setTimeout(() => {
                    span.style.transform = "scaleY(1)";
                    span.style.color = color;
                }, 300 + i * 50);
            });
        });
    }
}