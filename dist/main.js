webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeController = function () {
    function HomeController(CommonService) {
        _classCallCheck(this, HomeController);

        this.id = CommonService.guid();
        this.versionLimit = 5;
        this._checkedBrowsers = [{
            name: 'IE',
            supported: true,
            image: __webpack_require__(101),
            support: [{ version: '11', supported: true }, { version: '10', supported: true }, { version: '9', supported: false }, { version: '8', supported: false }]
        }, {
            name: 'Edge',
            supported: true,
            image: __webpack_require__(102),
            support: [{ version: '17', supported: true }, { version: '16', supported: true }, { version: '15', supported: true }, { version: '14', supported: true }, { version: '13', supported: true }, { version: '12', supported: true }]

        }, {
            name: 'FireFox',
            supported: true,
            image: __webpack_require__(103),
            support: [{ version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }, {
            name: 'Chrome',
            supported: true,
            image: __webpack_require__(104),
            support: [{ version: "67", supported: true }, { version: "66", supported: true }, { version: "65", supported: true }, { version: "64", supported: true }, { version: "63", supported: true }, { version: "62", supported: true }, { version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }, {
            name: 'Safari',
            supported: true,
            image: __webpack_require__(105),
            support: [{ version: "TP", supported: true }, { version: "11.1", supported: true }, { version: "11", supported: true }, { version: "10.1", supported: true }, { version: "10", supported: true }, { version: "9.1", supported: true }, { version: "9", supported: true }, { version: "8", supported: true }, { version: "7.1", supported: true }, { version: "7", supported: true }, { version: "6.1", supported: true }, { version: "6", supported: true }, { version: "5.1", supported: true }, { version: "5", supported: true }, { version: "4", supported: true }]
        }, {
            name: 'Opera',
            supported: true,
            image: __webpack_require__(106),
            support: [{ version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }];
        this.checkedBrowsers = angular.copy(this._checkedBrowsers);
    }

    _createClass(HomeController, [{
        key: '$onInit',
        value: function $onInit() {}
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
    }, {
        key: 'updateVersionLimit',
        value: function updateVersionLimit() {}
    }]);

    return HomeController;
}();

exports.default = HomeController;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(10);

var _angular2 = _interopRequireDefault(_angular);

var _angularjs = __webpack_require__(27);

var _angularjs2 = _interopRequireDefault(_angularjs);

var _fileSaver = __webpack_require__(77);

var _fileSaver2 = _interopRequireDefault(_fileSaver);

var _app = __webpack_require__(80);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(81);

__webpack_require__(83);

__webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requires = ['ui.router', 'app.services', 'app.components', 'app.home'];

//import app functionality


_angular2.default.module('browserSupportApp', requires).config(_app2.default);

/***/ }),

/***/ 80:
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

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = __webpack_require__(10);

var _angular2 = _interopRequireDefault(_angular);

var _common = __webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var servicesModule = _angular2.default.module('app.services', []);

servicesModule.service('CommonService', _common.CommonService);

exports.default = servicesModule;

/***/ }),

/***/ 82:
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

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(10);

var _angular2 = _interopRequireDefault(_angular);

var _browserChecklist = __webpack_require__(84);

var _browserChecklist2 = _interopRequireDefault(_browserChecklist);

var _browserTable = __webpack_require__(89);

var _browserTable2 = _interopRequireDefault(_browserTable);

var _browserCheckbox = __webpack_require__(93);

var _browserCheckbox2 = _interopRequireDefault(_browserCheckbox);

var _domImage = __webpack_require__(94);

var _domImage2 = _interopRequireDefault(_domImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componetsModule = _angular2.default.module('app.components', []);

componetsModule.component('browserCheckBox', _browserCheckbox2.default);
componetsModule.component('browserCheckList', _browserChecklist2.default);
componetsModule.component('browserTable', _browserTable2.default);
componetsModule.component('domImage', _domImage2.default);

exports.default = componetsModule;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _browserChecklist = __webpack_require__(85);

var _browserChecklist2 = _interopRequireDefault(_browserChecklist);

var _browserChecklist3 = __webpack_require__(86);

var _browserChecklist4 = _interopRequireDefault(_browserChecklist3);

var _browserChecklist5 = __webpack_require__(88);

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

/***/ 85:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <b><browser-check-box name=\"{{$ctrl.browser.name}}\" ng-model=\"$ctrl.browser.supported\" ng-change=\"$ctrl.updateBrowser()\"></browser-check-box></b>\r\n    <ul class=\"list-unstyled\" style=\"margin-left:15px;\">\r\n        <li ng-repeat=\"supportedVersion in $ctrl.browser.support  | limitTo: $ctrl.versionLimit\">\r\n            <browser-check-box name=\"{{supportedVersion.version}}\" ng-model=\"supportedVersion.supported\" ng-change=\"$ctrl.updateBrowser()\"></browser-check-box>\r\n\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 88:
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

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _browserTable = __webpack_require__(90);

var _browserTable2 = _interopRequireDefault(_browserTable);

var _browserTableStyle = __webpack_require__(91);

var _browserTableStyle2 = _interopRequireDefault(_browserTableStyle);

var _browserTable3 = __webpack_require__(92);

var _browserTable4 = _interopRequireDefault(_browserTable3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var browserTableComponent = {
    controller: _browserTable4.default,
    template: _browserTable2.default,
    bindings: {
        config: '<',
        versionLimit: '<'
    }
};

exports.default = browserTableComponent;

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = "<table class=\"table text-center\">\r\n    <thead>\r\n    <tr>\r\n        <th ng-repeat=\"browser in $ctrl.config\">{{browser.name}}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n        <td ng-repeat=\"browser in $ctrl.config\" ng-class=\"{'bg-success':$ctrl.hasFullSupport(browser),'bg-danger':!$ctrl.hasFullSupport(browser)}\">\r\n            <img ng-src=\"{{browser.image}}\" alt=\"{{browser.name}}\">\r\n            <hr>\r\n            <p  >{{$ctrl.generateSupportDescription(browser)}}</p>\r\n            <hr>\r\n            <ul class=\"list-unstyled\">\r\n                <li ng-repeat=\"support in browser.support | limitTo:$ctrl.versionLimit\"\r\n                    ng-class=\"{'bg-success':browser.supported && support.supported,'bg-danger':! browser.supported && support.supported}\">{{support.version}}\r\n                </li>\r\n            </ul>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 92:
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

/***/ 93:
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

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileSaver = __webpack_require__(77);

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

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(10);

var _angular2 = _interopRequireDefault(_angular);

var _angularjs = __webpack_require__(27);

var _angularjs2 = _interopRequireDefault(_angularjs);

var _homeRoutes = __webpack_require__(96);

var _homeRoutes2 = _interopRequireDefault(_homeRoutes);

var _home = __webpack_require__(97);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeModule = _angular2.default.module('app.home', [_angularjs2.default]);

homeModule.config(_homeRoutes2.default);

homeModule.component('home', _home2.default);

exports.default = homeModule;

/***/ }),

/***/ 96:
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

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _homeComponent = __webpack_require__(98);

var _homeComponent2 = _interopRequireDefault(_homeComponent);

var _home = __webpack_require__(99);

var _home2 = _interopRequireDefault(_home);

var _home3 = __webpack_require__(100);

var _home4 = _interopRequireDefault(_home3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeComponent = {
    bindings: {},
    template: _homeComponent2.default,
    controller: _home4.default
};

exports.default = homeComponent;

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h1 class=\"text-center\">Build a Supported Browser Table!</h1>\r\n\r\n    <form>\r\n        <hr>\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-sm\">\r\n                <div class=\"form-group d-flex justify-content-center\">\r\n                    <label for=\"versionLimit\" class=\"form-text mr-2\">Only Show This Many Past Versions</label>\r\n                    <input type=\"number\" class=\"form-control col-sm-1\" id=\"versionLimit\" placeholder=\"5\"\r\n                           ng-model=\"$ctrl.versionLimit\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex justify-content-center\">\r\n            <div class=\"col-1 mx-3\" ng-repeat=\"browser in $ctrl.checkedBrowsers\">\r\n                <browser-check-list browser=\"browser\" version-limit=\"$ctrl.versionLimit\"\r\n                                    on-updated=\"$ctrl.updateBrowser(updatedBrowser)\"></browser-check-list>\r\n            </div>\r\n\r\n            <div class=\"col-sm\" ng-if=\"false\">\r\n                <pre>{{$ctrl.checkedBrowsers | json}}</pre>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n        <browser-table id=\"SupportedBrowserTable\" config=\"$ctrl.checkedBrowsers\"\r\n                       version-limit=\"$ctrl.versionLimit\"></browser-table>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n        <button class=\"btn btn-info\" ng-click=\"showImage = !showImage\">Generate Image</button>\r\n\r\n        <dom-image ng-if=\"showImage\" src-id=\"SupportedBrowserTable\"></dom-image>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[54]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi8uL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsIi8uL3NyYy9hcHAubW9kdWxlLmpzIiwiLy4vc3JjL2FwcC5yb3V0ZXMuanMiLCIvLi9zcmMvc2VydmljZXMvaW5kZXguanMiLCIvLi9zcmMvc2VydmljZXMvY29tbW9uLnNlcnZpY2UuanMiLCIvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3QuY29tcG9uZW50LmpzIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5odG1sIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5zY3NzIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLmNoZWNrbGlzdC5jb250cm9sbGVyLmpzIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuY29tcG9uZW50LmpzIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuaHRtbCIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLnN0eWxlLnNjc3MiLCIvLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5jb250cm9sbGVyLmpzIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3Nlci1jaGVja2JveC5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2RvbS1pbWFnZS5qcyIsIi8uL3NyYy9mZWF0dXJlcy9ob21lL2luZGV4LmpzIiwiLy4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5yb3V0ZXMuanMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsIi8uL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLnNjc3MiXSwibmFtZXMiOlsiSG9tZUNvbnRyb2xsZXIiLCJDb21tb25TZXJ2aWNlIiwiaWQiLCJndWlkIiwidmVyc2lvbkxpbWl0IiwiX2NoZWNrZWRCcm93c2VycyIsIm5hbWUiLCJzdXBwb3J0ZWQiLCJpbWFnZSIsInJlcXVpcmUiLCJzdXBwb3J0IiwidmVyc2lvbiIsImNoZWNrZWRCcm93c2VycyIsImFuZ3VsYXIiLCJjb3B5IiwidXBkYXRlZEJyb3dzZXIiLCJmb3JFYWNoIiwiY2hlY2tlZEJyb3dzZXIiLCJyZXF1aXJlcyIsIm1vZHVsZSIsImNvbmZpZyIsInJvdXRlcyIsIiRpbmplY3QiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzZXJ2aWNlc01vZHVsZSIsInNlcnZpY2UiLCJzNCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiY29tcG9uZXRzTW9kdWxlIiwiY29tcG9uZW50IiwiYnJvd3Nlckxpc3RDb21wb25lbnQiLCJiaW5kaW5ncyIsImJyb3dzZXIiLCJvblVwZGF0ZWQiLCJ0ZW1wbGF0ZSIsImNvbnRyb2xsZXIiLCJCcm93c2VyTGlzdENvbnRyb2xsZXIiLCJjaGFuZ2VzIiwidXBkYXRlZCIsImJyb3dzZXJUYWJsZUNvbXBvbmVudCIsIkJyb3dzZXJUYWJsZUNvbnRyb2xsZXIiLCJldmVyeSIsInNvbWUiLCJCcm93c2VyQ2hlY2tib3hDb250cm9sbGVyIiwibmdNb2RlbEN0cmwiLCIkc2V0Vmlld1ZhbHVlIiwibmdNb2RlbCIsImJyb3dzZXJDaGVja2JveENvbXBvbmVudCIsIkZpbGVTYXZlciIsIkRvbUltYWdlQ29udHJvbGxlciIsIiRxIiwiSFRNTENhbnZhc0VsZW1lbnQiLCJwcm90b3R5cGUiLCJ0b0Jsb2IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiY2FsbGJhY2siLCJ0eXBlIiwicXVhbGl0eSIsImNhbnZhcyIsInNldFRpbWVvdXQiLCJiaW5TdHIiLCJhdG9iIiwidG9EYXRhVVJMIiwic3BsaXQiLCJsZW4iLCJsZW5ndGgiLCJhcnIiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJCbG9iIiwic3JjSWQiLCJ1cGRhdGVJbWFnZSIsInNyYyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiaXNVcGRhdGluZ0ltYWdlIiwiY29tcHV0ZWRTdHlsZVRvSW5saW5lU3R5bGUiLCJyZWN1cnNpdmUiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRhdGEiLCJodG1sX3RvX3htbCIsImlubmVySFRNTCIsImVuY29kZVVSSUNvbXBvbmVudCIsImltZyIsIkltYWdlIiwibmV3SW1hZ2VJZCIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImJsb2IiLCJuZXdJbWciLCJjcmVhdGVFbGVtZW50IiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiY2xhc3NMaXN0IiwiYWRkIiwib2xkSW1nIiwicmVtb3ZlIiwic2hvd0ltYWdlIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwib3V0ZXJIVE1MIiwic2F2ZUFzIiwiaHRtbCIsImRvYyIsImltcGxlbWVudGF0aW9uIiwiY3JlYXRlSFRNTERvY3VtZW50Iiwid3JpdGUiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lc3BhY2VVUkkiLCJYTUxTZXJpYWxpemVyIiwic2VyaWFsaXplVG9TdHJpbmciLCJib2R5IiwiZWxlbWVudCIsIm9wdGlvbnMiLCJFcnJvciIsIkFycmF5IiwiY2FsbCIsImNoaWxkcmVuIiwiY2hpbGQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInByb3BlcnR5IiwiaXRlbSIsInByb3BlcnRpZXMiLCJpbmRleE9mIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInN0eWxlIiwiZG9tSW1hZ2VD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c3MgSG9tZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoQ29tbW9uU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5pZCA9IENvbW1vblNlcnZpY2UuZ3VpZCgpO1xyXG4gICAgICAgIHRoaXMudmVyc2lvbkxpbWl0ID0gNTtcclxuICAgICAgICB0aGlzLl9jaGVja2VkQnJvd3NlcnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdJRScsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL2ludGVybmV0LWV4cGxvcmVyXzktMTEvaW50ZXJuZXQtZXhwbG9yZXJfOS0xMV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTEnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnMTAnLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnOScsIHN1cHBvcnRlZDogZmFsc2V9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiAnOCcsIHN1cHBvcnRlZDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFZGdlJyxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJyb3dzZXItbG9nb3MvZWRnZS9lZGdlXzEyOHgxMjgucG5nJyksXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxNycsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxNicsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxNScsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxNCcsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxMycsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxMicsIHN1cHBvcnRlZDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdGaXJlRm94JyxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJyb3dzZXItbG9nb3MvZmlyZWZveC9maXJlZm94XzEyOHgxMjgucG5nJyksXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNThcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzM1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ2hyb21lJyxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJyb3dzZXItbG9nb3MvY2hyb21lL2Nocm9tZV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NhZmFyaScsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL3NhZmFyaS9zYWZhcmlfMTI4eDEyOC5wbmcnKSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCJUUFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjExLjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjEwLjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxMFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjkuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNy4xXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiN1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1LjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnT3BlcmEnLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYnJvd3Nlci1sb2dvcy9vcGVyYS9vcGVyYV8xMjh4MTI4LnBuZycpLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZEJyb3dzZXJzID0gYW5ndWxhci5jb3B5KHRoaXMuX2NoZWNrZWRCcm93c2Vycyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVCcm93c2VyKHVwZGF0ZWRCcm93c2VyKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tlZEJyb3dzZXJzLmZvckVhY2goKGNoZWNrZWRCcm93c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkQnJvd3Nlci5uYW1lID09PSB1cGRhdGVkQnJvd3Nlci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkQnJvd3Nlci5zdXBwb3J0ID0gdXBkYXRlZEJyb3dzZXIuc3VwcG9ydDtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRCcm93c2VyLnN1cHBvcnRlZCA9IHVwZGF0ZWRCcm93c2VyLnN1cHBvcnRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWZXJzaW9uTGltaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB1aXJvdXRlciBmcm9tICdAdWlyb3V0ZXIvYW5ndWxhcmpzJztcclxuaW1wb3J0IGZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJztcclxuXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9hcHAucm91dGVzJztcclxuXHJcbi8vaW1wb3J0IGFwcCBmdW5jdGlvbmFsaXR5XHJcbmltcG9ydCAnLi9zZXJ2aWNlcyc7XHJcblxyXG5pbXBvcnQgJy4vY29tcG9uZW50cyc7XHJcbmltcG9ydCAnLi9mZWF0dXJlcy9ob21lJztcclxuXHJcbmNvbnN0IHJlcXVpcmVzID0gW1xyXG4gICAgJ3VpLnJvdXRlcicsXHJcbiAgICAnYXBwLnNlcnZpY2VzJyxcclxuICAgICdhcHAuY29tcG9uZW50cycsXHJcbiAgICAnYXBwLmhvbWUnXHJcbl07XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2Jyb3dzZXJTdXBwb3J0QXBwJywgcmVxdWlyZXMpXHJcbiAgICAuY29uZmlnKHJvdXRlcyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAubW9kdWxlLmpzIiwicm91dGVzLiRpbmplY3QgPSBbJyR1cmxSb3V0ZXJQcm92aWRlciddO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3V0ZXMoJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLnJvdXRlcy5qcyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCB7Q29tbW9uU2VydmljZX0gZnJvbSAnLi9jb21tb24uc2VydmljZSc7XHJcblxyXG5sZXQgc2VydmljZXNNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgW10pO1xyXG5cclxuICAgIHNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0NvbW1vblNlcnZpY2UnLCBDb21tb25TZXJ2aWNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2VzTW9kdWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9pbmRleC5qcyIsIlxyXG5jbGFzcyBDb21tb25TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuICAgIGd1aWQoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gczQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xyXG4gICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgIHtDb21tb25TZXJ2aWNlfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvY29tbW9uLnNlcnZpY2UuanMiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgYnJvd3Nlckxpc3RDb21wb25lbnQgZnJvbSAnLi9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXItY2hlY2tsaXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBicm93c2VyVGFibGVDb21wb25lbnQgZnJvbSAnLi9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgYnJvd3NlckNoZWNrQm94IGZyb20gJy4vYnJvd3Nlci1jaGVja2JveCc7XHJcbmltcG9ydCBkb21JbWFnZSBmcm9tICcuL2RvbS1pbWFnZSc7XHJcblxyXG5sZXQgY29tcG9uZXRzTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb21wb25lbnRzJyxbXSk7XHJcblxyXG5jb21wb25ldHNNb2R1bGUuY29tcG9uZW50KCdicm93c2VyQ2hlY2tCb3gnLCBicm93c2VyQ2hlY2tCb3gpO1xyXG5jb21wb25ldHNNb2R1bGUuY29tcG9uZW50KCdicm93c2VyQ2hlY2tMaXN0JywgYnJvd3Nlckxpc3RDb21wb25lbnQpO1xyXG5jb21wb25ldHNNb2R1bGUuY29tcG9uZW50KCdicm93c2VyVGFibGUnLCBicm93c2VyVGFibGVDb21wb25lbnQpO1xyXG5jb21wb25ldHNNb2R1bGUuY29tcG9uZW50KCdkb21JbWFnZScsIGRvbUltYWdlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmV0c01vZHVsZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9icm93c2VyLWNoZWNrbGlzdC5odG1sJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Jyb3dzZXItY2hlY2tsaXN0LnNjc3MnO1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2Jyb3dzZXIuY2hlY2tsaXN0LmNvbnRyb2xsZXInO1xyXG5cclxuXHJcblxyXG5sZXQgYnJvd3Nlckxpc3RDb21wb25lbnQgPSB7XHJcbiAgICBiaW5kaW5ncyA6ICB7XHJcbiAgICAgICAgYnJvd3NlcjogJzwnLFxyXG4gICAgICAgIHZlcnNpb25MaW1pdDogJzwnLFxyXG4gICAgICAgIG9uVXBkYXRlZDogJyY/J1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlLFxyXG4gICAgY29udHJvbGxlclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBicm93c2VyTGlzdENvbXBvbmVudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5jb21wb25lbnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG4gICAgPGI+PGJyb3dzZXItY2hlY2stYm94IG5hbWU9XFxcInt7JGN0cmwuYnJvd3Nlci5uYW1lfX1cXFwiIG5nLW1vZGVsPVxcXCIkY3RybC5icm93c2VyLnN1cHBvcnRlZFxcXCIgbmctY2hhbmdlPVxcXCIkY3RybC51cGRhdGVCcm93c2VyKClcXFwiPjwvYnJvd3Nlci1jaGVjay1ib3g+PC9iPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcImxpc3QtdW5zdHlsZWRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoxNXB4O1xcXCI+XFxyXFxuICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJzdXBwb3J0ZWRWZXJzaW9uIGluICRjdHJsLmJyb3dzZXIuc3VwcG9ydCAgfCBsaW1pdFRvOiAkY3RybC52ZXJzaW9uTGltaXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxicm93c2VyLWNoZWNrLWJveCBuYW1lPVxcXCJ7e3N1cHBvcnRlZFZlcnNpb24udmVyc2lvbn19XFxcIiBuZy1tb2RlbD1cXFwic3VwcG9ydGVkVmVyc2lvbi5zdXBwb3J0ZWRcXFwiIG5nLWNoYW5nZT1cXFwiJGN0cmwudXBkYXRlQnJvd3NlcigpXFxcIj48L2Jyb3dzZXItY2hlY2stYm94PlxcclxcblxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJMaXN0Q29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQ29tbW9uU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBDb21tb25TZXJ2aWNlLmd1aWQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJG9uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuYnJvd3Nlcikge1xyXG4gICAgICAgICAgICB0aGlzLmJyb3dzZXIgPSBhbmd1bGFyLmNvcHkodGhpcy5icm93c2VyKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLnZlcnNpb25MaW1pdCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnNpb25MaW1pdCA9IGFuZ3VsYXIuY29weSh0aGlzLnZlcnNpb25MaW1pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdXBkYXRlQnJvd3NlcigpIHtcclxuICAgICAgICBsZXQgdXBkYXRlZCA9IGFuZ3VsYXIuY29weSh0aGlzLmJyb3dzZXIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vblVwZGF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vblVwZGF0ZWQoe3VwZGF0ZWRCcm93c2VyOiB1cGRhdGVkfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXIuY2hlY2tsaXN0LmNvbnRyb2xsZXIuanMiLCJcclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYnJvd3Nlci10YWJsZS5odG1sJztcclxuaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tICcuL2Jyb3dzZXItdGFibGUuc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vYnJvd3Nlci10YWJsZS5jb250cm9sbGVyJztcclxuXHJcbmxldCBicm93c2VyVGFibGVDb21wb25lbnQgPSB7XHJcbiAgICBjb250cm9sbGVyOmNvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTp0ZW1wbGF0ZSxcclxuICAgIGJpbmRpbmdzIDoge1xyXG4gICAgICAgIGNvbmZpZzogJzwnLFxyXG4gICAgICAgIHZlcnNpb25MaW1pdDogJzwnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyb3dzZXJUYWJsZUNvbXBvbmVudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuY29tcG9uZW50LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICA8dGhlYWQ+XFxyXFxuICAgIDx0cj5cXHJcXG4gICAgICAgIDx0aCBuZy1yZXBlYXQ9XFxcImJyb3dzZXIgaW4gJGN0cmwuY29uZmlnXFxcIj57e2Jyb3dzZXIubmFtZX19PC90aD5cXHJcXG4gICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgICA8dGQgbmctcmVwZWF0PVxcXCJicm93c2VyIGluICRjdHJsLmNvbmZpZ1xcXCIgbmctY2xhc3M9XFxcInsnYmctc3VjY2Vzcyc6JGN0cmwuaGFzRnVsbFN1cHBvcnQoYnJvd3NlciksJ2JnLWRhbmdlcic6ISRjdHJsLmhhc0Z1bGxTdXBwb3J0KGJyb3dzZXIpfVxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBuZy1zcmM9XFxcInt7YnJvd3Nlci5pbWFnZX19XFxcIiBhbHQ9XFxcInt7YnJvd3Nlci5uYW1lfX1cXFwiPlxcclxcbiAgICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgICA8cCAgPnt7JGN0cmwuZ2VuZXJhdGVTdXBwb3J0RGVzY3JpcHRpb24oYnJvd3Nlcil9fTwvcD5cXHJcXG4gICAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LXVuc3R5bGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwic3VwcG9ydCBpbiBicm93c2VyLnN1cHBvcnQgfCBsaW1pdFRvOiRjdHJsLnZlcnNpb25MaW1pdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5nLWNsYXNzPVxcXCJ7J2JnLXN1Y2Nlc3MnOmJyb3dzZXIuc3VwcG9ydGVkICYmIHN1cHBvcnQuc3VwcG9ydGVkLCdiZy1kYW5nZXInOiEgYnJvd3Nlci5zdXBwb3J0ZWQgJiYgc3VwcG9ydC5zdXBwb3J0ZWR9XFxcIj57e3N1cHBvcnQudmVyc2lvbn19XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvdGQ+XFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLnN0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJUYWJsZUNvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVN1cHBvcnREZXNjcmlwdGlvbihicm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3VwcG9ydGVkICYmIGJyb3dzZXIuc3VwcG9ydC5ldmVyeSgodmVyc2lvbikgPT4gdmVyc2lvbi5zdXBwb3J0ZWQpID8gJ0Z1bGwnIDogYnJvd3Nlci5zdXBwb3J0ZWQgJiYgYnJvd3Nlci5zdXBwb3J0LnNvbWUoKHZlcnNpb24pID0+IHZlcnNpb24uc3VwcG9ydGVkKSA/ICdTb21lJyA6ICdOb25lJztcclxuICAgIH07XHJcblxyXG4gICAgaGFzRnVsbFN1cHBvcnQoYnJvd3Nlcikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN1cHBvcnRlZCAmJiBicm93c2VyLnN1cHBvcnQuZXZlcnkoKHZlcnNpb24pID0+IHZlcnNpb24uc3VwcG9ydGVkKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLmNvbnRyb2xsZXIuanMiLCJcclxuY2xhc3MgQnJvd3NlckNoZWNrYm94Q29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQ29tbW9uU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBDb21tb25TZXJ2aWNlLmd1aWQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdNb2RlbENoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLm5nTW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUodGhpcy5uZ01vZGVsKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCBicm93c2VyQ2hlY2tib3hDb21wb25lbnQgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIG5hbWU6ICdAJyxcclxuICAgICAgICBuZ01vZGVsOiAnPCcsXHJcblxyXG4gICAgfSxcclxuICAgIHJlcXVpcmU6IHtuZ01vZGVsQ3RybDogJ25nTW9kZWwnfSxcclxuICAgIGNvbnRyb2xsZXI6IEJyb3dzZXJDaGVja2JveENvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiJGN0cmwubmFtZVwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwiY2hlY2ste3skY3RybC5pZH19XCIgbmctbW9kZWw9JyRjdHJsLm5nTW9kZWwnIG5nLWNoYW5nZT1cIiRjdHJsLm5nTW9kZWxDaGFuZ2UoKVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiY2hlY2ste3skY3RybC5pZH19XCI+e3skY3RybC5uYW1lfX08L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PmBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJvd3NlckNoZWNrYm94Q29tcG9uZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXItY2hlY2tib3guanMiLCJ2YXIgRmlsZVNhdmVyID0gcmVxdWlyZSgnZmlsZS1zYXZlcicpO1xyXG5jbGFzcyBEb21JbWFnZUNvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRxLCBDb21tb25TZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLiRxID0gJHE7XHJcbiAgICAgICAgdGhpcy5Db21tb25TZXJ2aWNlID0gQ29tbW9uU2VydmljZTtcclxuXHJcbiAgICAgICAgaWYgKCFIVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGUudG9CbG9iKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGUsICd0b0Jsb2InLCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiaW5TdHIgPSBhdG9iKGNhbnZhcy50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkuc3BsaXQoJywnKVsxXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSBiaW5TdHIubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycltpXSA9IGJpblN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgQmxvYihbYXJyXSwge3R5cGU6IHR5cGUgfHwgJ2ltYWdlL3BuZyd9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkb25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuQ29tbW9uU2VydmljZS5ndWlkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuc3JjSWQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHBvc3RMaW5rKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNyY0lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZUltYWdlKCkge1xyXG5cclxuICAgICAgICBsZXQgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zcmNJZCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYW52YXMtJHt0aGlzLmlkfWApO1xyXG4gICAgICAgIGlmICghY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGRuJ3QgZmluZCBjYW52YXNcIik7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2UoKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5pc1VwZGF0aW5nSW1hZ2Upe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzVXBkYXRpbmdJbWFnZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcHV0ZWRTdHlsZVRvSW5saW5lU3R5bGUoc3JjLCB7cmVjdXJzaXZlOnRydWV9KTtcclxuXHJcblxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNyYy5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc3JjLm9mZnNldEhlaWdodDtcclxuICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiJHtzcmMub2Zmc2V0V2lkdGh9XCIgaGVpZ2h0PVwiJHtzcmMub2Zmc2V0SGVpZ2h0fVwiPmAgK1xyXG4gICAgICAgICAgICAnPGZvcmVpZ25PYmplY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPicgK1xyXG5cclxuICAgICAgICAgICAgdGhpcy5odG1sX3RvX3htbChzcmMuaW5uZXJIVE1MKSArXHJcblxyXG4gICAgICAgICAgICAnPC9mb3JlaWduT2JqZWN0PicgK1xyXG4gICAgICAgICAgICAnPC9zdmc+JztcclxuXHJcbiAgICAgICAgZGF0YSA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld0ltYWdlSWQgPSBgaW1hZ2UtJHt0aGlzLmlkfWA7XHJcblxyXG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgIGNhbnZhcy50b0Jsb2IoIChibG9iKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdJbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIGxvbmdlciBuZWVkIHRvIHJlYWQgdGhlIGJsb2Igc28gaXQncyByZXZva2VkXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdJbWcuc3JjID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgbmV3SW1nLmlkID0gbmV3SW1hZ2VJZDtcclxuICAgICAgICAgICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKFwicm91bmRlZFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBvbGRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdJbWFnZUlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRJbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRJbWcucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaG93SW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIG5ld0ltZy5vdXRlckhUTUwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCBcIlN1cHBvcnRlZEJyb3dzZXJzVGFibGUucG5nXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1VwZGF0aW5nSW1hZ2UgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGltZy5zcmMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LFwiICsgZGF0YTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGh0bWxfdG9feG1sKGh0bWwpIHtcclxuICAgICAgICB2YXIgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCcnKTtcclxuICAgICAgICBkb2Mud3JpdGUoaHRtbCk7XHJcblxyXG4gICAgICAgIC8vIFlvdSBtdXN0IG1hbnVhbGx5IHNldCB0aGUgeG1sbnMgaWYgeW91IGludGVuZCB0byBpbW1lZGlhdGVseSBzZXJpYWxpemVcclxuICAgICAgICAvLyB0aGUgSFRNTCBkb2N1bWVudCB0byBhIHN0cmluZyBhcyBvcHBvc2VkIHRvIGFwcGVuZGluZyBpdCB0byBhXHJcbiAgICAgICAgLy8gPGZvcmVpZ25PYmplY3Q+IGluIHRoZSBET01cclxuICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgneG1sbnMnLCBkb2MuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSk7XHJcblxyXG4gICAgICAgIC8vIEdldCB3ZWxsLWZvcm1lZCBtYXJrdXBcclxuICAgICAgICBodG1sID0gKG5ldyBYTUxTZXJpYWxpemVyKS5zZXJpYWxpemVUb1N0cmluZyhkb2MuYm9keSk7XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWRTdHlsZVRvSW5saW5lU3R5bGUoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBlbGVtZW50IHNwZWNpZmllZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMucmVjdXJzaXZlKSB7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbWVudC5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVkU3R5bGVUb0lubGluZVN0eWxlKGNoaWxkLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IGNvbXB1dGVkU3R5bGUuaXRlbShpKTtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnByb3BlcnRpZXMgfHwgb3B0aW9ucy5wcm9wZXJ0aWVzLmluZGV4T2YocHJvcGVydHkpID49IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IGRvbUltYWdlQ29tcG9uZW50ID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBzcmNJZDogJ0AnLFxyXG4gICAgICAgIHNob3dJbWFnZTogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogRG9tSW1hZ2VDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6IGA8Y2FudmFzIGlkPVwiY2FudmFzLXt7JGN0cmwuaWR9fVwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCI+PC9jYW52YXM+YFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tSW1hZ2VDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2RvbS1pbWFnZS5qcyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCB1aXJvdXRlciBmcm9tICdAdWlyb3V0ZXIvYW5ndWxhcmpzJztcclxuXHJcbmxldCBob21lTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5ob21lJyxbdWlyb3V0ZXJdKTtcclxuXHJcblxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vaG9tZS5yb3V0ZXMuanMnXHJcbmhvbWVNb2R1bGUuY29uZmlnKHJvdXRlcyk7XHJcblxyXG5pbXBvcnQgaG9tZUNvbXBvbmVudCBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcclxuaG9tZU1vZHVsZS5jb21wb25lbnQoJ2hvbWUnLCBob21lQ29tcG9uZW50KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVNb2R1bGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2luZGV4LmpzIiwicm91dGVzLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJ107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3V0ZXMoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdob21lJywge1xyXG4gICAgICAgICAgICB1cmw6ICcvJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAnaG9tZSdcclxuICAgICAgICB9KTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUucm91dGVzLmpzIiwiXHJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnO1xyXG5pbXBvcnQgY29tcG9uZW50U3R5bGVzIGZyb20gJy4vaG9tZS5zY3NzJztcclxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9ob21lLmNvbnRyb2xsZXInO1xyXG5cclxuXHJcbmxldCBob21lQ29tcG9uZW50ID0ge1xyXG4gICAgYmluZGluZ3M6e30sXHJcbiAgICB0ZW1wbGF0ZTp0ZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXI6Y29udHJvbGxlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZUNvbXBvbmVudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwianVtYm90cm9uXFxcIj5cXHJcXG4gICAgPGgxIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+QnVpbGQgYSBTdXBwb3J0ZWQgQnJvd3NlciBUYWJsZSE8L2gxPlxcclxcblxcclxcbiAgICA8Zm9ybT5cXHJcXG4gICAgICAgIDxocj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBtYi0yXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInZlcnNpb25MaW1pdFxcXCIgY2xhc3M9XFxcImZvcm0tdGV4dCBtci0yXFxcIj5Pbmx5IFNob3cgVGhpcyBNYW55IFBhc3QgVmVyc2lvbnM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBjb2wtc20tMVxcXCIgaWQ9XFxcInZlcnNpb25MaW1pdFxcXCIgcGxhY2Vob2xkZXI9XFxcIjVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcIiRjdHJsLnZlcnNpb25MaW1pdFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEgbXgtM1xcXCIgbmctcmVwZWF0PVxcXCJicm93c2VyIGluICRjdHJsLmNoZWNrZWRCcm93c2Vyc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxicm93c2VyLWNoZWNrLWxpc3QgYnJvd3Nlcj1cXFwiYnJvd3NlclxcXCIgdmVyc2lvbi1saW1pdD1cXFwiJGN0cmwudmVyc2lvbkxpbWl0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uLXVwZGF0ZWQ9XFxcIiRjdHJsLnVwZGF0ZUJyb3dzZXIodXBkYXRlZEJyb3dzZXIpXFxcIj48L2Jyb3dzZXItY2hlY2stbGlzdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiIG5nLWlmPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwcmU+e3skY3RybC5jaGVja2VkQnJvd3NlcnMgfCBqc29ufX08L3ByZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxicm93c2VyLXRhYmxlIGlkPVxcXCJTdXBwb3J0ZWRCcm93c2VyVGFibGVcXFwiIGNvbmZpZz1cXFwiJGN0cmwuY2hlY2tlZEJyb3dzZXJzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbi1saW1pdD1cXFwiJGN0cmwudmVyc2lvbkxpbWl0XFxcIj48L2Jyb3dzZXItdGFibGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiIG5nLWNsaWNrPVxcXCJzaG93SW1hZ2UgPSAhc2hvd0ltYWdlXFxcIj5HZW5lcmF0ZSBJbWFnZTwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgPGRvbS1pbWFnZSBuZy1pZj1cXFwic2hvd0ltYWdlXFxcIiBzcmMtaWQ9XFxcIlN1cHBvcnRlZEJyb3dzZXJUYWJsZVxcXCI+PC9kb20taW1hZ2U+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9