webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <b><browser-check-box name=\"{{$ctrl.browser.name}}\" ng-model=\"$ctrl.browser.supported\" ng-change=\"$ctrl.updateBrowser()\"></browser-check-box></b>\r\n    <ul class=\"list-unstyled\" style=\"margin-left:15px;\">\r\n        <li ng-repeat=\"supportedVersion in $ctrl.browser.support  | limitTo: $ctrl.versionLimit\">\r\n            <browser-check-box name=\"{{supportedVersion.version}}\" ng-model=\"supportedVersion.supported\" ng-change=\"$ctrl.updateBrowser()\"></browser-check-box>\r\n\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
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

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _browserTable = __webpack_require__(105);

var _browserTable2 = _interopRequireDefault(_browserTable);

var _browserTableStyle = __webpack_require__(106);

var _browserTableStyle2 = _interopRequireDefault(_browserTableStyle);

var _browserTable3 = __webpack_require__(107);

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

/***/ 105:
/***/ (function(module, exports) {

module.exports = "<table class=\"table text-center\">\r\n    <thead>\r\n    <tr>\r\n        <th ng-repeat=\"browser in $ctrl.config\">{{browser.name}}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n        <td ng-repeat=\"browser in $ctrl.config\" ng-class=\"{'bg-success':$ctrl.hasFullSupport(browser),'bg-danger':!$ctrl.hasFullSupport(browser)}\">\r\n            <img ng-src=\"{{browser.image}}\" alt=\"{{browser.name}}\">\r\n            <hr>\r\n            <p  >{{$ctrl.generateSupportDescription(browser)}}</p>\r\n            <hr>\r\n            <ul class=\"list-unstyled\">\r\n                <li ng-repeat=\"support in browser.support | limitTo:$ctrl.versionLimit\"\r\n                    ng-class=\"{'bg-success':browser.supported && support.supported,'bg-danger':! browser.supported && support.supported}\">{{support.version}}\r\n                </li>\r\n            </ul>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 107:
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

/***/ 108:
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

/***/ 109:
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

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(11);

var _angular2 = _interopRequireDefault(_angular);

var _angularjs = __webpack_require__(34);

var _angularjs2 = _interopRequireDefault(_angularjs);

var _homeRoutes = __webpack_require__(111);

var _homeRoutes2 = _interopRequireDefault(_homeRoutes);

var _home = __webpack_require__(112);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeModule = _angular2.default.module('app.home', [_angularjs2.default]);

homeModule.config(_homeRoutes2.default);

homeModule.component('home', _home2.default);

exports.default = homeModule;

/***/ }),

/***/ 111:
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

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _homeComponent = __webpack_require__(113);

var _homeComponent2 = _interopRequireDefault(_homeComponent);

var _home = __webpack_require__(114);

var _home2 = _interopRequireDefault(_home);

var _home3 = __webpack_require__(115);

var _home4 = _interopRequireDefault(_home3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeComponent = {
    bindings: {},
    template: _homeComponent2.default,
    controller: _home4.default
};

exports.default = homeComponent;

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h1 class=\"text-center\">Build a Supported Browser Table!</h1>\r\n\r\n    <form>\r\n        <hr>\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-sm\">\r\n                <div class=\"form-group d-flex justify-content-center\">\r\n                    <label for=\"versionLimit\" class=\"form-text mr-2\">Only Show This Many Past Versions</label>\r\n                    <input type=\"number\" class=\"form-control col-sm-1\" id=\"versionLimit\" placeholder=\"5\"\r\n                           ng-model=\"$ctrl.versionLimit\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex justify-content-center\">\r\n            <div class=\"col-1 mx-3\" ng-repeat=\"browser in $ctrl.checkedBrowsers\">\r\n                <browser-check-list browser=\"browser\" version-limit=\"$ctrl.versionLimit\"\r\n                                    on-updated=\"$ctrl.updateBrowser(updatedBrowser)\"></browser-check-list>\r\n            </div>\r\n\r\n            <div class=\"col-sm\" ng-if=\"false\">\r\n                <pre>{{$ctrl.checkedBrowsers | json}}</pre>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n        <browser-table id=\"SupportedBrowserTable\" config=\"$ctrl.checkedBrowsers\"\r\n                       version-limit=\"$ctrl.versionLimit\"></browser-table>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n        <button class=\"btn btn-info\" ng-click=\"showImage = !showImage\">Generate Image</button>\r\n\r\n        <dom-image ng-if=\"showImage\" src-id=\"SupportedBrowserTable\"></dom-image>\r\n    </div>\r\n</div>\r\n\r\n"

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

var HomeController = function () {
    function HomeController(CommonService) {
        _classCallCheck(this, HomeController);

        this.id = CommonService.guid();
        this.versionLimit = 5;
        this._checkedBrowsers = [{
            name: 'Edge',
            supported: true,
            image: __webpack_require__(116),
            support: [{ version: '18', supported: true }, { version: '17', supported: true }, { version: '16', supported: true }, { version: '15', supported: true }, { version: '14', supported: true }, { version: '13', supported: true }, { version: '12', supported: true }]

        }, {
            name: 'FireFox',
            supported: true,
            image: __webpack_require__(117),
            support: [{ version: "71", supported: true }, { version: "70", supported: true }, { version: "69", supported: true }, { version: "68", supported: true }, { version: "67", supported: true }, { version: "66", supported: true }, { version: "65", supported: true }, { version: "64", supported: true }, { version: "63", supported: true }, { version: "62", supported: true }, { version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }, {
            name: 'Chrome',
            supported: true,
            image: __webpack_require__(118),
            support: [{ version: "80", supported: true }, { version: "79", supported: true }, { version: "78", supported: true }, { version: "77", supported: true }, { version: "76", supported: true }, { version: "75", supported: true }, { version: "74", supported: true }, { version: "73", supported: true }, { version: "72", supported: true }, { version: "71", supported: true }, { version: "70", supported: true }, { version: "69", supported: true }, { version: "68", supported: true }, { version: "67", supported: true }, { version: "66", supported: true }, { version: "65", supported: true }, { version: "64", supported: true }, { version: "63", supported: true }, { version: "62", supported: true }, { version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }, {
            name: 'Safari',
            supported: true,
            image: __webpack_require__(119),
            support: [{ version: "13.1", supported: true }, { version: "13", supported: true }, { version: "12.1", supported: true }, { version: "12", supported: true }, { version: "11.1", supported: true }, { version: "11", supported: true }, { version: "10.1", supported: true }, { version: "10", supported: true }, { version: "9.1", supported: true }, { version: "9", supported: true }, { version: "8", supported: true }, { version: "7.1", supported: true }, { version: "7", supported: true }, { version: "6.1", supported: true }, { version: "6", supported: true }, { version: "5.1", supported: true }, { version: "5", supported: true }, { version: "4", supported: true }]
        }, {
            name: 'Opera',
            supported: true,
            image: __webpack_require__(120),
            support: [{ version: "62", supported: true }, { version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
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

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(11);

var _angular2 = _interopRequireDefault(_angular);

var _angularjs = __webpack_require__(34);

var _angularjs2 = _interopRequireDefault(_angularjs);

var _fileSaver = __webpack_require__(63);

var _fileSaver2 = _interopRequireDefault(_fileSaver);

var _app = __webpack_require__(95);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(96);

__webpack_require__(98);

__webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requires = ['ui.router', 'app.services', 'app.components', 'app.home'];

//import app functionality


_angular2.default.module('browserSupportApp', requires).config(_app2.default);

/***/ }),

/***/ 95:
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

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = __webpack_require__(11);

var _angular2 = _interopRequireDefault(_angular);

var _common = __webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var servicesModule = _angular2.default.module('app.services', []);

servicesModule.service('CommonService', _common.CommonService);

exports.default = servicesModule;

/***/ }),

/***/ 97:
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

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(11);

var _angular2 = _interopRequireDefault(_angular);

var _browserChecklist = __webpack_require__(99);

var _browserChecklist2 = _interopRequireDefault(_browserChecklist);

var _browserTable = __webpack_require__(104);

var _browserTable2 = _interopRequireDefault(_browserTable);

var _browserCheckbox = __webpack_require__(108);

var _browserCheckbox2 = _interopRequireDefault(_browserCheckbox);

var _domImage = __webpack_require__(109);

var _domImage2 = _interopRequireDefault(_domImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componetsModule = _angular2.default.module('app.components', []);

componetsModule.component('browserCheckBox', _browserCheckbox2.default);
componetsModule.component('browserCheckList', _browserChecklist2.default);
componetsModule.component('browserTable', _browserTable2.default);
componetsModule.component('domImage', _domImage2.default);

exports.default = componetsModule;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _browserChecklist = __webpack_require__(100);

var _browserChecklist2 = _interopRequireDefault(_browserChecklist);

var _browserChecklist3 = __webpack_require__(101);

var _browserChecklist4 = _interopRequireDefault(_browserChecklist3);

var _browserChecklist5 = __webpack_require__(103);

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

/***/ })

},[64]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3QuaHRtbCIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3Quc2NzcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci5jaGVja2xpc3QuY29udHJvbGxlci5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLmNvbXBvbmVudC5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLmh0bWwiLCIvLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5zdHlsZS5zY3NzIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuY29udHJvbGxlci5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXItY2hlY2tib3guanMiLCIvLi9zcmMvY29tcG9uZW50cy9kb20taW1hZ2UuanMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9pbmRleC5qcyIsIi8uL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUucm91dGVzLmpzIiwiLy4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwiLy4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5zY3NzIiwiLy4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwiLy4vc3JjL2FwcC5tb2R1bGUuanMiLCIvLi9zcmMvYXBwLnJvdXRlcy5qcyIsIi8uL3NyYy9zZXJ2aWNlcy9pbmRleC5qcyIsIi8uL3NyYy9zZXJ2aWNlcy9jb21tb24uc2VydmljZS5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5jb21wb25lbnQuanMiXSwibmFtZXMiOlsiQnJvd3Nlckxpc3RDb250cm9sbGVyIiwiQ29tbW9uU2VydmljZSIsImlkIiwiZ3VpZCIsImNoYW5nZXMiLCJicm93c2VyIiwiYW5ndWxhciIsImNvcHkiLCJ2ZXJzaW9uTGltaXQiLCJ1cGRhdGVkIiwib25VcGRhdGVkIiwidXBkYXRlZEJyb3dzZXIiLCJicm93c2VyVGFibGVDb21wb25lbnQiLCJjb250cm9sbGVyIiwidGVtcGxhdGUiLCJiaW5kaW5ncyIsImNvbmZpZyIsIkJyb3dzZXJUYWJsZUNvbnRyb2xsZXIiLCJzdXBwb3J0ZWQiLCJzdXBwb3J0IiwiZXZlcnkiLCJ2ZXJzaW9uIiwic29tZSIsIkJyb3dzZXJDaGVja2JveENvbnRyb2xsZXIiLCJuZ01vZGVsQ3RybCIsIiRzZXRWaWV3VmFsdWUiLCJuZ01vZGVsIiwiYnJvd3NlckNoZWNrYm94Q29tcG9uZW50IiwibmFtZSIsInJlcXVpcmUiLCJGaWxlU2F2ZXIiLCJEb21JbWFnZUNvbnRyb2xsZXIiLCIkcSIsIkhUTUxDYW52YXNFbGVtZW50IiwicHJvdG90eXBlIiwidG9CbG9iIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNhbGxiYWNrIiwidHlwZSIsInF1YWxpdHkiLCJjYW52YXMiLCJzZXRUaW1lb3V0IiwiYmluU3RyIiwiYXRvYiIsInRvRGF0YVVSTCIsInNwbGl0IiwibGVuIiwibGVuZ3RoIiwiYXJyIiwiVWludDhBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsInNyY0lkIiwidXBkYXRlSW1hZ2UiLCJzcmMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImlzVXBkYXRpbmdJbWFnZSIsImNvbXB1dGVkU3R5bGVUb0lubGluZVN0eWxlIiwicmVjdXJzaXZlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJkYXRhIiwiaHRtbF90b194bWwiLCJpbm5lckhUTUwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJpbWciLCJJbWFnZSIsIm5ld0ltYWdlSWQiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJibG9iIiwibmV3SW1nIiwiY3JlYXRlRWxlbWVudCIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJldm9rZU9iamVjdFVSTCIsImNsYXNzTGlzdCIsImFkZCIsIm9sZEltZyIsInJlbW92ZSIsInNob3dJbWFnZSIsImluc2VydEFkamFjZW50SFRNTCIsIm91dGVySFRNTCIsInNhdmVBcyIsImh0bWwiLCJkb2MiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsIndyaXRlIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibmFtZXNwYWNlVVJJIiwiWE1MU2VyaWFsaXplciIsInNlcmlhbGl6ZVRvU3RyaW5nIiwiYm9keSIsImVsZW1lbnQiLCJvcHRpb25zIiwiRXJyb3IiLCJBcnJheSIsImZvckVhY2giLCJjYWxsIiwiY2hpbGRyZW4iLCJjaGlsZCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwicHJvcGVydHkiLCJpdGVtIiwicHJvcGVydGllcyIsImluZGV4T2YiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3R5bGUiLCJkb21JbWFnZUNvbXBvbmVudCIsImhvbWVNb2R1bGUiLCJtb2R1bGUiLCJ1aXJvdXRlciIsInJvdXRlcyIsImNvbXBvbmVudCIsImhvbWVDb21wb25lbnQiLCIkaW5qZWN0IiwiJHN0YXRlUHJvdmlkZXIiLCJzdGF0ZSIsIkhvbWVDb250cm9sbGVyIiwiX2NoZWNrZWRCcm93c2VycyIsImltYWdlIiwiY2hlY2tlZEJyb3dzZXJzIiwiY2hlY2tlZEJyb3dzZXIiLCJyZXF1aXJlcyIsIiR1cmxSb3V0ZXJQcm92aWRlciIsIm90aGVyd2lzZSIsInNlcnZpY2VzTW9kdWxlIiwic2VydmljZSIsInM0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJjb21wb25ldHNNb2R1bGUiLCJicm93c2VyQ2hlY2tCb3giLCJicm93c2VyTGlzdENvbXBvbmVudCIsImRvbUltYWdlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUE4RCxvQkFBb0IsaUtBQWlLLHNKQUFzSiwwQkFBMEIsZ0o7Ozs7Ozs7QUNBbmEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0VxQkEscUI7QUFFakIsbUNBQVlDLGFBQVosRUFBMkI7QUFBQTs7QUFDdkIsYUFBS0MsRUFBTCxHQUFVRCxjQUFjRSxJQUFkLEVBQVY7QUFDSDs7OzttQ0FHVUMsTyxFQUFTO0FBQ2hCLGdCQUFJQSxRQUFRQyxPQUFaLEVBQXFCO0FBQ2pCLHFCQUFLQSxPQUFMLEdBQWVDLFFBQVFDLElBQVIsQ0FBYSxLQUFLRixPQUFsQixDQUFmO0FBRUg7QUFDRCxnQkFBSUQsUUFBUUksWUFBWixFQUEwQjtBQUN0QixxQkFBS0EsWUFBTCxHQUFvQkYsUUFBUUMsSUFBUixDQUFhLEtBQUtDLFlBQWxCLENBQXBCO0FBQ0g7QUFDSjs7O3dDQUdlO0FBQ1osZ0JBQUlDLFVBQVVILFFBQVFDLElBQVIsQ0FBYSxLQUFLRixPQUFsQixDQUFkOztBQUVBLGdCQUFJLEtBQUtLLFNBQVQsRUFBb0I7QUFDaEIscUJBQUtBLFNBQUwsQ0FBZSxFQUFDQyxnQkFBZ0JGLE9BQWpCLEVBQWY7QUFDSDtBQUVKOzs7Ozs7a0JBekJnQlQscUI7Ozs7Ozs7Ozs7Ozs7O0FDRHJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSVksd0JBQXdCO0FBQ3hCQyxnQkFBV0Esc0JBRGE7QUFFeEJDLGNBQVNBLHNCQUZlO0FBR3hCQyxjQUFXO0FBQ1BDLGdCQUFRLEdBREQ7QUFFUFIsc0JBQWM7QUFGUDtBQUhhLENBQTVCOztrQkFTZUkscUI7Ozs7Ozs7QUNkZix3SUFBd0ksY0FBYywrSEFBK0gsc0ZBQXNGLG1DQUFtQyxlQUFlLFdBQVcsY0FBYyw4Q0FBOEMsMkNBQTJDLHFNQUFxTSx5R0FB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T0wsT0FBT0EsSUFBUCxHQUFjLEdBQWQsR0FBb0JBLElBQXBCLEdBQTJCLEdBQTNCLEdBQWlDQSxJQUFqQyxHQUF3QyxHQUF4QyxHQUNIQSxJQURHLEdBQ0ksR0FESixHQUNVQSxJQURWLEdBQ2lCQSxJQURqQixHQUN3QkEsSUFEL0I7QUFFSDs7Ozs7O1FBR0k3SSxhLEdBQUFBLGE7Ozs7Ozs7Ozs7Ozs7O0FDaEJUOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUltSixrQkFBa0I5SSxrQkFBUXNILE1BQVIsQ0FBZSxnQkFBZixFQUFnQyxFQUFoQyxDQUF0Qjs7QUFFQXdCLGdCQUFnQnJCLFNBQWhCLENBQTBCLGlCQUExQixFQUE2Q3NCLHlCQUE3QztBQUNBRCxnQkFBZ0JyQixTQUFoQixDQUEwQixrQkFBMUIsRUFBOEN1QiwwQkFBOUM7QUFDQUYsZ0JBQWdCckIsU0FBaEIsQ0FBMEIsY0FBMUIsRUFBMENuSCxzQkFBMUM7QUFDQXdJLGdCQUFnQnJCLFNBQWhCLENBQTBCLFVBQTFCLEVBQXNDd0Isa0JBQXRDOztrQkFFZUgsZTs7Ozs7Ozs7Ozs7Ozs7QUNiZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUlBLElBQUlFLHVCQUF1QjtBQUN2QnZJLGNBQVk7QUFDUlYsaUJBQVMsR0FERDtBQUVSRyxzQkFBYyxHQUZOO0FBR1JFLG1CQUFXO0FBSEgsS0FEVztBQU12Qkksd0NBTnVCO0FBT3ZCRDtBQVB1QixDQUEzQjs7a0JBVWV5SSxvQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuICAgIDxiPjxicm93c2VyLWNoZWNrLWJveCBuYW1lPVxcXCJ7eyRjdHJsLmJyb3dzZXIubmFtZX19XFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwuYnJvd3Nlci5zdXBwb3J0ZWRcXFwiIG5nLWNoYW5nZT1cXFwiJGN0cmwudXBkYXRlQnJvd3NlcigpXFxcIj48L2Jyb3dzZXItY2hlY2stYm94PjwvYj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJsaXN0LXVuc3R5bGVkXFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6MTVweDtcXFwiPlxcclxcbiAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwic3VwcG9ydGVkVmVyc2lvbiBpbiAkY3RybC5icm93c2VyLnN1cHBvcnQgIHwgbGltaXRUbzogJGN0cmwudmVyc2lvbkxpbWl0XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnJvd3Nlci1jaGVjay1ib3ggbmFtZT1cXFwie3tzdXBwb3J0ZWRWZXJzaW9uLnZlcnNpb259fVxcXCIgbmctbW9kZWw9XFxcInN1cHBvcnRlZFZlcnNpb24uc3VwcG9ydGVkXFxcIiBuZy1jaGFuZ2U9XFxcIiRjdHJsLnVwZGF0ZUJyb3dzZXIoKVxcXCI+PC9icm93c2VyLWNoZWNrLWJveD5cXHJcXG5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3QuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXItY2hlY2tsaXN0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJMaXN0Q29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQ29tbW9uU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBDb21tb25TZXJ2aWNlLmd1aWQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJG9uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuYnJvd3Nlcikge1xyXG4gICAgICAgICAgICB0aGlzLmJyb3dzZXIgPSBhbmd1bGFyLmNvcHkodGhpcy5icm93c2VyKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLnZlcnNpb25MaW1pdCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnNpb25MaW1pdCA9IGFuZ3VsYXIuY29weSh0aGlzLnZlcnNpb25MaW1pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdXBkYXRlQnJvd3NlcigpIHtcclxuICAgICAgICBsZXQgdXBkYXRlZCA9IGFuZ3VsYXIuY29weSh0aGlzLmJyb3dzZXIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vblVwZGF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vblVwZGF0ZWQoe3VwZGF0ZWRCcm93c2VyOiB1cGRhdGVkfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXIuY2hlY2tsaXN0LmNvbnRyb2xsZXIuanMiLCJcclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYnJvd3Nlci10YWJsZS5odG1sJztcclxuaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tICcuL2Jyb3dzZXItdGFibGUuc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vYnJvd3Nlci10YWJsZS5jb250cm9sbGVyJztcclxuXHJcbmxldCBicm93c2VyVGFibGVDb21wb25lbnQgPSB7XHJcbiAgICBjb250cm9sbGVyOmNvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTp0ZW1wbGF0ZSxcclxuICAgIGJpbmRpbmdzIDoge1xyXG4gICAgICAgIGNvbmZpZzogJzwnLFxyXG4gICAgICAgIHZlcnNpb25MaW1pdDogJzwnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyb3dzZXJUYWJsZUNvbXBvbmVudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuY29tcG9uZW50LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICA8dGhlYWQ+XFxyXFxuICAgIDx0cj5cXHJcXG4gICAgICAgIDx0aCBuZy1yZXBlYXQ9XFxcImJyb3dzZXIgaW4gJGN0cmwuY29uZmlnXFxcIj57e2Jyb3dzZXIubmFtZX19PC90aD5cXHJcXG4gICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgICA8dGQgbmctcmVwZWF0PVxcXCJicm93c2VyIGluICRjdHJsLmNvbmZpZ1xcXCIgbmctY2xhc3M9XFxcInsnYmctc3VjY2Vzcyc6JGN0cmwuaGFzRnVsbFN1cHBvcnQoYnJvd3NlciksJ2JnLWRhbmdlcic6ISRjdHJsLmhhc0Z1bGxTdXBwb3J0KGJyb3dzZXIpfVxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBuZy1zcmM9XFxcInt7YnJvd3Nlci5pbWFnZX19XFxcIiBhbHQ9XFxcInt7YnJvd3Nlci5uYW1lfX1cXFwiPlxcclxcbiAgICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgICA8cCAgPnt7JGN0cmwuZ2VuZXJhdGVTdXBwb3J0RGVzY3JpcHRpb24oYnJvd3Nlcil9fTwvcD5cXHJcXG4gICAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LXVuc3R5bGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwic3VwcG9ydCBpbiBicm93c2VyLnN1cHBvcnQgfCBsaW1pdFRvOiRjdHJsLnZlcnNpb25MaW1pdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5nLWNsYXNzPVxcXCJ7J2JnLXN1Y2Nlc3MnOmJyb3dzZXIuc3VwcG9ydGVkICYmIHN1cHBvcnQuc3VwcG9ydGVkLCdiZy1kYW5nZXInOiEgYnJvd3Nlci5zdXBwb3J0ZWQgJiYgc3VwcG9ydC5zdXBwb3J0ZWR9XFxcIj57e3N1cHBvcnQudmVyc2lvbn19XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvdGQ+XFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJvd3NlclRhYmxlQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlU3VwcG9ydERlc2NyaXB0aW9uKGJyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdXBwb3J0ZWQgJiYgYnJvd3Nlci5zdXBwb3J0LmV2ZXJ5KCh2ZXJzaW9uKSA9PiB2ZXJzaW9uLnN1cHBvcnRlZCkgPyAnRnVsbCcgOiBicm93c2VyLnN1cHBvcnRlZCAmJiBicm93c2VyLnN1cHBvcnQuc29tZSgodmVyc2lvbikgPT4gdmVyc2lvbi5zdXBwb3J0ZWQpID8gJ1NvbWUnIDogJ05vbmUnO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYXNGdWxsU3VwcG9ydChicm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3VwcG9ydGVkICYmIGJyb3dzZXIuc3VwcG9ydC5ldmVyeSgodmVyc2lvbikgPT4gdmVyc2lvbi5zdXBwb3J0ZWQpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuY29udHJvbGxlci5qcyIsIlxyXG5jbGFzcyBCcm93c2VyQ2hlY2tib3hDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihDb21tb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IENvbW1vblNlcnZpY2UuZ3VpZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ01vZGVsQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMubmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZSh0aGlzLm5nTW9kZWwpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IGJyb3dzZXJDaGVja2JveENvbXBvbmVudCA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgbmFtZTogJ0AnLFxyXG4gICAgICAgIG5nTW9kZWw6ICc8JyxcclxuXHJcbiAgICB9LFxyXG4gICAgcmVxdWlyZToge25nTW9kZWxDdHJsOiAnbmdNb2RlbCd9LFxyXG4gICAgY29udHJvbGxlcjogQnJvd3NlckNoZWNrYm94Q29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCIkY3RybC5uYW1lXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJjaGVjay17eyRjdHJsLmlkfX1cIiBuZy1tb2RlbD0nJGN0cmwubmdNb2RlbCcgbmctY2hhbmdlPVwiJGN0cmwubmdNb2RlbENoYW5nZSgpXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJjaGVjay17eyRjdHJsLmlkfX1cIj57eyRjdHJsLm5hbWV9fTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+YFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBicm93c2VyQ2hlY2tib3hDb21wb25lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3Nlci1jaGVja2JveC5qcyIsInZhciBGaWxlU2F2ZXIgPSByZXF1aXJlKCdmaWxlLXNhdmVyJyk7XHJcbmNsYXNzIERvbUltYWdlQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoJHEsIENvbW1vblNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuJHEgPSAkcTtcclxuICAgICAgICB0aGlzLkNvbW1vblNlcnZpY2UgPSBDb21tb25TZXJ2aWNlO1xyXG5cclxuICAgICAgICBpZiAoIUhUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZS50b0Jsb2IpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZSwgJ3RvQmxvYicsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHR5cGUsIHF1YWxpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJpblN0ciA9IGF0b2IoY2FudmFzLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KS5zcGxpdCgnLCcpWzFdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbiA9IGJpblN0ci5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIgPSBuZXcgVWludDhBcnJheShsZW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldID0gYmluU3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBCbG9iKFthcnJdLCB7dHlwZTogdHlwZSB8fCAnaW1hZ2UvcG5nJ30pKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRvbkluaXQoKXtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5Db21tb25TZXJ2aWNlLmd1aWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAkb25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5zcmNJZCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbWFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkcG9zdExpbmsoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3JjSWQpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbWFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlSW1hZ2UoKSB7XHJcblxyXG4gICAgICAgIGxldCBzcmMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNyY0lkKTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhbnZhcy0ke3RoaXMuaWR9YCk7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VsZG4ndCBmaW5kIGNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbWFnZSgpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmlzVXBkYXRpbmdJbWFnZSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZ0ltYWdlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wdXRlZFN0eWxlVG9JbmxpbmVTdHlsZShzcmMsIHtyZWN1cnNpdmU6dHJ1ZX0pO1xyXG5cclxuXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gc3JjLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzcmMub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIke3NyYy5vZmZzZXRXaWR0aH1cIiBoZWlnaHQ9XCIke3NyYy5vZmZzZXRIZWlnaHR9XCI+YCArXHJcbiAgICAgICAgICAgICc8Zm9yZWlnbk9iamVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+JyArXHJcblxyXG4gICAgICAgICAgICB0aGlzLmh0bWxfdG9feG1sKHNyYy5pbm5lckhUTUwpICtcclxuXHJcbiAgICAgICAgICAgICc8L2ZvcmVpZ25PYmplY3Q+JyArXHJcbiAgICAgICAgICAgICc8L3N2Zz4nO1xyXG5cclxuICAgICAgICBkYXRhID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgICBsZXQgbmV3SW1hZ2VJZCA9IGBpbWFnZS0ke3RoaXMuaWR9YDtcclxuXHJcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgY2FudmFzLnRvQmxvYiggKGJsb2IpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSxcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0ltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gbG9uZ2VyIG5lZWQgdG8gcmVhZCB0aGUgYmxvYiBzbyBpdCdzIHJldm9rZWRcclxuICAgICAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0ltZy5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICBuZXdJbWcuaWQgPSBuZXdJbWFnZUlkO1xyXG4gICAgICAgICAgICAgICAgbmV3SW1nLmNsYXNzTGlzdC5hZGQoXCJyb3VuZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9sZEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0ltYWdlSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZEltZykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9sZEltZy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNob3dJbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgbmV3SW1nLm91dGVySFRNTCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsIFwiU3VwcG9ydGVkQnJvd3NlcnNUYWJsZS5wbmdcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVXBkYXRpbmdJbWFnZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaW1nLnNyYyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsXCIgKyBkYXRhO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgaHRtbF90b194bWwoaHRtbCkge1xyXG4gICAgICAgIHZhciBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoJycpO1xyXG4gICAgICAgIGRvYy53cml0ZShodG1sKTtcclxuXHJcbiAgICAgICAgLy8gWW91IG11c3QgbWFudWFsbHkgc2V0IHRoZSB4bWxucyBpZiB5b3UgaW50ZW5kIHRvIGltbWVkaWF0ZWx5IHNlcmlhbGl6ZVxyXG4gICAgICAgIC8vIHRoZSBIVE1MIGRvY3VtZW50IHRvIGEgc3RyaW5nIGFzIG9wcG9zZWQgdG8gYXBwZW5kaW5nIGl0IHRvIGFcclxuICAgICAgICAvLyA8Zm9yZWlnbk9iamVjdD4gaW4gdGhlIERPTVxyXG4gICAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd4bWxucycsIGRvYy5kb2N1bWVudEVsZW1lbnQubmFtZXNwYWNlVVJJKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHdlbGwtZm9ybWVkIG1hcmt1cFxyXG4gICAgICAgIGh0bWwgPSAobmV3IFhNTFNlcmlhbGl6ZXIpLnNlcmlhbGl6ZVRvU3RyaW5nKGRvYy5ib2R5KTtcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZFN0eWxlVG9JbmxpbmVTdHlsZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGVsZW1lbnQgc3BlY2lmaWVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghb3B0aW9ucykge1xyXG4gICAgICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5yZWN1cnNpdmUpIHtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbGVtZW50LmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZWRTdHlsZVRvSW5saW5lU3R5bGUoY2hpbGQsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gY29tcHV0ZWRTdHlsZS5pdGVtKGkpO1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMucHJvcGVydGllcyB8fCBvcHRpb25zLnByb3BlcnRpZXMuaW5kZXhPZihwcm9wZXJ0eSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgZG9tSW1hZ2VDb21wb25lbnQgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHNyY0lkOiAnQCcsXHJcbiAgICAgICAgc2hvd0ltYWdlOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBEb21JbWFnZUNvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogYDxjYW52YXMgaWQ9XCJjYW52YXMte3skY3RybC5pZH19XCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIj48L2NhbnZhcz5gXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb21JbWFnZUNvbXBvbmVudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZG9tLWltYWdlLmpzIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0IHVpcm91dGVyIGZyb20gJ0B1aXJvdXRlci9hbmd1bGFyanMnO1xyXG5cclxubGV0IGhvbWVNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmhvbWUnLFt1aXJvdXRlcl0pO1xyXG5cclxuXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9ob21lLnJvdXRlcy5qcydcclxuaG9tZU1vZHVsZS5jb25maWcocm91dGVzKTtcclxuXHJcbmltcG9ydCBob21lQ29tcG9uZW50IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xyXG5ob21lTW9kdWxlLmNvbXBvbmVudCgnaG9tZScsIGhvbWVDb21wb25lbnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZU1vZHVsZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaW5kZXguanMiLCJyb3V0ZXMuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdXRlcygkc3RhdGVQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy8nLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdob21lJ1xyXG4gICAgICAgIH0pO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5yb3V0ZXMuanMiLCJcclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaG9tZS5jb21wb25lbnQuaHRtbCc7XHJcbmltcG9ydCBjb21wb25lbnRTdHlsZXMgZnJvbSAnLi9ob21lLnNjc3MnO1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2hvbWUuY29udHJvbGxlcic7XHJcblxyXG5cclxubGV0IGhvbWVDb21wb25lbnQgPSB7XHJcbiAgICBiaW5kaW5nczp7fSxcclxuICAgIHRlbXBsYXRlOnRlbXBsYXRlLFxyXG4gICAgY29udHJvbGxlcjpjb250cm9sbGVyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lQ29tcG9uZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb25cXFwiPlxcclxcbiAgICA8aDEgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5CdWlsZCBhIFN1cHBvcnRlZCBCcm93c2VyIFRhYmxlITwvaDE+XFxyXFxuXFxyXFxuICAgIDxmb3JtPlxcclxcbiAgICAgICAgPGhyPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IG1iLTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidmVyc2lvbkxpbWl0XFxcIiBjbGFzcz1cXFwiZm9ybS10ZXh0IG1yLTJcXFwiPk9ubHkgU2hvdyBUaGlzIE1hbnkgUGFzdCBWZXJzaW9uczwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGNvbC1zbS0xXFxcIiBpZD1cXFwidmVyc2lvbkxpbWl0XFxcIiBwbGFjZWhvbGRlcj1cXFwiNVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwiJGN0cmwudmVyc2lvbkxpbWl0XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMSBteC0zXFxcIiBuZy1yZXBlYXQ9XFxcImJyb3dzZXIgaW4gJGN0cmwuY2hlY2tlZEJyb3dzZXJzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJyb3dzZXItY2hlY2stbGlzdCBicm93c2VyPVxcXCJicm93c2VyXFxcIiB2ZXJzaW9uLWxpbWl0PVxcXCIkY3RybC52ZXJzaW9uTGltaXRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24tdXBkYXRlZD1cXFwiJGN0cmwudXBkYXRlQnJvd3Nlcih1cGRhdGVkQnJvd3NlcilcXFwiPjwvYnJvd3Nlci1jaGVjay1saXN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbVxcXCIgbmctaWY9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHByZT57eyRjdHJsLmNoZWNrZWRCcm93c2VycyB8IGpzb259fTwvcHJlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJyb3dzZXItdGFibGUgaWQ9XFxcIlN1cHBvcnRlZEJyb3dzZXJUYWJsZVxcXCIgY29uZmlnPVxcXCIkY3RybC5jaGVja2VkQnJvd3NlcnNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uLWxpbWl0PVxcXCIkY3RybC52ZXJzaW9uTGltaXRcXFwiPjwvYnJvd3Nlci10YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCIgbmctY2xpY2s9XFxcInNob3dJbWFnZSA9ICFzaG93SW1hZ2VcXFwiPkdlbmVyYXRlIEltYWdlPC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICA8ZG9tLWltYWdlIG5nLWlmPVxcXCJzaG93SW1hZ2VcXFwiIHNyYy1pZD1cXFwiU3VwcG9ydGVkQnJvd3NlclRhYmxlXFxcIj48L2RvbS1pbWFnZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoQ29tbW9uU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5pZCA9IENvbW1vblNlcnZpY2UuZ3VpZCgpO1xyXG4gICAgICAgIHRoaXMudmVyc2lvbkxpbWl0ID0gNTtcclxuICAgICAgICB0aGlzLl9jaGVja2VkQnJvd3NlcnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFZGdlJyxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJyb3dzZXItbG9nb3MvZWRnZS9lZGdlXzEyOHgxMjgucG5nJyksXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxOCcsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxNycsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxNicsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxNScsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxNCcsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxMycsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICcxMicsIHN1cHBvcnRlZDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdGaXJlRm94JyxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJyb3dzZXItbG9nb3MvZmlyZWZveC9maXJlZm94XzEyOHgxMjgucG5nJyksXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzN1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdDaHJvbWUnLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYnJvd3Nlci1sb2dvcy9jaHJvbWUvY2hyb21lXzEyOHgxMjgucG5nJyksXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiODBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjc4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjc1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjcyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzN1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdTYWZhcmknLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYnJvd3Nlci1sb2dvcy9zYWZhcmkvc2FmYXJpXzEyOHgxMjgucG5nJyksXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMTMuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjEzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMTIuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjEyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMTEuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjExXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMTAuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjEwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiOS4xXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiOVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3LjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNi4xXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdPcGVyYScsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL29wZXJhL29wZXJhXzEyOHgxMjgucG5nJyksXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzN1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLmNoZWNrZWRCcm93c2VycyA9IGFuZ3VsYXIuY29weSh0aGlzLl9jaGVja2VkQnJvd3NlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgICRvbkluaXQoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQnJvd3Nlcih1cGRhdGVkQnJvd3Nlcikge1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrZWRCcm93c2Vycy5mb3JFYWNoKChjaGVja2VkQnJvd3NlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZEJyb3dzZXIubmFtZSA9PT0gdXBkYXRlZEJyb3dzZXIubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZEJyb3dzZXIuc3VwcG9ydCA9IHVwZGF0ZWRCcm93c2VyLnN1cHBvcnQ7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkQnJvd3Nlci5zdXBwb3J0ZWQgPSB1cGRhdGVkQnJvd3Nlci5zdXBwb3J0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmVyc2lvbkxpbWl0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgdWlyb3V0ZXIgZnJvbSAnQHVpcm91dGVyL2FuZ3VsYXJqcyc7XHJcbmltcG9ydCBmaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcic7XHJcblxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcblxyXG4vL2ltcG9ydCBhcHAgZnVuY3Rpb25hbGl0eVxyXG5pbXBvcnQgJy4vc2VydmljZXMnO1xyXG5cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgJy4vZmVhdHVyZXMvaG9tZSc7XHJcblxyXG5jb25zdCByZXF1aXJlcyA9IFtcclxuICAgICd1aS5yb3V0ZXInLFxyXG4gICAgJ2FwcC5zZXJ2aWNlcycsXHJcbiAgICAnYXBwLmNvbXBvbmVudHMnLFxyXG4gICAgJ2FwcC5ob21lJ1xyXG5dO1xyXG5cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdicm93c2VyU3VwcG9ydEFwcCcsIHJlcXVpcmVzKVxyXG4gICAgLmNvbmZpZyhyb3V0ZXMpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLm1vZHVsZS5qcyIsInJvdXRlcy4kaW5qZWN0ID0gWyckdXJsUm91dGVyUHJvdmlkZXInXTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVzKCR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5yb3V0ZXMuanMiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQge0NvbW1vblNlcnZpY2V9IGZyb20gJy4vY29tbW9uLnNlcnZpY2UnO1xyXG5cclxubGV0IHNlcnZpY2VzTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcclxuXHJcbiAgICBzZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdDb21tb25TZXJ2aWNlJywgQ29tbW9uU2VydmljZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlc01vZHVsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvaW5kZXguanMiLCJcclxuY2xhc3MgQ29tbW9uU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbiAgICBndWlkKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHM0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcclxuICAgICAgICAgICAgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0ICB7Q29tbW9uU2VydmljZX07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlLmpzIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0IGJyb3dzZXJMaXN0Q29tcG9uZW50IGZyb20gJy4vYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgYnJvd3NlclRhYmxlQ29tcG9uZW50IGZyb20gJy4vYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IGJyb3dzZXJDaGVja0JveCBmcm9tICcuL2Jyb3dzZXItY2hlY2tib3gnO1xyXG5pbXBvcnQgZG9tSW1hZ2UgZnJvbSAnLi9kb20taW1hZ2UnO1xyXG5cclxubGV0IGNvbXBvbmV0c01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuY29tcG9uZW50cycsW10pO1xyXG5cclxuY29tcG9uZXRzTW9kdWxlLmNvbXBvbmVudCgnYnJvd3NlckNoZWNrQm94JywgYnJvd3NlckNoZWNrQm94KTtcclxuY29tcG9uZXRzTW9kdWxlLmNvbXBvbmVudCgnYnJvd3NlckNoZWNrTGlzdCcsIGJyb3dzZXJMaXN0Q29tcG9uZW50KTtcclxuY29tcG9uZXRzTW9kdWxlLmNvbXBvbmVudCgnYnJvd3NlclRhYmxlJywgYnJvd3NlclRhYmxlQ29tcG9uZW50KTtcclxuY29tcG9uZXRzTW9kdWxlLmNvbXBvbmVudCgnZG9tSW1hZ2UnLCBkb21JbWFnZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb25ldHNNb2R1bGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYnJvd3Nlci1jaGVja2xpc3QuaHRtbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9icm93c2VyLWNoZWNrbGlzdC5zY3NzJztcclxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9icm93c2VyLmNoZWNrbGlzdC5jb250cm9sbGVyJztcclxuXHJcblxyXG5cclxubGV0IGJyb3dzZXJMaXN0Q29tcG9uZW50ID0ge1xyXG4gICAgYmluZGluZ3MgOiAge1xyXG4gICAgICAgIGJyb3dzZXI6ICc8JyxcclxuICAgICAgICB2ZXJzaW9uTGltaXQ6ICc8JyxcclxuICAgICAgICBvblVwZGF0ZWQ6ICcmPydcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJvd3Nlckxpc3RDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3QuY29tcG9uZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==