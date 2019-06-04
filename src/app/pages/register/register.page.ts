import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  loginFrom : FormGroup;
  username:any;
  password:any;
  data:any;
  constructor(private storage: NativeStorage,private formBuilder: FormBuilder ,public authService: AuthService, public route: Router, public googleplus: GooglePlus) { 
    this.loginFrom = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit() {
  }


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

            login(form) {
              this.authService.login(form.username, form.password).subscribe(
                data => {
                  this.storage.getItem('token')
                  .then(
                    data => console.log(data),
                    error => console.error(error)
                  );
                },
                error => {
                  console.log(error);
                   alert(error.error.message);
                },
                () => {
                  this.route.navigate(['/tabs']);
                }
                );
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
              console.log("reaching in log");
            }


          }
