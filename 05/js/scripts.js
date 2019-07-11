import {toggler} from './toggler.js';
import {backToTop} from './backToTop.js';
import {portfolio} from './portfolio.js';
import {testimonials} from './testimonials.js';

const loadAll = () => {
    toggler('toggler');
    backToTop('#backToTop');
    portfolio('portfoliocat', 'portfoliotarget');
    testimonials('testimonialtarget', 'testimonialbtn');
}

window.addEventListener('load', loadAll);