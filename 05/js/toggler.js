export const toggler = (dataName) => {

    const toggleItem = (e) => {
        let togglerTarget = e.target.dataset[dataName];
        if(!togglerTarget) togglerTarget = e.target.parentNode.dataset[dataName];

        const elems = document.querySelectorAll(togglerTarget);
        elems.forEach(elem => {
            elem.classList.toggle('active');
        });
    }

    const elems = document.querySelectorAll(`[data-${dataName}]`);
    elems.forEach(elem => {
        elem.addEventListener('click', toggleItem);
    });
}