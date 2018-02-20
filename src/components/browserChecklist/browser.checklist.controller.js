

export default class BrowserListController {

    constructor(CommonService) {
        this.id = CommonService.guid();
    }


    $onChanges(changes) {
        if (changes.browser) {
            this.browser = angular.copy(this.browser);

        }
        if (changes.versionLimit) {
            this.versionLimit = angular.copy(this.versionLimit);
        }
    };


    updateBrowser() {
        let updated = angular.copy(this.browser);

        if (this.onUpdated) {
            this.onUpdated({updatedBrowser: updated});
        }

    }

}