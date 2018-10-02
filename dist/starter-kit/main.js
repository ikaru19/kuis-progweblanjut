(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Magic Happen';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./index.html */ "./src/app/index.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_server_server_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/server/server.component */ "./src/app/server/server.component.ts");
/* harmony import */ var _app_servers_servers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _tugas_tugas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tugas/tugas.component */ "./src/app/tugas/tugas.component.ts");
/* harmony import */ var _tugas3_tugas3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tugas3/tugas3.component */ "./src/app/tugas3/tugas3.component.ts");
/* harmony import */ var _week5_week5_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./week5/week5.component */ "./src/app/week5/week5.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./container/container.component */ "./src/app/container/container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_server_server_component__WEBPACK_IMPORTED_MODULE_4__["ServerComponent"],
                _app_servers_servers_component__WEBPACK_IMPORTED_MODULE_5__["ServersComponent"],
                _tugas_tugas_component__WEBPACK_IMPORTED_MODULE_6__["TugasComponent"],
                _tugas3_tugas3_component__WEBPACK_IMPORTED_MODULE_7__["Tugas3Component"],
                _week5_week5_component__WEBPACK_IMPORTED_MODULE_8__["Week5Component"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _container_container_component__WEBPACK_IMPORTED_MODULE_10__["ContainerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/container/container.component.css":
/*!***************************************************!*\
  !*** ./src/app/container/container.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/container/container.component.html":
/*!****************************************************!*\
  !*** ./src/app/container/container.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n          <h2 class=\"mt-3\">Form Data Mahasiswa</h2>\n          <hr>\n          <label for=\"nim\" class=\"\">NIM</label> \n          <input type=\"text\" name=\"nim\" id=\"nim\" class=\"form-control\" pattern=\"\\d{1,7}\" title=\"Masukkan 7 digit nim anda\" [(ngModel)]=\"nim\">\n          <br>\n          <label for=\"nama\" class=\"\">Nama</label> \n          <input type=\"text\" name=\"nama\" id=\"nama\" class=\"form-control\" pattern=\"\\s\" [(ngModel)]=\"nama\">\n          <br>\n          <label for=\"kelas\" class=\"\">kelas</label> \n          <input type=\"text\" name=\"kelas\" id=\"kelas\" class=\"form-control\" [(ngModel)]=\"kelas\">\n          <br>\n          <button class=\"btn btn-block btn-primary \" (click)=\"tambahmhs()\">Tambah Mahasiswa</button>\n          <br>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n        <h2 class=\"mt-3\">Data Mahasiswa</h2>\n        <hr>\n        <div class=\"card mb-3\" *ngFor=\"let mhs of daftarmhs\">\n            <h3 class=\"card-header\">{{mhs.nama}}</h3>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{mhs.nim}}</h5>\n              <p class=\"card-text\">{{mhs.kelas}}</p>\n             \n            </div>\n        </div>\n      \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/container/container.component.ts":
/*!**************************************************!*\
  !*** ./src/app/container/container.component.ts ***!
  \**************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_mahasiswa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/mahasiswa */ "./src/app/shared/mahasiswa.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
        this.nim = '';
        this.nama = '';
        this.kelas = '';
        this.daftarmhs = [];
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent.prototype.tambahmhs = function () {
        this.mhs = new _shared_mahasiswa__WEBPACK_IMPORTED_MODULE_1__["Mahasiswa"](this.nim, this.nama, this.kelas);
        this.daftarmhs.push(this.mhs);
        this.nim = '';
        this.nama = '';
        this.kelas = '';
    };
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.css */ "./src/app/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/index.html":
/*!****************************!*\
  !*** ./src/app/index.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-container></app-container>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{background-color: white}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" [ngStyle]=\"{'color': 'white'}\">Navbar</a>\n  <button aria-controls=\"collapsibleNavId\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler hidden-lg-up\" data-target=\"#collapsibleNavId\" data-toggle=\"collapse\" type=\"button\">\n    <span _ngcontent-c1=\"\" class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n      <ul  class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n        <li  class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Master Data</a>\n        </li>\n      </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/server/server.component.html":
/*!**********************************************!*\
  !*** ./src/app/server/server.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p \n    [ngStyle]=\"{backgroundColor: getColor()}\"\n    [ngClass]=\"{online: serverStatus === 'online' }\">\n    Server with ID {{ servername }} is {{ serverStatus }}</p> -->\n"

/***/ }),

/***/ "./src/app/server/server.component.ts":
/*!********************************************!*\
  !*** ./src/app/server/server.component.ts ***!
  \********************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        this.serverID = 10;
        this.serverStatus = 'online';
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    ServerComponent.prototype.getServerStatus = function () {
        return this.serverStatus;
    };
    ServerComponent.prototype.getColor = function () {
        return this.serverStatus === 'online' ? 'green' : 'red';
    };
    ServerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server',
            template: __webpack_require__(/*! ./server.component.html */ "./src/app/server/server.component.html"),
            // styleUrls: ['./server.component.css']
            styles: ["\n        .online {\n            color:  white;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./src/app/servers/servers.component.css":
/*!***********************************************!*\
  !*** ./src/app/servers/servers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/servers/servers.component.html":
/*!************************************************!*\
  !*** ./src/app/servers/servers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>Server Name</label>\n<!-- <input \n  type=\"text\"\n  class=\"form-control\"\n  (input)=\"onUpdateServerName($event)\"> -->\n<input \n  type=\"text\"\n  class=\"form-control\"\n  [(ngModel)]=\"serverName\">\n<p>{{ serverName }}</p>\n<button \n  class=\"btn btn-primary\" \n  [disabled]=\"!allowNewServer\"\n  (click)=\"onCreationStatus()\">Add Server</button>\n<!-- <p>{{ serverCreationStatus }}</p> -->\n<!-- <p *ngIf=\"serverCreated; else noServer\">Server telah dibuat, nama server adalah {{ serverName }}</p>\n<ng-template #noServer>\n  <p>No server was created</p>\n</ng-template> -->\n<p *ngIf=\"serverCreated\">Server telah dibuat, nama server adalah {{ serverName }}</p>\n<!-- <app-server></app-server> -->\n<app-server *ngFor=\"let server of servers\"></app-server>"

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/servers/servers.component.ts ***!
  \**********************************************/
/*! exports provided: ServersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersComponent", function() { return ServersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServersComponent = /** @class */ (function () {
    function ServersComponent() {
        var _this = this;
        this.allowNewServer = false;
        this.serverCreationStatus = 'Tidak ada server baru yang telah dibuat!';
        this.serverName = 'TestServer';
        this.serverCreated = false;
        this.servers = ['TestServer', 'TestServer 2'];
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 2000);
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    ServersComponent.prototype.onCreationStatus = function () {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server telah dibuat!';
    };
    ServersComponent.prototype.onUpdateServerName = function (event) {
        this.serverName = event.target.value;
    };
    ServersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servers',
            template: __webpack_require__(/*! ./servers.component.html */ "./src/app/servers/servers.component.html"),
            styles: [__webpack_require__(/*! ./servers.component.css */ "./src/app/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "./src/app/shared/mahasiswa.ts":
/*!*************************************!*\
  !*** ./src/app/shared/mahasiswa.ts ***!
  \*************************************/
/*! exports provided: Mahasiswa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mahasiswa", function() { return Mahasiswa; });
var Mahasiswa = /** @class */ (function () {
    function Mahasiswa(nim, nama, kelas) {
        this.nim = nim;
        this.nama = nama;
        this.kelas = kelas;
    }
    return Mahasiswa;
}());



/***/ }),

/***/ "./src/app/tugas/tugas.component.css":
/*!*******************************************!*\
  !*** ./src/app/tugas/tugas.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tugas/tugas.component.html":
/*!********************************************!*\
  !*** ./src/app/tugas/tugas.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>Server Name</label>\n<!-- <input \n  type=\"text\"\n  class=\"form-control\"\n  (input)=\"onUpdateServerName($event)\"> -->\n<input \n  type=\"text\"\n  class=\"form-control\"\n  [(ngModel)]=\"username\"\n  (ngModelChange)=\"checking()\"\n  >\n<br>\n<button \n  class=\"btn btn-primary mb-3\" \n  [disabled]=\"username===''\"\n  (click)=\"onCreationStatus()\">Add Username</button>\n\n\n  \n<p>username : {{ getUsername() }}</p>\n\n"

/***/ }),

/***/ "./src/app/tugas/tugas.component.ts":
/*!******************************************!*\
  !*** ./src/app/tugas/tugas.component.ts ***!
  \******************************************/
/*! exports provided: TugasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TugasComponent", function() { return TugasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TugasComponent = /** @class */ (function () {
    function TugasComponent() {
        var _this = this;
        this.allowNewServer = true;
        this.serverCreationStatus = 'Tidak ada server baru yang telah dibuat!';
        this.username = '';
        this.usernameprint = '';
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 2000);
    }
    TugasComponent.prototype.ngOnInit = function () {
    };
    TugasComponent.prototype.onCreationStatus = function () {
        if (this.username != '') {
            this.allowNewServer = false;
            this.usernameprint = this.username;
            this.username = '';
        }
    };
    TugasComponent.prototype.getUsername = function () {
        return this.usernameprint;
    };
    TugasComponent.prototype.onUpdateServerName = function (event) {
        if (this.username != ' ') {
            this.username = event.target.value;
        }
    };
    TugasComponent.prototype.checking = function () {
        if (this.username != '') {
            this.allowNewServer = true;
        }
        else {
            this.allowNewServer = false;
        }
    };
    TugasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tugas',
            template: __webpack_require__(/*! ./tugas.component.html */ "./src/app/tugas/tugas.component.html"),
            styles: [__webpack_require__(/*! ./tugas.component.css */ "./src/app/tugas/tugas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TugasComponent);
    return TugasComponent;
}());



/***/ }),

/***/ "./src/app/tugas3/tugas3.component.css":
/*!*********************************************!*\
  !*** ./src/app/tugas3/tugas3.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.online {\n    color:  white;\n}\n"

/***/ }),

/***/ "./src/app/tugas3/tugas3.component.html":
/*!**********************************************!*\
  !*** ./src/app/tugas3/tugas3.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button \n  class=\"btn btn-primary\" \n  (click)=\"CreateText()\">Tampilkan Detail</button>\n  <p  *ngIf=\"genap\">\n  <!-- [ngStyle]=\"{'background-color' : i+2 > 5 ? 'blue' : 'white'}\"\n  [ngClass]=\"{online: i+2 > 5 }\" -->\n  {{textprint}} </p>\n\n  <ng-container *ngFor=\"let text of texts; let i=index\" >\n      <p \n  [ngStyle]=\"{'background-color' : i+2 > 5 ? 'blue' : 'white'}\"\n  [ngClass]=\"{online: i+2 > 5 }\">\n  {{text[1]}} </p>\n  \n  \n  </ng-container>\n\n "

/***/ }),

/***/ "./src/app/tugas3/tugas3.component.ts":
/*!********************************************!*\
  !*** ./src/app/tugas3/tugas3.component.ts ***!
  \********************************************/
/*! exports provided: Tugas3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tugas3Component", function() { return Tugas3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tugas3Component = /** @class */ (function () {
    function Tugas3Component() {
        this.textprint = "POLITEKNIK NEGERI MALANG";
        this.texts = [];
        this.counter = 0;
        this.genap = false;
    }
    Tugas3Component.prototype.ngOnInit = function () {
    };
    Tugas3Component.prototype.CreateText = function () {
        var perclick = new Array();
        perclick[0] = this.textprint;
        this.counter++;
        perclick[1] = this.counter;
        this.texts.push(perclick);
        if (this.texts.length % 2 == 0) {
            this.genap = true;
        }
        else {
            this.genap = false;
        }
        console.log(this.counter);
        console.log(this.textprint);
    };
    Tugas3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tugas3',
            template: __webpack_require__(/*! ./tugas3.component.html */ "./src/app/tugas3/tugas3.component.html"),
            styles: [__webpack_require__(/*! ./tugas3.component.css */ "./src/app/tugas3/tugas3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Tugas3Component);
    return Tugas3Component;
}());



/***/ }),

/***/ "./src/app/week5/week5.component.css":
/*!*******************************************!*\
  !*** ./src/app/week5/week5.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/week5/week5.component.html":
/*!********************************************!*\
  !*** ./src/app/week5/week5.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label for=\"nim\" class=\"\">NIM</label> \n        <input type=\"text\" name=\"nim\" id=\"nim\" class=\"form-control\" [(ngModel)]=\"nim\">\n        <br>\n        <label for=\"nama\" class=\"\">Nama</label> \n        <input type=\"text\" name=\"nama\" id=\"nama\" class=\"form-control\" [(ngModel)]=\"nama\">\n        <br>\n        <label for=\"alamat\" class=\"\">Alamat</label>\n        <textarea name=\"alamat\" id=\"alamat\" class=\"form-control\" cols=\"30\" rows=\"10\" [(ngModel)]=\"alamat\"></textarea>\n        <button class=\"btn btn-primary mt-4\" (click)=\"tambahmhs()\">Tambah Mahasiswa</button>\n      </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n      <div class=\"col-md-12\" *ngFor=\"let mhs of daftarmhs\">\n        <hr>  \n          <h3>{{mhs.nama}}</h3>\n          <h4>{{mhs.nim}}</h4>\n          <p>{{mhs.alamat}}</p>\n        <hr>    \n      </div>\n  </div>\n \n</div>"

/***/ }),

/***/ "./src/app/week5/week5.component.ts":
/*!******************************************!*\
  !*** ./src/app/week5/week5.component.ts ***!
  \******************************************/
/*! exports provided: Week5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Week5Component", function() { return Week5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_mahasiswa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/mahasiswa */ "./src/app/shared/mahasiswa.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Week5Component = /** @class */ (function () {
    function Week5Component() {
        this.nim = '';
        this.nama = '';
        this.alamat = '';
        this.daftarmhs = [];
    }
    Week5Component.prototype.ngOnInit = function () {
    };
    Week5Component.prototype.tambahmhs = function () {
        this.mhs = new _shared_mahasiswa__WEBPACK_IMPORTED_MODULE_1__["Mahasiswa"](this.nim, this.nama, this.alamat);
        this.daftarmhs.push(this.mhs);
        this.nim = '';
        this.nama = '';
        this.alamat = '';
    };
    Week5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-week5',
            template: __webpack_require__(/*! ./week5.component.html */ "./src/app/week5/week5.component.html"),
            styles: [__webpack_require__(/*! ./week5.component.css */ "./src/app/week5/week5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Week5Component);
    return Week5Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/ikaru/Data/College/Part 3/progweblanjut/starter-kit/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map