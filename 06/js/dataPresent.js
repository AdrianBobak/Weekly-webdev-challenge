export const dataPresent = (allItems, showItems, mobileToggler) => {
    const activators = document.querySelectorAll(`[data-${allItems}]`);
    const mobile = document.querySelector(mobileToggler);

    const makeActive = (e) => {
        let target = e.target;
        while(!target.dataset[allItems] && target.parentNode) target = target.parentNode;

        activators.forEach(item => item.classList.remove('active'));
        target.classList.add('active');
        mobile.textContent = target.textContent;
        
        const items = document.querySelectorAll(target.dataset[allItems]);
        let i = 0;

        if(target.dataset[showItems] === 'all'){
            items.forEach(item => {
                item.style.marginLeft = ''; // important because of productSlider functionality
                window.firstItemPosition = 0; // important because of productSlider functionality

                item.classList.add('active')
                if(i<2) {
                    item.classList.add('mobile-visible');
                    i++;
                } else {
                    item.classList.remove('mobile-visible');
                }
            });
        } else {
            items.forEach(item => {
                item.style.marginLeft = ''; // important because of productSlider functionality
                window.firstItemPosition = 0; // important because of productSlider functionality

                if(item.classList.contains(target.dataset[showItems])){
                    item.classList.add('active');
                    if(i<2) {
                        item.classList.add('mobile-visible');
                        i++;
                    } else {
                        item.classList.remove('mobile-visible');
                    }
                } else {
                    item.classList.remove('active');
                    item.classList.remove('mobile-visible');
                }
            });
        }
    }

    activators.forEach(activator => {
        activator.addEventListener('click', makeActive);
    });
}