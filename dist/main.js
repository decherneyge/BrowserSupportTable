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
            name: 'IE',
            supported: true,
            image: __webpack_require__(116),
            support: [{ version: '11', supported: true }, { version: '10', supported: false }, { version: '9', supported: false }, { version: '8', supported: false }]
        }, {
            name: 'Edge',
            supported: true,
            image: __webpack_require__(117),
            support: [{ version: '18', supported: true }, { version: '17', supported: true }, { version: '16', supported: true }, { version: '15', supported: true }, { version: '14', supported: true }, { version: '13', supported: true }, { version: '12', supported: true }]

        }, {
            name: 'FireFox',
            supported: true,
            image: __webpack_require__(118),
            support: [{ version: "68", supported: true }, { version: "67", supported: true }, { version: "66", supported: true }, { version: "65", supported: true }, { version: "64", supported: true }, { version: "63", supported: true }, { version: "62", supported: true }, { version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }, {
            name: 'Chrome',
            supported: true,
            image: __webpack_require__(119),
            support: [{ version: "76", supported: true }, { version: "75", supported: true }, { version: "74", supported: true }, { version: "73", supported: true }, { version: "72", supported: true }, { version: "71", supported: true }, { version: "70", supported: true }, { version: "69", supported: true }, { version: "68", supported: true }, { version: "67", supported: true }, { version: "66", supported: true }, { version: "65", supported: true }, { version: "64", supported: true }, { version: "63", supported: true }, { version: "62", supported: true }, { version: "61", supported: true }, { version: "60", supported: true }, { version: "59", supported: true }, { version: "58", supported: true }, { version: "57", supported: true }, { version: "56", supported: true }, { version: "55", supported: true }, { version: "54", supported: true }, { version: "53", supported: true }, { version: "52", supported: true }, { version: "51", supported: true }, { version: "50", supported: true }, { version: "49", supported: true }, { version: "48", supported: true }, { version: "47", supported: true }, { version: "46", supported: true }, { version: "45", supported: true }, { version: "44", supported: true }, { version: "43", supported: true }, { version: "42", supported: true }, { version: "41", supported: true }, { version: "40", supported: true }, { version: "39", supported: true }, { version: "38", supported: true }, { version: "37", supported: true }, { version: "36", supported: true }, { version: "35", supported: true }, { version: "34", supported: true }, { version: "33", supported: true }, { version: "32", supported: true }, { version: "31", supported: true }, { version: "30", supported: true }]
        }, {
            name: 'Safari',
            supported: true,
            image: __webpack_require__(120),
            support: [{ version: "12.1", supported: true }, { version: "12", supported: true }, { version: "11.1", supported: true }, { version: "11", supported: true }, { version: "10.1", supported: true }, { version: "10", supported: true }, { version: "9.1", supported: true }, { version: "9", supported: true }, { version: "8", supported: true }, { version: "7.1", supported: true }, { version: "7", supported: true }, { version: "6.1", supported: true }, { version: "6", supported: true }, { version: "5.1", supported: true }, { version: "5", supported: true }, { version: "4", supported: true }]
        }, {
            name: 'Opera',
            supported: true,
            image: __webpack_require__(121),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3QuaHRtbCIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3Quc2NzcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci5jaGVja2xpc3QuY29udHJvbGxlci5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLmNvbXBvbmVudC5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLmh0bWwiLCIvLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5zdHlsZS5zY3NzIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuY29udHJvbGxlci5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXItY2hlY2tib3guanMiLCIvLi9zcmMvY29tcG9uZW50cy9kb20taW1hZ2UuanMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9pbmRleC5qcyIsIi8uL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUucm91dGVzLmpzIiwiLy4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwiLy4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5zY3NzIiwiLy4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwiLy4vc3JjL2FwcC5tb2R1bGUuanMiLCIvLi9zcmMvYXBwLnJvdXRlcy5qcyIsIi8uL3NyYy9zZXJ2aWNlcy9pbmRleC5qcyIsIi8uL3NyYy9zZXJ2aWNlcy9jb21tb24uc2VydmljZS5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5jb21wb25lbnQuanMiXSwibmFtZXMiOlsiQnJvd3Nlckxpc3RDb250cm9sbGVyIiwiQ29tbW9uU2VydmljZSIsImlkIiwiZ3VpZCIsImNoYW5nZXMiLCJicm93c2VyIiwiYW5ndWxhciIsImNvcHkiLCJ2ZXJzaW9uTGltaXQiLCJ1cGRhdGVkIiwib25VcGRhdGVkIiwidXBkYXRlZEJyb3dzZXIiLCJicm93c2VyVGFibGVDb21wb25lbnQiLCJjb250cm9sbGVyIiwidGVtcGxhdGUiLCJiaW5kaW5ncyIsImNvbmZpZyIsIkJyb3dzZXJUYWJsZUNvbnRyb2xsZXIiLCJzdXBwb3J0ZWQiLCJzdXBwb3J0IiwiZXZlcnkiLCJ2ZXJzaW9uIiwic29tZSIsIkJyb3dzZXJDaGVja2JveENvbnRyb2xsZXIiLCJuZ01vZGVsQ3RybCIsIiRzZXRWaWV3VmFsdWUiLCJuZ01vZGVsIiwiYnJvd3NlckNoZWNrYm94Q29tcG9uZW50IiwibmFtZSIsInJlcXVpcmUiLCJGaWxlU2F2ZXIiLCJEb21JbWFnZUNvbnRyb2xsZXIiLCIkcSIsIkhUTUxDYW52YXNFbGVtZW50IiwicHJvdG90eXBlIiwidG9CbG9iIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNhbGxiYWNrIiwidHlwZSIsInF1YWxpdHkiLCJjYW52YXMiLCJzZXRUaW1lb3V0IiwiYmluU3RyIiwiYXRvYiIsInRvRGF0YVVSTCIsInNwbGl0IiwibGVuIiwibGVuZ3RoIiwiYXJyIiwiVWludDhBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsInNyY0lkIiwidXBkYXRlSW1hZ2UiLCJzcmMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImlzVXBkYXRpbmdJbWFnZSIsImNvbXB1dGVkU3R5bGVUb0lubGluZVN0eWxlIiwicmVjdXJzaXZlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJkYXRhIiwiaHRtbF90b194bWwiLCJpbm5lckhUTUwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJpbWciLCJJbWFnZSIsIm5ld0ltYWdlSWQiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJibG9iIiwibmV3SW1nIiwiY3JlYXRlRWxlbWVudCIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJldm9rZU9iamVjdFVSTCIsImNsYXNzTGlzdCIsImFkZCIsIm9sZEltZyIsInJlbW92ZSIsInNob3dJbWFnZSIsImluc2VydEFkamFjZW50SFRNTCIsIm91dGVySFRNTCIsInNhdmVBcyIsImh0bWwiLCJkb2MiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsIndyaXRlIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibmFtZXNwYWNlVVJJIiwiWE1MU2VyaWFsaXplciIsInNlcmlhbGl6ZVRvU3RyaW5nIiwiYm9keSIsImVsZW1lbnQiLCJvcHRpb25zIiwiRXJyb3IiLCJBcnJheSIsImZvckVhY2giLCJjYWxsIiwiY2hpbGRyZW4iLCJjaGlsZCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwicHJvcGVydHkiLCJpdGVtIiwicHJvcGVydGllcyIsImluZGV4T2YiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3R5bGUiLCJkb21JbWFnZUNvbXBvbmVudCIsImhvbWVNb2R1bGUiLCJtb2R1bGUiLCJ1aXJvdXRlciIsInJvdXRlcyIsImNvbXBvbmVudCIsImhvbWVDb21wb25lbnQiLCIkaW5qZWN0IiwiJHN0YXRlUHJvdmlkZXIiLCJzdGF0ZSIsIkhvbWVDb250cm9sbGVyIiwiX2NoZWNrZWRCcm93c2VycyIsImltYWdlIiwiY2hlY2tlZEJyb3dzZXJzIiwiY2hlY2tlZEJyb3dzZXIiLCJyZXF1aXJlcyIsIiR1cmxSb3V0ZXJQcm92aWRlciIsIm90aGVyd2lzZSIsInNlcnZpY2VzTW9kdWxlIiwic2VydmljZSIsInM0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJjb21wb25ldHNNb2R1bGUiLCJicm93c2VyQ2hlY2tCb3giLCJicm93c2VyTGlzdENvbXBvbmVudCIsImRvbUltYWdlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUE4RCxvQkFBb0IsaUtBQWlLLHNKQUFzSiwwQkFBMEIsZ0o7Ozs7Ozs7QUNBbmEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0VxQkEscUI7QUFFakIsbUNBQVlDLGFBQVosRUFBMkI7QUFBQTs7QUFDdkIsYUFBS0MsRUFBTCxHQUFVRCxjQUFjRSxJQUFkLEVBQVY7QUFDSDs7OzttQ0FHVUMsTyxFQUFTO0FBQ2hCLGdCQUFJQSxRQUFRQyxPQUFaLEVBQXFCO0FBQ2pCLHFCQUFLQSxPQUFMLEdBQWVDLFFBQVFDLElBQVIsQ0FBYSxLQUFLRixPQUFsQixDQUFmO0FBRUg7QUFDRCxnQkFBSUQsUUFBUUksWUFBWixFQUEwQjtBQUN0QixxQkFBS0EsWUFBTCxHQUFvQkYsUUFBUUMsSUFBUixDQUFhLEtBQUtDLFlBQWxCLENBQXBCO0FBQ0g7QUFDSjs7O3dDQUdlO0FBQ1osZ0JBQUlDLFVBQVVILFFBQVFDLElBQVIsQ0FBYSxLQUFLRixPQUFsQixDQUFkOztBQUVBLGdCQUFJLEtBQUtLLFNBQVQsRUFBb0I7QUFDaEIscUJBQUtBLFNBQUwsQ0FBZSxFQUFDQyxnQkFBZ0JGLE9BQWpCLEVBQWY7QUFDSDtBQUVKOzs7Ozs7a0JBekJnQlQscUI7Ozs7Ozs7Ozs7Ozs7O0FDRHJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSVksd0JBQXdCO0FBQ3hCQyxnQkFBV0Esc0JBRGE7QUFFeEJDLGNBQVNBLHNCQUZlO0FBR3hCQyxjQUFXO0FBQ1BDLGdCQUFRLEdBREQ7QUFFUFIsc0JBQWM7QUFGUDtBQUhhLENBQTVCOztrQkFTZUkscUI7Ozs7Ozs7QUNkZix3SUFBd0ksY0FBYywrSEFBK0gsc0ZBQXNGLG1DQUFtQyxlQUFlLFdBQVcsY0FBYyw4Q0FBOEMsMkNBQTJDLHFNQUFxTSx5R0FB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OztRQUdJN0ksYSxHQUFBQSxhOzs7Ozs7Ozs7Ozs7OztBQ2hCVDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJbUosa0JBQWtCOUksa0JBQVFzSCxNQUFSLENBQWUsZ0JBQWYsRUFBZ0MsRUFBaEMsQ0FBdEI7O0FBRUF3QixnQkFBZ0JyQixTQUFoQixDQUEwQixpQkFBMUIsRUFBNkNzQix5QkFBN0M7QUFDQUQsZ0JBQWdCckIsU0FBaEIsQ0FBMEIsa0JBQTFCLEVBQThDdUIsMEJBQTlDO0FBQ0FGLGdCQUFnQnJCLFNBQWhCLENBQTBCLGNBQTFCLEVBQTBDbkgsc0JBQTFDO0FBQ0F3SSxnQkFBZ0JyQixTQUFoQixDQUEwQixVQUExQixFQUFzQ3dCLGtCQUF0Qzs7a0JBRWVILGU7Ozs7Ozs7Ozs7Ozs7O0FDYmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFJQSxJQUFJRSx1QkFBdUI7QUFDdkJ2SSxjQUFZO0FBQ1JWLGlCQUFTLEdBREQ7QUFFUkcsc0JBQWMsR0FGTjtBQUdSRSxtQkFBVztBQUhILEtBRFc7QUFNdkJJLHdDQU51QjtBQU92QkQ7QUFQdUIsQ0FBM0I7O2tCQVVleUksb0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8Yj48YnJvd3Nlci1jaGVjay1ib3ggbmFtZT1cXFwie3skY3RybC5icm93c2VyLm5hbWV9fVxcXCIgbmctbW9kZWw9XFxcIiRjdHJsLmJyb3dzZXIuc3VwcG9ydGVkXFxcIiBuZy1jaGFuZ2U9XFxcIiRjdHJsLnVwZGF0ZUJyb3dzZXIoKVxcXCI+PC9icm93c2VyLWNoZWNrLWJveD48L2I+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibGlzdC11bnN0eWxlZFxcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjE1cHg7XFxcIj5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcInN1cHBvcnRlZFZlcnNpb24gaW4gJGN0cmwuYnJvd3Nlci5zdXBwb3J0ICB8IGxpbWl0VG86ICRjdHJsLnZlcnNpb25MaW1pdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJyb3dzZXItY2hlY2stYm94IG5hbWU9XFxcInt7c3VwcG9ydGVkVmVyc2lvbi52ZXJzaW9ufX1cXFwiIG5nLW1vZGVsPVxcXCJzdXBwb3J0ZWRWZXJzaW9uLnN1cHBvcnRlZFxcXCIgbmctY2hhbmdlPVxcXCIkY3RybC51cGRhdGVCcm93c2VyKClcXFwiPjwvYnJvd3Nlci1jaGVjay1ib3g+XFxyXFxuXFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXItY2hlY2tsaXN0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VyTGlzdENvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKENvbW1vblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmlkID0gQ29tbW9uU2VydmljZS5ndWlkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICRvbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmJyb3dzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5icm93c2VyID0gYW5ndWxhci5jb3B5KHRoaXMuYnJvd3Nlcik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy52ZXJzaW9uTGltaXQpIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJzaW9uTGltaXQgPSBhbmd1bGFyLmNvcHkodGhpcy52ZXJzaW9uTGltaXQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIHVwZGF0ZUJyb3dzZXIoKSB7XHJcbiAgICAgICAgbGV0IHVwZGF0ZWQgPSBhbmd1bGFyLmNvcHkodGhpcy5icm93c2VyKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub25VcGRhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGVkKHt1cGRhdGVkQnJvd3NlcjogdXBkYXRlZH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLmNoZWNrbGlzdC5jb250cm9sbGVyLmpzIiwiXHJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Jyb3dzZXItdGFibGUuaHRtbCc7XHJcbmltcG9ydCBjb21wb25lbnRTdHlsZXMgZnJvbSAnLi9icm93c2VyLXRhYmxlLnN0eWxlLnNjc3MnO1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2Jyb3dzZXItdGFibGUuY29udHJvbGxlcic7XHJcblxyXG5sZXQgYnJvd3NlclRhYmxlQ29tcG9uZW50ID0ge1xyXG4gICAgY29udHJvbGxlcjpjb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6dGVtcGxhdGUsXHJcbiAgICBiaW5kaW5ncyA6IHtcclxuICAgICAgICBjb25maWc6ICc8JyxcclxuICAgICAgICB2ZXJzaW9uTGltaXQ6ICc8J1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBicm93c2VyVGFibGVDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLmNvbXBvbmVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgICA8dGggbmctcmVwZWF0PVxcXCJicm93c2VyIGluICRjdHJsLmNvbmZpZ1xcXCI+e3ticm93c2VyLm5hbWV9fTwvdGg+XFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgPHRyPlxcclxcbiAgICAgICAgPHRkIG5nLXJlcGVhdD1cXFwiYnJvd3NlciBpbiAkY3RybC5jb25maWdcXFwiIG5nLWNsYXNzPVxcXCJ7J2JnLXN1Y2Nlc3MnOiRjdHJsLmhhc0Z1bGxTdXBwb3J0KGJyb3dzZXIpLCdiZy1kYW5nZXInOiEkY3RybC5oYXNGdWxsU3VwcG9ydChicm93c2VyKX1cXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgbmctc3JjPVxcXCJ7e2Jyb3dzZXIuaW1hZ2V9fVxcXCIgYWx0PVxcXCJ7e2Jyb3dzZXIubmFtZX19XFxcIj5cXHJcXG4gICAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgICAgPHAgID57eyRjdHJsLmdlbmVyYXRlU3VwcG9ydERlc2NyaXB0aW9uKGJyb3dzZXIpfX08L3A+XFxyXFxuICAgICAgICAgICAgPGhyPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibGlzdC11bnN0eWxlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcInN1cHBvcnQgaW4gYnJvd3Nlci5zdXBwb3J0IHwgbGltaXRUbzokY3RybC52ZXJzaW9uTGltaXRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cXFwieydiZy1zdWNjZXNzJzpicm93c2VyLnN1cHBvcnRlZCAmJiBzdXBwb3J0LnN1cHBvcnRlZCwnYmctZGFuZ2VyJzohIGJyb3dzZXIuc3VwcG9ydGVkICYmIHN1cHBvcnQuc3VwcG9ydGVkfVxcXCI+e3tzdXBwb3J0LnZlcnNpb259fVxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L3RkPlxcclxcbiAgICA8L3RyPlxcclxcbiAgICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJUYWJsZUNvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVN1cHBvcnREZXNjcmlwdGlvbihicm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3VwcG9ydGVkICYmIGJyb3dzZXIuc3VwcG9ydC5ldmVyeSgodmVyc2lvbikgPT4gdmVyc2lvbi5zdXBwb3J0ZWQpID8gJ0Z1bGwnIDogYnJvd3Nlci5zdXBwb3J0ZWQgJiYgYnJvd3Nlci5zdXBwb3J0LnNvbWUoKHZlcnNpb24pID0+IHZlcnNpb24uc3VwcG9ydGVkKSA/ICdTb21lJyA6ICdOb25lJztcclxuICAgIH07XHJcblxyXG4gICAgaGFzRnVsbFN1cHBvcnQoYnJvd3Nlcikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN1cHBvcnRlZCAmJiBicm93c2VyLnN1cHBvcnQuZXZlcnkoKHZlcnNpb24pID0+IHZlcnNpb24uc3VwcG9ydGVkKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLmNvbnRyb2xsZXIuanMiLCJcclxuY2xhc3MgQnJvd3NlckNoZWNrYm94Q29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQ29tbW9uU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBDb21tb25TZXJ2aWNlLmd1aWQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdNb2RlbENoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLm5nTW9kZWxDdHJsLiRzZXRWaWV3VmFsdWUodGhpcy5uZ01vZGVsKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCBicm93c2VyQ2hlY2tib3hDb21wb25lbnQgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIG5hbWU6ICdAJyxcclxuICAgICAgICBuZ01vZGVsOiAnPCcsXHJcblxyXG4gICAgfSxcclxuICAgIHJlcXVpcmU6IHtuZ01vZGVsQ3RybDogJ25nTW9kZWwnfSxcclxuICAgIGNvbnRyb2xsZXI6IEJyb3dzZXJDaGVja2JveENvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiJGN0cmwubmFtZVwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwiY2hlY2ste3skY3RybC5pZH19XCIgbmctbW9kZWw9JyRjdHJsLm5nTW9kZWwnIG5nLWNoYW5nZT1cIiRjdHJsLm5nTW9kZWxDaGFuZ2UoKVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiY2hlY2ste3skY3RybC5pZH19XCI+e3skY3RybC5uYW1lfX08L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PmBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJvd3NlckNoZWNrYm94Q29tcG9uZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXItY2hlY2tib3guanMiLCJ2YXIgRmlsZVNhdmVyID0gcmVxdWlyZSgnZmlsZS1zYXZlcicpO1xyXG5jbGFzcyBEb21JbWFnZUNvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRxLCBDb21tb25TZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLiRxID0gJHE7XHJcbiAgICAgICAgdGhpcy5Db21tb25TZXJ2aWNlID0gQ29tbW9uU2VydmljZTtcclxuXHJcbiAgICAgICAgaWYgKCFIVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGUudG9CbG9iKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGUsICd0b0Jsb2InLCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiaW5TdHIgPSBhdG9iKGNhbnZhcy50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkuc3BsaXQoJywnKVsxXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSBiaW5TdHIubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycltpXSA9IGJpblN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgQmxvYihbYXJyXSwge3R5cGU6IHR5cGUgfHwgJ2ltYWdlL3BuZyd9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkb25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuQ29tbW9uU2VydmljZS5ndWlkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuc3JjSWQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHBvc3RMaW5rKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNyY0lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZUltYWdlKCkge1xyXG5cclxuICAgICAgICBsZXQgc3JjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zcmNJZCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYW52YXMtJHt0aGlzLmlkfWApO1xyXG4gICAgICAgIGlmICghY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGRuJ3QgZmluZCBjYW52YXNcIik7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2UoKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5pc1VwZGF0aW5nSW1hZ2Upe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzVXBkYXRpbmdJbWFnZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcHV0ZWRTdHlsZVRvSW5saW5lU3R5bGUoc3JjLCB7cmVjdXJzaXZlOnRydWV9KTtcclxuXHJcblxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNyYy5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc3JjLm9mZnNldEhlaWdodDtcclxuICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiJHtzcmMub2Zmc2V0V2lkdGh9XCIgaGVpZ2h0PVwiJHtzcmMub2Zmc2V0SGVpZ2h0fVwiPmAgK1xyXG4gICAgICAgICAgICAnPGZvcmVpZ25PYmplY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPicgK1xyXG5cclxuICAgICAgICAgICAgdGhpcy5odG1sX3RvX3htbChzcmMuaW5uZXJIVE1MKSArXHJcblxyXG4gICAgICAgICAgICAnPC9mb3JlaWduT2JqZWN0PicgK1xyXG4gICAgICAgICAgICAnPC9zdmc+JztcclxuXHJcbiAgICAgICAgZGF0YSA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld0ltYWdlSWQgPSBgaW1hZ2UtJHt0aGlzLmlkfWA7XHJcblxyXG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgIGNhbnZhcy50b0Jsb2IoIChibG9iKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdJbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIGxvbmdlciBuZWVkIHRvIHJlYWQgdGhlIGJsb2Igc28gaXQncyByZXZva2VkXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdJbWcuc3JjID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgbmV3SW1nLmlkID0gbmV3SW1hZ2VJZDtcclxuICAgICAgICAgICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKFwicm91bmRlZFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBvbGRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdJbWFnZUlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRJbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRJbWcucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaG93SW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIG5ld0ltZy5vdXRlckhUTUwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCBcIlN1cHBvcnRlZEJyb3dzZXJzVGFibGUucG5nXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1VwZGF0aW5nSW1hZ2UgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGltZy5zcmMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LFwiICsgZGF0YTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGh0bWxfdG9feG1sKGh0bWwpIHtcclxuICAgICAgICB2YXIgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCcnKTtcclxuICAgICAgICBkb2Mud3JpdGUoaHRtbCk7XHJcblxyXG4gICAgICAgIC8vIFlvdSBtdXN0IG1hbnVhbGx5IHNldCB0aGUgeG1sbnMgaWYgeW91IGludGVuZCB0byBpbW1lZGlhdGVseSBzZXJpYWxpemVcclxuICAgICAgICAvLyB0aGUgSFRNTCBkb2N1bWVudCB0byBhIHN0cmluZyBhcyBvcHBvc2VkIHRvIGFwcGVuZGluZyBpdCB0byBhXHJcbiAgICAgICAgLy8gPGZvcmVpZ25PYmplY3Q+IGluIHRoZSBET01cclxuICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgneG1sbnMnLCBkb2MuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSk7XHJcblxyXG4gICAgICAgIC8vIEdldCB3ZWxsLWZvcm1lZCBtYXJrdXBcclxuICAgICAgICBodG1sID0gKG5ldyBYTUxTZXJpYWxpemVyKS5zZXJpYWxpemVUb1N0cmluZyhkb2MuYm9keSk7XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWRTdHlsZVRvSW5saW5lU3R5bGUoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBlbGVtZW50IHNwZWNpZmllZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMucmVjdXJzaXZlKSB7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbWVudC5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVkU3R5bGVUb0lubGluZVN0eWxlKGNoaWxkLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IGNvbXB1dGVkU3R5bGUuaXRlbShpKTtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnByb3BlcnRpZXMgfHwgb3B0aW9ucy5wcm9wZXJ0aWVzLmluZGV4T2YocHJvcGVydHkpID49IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IGRvbUltYWdlQ29tcG9uZW50ID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBzcmNJZDogJ0AnLFxyXG4gICAgICAgIHNob3dJbWFnZTogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogRG9tSW1hZ2VDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6IGA8Y2FudmFzIGlkPVwiY2FudmFzLXt7JGN0cmwuaWR9fVwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCI+PC9jYW52YXM+YFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tSW1hZ2VDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2RvbS1pbWFnZS5qcyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCB1aXJvdXRlciBmcm9tICdAdWlyb3V0ZXIvYW5ndWxhcmpzJztcclxuXHJcbmxldCBob21lTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5ob21lJyxbdWlyb3V0ZXJdKTtcclxuXHJcblxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vaG9tZS5yb3V0ZXMuanMnXHJcbmhvbWVNb2R1bGUuY29uZmlnKHJvdXRlcyk7XHJcblxyXG5pbXBvcnQgaG9tZUNvbXBvbmVudCBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcclxuaG9tZU1vZHVsZS5jb21wb25lbnQoJ2hvbWUnLCBob21lQ29tcG9uZW50KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVNb2R1bGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2luZGV4LmpzIiwicm91dGVzLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJ107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3V0ZXMoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdob21lJywge1xyXG4gICAgICAgICAgICB1cmw6ICcvJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAnaG9tZSdcclxuICAgICAgICB9KTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUucm91dGVzLmpzIiwiXHJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnO1xyXG5pbXBvcnQgY29tcG9uZW50U3R5bGVzIGZyb20gJy4vaG9tZS5zY3NzJztcclxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9ob21lLmNvbnRyb2xsZXInO1xyXG5cclxuXHJcbmxldCBob21lQ29tcG9uZW50ID0ge1xyXG4gICAgYmluZGluZ3M6e30sXHJcbiAgICB0ZW1wbGF0ZTp0ZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXI6Y29udHJvbGxlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZUNvbXBvbmVudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwianVtYm90cm9uXFxcIj5cXHJcXG4gICAgPGgxIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+QnVpbGQgYSBTdXBwb3J0ZWQgQnJvd3NlciBUYWJsZSE8L2gxPlxcclxcblxcclxcbiAgICA8Zm9ybT5cXHJcXG4gICAgICAgIDxocj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBtYi0yXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInZlcnNpb25MaW1pdFxcXCIgY2xhc3M9XFxcImZvcm0tdGV4dCBtci0yXFxcIj5Pbmx5IFNob3cgVGhpcyBNYW55IFBhc3QgVmVyc2lvbnM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBjb2wtc20tMVxcXCIgaWQ9XFxcInZlcnNpb25MaW1pdFxcXCIgcGxhY2Vob2xkZXI9XFxcIjVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcIiRjdHJsLnZlcnNpb25MaW1pdFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEgbXgtM1xcXCIgbmctcmVwZWF0PVxcXCJicm93c2VyIGluICRjdHJsLmNoZWNrZWRCcm93c2Vyc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxicm93c2VyLWNoZWNrLWxpc3QgYnJvd3Nlcj1cXFwiYnJvd3NlclxcXCIgdmVyc2lvbi1saW1pdD1cXFwiJGN0cmwudmVyc2lvbkxpbWl0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uLXVwZGF0ZWQ9XFxcIiRjdHJsLnVwZGF0ZUJyb3dzZXIodXBkYXRlZEJyb3dzZXIpXFxcIj48L2Jyb3dzZXItY2hlY2stbGlzdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiIG5nLWlmPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwcmU+e3skY3RybC5jaGVja2VkQnJvd3NlcnMgfCBqc29ufX08L3ByZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxicm93c2VyLXRhYmxlIGlkPVxcXCJTdXBwb3J0ZWRCcm93c2VyVGFibGVcXFwiIGNvbmZpZz1cXFwiJGN0cmwuY2hlY2tlZEJyb3dzZXJzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbi1saW1pdD1cXFwiJGN0cmwudmVyc2lvbkxpbWl0XFxcIj48L2Jyb3dzZXItdGFibGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiIG5nLWNsaWNrPVxcXCJzaG93SW1hZ2UgPSAhc2hvd0ltYWdlXFxcIj5HZW5lcmF0ZSBJbWFnZTwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgPGRvbS1pbWFnZSBuZy1pZj1cXFwic2hvd0ltYWdlXFxcIiBzcmMtaWQ9XFxcIlN1cHBvcnRlZEJyb3dzZXJUYWJsZVxcXCI+PC9kb20taW1hZ2U+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKENvbW1vblNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuaWQgPSBDb21tb25TZXJ2aWNlLmd1aWQoKTtcclxuICAgICAgICB0aGlzLnZlcnNpb25MaW1pdCA9IDU7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tlZEJyb3dzZXJzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSUUnLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYnJvd3Nlci1sb2dvcy9pbnRlcm5ldC1leHBsb3Jlcl85LTExL2ludGVybmV0LWV4cGxvcmVyXzktMTFfMTI4eDEyOC5wbmcnKSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzExJywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzEwJywgc3VwcG9ydGVkOiBmYWxzZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICc5Jywgc3VwcG9ydGVkOiBmYWxzZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICc4Jywgc3VwcG9ydGVkOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VkZ2UnLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYnJvd3Nlci1sb2dvcy9lZGdlL2VkZ2VfMTI4eDEyOC5wbmcnKSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzE4Jywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzE3Jywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzE2Jywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzE1Jywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzE0Jywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzEzJywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzEyJywgc3VwcG9ydGVkOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcmVGb3gnLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYnJvd3Nlci1sb2dvcy9maXJlZm94L2ZpcmVmb3hfMTI4eDEyOC5wbmcnKSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Nocm9tZScsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL2Nocm9tZS9jaHJvbWVfMTI4eDEyOC5wbmcnKSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjc1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjcyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzN1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdTYWZhcmknLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYnJvd3Nlci1sb2dvcy9zYWZhcmkvc2FmYXJpXzEyOHgxMjgucG5nJyksXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMTIuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjEyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMTEuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjExXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMTAuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjEwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiOS4xXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiOVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3LjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNi4xXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdPcGVyYScsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL29wZXJhL29wZXJhXzEyOHgxMjgucG5nJyksXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzN1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLmNoZWNrZWRCcm93c2VycyA9IGFuZ3VsYXIuY29weSh0aGlzLl9jaGVja2VkQnJvd3NlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgICRvbkluaXQoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQnJvd3Nlcih1cGRhdGVkQnJvd3Nlcikge1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrZWRCcm93c2Vycy5mb3JFYWNoKChjaGVja2VkQnJvd3NlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZEJyb3dzZXIubmFtZSA9PT0gdXBkYXRlZEJyb3dzZXIubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZEJyb3dzZXIuc3VwcG9ydCA9IHVwZGF0ZWRCcm93c2VyLnN1cHBvcnQ7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkQnJvd3Nlci5zdXBwb3J0ZWQgPSB1cGRhdGVkQnJvd3Nlci5zdXBwb3J0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmVyc2lvbkxpbWl0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgdWlyb3V0ZXIgZnJvbSAnQHVpcm91dGVyL2FuZ3VsYXJqcyc7XHJcbmltcG9ydCBmaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcic7XHJcblxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcblxyXG4vL2ltcG9ydCBhcHAgZnVuY3Rpb25hbGl0eVxyXG5pbXBvcnQgJy4vc2VydmljZXMnO1xyXG5cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgJy4vZmVhdHVyZXMvaG9tZSc7XHJcblxyXG5jb25zdCByZXF1aXJlcyA9IFtcclxuICAgICd1aS5yb3V0ZXInLFxyXG4gICAgJ2FwcC5zZXJ2aWNlcycsXHJcbiAgICAnYXBwLmNvbXBvbmVudHMnLFxyXG4gICAgJ2FwcC5ob21lJ1xyXG5dO1xyXG5cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdicm93c2VyU3VwcG9ydEFwcCcsIHJlcXVpcmVzKVxyXG4gICAgLmNvbmZpZyhyb3V0ZXMpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLm1vZHVsZS5qcyIsInJvdXRlcy4kaW5qZWN0ID0gWyckdXJsUm91dGVyUHJvdmlkZXInXTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVzKCR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5yb3V0ZXMuanMiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQge0NvbW1vblNlcnZpY2V9IGZyb20gJy4vY29tbW9uLnNlcnZpY2UnO1xyXG5cclxubGV0IHNlcnZpY2VzTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcclxuXHJcbiAgICBzZXJ2aWNlc01vZHVsZS5zZXJ2aWNlKCdDb21tb25TZXJ2aWNlJywgQ29tbW9uU2VydmljZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlc01vZHVsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvaW5kZXguanMiLCJcclxuY2xhc3MgQ29tbW9uU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbiAgICBndWlkKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHM0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcclxuICAgICAgICAgICAgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0ICB7Q29tbW9uU2VydmljZX07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlLmpzIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0IGJyb3dzZXJMaXN0Q29tcG9uZW50IGZyb20gJy4vYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgYnJvd3NlclRhYmxlQ29tcG9uZW50IGZyb20gJy4vYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IGJyb3dzZXJDaGVja0JveCBmcm9tICcuL2Jyb3dzZXItY2hlY2tib3gnO1xyXG5pbXBvcnQgZG9tSW1hZ2UgZnJvbSAnLi9kb20taW1hZ2UnO1xyXG5cclxubGV0IGNvbXBvbmV0c01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuY29tcG9uZW50cycsW10pO1xyXG5cclxuY29tcG9uZXRzTW9kdWxlLmNvbXBvbmVudCgnYnJvd3NlckNoZWNrQm94JywgYnJvd3NlckNoZWNrQm94KTtcclxuY29tcG9uZXRzTW9kdWxlLmNvbXBvbmVudCgnYnJvd3NlckNoZWNrTGlzdCcsIGJyb3dzZXJMaXN0Q29tcG9uZW50KTtcclxuY29tcG9uZXRzTW9kdWxlLmNvbXBvbmVudCgnYnJvd3NlclRhYmxlJywgYnJvd3NlclRhYmxlQ29tcG9uZW50KTtcclxuY29tcG9uZXRzTW9kdWxlLmNvbXBvbmVudCgnZG9tSW1hZ2UnLCBkb21JbWFnZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb25ldHNNb2R1bGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYnJvd3Nlci1jaGVja2xpc3QuaHRtbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9icm93c2VyLWNoZWNrbGlzdC5zY3NzJztcclxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9icm93c2VyLmNoZWNrbGlzdC5jb250cm9sbGVyJztcclxuXHJcblxyXG5cclxubGV0IGJyb3dzZXJMaXN0Q29tcG9uZW50ID0ge1xyXG4gICAgYmluZGluZ3MgOiAge1xyXG4gICAgICAgIGJyb3dzZXI6ICc8JyxcclxuICAgICAgICB2ZXJzaW9uTGltaXQ6ICc8JyxcclxuICAgICAgICBvblVwZGF0ZWQ6ICcmPydcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZSxcclxuICAgIGNvbnRyb2xsZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJvd3Nlckxpc3RDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3QuY29tcG9uZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==