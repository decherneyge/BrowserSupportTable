import template from './browser-checklist.html';
import styles from './browser-checklist.scss';
import controller from './browser.checklist.controller';



let browserListComponent = {
    bindings :  {
        browser: '<',
        versionLimit: '<',
        onUpdated: '&?'
    },
    template,
    controller
}

export default browserListComponent;
