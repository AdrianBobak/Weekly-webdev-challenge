export const dataActivate = (selector) => {
    const activators = document.querySelectorAll(`[data-${selector}]`);

    const makeActive = (e) => {
        let target = e.target.dataset[selector];
        if(!target) target = e.target.parentNode.dataset[selector];
        
        const items = document.querySelectorAll(target);
        items.forEach(item => item.classList.toggle('active')); 
    }

    activators.forEach(activator => {
        activator.addEventListener('click', makeActive);
    });
}