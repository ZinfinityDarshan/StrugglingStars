import { Component, OnInit, OnChanges, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AddPostRequest} from './../../entity/add-post-request'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIConstants } from "./../../constants/apiconstants";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.page.html',
  styleUrls: ['./addpost.page.scss'],
})
export class AddpostPage implements OnInit, OnChanges, AfterViewChecked{

  imageResponse: any;
  imgurl:any;
  url:any;  
  img:any = [];
  addPostForm: FormGroup;
  some: any;
  req : AddPostRequest = new AddPostRequest();
  constructor(public route: ActivatedRoute, private debservice: FirebaseService, private afstorage: AngularFireStorage, 
    private fb: FormBuilder, private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {
    this.addPostForm = this.fb.group({
      title:['',Validators.required],
      dscp:['', ],
      location:['', ],
      tags:['',Validators.required]
    })
 }

  ngOnInit() {

  }

  getimage(){
    this.afstorage.ref("profile/img_undefined_1559225955981.jpg").getDownloadURL().subscribe(url1 => {
      this.url = url1;
      console.log(this.url)
      });
  }

  ngOnChanges(){
    // let img = JSON.parse(localStorage.getItem("img"));
    // console.log(img);
  }

  async ngAfterViewChecked(){
    this.img = JSON.parse(localStorage.getItem("img"));
    // this.img.forEach(element => {
    //   console.log('*******************************************'+element);
    // });
    
  }
  addPost(form: any){

    
    this.req.title = form.title;
    this.req.dscp = form.dscp;
    
    this.req.tags = [form.tags]
    
    this.req.user_Id = localStorage.getItem('userId');
    this.req.type = "img";
    this.req.img = JSON.parse(localStorage.getItem("img"));

    // console.log(this.req);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token'),
        'Access-Control-Allow-Origin':'*' 
      })
    };
    console.log(localStorage.getItem('token'));
    //let addposturl = APIConstants.specbackapi+APIConstants.postrequests+'/addOrUpdatePost';
    
    this.http.post('https://acc009specback.herokuapp.com/secure/post/addOrUpdatePost',this.req,httpOptions).subscribe(
      data =>{
      
      console.log(data);
      this.some = data;
      this.addPostForm.reset();
      
       let s =  this._snackBar.open("Post is Successfull", "close", {
          duration: 10,
        });
        s.onAction().subscribe(() => s.dismiss());
        this.router.navigate(['tabs/home']);
      },
      
      error =>{
        console.log(error);
      }
      )

  }



}
