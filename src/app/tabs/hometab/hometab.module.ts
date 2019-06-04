import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HometabPage } from './hometab.page';
import { MaterialModule } from 'src/app/material/material/material.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: HometabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HometabPage]
})
export class HometabPageModule {}
