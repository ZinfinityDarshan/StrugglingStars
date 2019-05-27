import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from "../../material/material/material.module";
import { SignupPage } from './signup.page';
var routes = [
    {
        path: '',
        component: SignupPage
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                MaterialModule
            ],
            declarations: [SignupPage]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());
export { SignupPageModule };
//# sourceMappingURL=signup.module.js.map