import {dataActivate} from './dataActivate.js';
import {dataPresent} from './dataPresent.js';
import {mobileShow} from './mobileShow.js';
import {productSlider} from './productSlider.js';
import Glide from './glide.esm.js';

window.addEventListener('load', function(){
    dataActivate('activate'); // argument: name of dataset
    dataPresent('items', 'show', '.products__toggler span'); // arg1: all items, arg2: items that we want to show by clicking, arg3: class of mobile toggler
    mobileShow('#showMobile', 'mobile');
    productSlider('.products__container', '.products__slide');
});

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
}).mount();