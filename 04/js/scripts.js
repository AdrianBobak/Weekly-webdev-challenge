import {togglerInit} from './navToggler.js';
import {submenuLoader} from './submenuLoader.js';
import Glide from './glide.esm.js';

window.addEventListener('load', togglerInit);
window.addEventListener('load', submenuLoader);

new Glide('.glide', {
    autoplay: 5000,
    animationDuration: 800,
    rewindDuration: 1600
}).mount();