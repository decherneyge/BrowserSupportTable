import template from './browser-checklist.html';
import styles from './browser-checklist.css';
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
