import setupCarousel from "./carouselStatic/carouselStatic.js";
import waveTextEffect from "./waveTextEffect/waveTextEffect.js";
import erstScreenAnimation from "./erstScreenAnimation/erstScreenAnimation.js";
import textStretchEffect from "./textStretchEffect/textStretchEffect.js";
import animations from "./animations/animations.js";

erstScreenAnimation(
    '[data-effect ="erstScreen"]',
    '[data-effect]',
    'data-effect-order',
);
textStretchEffect("[data-effect ='textStretchEffect']");
setupCarousel('#carouselStatistic');
waveTextEffect("[data-effect ='wave']");
animations("[data-animation]");



