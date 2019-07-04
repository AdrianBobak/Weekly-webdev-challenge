import Glide from './glide.esm.js';

const togglerInit = () => {
    const toggler = (e) => {

        let btn = e.target;
    
        if(!btn.dataset.target){
            btn = e.target.parentNode;
        }
    
        const targets = document.querySelectorAll(btn.dataset.target);
        targets.forEach((target) => {
            target.classList.toggle('active');
        });
    }
    
    const elems = document.querySelectorAll('[data-target]');
    elems.forEach((elem) => {
        elem.addEventListener('click', toggler);
    });
}

window.addEventListener('load', togglerInit);


// SLIDER

new Glide('.glide', {
    autoplay: 5000,
    animationDuration: 800,
    rewindDuration: 1600
}).mount();