import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { MaterialModule } from "../../material/material/material.module";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';




const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [RegisterPage],
  providers: [
    GooglePlus,
    AuthService,
    AngularFireAuth
  ]
})
export class RegisterPageModule {}
