import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var IntroPage = /** @class */ (function () {
    function IntroPage(router) {
        this.router = router;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    IntroPage.prototype.ngOnInit = function () {
    };
    IntroPage.prototype.login = function () {
        localStorage.setItem('intro', 'true');
        this.router.navigate(['register']);
    };
    IntroPage = tslib_1.__decorate([
        Component({
            selector: 'app-intro',
            templateUrl: './intro.page.html',
            styleUrls: ['./intro.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], IntroPage);
    return IntroPage;
}());
export { IntroPage };
//# sourceMappingURL=intro.page.js.map