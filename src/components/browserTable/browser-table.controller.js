export default class BrowserTableController {

    constructor() {

    }

    generateSupportDescription(browser) {
        return browser.supported && browser.support.every((version) => version.supported) ? `Latest ${browser.support.length} Version` : browser.supported && browser.support.some((version) => version.supported) ? 'Some' : 'None';
    };

    hasFullSupport(browser) {
        return browser.supported && browser.support.every((version) => version.supported);
    }


}
