export const productSlider = (cont, item) => {
    const container = document.querySelector(cont);
    let products = document.querySelectorAll(`${item}.active`);

    const firstItemInitialPosition = parseInt(window.getComputedStyle(products[0]).marginLeft);
    let mouseInitialPosition;
    window.firstItemPosition = firstItemInitialPosition;

    const mouseUp = () => {
        window.removeEventListener('mouseup', mouseUp);
        window.removeEventListener('touchend', mouseUp);
        window.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('touchmove', mouseMove);
        firstItemPosition = parseInt(window.getComputedStyle(products[0]).marginLeft);
        setTimeout(function(){
            window.removeEventListener('click', mouseClick);
        }, 30);
    }

    const mouseDown = (e) => {
        e.preventDefault();
        if(screen.width < 640) return;

        products = document.querySelectorAll(`${item}.active`);
        let clientX = e.clientX;
        if(!clientX) clientX = e.touches[0].clientX;
        mouseInitialPosition = clientX;
        window.addEventListener('mouseup', mouseUp);
        window.addEventListener('touchend', mouseUp);
        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('touchmove', mouseMove);
    }

    const mouseClick = (e) => {
        e.preventDefault();
    }

    const mouseMove = (e) => {
        let clientX = e.clientX;
        if(!clientX) clientX = e.touches[0].clientX;
        const moveValue = clientX - mouseInitialPosition;
        products[0].style.marginLeft = `${firstItemPosition + moveValue}px`;
        checkIfPropper();
        window.addEventListener('click', mouseClick);
    }

    const checkIfPropper = () => {
        const currentMargin = parseInt(products[0].style.marginLeft);
        if(currentMargin > firstItemInitialPosition) products[0].style.marginLeft = `${firstItemInitialPosition}px`;
        else {
            const containerValues = window.getComputedStyle(container);
            const maxBounding = parseInt(containerValues.getPropertyValue('width')) - parseInt(containerValues.getPropertyValue('padding-right'));
            const lastItemBounding = products[products.length -1].getBoundingClientRect().right;
            const currentBounding = lastItemBounding - maxBounding;
            if(currentBounding < 0) products[0].style.marginLeft = `${(parseInt(products[0].style.marginLeft) - currentBounding)}px`
        }
    }

    container.addEventListener('mousedown', mouseDown);
    container.addEventListener('touchstart', mouseDown);
}