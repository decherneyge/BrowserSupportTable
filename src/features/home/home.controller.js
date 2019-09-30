


export default class HomeController {
    constructor(CommonService){
        this.id = CommonService.guid();
        this.showUnsupported = true;
        this.versionLimit = 5;
        this._checkedBrowsers = [
            {
                name: 'IE',
                supported: true,
                image: require('../../../node_modules/@browser-logos/internet-explorer_9-11/internet-explorer_9-11_128x128.png'),
                support: [
                    {version: '11', supported: true},
                    {version: '10', supported: false},
                    {version: '9', supported: false},
                    {version: '8', supported: false}
                ]
            },
            {
                name: 'Edge',
                supported: true,
                image: require('../../../node_modules/@browser-logos/edge/edge_128x128.png'),
                support: [
                    {version: '18', supported: true},
                    {version: '17', supported: true},
                    {version: '16', supported: true},
                    {version: '15', supported: true},
                    {version: '14', supported: true},
                    {version: '13', supported: true},
                    {version: '12', supported: true}
                ]

            },
            {
                name: 'FireFox',
                supported: true,
                image: require('../../../node_modules/@browser-logos/firefox/firefox_128x128.png'),
                support: [
                    {version: "71", supported: true},
                    {version: "70", supported: true},
                    {version: "69", supported: true},
                    {version: "68", supported: true},
                    {version: "67", supported: true},
                    {version: "66", supported: true},
                    {version: "65", supported: true},
                    {version: "64", supported: true},
                    {version: "63", supported: true},
                    {version: "62", supported: true},
                    {version: "61", supported: true},
                    {version: "60", supported: true},
                    {version: "59", supported: true},
                    {version: "58", supported: true},
                    {version: "57", supported: true},
                    {version: "56", supported: true},
                    {version: "55", supported: true},
                    {version: "54", supported: true},
                    {version: "53", supported: true},
                    {version: "52", supported: true},
                    {version: "51", supported: true},
                    {version: "50", supported: true},
                    {version: "49", supported: true},
                    {version: "48", supported: true},
                    {version: "47", supported: true},
                    {version: "46", supported: true},
                    {version: "45", supported: true},
                    {version: "44", supported: true},
                    {version: "43", supported: true},
                    {version: "42", supported: true},
                    {version: "41", supported: true},
                    {version: "40", supported: true},
                    {version: "39", supported: true},
                    {version: "38", supported: true},
                    {version: "37", supported: true},
                    {version: "36", supported: true},
                    {version: "35", supported: true},
                    {version: "34", supported: true},
                    {version: "33", supported: true},
                    {version: "32", supported: true},
                    {version: "31", supported: true},
                    {version: "30", supported: true},
                ]
            },
            {
                name: 'Chrome',
                supported: true,
                image: require('../../../node_modules/@browser-logos/chrome/chrome_128x128.png'),
                support: [
                    {version: "80", supported: true},
                    {version: "79", supported: true},
                    {version: "78", supported: true},
                    {version: "77", supported: true},
                    {version: "76", supported: true},
                    {version: "75", supported: true},
                    {version: "74", supported: true},
                    {version: "73", supported: true},
                    {version: "72", supported: true},
                    {version: "71", supported: true},
                    {version: "70", supported: true},
                    {version: "69", supported: true},
                    {version: "68", supported: true},
                    {version: "67", supported: true},
                    {version: "66", supported: true},
                    {version: "65", supported: true},
                    {version: "64", supported: true},
                    {version: "63", supported: true},
                    {version: "62", supported: true},
                    {version: "61", supported: true},
                    {version: "60", supported: true},
                    {version: "59", supported: true},
                    {version: "58", supported: true},
                    {version: "57", supported: true},
                    {version: "56", supported: true},
                    {version: "55", supported: true},
                    {version: "54", supported: true},
                    {version: "53", supported: true},
                    {version: "52", supported: true},
                    {version: "51", supported: true},
                    {version: "50", supported: true},
                    {version: "49", supported: true},
                    {version: "48", supported: true},
                    {version: "47", supported: true},
                    {version: "46", supported: true},
                    {version: "45", supported: true},
                    {version: "44", supported: true},
                    {version: "43", supported: true},
                    {version: "42", supported: true},
                    {version: "41", supported: true},
                    {version: "40", supported: true},
                    {version: "39", supported: true},
                    {version: "38", supported: true},
                    {version: "37", supported: true},
                    {version: "36", supported: true},
                    {version: "35", supported: true},
                    {version: "34", supported: true},
                    {version: "33", supported: true},
                    {version: "32", supported: true},
                    {version: "31", supported: true},
                    {version: "30", supported: true},
                ]
            },
            {
                name: 'Safari',
                supported: true,
                image: require('../../../node_modules/@browser-logos/safari/safari_128x128.png'),
                support: [
                    {version: "13.1", supported: true},
                    {version: "13", supported: true},
                    {version: "12.1", supported: true},
                    {version: "12", supported: true},
                    {version: "11.1", supported: true},
                    {version: "11", supported: true},
                    {version: "10.1", supported: true},
                    {version: "10", supported: true},
                    {version: "9.1", supported: true},
                    {version: "9", supported: true},
                    {version: "8", supported: true},
                    {version: "7.1", supported: true},
                    {version: "7", supported: true},
                    {version: "6.1", supported: true},
                    {version: "6", supported: true},
                    {version: "5.1", supported: true},
                    {version: "5", supported: true},
                    {version: "4", supported: true},
                ]
            },
            {
                name: 'Opera',
                supported: true,
                image: require('../../../node_modules/@browser-logos/opera/opera_128x128.png'),
                support: [
                    {version: "62", supported: true},
                    {version: "61", supported: true},
                    {version: "60", supported: true},
                    {version: "59", supported: true},
                    {version: "58", supported: true},
                    {version: "57", supported: true},
                    {version: "56", supported: true},
                    {version: "55", supported: true},
                    {version: "54", supported: true},
                    {version: "53", supported: true},
                    {version: "52", supported: true},
                    {version: "51", supported: true},
                    {version: "50", supported: true},
                    {version: "49", supported: true},
                    {version: "48", supported: true},
                    {version: "47", supported: true},
                    {version: "46", supported: true},
                    {version: "45", supported: true},
                    {version: "44", supported: true},
                    {version: "43", supported: true},
                    {version: "42", supported: true},
                    {version: "41", supported: true},
                    {version: "40", supported: true},
                    {version: "39", supported: true},
                    {version: "38", supported: true},
                    {version: "37", supported: true},
                    {version: "36", supported: true},
                    {version: "35", supported: true},
                    {version: "34", supported: true},
                    {version: "33", supported: true},
                    {version: "32", supported: true},
                    {version: "31", supported: true},
                    {version: "30", supported: true},
                ]
            }

        ];
        this.checkedBrowsers = angular.copy(this._checkedBrowsers);
    }

    $onInit(){

    }

    updateBrowser(updatedBrowser) {

        this.checkedBrowsers.forEach((checkedBrowser) => {
            if (checkedBrowser.name === updatedBrowser.name) {
                checkedBrowser.support = updatedBrowser.support;
                checkedBrowser.supported = updatedBrowser.supported;
            }
        });

    }

    updateVersionLimit() {

    }

}

