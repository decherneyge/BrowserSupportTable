export default class BrowserTableController {

    constructor() {

    }

    generateSupportDescription(browser) {
        if(!browser.supported) return 'None';
        if(!browser.support.every((version) => version.supported)) return 'Some';

        if(browser.support.length === 1) return browser.support[0].version;

        if(this.fullText) {
            return this.fullText;
        }
        return 'Latest ' + browser.support.length + ' versions';

    };

    hasFullSupport(browser) {
        return browser.supported && browser.support.every((version) => version.supported);
    }


}
