import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from 'src/app/entity/profile';
import { AddPostRequest } from 'src/app/entity/add-post-request';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.page.html',
  styleUrls: ['./show-profile.page.scss'],
})
export class ShowProfilePage implements OnInit {

  showimage = true;
  showvideo = false;
  showdocument = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token'),
      'Access-Control-Allow-Origin':'*' 
    })};
  profile: Profile;
  pagebool: boolean = false;
  userId: string;
  posts: AddPostRequest[] = [];
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe( params => {console.log('parameter in show profile'+JSON.stringify(params.id))
    this.userId = params.id;
    this.pagebool = true;
    http.get('https://acc009specback.herokuapp.com/secure/profile'+'/getProfile/'+this.userId, this.httpOptions).subscribe(
      (data: Profile) => {
        console.log(JSON.stringify(data));
        this.getTrendingPosts();
        this.profile = data;
        this.pagebool = false;
      });
    });  
   }

  ngOnInit() {
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
  getTrendingPosts(){
    this.http.get('https://acc009specback.herokuapp.com/'+'secure/streaming/'+'getTrends',this.httpOptions).subscribe((data: AddPostRequest) =>{
      console.log("postdata"+data);
      this.posts.push(data);
    });
  }

}
