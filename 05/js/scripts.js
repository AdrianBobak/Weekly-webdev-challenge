import {toggler} from './utils/toggler.js';
import {backToTop} from './utils/backToTop.js';
import {portfolio} from './utils/portfolio.js';
import {testimonials} from './utils/testimonials.js';

const loadAll = () => {
    toggler('toggler');
    backToTop('#backToTop');
    portfolio('portfoliocat', 'portfoliotarget');
    testimonials('testimonialtarget', 'testimonialbtn');
}

window.addEventListener('load', loadAll);