import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from './firebase.service';
import { User } from '../entity/user';
import { HttpClientModule, HttpClient,HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
//import { Headers  } from '@angular/http';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
   apiUrl = 'https://acc009specback.herokuapp.com/';
   isLoggedIn = false;
   token:any;

  constructor(private storage: NativeStorage,private firebaseService: FirebaseService,public afAuth: AngularFireAuth,private http: HttpClient){


  }

  // doLogin(value: User){
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
  //     .then(
  //       res => resolve(res),
  //       err => reject(err))
  //   })
  // }

  login(username: String, password: String) {
    return this.http.post(this.apiUrl + 'users/signin?username='+username+'&password='+ password,{}
    ).pipe(
      tap((token:any) => {
        this.token = token.token
        console.log(this.token);
        localStorage.setItem('token', this.token),
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  register(username: String, mobno: String, email: String, password: String) {
    return this.http.post(this.apiUrl + 'users/signup',
      {username: username, phoneno: mobno, email: email, password: password}
    )
  }


 
  
}
