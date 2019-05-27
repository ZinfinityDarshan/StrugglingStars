import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './register.page';
import { MaterialModule } from "../../material/material/material.module";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
var routes = [
    {
        path: '',
        component: RegisterPage
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib_1.__decorate([
        NgModule({
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
    ], RegisterPageModule);
    return RegisterPageModule;
}());
export { RegisterPageModule };
//# sourceMappingURL=register.module.js.map