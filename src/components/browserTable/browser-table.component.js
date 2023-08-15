
import template from './browser-table.html';
import componentStyles from './browser-table.style.css';
import controller from './browser-table.controller';

let browserTableComponent = {
    controller:controller,
    template:template,
    bindings : {
        config: '<',
        versionLimit: '<',
        showUnsupported: '<'
    }
}

export default browserTableComponent;
