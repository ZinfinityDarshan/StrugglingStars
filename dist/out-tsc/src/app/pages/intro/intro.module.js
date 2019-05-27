import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IntroPage } from './intro.page';
import { MaterialModule } from "./../../material/material/material.module";
var routes = [
    {
        path: '',
        component: IntroPage
    }
];
var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                MaterialModule
            ],
            declarations: [IntroPage]
        })
    ], IntroPageModule);
    return IntroPageModule;
}());
export { IntroPageModule };
//# sourceMappingURL=intro.module.js.map