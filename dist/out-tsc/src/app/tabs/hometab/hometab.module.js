import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HometabPage } from './hometab.page';
var routes = [
    {
        path: '',
        component: HometabPage
    }
];
var HometabPageModule = /** @class */ (function () {
    function HometabPageModule() {
    }
    HometabPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HometabPage]
        })
    ], HometabPageModule);
    return HometabPageModule;
}());
export { HometabPageModule };
//# sourceMappingURL=hometab.module.js.map