import { debounce } from "../functions/functions.js";

function setupCarousel(carouselSelector) {
    const carousel  = document.querySelector(carouselSelector);
    const minScreenWidth = 768;

    if (!carousel) return;

    let isLargeScreen = window.innerWidth >= minScreenWidth;
    let carouselInstance = null;
    let isEnable = false;

    const carouselProperty = {
        interval: 5000,
        ride: 'carousel',
    }

    if (!isLargeScreen) {
        carouselInstance = new bootstrap.Carousel(carousel, carouselProperty);
        isEnable = true;
    }

    function toggleCarousel() {
        isLargeScreen = window.innerWidth >= minScreenWidth;

        if (isLargeScreen) {
            if (isEnable) {
                console.log('Disabling carousel for large screens');
                carouselInstance.dispose();
                carouselInstance = null;
                isEnable = false;
            }
        }
        else{
            if (!isEnable) {
                console.log('Enabling carousel for small screens');
                carouselInstance = new bootstrap.Carousel(carousel, carouselProperty);
                isEnable = true;
            }
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && isEnable) {
                startAutoSlide(carouselInstance);
            } else {
                stopAutoSlide(carouselInstance);
            }
        });
    }, {
        threshold: 0.5,
    });

    observer.observe(carousel);

    toggleCarousel();

    window.addEventListener('resize', debounce(toggleCarousel, 200));

    return () => {
        observer.disconnect();
        window.removeEventListener('resize', toggleCarousel);
        if (carouselInstance) {
            carouselInstance.dispose(); // Очищаем карусель
        }
    };
}

export default setupCarousel;

function startAutoSlide(carouselInstance) {
    if (carouselInstance) {
        console.log('Starting auto-slide');
        carouselInstance.cycle();
    }
}

function stopAutoSlide(carouselInstance) {
    if (carouselInstance) {
        console.log('Stopping auto-slide');
        carouselInstance.pause();
    }
}

