export const mobileShow = (btn, selector) => {
    const button = document.querySelector(btn);

    const showItems = (e) => {
        let target = e.target;
        while(!target.dataset[selector] && target.parentNode) target = target.parentNode;

        const items = document.querySelectorAll(target.dataset[selector]);
        let i = 0;
        items.forEach(item => {
            if(item.classList.contains('active') && !(item.classList.contains('mobile-visible')) && i<2){
                item.classList.add('mobile-visible');
                i++;
            }
        });
    }

    button.addEventListener('click', showItems)
}