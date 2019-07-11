export const testimonials = (testimonialTarget, testimonialBtn) => {
    const elems = document.querySelectorAll(`[data-${testimonialTarget}]`);
    const bullets = document.querySelectorAll(`[data-${testimonialBtn}]`);

    const switchTestimonial = e => {
        let bullet = e.target;
        if(!bullet.dataset[testimonialBtn]) bullet = e.target.parentNode;
        const target = bullet.dataset[testimonialBtn];

        const transition = parseFloat(getComputedStyle(elems[0]).getPropertyValue('transition-duration')) * 1000;
        let toRemove;
        let toActivate;

        elems.forEach((elem, index) => {
            if(elem.classList.contains('active')){
                if(elem.dataset[testimonialTarget] === target) return;
                else toRemove = index;
            }
            if(elem.dataset[testimonialTarget] === target) toActivate = index;
        });
        
        if(Number.isInteger(toRemove) && Number.isInteger(toActivate)){
            execute(elems[toActivate], elems[toRemove], transition);
            bulletsActive(bullets, bullet);
        }
    }

    bullets.forEach(bullet => {
        bullet.addEventListener('click', switchTestimonial);
    });
}

const execute = (toActivate, toRemove, transition = 300) => {
    toRemove.style.opacity = "0";
    toActivate.style.opacity = "0";

    const switchClasses = () => {
        return new Promise(function(resolve) {
            setTimeout(function(){
                toRemove.classList.remove('active');
                toActivate.classList.add('active');
                resolve();
            }, (transition));
        });
    };

    switchClasses().then(result => {
        setTimeout(function(){
            toActivate.style.opacity = "1";
        }, (transition / 2));
    });
}

const bulletsActive = (bullets, activeBullet) => {
    bullets.forEach(elem => {
        if(elem === activeBullet) elem.classList.add('active');
        else elem.classList.remove('active');
    });
}