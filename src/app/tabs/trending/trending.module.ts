import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrendingPage } from './trending.page';
import { MaterialModule } from 'src/app/material/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: TrendingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [TrendingPage]
})
export class TrendingPageModule {}
