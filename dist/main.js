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
        showUnsupported: '<'
    }
};

exports.default = browserTableComponent;

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports = "<table class=\"table text-center\">\r\n    <thead>\r\n    <tr>\r\n        <th ng-repeat=\"browser in $ctrl.config\" ng-show=\"browser.supported || $ctrl.showUnsupported\">{{browser.name}}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n        <td ng-repeat=\"browser in $ctrl.config\" ng-class=\"{'bg-danger':!$ctrl.hasFullSupport(browser)}\" ng-show=\"browser.supported || $ctrl.showUnsupported\">\r\n            <img ng-src=\"{{browser.image}}\" alt=\"{{browser.name}}\">\r\n            <hr>\r\n            <!--<p  >{{$ctrl.generateSupportDescription(browser)}}</p>\r\n            <hr>-->\r\n            <ul class=\"list-unstyled\">\r\n                <li ng-repeat=\"support in browser.support | limitTo:$ctrl.versionLimit\"\r\n                    ng-class=\"{'bg-danger':! browser.supported && support.supported}\">{{support.version}}\r\n                </li>\r\n            </ul>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n"

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
            return browser.supported && browser.support.every(function (version) {
                return version.supported;
            }) ? 'Latest ' + browser.support.length + ' Versions' : browser.supported && browser.support.some(function (version) {
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

module.exports = "<div class=\"jumbotron\">\r\n    <h1 class=\"text-center\">Build a Supported Browser Table!</h1>\r\n    <hr>\r\n    <form class=\"\">\r\n\r\n        <div class=\"row mb\">\r\n            <div class=\"col-sm-12 text-center\">\r\n                <div class=\"form-group\">\r\n                <input class=\"form-control mb\" type=\"text\" ng-model=\"$ctrl.browserScope\" placeholder=\"{{$ctrl.defaultBrowserScope}}\" />\r\n                <button class=\"btn btn-info\" type=\"button\" ng-click=\"$ctrl.updateScope()\">Update Scope</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </form>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n        <browser-table id=\"SupportedBrowserTable\" config=\"$ctrl.checkedBrowsers\"\r\n                       version-limit=\"$ctrl.versionLimit\" show-unsupported=\"$ctrl.showUnsupported\"></browser-table>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n        <button class=\"btn btn-info\" ng-click=\"showImage = !showImage\">Generate Image</button>\r\n\r\n        <dom-image ng-if=\"showImage\" src-id=\"SupportedBrowserTable\"></dom-image>\r\n    </div>\r\n</div>\r\n\r\n"

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

        this.defaultBrowserScope = 'last 5 edge version, last 5 firefox version, last 5 chrome version, last 5 safari version, last 5 opera version';
        this.browserScope = '';
        this._checkedBrowsers = [{
            name: 'IE',
            supported: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3QuY29tcG9uZW50LmpzIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJDaGVja2xpc3QvYnJvd3Nlci1jaGVja2xpc3QuY3NzP2ZmNDIiLCIvLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXIuY2hlY2tsaXN0LmNvbnRyb2xsZXIuanMiLCIvLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5jb21wb25lbnQuanMiLCIvLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLnN0eWxlLmNzcz9hOTZhIiwiLy4vc3JjL2NvbXBvbmVudHMvYnJvd3NlclRhYmxlL2Jyb3dzZXItdGFibGUuY29udHJvbGxlci5qcyIsIi8uL3NyYy9jb21wb25lbnRzL2Jyb3dzZXItY2hlY2tib3guanMiLCIvLi9zcmMvY29tcG9uZW50cy9kb20taW1hZ2UuanMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9pbmRleC5qcyIsIi8uL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUucm91dGVzLmpzIiwiLy4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUuY3NzPzE3MmMiLCIvLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNvbnRyb2xsZXIuanMiLCIvcGF0aCAoaWdub3JlZCkiLCIvLi9zcmMvYXBwLm1vZHVsZS5qcyIsIi8uL3NyYy9hcHAucm91dGVzLmpzIiwiLy4vc3JjL3NlcnZpY2VzL2luZGV4LmpzIiwiLy4vc3JjL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlLmpzIiwiLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiXSwibmFtZXMiOlsiYnJvd3Nlckxpc3RDb21wb25lbnQiLCJiaW5kaW5ncyIsImJyb3dzZXIiLCJ2ZXJzaW9uTGltaXQiLCJvblVwZGF0ZWQiLCJ0ZW1wbGF0ZSIsImNvbnRyb2xsZXIiLCJCcm93c2VyTGlzdENvbnRyb2xsZXIiLCJDb21tb25TZXJ2aWNlIiwiaWQiLCJndWlkIiwiY2hhbmdlcyIsImFuZ3VsYXIiLCJjb3B5IiwidXBkYXRlZCIsInVwZGF0ZWRCcm93c2VyIiwiYnJvd3NlclRhYmxlQ29tcG9uZW50IiwiY29uZmlnIiwic2hvd1Vuc3VwcG9ydGVkIiwiQnJvd3NlclRhYmxlQ29udHJvbGxlciIsInN1cHBvcnRlZCIsInN1cHBvcnQiLCJldmVyeSIsInZlcnNpb24iLCJsZW5ndGgiLCJzb21lIiwiQnJvd3NlckNoZWNrYm94Q29udHJvbGxlciIsIm5nTW9kZWxDdHJsIiwiJHNldFZpZXdWYWx1ZSIsIm5nTW9kZWwiLCJicm93c2VyQ2hlY2tib3hDb21wb25lbnQiLCJuYW1lIiwicmVxdWlyZSIsIkZpbGVTYXZlciIsIkRvbUltYWdlQ29udHJvbGxlciIsIiRxIiwiSFRNTENhbnZhc0VsZW1lbnQiLCJwcm90b3R5cGUiLCJ0b0Jsb2IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiY2FsbGJhY2siLCJ0eXBlIiwicXVhbGl0eSIsImNhbnZhcyIsInNldFRpbWVvdXQiLCJiaW5TdHIiLCJhdG9iIiwidG9EYXRhVVJMIiwic3BsaXQiLCJsZW4iLCJhcnIiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJCbG9iIiwic3JjSWQiLCJ1cGRhdGVJbWFnZSIsInNyYyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiaXNVcGRhdGluZ0ltYWdlIiwiY29tcHV0ZWRTdHlsZVRvSW5saW5lU3R5bGUiLCJyZWN1cnNpdmUiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRhdGEiLCJodG1sX3RvX3htbCIsImlubmVySFRNTCIsImVuY29kZVVSSUNvbXBvbmVudCIsImltZyIsIkltYWdlIiwibmV3SW1hZ2VJZCIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImJsb2IiLCJuZXdJbWciLCJjcmVhdGVFbGVtZW50IiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiY2xhc3NMaXN0IiwiYWRkIiwib2xkSW1nIiwicmVtb3ZlIiwic2hvd0ltYWdlIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwib3V0ZXJIVE1MIiwidG9kYXkiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzbGljZSIsInNhdmVBcyIsImh0bWwiLCJkb2MiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsIndyaXRlIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibmFtZXNwYWNlVVJJIiwiWE1MU2VyaWFsaXplciIsInNlcmlhbGl6ZVRvU3RyaW5nIiwiYm9keSIsImVsZW1lbnQiLCJvcHRpb25zIiwiRXJyb3IiLCJBcnJheSIsImZvckVhY2giLCJjYWxsIiwiY2hpbGRyZW4iLCJjaGlsZCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwicHJvcGVydHkiLCJpdGVtIiwicHJvcGVydGllcyIsImluZGV4T2YiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3R5bGUiLCJkb21JbWFnZUNvbXBvbmVudCIsImhvbWVNb2R1bGUiLCJtb2R1bGUiLCJ1aXJvdXRlciIsInJvdXRlcyIsImNvbXBvbmVudCIsImhvbWVDb21wb25lbnQiLCIkaW5qZWN0IiwiJHN0YXRlUHJvdmlkZXIiLCJzdGF0ZSIsIkhvbWVDb250cm9sbGVyIiwiZGVmYXVsdEJyb3dzZXJTY29wZSIsImJyb3dzZXJTY29wZSIsIl9jaGVja2VkQnJvd3NlcnMiLCJpbWFnZSIsImNoZWNrZWRCcm93c2VycyIsInVwZGF0ZVNjb3BlIiwiY3MiLCJpZ25vcmVVbmtub3duVmVyc2lvbnMiLCJtYXAiLCJibGlzdCIsImIiLCJwdXNoIiwiY2IiLCJ0b0xvd2VyQ2FzZSIsImNoZWNrZWRCcm93c2VyIiwicmVxdWlyZXMiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzZXJ2aWNlc01vZHVsZSIsInNlcnZpY2UiLCJzNCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiY29tcG9uZXRzTW9kdWxlIiwiYnJvd3NlckNoZWNrQm94IiwiZG9tSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSUEsSUFBSUEsdUJBQXVCO0FBQ3ZCQyxjQUFZO0FBQ1JDLGlCQUFTLEdBREQ7QUFFUkMsc0JBQWMsR0FGTjtBQUdSQyxtQkFBVztBQUhILEtBRFc7QUFNdkJDLHdDQU51QjtBQU92QkM7QUFQdUIsQ0FBM0I7O2tCQVVlTixvQjs7Ozs7OztBQ2hCZiw4REFBOEQsb0JBQW9CLGlLQUFpSyxzSkFBc0osMEJBQTBCLGdKOzs7Ozs7O0FDQW5hLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNFcUJPLHFCO0FBRWpCLG1DQUFZQyxhQUFaLEVBQTJCO0FBQUE7O0FBQ3ZCLGFBQUtDLEVBQUwsR0FBVUQsY0FBY0UsSUFBZCxFQUFWO0FBQ0g7Ozs7bUNBR1VDLE8sRUFBUztBQUNoQixnQkFBSUEsUUFBUVQsT0FBWixFQUFxQjtBQUNqQixxQkFBS0EsT0FBTCxHQUFlVSxRQUFRQyxJQUFSLENBQWEsS0FBS1gsT0FBbEIsQ0FBZjtBQUVIO0FBQ0QsZ0JBQUlTLFFBQVFSLFlBQVosRUFBMEI7QUFDdEIscUJBQUtBLFlBQUwsR0FBb0JTLFFBQVFDLElBQVIsQ0FBYSxLQUFLVixZQUFsQixDQUFwQjtBQUNIO0FBQ0o7Ozt3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RUFBNkNpQyx5QkFBN0M7QUFDQUQsZ0JBQWdCaEMsU0FBaEIsQ0FBMEIsa0JBQTFCLEVBQThDckksMEJBQTlDO0FBQ0FxSyxnQkFBZ0JoQyxTQUFoQixDQUEwQixjQUExQixFQUEwQ3JILHNCQUExQztBQUNBcUosZ0JBQWdCaEMsU0FBaEIsQ0FBMEIsVUFBMUIsRUFBc0NrQyxrQkFBdEM7O2tCQUVlRixlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9icm93c2VyLWNoZWNrbGlzdC5odG1sJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Jyb3dzZXItY2hlY2tsaXN0LmNzcyc7XHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vYnJvd3Nlci5jaGVja2xpc3QuY29udHJvbGxlcic7XHJcblxyXG5cclxuXHJcbmxldCBicm93c2VyTGlzdENvbXBvbmVudCA9IHtcclxuICAgIGJpbmRpbmdzIDogIHtcclxuICAgICAgICBicm93c2VyOiAnPCcsXHJcbiAgICAgICAgdmVyc2lvbkxpbWl0OiAnPCcsXHJcbiAgICAgICAgb25VcGRhdGVkOiAnJj8nXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGUsXHJcbiAgICBjb250cm9sbGVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyb3dzZXJMaXN0Q29tcG9uZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXItY2hlY2tsaXN0LmNvbXBvbmVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICA8Yj48YnJvd3Nlci1jaGVjay1ib3ggbmFtZT1cXFwie3skY3RybC5icm93c2VyLm5hbWV9fVxcXCIgbmctbW9kZWw9XFxcIiRjdHJsLmJyb3dzZXIuc3VwcG9ydGVkXFxcIiBuZy1jaGFuZ2U9XFxcIiRjdHJsLnVwZGF0ZUJyb3dzZXIoKVxcXCI+PC9icm93c2VyLWNoZWNrLWJveD48L2I+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibGlzdC11bnN0eWxlZFxcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjE1cHg7XFxcIj5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcInN1cHBvcnRlZFZlcnNpb24gaW4gJGN0cmwuYnJvd3Nlci5zdXBwb3J0ICB8IGxpbWl0VG86ICRjdHJsLnZlcnNpb25MaW1pdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJyb3dzZXItY2hlY2stYm94IG5hbWU9XFxcInt7c3VwcG9ydGVkVmVyc2lvbi52ZXJzaW9ufX1cXFwiIG5nLW1vZGVsPVxcXCJzdXBwb3J0ZWRWZXJzaW9uLnN1cHBvcnRlZFxcXCIgbmctY2hhbmdlPVxcXCIkY3RybC51cGRhdGVCcm93c2VyKClcXFwiPjwvYnJvd3Nlci1jaGVjay1ib3g+XFxyXFxuXFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXItY2hlY2tsaXN0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnJvd3NlckNoZWNrbGlzdC9icm93c2VyLWNoZWNrbGlzdC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJMaXN0Q29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQ29tbW9uU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBDb21tb25TZXJ2aWNlLmd1aWQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJG9uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuYnJvd3Nlcikge1xyXG4gICAgICAgICAgICB0aGlzLmJyb3dzZXIgPSBhbmd1bGFyLmNvcHkodGhpcy5icm93c2VyKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLnZlcnNpb25MaW1pdCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnNpb25MaW1pdCA9IGFuZ3VsYXIuY29weSh0aGlzLnZlcnNpb25MaW1pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdXBkYXRlQnJvd3NlcigpIHtcclxuICAgICAgICBsZXQgdXBkYXRlZCA9IGFuZ3VsYXIuY29weSh0aGlzLmJyb3dzZXIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vblVwZGF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vblVwZGF0ZWQoe3VwZGF0ZWRCcm93c2VyOiB1cGRhdGVkfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXIuY2hlY2tsaXN0LmNvbnRyb2xsZXIuanMiLCJcclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYnJvd3Nlci10YWJsZS5odG1sJztcclxuaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tICcuL2Jyb3dzZXItdGFibGUuc3R5bGUuY3NzJztcclxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9icm93c2VyLXRhYmxlLmNvbnRyb2xsZXInO1xyXG5cclxubGV0IGJyb3dzZXJUYWJsZUNvbXBvbmVudCA9IHtcclxuICAgIGNvbnRyb2xsZXI6Y29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOnRlbXBsYXRlLFxyXG4gICAgYmluZGluZ3MgOiB7XHJcbiAgICAgICAgY29uZmlnOiAnPCcsXHJcbiAgICAgICAgdmVyc2lvbkxpbWl0OiAnPCcsXHJcbiAgICAgICAgc2hvd1Vuc3VwcG9ydGVkOiAnPCdcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJvd3NlclRhYmxlQ29tcG9uZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5jb21wb25lbnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgPHRyPlxcclxcbiAgICAgICAgPHRoIG5nLXJlcGVhdD1cXFwiYnJvd3NlciBpbiAkY3RybC5jb25maWdcXFwiIG5nLXNob3c9XFxcImJyb3dzZXIuc3VwcG9ydGVkIHx8ICRjdHJsLnNob3dVbnN1cHBvcnRlZFxcXCI+e3ticm93c2VyLm5hbWV9fTwvdGg+XFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgPHRyPlxcclxcbiAgICAgICAgPHRkIG5nLXJlcGVhdD1cXFwiYnJvd3NlciBpbiAkY3RybC5jb25maWdcXFwiIG5nLWNsYXNzPVxcXCJ7J2JnLWRhbmdlcic6ISRjdHJsLmhhc0Z1bGxTdXBwb3J0KGJyb3dzZXIpfVxcXCIgbmctc2hvdz1cXFwiYnJvd3Nlci5zdXBwb3J0ZWQgfHwgJGN0cmwuc2hvd1Vuc3VwcG9ydGVkXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIG5nLXNyYz1cXFwie3ticm93c2VyLmltYWdlfX1cXFwiIGFsdD1cXFwie3ticm93c2VyLm5hbWV9fVxcXCI+XFxyXFxuICAgICAgICAgICAgPGhyPlxcclxcbiAgICAgICAgICAgIDwhLS08cCAgPnt7JGN0cmwuZ2VuZXJhdGVTdXBwb3J0RGVzY3JpcHRpb24oYnJvd3Nlcil9fTwvcD5cXHJcXG4gICAgICAgICAgICA8aHI+LS0+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LXVuc3R5bGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwic3VwcG9ydCBpbiBicm93c2VyLnN1cHBvcnQgfCBsaW1pdFRvOiRjdHJsLnZlcnNpb25MaW1pdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5nLWNsYXNzPVxcXCJ7J2JnLWRhbmdlcic6ISBicm93c2VyLnN1cHBvcnRlZCAmJiBzdXBwb3J0LnN1cHBvcnRlZH1cXFwiPnt7c3VwcG9ydC52ZXJzaW9ufX1cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC90ZD5cXHJcXG4gICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jyb3dzZXJUYWJsZS9icm93c2VyLXRhYmxlLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJUYWJsZUNvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVN1cHBvcnREZXNjcmlwdGlvbihicm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3VwcG9ydGVkICYmIGJyb3dzZXIuc3VwcG9ydC5ldmVyeSgodmVyc2lvbikgPT4gdmVyc2lvbi5zdXBwb3J0ZWQpID8gYExhdGVzdCAke2Jyb3dzZXIuc3VwcG9ydC5sZW5ndGh9IFZlcnNpb25zYCA6IGJyb3dzZXIuc3VwcG9ydGVkICYmIGJyb3dzZXIuc3VwcG9ydC5zb21lKCh2ZXJzaW9uKSA9PiB2ZXJzaW9uLnN1cHBvcnRlZCkgPyAnU29tZScgOiAnTm9uZSc7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhc0Z1bGxTdXBwb3J0KGJyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdXBwb3J0ZWQgJiYgYnJvd3Nlci5zdXBwb3J0LmV2ZXJ5KCh2ZXJzaW9uKSA9PiB2ZXJzaW9uLnN1cHBvcnRlZCk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5jb250cm9sbGVyLmpzIiwiXHJcbmNsYXNzIEJyb3dzZXJDaGVja2JveENvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKENvbW1vblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmlkID0gQ29tbW9uU2VydmljZS5ndWlkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nTW9kZWxDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5uZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKHRoaXMubmdNb2RlbCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgYnJvd3NlckNoZWNrYm94Q29tcG9uZW50ID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBuYW1lOiAnQCcsXHJcbiAgICAgICAgbmdNb2RlbDogJzwnLFxyXG5cclxuICAgIH0sXHJcbiAgICByZXF1aXJlOiB7bmdNb2RlbEN0cmw6ICduZ01vZGVsJ30sXHJcbiAgICBjb250cm9sbGVyOiBCcm93c2VyQ2hlY2tib3hDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cIiRjdHJsLm5hbWVcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cImNoZWNrLXt7JGN0cmwuaWR9fVwiIG5nLW1vZGVsPSckY3RybC5uZ01vZGVsJyBuZy1jaGFuZ2U9XCIkY3RybC5uZ01vZGVsQ2hhbmdlKClcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImNoZWNrLXt7JGN0cmwuaWR9fVwiPnt7JGN0cmwubmFtZX19PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyb3dzZXJDaGVja2JveENvbXBvbmVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9icm93c2VyLWNoZWNrYm94LmpzIiwidmFyIEZpbGVTYXZlciA9IHJlcXVpcmUoJ2ZpbGUtc2F2ZXInKTtcclxuY2xhc3MgRG9tSW1hZ2VDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigkcSwgQ29tbW9uU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgICAgIHRoaXMuQ29tbW9uU2VydmljZSA9IENvbW1vblNlcnZpY2U7XHJcblxyXG4gICAgICAgIGlmICghSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlLnRvQmxvYikge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlLCAndG9CbG9iJywge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmluU3RyID0gYXRvYihjYW52YXMudG9EYXRhVVJMKHR5cGUsIHF1YWxpdHkpLnNwbGl0KCcsJylbMV0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuID0gYmluU3RyLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyciA9IG5ldyBVaW50OEFycmF5KGxlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0gPSBiaW5TdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEJsb2IoW2Fycl0sIHt0eXBlOiB0eXBlIHx8ICdpbWFnZS9wbmcnfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLkNvbW1vblNlcnZpY2UuZ3VpZCgpO1xyXG4gICAgfVxyXG5cclxuICAgICRvbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLnNyY0lkKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUltYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRwb3N0TGluaygpIHtcclxuICAgICAgICBpZiAodGhpcy5zcmNJZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUltYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVJbWFnZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHNyYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3JjSWQpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2FudmFzLSR7dGhpcy5pZH1gKTtcclxuICAgICAgICBpZiAoIWNhbnZhcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkbid0IGZpbmQgY2FudmFzXCIpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUltYWdlKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaXNVcGRhdGluZ0ltYWdlKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1VwZGF0aW5nSW1hZ2UgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXB1dGVkU3R5bGVUb0lubGluZVN0eWxlKHNyYywge3JlY3Vyc2l2ZTp0cnVlfSk7XHJcblxyXG5cclxuICAgICAgICBjYW52YXMud2lkdGggPSBzcmMub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNyYy5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIiR7c3JjLm9mZnNldFdpZHRofVwiIGhlaWdodD1cIiR7c3JjLm9mZnNldEhlaWdodH1cIj5gICtcclxuICAgICAgICAgICAgJzxmb3JlaWduT2JqZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj4nICtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaHRtbF90b194bWwoc3JjLmlubmVySFRNTCkgK1xyXG5cclxuICAgICAgICAgICAgJzwvZm9yZWlnbk9iamVjdD4nICtcclxuICAgICAgICAgICAgJzwvc3ZnPic7XHJcblxyXG4gICAgICAgIGRhdGEgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICAgIGxldCBuZXdJbWFnZUlkID0gYGltYWdlLSR7dGhpcy5pZH1gO1xyXG5cclxuICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XHJcblxyXG4gICAgICAgICAgICBjYW52YXMudG9CbG9iKCAoYmxvYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3SW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBubyBsb25nZXIgbmVlZCB0byByZWFkIHRoZSBibG9iIHNvIGl0J3MgcmV2b2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3SW1nLnNyYyA9IHVybDtcclxuICAgICAgICAgICAgICAgIG5ld0ltZy5pZCA9IG5ld0ltYWdlSWQ7XHJcbiAgICAgICAgICAgICAgICBuZXdJbWcuY2xhc3NMaXN0LmFkZChcInJvdW5kZWRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2xkSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3SW1hZ2VJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkSW1nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkSW1nLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2hvd0ltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBuZXdJbWcub3V0ZXJIVE1MKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcclxuICAgICAgICAgICAgICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgYFN1cHBvcnRlZEJyb3dzZXJzVGFibGUtJHt0b2RheX0ucG5nYCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVXBkYXRpbmdJbWFnZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaW1nLnNyYyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsXCIgKyBkYXRhO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgaHRtbF90b194bWwoaHRtbCkge1xyXG4gICAgICAgIHZhciBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoJycpO1xyXG4gICAgICAgIGRvYy53cml0ZShodG1sKTtcclxuXHJcbiAgICAgICAgLy8gWW91IG11c3QgbWFudWFsbHkgc2V0IHRoZSB4bWxucyBpZiB5b3UgaW50ZW5kIHRvIGltbWVkaWF0ZWx5IHNlcmlhbGl6ZVxyXG4gICAgICAgIC8vIHRoZSBIVE1MIGRvY3VtZW50IHRvIGEgc3RyaW5nIGFzIG9wcG9zZWQgdG8gYXBwZW5kaW5nIGl0IHRvIGFcclxuICAgICAgICAvLyA8Zm9yZWlnbk9iamVjdD4gaW4gdGhlIERPTVxyXG4gICAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd4bWxucycsIGRvYy5kb2N1bWVudEVsZW1lbnQubmFtZXNwYWNlVVJJKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHdlbGwtZm9ybWVkIG1hcmt1cFxyXG4gICAgICAgIGh0bWwgPSAobmV3IFhNTFNlcmlhbGl6ZXIpLnNlcmlhbGl6ZVRvU3RyaW5nKGRvYy5ib2R5KTtcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZFN0eWxlVG9JbmxpbmVTdHlsZShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGVsZW1lbnQgc3BlY2lmaWVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghb3B0aW9ucykge1xyXG4gICAgICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5yZWN1cnNpdmUpIHtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbGVtZW50LmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZWRTdHlsZVRvSW5saW5lU3R5bGUoY2hpbGQsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gY29tcHV0ZWRTdHlsZS5pdGVtKGkpO1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMucHJvcGVydGllcyB8fCBvcHRpb25zLnByb3BlcnRpZXMuaW5kZXhPZihwcm9wZXJ0eSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgZG9tSW1hZ2VDb21wb25lbnQgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHNyY0lkOiAnQCcsXHJcbiAgICAgICAgc2hvd0ltYWdlOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBEb21JbWFnZUNvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogYDxjYW52YXMgaWQ9XCJjYW52YXMte3skY3RybC5pZH19XCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIj48L2NhbnZhcz5gXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb21JbWFnZUNvbXBvbmVudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZG9tLWltYWdlLmpzIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0IHVpcm91dGVyIGZyb20gJ0B1aXJvdXRlci9hbmd1bGFyanMnO1xyXG5cclxubGV0IGhvbWVNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmhvbWUnLFt1aXJvdXRlcl0pO1xyXG5cclxuXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9ob21lLnJvdXRlcy5qcydcclxuaG9tZU1vZHVsZS5jb25maWcocm91dGVzKTtcclxuXHJcbmltcG9ydCBob21lQ29tcG9uZW50IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xyXG5ob21lTW9kdWxlLmNvbXBvbmVudCgnaG9tZScsIGhvbWVDb21wb25lbnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZU1vZHVsZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaW5kZXguanMiLCJyb3V0ZXMuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdXRlcygkc3RhdGVQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy8nLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdob21lJ1xyXG4gICAgICAgIH0pO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5yb3V0ZXMuanMiLCJcclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaG9tZS5jb21wb25lbnQuaHRtbCc7XHJcbmltcG9ydCBjb21wb25lbnRTdHlsZXMgZnJvbSAnLi9ob21lLmNzcyc7XHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vaG9tZS5jb250cm9sbGVyJztcclxuXHJcblxyXG5sZXQgaG9tZUNvbXBvbmVudCA9IHtcclxuICAgIGJpbmRpbmdzOnt9LFxyXG4gICAgdGVtcGxhdGU6dGVtcGxhdGUsXHJcbiAgICBjb250cm9sbGVyOmNvbnRyb2xsZXJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVDb21wb25lbnQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImp1bWJvdHJvblxcXCI+XFxyXFxuICAgIDxoMSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPkJ1aWxkIGEgU3VwcG9ydGVkIEJyb3dzZXIgVGFibGUhPC9oMT5cXHJcXG4gICAgPGhyPlxcclxcbiAgICA8Zm9ybSBjbGFzcz1cXFwiXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBtYlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG1iXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwuYnJvd3NlclNjb3BlXFxcIiBwbGFjZWhvbGRlcj1cXFwie3skY3RybC5kZWZhdWx0QnJvd3NlclNjb3BlfX1cXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwudXBkYXRlU2NvcGUoKVxcXCI+VXBkYXRlIFNjb3BlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJyb3dzZXItdGFibGUgaWQ9XFxcIlN1cHBvcnRlZEJyb3dzZXJUYWJsZVxcXCIgY29uZmlnPVxcXCIkY3RybC5jaGVja2VkQnJvd3NlcnNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uLWxpbWl0PVxcXCIkY3RybC52ZXJzaW9uTGltaXRcXFwiIHNob3ctdW5zdXBwb3J0ZWQ9XFxcIiRjdHJsLnNob3dVbnN1cHBvcnRlZFxcXCI+PC9icm93c2VyLXRhYmxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIiBuZy1jbGljaz1cXFwic2hvd0ltYWdlID0gIXNob3dJbWFnZVxcXCI+R2VuZXJhdGUgSW1hZ2U8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgIDxkb20taW1hZ2UgbmctaWY9XFxcInNob3dJbWFnZVxcXCIgc3JjLWlkPVxcXCJTdXBwb3J0ZWRCcm93c2VyVGFibGVcXFwiPjwvZG9tLWltYWdlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmVhdHVyZXMvaG9tZS9ob21lLmNzc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBicm93c2Vyc2xpc3QgZnJvbSBcImJyb3dzZXJzbGlzdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKENvbW1vblNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuaWQgPSBDb21tb25TZXJ2aWNlLmd1aWQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0QnJvd3NlclNjb3BlID0gJ2xhc3QgNSBlZGdlIHZlcnNpb24sIGxhc3QgNSBmaXJlZm94IHZlcnNpb24sIGxhc3QgNSBjaHJvbWUgdmVyc2lvbiwgbGFzdCA1IHNhZmFyaSB2ZXJzaW9uLCBsYXN0IDUgb3BlcmEgdmVyc2lvbic7XHJcbiAgICAgICAgdGhpcy5icm93c2VyU2NvcGUgPSAnJztcclxuICAgICAgICB0aGlzLl9jaGVja2VkQnJvd3NlcnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdJRScsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYnJvd3Nlci1sb2dvcy9pbnRlcm5ldC1leHBsb3Jlcl85LTExL2ludGVybmV0LWV4cGxvcmVyXzktMTFfMTI4eDEyOC5wbmcnKSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzExJywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzEwJywgc3VwcG9ydGVkOiBmYWxzZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICc5Jywgc3VwcG9ydGVkOiBmYWxzZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246ICc4Jywgc3VwcG9ydGVkOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VkZ2UnLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYnJvd3Nlci1sb2dvcy9lZGdlL2VkZ2VfMTI4eDEyOC5wbmcnKSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzE4Jywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzE3Jywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzE2Jywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzE1Jywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzE0Jywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzEzJywgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogJzEyJywgc3VwcG9ydGVkOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZpcmVGb3gnLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYnJvd3Nlci1sb2dvcy9maXJlZm94L2ZpcmVmb3hfMTI4eDEyOC5wbmcnKSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjcwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Nocm9tZScsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL2Nocm9tZS9jaHJvbWVfMTI4eDEyOC5wbmcnKSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI4MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjc5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjc2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjczXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNzJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI3MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjcwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2OFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2NVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjY0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NhZmFyaScsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVxdWlyZSgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bicm93c2VyLWxvZ29zL3NhZmFyaS9zYWZhcmlfMTI4eDEyOC5wbmcnKSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxMy4xXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMTNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxMi4xXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMTJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxMS4xXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMTFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIxMC4xXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMTBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI5LjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiOFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjcuMVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2LjFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNS4xXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ09wZXJhJyxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJyb3dzZXItbG9nb3Mvb3BlcmEvb3BlcmFfMTI4eDEyOC5wbmcnKSxcclxuICAgICAgICAgICAgICAgIHN1cHBvcnQ6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI2MlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjYxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNjBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1OVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU4XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTdcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1NlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjU1XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTRcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1M1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjUyXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNTFcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI1MFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ5XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDhcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0N1wiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQ2XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDVcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0NFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQzXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiNDJcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCI0MVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjQwXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzlcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzOFwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM3XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzZcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzNVwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjM0XCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzNcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbjogXCIzMlwiLCBzdXBwb3J0ZWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt2ZXJzaW9uOiBcIjMxXCIsIHN1cHBvcnRlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAge3ZlcnNpb246IFwiMzBcIiwgc3VwcG9ydGVkOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZEJyb3dzZXJzID0gYW5ndWxhci5jb3B5KHRoaXMuX2NoZWNrZWRCcm93c2Vycyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpe1xyXG5cclxuICAgICAgIHRoaXMudXBkYXRlU2NvcGUoKTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTY29wZSgpe1xyXG4gICAgICAgIGxldCBjcyA9IHRoaXMuYnJvd3NlclNjb3BlfHx0aGlzLmRlZmF1bHRCcm93c2VyU2NvcGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZCA9IGJyb3dzZXJzbGlzdChjcywge2lnbm9yZVVua25vd25WZXJzaW9uczogdHJ1ZX0pXHJcbiAgICAgICAgICAgIC5tYXAoKGJyb3dzZXIpID0+IGJyb3dzZXIuc3BsaXQoXCIgXCIpKTtcclxuXHJcbiAgICAgICAgbGV0IGJsaXN0ID0ge307XHJcbiAgICAgICAgc3VwcG9ydGVkLmZvckVhY2goKGIpPT57XHJcbiAgICAgICAgICAgIGlmKCFibGlzdFtiWzBdXSl7XHJcbiAgICAgICAgICAgICAgICBibGlzdFtiWzBdXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJsaXN0W2JbMF1dLnB1c2goeyd2ZXJzaW9uJzpiWzFdLCdzdXBwb3J0ZWQnOnRydWV9KTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja2VkQnJvd3NlcnMuZm9yRWFjaCgoY2IpPT57XHJcbiAgICAgICAgICAgIGNiLnN1cHBvcnQgPSBibGlzdFtjYi5uYW1lLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVCcm93c2VyKHVwZGF0ZWRCcm93c2VyKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tlZEJyb3dzZXJzLmZvckVhY2goKGNoZWNrZWRCcm93c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkQnJvd3Nlci5uYW1lID09PSB1cGRhdGVkQnJvd3Nlci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkQnJvd3Nlci5zdXBwb3J0ID0gdXBkYXRlZEJyb3dzZXIuc3VwcG9ydDtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRCcm93c2VyLnN1cHBvcnRlZCA9IHVwZGF0ZWRCcm93c2VyLnN1cHBvcnRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mZWF0dXJlcy9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIHBhdGggKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB1aXJvdXRlciBmcm9tICdAdWlyb3V0ZXIvYW5ndWxhcmpzJztcclxuaW1wb3J0IGZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJztcclxuXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9hcHAucm91dGVzJztcclxuXHJcbi8vaW1wb3J0IGFwcCBmdW5jdGlvbmFsaXR5XHJcbmltcG9ydCAnLi9zZXJ2aWNlcyc7XHJcblxyXG5pbXBvcnQgJy4vY29tcG9uZW50cyc7XHJcbmltcG9ydCAnLi9mZWF0dXJlcy9ob21lJztcclxuXHJcbmNvbnN0IHJlcXVpcmVzID0gW1xyXG4gICAgJ3VpLnJvdXRlcicsXHJcbiAgICAnYXBwLnNlcnZpY2VzJyxcclxuICAgICdhcHAuY29tcG9uZW50cycsXHJcbiAgICAnYXBwLmhvbWUnXHJcbl07XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2Jyb3dzZXJTdXBwb3J0QXBwJywgcmVxdWlyZXMpXHJcbiAgICAuY29uZmlnKHJvdXRlcyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAubW9kdWxlLmpzIiwicm91dGVzLiRpbmplY3QgPSBbJyR1cmxSb3V0ZXJQcm92aWRlciddO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3V0ZXMoJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLnJvdXRlcy5qcyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCB7Q29tbW9uU2VydmljZX0gZnJvbSAnLi9jb21tb24uc2VydmljZSc7XHJcblxyXG5sZXQgc2VydmljZXNNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgW10pO1xyXG5cclxuICAgIHNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ0NvbW1vblNlcnZpY2UnLCBDb21tb25TZXJ2aWNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2VzTW9kdWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9pbmRleC5qcyIsIlxyXG5jbGFzcyBDb21tb25TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuICAgIGd1aWQoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gczQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xyXG4gICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgIHtDb21tb25TZXJ2aWNlfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvY29tbW9uLnNlcnZpY2UuanMiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgYnJvd3Nlckxpc3RDb21wb25lbnQgZnJvbSAnLi9icm93c2VyQ2hlY2tsaXN0L2Jyb3dzZXItY2hlY2tsaXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBicm93c2VyVGFibGVDb21wb25lbnQgZnJvbSAnLi9icm93c2VyVGFibGUvYnJvd3Nlci10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgYnJvd3NlckNoZWNrQm94IGZyb20gJy4vYnJvd3Nlci1jaGVja2JveCc7XHJcbmltcG9ydCBkb21JbWFnZSBmcm9tICcuL2RvbS1pbWFnZSc7XHJcblxyXG5sZXQgY29tcG9uZXRzTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb21wb25lbnRzJyxbXSk7XHJcblxyXG5jb21wb25ldHNNb2R1bGUuY29tcG9uZW50KCdicm93c2VyQ2hlY2tCb3gnLCBicm93c2VyQ2hlY2tCb3gpO1xyXG5jb21wb25ldHNNb2R1bGUuY29tcG9uZW50KCdicm93c2VyQ2hlY2tMaXN0JywgYnJvd3Nlckxpc3RDb21wb25lbnQpO1xyXG5jb21wb25ldHNNb2R1bGUuY29tcG9uZW50KCdicm93c2VyVGFibGUnLCBicm93c2VyVGFibGVDb21wb25lbnQpO1xyXG5jb21wb25ldHNNb2R1bGUuY29tcG9uZW50KCdkb21JbWFnZScsIGRvbUltYWdlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmV0c01vZHVsZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9