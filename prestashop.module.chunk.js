webpackJsonp(["prestashop.module"],{

/***/ "../../../../../src/app/admin/components/prestashop/edit-customer/edit-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerEditComponent = (function () {
    function CustomerEditComponent(http, fb, router, route) {
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.msgs = [];
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        this.key = this.router.snapshot.queryParams['key'];
        console.log(this.key);
        this.userform = this.fb.group({
            firstname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                // tslint:disable-next-line:max-line-length
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ]),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            gender: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        this.genders = [];
        this.genders.push({ label: 'Giới Tính', value: '' });
        this.genders.push({ label: 'Nam', value: '1' });
        this.genders.push({ label: 'Nữ', value: '2' });
    };
    CustomerEditComponent.prototype.onSubmit = function (value) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
        var edit = {};
        edit.lastname = this.userform.value.lastname;
        edit.firstname = this.userform.value.firstname;
        edit.email = this.userform.value.email;
        edit.id_gender = this.userform.value.gender;
        this.http.post('http://localhost:8087/customer/' + this.key, edit).subscribe(function (data) {
            console.log(data);
        });
        // this.route.navigate(['/admin/prestashop/main']);
        this.route.navigateByUrl('/admin/prestashop/main');
    };
    Object.defineProperty(CustomerEditComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.userform.value); },
        enumerable: true,
        configurable: true
    });
    CustomerEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/admin/components/prestashop/edit-customer/edit-custommer.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/components/prestashop/edit-customer/edit-custommer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n        <div>\r\n            <span class=\"feature-title\"> Prestashop Demo</span>\r\n            <span> Call service Prestashop with angular 4.</span>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"content-section implementation\">\r\n    \r\n    <p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>\r\n    \r\n    <form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\">\r\n        <p-panel header=\"Thêm nhân viên\">\r\n            <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-2\">\r\n                        Tên *:\r\n                    </div>\r\n                    <div class=\"ui-grid-col-6\">\r\n                        <input pInputText type=\"text\" formControlName=\"firstname\" placeholder=\"Required\"/>\r\n                    </div>\r\n                    <div class=\"ui-grid-col-4\">\r\n                        <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['firstname'].valid&&userform.controls['firstname'].dirty\">\r\n                            <i class=\"fa fa-close\"></i>\r\n                            Tên không được để trống \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-2\">\r\n                        Họ  *:\r\n                    </div>\r\n                    <div class=\"ui-grid-col-6\">\r\n                        <input pInputText type=\"text\" formControlName=\"lastname\" placeholder=\"Required\"/>\r\n                    </div>\r\n                    <div class=\"ui-grid-col-4\">\r\n                        <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['lastname'].valid&&userform.controls['lastname'].dirty\">\r\n                            <i class=\"fa fa-close\"></i>\r\n                            Họ không được để trống\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-2\">\r\n                        Email *:\r\n                    </div>\r\n                    <div class=\"ui-grid-col-6\">\r\n                        <input pInputText type=\"email\" formControlName=\"email\" placeholder=\"Địa chỉ email\"/>\r\n                    </div>\r\n                    <div class=\"ui-grid-col-4\">\r\n                        <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['email'].valid&&userform.controls['email'].dirty\">\r\n                            <i class=\"fa fa-close\"></i>\r\n                            <span *ngIf=\"userform.controls['email'].errors['required']\">Email không được để trống</span>\r\n                            <span *ngIf=\"userform.controls['email'].errors['pattern']\">Email không hợp lệ  </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-2\">\r\n                        Mô tả:\r\n                    </div>\r\n                    <div class=\"ui-grid-col-6\">\r\n                        <textarea pInputTextarea type=\"text\" formControlName=\"description\"></textarea>\r\n                    </div>\r\n                    <div class=\"ui-grid-col-4\"></div>\r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-2\">\r\n                        Giới Tính *:\r\n                    </div>\r\n                    <div class=\"ui-grid-col-6\">\r\n                        <p-dropdown [options]=\"genders\" formControlName=\"gender\" [autoWidth]=\"false\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-grid-col-4\">\r\n                        <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!userform.controls['gender'].valid&&userform.controls['gender'].dirty\">\r\n                            <i class=\"fa fa-close\"></i>\r\n                           Vui lòng chọn giới tính\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-2\"></div>\r\n                    <div class=\"ui-grid-col-6\">\r\n                        <button pButton type=\"submit\" label=\"Submit\" [disabled]=\"!userform.valid\"></button>\r\n                    </div>\r\n                    <div class=\"ui-grid-col-4\"></div>\r\n                </div>\r\n                <div style=\"text-align:center;margin-top:20px\" *ngIf=\"submitted\">\r\n                    Form Submitted....\r\n                    <br>\r\n                    {{diagnostic}}\r\n                </div>\r\n            </div>\r\n        </p-panel>\r\n        <button routerLink=\"/admin/prestashop/main\" pButton type=\"button\" icon=\"fa-arrow-left\" label=\"Back \" class=\"ui-button-success\"></button>\r\n        \r\n    </form>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/admin/components/prestashop/main-customer/main-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Demo Call service Angular 5</span>\r\n        <span> Ứng dụng với chức năng call service Prestashop lấy ra danh sách đơn hàng mới </span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n\r\n    <p-carousel headerText=\"   Xem đơn hàng \" [value]=\"carts\">\r\n        <ng-template let-carts pTemplate=\"item\">\r\n            <div class=\"ui-grid ui-grid-responsive\">\r\n                <div class=\"ui-grid-row\">\r\n                        <div class=\"ui-grid-col-12\"> {{ carts.date_upd }}   </div>\r\n                \r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-6\">Hình thức: </div>\r\n                    <div class=\"ui-grid-col-6\">{{carts.payment}}</div>\r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-6\">Tổng tiền </div>\r\n                    <div class=\"ui-grid-col-6\">{{carts.total_products}}</div>\r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-6\">Tiền Giao: </div>\r\n                    <div class=\"ui-grid-col-6\">{{carts.total_shipping\r\n                    }}</div>\r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-12\">\r\n                        <button type=\"button\" pButton icon=\"fa-search\" (click)=\"selectCar(carts)\"></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </p-carousel>\r\n\r\n\r\n \r\n        <p-panel header=\" Thống kê \" [toggleable]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n                <div class=\"ui-grid-row\">\r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n                <p-fieldset legend=\" Nhân viên \" [collapsed]=\"true\" [toggleable]=\"true\">\r\n                        <p-footer>\r\n                                <div class=\"ui-grid-row\">\r\n                                        <div class=\"ui-grid-col-12\">Số lượng: {{ sl_khach_hang }} </div></div>\r\n                                <button pButton type=\"button\" icon=\"fa-plus\" label=\"New\" class=\"ui-button-info\"></button>\r\n                                <button pButton type=\"button\" icon=\"fa-list\" label=\"View\" (click)=\"ds_kh_show=!ds_kh_show\" class=\"ui-button-success\"></button>\r\n                            </p-footer>\r\n                   </p-fieldset>\r\n                  \r\n               </div>\r\n       \r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n                <p-fieldset legend=\" Sản phẩm \" [collapsed]=\"true\" [toggleable]=\"true\">\r\n                    <h2>  {{ sl_san_pham + ' ' }} Sản phẩm </h2>\r\n                   </p-fieldset>\r\n               </div>\r\n               <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n                    <p-fieldset legend=\" Đơn hàng \" [collapsed]=\"true\" [toggleable]=\"true\">\r\n                        <h2>{{sl_don_hang + ' '}} Đơn hàng  </h2>\r\n                        </p-fieldset>\r\n                   </div>\r\n            </div>\r\n        </p-panel>\r\n        <div *ngIf=\"ds_kh_show\" class=\"ui-grid-row\">\r\n\r\n        <div *ngFor=\"let kh of ds_khach_hang \" class=\"ui-grid-row\">\r\n                <div  class=\"ui-grid-col-3\" style=\"text-align:center\">\r\n                   <a [routerLink]=\"['/admin/prestashop/edit']\" [queryParams]=\"{key:kh.id}\">\r\n                    <i class=\"fa fa-edit text-info\" style=\"cursor:pointer;float:left;margin-top:40px\"></i>\r\n                </a>\r\n\r\n                    \r\n                    <img style=\"width: 120px;\" src=\"https://www.roomsoom.com/images/testimonial-face/icon1.png\"></div>\r\n                <div class=\"ui-grid-col-9\">\r\n                    <div class=\"ui-grid ui-grid-responsive ui-fluid\">\r\n                        <div class=\"ui-grid-row\">\r\n                            <div style=\"text-align: left;\" class=\"ui-grid-col-2\">Họ tên: </div>\r\n                            <div class=\"ui-grid-col-10\">{{  kh.firstname  + ' ' + kh.lastname    }} </div>\r\n                        </div>\r\n                        <div  class=\"ui-grid-row\">\r\n                            <div style=\"text-align: left;\" class=\"ui-grid-col-2\">Emial: </div>\r\n                            <div  class=\"ui-grid-col-10\">{{kh.email}}</div>\r\n                        </div>\r\n                        <div  class=\"ui-grid-row\">\r\n                            <div style=\"text-align: left;\" class=\"ui-grid-col-2\">Ngày sinh: </div>\r\n                            <div class=\"ui-grid-col-10\">{{kh.birthday}}</div>\r\n                        </div>\r\n                        <div class=\"ui-grid-row\">\r\n                            <div style=\"text-align: left;\" class=\"ui-grid-col-2\">Ngày tham gia: </div>\r\n                            <div  class=\"ui-grid-col-10\">{{kh.date_add}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button pButton type=\"button\" icon=\"fa-list\" label=\"Ẩn \" (click)=\"ds_kh_show=!ds_kh_show\" class=\"ui-button-success\"></button>\r\n            </div>\r\n\r\n        <!-- <div class=\"content-section implementation\">\r\n                <p-dataScroller [value]=\"ds_khach_hang\" [rows]=\"2\" [inline]=\"true\" scrollHeight=\"500px\">\r\n                    <p-header>\r\n                        Scroll Down to to Load More\r\n                    </p-header>\r\n                    <ng-template let-kh pTemplate=\"item\">\r\n                        <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px;border-bottom:1px solid #D5D5D5;\">\r\n                            <div class=\"ui-grid-row\">\r\n                                 <div class=\"ui-grid-col-9\">\r\n                                    <div class=\"ui-grid ui-grid-responsive ui-fluid\">\r\n                                        <div class=\"ui-grid-row\">\r\n                                            <div class=\"ui-grid-col-2\">Họ tên : </div>\r\n                                            <div class=\"ui-grid-col-10\"> </div>\r\n                                        </div>\r\n                                        <div class=\"ui-grid-row\">\r\n                                            <div class=\"ui-grid-col-2\">Email : </div>\r\n                                            <div class=\"ui-grid-col-10\"></div>\r\n                                        </div>\r\n                                        <div class=\"ui-grid-row\">\r\n                                            <div class=\"ui-grid-col-2\">Ngày sinh : </div>\r\n                                            <div class=\"ui-grid-col-10\"></div>\r\n                                        </div>\r\n                                        <div class=\"ui-grid-row\">\r\n                                            <div class=\"ui-grid-col-2\">Ngày đăng ký : </div>\r\n                                            <div class=\"ui-grid-col-10\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </p-dataScroller>\r\n            </div> -->\r\n            \r\n\r\n    </div>\r\n\r\n    \r\n"

/***/ }),

/***/ "../../../../../src/app/admin/components/prestashop/main-customer/main-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainCustomerComponent = (function () {
    function MainCustomerComponent(http) {
        this.http = http;
        this.ds_kh_show = false;
        this.carts = [];
        this.sl_don_hang = 0;
        this.sl_khach_hang = 0;
        this.sl_san_pham = 0;
        this.ds_khach_hang = [];
        this.ds_san_pham = [];
    }
    MainCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgs = [];
        this.http.get('http://localhost:8087/api/danh-sach-don-hang').subscribe(function (data) {
            var obj = {};
            obj = data;
            _this.carts = obj.orders;
            _this.sl_don_hang = _this.carts.length;
            console.log(_this.carts);
        });
        this.http.get('http://localhost:8087/api/danh-sach-san-pham').subscribe(function (data) {
            var obj = {};
            obj = data;
            _this.ds_san_pham = obj.products;
            _this.sl_san_pham = _this.ds_san_pham.length;
            console.log(data);
        });
        this.http.get('http://localhost:8087/api/danh-sach-khach-hang').subscribe(function (data) {
            var obj = {};
            obj = data;
            // this.carts = obj.orders ;
            _this.ds_khach_hang = obj.customers;
            _this.sl_khach_hang = _this.ds_khach_hang.length;
            console.log(_this.ds_khach_hang.length);
            console.log(_this.ds_khach_hang);
        });
    };
    MainCustomerComponent.prototype.selectCar = function (carts) {
        this.msgs = [];
        var body = ' ';
        var details = [];
        details = carts.associations.order_rows;
        for (var i = 0; i < details.length; i++) {
            body += +'<tr>'
                + ' <td> ' + details[i].product_name + '</td>'
                + '<td> ' + details[i].product_price + '</td>'
                + '<td> ' + details[i].product_quantity + '</td>'
                + '</tr>';
        }
        var table = '<table style="width:100%">'
            + '<tr>'
            + ' <th>Tên sản phẩm  </th>'
            + '<th> Giá  </th> '
            + '<th> Số lương </th>'
            + '</tr>'
            + body
            + '</table>';
        this.msgs.push({ severity: 'info', summary: 'Thông tin đơn hàng ', detail: table });
    };
    MainCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/admin/components/prestashop/main-customer/main-customer.component.html"),
            styles: ["\n    .ui-grid-row {\n        text-align: center;\n    }\n    .ui-grid {\n        margin: 10px 0px;\n    }\n    .ui-grid-row > div {\n        padding: 4px 10px;\n    }\n"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], MainCustomerComponent);
    return MainCustomerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/components/prestashop/prestashop-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestashopRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prestashop_component__ = __webpack_require__("../../../../../src/app/admin/components/prestashop/prestashop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prestashop_main_customer_main_customer_component__ = __webpack_require__("../../../../../src/app/admin/components/prestashop/main-customer/main-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prestashop_edit_customer_edit_customer_component__ = __webpack_require__("../../../../../src/app/admin/components/prestashop/edit-customer/edit-customer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__prestashop_component__["a" /* PrestashopComponent */],
        children: [
            {
                path: 'edit',
                component: __WEBPACK_IMPORTED_MODULE_4__prestashop_edit_customer_edit_customer_component__["a" /* CustomerEditComponent */]
            },
            {
                path: 'main',
                component: __WEBPACK_IMPORTED_MODULE_3__prestashop_main_customer_main_customer_component__["a" /* MainCustomerComponent */]
            }
        ]
    }
];
var PrestashopRoutingModule = (function () {
    function PrestashopRoutingModule() {
    }
    PrestashopRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
        })
    ], PrestashopRoutingModule);
    return PrestashopRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/components/prestashop/prestashop.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/admin/components/prestashop/prestashop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestashopComponent; });
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

var PrestashopComponent = (function () {
    function PrestashopComponent() {
    }
    PrestashopComponent.prototype.ngOnInit = function () { };
    PrestashopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/admin/components/prestashop/prestashop.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PrestashopComponent);
    return PrestashopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/components/prestashop/prestashop.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestashopModule", function() { return PrestashopModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_datascroller_datascroller__ = __webpack_require__("../../../../../src/app/components/datascroller/datascroller.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_fieldset_fieldset__ = __webpack_require__("../../../../../src/app/components/fieldset/fieldset.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_carousel_carousel__ = __webpack_require__("../../../../../src/app/components/carousel/carousel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_inputtextarea_inputtextarea__ = __webpack_require__("../../../../../src/app/components/inputtextarea/inputtextarea.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dropdown_dropdown__ = __webpack_require__("../../../../../src/app/components/dropdown/dropdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_panel_panel__ = __webpack_require__("../../../../../src/app/components/panel/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_customer_edit_customer_component__ = __webpack_require__("../../../../../src/app/admin/components/prestashop/edit-customer/edit-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__prestashop_component__ = __webpack_require__("../../../../../src/app/admin/components/prestashop/prestashop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_customer_main_customer_component__ = __webpack_require__("../../../../../src/app/admin/components/prestashop/main-customer/main-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__prestashop_routing_module__ = __webpack_require__("../../../../../src/app/admin/components/prestashop/prestashop-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// edit-component.ts
var EDIT_CUSTOMER = [
    __WEBPACK_IMPORTED_MODULE_10__components_growl_growl__["a" /* GrowlModule */],
    __WEBPACK_IMPORTED_MODULE_9__components_panel_panel__["a" /* PanelModule */],
    __WEBPACK_IMPORTED_MODULE_8__components_dropdown_dropdown__["a" /* DropdownModule */],
    __WEBPACK_IMPORTED_MODULE_7__components_inputtext_inputtext__["a" /* InputTextModule */],
    __WEBPACK_IMPORTED_MODULE_6__components_inputtextarea_inputtextarea__["a" /* InputTextareaModule */],
    __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
    __WEBPACK_IMPORTED_MODULE_4__components_tabview_tabview__["a" /* TabViewModule */],
    __WEBPACK_IMPORTED_MODULE_3__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
];
var MAIN_CUSTOMER = [
    __WEBPACK_IMPORTED_MODULE_2__components_carousel_carousel__["a" /* CarouselModule */],
    __WEBPACK_IMPORTED_MODULE_1__components_fieldset_fieldset__["a" /* FieldsetModule */],
    __WEBPACK_IMPORTED_MODULE_0__components_datascroller_datascroller__["a" /* DataScrollerModule */]
];
var PrestashopModule = (function () {
    function PrestashopModule() {
    }
    PrestashopModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_17__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__prestashop_routing_module__["a" /* PrestashopRoutingModule */],
                EDIT_CUSTOMER,
                MAIN_CUSTOMER
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__main_customer_main_customer_component__["a" /* MainCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__prestashop_component__["a" /* PrestashopComponent */],
                __WEBPACK_IMPORTED_MODULE_13__edit_customer_edit_customer_component__["a" /* CustomerEditComponent */]
            ],
            providers: [],
        })
    ], PrestashopModule);
    return PrestashopModule;
}());



/***/ })

});
//# sourceMappingURL=prestashop.module.chunk.js.map