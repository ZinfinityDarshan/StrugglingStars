import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TrendingPage } from './trending.page';
import { MaterialModule } from 'src/app/material/material/material.module';
var routes = [
    {
        path: '',
        component: TrendingPage
    }
];
var TrendingPageModule = /** @class */ (function () {
    function TrendingPageModule() {
    }
    TrendingPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                MaterialModule
            ],
            declarations: [TrendingPage]
        })
    ], TrendingPageModule);
    return TrendingPageModule;
}());
export { TrendingPageModule };
//# sourceMappingURL=trending.module.js.map