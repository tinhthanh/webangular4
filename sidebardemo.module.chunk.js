webpackJsonp(["sidebardemo.module"],{

/***/ "../../../../../src/app/showcase/components/sidebar/sidebardemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebardemo__ = __webpack_require__("../../../../../src/app/showcase/components/sidebar/sidebardemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SidebarDemoRoutingModule = (function () {
    function SidebarDemoRoutingModule() {
    }
    SidebarDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__sidebardemo__["a" /* SidebarDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], SidebarDemoRoutingModule);
    return SidebarDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/sidebar/sidebardemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Sidebar</span>\r\n        <span>Sidebar is a panel component displayed as an overlay.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\">\r\n        <h1 style=\"font-weight:normal\">Left Sidebar</h1>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    </p-sidebar>\r\n    \r\n    <p-sidebar [(visible)]=\"visibleSidebar2\" position=\"right\" [baseZIndex]=\"10000\">\r\n        <h1 style=\"font-weight:normal\">Right Sidebar</h1>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    </p-sidebar>\r\n    \r\n    <p-sidebar [(visible)]=\"visibleSidebar3\" position=\"top\" [baseZIndex]=\"10000\">\r\n        <h1 style=\"font-weight:normal\">Top Sidebar</h1>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    </p-sidebar>\r\n    \r\n    <p-sidebar [(visible)]=\"visibleSidebar4\" position=\"bottom\" [baseZIndex]=\"10000\">\r\n        <h1 style=\"font-weight:normal\">Bottom Sidebar</h1>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    </p-sidebar>\r\n    \r\n    <p-sidebar [(visible)]=\"visibleSidebar5\" [fullScreen]=\"true\" [baseZIndex]=\"10000\">\r\n        <h1 style=\"font-weight:normal\">Full Screen Sidebar</h1>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n        <button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    </p-sidebar>\r\n    \r\n    <button pButton type=\"button\" (click)=\"visibleSidebar1 = true\" icon=\"fa-arrow-right\"></button>\r\n    <button pButton type=\"button\" (click)=\"visibleSidebar2 = true\" icon=\"fa-arrow-left\"></button>\r\n    <button pButton type=\"button\" (click)=\"visibleSidebar3 = true\" icon=\"fa-arrow-down\"></button>\r\n    <button pButton type=\"button\" (click)=\"visibleSidebar4 = true\" icon=\"fa-arrow-up\"></button>\r\n    <button pButton type=\"button\" (click)=\"visibleSidebar5 = true\" icon=\"fa-arrows-alt\"></button>    \r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SidebarModule&#125; from 'primeng/primeng';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Sidebar is used as a container and visibility is controlled with visible property.</p>\r\n                    \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-sidebar [(visible)]=\"display\"&gt;\r\n    Content\r\n&lt;/p-sidebar&gt;\r\n\r\n&lt;button type=\"text\" (click)=\"display = true\" pButton icon=\"fa-external-link-square\" label=\"Show\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Position</h3>\r\n            <p>Sidebar can either be located as the left (default), right, top or bottom of the screen depending on the position property.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-sidebar [(visible)]=\"display\" position=\"right\"&gt;\r\n    Content\r\n&lt;/p-sidebar&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Size</h3>\r\n            <p>Sidebar size can be changed using a fixed value or using one of the three predefined ones.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-sidebar [(visible)]=\"display\" [ngStyle]=\"&#123;width:'30em'&#125;\"&gt;&lt;/p-sidebar&gt;\r\n\r\n&lt;p-sidebar [(visible)]=\"display\" styleClass=\"ui-sidebar-sm\"&gt;&lt;/p-sidebar&gt;\r\n&lt;p-sidebar [(visible)]=\"display\" styleClass=\"ui-sidebar-md\"&gt;&lt;/p-sidebar&gt;\r\n&lt;p-sidebar [(visible)]=\"display\" styleClass=\"ui-sidebar-lg\"&gt;&lt;/p-sidebar&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Full Screen</h3>\r\n            <p>Full screen mode allows the sidebar to cover whole screen.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-sidebar [(visible)]=\"display\" [fullScreen]=\"true\"&gt;\r\nContent\r\n&lt;/p-sidebar&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>visible</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Specifies the visibility of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>position</td>\r\n                            <td>string</td>\r\n                            <td>left</td>\r\n                            <td>Specifies the position of the sidebar, valid values are \"left\" and \"right\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>fullScreen</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Adds a close icon to the header to hide the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the dialog, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>blockScroll</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to block scrolling of the document when sidebar is active.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onShow</td>\r\n                            <td>event: Event object</td>\r\n                            <td>Callback to invoke when dialog is shown.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onHide</td>\r\n                            <td>event: Event object</td>\r\n                            <td>Callback to invoke when dialog is hidden.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-sidebar</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-left</td>\r\n                            <td>Container element of left sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-right</td>\r\n                            <td>Container element of right sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-top</td>\r\n                            <td>Container element of top sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-bottom</td>\r\n                            <td>Container element of bottom sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-full</td>\r\n                            <td>Container element of a full screen sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-active</td>\r\n                            <td>Container element when sidebar is visible.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-close</td>\r\n                            <td>Close anchor element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-sm</td>\r\n                            <td>Small sized sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-md</td>\r\n                            <td>Medium sized sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-lg</td>\r\n                            <td>Large sized sidebar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sidebar-mask</td>\r\n                            <td>Modal layer of the sidebar.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/sidebar\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n        \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\"&#125;\"&gt;\r\n    &lt;h1 style=\"font-weight:normal\"&gt;Left Sidebar&lt;/h1&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n&lt;/p-sidebar&gt;\r\n\r\n&lt;p-sidebar [(visible)]=\"visibleSidebar2\" position=\"right\" [baseZIndex]=\"10000\"&#125;\"&gt;\r\n    &lt;h1 style=\"font-weight:normal\"&gt;Right Sidebar&lt;/h1&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n&lt;/p-sidebar&gt;\r\n\r\n&lt;p-sidebar [(visible)]=\"visibleSidebar3\" position=\"top\" [baseZIndex]=\"10000\"&#125;\"&gt;\r\n    &lt;h1 style=\"font-weight:normal\"&gt;Top Sidebar&lt;/h1&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n&lt;/p-sidebar&gt;\r\n\r\n&lt;p-sidebar [(visible)]=\"visibleSidebar4\" position=\"bottom\" [baseZIndex]=\"10000\"&gt;\r\n    &lt;h1 style=\"font-weight:normal\"&gt;Bottom Sidebar&lt;/h1&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n&lt;/p-sidebar&gt;\r\n\r\n&lt;p-sidebar [(visible)]=\"visibleSidebar5\" [fullScreen]=\"true\" [baseZIndex]=\"10000\"&#125;\"&gt;\r\n    &lt;h1 style=\"font-weight:normal\"&gt;Full Screen Sidebar&lt;/h1&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n&lt;/p-sidebar&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar1 = true\" icon=\"fa-arrow-right\"&gt;&lt;/button&gt;\r\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar2 = true\" icon=\"fa-arrow-left\"&gt;&lt;/button&gt;\r\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar3 = true\" icon=\"fa-arrow-down\"&gt;&lt;/button&gt;\r\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar4 = true\" icon=\"fa-arrow-up\"&gt;&lt;/button&gt;\r\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar5 = true\" icon=\"fa-arrows-alt\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SidebarDemo &#123;\r\n\r\n    visibleSidebar1;\r\n    \r\n    visibleSidebar2;\r\n    \r\n    visibleSidebar3;\r\n    \r\n    visibleSidebar4;\r\n    \r\n    visibleSidebar5;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n            </p-tabPanel>\r\n        </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/sidebar/sidebardemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDemoModule", function() { return SidebarDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebardemo__ = __webpack_require__("../../../../../src/app/showcase/components/sidebar/sidebardemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebardemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/sidebar/sidebardemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sidebar_sidebar__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SidebarDemoModule = (function () {
    function SidebarDemoModule() {
    }
    SidebarDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__sidebardemo_routing_module__["a" /* SidebarDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_sidebar_sidebar__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sidebardemo__["a" /* SidebarDemo */]
            ]
        })
    ], SidebarDemoModule);
    return SidebarDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/sidebar/sidebardemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarDemo = (function () {
    function SidebarDemo() {
    }
    SidebarDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/sidebar/sidebardemo.html")
        })
    ], SidebarDemo);
    return SidebarDemo;
}());



/***/ })

});
//# sourceMappingURL=sidebardemo.module.chunk.js.map