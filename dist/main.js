webpackJsonp([1],{

/***/ 103:
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

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = __webpack_require__(11);

var _angular2 = _interopRequireDefault(_angular);

var _common = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var servicesModule = _angular2.default.module('app.services', []);

servicesModule.service('CommonService', _common.CommonService);

exports.default = servicesModule;

/***/ }),

/***/ 105:
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

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(11);

var _angular2 = _interopRequireDefault(_angular);

var _browserChecklist = __webpack_require__(107);

var _browserChecklist2 = _interopRequireDefault(_browserChecklist);

var _browserTable = __webpack_require__(112);

var _browserTable2 = _interopRequireDefault(_browserTable);

var _browserCheckbox = __webpack_require__(116);

var _browserCheckbox2 = _interopRequireDefault(_browserCheckbox);

var _domImage = __webpack_require__(117);

var _domImage2 = _interopRequireDefault(_domImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componetsModule = _angular2.default.module('app.components', []);

componetsModule.component('browserCheckBox', _browserCheckbox2.default);
componetsModule.component('browserCheckList', _browserChecklist2.default);
componetsModule.component('browserTable', _browserTable2.default);
componetsModule.component('domImage', _domImage2.default);

exports.default = componetsModule;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _browserChecklist = __webpack_require__(108);

var _browserChecklist2 = _interopRequireDefault(_browserChecklist);

var _browserChecklist3 = __webpack_require__(109);

var _browserChecklist4 = _interopRequireDefault(_browserChecklist3);

var _browserChecklist5 = __webpack_require__(111);

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

/***/ 108:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <b><browser-check-box name=\"{{$ctrl.browser.name}}\" ng-model=\"$ctrl.browser.supported\" ng-change=\"$ctrl.updateBrowser()\"></browser-check-box></b>\r\n    <ul class=\"list-unstyled\" style=\"margin-left:15px;\">\r\n        <li ng-repeat=\"supportedVersion in $ctrl.browser.support  | limitTo: $ctrl.versionLimit\">\r\n            <browser-check-box name=\"{{supportedVersion.version}}\" ng-model=\"supportedVersion.supported\" ng-change=\"$ctrl.updateBrowser()\"></browser-check-box>\r\n\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 111:
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

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _browserTable = __webpack_require__(113);

var _browserTable2 = _interopRequireDefault(_browserTable);

var _browserTableStyle = __webpack_require__(114);

var _browserTableStyle2 = _interopRequireDefault(_browserTableStyle);

var _browserTable3 = __webpack_require__(115);

var _browserTable4 = _interopRequireDefault(_browserTable3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var browserTableComponent = {
    controller: _browserTable4.default,
    template: _browserTable2.default,
    bindings: {
        config: '<',
        versionLimit: '<',
        showUnsupported: '<'
    }
};

exports.default = browserTableComponent;

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

module.exports = "<table class=\"table text-center\">\r\n    <thead>\r\n    <tr>\r\n        <th ng-repeat=\"browser in $ctrl.config\" ng-show=\"browser.supported || $ctrl.showUnsupported\">{{browser.name}}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n        <td ng-repeat=\"browser in $ctrl.config\" ng-class=\"{'bg-danger':!$ctrl.hasFullSupport(browser)}\" ng-show=\"browser.supported || $ctrl.showUnsupported\">\r\n            <img ng-src=\"{{browser.image}}\" alt=\"{{browser.name}}\">\r\n            <hr>\r\n            <!--<p  >{{$ctrl.generateSupportDescription(browser)}}</p>\r\n            <hr>-->\r\n            <ul class=\"list-unstyled\">\r\n                <li ng-repeat=\"support in browser.support | limitTo:$ctrl.versionLimit\"\r\n                    ng-class=\"{'bg-danger':! browser.supported && support.supported}\">{{support.version}}\r\n                </li>\r\n            </ul>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
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
            return browser.supported && browser.support.every(function (version) {
                return version.supported;
            }) ? 'Full' : browser.supported && browser.support.some(function (version) {
                return version.supported;
            }) ? 'Some' : 'None';
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

/***/ 116:
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

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileSaver = __webpack_require__(65);

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
                    FileSaver.saveAs(blob, "SupportedBrowsersTable.png");
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

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(11);

var _angular2 = _interopRequireDefault(_angular);

var _angularjs = __webpack_require__(36);

var _angularjs2 = _interopRequireDefault(_angularjs);

var _homeRoutes = __webpack_require__(119);

var _homeRoutes2 = _interopRequireDefault(_homeRoutes);

var _home = __webpack_require__(120);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeModule = _angular2.default.module('app.home', [_angularjs2.default]);

homeModule.config(_homeRoutes2.default);

homeModule.component('home', _home2.default);

exports.default = homeModule;

/***/ }),

/***/ 119:
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

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _homeComponent = __webpack_require__(121);

var _homeComponent2 = _interopRequireDefault(_homeComponent);

var _home = __webpack_require__(122);

var _home2 = _interopRequireDefault(_home);

var _home3 = __webpack_require__(123);

var _home4 = _interopRequireDefault(_home3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeComponent = {
    bindings: {},
    template: _homeComponent2.default,
    controller: _home4.default
};

exports.default = homeComponent;

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h1 class=\"text-center\">Build a Supported Browser Table!</h1>\r\n    <hr>\r\n    <form class=\"\">\r\n\r\n        <div class=\"row mb\">\r\n            <div class=\"col-sm-12 text-center\">\r\n                <div class=\"form-group\">\r\n                <input class=\"form-control mb\" type=\"text\" ng-model=\"$ctrl.browserScope\" placeholder=\"{{$ctrl.defaultBrowserScope}}\" />\r\n                <button class=\"btn btn-info\" type=\"button\" ng-click=\"$ctrl.updateScope()\">Update Scope</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </form>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n        <browser-table id=\"SupportedBrowserTable\" config=\"$ctrl.checkedBrowsers\"\r\n                       version-limit=\"$ctrl.versionLimit\" show-unsupported=\"$ctrl.showUnsupported\"></browser-table>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n        <button class=\"btn btn-info\" ng-click=\"showImage = !showImage\">Generate Image</button>\r\n\r\n        <dom-image ng-if=\"showImage\" src-id=\"SupportedBrowserTable\"></dom-image>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _browserslist = __webpack_require__(124);

var _browserslist2 = _interopRequireDefault(_browserslist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeController = function () {
    function HomeController(CommonService) {
        _classCallCheck(this, HomeController);

        this.id = CommonService.guid();

        this.defaultBrowserScope = 'ie 11 , last 5 edge version, last 5 firefox version, last 5 chrome version, last 5 safari version, last 5 opera version';
        this.browserScope = '';
        this._checkedBrowsers = [{
            name: 'IE',
            supported: true,
            image: __webpack_require__(675),
            support: [{ version: '11', supported: true }, { version: '10', supported: false }, { version: '9', supported: false }, { version: '8', supported: false }]
        }, {
            name: 'Edge',
            supported: true,
            image: __webpack_require__(676),
            support: [{ version: '18', supported: true }, { version: '17', supported: true }, { version: '16', supported: true }, { version: '15', supported: true }, { version: '14', supported: true }, { version: '13', supported: true }, { version: '12', supported: true }]

        }, {
            name: 'FireFox',
            supported: true,
            image: __webpack_require__(677),
            support: [{ version: "71", supported: true }, { version: "70", supported: true }, { version: "69", supported: true }, { version: "68", supported: true }, { version: "67", supported: true }, { version: "66", supported: true }, { version: "65", supported: true }, { version: "64", supported: true }, { version: "63", supported: true }, { version: "62", supported: true }, { version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }, {
            name: 'Chrome',
            supported: true,
            image: __webpack_require__(678),
            support: [{ version: "80", supported: true }, { version: "79", supported: true }, { version: "78", supported: true }, { version: "77", supported: true }, { version: "76", supported: true }, { version: "75", supported: true }, { version: "74", supported: true }, { version: "73", supported: true }, { version: "72", supported: true }, { version: "71", supported: true }, { version: "70", supported: true }, { version: "69", supported: true }, { version: "68", supported: true }, { version: "67", supported: true }, { version: "66", supported: true }, { version: "65", supported: true }, { version: "64", supported: true }, { version: "63", supported: true }, { version: "62", supported: true }, { version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }, {
            name: 'Safari',
            supported: true,
            image: __webpack_require__(679),
            support: [{ version: "13.1", supported: true }, { version: "13", supported: true }, { version: "12.1", supported: true }, { version: "12", supported: true }, { version: "11.1", supported: true }, { version: "11", supported: true }, { version: "10.1", supported: true }, { version: "10", supported: true }, { version: "9.1", supported: true }, { version: "9", supported: true }, { version: "8", supported: true }, { version: "7.1", supported: true }, { version: "7", supported: true }, { version: "6.1", supported: true }, { version: "6", supported: true }, { version: "5.1", supported: true }, { version: "5", supported: true }, { version: "4", supported: true }]
        }, {
            name: 'Opera',
            supported: true,
            image: __webpack_require__(680),
            support: [{ version: "62", supported: true }, { version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }];
        this.checkedBrowsers = angular.copy(this._checkedBrowsers);
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
                cb.support = blist[cb.name.toLowerCase()];
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

/***/ 131:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(11);

var _angular2 = _interopRequireDefault(_angular);

var _angularjs = __webpack_require__(36);

var _angularjs2 = _interopRequireDefault(_angularjs);

var _fileSaver = __webpack_require__(65);

var _fileSaver2 = _interopRequireDefault(_fileSaver);

var _app = __webpack_require__(103);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(104);

__webpack_require__(106);

__webpack_require__(118);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requires = ['ui.router', 'app.services', 'app.components', 'app.home'];

//import app functionality


_angular2.default.module('browserSupportApp', requires).config(_app2.default);

/***/ })

},[73]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi8uL3NyYy9hcHAucm91dGVzLmpzIiwiLy4vc3JjL3NlcnZpY2VzL2luZGV4LmpzIiwiLy4vc3JjL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlLmpzIiwiLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCIvLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXItY2hlY2tsaXN0LmNvbXBvbmVudC5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3QuaHRtbCIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3Quc2NzcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci5jaGVja2xpc3QuY29udHJvbGxlci5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLmNvbXBvbmVudC5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLmh0bWwiLCIvLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5zdHlsZS5zY3NzIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuY29udHJvbGxlci5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXItY2hlY2tib3guanMiLCIvLi9zcmMvY29tcG9uZW50cy9kb20taW1hZ2UuanMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9pbmRleC5qcyIsIi8uL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUucm91dGVzLmpzIiwiLy4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwiLy4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5zY3NzIiwiLy4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwiL3BhdGggKGlnbm9yZWQpIiwiLy4vc3JjL2FwcC5tb2R1bGUuanMiXSwibmFtZXMiOlsicm91dGVzIiwiJGluamVjdCIsIiR1cmxSb3V0ZXJQcm92aWRlciIsIm90aGVyd2lzZSIsInNlcnZpY2VzTW9kdWxlIiwiYW5ndWxhciIsIm1vZHVsZSIsInNlcnZpY2UiLCJDb21tb25TZXJ2aWNlIiwiczQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImNvbXBvbmV0c01vZHVsZSIsImNvbXBvbmVudCIsImJyb3dzZXJDaGVja0JveCIsImJyb3dzZXJMaXN0Q29tcG9uZW50IiwiYnJvd3NlclRhYmxlQ29tcG9uZW50IiwiZG9tSW1hZ2UiLCJiaW5kaW5ncyIsImJyb3dzZXIiLCJ2ZXJzaW9uTGltaXQiLCJvblVwZGF0ZWQiLCJ0ZW1wbGF0ZSIsImNvbnRyb2xsZXIiLCJCcm93c2VyTGlzdENvbnRyb2xsZXIiLCJpZCIsImd1aWQiLCJjaGFuZ2VzIiwiY29weSIsInVwZGF0ZWQiLCJ1cGRhdGVkQnJvd3NlciIsImNvbmZpZyIsInNob3dVbnN1cHBvcnRlZCIsIkJyb3dzZXJUYWJsZUNvbnRyb2xsZXIiLCJzdXBwb3J0ZWQiLCJzdXBwb3J0IiwiZXZlcnkiLCJ2ZXJzaW9uIiwic29tZSIsIkJyb3dzZXJDaGVja2JveENvbnRyb2xsZXIiLCJuZ01vZGVsQ3RybCIsIiRzZXRWaWV3VmFsdWUiLCJuZ01vZGVsIiwiYnJvd3NlckNoZWNrYm94Q29tcG9uZW50IiwibmFtZSIsInJlcXVpcmUiLCJGaWxlU2F2ZXIiLCJEb21JbWFnZUNvbnRyb2xsZXIiLCIkcSIsIkhUTUxDYW52YXNFbGVtZW50IiwicHJvdG90eXBlIiwidG9CbG9iIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNhbGxiYWNrIiwidHlwZSIsInF1YWxpdHkiLCJjYW52YXMiLCJzZXRUaW1lb3V0IiwiYmluU3RyIiwiYXRvYiIsInRvRGF0YVVSTCIsInNwbGl0IiwibGVuIiwibGVuZ3RoIiwiYXJyIiwiVWludDhBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsInNyY0lkIiwidXBkYXRlSW1hZ2UiLCJzcmMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImlzVXBkYXRpbmdJbWFnZSIsImNvbXB1dGVkU3R5bGVUb0lubGluZVN0eWxlIiwicmVjdXJzaXZlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJkYXRhIiwiaHRtbF90b194bWwiLCJpbm5lckhUTUwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJpbWciLCJJbWFnZSIsIm5ld0ltYWdlSWQiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJibG9iIiwibmV3SW1nIiwiY3JlYXRlRWxlbWVudCIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJldm9rZU9iamVjdFVSTCIsImNsYXNzTGlzdCIsImFkZCIsIm9sZEltZyIsInJlbW92ZSIsInNob3dJbWFnZSIsImluc2VydEFkamFjZW50SFRNTCIsIm91dGVySFRNTCIsInNhdmVBcyIsImh0bWwiLCJkb2MiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsIndyaXRlIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibmFtZXNwYWNlVVJJIiwiWE1MU2VyaWFsaXplciIsInNlcmlhbGl6ZVRvU3RyaW5nIiwiYm9keSIsImVsZW1lbnQiLCJvcHRpb25zIiwiRXJyb3IiLCJBcnJheSIsImZvckVhY2giLCJjYWxsIiwiY2hpbGRyZW4iLCJjaGlsZCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwicHJvcGVydHkiLCJpdGVtIiwicHJvcGVydGllcyIsImluZGV4T2YiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3R5bGUiLCJkb21JbWFnZUNvbXBvbmVudCIsImhvbWVNb2R1bGUiLCJ1aXJvdXRlciIsImhvbWVDb21wb25lbnQiLCIkc3RhdGVQcm92aWRlciIsInN0YXRlIiwiSG9tZUNvbnRyb2xsZXIiLCJkZWZhdWx0QnJvd3NlclNjb3BlIiwiYnJvd3NlclNjb3BlIiwiX2NoZWNrZWRCcm93c2VycyIsImltYWdlIiwiY2hlY2tlZEJyb3dzZXJzIiwidXBkYXRlU2NvcGUiLCJjcyIsImlnbm9yZVVua25vd25WZXJzaW9ucyIsIm1hcCIsImJsaXN0IiwiYiIsInB1c2giLCJjYiIsInRvTG93ZXJDYXNlIiwiY2hlY2tlZEJyb3dzZXIiLCJyZXF1aXJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7a0JBQ3dCQSxNO0FBRHhCQSxPQUFPQyxPQUFQLEdBQWlCLENBQUMsb0JBQUQsQ0FBakI7QUFDZSxTQUFTRCxNQUFULENBQWdCRSxrQkFBaEIsRUFBb0M7QUFDL0NBLHVCQUFtQkMsU0FBbkIsQ0FBNkIsR0FBN0I7QUFDSCxDOzs7Ozs7Ozs7Ozs7OztBQ0hEOzs7O0FBQ0E7Ozs7QUFFQSxJQUFJQyxpQkFBaUJDLGtCQUFRQyxNQUFSLENBQWUsY0FBZixFQUErQixFQUEvQixDQUFyQjs7QUFFSUYsZUFBZUcsT0FBZixDQUF1QixlQUF2QixFQUF3Q0MscUJBQXhDOztrQkFFV0osYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDTlRJLGE7QUFDRiw2QkFBYztBQUFBO0FBRWI7Ozs7K0JBQ007QUFDSCxxQkFBU0MsRUFBVCxHQUFjO0FBQ1YsdUJBQU9DLEtBQUtDLEtBQUwsQ0FBVyxDQUFDLElBQUlELEtBQUtFLE1BQUwsRUFBTCxJQUFzQixPQUFqQyxFQUNGQyxRQURFLENBQ08sRUFEUCxFQUVGQyxTQUZFLENBRVEsQ0FGUixDQUFQO0FBR0g7QUFDRCxtQkFBT0wsT0FBT0EsSUFBUCxHQUFjLEdBQWQsR0FBb0JBLElBQXBCLEdBQTJCLEdBQTNCLEdBQWlDQSxJQUFqQyxHQUF3QyxHQUF4QyxHQUNIQSxJQURHLEdBQ0ksR0FESixHQUNVQSxJQURWLEdBQ2lCQSxJQURqQixHQUN3QkEsSUFEL0I7QUFFSDs7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c0NvbnRlbnQiOlsicm91dGVzLiRpbmplY3QgPSBbJyR1cmxSb3V0ZXJQcm92aWRlciddO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3V0ZXMoJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLnJvdXRlcy5qcyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCB7Q29tbW9uU2VydmljZX0gZnJvbSAnLi9jb21tb24uc2VydmljZSc7XHJcblxyXG5sZXQgc2VydmljZXNNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgW10pO1xyXG5cclxuICAgIHNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0NvbW1vblNlcnZpY2UnLCBDb21tb25TZXJ2aWNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2VzTW9kdWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9pbmRleC5qcyIsIlxyXG5jbGFzcyBDb21tb25TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuICAgIGd1aWQoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gczQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xyXG4gICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgIHtDb21tb25TZXJ2aWNlfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvY29tbW9uLnNlcnZpY2UuanMiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgYnJvd3Nlckxpc3RDb21wb25lbnQgZnJvbSAnLi9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXItY2hlY2tsaXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBicm93c2VyVGFibGVDb21wb25lbnQgZnJvbSAnLi9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgYnJvd3NlckNoZWNrQm94IGZyb20gJy4vYnJvd3Nlci1jaGVja2JveCc7XHJcbmltcG9ydCBkb21JbWFnZSBmcm9tICcuL2RvbS1pbWFnZSc7XHJcblxyXG5sZXQgY29tcG9uZXRzTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb21wb25lbnRzJyxbXSk7XHJcblxyXG5jb21wb25ldHNNb2R1bGUuY29tcG9uZW50KCdicm93c2VyQ2hlY2tCb3gnLCBicm93c2VyQ2hlY2tCb3gpO1xyXG5jb21wb25ldHNNb2R1bGUuY29tcG9uZW50KCdicm93c2VyQ2hlY2tMaXN0JywgYnJvd3Nlckxpc3RDb21wb25lbnQpO1xyXG5jb21wb25ldHNNb2R1bGUuY29tcG9uZW50KCdicm93c2VyVGFibGUnLCBicm93c2VyVGFibGVDb21wb25lbnQpO1xyXG5jb21wb25ldHNNb2R1bGUuY29tcG9uZW50KCdkb21JbWFnZScsIGRvbUltYWdlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmV0c01vZHVsZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9icm93c2VyLWNoZWNrbGlzdC5odG1sJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Jyb3dzZXItY2hlY2tsaXN0LnNjc3MnO1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2Jyb3dzZXIuY2hlY2tsaXN0LmNvbnRyb2xsZXInO1xyXG5cclxuXHJcblxyXG5sZXQgYnJvd3Nlckxpc3RDb21wb25lbnQgPSB7XHJcbiAgICBiaW5kaW5ncyA6ICB7XHJcbiAgICAgICAgYnJvd3NlcjogJzwnLFxyXG4gICAgICAgIHZlcnNpb25MaW1pdDogJzwnLFxyXG4gICAgICAgIG9uVXBkYXRlZDogJyY/J1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlLFxyXG4gICAgY29udHJvbGxlclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBicm93c2VyTGlzdENvbXBvbmVudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5jb21wb25lbnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGI+PGJyb3dzZXItY2hlY2stYm94IG5hbWU9XFxcInt7JGN0cmwuYnJvd3Nlci5uYW1lfX1cXFwiIG5nLW1vZGVsPVxcXCIkY3RybC5icm93c2VyLnN1cHBvcnRlZFxcXCIgbmctY2hhbmdlPVxcXCIkY3RybC51cGRhdGVCcm93c2VyKClcXFwiPjwvYnJvd3Nlci1jaGVjay1ib3g+PC9iPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcImxpc3QtdW5zdHlsZWRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoxNXB4O1xcXCI+XFxyXFxuICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJzdXBwb3J0ZWRWZXJzaW9uIGluICRjdHJsLmJyb3dzZXIuc3VwcG9ydCAgfCBsaW1pdFRvOiAkY3RybC52ZXJzaW9uTGltaXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxicm93c2VyLWNoZWNrLWJveCBuYW1lPVxcXCJ7e3N1cHBvcnRlZFZlcnNpb24udmVyc2lvbn19XFxcIiBuZy1tb2RlbD1cXFwic3VwcG9ydGVkVmVyc2lvbi5zdXBwb3J0ZWRcXFwiIG5nLWNoYW5nZT1cXFwiJGN0cmwudXBkYXRlQnJvd3NlcigpXFxcIj48L2Jyb3dzZXItY2hlY2stYm94PlxcclxcblxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3Quc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJvd3Nlckxpc3RDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihDb21tb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IENvbW1vblNlcnZpY2UuZ3VpZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkb25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5icm93c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnJvd3NlciA9IGFuZ3VsYXIuY29weSh0aGlzLmJyb3dzZXIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMudmVyc2lvbkxpbWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVyc2lvbkxpbWl0ID0gYW5ndWxhci5jb3B5KHRoaXMudmVyc2lvbkxpbWl0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB1cGRhdGVCcm93c2VyKCkge1xyXG4gICAgICAgIGxldCB1cGRhdGVkID0gYW5ndWxhci5jb3B5KHRoaXMuYnJvd3Nlcik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9uVXBkYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlZCh7dXBkYXRlZEJyb3dzZXI6IHVwZGF0ZWR9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci5jaGVja2xpc3QuY29udHJvbGxlci5qcyIsIlxyXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9icm93c2VyLXRhYmxlLmh0bWwnO1xyXG5pbXBvcnQgY29tcG9uZW50U3R5bGVzIGZyb20gJy4vYnJvd3Nlci10YWJsZS5zdHlsZS5zY3NzJztcclxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9icm93c2VyLXRhYmxlLmNvbnRyb2xsZXInO1xyXG5cclxubGV0IGJyb3dzZXJUYWJsZUNvbXBvbmVudCA9IHtcclxuICAgIGNvbnRyb2xsZXI6Y29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOnRlbXBsYXRlLFxyXG4gICAgYmluZGluZ3MgOiB7XHJcbiAgICAgICAgY29uZmlnOiAnPCcsXHJcbiAgICAgICAgdmVyc2lvbkxpbWl0OiAnPCcsXHJcbiAgICAgICAgc2hvd1Vuc3VwcG9ydGVkOiAnPCdcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJvd3NlclRhYmxlQ29tcG9uZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5jb21wb25lbnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgPHRyPlxcclxcbiAgICAgICAgPHRoIG5nLXJlcGVhdD1cXFwiYnJvd3NlciBpbiAkY3RybC5jb25maWdcXFwiIG5nLXNob3c9XFxcImJyb3dzZXIuc3VwcG9ydGVkIHx8ICRjdHJsLnNob3dVbnN1cHBvcnRlZFxcXCI+e3ticm93c2VyLm5hbWV9fTwvdGg+XFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgPHRyPlxcclxcbiAgICAgICAgPHRkIG5nLXJlcGVhdD1cXFwiYnJvd3NlciBpbiAkY3RybC5jb25maWdcXFwiIG5nLWNsYXNzPVxcXCJ7J2JnLWRhbmdlcic6ISRjdHJsLmhhc0Z1bGxTdXBwb3J0KGJyb3dzZXIpfVxcXCIgbmctc2hvdz1cXFwiYnJvd3Nlci5zdXBwb3J0ZWQgfHwgJGN0cmwuc2hvd1Vuc3VwcG9ydGVkXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIG5nLXNyYz1cXFwie3ticm93c2VyLmltYWdlfX1cXFwiIGFsdD1cXFwie3ticm93c2VyLm5hbWV9fVxcXCI+XFxyXFxuICAgICAgICAgICAgPGhyPlxcclxcbiAgICAgICAgICAgIDwhLS08cCAgPnt7JGN0cmwuZ2VuZXJhdGVTdXBwb3J0RGVzY3JpcHRpb24oYnJvd3Nlcil9fTwvcD5cXHJcXG4gICAgICAgICAgICA8aHI+LS0+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LXVuc3R5bGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwic3VwcG9ydCBpbiBicm93c2VyLnN1cHBvcnQgfCBsaW1pdFRvOiRjdHJsLnZlcnNpb25MaW1pdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5nLWNsYXNzPVxcXCJ7J2JnLWRhbmdlcic6ISBicm93c2VyLnN1cHBvcnRlZCAmJiBzdXBwb3J0LnN1cHBvcnRlZH1cXFwiPnt7c3VwcG9ydC52ZXJzaW9ufX1cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC90ZD5cXHJcXG4gICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLnN0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VyVGFibGVDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVTdXBwb3J0RGVzY3JpcHRpb24oYnJvd3Nlcikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN1cHBvcnRlZCAmJiBicm93c2VyLnN1cHBvcnQuZXZlcnkoKHZlcnNpb24pID0+IHZlcnNpb24uc3VwcG9ydGVkKSA/ICdGdWxsJyA6IGJyb3dzZXIuc3VwcG9ydGVkICYmIGJyb3dzZXIuc3VwcG9ydC5zb21lKCh2ZXJzaW9uKSA9PiB2ZXJzaW9uLnN1cHBvcnRlZCkgPyAnU29tZScgOiAnTm9uZSc7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhc0Z1bGxTdXBwb3J0KGJyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdXBwb3J0ZWQgJiYgYnJvd3Nlci5zdXBwb3J0LmV2ZXJ5KCh2ZXJzaW9uKSA9PiB2ZXJzaW9uLnN1cHBvcnRlZCk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5jb250cm9sbGVyLmpzIiwiXHJcbmNsYXNzIEJyb3dzZXJDaGVja2JveENvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKENvbW1vblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmlkID0gQ29tbW9uU2VydmljZS5ndWlkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nTW9kZWxDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5uZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKHRoaXMubmdNb2RlbCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgYnJvd3NlckNoZWNrYm94Q29tcG9uZW50ID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBuYW1lOiAnQCcsXHJcbiAgICAgICAgbmdNb2RlbDogJzwnLFxyXG5cclxuICAgIH0sXHJcbiAgICByZXF1aXJlOiB7bmdNb2RlbEN0cmw6ICduZ01vZGVsJ30sXHJcbiAgICBjb250cm9sbGVyOiBCcm93c2VyQ2hlY2tib3hDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cIiRjdHJsLm5hbWVcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cImNoZWNrLXt7JGN0cmwuaWR9fVwiIG5nLW1vZGVsPSckY3RybC5uZ01vZGVsJyBuZy1jaGFuZ2U9XCIkY3RybC5uZ01vZGVsQ2hhbmdlKClcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImNoZWNrLXt7JGN0cmwuaWR9fVwiPnt7JGN0cmwubmFtZX19PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyb3dzZXJDaGVja2JveENvbXBvbmVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyLWNoZWNrYm94LmpzIiwidmFyIEZpbGVTYXZlciA9IHJlcXVpcmUoJ2ZpbGUtc2F2ZXInKTtcclxuY2xhc3MgRG9tSW1hZ2VDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigkcSwgQ29tbW9uU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgICAgIHRoaXMuQ29tbW9uU2VydmljZSA9IENvbW1vblNlcnZpY2U7XHJcblxyXG4gICAgICAgIGlmICghSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlLnRvQmxvYikge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlLCAndG9CbG9iJywge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmluU3RyID0gYXRvYihjYW52YXMudG9EYXRhVVJMKHR5cGUsIHF1YWxpdHkpLnNwbGl0KCcsJylbMV0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuID0gYmluU3RyLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyciA9IG5ldyBVaW50OEFycmF5KGxlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0gPSBiaW5TdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEJsb2IoW2Fycl0sIHt0eXBlOiB0eXBlIHx8ICdpbWFnZS9wbmcnfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLkNvbW1vblNlcnZpY2UuZ3VpZCgpO1xyXG4gICAgfVxyXG5cclxuICAgICRvbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLnNyY0lkKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUltYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRwb3N0TGluaygpIHtcclxuICAgICAgICBpZiAodGhpcy5zcmNJZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUltYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVJbWFnZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHNyYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3JjSWQpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2FudmFzLSR7dGhpcy5pZH1gKTtcclxuICAgICAgICBpZiAoIWNhbnZhcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkbid0IGZpbmQgY2FudmFzXCIpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUltYWdlKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaXNVcGRhdGluZ0ltYWdlKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1VwZGF0aW5nSW1hZ2UgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXB1dGVkU3R5bGVUb0lubGluZVN0eWxlKHNyYywge3JlY3Vyc2l2ZTp0cnVlfSk7XHJcblxyXG5cclxuICAgICAgICBjYW52YXMud2lkdGggPSBzcmMub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNyYy5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIiR7c3JjLm9mZnNldFdpZHRofVwiIGhlaWdodD1cIiR7c3JjLm9mZnNldEhlaWdodH1cIj5gICtcclxuICAgICAgICAgICAgJzxmb3JlaWduT2JqZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj4nICtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaHRtbF90b194bWwoc3JjLmlubmVySFRNTCkgK1xyXG5cclxuICAgICAgICAgICAgJzwvZm9yZWlnbk9iamVjdD4nICtcclxuICAgICAgICAgICAgJzwvc3ZnPic7XHJcblxyXG4gICAgICAgIGRhdGEgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICAgIGxldCBuZXdJbWFnZUlkID0gYGltYWdlLSR7dGhpcy5pZH1gO1xyXG5cclxuICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XHJcblxyXG4gICAgICAgICAgICBjYW52YXMudG9CbG9iKCAoYmxvYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3SW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBubyBsb25nZXIgbmVlZCB0byByZWFkIHRoZSBibG9iIHNvIGl0J3MgcmV2b2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3SW1nLnNyYyA9IHVybDtcclxuICAgICAgICAgICAgICAgIG5ld0ltZy5pZCA9IG5ld0ltYWdlSWQ7XHJcbiAgICAgICAgICAgICAgICBuZXdJbWcuY2xhc3NMaXN0LmFkZChcInJvdW5kZWRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2xkSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3SW1hZ2VJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkSW1nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkSW1nLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2hvd0ltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBuZXdJbWcub3V0ZXJIVE1MKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgXCJTdXBwb3J0ZWRCcm93c2Vyc1RhYmxlLnBuZ1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNVcGRhdGluZ0ltYWdlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbWcuc3JjID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCxcIiArIGRhdGE7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBodG1sX3RvX3htbChodG1sKSB7XHJcbiAgICAgICAgdmFyIGRvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgnJyk7XHJcbiAgICAgICAgZG9jLndyaXRlKGh0bWwpO1xyXG5cclxuICAgICAgICAvLyBZb3UgbXVzdCBtYW51YWxseSBzZXQgdGhlIHhtbG5zIGlmIHlvdSBpbnRlbmQgdG8gaW1tZWRpYXRlbHkgc2VyaWFsaXplXHJcbiAgICAgICAgLy8gdGhlIEhUTUwgZG9jdW1lbnQgdG8gYSBzdHJpbmcgYXMgb3Bwb3NlZCB0byBhcHBlbmRpbmcgaXQgdG8gYVxyXG4gICAgICAgIC8vIDxmb3JlaWduT2JqZWN0PiBpbiB0aGUgRE9NXHJcbiAgICAgICAgZG9jLmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgZG9jLmRvY3VtZW50RWxlbWVudC5uYW1lc3BhY2VVUkkpO1xyXG5cclxuICAgICAgICAvLyBHZXQgd2VsbC1mb3JtZWQgbWFya3VwXHJcbiAgICAgICAgaHRtbCA9IChuZXcgWE1MU2VyaWFsaXplcikuc2VyaWFsaXplVG9TdHJpbmcoZG9jLmJvZHkpO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkU3R5bGVUb0lubGluZVN0eWxlKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gZWxlbWVudCBzcGVjaWZpZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLnJlY3Vyc2l2ZSkge1xyXG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsZW1lbnQuY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlZFN0eWxlVG9JbmxpbmVTdHlsZShjaGlsZCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBjb21wdXRlZFN0eWxlLml0ZW0oaSk7XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5wcm9wZXJ0aWVzIHx8IG9wdGlvbnMucHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5KSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCBkb21JbWFnZUNvbXBvbmVudCA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgc3JjSWQ6ICdAJyxcclxuICAgICAgICBzaG93SW1hZ2U6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IERvbUltYWdlQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiBgPGNhbnZhcyBpZD1cImNhbnZhcy17eyRjdHJsLmlkfX1cIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiPjwvY2FudmFzPmBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbUltYWdlQ29tcG9uZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9kb20taW1hZ2UuanMiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgdWlyb3V0ZXIgZnJvbSAnQHVpcm91dGVyL2FuZ3VsYXJqcyc7XHJcblxyXG5sZXQgaG9tZU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuaG9tZScsW3Vpcm91dGVyXSk7XHJcblxyXG5cclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL2hvbWUucm91dGVzLmpzJ1xyXG5ob21lTW9kdWxlLmNvbmZpZyhyb3V0ZXMpO1xyXG5cclxuaW1wb3J0IGhvbWVDb21wb25lbnQgZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XHJcbmhvbWVNb2R1bGUuY29tcG9uZW50KCdob21lJywgaG9tZUNvbXBvbmVudCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lTW9kdWxlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmVhdHVyZXMvaG9tZS9pbmRleC5qcyIsInJvdXRlcy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlciddO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVzKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnaG9tZScsIHtcclxuICAgICAgICAgICAgdXJsOiAnLycsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ2hvbWUnXHJcbiAgICAgICAgfSk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLnJvdXRlcy5qcyIsIlxyXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ob21lLmNvbXBvbmVudC5odG1sJztcclxuaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tICcuL2hvbWUuc2Nzcyc7XHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vaG9tZS5jb250cm9sbGVyJztcclxuXHJcblxyXG5sZXQgaG9tZUNvbXBvbmVudCA9IHtcclxuICAgIGJpbmRpbmdzOnt9LFxyXG4gICAgdGVtcGxhdGU6dGVtcGxhdGUsXHJcbiAgICBjb250cm9sbGVyOmNvbnRyb2xsZXJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImp1bWJvdHJvblxcXCI+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPkJ1aWxkIGEgU3VwcG9ydGVkIEJyb3dzZXIgVGFibGUhPC9oMT5cXHJcXG4gICAgPGhyPlxcclxcbiAgICA8Zm9ybSBjbGFzcz1cXFwiXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBtYlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG1iXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwuYnJvd3NlclNjb3BlXFxcIiBwbGFjZWhvbGRlcj1cXFwie3skY3RybC5kZWZhdWx0QnJvd3NlclNjb3BlfX1cXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwudXBkYXRlU2NvcGUoKVxcXCI+VXBkYXRlIFNjb3BlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJyb3dzZXItdGFibGUgaWQ9XFxcIlN1cHBvcnRlZEJyb3dzZXJUYWJsZVxcXCIgY29uZmlnPVxcXCIkY3RybC5jaGVja2VkQnJvd3NlcnNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uLWxpbWl0PVxcXCIkY3RybC52ZXJzaW9uTGltaXRcXFwiIHNob3ctdW5zdXBwb3J0ZWQ9XFxcIiRjdHJsLnNob3dVbnN1cHBvcnRlZFxcXCI+PC9icm93c2VyLXRhYmxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIiBuZy1jbGljaz1cXFwic2hvd0ltYWdlID0gIXNob3dJbWFnZVxcXCI+R2VuZXJhdGUgSW1hZ2U8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgIDxkb20taW1hZ2UgbmctaWY9XFxcInNob3dJbWFnZVxcXCIgc3JjLWlkPVxcXCJTdXBwb3J0ZWRCcm93c2VyVGFibGVcXFwiPjwvZG9tLWltYWdlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgYnJvd3NlcnNsaXN0IGZyb20gXCJicm93c2Vyc2xpc3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihDb21tb25TZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLmlkID0gQ29tbW9uU2VydmljZS5ndWlkKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdEJyb3dzZXJTY29wZSA9ICdpZSAxMSAsIGxhc3QgNSBlZGdlIHZlcnNpb24sIGxhc3QgNSBmaXJlZm94IHZlcnNpb24sIGxhc3QgNSBjaHJvbWUgdmVyc2lvbiwgbGFzdCA1IHNhZmFyaSB2ZXJzaW9uLCBsYXN0IDUgb3BlcmEgdmVyc2lvbic7XHJcbiAgICAgICAgdGhpcy5icm93c2VyU2NvcGUgPSAnJztcclxuICAgICAgICB0aGlzLl9jaGVja2VkQnJvd3NlcnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdJRScsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL2ludGVybmV0LWV4cGxvcmVyXzktMTEvaW50ZXJuZXQtZXhwbG9yZXJfOS0xMV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTEnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTAnLCBzdXBwb3J0ZWQ6IGZhbHNlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzknLCBzdXBwb3J0ZWQ6IGZhbHNlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzgnLCBzdXBwb3J0ZWQ6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRWRnZScsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL2VkZ2UvZWRnZV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTgnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTcnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTYnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTUnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTQnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTMnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTInLCBzdXBwb3J0ZWQ6IHRydWV9XHJcbiAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRmlyZUZveCcsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL2ZpcmVmb3gvZmlyZWZveF8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjcxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNThcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzM1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ2hyb21lJyxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJyb3dzZXItbG9nb3MvY2hyb21lL2Nocm9tZV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjgwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjc3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjc0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjcxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNThcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzM1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2FmYXJpJyxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJyb3dzZXItbG9nb3Mvc2FmYXJpL3NhZmFyaV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjEzLjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxM1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjEyLjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxMlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjExLjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjEwLjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxMFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjkuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNy4xXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiN1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1LjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnT3BlcmEnLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYnJvd3Nlci1sb2dvcy9vcGVyYS9vcGVyYV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNThcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzM1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5jaGVja2VkQnJvd3NlcnMgPSBhbmd1bGFyLmNvcHkodGhpcy5fY2hlY2tlZEJyb3dzZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICAkb25Jbml0KCl7XHJcblxyXG4gICAgICAgdGhpcy51cGRhdGVTY29wZSgpO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3BlKCl7XHJcbiAgICAgICAgbGV0IGNzID0gdGhpcy5icm93c2VyU2NvcGV8fHRoaXMuZGVmYXVsdEJyb3dzZXJTY29wZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkID0gYnJvd3NlcnNsaXN0KGNzLCB7aWdub3JlVW5rbm93blZlcnNpb25zOiB0cnVlfSlcclxuICAgICAgICAgICAgLm1hcCgoYnJvd3NlcikgPT4gYnJvd3Nlci5zcGxpdChcIiBcIikpO1xyXG5cclxuICAgICAgICBsZXQgYmxpc3QgPSB7fTtcclxuICAgICAgICBzdXBwb3J0ZWQuZm9yRWFjaCgoYik9PntcclxuICAgICAgICAgICAgaWYoIWJsaXN0W2JbMF1dKXtcclxuICAgICAgICAgICAgICAgIGJsaXN0W2JbMF1dID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmxpc3RbYlswXV0ucHVzaCh7J3ZlcnNpb24nOmJbMV0sJ3N1cHBvcnRlZCc6dHJ1ZX0pO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB0aGlzLmNoZWNrZWRCcm93c2Vycy5mb3JFYWNoKChjYik9PntcclxuICAgICAgICAgICAgY2Iuc3VwcG9ydCA9IGJsaXN0W2NiLm5hbWUudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJyb3dzZXIodXBkYXRlZEJyb3dzZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja2VkQnJvd3NlcnMuZm9yRWFjaCgoY2hlY2tlZEJyb3dzZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWRCcm93c2VyLm5hbWUgPT09IHVwZGF0ZWRCcm93c2VyLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRCcm93c2VyLnN1cHBvcnQgPSB1cGRhdGVkQnJvd3Nlci5zdXBwb3J0O1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZEJyb3dzZXIuc3VwcG9ydGVkID0gdXBkYXRlZEJyb3dzZXIuc3VwcG9ydGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gcGF0aCAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHVpcm91dGVyIGZyb20gJ0B1aXJvdXRlci9hbmd1bGFyanMnO1xyXG5pbXBvcnQgZmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5cclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL2FwcC5yb3V0ZXMnO1xyXG5cclxuLy9pbXBvcnQgYXBwIGZ1bmN0aW9uYWxpdHlcclxuaW1wb3J0ICcuL3NlcnZpY2VzJztcclxuXHJcbmltcG9ydCAnLi9jb21wb25lbnRzJztcclxuaW1wb3J0ICcuL2ZlYXR1cmVzL2hvbWUnO1xyXG5cclxuY29uc3QgcmVxdWlyZXMgPSBbXHJcbiAgICAndWkucm91dGVyJyxcclxuICAgICdhcHAuc2VydmljZXMnLFxyXG4gICAgJ2FwcC5jb21wb25lbnRzJyxcclxuICAgICdhcHAuaG9tZSdcclxuXTtcclxuXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYnJvd3NlclN1cHBvcnRBcHAnLCByZXF1aXJlcylcclxuICAgIC5jb25maWcocm91dGVzKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5tb2R1bGUuanMiXSwic291cmNlUm9vdCI6IiJ9