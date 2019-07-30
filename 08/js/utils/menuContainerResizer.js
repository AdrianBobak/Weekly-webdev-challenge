export const menuContainerToggler = (menuContainer) => {

    const target = document.querySelector(menuContainer);

    const resizeIt = () => target.style.width = `${(document.querySelector('html').clientWidth - target.getBoundingClientRect().left)}px`;
    resizeIt();
    window.addEventListener('resize', resizeIt);
}