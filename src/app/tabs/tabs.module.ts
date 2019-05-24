import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { MaterialModule } from '../material/material/material.module';
import {BottomSheetOverviewExampleSheet} from './tabs.page'

@NgModule({
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
export class TabsPageModule {}
