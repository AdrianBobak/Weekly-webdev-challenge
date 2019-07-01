const toggleMenu = (e) => {
    let button = e.target;

    if(!button.dataset.target){
        button = button.parentNode;
    }

    const target = document.querySelector(button.dataset.target);

    button.classList.toggle('active');
    target.classList.toggle('active');
}

const menus = document.querySelectorAll('[data-target]');

menus.forEach(menu => {
    menu.addEventListener('click', toggleMenu);
});