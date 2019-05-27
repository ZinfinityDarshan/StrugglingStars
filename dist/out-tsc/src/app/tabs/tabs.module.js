import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';
import { MaterialModule } from '../material/material/material.module';
import { BottomSheetOverviewExampleSheet } from './tabs.page';
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                TabsPageRoutingModule,
                MaterialModule
            ],
            declarations: [TabsPage, BottomSheetOverviewExampleSheet],
            entryComponents: [BottomSheetOverviewExampleSheet]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());
export { TabsPageModule };
//# sourceMappingURL=tabs.module.js.map