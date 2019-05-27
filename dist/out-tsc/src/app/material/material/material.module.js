import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatChipsModule, MatBottomSheetModule, MatListModule, MatDividerModule } from '@angular/material';
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                MatButtonModule, MatInputModule, MatFormFieldModule, MatChipsModule, MatBottomSheetModule,
                MatListModule, MatDividerModule
            ],
            exports: [
                MatInputModule, MatButtonModule, MatFormFieldModule, MatChipsModule, MatBottomSheetModule,
                MatListModule, MatDividerModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
export { MaterialModule };
//# sourceMappingURL=material.module.js.map