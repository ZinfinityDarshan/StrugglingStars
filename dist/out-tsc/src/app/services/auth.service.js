import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from './firebase.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
//import { Headers  } from '@angular/http';
//import 'rxjs/add/operator/map';
var AuthService = /** @class */ (function () {
    function AuthService(storage, firebaseService, afAuth, http) {
        this.storage = storage;
        this.firebaseService = firebaseService;
        this.afAuth = afAuth;
        this.http = http;
        this.apiUrl = 'https://acc009specback.herokuapp.com/';
        this.isLoggedIn = false;
    }
    // doLogin(value: User){
    //   return new Promise<any>((resolve, reject) => {
    //     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
    //     .then(
    //       res => resolve(res),
    //       err => reject(err))
    //   })
    // }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.apiUrl + 'users/signin?username=' + username + '&password=' + password, {}).pipe(tap(function (token) {
            _this.token = token.token;
            console.log(_this.token);
            _this.storage.setItem('token', _this.token)
                .then(function () {
                console.log('Token Stored');
            }, function (error) { return console.error('Error storing item', error); });
            _this.token = token;
            _this.isLoggedIn = true;
            return token;
        }));
    };
    AuthService.prototype.register = function (username, mobno, email, password) {
        return this.http.post(this.apiUrl + 'users/signup', { username: username, phoneno: mobno, email: email, password: password });
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [NativeStorage, FirebaseService, AngularFireAuth, HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map