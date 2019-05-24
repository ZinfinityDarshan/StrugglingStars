import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public route: Router, public googleplus: GooglePlus) { }

  ngOnInit() {
  }

  login(){
    this.route.navigate(['/tabs']);
  }

  register(){
    this.route.navigate(['/signup']);
  }

  googleLogin(){
    console.log("Reaching in google login");
    this.googleplus.login({
      // 'webClientId':'390829099063-h9sr0ltkudeg9sp454tv6h87rt0gcphp.apps.googleusercontent.com',
      // 'offline': true
    }).then(res=>{
      // console.log("Id token is"+res.idToken)
      // firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      // .then(suc => {alert("logged in")})
      // .catch(ns=> alert("not successed"))
    }).catch(err => console.log("error is "+ err));
  }

  some(){
    console.log("reaching in g log");
  }

}
