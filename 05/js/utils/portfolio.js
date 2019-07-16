export const portfolio = (dataCategory, dataTarget) => {
    const elems = document.querySelectorAll(`[data-${dataCategory}]`);
    const buttons = document.querySelectorAll(`[data-${dataTarget}]`);

    
    elems.forEach((elem, index) => {
        if(index >= 6) elem.classList.add('hidden');
    })

    const showElems = e => {
        let btn = e.target;
        if(!btn.dataset[dataTarget]){
            btn = e.target.parentNode;
        }

        buttons.forEach(button => {
            button.classList.remove('active');
        });
        
        btn.classList.add('active');

        if(btn.dataset[dataTarget] == 'all'){
            elems.forEach(elem => {
                elem.classList.remove('hidden');
            })
        } else {
            elems.forEach(elem => {
                if(elem.dataset[dataCategory].search(btn.dataset[dataTarget]) > -1) elem.classList.remove('hidden');
                else elem.classList.add('hidden');
            });
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', showElems);
    });
}