import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
// import * as interval from 'rxjs/add/observable/interval';
import { interval } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './entity/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  loginObservable: Observable<any>;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient,
    private router: Router
  )
   
  {
    this.initializeApp();
  //  localStorage.setItem('intro', 'false')
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    interval(3000000).subscribe(
      value =>{
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('token'),
            'Access-Control-Allow-Origin':'*' 
          })
        };
        if(localStorage.getItem('token') != null){
          this.http.get('https://acc009specback.herokuapp.com/users/refresh', httpOptions).subscribe(
            (data: User) => {
              console.log('refresh'+JSON.stringify(data));
              if(data.status == true){
                localStorage.setItem('token', data.token);
              }else{
                this.router.navigate(['register']);
              }
            })
        }else{
          this.router.navigate(['register']);
        }
      },
      (error: any)=>{
        this.router.navigate(['register']);
        console.log(error);
      },
      () =>{
        this.router.navigate(['register']);
      }
    )
  }


  
}
