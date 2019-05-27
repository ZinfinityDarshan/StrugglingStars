import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ImageselectorPage } from './imageselector.page';
var routes = [
    {
        path: '',
        component: ImageselectorPage
    }
];
var ImageselectorPageModule = /** @class */ (function () {
    function ImageselectorPageModule() {
    }
    ImageselectorPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ImageselectorPage]
        })
    ], ImageselectorPageModule);
    return ImageselectorPageModule;
}());
export { ImageselectorPageModule };
//# sourceMappingURL=imageselector.module.js.map