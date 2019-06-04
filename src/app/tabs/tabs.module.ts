import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { MaterialModule } from '../material/material/material.module';
import {BottomSheetOverviewExampleSheet} from './tabs.page';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { File } from '@ionic-native/file/ngx';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    MaterialModule,
    RouterModule
  ],
  providers:[
  ImagePicker,
  PhotoLibrary,
  Base64,
  File,
  ],
  declarations: [TabsPage, BottomSheetOverviewExampleSheet],
  entryComponents: [BottomSheetOverviewExampleSheet]
})
export class TabsPageModule {}
