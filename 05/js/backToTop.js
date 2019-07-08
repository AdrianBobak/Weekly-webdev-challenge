export const backToTop = () => {

    const scroller = (value) => {
        window.scroll(0, (window.pageYOffset - value));
    }

    const interval = () => {
        const offset = window.pageYOffset;

        if(offset > 300) scroller(100);
        if(offset > 360) scroller(50);
        if(offset > 200) scroller(30);
        if(offset > 100) scroller(20);
        if(offset > 50) scroller(10);
        if(offset > 6) scroller(5);
        else {
            scroller(offset);
            return;
        }
        
        setTimeout(interval, 30)
    }

    const btn = document.querySelector('#backToTop');
    btn.addEventListener('click', interval);
}