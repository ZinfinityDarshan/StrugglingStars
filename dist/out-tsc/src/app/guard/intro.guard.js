import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var IntroGuard = /** @class */ (function () {
    function IntroGuard(rout) {
        this.rout = rout;
    }
    IntroGuard.prototype.canActivate = function () {
        if (localStorage.getItem('intro') === 'true') {
            this.rout.navigate(['register']);
            return false;
        }
        return true;
    };
    IntroGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], IntroGuard);
    return IntroGuard;
}());
export { IntroGuard };
//# sourceMappingURL=intro.guard.js.map