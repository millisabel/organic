function animations(itemSelector) {
    const itemsElAll = document.querySelectorAll(itemSelector);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const item = entry.target;
            const animationClassMap = new Map([
                ['shiftLeft', 'animate-shift-left'],
                ['shiftRight', 'animate-shift-right'],
                ['showText', 'animate-show-text'],
                ['scale', 'animate-scale']
            ]);

            item.classList.add('animate');
            const animationClass = animationClassMap.get(item.dataset.animation);

            if (animationClass) {
                item.classList.add(animationClass);
                setAnimationDelay(item);
            } else {
                item.style.opacity = '1';
            }

            observer.unobserve(item);
        })
    }, { threshold: 0.3 });

    itemsElAll.forEach(item => observer.observe(item));
}

export default animations;


function setAnimationDelay(item) {
    if(item.dataset.animationDelay) {
        item.style.animationDelay = item.dataset.animationDelay;
    }
}