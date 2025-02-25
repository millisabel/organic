import {debounce} from "../functions/functions.js";

function waveTextEffect(selector) {

    const minScreenWidth = 1280;

    if (window.innerWidth < minScreenWidth) {
        return;
    }

    let isEnable = false;

    function setHoverEffect(){
        const isLargeScreen = window.innerWidth >= minScreenWidth;

        let items = document.querySelectorAll(selector);

        if (items.length > 0 && isLargeScreen) {
            items.forEach(item => {
                const text = item.textContent.split('');
                item.innerHTML = text.map((char) => `<span style="display: inline-block; transition: transform 0.3s ease-out;">${char}</span>`).join('');
            });
        }

        if (isLargeScreen) {
            if (isEnable) {
                return;
            }

            console.log("Enabling waveEffect");
            items.forEach((element) => {
                if(element.classList.contains('active')) {
                    return;
                }
                element.addEventListener("mouseover", handleMouseOver);
            });

            isEnable = true;
        } else {
            if (!isEnable) {
                return;
            }

            console.log("Remove waveEffect for small screens");
            items.forEach((element) => {
                element.removeEventListener("mouseover", handleMouseOver);
            });

            isEnable = false;
        }
    }

    setHoverEffect();
    window.addEventListener('resize', debounce(setHoverEffect, 200));
}

export default waveTextEffect;

function handleMouseOver(event) {
    waveEffect(event.currentTarget);
}

function waveEffect(element){
    Array.from(element.children).forEach((span, i) => {
        setTimeout(() => {
            span.style.transform = "translateY(-15px)";
        }, i * 50);

        setTimeout(() => {
            span.style.transform = "translateY(0)";
        }, 300 + i * 50);
    });
}