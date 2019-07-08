export const toggler = () => {

    const toggleItem = (e) => {
        let togglerTarget = e.target.dataset.toggler;
        if(!togglerTarget) togglerTarget = e.target.parentNode.dataset.toggler;

        const elems = document.querySelectorAll(togglerTarget);
        elems.forEach(elem => {
            elem.classList.toggle('active');
        });
    }

    const elems = document.querySelectorAll('[data-toggler]');
    elems.forEach(elem => {
        elem.addEventListener('click', toggleItem);
    });
}