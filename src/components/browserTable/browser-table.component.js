
import template from './browser-table.html';
import componentStyles from './browser-table.style.scss';
import controller from './browser-table.controller';

let browserTableComponent = {
    controller:controller,
    template:template,
    bindings : {
        config: '<',
        versionLimit: '<'
    }
}

export default browserTableComponent;
