import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { AddPostRequest } from 'src/app/entity/add-post-request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostComment } from 'src/app/entity/post-comment';

@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage implements OnInit, OnChanges, AfterViewInit{

  apiurl: string = "https://acc009specback.herokuapp.com/";
  posturl: string = "secure/post/";
  gethomeposts: string = "getHomePagePosts";
  addcomment: string = "postCommentForPost";
  posts: AddPostRequest =  new AddPostRequest();
  comment: PostComment = new PostComment();
  spinbool: boolean = true;
  likebool: boolean = false;
  commentbool: boolean = false;
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token'),
      'Access-Control-Allow-Origin':'*' 
    })
  };
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.getHomePosts();
  }

  doRefresh(event){
    this.getHomePosts();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
 private getHomePosts(){
    this.http.get(this.apiurl+this.posturl+this.gethomeposts, this.httpOptions)
    .subscribe((res: AddPostRequest) =>{
      this.posts = res;
      console.log(this.posts);
      this.spinbool =false;
    })
    // setTimeout(() => {
    //   console.log('Async operation has ended');
    //   event.target.complete();
    // }, 1000);
  }

  likePost(){


  }

  addComment(comment: string, userId: string, postId:string){
    this.commentbool = true;
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
       this.commentbool = false;
    },
      error =>{
        console.log(error);
      });
  }

  ngOnChanges(){
    this.getHomePosts();
  }
  ngAfterViewInit(){
    this.getHomePosts();
  }

}
