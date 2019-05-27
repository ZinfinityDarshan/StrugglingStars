import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AccountPage = /** @class */ (function () {
    function AccountPage() {
        this.showimage = true;
        this.showvideo = false;
        this.showdocument = false;
    }
    AccountPage.prototype.ngOnInit = function () {
    };
    AccountPage.prototype.enable = function (name) {
        if (name === 'image') {
            this.showimage = true;
            this.showdocument = false;
            this.showvideo = false;
        }
        else if (name === 'video') {
            this.showimage = false;
            this.showdocument = false;
            this.showvideo = true;
        }
        else if (name === 'document') {
            this.showimage = false;
            this.showdocument = true;
            this.showvideo = false;
        }
    };
    AccountPage = tslib_1.__decorate([
        Component({
            selector: 'app-account',
            templateUrl: './account.page.html',
            styleUrls: ['./account.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AccountPage);
    return AccountPage;
}());
export { AccountPage };
//# sourceMappingURL=account.page.js.map