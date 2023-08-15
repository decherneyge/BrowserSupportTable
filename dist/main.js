webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _browserChecklist = __webpack_require__(101);

var _browserChecklist2 = _interopRequireDefault(_browserChecklist);

var _browserChecklist3 = __webpack_require__(102);

var _browserChecklist4 = _interopRequireDefault(_browserChecklist3);

var _browserChecklist5 = __webpack_require__(104);

var _browserChecklist6 = _interopRequireDefault(_browserChecklist5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var browserListComponent = {
    bindings: {
        browser: '<',
        versionLimit: '<',
        onUpdated: '&?'
    },
    template: _browserChecklist2.default,
    controller: _browserChecklist6.default
};

exports.default = browserListComponent;

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <b><browser-check-box name=\"{{$ctrl.browser.name}}\" ng-model=\"$ctrl.browser.supported\" ng-change=\"$ctrl.updateBrowser()\"></browser-check-box></b>\r\n    <ul class=\"list-unstyled\" style=\"margin-left:15px;\">\r\n        <li ng-repeat=\"supportedVersion in $ctrl.browser.support  | limitTo: $ctrl.versionLimit\">\r\n            <browser-check-box name=\"{{supportedVersion.version}}\" ng-model=\"supportedVersion.supported\" ng-change=\"$ctrl.updateBrowser()\"></browser-check-box>\r\n\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BrowserListController = function () {
    function BrowserListController(CommonService) {
        _classCallCheck(this, BrowserListController);

        this.id = CommonService.guid();
    }

    _createClass(BrowserListController, [{
        key: "$onChanges",
        value: function $onChanges(changes) {
            if (changes.browser) {
                this.browser = angular.copy(this.browser);
            }
            if (changes.versionLimit) {
                this.versionLimit = angular.copy(this.versionLimit);
            }
        }
    }, {
        key: "updateBrowser",
        value: function updateBrowser() {
            var updated = angular.copy(this.browser);

            if (this.onUpdated) {
                this.onUpdated({ updatedBrowser: updated });
            }
        }
    }]);

    return BrowserListController;
}();

exports.default = BrowserListController;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _browserTable = __webpack_require__(106);

var _browserTable2 = _interopRequireDefault(_browserTable);

var _browserTableStyle = __webpack_require__(107);

var _browserTableStyle2 = _interopRequireDefault(_browserTableStyle);

var _browserTable3 = __webpack_require__(108);

var _browserTable4 = _interopRequireDefault(_browserTable3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var browserTableComponent = {
    controller: _browserTable4.default,
    template: _browserTable2.default,
    bindings: {
        config: '<',
        versionLimit: '<',
        showUnsupported: '<',
        fullText: '<'
    }
};

exports.default = browserTableComponent;

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports = "<table class=\"table text-center\">\r\n    <thead>\r\n    <tr>\r\n        <th ng-repeat=\"browser in $ctrl.config\" ng-show=\"browser.supported || $ctrl.showUnsupported\">{{browser.name}}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n        <td ng-repeat=\"browser in $ctrl.config\" ng-class=\"{'bg-danger':!$ctrl.hasFullSupport(browser)}\" ng-show=\"browser.supported || $ctrl.showUnsupported\">\r\n            <img ng-src=\"{{browser.image}}\" alt=\"{{browser.name}}\">\r\n            <hr>\r\n            <p  >{{$ctrl.generateSupportDescription(browser)}}</p>\r\n            <hr>\r\n            <ul class=\"list-unstyled\">\r\n                <li ng-repeat=\"support in browser.support | limitTo:$ctrl.versionLimit\"\r\n                    ng-class=\"{'bg-danger':! browser.supported && support.supported}\">{{support.version}}\r\n                </li>\r\n            </ul>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BrowserTableController = function () {
    function BrowserTableController() {
        _classCallCheck(this, BrowserTableController);
    }

    _createClass(BrowserTableController, [{
        key: 'generateSupportDescription',
        value: function generateSupportDescription(browser) {
            if (!browser.supported) return 'None';
            if (!browser.support.every(function (version) {
                return version.supported;
            })) return 'Some';

            if (browser.support.length === 1) return browser.support[0].version;

            if (this.fullText) {
                return this.fullText;
            }
            return 'Latest ' + browser.support.length + ' versions';
        }
    }, {
        key: 'hasFullSupport',
        value: function hasFullSupport(browser) {
            return browser.supported && browser.support.every(function (version) {
                return version.supported;
            });
        }
    }]);

    return BrowserTableController;
}();

exports.default = BrowserTableController;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BrowserCheckboxController = function () {
    function BrowserCheckboxController(CommonService) {
        _classCallCheck(this, BrowserCheckboxController);

        this.id = CommonService.guid();
    }

    _createClass(BrowserCheckboxController, [{
        key: 'ngModelChange',
        value: function ngModelChange() {
            this.ngModelCtrl.$setViewValue(this.ngModel);
        }
    }]);

    return BrowserCheckboxController;
}();

var browserCheckboxComponent = {
    bindings: {
        name: '@',
        ngModel: '<'

    },
    require: { ngModelCtrl: 'ngModel' },
    controller: BrowserCheckboxController,
    template: '<div class="form-check">\n            <input name="$ctrl.name" type="checkbox" class="form-check-input" id="check-{{$ctrl.id}}" ng-model=\'$ctrl.ngModel\' ng-change="$ctrl.ngModelChange()">\n            <label class="form-check-label" for="check-{{$ctrl.id}}">{{$ctrl.name}}</label>\n        </div>'
};

exports.default = browserCheckboxComponent;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileSaver = __webpack_require__(63);

var DomImageController = function () {
    function DomImageController($q, CommonService) {
        _classCallCheck(this, DomImageController);

        this.$q = $q;
        this.CommonService = CommonService;

        if (!HTMLCanvasElement.prototype.toBlob) {
            Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
                value: function value(callback, type, quality) {
                    var canvas = this;
                    setTimeout(function () {
                        var binStr = atob(canvas.toDataURL(type, quality).split(',')[1]),
                            len = binStr.length,
                            arr = new Uint8Array(len);

                        for (var i = 0; i < len; i++) {
                            arr[i] = binStr.charCodeAt(i);
                        }

                        callback(new Blob([arr], { type: type || 'image/png' }));
                    });
                }
            });
        }
    }

    _createClass(DomImageController, [{
        key: '$onInit',
        value: function $onInit() {
            this.id = this.CommonService.guid();
        }
    }, {
        key: '$onChanges',
        value: function $onChanges(changes) {
            if (changes.srcId) {

                this.updateImage();
            }
        }
    }, {
        key: '$postLink',
        value: function $postLink() {
            if (this.srcId) {
                this.updateImage();
            }
        }
    }, {
        key: 'updateImage',
        value: function updateImage() {
            var _this = this;

            var src = document.getElementById(this.srcId);

            var canvas = document.getElementById('canvas-' + this.id);
            if (!canvas) {
                console.log("Couldn't find canvas");

                setTimeout(function () {
                    _this.updateImage();
                }, 1000);
                return;
            }
            if (this.isUpdatingImage) {
                return;
            }

            this.isUpdatingImage = true;

            this.computedStyleToInlineStyle(src, { recursive: true });

            canvas.width = src.offsetWidth;
            canvas.height = src.offsetHeight;
            var ctx = canvas.getContext('2d');

            var data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + src.offsetWidth + '" height="' + src.offsetHeight + '">' + '<foreignObject width="100%" height="100%">' + this.html_to_xml(src.innerHTML) + '</foreignObject>' + '</svg>';

            data = encodeURIComponent(data);

            var img = new Image();

            var newImageId = 'image-' + this.id;

            img.onload = function () {
                ctx.drawImage(img, 0, 0);

                canvas.toBlob(function (blob) {
                    var newImg = document.createElement('img'),
                        url = URL.createObjectURL(blob);

                    newImg.onload = function () {
                        // no longer need to read the blob so it's revoked
                        URL.revokeObjectURL(url);
                    };

                    newImg.src = url;
                    newImg.id = newImageId;
                    newImg.classList.add("rounded");
                    var oldImg = document.getElementById(newImageId);
                    if (oldImg) {
                        oldImg.remove();
                    }

                    if (_this.showImage) {
                        canvas.insertAdjacentHTML('afterend', newImg.outerHTML);
                    }
                    var today = new Date().toISOString().slice(0, 10);
                    FileSaver.saveAs(blob, 'SupportedBrowsersTable-' + today + '.png');
                    _this.isUpdatingImage = false;
                });
            };

            img.src = "data:image/svg+xml;utf8," + data;
        }
    }, {
        key: 'html_to_xml',
        value: function html_to_xml(html) {
            var doc = document.implementation.createHTMLDocument('');
            doc.write(html);

            // You must manually set the xmlns if you intend to immediately serialize
            // the HTML document to a string as opposed to appending it to a
            // <foreignObject> in the DOM
            doc.documentElement.setAttribute('xmlns', doc.documentElement.namespaceURI);

            // Get well-formed markup
            html = new XMLSerializer().serializeToString(doc.body);
            return html;
        }
    }, {
        key: 'computedStyleToInlineStyle',
        value: function computedStyleToInlineStyle(element, options) {
            var _this2 = this;

            if (!element) {
                throw new Error("No element specified.");
            }

            if (!options) {
                options = {};
            }

            if (options.recursive) {
                Array.prototype.forEach.call(element.children, function (child) {
                    _this2.computedStyleToInlineStyle(child, options);
                });
            }

            var computedStyle = getComputedStyle(element);
            for (var i = 0; i < computedStyle.length; i++) {
                var property = computedStyle.item(i);
                if (!options.properties || options.properties.indexOf(property) >= 0) {
                    var value = computedStyle.getPropertyValue(property);
                    element.style[property] = value;
                }
            }
        }
    }]);

    return DomImageController;
}();

var domImageComponent = {
    bindings: {
        srcId: '@',
        showImage: '<'
    },
    controller: DomImageController,
    template: '<canvas id="canvas-{{$ctrl.id}}" style="display:none;" width="200" height="200"></canvas>'
};

exports.default = domImageComponent;

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(11);

var _angular2 = _interopRequireDefault(_angular);

var _angularjs = __webpack_require__(34);

var _angularjs2 = _interopRequireDefault(_angularjs);

var _homeRoutes = __webpack_require__(112);

var _homeRoutes2 = _interopRequireDefault(_homeRoutes);

var _home = __webpack_require__(113);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeModule = _angular2.default.module('app.home', [_angularjs2.default]);

homeModule.config(_homeRoutes2.default);

homeModule.component('home', _home2.default);

exports.default = homeModule;

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = routes;
routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        component: 'home'
    });
}

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _homeComponent = __webpack_require__(114);

var _homeComponent2 = _interopRequireDefault(_homeComponent);

var _home = __webpack_require__(115);

var _home2 = _interopRequireDefault(_home);

var _home3 = __webpack_require__(116);

var _home4 = _interopRequireDefault(_home3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeComponent = {
    bindings: {},
    template: _homeComponent2.default,
    controller: _home4.default
};

exports.default = homeComponent;

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h1 class=\"text-center\">Build a Supported Browser Table!</h1>\r\n    <hr>\r\n    <form class=\"\">\r\n\r\n        <div class=\"row mb\">\r\n            <div class=\"col-sm-8\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-label\" for=\"browserScope\">Scope</label>\r\n                <input class=\"form-control mb\" id=\"browserScope\" type=\"text\" ng-model=\"$ctrl.browserScope\" placeholder=\"{{$ctrl.defaultBrowserScope}}\" />\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <label class=\"form-label\" for=\"displayLimit\">Display Limit</label>\r\n                <input class=\"form-control\" id=\"displayLimit\" ng-model=\"$ctrl.versionLimit\" placeholder=\"{{$ctrl.versionLimit}}\" />\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <label class=\"form-label\" for=\"rename\">Full Text</label>\r\n                <div class=\"checkbox\">\r\n                <label for=\"rename\">\r\n                <input id=\"rename\" ng-model=\"$ctrl.useFull\" type=\"checkbox\" /> Use Full</label>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12 text-center\">\r\n                <button class=\"btn btn-info\" type=\"button\" ng-click=\"$ctrl.updateScope()\">Update Scope</button>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n        <browser-table id=\"SupportedBrowserTable\" config=\"$ctrl.checkedBrowsers\" full-text=\"$ctrl.useFull? 'Full' : ''\"\r\n                       version-limit=\"$ctrl.versionLimit\" show-unsupported=\"$ctrl.showUnsupported\"></browser-table>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n        <button class=\"btn btn-info\" ng-click=\"showImage = !showImage\">Generate Image</button>\r\n\r\n        <dom-image ng-if=\"showImage\" src-id=\"SupportedBrowserTable\"></dom-image>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _browserslist = __webpack_require__(117);

var _browserslist2 = _interopRequireDefault(_browserslist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeController = function () {
    function HomeController(CommonService) {
        _classCallCheck(this, HomeController);

        this.id = CommonService.guid();

        this.defaultBrowserScope = 'ie 11, last 5 edge version, last 5 firefox version, last 5 chrome version, last 5 safari version, last 5 opera version';
        this.browserScope = this.defaultBrowserScope;
        this._checkedBrowsers = [{
            name: 'IE',
            supported: true,
            image: __webpack_require__(130),
            support: [{ version: '11', supported: true }, { version: '10', supported: false }, { version: '9', supported: false }, { version: '8', supported: false }]
        }, {
            name: 'Edge',
            supported: true,
            image: __webpack_require__(131),
            support: [{ version: '18', supported: true }, { version: '17', supported: true }, { version: '16', supported: true }, { version: '15', supported: true }, { version: '14', supported: true }, { version: '13', supported: true }, { version: '12', supported: true }]

        }, {
            name: 'FireFox',
            supported: true,
            image: __webpack_require__(132),
            support: [{ version: "71", supported: true }, { version: "70", supported: true }, { version: "69", supported: true }, { version: "68", supported: true }, { version: "67", supported: true }, { version: "66", supported: true }, { version: "65", supported: true }, { version: "64", supported: true }, { version: "63", supported: true }, { version: "62", supported: true }, { version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }, {
            name: 'Chrome',
            supported: true,
            image: __webpack_require__(133),
            support: [{ version: "80", supported: true }, { version: "79", supported: true }, { version: "78", supported: true }, { version: "77", supported: true }, { version: "76", supported: true }, { version: "75", supported: true }, { version: "74", supported: true }, { version: "73", supported: true }, { version: "72", supported: true }, { version: "71", supported: true }, { version: "70", supported: true }, { version: "69", supported: true }, { version: "68", supported: true }, { version: "67", supported: true }, { version: "66", supported: true }, { version: "65", supported: true }, { version: "64", supported: true }, { version: "63", supported: true }, { version: "62", supported: true }, { version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }, {
            name: 'Safari',
            supported: true,
            image: __webpack_require__(134),
            support: [{ version: "13.1", supported: true }, { version: "13", supported: true }, { version: "12.1", supported: true }, { version: "12", supported: true }, { version: "11.1", supported: true }, { version: "11", supported: true }, { version: "10.1", supported: true }, { version: "10", supported: true }, { version: "9.1", supported: true }, { version: "9", supported: true }, { version: "8", supported: true }, { version: "7.1", supported: true }, { version: "7", supported: true }, { version: "6.1", supported: true }, { version: "6", supported: true }, { version: "5.1", supported: true }, { version: "5", supported: true }, { version: "4", supported: true }]
        }, {
            name: 'Opera',
            supported: true,
            image: __webpack_require__(135),
            support: [{ version: "62", supported: true }, { version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }];
        this.checkedBrowsers = angular.copy(this._checkedBrowsers);
        this.versionLimit = 0;
        this.showUnsupported = false;
        this.useFull = false;
    }

    _createClass(HomeController, [{
        key: '$onInit',
        value: function $onInit() {

            this.updateScope();
        }
    }, {
        key: 'updateScope',
        value: function updateScope() {
            var cs = this.browserScope || this.defaultBrowserScope;

            var supported = (0, _browserslist2.default)(cs, { ignoreUnknownVersions: true }).map(function (browser) {
                return browser.split(" ");
            });

            var blist = {};
            supported.forEach(function (b) {
                if (!blist[b[0]]) {
                    blist[b[0]] = [];
                }
                blist[b[0]].push({ 'version': b[1], 'supported': true });
            });

            this.checkedBrowsers.forEach(function (cb) {
                var support = blist[cb.name.toLowerCase()];
                if (!support) {
                    cb.supported = false;
                    return;
                }
                cb.support = support;
            });
        }
    }, {
        key: 'updateBrowser',
        value: function updateBrowser(updatedBrowser) {

            this.checkedBrowsers.forEach(function (checkedBrowser) {
                if (checkedBrowser.name === updatedBrowser.name) {
                    checkedBrowser.support = updatedBrowser.support;
                    checkedBrowser.supported = updatedBrowser.supported;
                }
            });
        }
    }]);

    return HomeController;
}();

exports.default = HomeController;

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(11);

var _angular2 = _interopRequireDefault(_angular);

var _angularjs = __webpack_require__(34);

var _angularjs2 = _interopRequireDefault(_angularjs);

var _fileSaver = __webpack_require__(63);

var _fileSaver2 = _interopRequireDefault(_fileSaver);

var _app = __webpack_require__(96);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(97);

__webpack_require__(99);

__webpack_require__(111);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requires = ['ui.router', 'app.services', 'app.components', 'app.home'];

//import app functionality


_angular2.default.module('browserSupportApp', requires).config(_app2.default);

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = routes;
routes.$inject = ['$urlRouterProvider'];
function routes($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = __webpack_require__(11);

var _angular2 = _interopRequireDefault(_angular);

var _common = __webpack_require__(98);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var servicesModule = _angular2.default.module('app.services', []);

servicesModule.service('CommonService', _common.CommonService);

exports.default = servicesModule;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommonService = function () {
    function CommonService() {
        _classCallCheck(this, CommonService);
    }

    _createClass(CommonService, [{
        key: 'guid',
        value: function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
    }]);

    return CommonService;
}();

exports.CommonService = CommonService;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(11);

var _angular2 = _interopRequireDefault(_angular);

var _browserChecklist = __webpack_require__(100);

var _browserChecklist2 = _interopRequireDefault(_browserChecklist);

var _browserTable = __webpack_require__(105);

var _browserTable2 = _interopRequireDefault(_browserTable);

var _browserCheckbox = __webpack_require__(109);

var _browserCheckbox2 = _interopRequireDefault(_browserCheckbox);

var _domImage = __webpack_require__(110);

var _domImage2 = _interopRequireDefault(_domImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componetsModule = _angular2.default.module('app.components', []);

componetsModule.component('browserCheckBox', _browserCheckbox2.default);
componetsModule.component('browserCheckList', _browserChecklist2.default);
componetsModule.component('browserTable', _browserTable2.default);
componetsModule.component('domImage', _domImage2.default);

exports.default = componetsModule;

/***/ })

},[65]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3QuY29tcG9uZW50LmpzIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3QuY3NzP2ZmNDIiLCIvLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXIuY2hlY2tsaXN0LmNvbnRyb2xsZXIuanMiLCIvLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5jb21wb25lbnQuanMiLCIvLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLnN0eWxlLmNzcz9hOTZhIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuY29udHJvbGxlci5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXItY2hlY2tib3guanMiLCIvLi9zcmMvY29tcG9uZW50cy9kb20taW1hZ2UuanMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9pbmRleC5qcyIsIi8uL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUucm91dGVzLmpzIiwiLy4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUuY3NzPzE3MmMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNvbnRyb2xsZXIuanMiLCIvcGF0aCAoaWdub3JlZCkiLCIvLi9zcmMvYXBwLm1vZHVsZS5qcyIsIi8uL3NyYy9hcHAucm91dGVzLmpzIiwiLy4vc3JjL3NlcnZpY2VzL2luZGV4LmpzIiwiLy4vc3JjL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlLmpzIiwiLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiXSwibmFtZXMiOlsiYnJvd3Nlckxpc3RDb21wb25lbnQiLCJiaW5kaW5ncyIsImJyb3dzZXIiLCJ2ZXJzaW9uTGltaXQiLCJvblVwZGF0ZWQiLCJ0ZW1wbGF0ZSIsImNvbnRyb2xsZXIiLCJCcm93c2VyTGlzdENvbnRyb2xsZXIiLCJDb21tb25TZXJ2aWNlIiwiaWQiLCJndWlkIiwiY2hhbmdlcyIsImFuZ3VsYXIiLCJjb3B5IiwidXBkYXRlZCIsInVwZGF0ZWRCcm93c2VyIiwiYnJvd3NlclRhYmxlQ29tcG9uZW50IiwiY29uZmlnIiwic2hvd1Vuc3VwcG9ydGVkIiwiZnVsbFRleHQiLCJCcm93c2VyVGFibGVDb250cm9sbGVyIiwic3VwcG9ydGVkIiwic3VwcG9ydCIsImV2ZXJ5IiwidmVyc2lvbiIsImxlbmd0aCIsIkJyb3dzZXJDaGVja2JveENvbnRyb2xsZXIiLCJuZ01vZGVsQ3RybCIsIiRzZXRWaWV3VmFsdWUiLCJuZ01vZGVsIiwiYnJvd3NlckNoZWNrYm94Q29tcG9uZW50IiwibmFtZSIsInJlcXVpcmUiLCJGaWxlU2F2ZXIiLCJEb21JbWFnZUNvbnRyb2xsZXIiLCIkcSIsIkhUTUxDYW52YXNFbGVtZW50IiwicHJvdG90eXBlIiwidG9CbG9iIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNhbGxiYWNrIiwidHlwZSIsInF1YWxpdHkiLCJjYW52YXMiLCJzZXRUaW1lb3V0IiwiYmluU3RyIiwiYXRvYiIsInRvRGF0YVVSTCIsInNwbGl0IiwibGVuIiwiYXJyIiwiVWludDhBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsInNyY0lkIiwidXBkYXRlSW1hZ2UiLCJzcmMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImlzVXBkYXRpbmdJbWFnZSIsImNvbXB1dGVkU3R5bGVUb0lubGluZVN0eWxlIiwicmVjdXJzaXZlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJkYXRhIiwiaHRtbF90b194bWwiLCJpbm5lckhUTUwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJpbWciLCJJbWFnZSIsIm5ld0ltYWdlSWQiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJibG9iIiwibmV3SW1nIiwiY3JlYXRlRWxlbWVudCIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJldm9rZU9iamVjdFVSTCIsImNsYXNzTGlzdCIsImFkZCIsIm9sZEltZyIsInJlbW92ZSIsInNob3dJbWFnZSIsImluc2VydEFkamFjZW50SFRNTCIsIm91dGVySFRNTCIsInRvZGF5IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJzYXZlQXMiLCJodG1sIiwiZG9jIiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJ3cml0ZSIsImRvY3VtZW50RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm5hbWVzcGFjZVVSSSIsIlhNTFNlcmlhbGl6ZXIiLCJzZXJpYWxpemVUb1N0cmluZyIsImJvZHkiLCJlbGVtZW50Iiwib3B0aW9ucyIsIkVycm9yIiwiQXJyYXkiLCJmb3JFYWNoIiwiY2FsbCIsImNoaWxkcmVuIiwiY2hpbGQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInByb3BlcnR5IiwiaXRlbSIsInByb3BlcnRpZXMiLCJpbmRleE9mIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInN0eWxlIiwiZG9tSW1hZ2VDb21wb25lbnQiLCJob21lTW9kdWxlIiwibW9kdWxlIiwidWlyb3V0ZXIiLCJyb3V0ZXMiLCJjb21wb25lbnQiLCJob21lQ29tcG9uZW50IiwiJGluamVjdCIsIiRzdGF0ZVByb3ZpZGVyIiwic3RhdGUiLCJIb21lQ29udHJvbGxlciIsImRlZmF1bHRCcm93c2VyU2NvcGUiLCJicm93c2VyU2NvcGUiLCJfY2hlY2tlZEJyb3dzZXJzIiwiaW1hZ2UiLCJjaGVja2VkQnJvd3NlcnMiLCJ1c2VGdWxsIiwidXBkYXRlU2NvcGUiLCJjcyIsImlnbm9yZVVua25vd25WZXJzaW9ucyIsIm1hcCIsImJsaXN0IiwiYiIsInB1c2giLCJjYiIsInRvTG93ZXJDYXNlIiwiY2hlY2tlZEJyb3dzZXIiLCJyZXF1aXJlcyIsIiR1cmxSb3V0ZXJQcm92aWRlciIsIm90aGVyd2lzZSIsInNlcnZpY2VzTW9kdWxlIiwic2VydmljZSIsInM0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJjb21wb25ldHNNb2R1bGUiLCJicm93c2VyQ2hlY2tCb3giLCJkb21JbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFJQSxJQUFJQSx1QkFBdUI7QUFDdkJDLGNBQVk7QUFDUkMsaUJBQVMsR0FERDtBQUVSQyxzQkFBYyxHQUZOO0FBR1JDLG1CQUFXO0FBSEgsS0FEVztBQU12QkMsd0NBTnVCO0FBT3ZCQztBQVB1QixDQUEzQjs7a0JBVWVOLG9COzs7Ozs7O0FDaEJmLDhEQUE4RCxvQkFBb0IsaUtBQWlLLHNKQUFzSiwwQkFBMEIsZ0o7Ozs7Ozs7QUNBbmEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0VxQk8scUI7QUFFakIsbUNBQVlDLGFBQVosRUFBMkI7QUFBQTs7QUFDdkIsYUFBS0MsRUFBTCxHQUFVRCxjQUFjRSxJQUFkLEVBQVY7QUFDSDs7OzttQ0FHVUMsTyxFQUFTO0FBQ2hCLGdCQUFJQSxRQUFRVCxPQUFaLEVBQXFCO0FBQ2pCLHFCQUFLQSxPQUFMLEdBQWVVLFFBQVFDLElBQVIsQ0FBYSxLQUFLWCxPQUFsQixDQUFmO0FBRUg7QUFDRCxnQkFBSVMsUUFBUVIsWUFBWixFQUEwQjtBQUN0QixxQkFBS0EsWUFBTCxHQUFvQlMsUUFBUUMsSUFBUixDQUFhLEtBQUtWLFlBQWxCLENBQXBCO0FBQ0g7QUFDSjs7O3dDQUdlO0FBQ1osZ0JBQUlXLFVBQVVGLFFBQVFDLElBQVIsQ0FBYSxLQUFLWCxPQUFsQixDQUFkOztBQUVBLGdCQUFJLEtBQUtFLFNBQVQsRUFBb0I7QUFDaEIscUJBQUtBLFNBQUwsQ0FBZSxFQUFDVyxnQkFBZ0JELE9BQWpCLEVBQWY7QUFDSDtBQUVKOzs7Ozs7a0JBekJnQlAscUI7Ozs7Ozs7Ozs7Ozs7O0FDRHJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSVMsd0JBQXdCO0FBQ3hCVixnQkFBV0Esc0JBRGE7QUFFeEJELGNBQVNBLHNCQUZlO0FBR3hCSixjQUFXO0FBQ1BnQixnQkFBUSxHQUREO0FBRVBkLHNCQUFjLEdBRlA7QUFHUGUseUJBQWlCLEdBSFY7QUFJUEMsa0JBQVU7QUFKSDtBQUhhLENBQTVCOztrQkFXZUgscUI7Ozs7Ozs7QUNoQmYsK0xBQStMLGNBQWMsK0hBQStILDJDQUEyQywwRkFBMEYsZUFBZSxXQUFXLGNBQWMsOENBQThDLDJDQUEyQyxxTUFBcU0scURBQXFELEtBQUssaUJBQWlCLDZHOzs7Ozs7O0FDQWwyQix5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQXFCSSxzQjtBQUVqQixzQ0FBYztBQUFBO0FBRWI7Ozs7bURBRTBCbEIsTyxFQUFTO0FBQ2hDLGdCQUFHLENBQUNBLFFBQVFtQixTQUFaLEVBQXVCLE9BQU8sTUFBUDtBQUN2QixnQkFBRyxDQUFDbkIsUUFBUW9CLE9BQVIsQ0FBZ0JDLEtBQWhCLENBQXNCLFVBQUNDLE9BQUQ7QUFBQSx1QkFBYUEsUUFBUUgsU0FBckI7QUFBQSxhQUF0QixDQUFKLEVBQTJELE9BQU8sTUFBUDs7QUFFM0QsZ0JBQUduQixRQUFRb0IsT0FBUixDQUFnQkcsTUFBaEIsS0FBMkIsQ0FBOUIsRUFBaUMsT0FBT3ZCLFFBQVFvQixPQUFSLENBQWdCLENBQWhCLEVBQW1CRSxPQUExQjs7QUFFakMsZ0JBQUcsS0FBS0wsUUFBUixFQUFrQjtBQUNkLHVCQUFPLEtBQUtBLFFBQVo7QUFDSDtBQUNELG1CQUFPLFlBQVlqQixRQUFRb0IsT0FBUixDQUFnQkcsTUFBNUIsR0FBcUMsV0FBNUM7QUFFSDs7O3VDQUVjdkIsTyxFQUFTO0FBQ3BCLG1CQUFPQSxRQUFRbUIsU0FBUixJQUFxQm5CLFFBQVFvQixPQUFSLENBQWdCQyxLQUFoQixDQUFzQixVQUFDQyxPQUFEO0FBQUEsdUJBQWFBLFFBQVFILFNBQXJCO0FBQUEsYUFBdEIsQ0FBNUI7QUFDSDs7Ozs7O2tCQXJCZ0JELHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNDZk0seUI7QUFFRix1Q0FBWWxCLGFBQVosRUFBMkI7QUFBQTs7QUFDdkIsYUFBS0MsRUFBTCxHQUFVRCxjQUFjRSxJQUFkLEVBQVY7QUFDSDs7Ozt3Q0FHZTtBQUNaLGlCQUFLaUIsV0FBTCxDQUFpQkMsYUFBakIsQ0FBK0IsS0FBS0MsT0FBcEM7QUFDSDs7Ozs7O0FBSUwsSUFBSUMsMkJBQTJCO0FBQzNCN0IsY0FBVTtBQUNOOEIsY0FBTSxHQURBO0FBRU5GLGlCQUFTOztBQUZILEtBRGlCO0FBTTNCRyxhQUFTLEVBQUNMLGFBQWEsU0FBZCxFQU5rQjtBQU8zQnJCLGdCQUFZb0IseUJBUGU7QUFRM0JyQjtBQVIyQixDQUEvQjs7a0JBY2V5Qix3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJmLElBQUlHLFlBQVlELG1CQUFPQSxDQUFDLEVBQVIsQ0FBaEI7O0lBQ01FLGtCO0FBRUYsZ0NBQVlDLEVBQVosRUFBZ0IzQixhQUFoQixFQUE4QjtBQUFBOztBQUMxQixhQUFLMkIsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsYUFBSzNCLGFBQUwsR0FBcUJBLGFBQXJCOztBQUVBLFlBQUksQ0FBQzRCLGtCQUFrQkMsU0FBbEIsQ0FBNEJDLE1BQWpDLEVBQXlDO0FBQ3JDQyxtQkFBT0MsY0FBUCxDQUFzQkosa0JBQWtCQyxTQUF4QyxFQUFtRCxRQUFuRCxFQUE2RDtBQUN6REksdUJBQU8sZUFBVUMsUUFBVixFQUFvQkMsSUFBcEIsRUFBMEJDLE9BQTFCLEVBQW1DO0FBQ3RDLHdCQUFJQyxTQUFTLElBQWI7QUFDQUMsK0JBQVcsWUFBWTtBQUNuQiw0QkFBSUMsU0FBU0MsS0FBS0gsT0FBT0ksU0FBUCxDQUFpQk4sSUFBakIsRUFBdUJDLE9BQXZCLEVBQWdDTSxLQUFoQyxDQUFzQyxHQUF0QyxFQUEyQyxDQUEzQyxDQUFMLENBQWI7QUFBQSw0QkFDSUMsTUFBTUosT0FBT3RCLE1BRGpCO0FBQUEsNEJBRUkyQixNQUFNLElBQUlDLFVBQUosQ0FBZUYsR0FBZixDQUZWOztBQUlBLDZCQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsR0FBcEIsRUFBeUJHLEdBQXpCLEVBQThCO0FBQzFCRixnQ0FBSUUsQ0FBSixJQUFTUCxPQUFPUSxVQUFQLENBQWtCRCxDQUFsQixDQUFUO0FBQ0g7O0FBRURaLGlDQUFTLElBQUljLElBQUosQ0FBUyxDQUFDSixHQUFELENBQVQsRUFBZ0IsRUFBQ1QsTUFBTUEsUUFBUSxXQUFmLEVBQWhCLENBQVQ7QUFDSCxxQkFWRDtBQVdIO0FBZHdELGFBQTdEO0FBZ0JIO0FBQ0o7Ozs7a0NBRVE7QUFDTCxpQkFBS2xDLEVBQUwsR0FBVSxLQUFLRCxhQUFMLENBQW1CRSxJQUFuQixFQUFWO0FBQ0g7OzttQ0FFVUMsTyxFQUFTO0FBQ2hCLGdCQUFJQSxRQUFROEMsS0FBWixFQUFtQjs7QUFFZixxQkFBS0MsV0FBTDtBQUNIO0FBQ0o7OztvQ0FFVztBQUNSLGdCQUFJLEtBQUtELEtBQVQsRUFBZ0I7QUFDWixxQkFBS0MsV0FBTDtBQUNIO0FBQ0o7OztzQ0FFYTtBQUFBOztBQUVWLGdCQUFJQyxNQUFNQyxTQUFTQyxjQUFULENBQXdCLEtBQUtKLEtBQTdCLENBQVY7O0FBSUEsZ0JBQUlaLFNBQVNlLFNBQVNDLGNBQVQsYUFBa0MsS0FBS3BELEVBQXZDLENBQWI7QUFDQSxnQkFBSSxDQUFDb0MsTUFBTCxFQUFhO0FBQ1RpQix3QkFBUUMsR0FBUixDQUFZLHNCQUFaOztBQUVBakIsMkJBQVcsWUFBTTtBQUNiLDBCQUFLWSxXQUFMO0FBQ0gsaUJBRkQsRUFFRyxJQUZIO0FBR0E7QUFDSDtBQUNELGdCQUFHLEtBQUtNLGVBQVIsRUFBd0I7QUFDcEI7QUFDSDs7QUFFRCxpQkFBS0EsZUFBTCxHQUF1QixJQUF2Qjs7QUFFQSxpQkFBS0MsMEJBQUwsQ0FBZ0NOLEdBQWhDLEVBQXFDLEVBQUNPLFdBQVUsSUFBWCxFQUFyQzs7QUFHQXJCLG1CQUFPc0IsS0FBUCxHQUFlUixJQUFJUyxXQUFuQjtBQUNBdkIsbUJBQU93QixNQUFQLEdBQWdCVixJQUFJVyxZQUFwQjtBQUNBLGdCQUFJQyxNQUFNMUIsT0FBTzJCLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjs7QUFFQSxnQkFBSUMsT0FBTyxvREFBa0RkLElBQUlTLFdBQXRELGtCQUE4RVQsSUFBSVcsWUFBbEYsVUFDUCw0Q0FETyxHQUdQLEtBQUtJLFdBQUwsQ0FBaUJmLElBQUlnQixTQUFyQixDQUhPLEdBS1Asa0JBTE8sR0FNUCxRQU5KOztBQVFBRixtQkFBT0csbUJBQW1CSCxJQUFuQixDQUFQOztBQUdBLGdCQUFJSSxNQUFNLElBQUlDLEtBQUosRUFBVjs7QUFFQSxnQkFBSUMsd0JBQXNCLEtBQUt0RSxFQUEvQjs7QUFFQW9FLGdCQUFJRyxNQUFKLEdBQWEsWUFBTTtBQUNmVCxvQkFBSVUsU0FBSixDQUFjSixHQUFkLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCOztBQUVBaEMsdUJBQU9QLE1BQVAsQ0FBZSxVQUFDNEMsSUFBRCxFQUFVO0FBQ3JCLHdCQUFJQyxTQUFTdkIsU0FBU3dCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUFBLHdCQUNJQyxNQUFNQyxJQUFJQyxlQUFKLENBQW9CTCxJQUFwQixDQURWOztBQUdBQywyQkFBT0gsTUFBUCxHQUFnQixZQUFZO0FBQ3hCO0FBQ0FNLDRCQUFJRSxlQUFKLENBQW9CSCxHQUFwQjtBQUNILHFCQUhEOztBQUtBRiwyQkFBT3hCLEdBQVAsR0FBYTBCLEdBQWI7QUFDQUYsMkJBQU8xRSxFQUFQLEdBQVlzRSxVQUFaO0FBQ0FJLDJCQUFPTSxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixTQUFyQjtBQUNBLHdCQUFJQyxTQUFTL0IsU0FBU0MsY0FBVCxDQUF3QmtCLFVBQXhCLENBQWI7QUFDQSx3QkFBSVksTUFBSixFQUFZO0FBQ1JBLCtCQUFPQyxNQUFQO0FBQ0g7O0FBRUQsd0JBQUcsTUFBS0MsU0FBUixFQUFtQjtBQUNmaEQsK0JBQU9pRCxrQkFBUCxDQUEwQixVQUExQixFQUFzQ1gsT0FBT1ksU0FBN0M7QUFDSDtBQUNELHdCQUFNQyxRQUFRLElBQUlDLElBQUosR0FBV0MsV0FBWCxHQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsRUFBa0MsRUFBbEMsQ0FBZDtBQUNBbEUsOEJBQVVtRSxNQUFWLENBQWlCbEIsSUFBakIsOEJBQWlEYyxLQUFqRDtBQUNBLDBCQUFLaEMsZUFBTCxHQUF1QixLQUF2QjtBQUVILGlCQXhCRDtBQXlCSCxhQTVCRDs7QUE4QkFhLGdCQUFJbEIsR0FBSixHQUFVLDZCQUE2QmMsSUFBdkM7QUFFSDs7O29DQUVXNEIsSSxFQUFNO0FBQ2QsZ0JBQUlDLE1BQU0xQyxTQUFTMkMsY0FBVCxDQUF3QkMsa0JBQXhCLENBQTJDLEVBQTNDLENBQVY7QUFDQUYsZ0JBQUlHLEtBQUosQ0FBVUosSUFBVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQUMsZ0JBQUlJLGVBQUosQ0FBb0JDLFlBQXBCLENBQWlDLE9BQWpDLEVBQTBDTCxJQUFJSSxlQUFKLENBQW9CRSxZQUE5RDs7QUFFQTtBQUNBUCxtQkFBUSxJQUFJUSxhQUFKLEVBQUQsQ0FBb0JDLGlCQUFwQixDQUFzQ1IsSUFBSVMsSUFBMUMsQ0FBUDtBQUNBLG1CQUFPVixJQUFQO0FBQ0g7OzttREFFMEJXLE8sRUFBU0MsTyxFQUFTO0FBQUE7O0FBQ3pDLGdCQUFJLENBQUNELE9BQUwsRUFBYztBQUNWLHNCQUFNLElBQUlFLEtBQUosQ0FBVSx1QkFBVixDQUFOO0FBQ0g7O0FBRUQsZ0JBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1ZBLDBCQUFVLEVBQVY7QUFDSDs7QUFFRCxnQkFBSUEsUUFBUS9DLFNBQVosRUFBdUI7QUFDbkJpRCxzQkFBTTlFLFNBQU4sQ0FBZ0IrRSxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJMLFFBQVFNLFFBQXJDLEVBQStDLFVBQUNDLEtBQUQsRUFBVztBQUN0RCwyQkFBS3RELDBCQUFMLENBQWdDc0QsS0FBaEMsRUFBdUNOLE9BQXZDO0FBQ0gsaUJBRkQ7QUFHSDs7QUFFRCxnQkFBSU8sZ0JBQWdCQyxpQkFBaUJULE9BQWpCLENBQXBCO0FBQ0EsaUJBQUssSUFBSTFELElBQUksQ0FBYixFQUFnQkEsSUFBSWtFLGNBQWMvRixNQUFsQyxFQUEwQzZCLEdBQTFDLEVBQStDO0FBQzNDLG9CQUFJb0UsV0FBV0YsY0FBY0csSUFBZCxDQUFtQnJFLENBQW5CLENBQWY7QUFDQSxvQkFBSSxDQUFDMkQsUUFBUVcsVUFBVCxJQUF1QlgsUUFBUVcsVUFBUixDQUFtQkMsT0FBbkIsQ0FBMkJILFFBQTNCLEtBQXdDLENBQW5FLEVBQXNFO0FBQ2xFLHdCQUFJakYsUUFBUStFLGNBQWNNLGdCQUFkLENBQStCSixRQUEvQixDQUFaO0FBQ0FWLDRCQUFRZSxLQUFSLENBQWNMLFFBQWQsSUFBMEJqRixLQUExQjtBQUNIO0FBQ0o7QUFDSjs7Ozs7O0FBSUwsSUFBSXVGLG9CQUFvQjtBQUNwQi9ILGNBQVU7QUFDTndELGVBQU8sR0FERDtBQUVOb0MsbUJBQVc7QUFGTCxLQURVO0FBS3BCdkYsZ0JBQVk0QixrQkFMUTtBQU1wQjdCO0FBTm9CLENBQXhCOztrQkFTZTJILGlCOzs7Ozs7Ozs7Ozs7OztBQzNLZjs7OztBQUNBOzs7O0FBS0E7Ozs7QUFHQTs7Ozs7O0FBTkEsSUFBSUMsYUFBYXJILGtCQUFRc0gsTUFBUixDQUFlLFVBQWYsRUFBMEIsQ0FBQ0MsbUJBQUQsQ0FBMUIsQ0FBakI7O0FBSUFGLFdBQVdoSCxNQUFYLENBQWtCbUgsb0JBQWxCOztBQUdBSCxXQUFXSSxTQUFYLENBQXFCLE1BQXJCLEVBQTZCQyxjQUE3Qjs7a0JBRWVMLFU7Ozs7Ozs7Ozs7Ozs7a0JDVlNHLE07QUFGeEJBLE9BQU9HLE9BQVAsR0FBaUIsQ0FBQyxnQkFBRCxDQUFqQjs7QUFFZSxTQUFTSCxNQUFULENBQWdCSSxjQUFoQixFQUFnQztBQUMzQ0EsbUJBQ0tDLEtBREwsQ0FDVyxNQURYLEVBQ21CO0FBQ1hwRCxhQUFLLEdBRE07QUFFWGdELG1CQUFXO0FBRkEsS0FEbkI7QUFLSCxDOzs7Ozs7Ozs7Ozs7OztBQ1BEOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBSUMsZ0JBQWdCO0FBQ2hCckksY0FBUyxFQURPO0FBRWhCSSxjQUFTQSx1QkFGTztBQUdoQkMsZ0JBQVdBO0FBSEssQ0FBcEI7O2tCQU1lZ0ksYTs7Ozs7OztBQ1pmLGdmQUFnZiwyQkFBMkIsaVRBQWlULG9CQUFvQixzeUM7Ozs7Ozs7QUNBaDFCLHlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0lBR3FCSSxjO0FBQ2pCLDRCQUFZbEksYUFBWixFQUEwQjtBQUFBOztBQUN0QixhQUFLQyxFQUFMLEdBQVVELGNBQWNFLElBQWQsRUFBVjs7QUFFQSxhQUFLaUksbUJBQUwsR0FBMkIsd0hBQTNCO0FBQ0EsYUFBS0MsWUFBTCxHQUFxQixLQUFLRCxtQkFBMUI7QUFDQSxhQUFLRSxnQkFBTCxHQUF3QixDQUNwQjtBQUNJOUcsa0JBQU0sSUFEVjtBQUVJVix1QkFBVyxJQUZmO0FBR0l5SCxtQkFBTzlHLG1CQUFPQSxDQUFDLEdBQVIsQ0FIWDtBQUlJVixxQkFBUyxDQUNMLEVBQUNFLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQURLLEVBRUwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLEtBQTNCLEVBRkssRUFHTCxFQUFDRyxTQUFTLEdBQVYsRUFBZUgsV0FBVyxLQUExQixFQUhLLEVBSUwsRUFBQ0csU0FBUyxHQUFWLEVBQWVILFdBQVcsS0FBMUIsRUFKSztBQUpiLFNBRG9CLEVBWXBCO0FBQ0lVLGtCQUFNLE1BRFY7QUFFSVYsdUJBQVcsSUFGZjtBQUdJeUgsbUJBQU85RyxtQkFBT0EsQ0FBQyxHQUFSLENBSFg7QUFJSVYscUJBQVMsQ0FDTCxFQUFDRSxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFESyxFQUVMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQUZLLEVBR0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBSEssRUFJTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFKSyxFQUtMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQUxLLEVBTUwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBTkssRUFPTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFQSzs7QUFKYixTQVpvQixFQTJCcEI7QUFDSVUsa0JBQU0sU0FEVjtBQUVJVix1QkFBVyxJQUZmO0FBR0l5SCxtQkFBTzlHLG1CQUFPQSxDQUFDLEdBQVIsQ0FIWDtBQUlJVixxQkFBUyxDQUNMLEVBQUNFLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQURLLEVBRUwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBRkssRUFHTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFISyxFQUlMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQUpLLEVBS0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBTEssRUFNTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFOSyxFQU9MLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQVBLLEVBUUwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBUkssRUFTTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFUSyxFQVVMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQVZLLEVBV0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBWEssRUFZTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFaSyxFQWFMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQWJLLEVBY0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBZEssRUFlTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFmSyxFQWdCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFoQkssRUFpQkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBakJLLEVBa0JMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQWxCSyxFQW1CTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFuQkssRUFvQkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBcEJLLEVBcUJMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQXJCSyxFQXNCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUF0QkssRUF1QkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBdkJLLEVBd0JMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQXhCSyxFQXlCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUF6QkssRUEwQkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBMUJLLEVBMkJMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQTNCSyxFQTRCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUE1QkssRUE2QkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBN0JLLEVBOEJMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQTlCSyxFQStCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUEvQkssRUFnQ0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBaENLLEVBaUNMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQWpDSyxFQWtDTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFsQ0ssRUFtQ0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBbkNLLEVBb0NMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQXBDSyxFQXFDTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFyQ0ssRUFzQ0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBdENLLEVBdUNMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQXZDSyxFQXdDTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUF4Q0ssRUF5Q0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBekNLLEVBMENMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQTFDSztBQUpiLFNBM0JvQixFQTRFcEI7QUFDSVUsa0JBQU0sUUFEVjtBQUVJVix1QkFBVyxJQUZmO0FBR0l5SCxtQkFBTzlHLG1CQUFPQSxDQUFDLEdBQVIsQ0FIWDtBQUlJVixxQkFBUyxDQUNMLEVBQUNFLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQURLLEVBRUwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBRkssRUFHTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFISyxFQUlMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQUpLLEVBS0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBTEssRUFNTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFOSyxFQU9MLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQVBLLEVBUUwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBUkssRUFTTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFUSyxFQVVMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQVZLLEVBV0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBWEssRUFZTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFaSyxFQWFMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQWJLLEVBY0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBZEssRUFlTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFmSyxFQWdCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFoQkssRUFpQkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBakJLLEVBa0JMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQWxCSyxFQW1CTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFuQkssRUFvQkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBcEJLLEVBcUJMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQXJCSyxFQXNCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUF0QkssRUF1QkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBdkJLLEVBd0JMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQXhCSyxFQXlCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUF6QkssRUEwQkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBMUJLLEVBMkJMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQTNCSyxFQTRCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUE1QkssRUE2QkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBN0JLLEVBOEJMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQTlCSyxFQStCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUEvQkssRUFnQ0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBaENLLEVBaUNMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQWpDSyxFQWtDTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFsQ0ssRUFtQ0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBbkNLLEVBb0NMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQXBDSyxFQXFDTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFyQ0ssRUFzQ0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBdENLLEVBdUNMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQXZDSyxFQXdDTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUF4Q0ssRUF5Q0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBekNLLEVBMENMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQTFDSyxFQTJDTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUEzQ0ssRUE0Q0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBNUNLLEVBNkNMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQTdDSyxFQThDTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUE5Q0ssRUErQ0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBL0NLLEVBZ0RMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQWhESyxFQWlETCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFqREssRUFrREwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBbERLLEVBbURMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQW5ESztBQUpiLFNBNUVvQixFQXNJcEI7QUFDSVUsa0JBQU0sUUFEVjtBQUVJVix1QkFBVyxJQUZmO0FBR0l5SCxtQkFBTzlHLG1CQUFPQSxDQUFDLEdBQVIsQ0FIWDtBQUlJVixxQkFBUyxDQUNMLEVBQUNFLFNBQVMsTUFBVixFQUFrQkgsV0FBVyxJQUE3QixFQURLLEVBRUwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBRkssRUFHTCxFQUFDRyxTQUFTLE1BQVYsRUFBa0JILFdBQVcsSUFBN0IsRUFISyxFQUlMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQUpLLEVBS0wsRUFBQ0csU0FBUyxNQUFWLEVBQWtCSCxXQUFXLElBQTdCLEVBTEssRUFNTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFOSyxFQU9MLEVBQUNHLFNBQVMsTUFBVixFQUFrQkgsV0FBVyxJQUE3QixFQVBLLEVBUUwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBUkssRUFTTCxFQUFDRyxTQUFTLEtBQVYsRUFBaUJILFdBQVcsSUFBNUIsRUFUSyxFQVVMLEVBQUNHLFNBQVMsR0FBVixFQUFlSCxXQUFXLElBQTFCLEVBVkssRUFXTCxFQUFDRyxTQUFTLEdBQVYsRUFBZUgsV0FBVyxJQUExQixFQVhLLEVBWUwsRUFBQ0csU0FBUyxLQUFWLEVBQWlCSCxXQUFXLElBQTVCLEVBWkssRUFhTCxFQUFDRyxTQUFTLEdBQVYsRUFBZUgsV0FBVyxJQUExQixFQWJLLEVBY0wsRUFBQ0csU0FBUyxLQUFWLEVBQWlCSCxXQUFXLElBQTVCLEVBZEssRUFlTCxFQUFDRyxTQUFTLEdBQVYsRUFBZUgsV0FBVyxJQUExQixFQWZLLEVBZ0JMLEVBQUNHLFNBQVMsS0FBVixFQUFpQkgsV0FBVyxJQUE1QixFQWhCSyxFQWlCTCxFQUFDRyxTQUFTLEdBQVYsRUFBZUgsV0FBVyxJQUExQixFQWpCSyxFQWtCTCxFQUFDRyxTQUFTLEdBQVYsRUFBZUgsV0FBVyxJQUExQixFQWxCSztBQUpiLFNBdElvQixFQStKcEI7QUFDSVUsa0JBQU0sT0FEVjtBQUVJVix1QkFBVyxJQUZmO0FBR0l5SCxtQkFBTzlHLG1CQUFPQSxDQUFDLEdBQVIsQ0FIWDtBQUlJVixxQkFBUyxDQUNMLEVBQUNFLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQURLLEVBRUwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBRkssRUFHTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFISyxFQUlMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQUpLLEVBS0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBTEssRUFNTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFOSyxFQU9MLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQVBLLEVBUUwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBUkssRUFTTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFUSyxFQVVMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQVZLLEVBV0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBWEssRUFZTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFaSyxFQWFMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQWJLLEVBY0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBZEssRUFlTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFmSyxFQWdCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFoQkssRUFpQkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBakJLLEVBa0JMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQWxCSyxFQW1CTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUFuQkssRUFvQkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBcEJLLEVBcUJMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQXJCSyxFQXNCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUF0QkssRUF1QkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBdkJLLEVBd0JMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQXhCSyxFQXlCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUF6QkssRUEwQkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBMUJLLEVBMkJMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQTNCSyxFQTRCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUE1QkssRUE2QkwsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBN0JLLEVBOEJMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQTlCSyxFQStCTCxFQUFDRyxTQUFTLElBQVYsRUFBZ0JILFdBQVcsSUFBM0IsRUEvQkssRUFnQ0wsRUFBQ0csU0FBUyxJQUFWLEVBQWdCSCxXQUFXLElBQTNCLEVBaENLLEVBaUNMLEVBQUNHLFNBQVMsSUFBVixFQUFnQkgsV0FBVyxJQUEzQixFQWpDSztBQUpiLFNBL0pvQixDQUF4QjtBQXlNQSxhQUFLMEgsZUFBTCxHQUF1Qm5JLFFBQVFDLElBQVIsQ0FBYSxLQUFLZ0ksZ0JBQWxCLENBQXZCO0FBQ0EsYUFBSzFJLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxhQUFLZSxlQUFMLEdBQXVCLEtBQXZCO0FBQ0EsYUFBSzhILE9BQUwsR0FBZSxLQUFmO0FBQ0g7Ozs7a0NBRVE7O0FBRU4saUJBQUtDLFdBQUw7QUFJRjs7O3NDQUVZO0FBQ1QsZ0JBQUlDLEtBQUssS0FBS04sWUFBTCxJQUFtQixLQUFLRCxtQkFBakM7O0FBRUEsZ0JBQU10SCxZQUFZLDRCQUFhNkgsRUFBYixFQUFpQixFQUFDQyx1QkFBdUIsSUFBeEIsRUFBakIsRUFDYkMsR0FEYSxDQUNULFVBQUNsSixPQUFEO0FBQUEsdUJBQWFBLFFBQVFnRCxLQUFSLENBQWMsR0FBZCxDQUFiO0FBQUEsYUFEUyxDQUFsQjs7QUFHQSxnQkFBSW1HLFFBQVEsRUFBWjtBQUNBaEksc0JBQVUrRixPQUFWLENBQWtCLFVBQUNrQyxDQUFELEVBQUs7QUFDbkIsb0JBQUcsQ0FBQ0QsTUFBTUMsRUFBRSxDQUFGLENBQU4sQ0FBSixFQUFnQjtBQUNaRCwwQkFBTUMsRUFBRSxDQUFGLENBQU4sSUFBYyxFQUFkO0FBQ0g7QUFDREQsc0JBQU1DLEVBQUUsQ0FBRixDQUFOLEVBQVlDLElBQVosQ0FBaUIsRUFBQyxXQUFVRCxFQUFFLENBQUYsQ0FBWCxFQUFnQixhQUFZLElBQTVCLEVBQWpCO0FBQ0gsYUFMRDs7QUFRQSxpQkFBS1AsZUFBTCxDQUFxQjNCLE9BQXJCLENBQTZCLFVBQUNvQyxFQUFELEVBQU07QUFDL0Isb0JBQU1sSSxVQUFVK0gsTUFBTUcsR0FBR3pILElBQUgsQ0FBUTBILFdBQVIsRUFBTixDQUFoQjtBQUNBLG9CQUFHLENBQUNuSSxPQUFKLEVBQVk7QUFDUmtJLHVCQUFHbkksU0FBSCxHQUFlLEtBQWY7QUFDQTtBQUNIO0FBQ0RtSSxtQkFBR2xJLE9BQUgsR0FBYUEsT0FBYjtBQUNILGFBUEQ7QUFVSDs7O3NDQUVhUCxjLEVBQWdCOztBQUUxQixpQkFBS2dJLGVBQUwsQ0FBcUIzQixPQUFyQixDQUE2QixVQUFDc0MsY0FBRCxFQUFvQjtBQUM3QyxvQkFBSUEsZUFBZTNILElBQWYsS0FBd0JoQixlQUFlZ0IsSUFBM0MsRUFBaUQ7QUFDN0MySCxtQ0FBZXBJLE9BQWYsR0FBeUJQLGVBQWVPLE9BQXhDO0FBQ0FvSSxtQ0FBZXJJLFNBQWYsR0FBMkJOLGVBQWVNLFNBQTFDO0FBQ0g7QUFDSixhQUxEO0FBT0g7Ozs7OztrQkFqUWdCcUgsYzs7Ozs7OztBQ0hyQixlOzs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFHQTs7QUFFQTs7QUFDQTs7OztBQUVBLElBQU1pQixXQUFXLENBQ2IsV0FEYSxFQUViLGNBRmEsRUFHYixnQkFIYSxFQUliLFVBSmEsQ0FBakI7O0FBTkE7OztBQWNBL0ksa0JBQVFzSCxNQUFSLENBQWUsbUJBQWYsRUFBb0N5QixRQUFwQyxFQUNLMUksTUFETCxDQUNZbUgsYUFEWixFOzs7Ozs7Ozs7Ozs7O2tCQ25Cd0JBLE07QUFEeEJBLE9BQU9HLE9BQVAsR0FBaUIsQ0FBQyxvQkFBRCxDQUFqQjtBQUNlLFNBQVNILE1BQVQsQ0FBZ0J3QixrQkFBaEIsRUFBb0M7QUFDL0NBLHVCQUFtQkMsU0FBbkIsQ0FBNkIsR0FBN0I7QUFDSCxDOzs7Ozs7Ozs7Ozs7OztBQ0hEOzs7O0FBQ0E7Ozs7QUFFQSxJQUFJQyxpQkFBaUJsSixrQkFBUXNILE1BQVIsQ0FBZSxjQUFmLEVBQStCLEVBQS9CLENBQXJCOztBQUVJNEIsZUFBZUMsT0FBZixDQUF1QixlQUF2QixFQUF3Q3ZKLHFCQUF4Qzs7a0JBRVdzSixjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNOVHRKLGE7QUFDRiw2QkFBYztBQUFBO0FBRWI7Ozs7K0JBQ007QUFDSCxxQkFBU3dKLEVBQVQsR0FBYztBQUNWLHVCQUFPQyxLQUFLQyxLQUFMLENBQVcsQ0FBQyxJQUFJRCxLQUFLRSxNQUFMLEVBQUwsSUFBc0IsT0FBakMsRUFDRkMsUUFERSxDQUNPLEVBRFAsRUFFRkMsU0FGRSxDQUVRLENBRlIsQ0FBUDtBQUdIO0FBQ0QsbUJBQU9MLE9BQU9BLElBQVAsR0FBYyxHQUFkLEdBQW9CQSxJQUFwQixHQUEyQixHQUEzQixHQUFpQ0EsSUFBakMsR0FBd0MsR0FBeEMsR0FDSEEsSUFERyxHQUNJLEdBREosR0FDVUEsSUFEVixHQUNpQkEsSUFEakIsR0FDd0JBLElBRC9CO0FBRUg7Ozs7OztRQUdJeEosYSxHQUFBQSxhOzs7Ozs7Ozs7Ozs7OztBQ2hCVDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJOEosa0JBQWtCMUosa0JBQVFzSCxNQUFSLENBQWUsZ0JBQWYsRUFBZ0MsRUFBaEMsQ0FBdEI7O0FBRUFvQyxnQkFBZ0JqQyxTQUFoQixDQUEwQixpQkFBMUIsRUFBNkNrQyx5QkFBN0M7QUFDQUQsZ0JBQWdCakMsU0FBaEIsQ0FBMEIsa0JBQTFCLEVBQThDckksMEJBQTlDO0FBQ0FzSyxnQkFBZ0JqQyxTQUFoQixDQUEwQixjQUExQixFQUEwQ3JILHNCQUExQztBQUNBc0osZ0JBQWdCakMsU0FBaEIsQ0FBMEIsVUFBMUIsRUFBc0NtQyxrQkFBdEM7O2tCQUVlRixlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9icm93c2VyLWNoZWNrbGlzdC5odG1sJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Jyb3dzZXItY2hlY2tsaXN0LmNzcyc7XHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vYnJvd3Nlci5jaGVja2xpc3QuY29udHJvbGxlcic7XHJcblxyXG5cclxuXHJcbmxldCBicm93c2VyTGlzdENvbXBvbmVudCA9IHtcclxuICAgIGJpbmRpbmdzIDogIHtcclxuICAgICAgICBicm93c2VyOiAnPCcsXHJcbiAgICAgICAgdmVyc2lvbkxpbWl0OiAnPCcsXHJcbiAgICAgICAgb25VcGRhdGVkOiAnJj8nXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGUsXHJcbiAgICBjb250cm9sbGVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyb3dzZXJMaXN0Q29tcG9uZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXItY2hlY2tsaXN0LmNvbXBvbmVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8Yj48YnJvd3Nlci1jaGVjay1ib3ggbmFtZT1cXFwie3skY3RybC5icm93c2VyLm5hbWV9fVxcXCIgbmctbW9kZWw9XFxcIiRjdHJsLmJyb3dzZXIuc3VwcG9ydGVkXFxcIiBuZy1jaGFuZ2U9XFxcIiRjdHJsLnVwZGF0ZUJyb3dzZXIoKVxcXCI+PC9icm93c2VyLWNoZWNrLWJveD48L2I+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibGlzdC11bnN0eWxlZFxcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjE1cHg7XFxcIj5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcInN1cHBvcnRlZFZlcnNpb24gaW4gJGN0cmwuYnJvd3Nlci5zdXBwb3J0ICB8IGxpbWl0VG86ICRjdHJsLnZlcnNpb25MaW1pdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJyb3dzZXItY2hlY2stYm94IG5hbWU9XFxcInt7c3VwcG9ydGVkVmVyc2lvbi52ZXJzaW9ufX1cXFwiIG5nLW1vZGVsPVxcXCJzdXBwb3J0ZWRWZXJzaW9uLnN1cHBvcnRlZFxcXCIgbmctY2hhbmdlPVxcXCIkY3RybC51cGRhdGVCcm93c2VyKClcXFwiPjwvYnJvd3Nlci1jaGVjay1ib3g+XFxyXFxuXFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXItY2hlY2tsaXN0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJMaXN0Q29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQ29tbW9uU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBDb21tb25TZXJ2aWNlLmd1aWQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJG9uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuYnJvd3Nlcikge1xyXG4gICAgICAgICAgICB0aGlzLmJyb3dzZXIgPSBhbmd1bGFyLmNvcHkodGhpcy5icm93c2VyKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLnZlcnNpb25MaW1pdCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnNpb25MaW1pdCA9IGFuZ3VsYXIuY29weSh0aGlzLnZlcnNpb25MaW1pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdXBkYXRlQnJvd3NlcigpIHtcclxuICAgICAgICBsZXQgdXBkYXRlZCA9IGFuZ3VsYXIuY29weSh0aGlzLmJyb3dzZXIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vblVwZGF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vblVwZGF0ZWQoe3VwZGF0ZWRCcm93c2VyOiB1cGRhdGVkfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXIuY2hlY2tsaXN0LmNvbnRyb2xsZXIuanMiLCJcclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYnJvd3Nlci10YWJsZS5odG1sJztcclxuaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tICcuL2Jyb3dzZXItdGFibGUuc3R5bGUuY3NzJztcclxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9icm93c2VyLXRhYmxlLmNvbnRyb2xsZXInO1xyXG5cclxubGV0IGJyb3dzZXJUYWJsZUNvbXBvbmVudCA9IHtcclxuICAgIGNvbnRyb2xsZXI6Y29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOnRlbXBsYXRlLFxyXG4gICAgYmluZGluZ3MgOiB7XHJcbiAgICAgICAgY29uZmlnOiAnPCcsXHJcbiAgICAgICAgdmVyc2lvbkxpbWl0OiAnPCcsXHJcbiAgICAgICAgc2hvd1Vuc3VwcG9ydGVkOiAnPCcsXHJcbiAgICAgICAgZnVsbFRleHQ6ICc8JyxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJvd3NlclRhYmxlQ29tcG9uZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5jb21wb25lbnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgPHRyPlxcclxcbiAgICAgICAgPHRoIG5nLXJlcGVhdD1cXFwiYnJvd3NlciBpbiAkY3RybC5jb25maWdcXFwiIG5nLXNob3c9XFxcImJyb3dzZXIuc3VwcG9ydGVkIHx8ICRjdHJsLnNob3dVbnN1cHBvcnRlZFxcXCI+e3ticm93c2VyLm5hbWV9fTwvdGg+XFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgPHRyPlxcclxcbiAgICAgICAgPHRkIG5nLXJlcGVhdD1cXFwiYnJvd3NlciBpbiAkY3RybC5jb25maWdcXFwiIG5nLWNsYXNzPVxcXCJ7J2JnLWRhbmdlcic6ISRjdHJsLmhhc0Z1bGxTdXBwb3J0KGJyb3dzZXIpfVxcXCIgbmctc2hvdz1cXFwiYnJvd3Nlci5zdXBwb3J0ZWQgfHwgJGN0cmwuc2hvd1Vuc3VwcG9ydGVkXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIG5nLXNyYz1cXFwie3ticm93c2VyLmltYWdlfX1cXFwiIGFsdD1cXFwie3ticm93c2VyLm5hbWV9fVxcXCI+XFxyXFxuICAgICAgICAgICAgPGhyPlxcclxcbiAgICAgICAgICAgIDxwICA+e3skY3RybC5nZW5lcmF0ZVN1cHBvcnREZXNjcmlwdGlvbihicm93c2VyKX19PC9wPlxcclxcbiAgICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcImxpc3QtdW5zdHlsZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJzdXBwb3J0IGluIGJyb3dzZXIuc3VwcG9ydCB8IGxpbWl0VG86JGN0cmwudmVyc2lvbkxpbWl0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgbmctY2xhc3M9XFxcInsnYmctZGFuZ2VyJzohIGJyb3dzZXIuc3VwcG9ydGVkICYmIHN1cHBvcnQuc3VwcG9ydGVkfVxcXCI+e3tzdXBwb3J0LnZlcnNpb259fVxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L3RkPlxcclxcbiAgICA8L3RyPlxcclxcbiAgICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJvd3NlclRhYmxlQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlU3VwcG9ydERlc2NyaXB0aW9uKGJyb3dzZXIpIHtcclxuICAgICAgICBpZighYnJvd3Nlci5zdXBwb3J0ZWQpIHJldHVybiAnTm9uZSc7XHJcbiAgICAgICAgaWYoIWJyb3dzZXIuc3VwcG9ydC5ldmVyeSgodmVyc2lvbikgPT4gdmVyc2lvbi5zdXBwb3J0ZWQpKSByZXR1cm4gJ1NvbWUnO1xyXG5cclxuICAgICAgICBpZihicm93c2VyLnN1cHBvcnQubGVuZ3RoID09PSAxKSByZXR1cm4gYnJvd3Nlci5zdXBwb3J0WzBdLnZlcnNpb247XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZnVsbFRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVsbFRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnTGF0ZXN0ICcgKyBicm93c2VyLnN1cHBvcnQubGVuZ3RoICsgJyB2ZXJzaW9ucyc7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBoYXNGdWxsU3VwcG9ydChicm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3VwcG9ydGVkICYmIGJyb3dzZXIuc3VwcG9ydC5ldmVyeSgodmVyc2lvbikgPT4gdmVyc2lvbi5zdXBwb3J0ZWQpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuY29udHJvbGxlci5qcyIsIlxyXG5jbGFzcyBCcm93c2VyQ2hlY2tib3hDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihDb21tb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IENvbW1vblNlcnZpY2UuZ3VpZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ01vZGVsQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMubmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZSh0aGlzLm5nTW9kZWwpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IGJyb3dzZXJDaGVja2JveENvbXBvbmVudCA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgbmFtZTogJ0AnLFxyXG4gICAgICAgIG5nTW9kZWw6ICc8JyxcclxuXHJcbiAgICB9LFxyXG4gICAgcmVxdWlyZToge25nTW9kZWxDdHJsOiAnbmdNb2RlbCd9LFxyXG4gICAgY29udHJvbGxlcjogQnJvd3NlckNoZWNrYm94Q29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCIkY3RybC5uYW1lXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJjaGVjay17eyRjdHJsLmlkfX1cIiBuZy1tb2RlbD0nJGN0cmwubmdNb2RlbCcgbmctY2hhbmdlPVwiJGN0cmwubmdNb2RlbENoYW5nZSgpXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJjaGVjay17eyRjdHJsLmlkfX1cIj57eyRjdHJsLm5hbWV9fTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+YFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBicm93c2VyQ2hlY2tib3hDb21wb25lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3Nlci1jaGVja2JveC5qcyIsInZhciBGaWxlU2F2ZXIgPSByZXF1aXJlKCdmaWxlLXNhdmVyJyk7XHJcbmNsYXNzIERvbUltYWdlQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoJHEsIENvbW1vblNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuJHEgPSAkcTtcclxuICAgICAgICB0aGlzLkNvbW1vblNlcnZpY2UgPSBDb21tb25TZXJ2aWNlO1xyXG5cclxuICAgICAgICBpZiAoIUhUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZS50b0Jsb2IpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZSwgJ3RvQmxvYicsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHR5cGUsIHF1YWxpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJpblN0ciA9IGF0b2IoY2FudmFzLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KS5zcGxpdCgnLCcpWzFdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbiA9IGJpblN0ci5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIgPSBuZXcgVWludDhBcnJheShsZW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldID0gYmluU3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBCbG9iKFthcnJdLCB7dHlwZTogdHlwZSB8fCAnaW1hZ2UvcG5nJ30pKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRvbkluaXQoKXtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5Db21tb25TZXJ2aWNlLmd1aWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAkb25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5zcmNJZCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbWFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkcG9zdExpbmsoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3JjSWQpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbWFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlSW1hZ2UoKSB7XHJcblxyXG4gICAgICAgIGxldCBzcmMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNyY0lkKTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhbnZhcy0ke3RoaXMuaWR9YCk7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VsZG4ndCBmaW5kIGNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbWFnZSgpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmlzVXBkYXRpbmdJbWFnZSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZ0ltYWdlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wdXRlZFN0eWxlVG9JbmxpbmVTdHlsZShzcmMsIHtyZWN1cnNpdmU6dHJ1ZX0pO1xyXG5cclxuXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gc3JjLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzcmMub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIke3NyYy5vZmZzZXRXaWR0aH1cIiBoZWlnaHQ9XCIke3NyYy5vZmZzZXRIZWlnaHR9XCI+YCArXHJcbiAgICAgICAgICAgICc8Zm9yZWlnbk9iamVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+JyArXHJcblxyXG4gICAgICAgICAgICB0aGlzLmh0bWxfdG9feG1sKHNyYy5pbm5lckhUTUwpICtcclxuXHJcbiAgICAgICAgICAgICc8L2ZvcmVpZ25PYmplY3Q+JyArXHJcbiAgICAgICAgICAgICc8L3N2Zz4nO1xyXG5cclxuICAgICAgICBkYXRhID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgICBsZXQgbmV3SW1hZ2VJZCA9IGBpbWFnZS0ke3RoaXMuaWR9YDtcclxuXHJcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgY2FudmFzLnRvQmxvYiggKGJsb2IpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSxcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0ltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gbG9uZ2VyIG5lZWQgdG8gcmVhZCB0aGUgYmxvYiBzbyBpdCdzIHJldm9rZWRcclxuICAgICAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0ltZy5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICBuZXdJbWcuaWQgPSBuZXdJbWFnZUlkO1xyXG4gICAgICAgICAgICAgICAgbmV3SW1nLmNsYXNzTGlzdC5hZGQoXCJyb3VuZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9sZEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0ltYWdlSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZEltZykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9sZEltZy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNob3dJbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgbmV3SW1nLm91dGVySFRNTCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIGBTdXBwb3J0ZWRCcm93c2Vyc1RhYmxlLSR7dG9kYXl9LnBuZ2ApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1VwZGF0aW5nSW1hZ2UgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGltZy5zcmMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LFwiICsgZGF0YTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGh0bWxfdG9feG1sKGh0bWwpIHtcclxuICAgICAgICB2YXIgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCcnKTtcclxuICAgICAgICBkb2Mud3JpdGUoaHRtbCk7XHJcblxyXG4gICAgICAgIC8vIFlvdSBtdXN0IG1hbnVhbGx5IHNldCB0aGUgeG1sbnMgaWYgeW91IGludGVuZCB0byBpbW1lZGlhdGVseSBzZXJpYWxpemVcclxuICAgICAgICAvLyB0aGUgSFRNTCBkb2N1bWVudCB0byBhIHN0cmluZyBhcyBvcHBvc2VkIHRvIGFwcGVuZGluZyBpdCB0byBhXHJcbiAgICAgICAgLy8gPGZvcmVpZ25PYmplY3Q+IGluIHRoZSBET01cclxuICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgneG1sbnMnLCBkb2MuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSk7XHJcblxyXG4gICAgICAgIC8vIEdldCB3ZWxsLWZvcm1lZCBtYXJrdXBcclxuICAgICAgICBodG1sID0gKG5ldyBYTUxTZXJpYWxpemVyKS5zZXJpYWxpemVUb1N0cmluZyhkb2MuYm9keSk7XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWRTdHlsZVRvSW5saW5lU3R5bGUoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBlbGVtZW50IHNwZWNpZmllZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMucmVjdXJzaXZlKSB7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbWVudC5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVkU3R5bGVUb0lubGluZVN0eWxlKGNoaWxkLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IGNvbXB1dGVkU3R5bGUuaXRlbShpKTtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnByb3BlcnRpZXMgfHwgb3B0aW9ucy5wcm9wZXJ0aWVzLmluZGV4T2YocHJvcGVydHkpID49IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IGRvbUltYWdlQ29tcG9uZW50ID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBzcmNJZDogJ0AnLFxyXG4gICAgICAgIHNob3dJbWFnZTogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogRG9tSW1hZ2VDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6IGA8Y2FudmFzIGlkPVwiY2FudmFzLXt7JGN0cmwuaWR9fVwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCI+PC9jYW52YXM+YFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tSW1hZ2VDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2RvbS1pbWFnZS5qcyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCB1aXJvdXRlciBmcm9tICdAdWlyb3V0ZXIvYW5ndWxhcmpzJztcclxuXHJcbmxldCBob21lTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5ob21lJyxbdWlyb3V0ZXJdKTtcclxuXHJcblxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vaG9tZS5yb3V0ZXMuanMnXHJcbmhvbWVNb2R1bGUuY29uZmlnKHJvdXRlcyk7XHJcblxyXG5pbXBvcnQgaG9tZUNvbXBvbmVudCBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcclxuaG9tZU1vZHVsZS5jb21wb25lbnQoJ2hvbWUnLCBob21lQ29tcG9uZW50KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVNb2R1bGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2luZGV4LmpzIiwicm91dGVzLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJ107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3V0ZXMoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdob21lJywge1xyXG4gICAgICAgICAgICB1cmw6ICcvJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAnaG9tZSdcclxuICAgICAgICB9KTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUucm91dGVzLmpzIiwiXHJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnO1xyXG5pbXBvcnQgY29tcG9uZW50U3R5bGVzIGZyb20gJy4vaG9tZS5jc3MnO1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2hvbWUuY29udHJvbGxlcic7XHJcblxyXG5cclxubGV0IGhvbWVDb21wb25lbnQgPSB7XHJcbiAgICBiaW5kaW5nczp7fSxcclxuICAgIHRlbXBsYXRlOnRlbXBsYXRlLFxyXG4gICAgY29udHJvbGxlcjpjb250cm9sbGVyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lQ29tcG9uZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb25cXFwiPlxcclxcbiAgICA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5CdWlsZCBhIFN1cHBvcnRlZCBCcm93c2VyIFRhYmxlITwvaDE+XFxyXFxuICAgIDxocj5cXHJcXG4gICAgPGZvcm0gY2xhc3M9XFxcIlxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgbWJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiIGZvcj1cXFwiYnJvd3NlclNjb3BlXFxcIj5TY29wZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG1iXFxcIiBpZD1cXFwiYnJvd3NlclNjb3BlXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwuYnJvd3NlclNjb3BlXFxcIiBwbGFjZWhvbGRlcj1cXFwie3skY3RybC5kZWZhdWx0QnJvd3NlclNjb3BlfX1cXFwiIC8+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIiBmb3I9XFxcImRpc3BsYXlMaW1pdFxcXCI+RGlzcGxheSBMaW1pdDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZGlzcGxheUxpbWl0XFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwudmVyc2lvbkxpbWl0XFxcIiBwbGFjZWhvbGRlcj1cXFwie3skY3RybC52ZXJzaW9uTGltaXR9fVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCIgZm9yPVxcXCJyZW5hbWVcXFwiPkZ1bGwgVGV4dDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicmVuYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJyZW5hbWVcXFwiIG5nLW1vZGVsPVxcXCIkY3RybC51c2VGdWxsXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz4gVXNlIEZ1bGw8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLnVwZGF0ZVNjb3BlKClcXFwiPlVwZGF0ZSBTY29wZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJyb3dzZXItdGFibGUgaWQ9XFxcIlN1cHBvcnRlZEJyb3dzZXJUYWJsZVxcXCIgY29uZmlnPVxcXCIkY3RybC5jaGVja2VkQnJvd3NlcnNcXFwiIGZ1bGwtdGV4dD1cXFwiJGN0cmwudXNlRnVsbD8gJ0Z1bGwnIDogJydcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uLWxpbWl0PVxcXCIkY3RybC52ZXJzaW9uTGltaXRcXFwiIHNob3ctdW5zdXBwb3J0ZWQ9XFxcIiRjdHJsLnNob3dVbnN1cHBvcnRlZFxcXCI+PC9icm93c2VyLXRhYmxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIiBuZy1jbGljaz1cXFwic2hvd0ltYWdlID0gIXNob3dJbWFnZVxcXCI+R2VuZXJhdGUgSW1hZ2U8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgIDxkb20taW1hZ2UgbmctaWY9XFxcInNob3dJbWFnZVxcXCIgc3JjLWlkPVxcXCJTdXBwb3J0ZWRCcm93c2VyVGFibGVcXFwiPjwvZG9tLWltYWdlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNzc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBicm93c2Vyc2xpc3QgZnJvbSBcImJyb3dzZXJzbGlzdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKENvbW1vblNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuaWQgPSBDb21tb25TZXJ2aWNlLmd1aWQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0QnJvd3NlclNjb3BlID0gJ2llIDExLCBsYXN0IDUgZWRnZSB2ZXJzaW9uLCBsYXN0IDUgZmlyZWZveCB2ZXJzaW9uLCBsYXN0IDUgY2hyb21lIHZlcnNpb24sIGxhc3QgNSBzYWZhcmkgdmVyc2lvbiwgbGFzdCA1IG9wZXJhIHZlcnNpb24nO1xyXG4gICAgICAgIHRoaXMuYnJvd3NlclNjb3BlID0gIHRoaXMuZGVmYXVsdEJyb3dzZXJTY29wZTtcclxuICAgICAgICB0aGlzLl9jaGVja2VkQnJvd3NlcnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdJRScsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL2ludGVybmV0LWV4cGxvcmVyXzktMTEvaW50ZXJuZXQtZXhwbG9yZXJfOS0xMV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTEnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTAnLCBzdXBwb3J0ZWQ6IGZhbHNlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzknLCBzdXBwb3J0ZWQ6IGZhbHNlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzgnLCBzdXBwb3J0ZWQ6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWRnZScsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL2VkZ2UvZWRnZV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTgnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTcnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTYnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTUnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTQnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTMnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTInLCBzdXBwb3J0ZWQ6IHRydWV9XHJcbiAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlyZUZveCcsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL2ZpcmVmb3gvZmlyZWZveF8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjcxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNThcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzM1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ2hyb21lJyxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJyb3dzZXItbG9nb3MvY2hyb21lL2Nocm9tZV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjgwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjc3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjc0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjcxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNThcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzM1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2FmYXJpJyxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJyb3dzZXItbG9nb3Mvc2FmYXJpL3NhZmFyaV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjEzLjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxM1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjEyLjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxMlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjExLjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjEwLjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxMFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjkuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNy4xXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiN1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1LjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnT3BlcmEnLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYnJvd3Nlci1sb2dvcy9vcGVyYS9vcGVyYV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNThcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzM1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5jaGVja2VkQnJvd3NlcnMgPSBhbmd1bGFyLmNvcHkodGhpcy5fY2hlY2tlZEJyb3dzZXJzKTtcclxuICAgICAgICB0aGlzLnZlcnNpb25MaW1pdCA9IDA7XHJcbiAgICAgICAgdGhpcy5zaG93VW5zdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVzZUZ1bGwgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAkb25Jbml0KCl7XHJcblxyXG4gICAgICAgdGhpcy51cGRhdGVTY29wZSgpO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3BlKCl7XHJcbiAgICAgICAgbGV0IGNzID0gdGhpcy5icm93c2VyU2NvcGV8fHRoaXMuZGVmYXVsdEJyb3dzZXJTY29wZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkID0gYnJvd3NlcnNsaXN0KGNzLCB7aWdub3JlVW5rbm93blZlcnNpb25zOiB0cnVlfSlcclxuICAgICAgICAgICAgLm1hcCgoYnJvd3NlcikgPT4gYnJvd3Nlci5zcGxpdChcIiBcIikpO1xyXG5cclxuICAgICAgICBsZXQgYmxpc3QgPSB7fTtcclxuICAgICAgICBzdXBwb3J0ZWQuZm9yRWFjaCgoYik9PntcclxuICAgICAgICAgICAgaWYoIWJsaXN0W2JbMF1dKXtcclxuICAgICAgICAgICAgICAgIGJsaXN0W2JbMF1dID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmxpc3RbYlswXV0ucHVzaCh7J3ZlcnNpb24nOmJbMV0sJ3N1cHBvcnRlZCc6dHJ1ZX0pO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB0aGlzLmNoZWNrZWRCcm93c2Vycy5mb3JFYWNoKChjYik9PntcclxuICAgICAgICAgICAgY29uc3Qgc3VwcG9ydCA9IGJsaXN0W2NiLm5hbWUudG9Mb3dlckNhc2UoKV1cclxuICAgICAgICAgICAgaWYoIXN1cHBvcnQpe1xyXG4gICAgICAgICAgICAgICAgY2Iuc3VwcG9ydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2Iuc3VwcG9ydCA9IHN1cHBvcnQ7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJyb3dzZXIodXBkYXRlZEJyb3dzZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja2VkQnJvd3NlcnMuZm9yRWFjaCgoY2hlY2tlZEJyb3dzZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWRCcm93c2VyLm5hbWUgPT09IHVwZGF0ZWRCcm93c2VyLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRCcm93c2VyLnN1cHBvcnQgPSB1cGRhdGVkQnJvd3Nlci5zdXBwb3J0O1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZEJyb3dzZXIuc3VwcG9ydGVkID0gdXBkYXRlZEJyb3dzZXIuc3VwcG9ydGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gcGF0aCAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHVpcm91dGVyIGZyb20gJ0B1aXJvdXRlci9hbmd1bGFyanMnO1xyXG5pbXBvcnQgZmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5cclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL2FwcC5yb3V0ZXMnO1xyXG5cclxuLy9pbXBvcnQgYXBwIGZ1bmN0aW9uYWxpdHlcclxuaW1wb3J0ICcuL3NlcnZpY2VzJztcclxuXHJcbmltcG9ydCAnLi9jb21wb25lbnRzJztcclxuaW1wb3J0ICcuL2ZlYXR1cmVzL2hvbWUnO1xyXG5cclxuY29uc3QgcmVxdWlyZXMgPSBbXHJcbiAgICAndWkucm91dGVyJyxcclxuICAgICdhcHAuc2VydmljZXMnLFxyXG4gICAgJ2FwcC5jb21wb25lbnRzJyxcclxuICAgICdhcHAuaG9tZSdcclxuXTtcclxuXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYnJvd3NlclN1cHBvcnRBcHAnLCByZXF1aXJlcylcclxuICAgIC5jb25maWcocm91dGVzKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5tb2R1bGUuanMiLCJyb3V0ZXMuJGluamVjdCA9IFsnJHVybFJvdXRlclByb3ZpZGVyJ107XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdXRlcygkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAucm91dGVzLmpzIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0IHtDb21tb25TZXJ2aWNlfSBmcm9tICcuL2NvbW1vbi5zZXJ2aWNlJztcclxuXHJcbmxldCBzZXJ2aWNlc01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuc2VydmljZXMnLCBbXSk7XHJcblxyXG4gICAgc2VydmljZXNNb2R1bGUuc2VydmljZSgnQ29tbW9uU2VydmljZScsIENvbW1vblNlcnZpY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VydmljZXNNb2R1bGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL2luZGV4LmpzIiwiXHJcbmNsYXNzIENvbW1vblNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgZ3VpZCgpIHtcclxuICAgICAgICBmdW5jdGlvbiBzNCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXHJcbiAgICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCAge0NvbW1vblNlcnZpY2V9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9jb21tb24uc2VydmljZS5qcyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCBicm93c2VyTGlzdENvbXBvbmVudCBmcm9tICcuL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IGJyb3dzZXJUYWJsZUNvbXBvbmVudCBmcm9tICcuL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCBicm93c2VyQ2hlY2tCb3ggZnJvbSAnLi9icm93c2VyLWNoZWNrYm94JztcclxuaW1wb3J0IGRvbUltYWdlIGZyb20gJy4vZG9tLWltYWdlJztcclxuXHJcbmxldCBjb21wb25ldHNNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbXBvbmVudHMnLFtdKTtcclxuXHJcbmNvbXBvbmV0c01vZHVsZS5jb21wb25lbnQoJ2Jyb3dzZXJDaGVja0JveCcsIGJyb3dzZXJDaGVja0JveCk7XHJcbmNvbXBvbmV0c01vZHVsZS5jb21wb25lbnQoJ2Jyb3dzZXJDaGVja0xpc3QnLCBicm93c2VyTGlzdENvbXBvbmVudCk7XHJcbmNvbXBvbmV0c01vZHVsZS5jb21wb25lbnQoJ2Jyb3dzZXJUYWJsZScsIGJyb3dzZXJUYWJsZUNvbXBvbmVudCk7XHJcbmNvbXBvbmV0c01vZHVsZS5jb21wb25lbnQoJ2RvbUltYWdlJywgZG9tSW1hZ2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZXRzTW9kdWxlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=