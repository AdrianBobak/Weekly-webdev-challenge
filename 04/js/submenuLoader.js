export const submenuLoader = () => {
    const loadSubmenu = (e) => {
        let data = e.target.dataset.name;
        if(!data) data = e.target.parentNode.dataset.name;
    
        const submenus = document.querySelectorAll('#navChildren [data-parent]');
        submenus.forEach(submenu => {
            if(submenu.dataset.parent.search(data) > -1){
                submenu.classList.remove('hide');
            } else {
                submenu.classList.add('hide');
            }
        });
        
    }
    
    const menus = document.querySelectorAll('#navParent [data-name]');
    menus.forEach(elem => {
        elem.addEventListener('mouseover', loadSubmenu, true);
    })
}