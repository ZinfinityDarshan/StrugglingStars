import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddPostRequest } from 'src/app/entity/add-post-request';
import { PostComment } from 'src/app/entity/post-comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.page.html',
  styleUrls: ['./show-post.page.scss'],
})
export class ShowPostPage implements OnInit {

  apiurl: string = "https://acc009specback.herokuapp.com/";
  posturl: string = "secure/post/";
  addcomment: string = "postCommentForPost";


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token'),
      'Access-Control-Allow-Origin':'*' 
    })};

  pagebool: boolean = false;
  postId: string;
  post: AddPostRequest;
  body;

  comment: PostComment = new PostComment();

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder) {
    this.route.params.subscribe( params => {console.log('parameter in show post'+JSON.stringify(params.id))
    this.postId = params.id;
    this.body = {
      "requester": localStorage.getItem('userId'),
      "postId": this.postId
    };
    this.pagebool = true;
    http.post('https://acc009specback.herokuapp.com/secure/post/getSinglePost', this.body,this.httpOptions).subscribe(
      (data: AddPostRequest) => {
        this.post = data;
        this.pagebool = false;
        console.log(this.post);
      });
    });  

  }

  ngOnInit() {
  }

  addComment(comment: string, userId: string, postId:string){
    this.comment.comment = comment;
    this.comment.postId = postId;
    this.comment.requester = userId;
    let req ={
      "requester":userId,
      "comment":comment,
      "postId":postId
    }
    console.log(req);
    this.http.post(this.apiurl+this.posturl+this.addcomment, req, this.httpOptions)
    .subscribe(
      res => {
       console.log(res); 
    },
      error =>{
        console.log(error);
      });
  }
}
