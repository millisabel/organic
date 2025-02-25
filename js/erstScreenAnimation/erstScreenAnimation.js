import {isElementInViewport} from "../functions/functions.js";
import printEffect from "../printEffect/printEffect.js";
import showEffect from "../showEffect/showEffect.js";

async function erstScreenAnimation(parentSelector, childSelector, currentSelectorName) {
    const parentEl = document.querySelector(parentSelector);

    if (!parentEl) {
        return;
    }

    const itemsAll = Array.from(parentEl.querySelectorAll(childSelector));

    itemsAll.forEach(item => {
        item.style.opacity = '0';
        item.style.willChange = 'opacity';
    })

    if(!isElementInViewport(parentEl)){
        itemsAll.forEach(item => {
            item.style.opacity = '1';
        })
        return;
    }

    for(let i = 1; i <= itemsAll.length; i++){
        const elem = parentEl.querySelector(`[${currentSelectorName}="${i}"]`);
        if (!elem) continue;
        await setEffect(elem, i);
    }
}

export default erstScreenAnimation;

function setEffect(elem, i) {
    return new Promise((resolve) => {
        switch(i){
            case 1: {
                printEffect(elem, resolve);
                break;
            }
            case 2:
            case 3: {
                showEffect(elem, resolve);
                break;
            }
            default: {
                resolve();
                break;
            }
        }
    })
}