webpackJsonp(["lightboxdemo.module"],{

/***/ "../../../../../src/app/showcase/components/lightbox/lightboxdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightboxDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lightboxdemo__ = __webpack_require__("../../../../../src/app/showcase/components/lightbox/lightboxdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LightboxDemoRoutingModule = (function () {
    function LightboxDemoRoutingModule() {
    }
    LightboxDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__lightboxdemo__["a" /* LightboxDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], LightboxDemoRoutingModule);
    return LightboxDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/lightbox/lightboxdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Lightbox</span>\r\n        <span>LightBox is a modal overlay component to display images, videos, inline html content and iframes.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-lightbox [images]=\"images\"></p-lightbox>\r\n\r\n    <h3>Content</h3>\r\n    <p-lightbox type=\"content\">\r\n        <a class=\"group\" href=\"#\">\r\n            Watch Video\r\n        </a>\r\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen></iframe>\r\n    </p-lightbox>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;LightboxModule&#125; from 'primeng/primeng';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Lightbox has two modes; <i>image</i> and <i>custom content</i> defined using type property. In image mode a collection of\r\n            images are required to display where an image object in the collection defines the source of the original image, thumbnail image and the title.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-lightbox [images]=\"images\"&gt;&lt;/p-lightbox&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class LightboxDemo &#123;\r\n\r\n    images: any[];\r\n\r\n    constructor() &#123;\r\n        this.images = [];\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title:'Sopranos 1'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title:'Sopranos 2'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title:'Sopranos 3'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title:'Sopranos 4'&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n            <p>Content mode is enabled by setting type property to \"content\", providing an anchor to open the lightbox and content to display inside lightbox.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-lightbox type=\"content\"&gt;\r\n    &lt;a class=\"group\" href=\"#\"&gt;\r\n        Watch Video\r\n    &lt;/a&gt;\r\n    &lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;\r\n&lt;/p-lightbox&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Effects</h3>\r\n            <p>The easing function to use between image transitions is \"ease-out\" by default and this can be customized using easing property. \r\n                See <a href=\"http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\">here</a> for possible alternative values. Duration\r\n            of the effect can be changed using effectDuration option.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-lightbox [images]=\"images\" easing=\"ease-in\" effectDuration=\"1500ms\"&gt;&lt;/p-lightbox&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>images</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of images to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>type</td>\r\n                            <td>string</td>\r\n                            <td>image</td>\r\n                            <td>Type of the lightbox, valid values are \"image\" and \"content\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>easing</td>\r\n                            <td>string</td>\r\n                            <td>ease-out</td>\r\n                            <td>Easing to use for transition between images.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>effectDuration</td>\r\n                            <td>string</td>\r\n                            <td>500ms</td>\r\n                            <td>Duration of the transition between the images.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-lightbox</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-lightbox-content</td>\r\n                            <td>Content element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-lightbox-nav-right</td>\r\n                            <td>Element to navigate to next image.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-lightbox-nav-left</td>\r\n                            <td>Element to navigate to previous image.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-lightbox-caption</td>\r\n                            <td>Caption element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-lightbox-caption-text</td>\r\n                            <td>Text of caption.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-lightbox-close</td>\r\n                            <td>Close icon.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/lightbox\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-lightbox [images]=\"images\"&gt;&lt;/p-lightbox&gt;\r\n\r\n&lt;h3&gt;Content&lt;/h3&gt;\r\n&lt;p-lightbox type=\"content\"&gt;\r\n    &lt;a class=\"group\" href=\"#\"&gt;\r\n        Watch Video\r\n    &lt;/a&gt;\r\n    &lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;\r\n&lt;/p-lightbox&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class LightboxDemo &#123;\r\n\r\n    images: any[];\r\n\r\n    constructor() &#123;\r\n        this.images = [];\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title:'Sopranos 1'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title:'Sopranos 2'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title:'Sopranos 3'&#125;);\r\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title:'Sopranos 4'&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/lightbox/lightboxdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxDemoModule", function() { return LightboxDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lightboxdemo__ = __webpack_require__("../../../../../src/app/showcase/components/lightbox/lightboxdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lightboxdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/lightbox/lightboxdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_lightbox_lightbox__ = __webpack_require__("../../../../../src/app/components/lightbox/lightbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LightboxDemoModule = (function () {
    function LightboxDemoModule() {
    }
    LightboxDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__lightboxdemo_routing_module__["a" /* LightboxDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_lightbox_lightbox__["a" /* LightboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lightboxdemo__["a" /* LightboxDemo */]
            ]
        })
    ], LightboxDemoModule);
    return LightboxDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/lightbox/lightboxdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightboxDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightboxDemo = (function () {
    function LightboxDemo() {
        this.images = [];
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title: 'Sopranos 1' });
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title: 'Sopranos 2' });
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title: 'Sopranos 3' });
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title: 'Sopranos 4' });
    }
    LightboxDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/lightbox/lightboxdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], LightboxDemo);
    return LightboxDemo;
}());



/***/ })

});
//# sourceMappingURL=lightboxdemo.module.chunk.js.map