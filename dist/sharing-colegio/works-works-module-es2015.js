(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["works-works-module"],{

/***/ "./src/app/shared/services/firestore.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/firestore.service.ts ***!
  \******************************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");




class FirestoreService {
    constructor(firestore) {
        this.item = firestore.collection('users')
            .doc('olaya.sofia@gmail.com')
            .valueChanges();
    }
    getData() {
        return this.item;
    }
    getWeeks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.weeks) {
                console.log('Before');
                this.weeks = yield this.item.weeks;
                console.log('After', this.weeks);
            }
            return this.weeks;
        });
    }
    getUser() {
        if (!this.user) {
            this.user = { name: this.item.name, lastname: this.item.lastname };
        }
        return this.user;
    }
    getWorks() {
        if (!this.works) {
            this.works = this.item.works;
        }
        return this.works;
    }
    getSubjects() {
        if (!this.subjects) {
            this.subjects = this.item.subjects;
        }
        return this.subjects;
    }
}
FirestoreService.ɵfac = function FirestoreService_Factory(t) { return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
FirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FirestoreService, factory: FirestoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/works/components/page/page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/works/components/page/page.component.ts ***!
  \*********************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/firestore.service */ "./src/app/shared/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-material-extensions/pages */ "./node_modules/@angular-material-extensions/pages/__ivy_ngcc__/fesm2015/angular-material-extensions-pages.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_card_trabajo_card_trabajo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/card-trabajo/card-trabajo.component */ "./src/app/shared/components/card-trabajo/card-trabajo.component.ts");











function PageComponent_mat_page_loader_35_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Muy Pronto! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Estamos trabajando en ello, gracias!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\uD83E\uDD81");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PageComponent_mat_page_loader_35_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card-trabajo", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const work_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("work", work_r6);
} }
function PageComponent_mat_page_loader_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-page-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-page-outlook", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-page-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PageComponent_mat_page_loader_35_div_6_Template, 12, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PageComponent_mat_page_loader_35_div_7_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", data_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r2.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.works.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r2.works);
} }
function PageComponent_mat_card_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Muy Pronto! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Continuar\u00E1... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PageComponent {
    constructor(sanitizer, firestore, router, route) {
        this.sanitizer = sanitizer;
        this.firestore = firestore;
        this.router = router;
        this.route = route;
        this.cols = 1;
        this.showBySubject = false;
    }
    ngOnInit() {
        this.firestore.getData().subscribe(data => {
            this.works = [...data.works];
            this.weeks = data.weeks;
            this.defaultAvatarImg = data.avatarImg ? data.avatarImg : 'https://api.adorable.io/avatars/90/ubicapo.png';
            const avatarImg = this.sanitizer.bypassSecurityTrustResourceUrl(this.defaultAvatarImg);
            this.user = { name: data.name, lastname: data.lastname, avatarImg };
            this.subjects = [...data.subjects];
            console.log('SUBJECTS: ', this.subjects, this.showBySubject);
            const byWeek = data.weeks.map(element => {
                const week = element.id;
                const dataWeeks = this.getWorksByWeek(week);
                return { key: element.text, works: dataWeeks };
            });
            console.log('BY WEEK: ', byWeek, this.showBySubject);
            const bySubject = this.subjects.map(element => {
                const subject = element;
                const dataSubject = this.getWorksBySubject(subject);
                return { key: subject, works: dataSubject };
            });
            console.log('BY WEEK: ', bySubject, this.showBySubject);
            this.toShow = { byWeek, bySubject };
            console.log(this.item, '.asda.asdasdadsasdasd');
        });
    }
    getFilteredSections() {
        if (this.showBySubject) {
            return this.subjects;
        }
        return this.weeks.map(obj => obj.text);
    }
    getFilteredWorks(index) {
        if (this.showBySubject) {
            return this.getWorksBySubject(this.subjects[index]);
        }
        return this.getWorksByWeek(this.weeks[index].id);
    }
    getWeekTitle(id) {
        return this.weeks.filter(week => week.id === id)[0].text;
    }
    goToPage(id) {
        this.router.navigate([id], { relativeTo: this.route });
    }
    getWorksBySubject(subject) {
        return this.works.filter(work => work.subject === subject).map(item => {
            const cardWork = { title: this.getWeekTitle(item.week), img: item.img, done: item.done,
                subtitle: item.title, description: item.subject, fileUrl: item.fileUrl ? item.fileUrl : '#', avatarImg: this.defaultAvatarImg };
            return cardWork;
        });
    }
    getWorksByWeek(week) {
        console.log(this.works);
        return this.works.filter(work => work.week === week).map(item => {
            const cardWork = { title: item.subject, img: item.img, done: item.done,
                subtitle: item.title, description: item.subject, fileUrl: item.fileUrl ? item.fileUrl : '#', avatarImg: this.defaultAvatarImg };
            return cardWork;
        });
    }
    getWorksFromWeek(id) {
        return this.works.filter(obj => obj.week === id);
    }
    onLastPageReached() {
        console.log('Ultima pagina alcanzada');
    }
    onPageChanges(event) {
        console.log('Cambio', event);
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["app-page"]], decls: 45, vars: 5, consts: [[1, "getting-started"], [1, "fab", 2, "position", "fixed", "top", "10px", "right", "15px", "z-index", "100", "color", "white"], [2, "color", "white", "font-size", "larger"], ["name", "filter", "aria-label", "Font Style", 3, "value", "change"], [3, "value"], ["title", "Desarrollo - Fechas", 3, "pageChanged", "done"], ["title", "Introducci\u00F3n"], [1, "mat-app-background", "basic-container", "dashboard-card-content"], [1, "card-container"], [1, "dashboard-card"], [1, "card"], [2, "flex", "1 1 auto", "font-size", "100px"], [2, "text-align", "left"], ["mat-flat-button", "", "color", "accent"], ["disabled", "true", "mat-stroked-button", "", "color", "basic"], [2, "display", "flex", "justify-content", "center"], ["src", "./assets/img/study1.jpeg", 1, "image"], [4, "ngFor", "ngForOf"], ["title", "Pr\u00F3ximamente m\u00E1s contenido..."], ["class", "card", 4, "ngFor", "ngForOf"], [3, "title"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "dashboard-card-content"], [3, "work"], ["src", "./assets/img/study2.jpeg", 1, "image"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filtrado por: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PageComponent_Template_mat_button_toggle_group_change_4_listener() { return ctx.showBySubject = !ctx.showBySubject; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Materias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Semanas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-pages", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function PageComponent_Template_mat_pages_pageChanged_9_listener($event) { return ctx.onPageChanges($event); })("done", function PageComponent_Template_mat_pages_done_9_listener() { return ctx.onLastPageReached(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-page-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-page-outlook", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-page-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Mis Deberes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\uD83E\uDD81");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Click aqu\u00ED...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Los deberes con este boton han sido completados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pendiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Este boton indica que aun no se han desarrollado esos deberes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-content", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PageComponent_mat_page_loader_35_Template, 8, 4, "mat-page-loader", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-page-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-page-outlook", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-page-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Conclusi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PageComponent_mat_card_44_Template, 7, 0, "mat-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.showBySubject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.showBySubject ? ctx.toShow.byWeek : ctx.toShow.bySubject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getWorksFromWeek(ctx.weeks[2].id));
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"], _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_5__["MatPagesComponent"], _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_5__["MatPageLoaderComponent"], _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_5__["MatPageOutlookComponent"], _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_5__["MatPageContentComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _shared_components_card_trabajo_card_trabajo_component__WEBPACK_IMPORTED_MODULE_9__["CardTrabajoComponent"]], styles: ["@charset \"UTF-8\";\n.grid-container[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  padding-left: 100px;\n}\n.grid-container[_ngcontent-%COMP%]   .mat-tab-body-content[_ngcontent-%COMP%] {\n  background-color: red;\n  margin-left: 50px;\n}\n.grid-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%] {\n  padding-left: 500px;\n}\n.dashboard-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 1rem;\n}\n.work-mat-card[_ngcontent-%COMP%] {\n  margin: 2rem;\n  min-width: 300px;\n  max-width: 400px;\n}\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: 66.9172932331%;\n}\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex: 1 1 auto;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n.card-page[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px;\n  max-width: 400px;\n}\nngx-material-pages[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nngx-material-pages[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\nngx-material-pages[_ngcontent-%COMP%]   .comment-container[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 350px;\n}\n.mat-tab-body-wrapper[_ngcontent-%COMP%]\u00A0 {\n  max-width: 450px;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  justify-content: center;\n  align-items: center;\n}\n.card[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 3rem;\n}\nmat-page-content[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\nmat-tab-body[_ngcontent-%COMP%]\u00A0 {\n  min-height: 470px;\n}\n.mat-tab-body-content[_ngcontent-%COMP%] {\n  min-height: 600px !important;\n}\nmat-sidenav-content[_ngcontent-%COMP%] {\n  min-height: 600px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3MvY29tcG9uZW50cy9wYWdlL3BhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbW9sYXlhL0ZSRUVMQU5DRVIvU09GWS9zaGFyaW5nLWNvbGVnaW8vc3JjL2FwcC93b3Jrcy9jb21wb25lbnRzL3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FERUY7QUNERTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QURHSjtBQ0RFO0VBQ0UsbUJBQUE7QURHSjtBQ0dBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEQUY7QUNHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEQUY7QUNHQTtFQUNFLGdDQUFBO0FEQUY7QUNHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QURBRjtBQ0dBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBREFGO0FDR0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEQUY7QUNJRTtFQUNFLGFBQUE7QURESjtBQ0lFO0VBQ0UsZUFBQTtBREZKO0FDS0U7RUFDRSxZQUFBO0FESEo7QUNPQTtFQUFLLGVBQUE7RUFBZ0IsaUJBQUE7QURGckI7QUNJQTtFQUNFLGdCQUFBO0FEREY7QUNJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBREZGO0FDS0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QURGRjtBQ0tBO0VBQ0UsaUJBQUE7QURGRjtBQ0tBO0VBQ0UsaUJBQUE7QURGRjtBQ0lBO0VBQ0UsNEJBQUE7QURERjtBQ0lBO0VBQ0UsNEJBQUE7QURERiIsImZpbGUiOiJzcmMvYXBwL3dvcmtzL2NvbXBvbmVudHMvcGFnZS9wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG59XG4uZ3JpZC1jb250YWluZXIgLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5ncmlkLWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiA1MDBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDFyZW07XG59XG5cbi53b3JrLW1hdC1jYXJkIHtcbiAgbWFyZ2luOiAycmVtO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4ubWF0LWFwcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogNjYuOTE3MjkzMjMzMSU7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIGF1dG87XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNhcmQtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxubmd4LW1hdGVyaWFsLXBhZ2VzIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5uZ3gtbWF0ZXJpYWwtcGFnZXMgdmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5uZ3gtbWF0ZXJpYWwtcGFnZXMgLmNvbW1lbnQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xufVxuXG4ubWF0LXRhYi1ib2R5LXdyYXBwZXLCoCB7XG4gIG1heC13aWR0aDogNDUwcHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDNyZW07XG59XG5cbm1hdC1wYWdlLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbn1cblxubWF0LXRhYi1ib2R5wqAge1xuICBtaW4taGVpZ2h0OiA0NzBweDtcbn1cblxuLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgbWluLWhlaWdodDogNjAwcHggIWltcG9ydGFudDtcbn1cblxubWF0LXNpZGVuYXYtY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XG59IiwiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIC5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB9XG4gIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogNTAwcHg7XG4gIH1cbn1cblxuXG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG4ud29yay1tYXQtY2FyZCB7XG4gIG1hcmdpbjogMnJlbTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLm1hdC1hcHAtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNhdHVyYXRpb24oJGNvbG9yOiAjOTBlOWMwKTtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY2FyZC1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG5uZ3gtbWF0ZXJpYWwtcGFnZXMge1xuICBidXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICB2aWRlbyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbW1lbnQtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cbn1cblxuaW1nIHttYXgtd2lkdGg6MTAwJTsgbWF4LWhlaWdodDogMzUwcHg7fVxuXG4ubWF0LXRhYi1ib2R5LXdyYXBwZXLCoHtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAzcmVtO1xufVxuXG5tYXQtcGFnZS1jb250ZW50IHtcbiAgbWluLWhlaWdodDogNjAwcHg7XG59XG5cbm1hdC10YWItYm9kecKge1xuICBtaW4taGVpZ2h0OiA0NzBweDtcbn1cbi5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page',
                templateUrl: './page.component.html',
                styleUrls: ['./page.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }, { type: _shared_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/works/works-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/works/works-routing.module.ts ***!
  \***********************************************/
/*! exports provided: WorksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksRoutingModule", function() { return WorksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/works/components/page/page.component.ts");





const routes = [
    { path: '', component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] }
];
class WorksRoutingModule {
}
WorksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorksRoutingModule });
WorksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorksRoutingModule_Factory(t) { return new (t || WorksRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/works/works.module.ts":
/*!***************************************!*\
  !*** ./src/app/works/works.module.ts ***!
  \***************************************/
/*! exports provided: WorksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksModule", function() { return WorksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _works_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./works-routing.module */ "./src/app/works/works-routing.module.ts");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/works/components/page/page.component.ts");
/* harmony import */ var _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-material-extensions/pages */ "./node_modules/@angular-material-extensions/pages/__ivy_ngcc__/fesm2015/angular-material-extensions-pages.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








class WorksModule {
}
WorksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorksModule });
WorksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorksModule_Factory(t) { return new (t || WorksModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _works_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorksRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_4__["MatPagesModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorksModule, { declarations: [_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _works_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorksRoutingModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_4__["MatPagesModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _works_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorksRoutingModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_4__["MatPagesModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=works-works-module-es2015.js.map