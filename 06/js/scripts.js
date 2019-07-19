import {dataActivate} from './dataActivate.js';
import Glide from './glide.esm.js';

window.addEventListener('load', function(){
    dataActivate('activate'); // argument: name of dataset
});

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
}).mount();