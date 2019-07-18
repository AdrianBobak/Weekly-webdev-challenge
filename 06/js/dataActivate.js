export const dataActivate = (selector) => {
    const activators = document.querySelectorAll(`[data-${selector}]`);

    const makeActive = (e) => {
        let target = e.target;
        while(!target.dataset[selector] && target.parentNode) target = target.parentNode;
        
        const items = document.querySelectorAll(target.dataset[selector]);
        items.forEach(item => item.classList.toggle('active')); 
    }

    activators.forEach(activator => {
        activator.addEventListener('click', makeActive);
    });
}