import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddpostPage } from './addpost.page';
var routes = [
    {
        path: '',
        component: AddpostPage
    }
];
var AddpostPageModule = /** @class */ (function () {
    function AddpostPageModule() {
    }
    AddpostPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddpostPage]
        })
    ], AddpostPageModule);
    return AddpostPageModule;
}());
export { AddpostPageModule };
//# sourceMappingURL=addpost.module.js.map