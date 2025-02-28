import setupCarousel from "./carouselStatic/carouselStatic.js";
import erstScreenAnimation from "./erstScreenAnimation/erstScreenAnimation.js";
import animations from "./animations/animations.js";

erstScreenAnimation(
    '[data-effect ="erstScreen"]',
    '[data-effect]',
    'data-effect-order',
);
setupCarousel('#carouselStatistic');
animations("[data-animation]");



