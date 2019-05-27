import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Validators, FormBuilder } from '@angular/forms';
var SignupPage = /** @class */ (function () {
    function SignupPage(authService, navCtrl, formBuilder) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.regiFrom = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', Validators.required],
            mobno: ['', Validators.required]
        });
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.register = function (form) {
        var _this = this;
        this.authService.register(this.regiFrom.controls['username'].value, this.regiFrom.controls['password'].value, this.regiFrom.controls['email'].value, this.regiFrom.controls['mobno'].value).subscribe(function (data) {
            _this.navCtrl.navigateRoot('/register');
        }, function (error) {
            console.log(error);
        }, function () {
        });
    };
    SignupPage = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.page.html',
            styleUrls: ['./signup.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            NavController, FormBuilder])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.page.js.map