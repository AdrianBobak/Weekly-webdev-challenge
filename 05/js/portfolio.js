export const portfolio = () => {
    const elems = document.querySelectorAll('[data-category]');
    const buttons = document.querySelectorAll('[data-target]');


    elems.forEach((elem, index) => {
        if(index >= 6) elem.classList.add('hidden');
    })

    const showElems = e => {
        let btn = e.target;
        if(!btn.dataset.target){
            btn = e.target.parentNode;
        }

        buttons.forEach(button => {
            button.classList.remove('active');
        });
        
        btn.classList.add('active');

        if(btn.dataset.target == 'all'){
            elems.forEach(elem => {
                elem.classList.remove('hidden');
            })
        } else {
            elems.forEach(elem => {
                if(elem.dataset.category.search(btn.dataset.target) > -1) elem.classList.remove('hidden');
                else elem.classList.add('hidden');
            });
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', showElems);
    });
}