import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { AuthService } from '../../services/auth.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(storage, formBuilder, authService, route, googleplus) {
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.googleplus = googleplus;
        this.loginFrom = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    // logins(){
    //   if( this.loginFrom.controls['username'].value == 'admin' && this.loginFrom.controls['password'].value == 'admin123' ){
    //     this.route.navigate(['/tabs']);
    //   }else{
    //     alert("please enter correct details.")
    //   }
    //   if(this.username.value)
    //   this.authService.login(this.loginFrom,'').then((result) => {
    //     this.data = result;
    //     localStorage.setItem('token', this.data.access_token);
    //     this.route.navigate(['/tabs']);;
    //   }, (err) => {
    //     alert(err);
    //   });
    // }
    RegisterPage.prototype.login = function (form) {
        var _this = this;
        this.authService.login(this.loginFrom.controls['username'].value, this.loginFrom.controls['password'].value).subscribe(function (data) {
            _this.storage.getItem('token')
                .then(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        }, function (error) {
            console.log(error);
            alert(error.error.message);
        }, function () {
            _this.route.navigate(['/tabs']);
        });
    };
    RegisterPage.prototype.register = function () {
        this.route.navigate(['/signup']);
    };
    RegisterPage.prototype.googleLogin = function () {
        console.log("Reaching in google login");
        this.googleplus.login({
        // 'webClientId':'390829099063-h9sr0ltkudeg9sp454tv6h87rt0gcphp.apps.googleusercontent.com',
        // 'offline': true
        }).then(function (res) {
            // console.log("Id token is"+res.idToken)
            // firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
            // .then(suc => {alert("logged in")})
            // .catch(ns=> alert("not successed"))
        }).catch(function (err) { return console.log("error is " + err); });
    };
    RegisterPage.prototype.some = function () {
        console.log("reaching in log");
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NativeStorage, FormBuilder, AuthService, Router, GooglePlus])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map