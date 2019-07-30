import {toggler} from './utils/toggler.js';
import {menuContainerToggler} from './utils/menuContainerResizer.js';

const loadAll = () => {
    toggler('toggler');
    menuContainerToggler('#navContainer');
}

window.addEventListener('load', loadAll);