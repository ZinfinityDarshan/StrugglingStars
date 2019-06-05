import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MaterialModule } from 'src/app/material/material/material.module';

import { ShowPostPage } from './show-post.page';


const routes: Routes = [
  {
    path: '',
    component: ShowPostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowPostPage]
})
export class ShowPostPageModule {}
