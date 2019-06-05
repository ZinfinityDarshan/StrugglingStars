import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/entity/profile';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  showimage = true;
  showvideo = false;
  showdocument = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token'),
      'Access-Control-Allow-Origin':'*' 
    })
  };
  profile: Profile;

  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getProfile(localStorage.getItem('userId'));
  }

  enable(name: any) {
    if (name === 'image') {
      this.showimage = true;
      this.showdocument = false;
      this.showvideo = false;
    } else if (name === 'video') {
      this.showimage = false;
      this.showdocument = false;
      this.showvideo = true;
    } else if (name === 'document') {
      this.showimage = false;
      this.showdocument = true;
      this.showvideo = false;
    }
  }

  getProfile(userId: string){
    this.http.get('https://acc009specback.herokuapp.com/secure/profile/getProfile/'+userId, this.httpOptions).subscribe((data: Profile) =>{
      console.log(data);
      this.profile = data;
    });
  }

}
