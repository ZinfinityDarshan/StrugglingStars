import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Shortprofile } from 'src/app/entity/shortprofile';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'src/app/entity/subject';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AddPostRequest } from 'src/app/entity/add-post-request';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
})
export class TrendingPage implements OnInit {

  autoForm: FormGroup;
  spinbool: boolean = false;
  // profilectrl = new FormControl();
  profiles: Shortprofile[];
  subList: Subject[];
  pageloadbool: boolean = false;
  filteredProfiles: Observable<Shortprofile[]>;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token'),
      'Access-Control-Allow-Origin':'*' 
    })
  };
  posts: AddPostRequest[] = [];
  newposts;
  colors=["warn","primary","accent"];


  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { 
        this.autoForm = this.fb.group({
      'profilectrl': [null]
    })
  }

  ngOnInit() {

    this.getAllSubjects();
    this.getTrendingPosts();
    this.autoForm.get('profilectrl').valueChanges
      .pipe(        
        debounceTime(300),
        tap(() => this.spinbool = true),
        switchMap(value => 
          this.search(value))
      ).subscribe((profiles: Shortprofile[]) => {
        this.spinbool = false;
        console.log('profile' + profiles)
        this.profiles = profiles
      
      })
  }

  

  search(value: string) {
    console.log('calling web service');
    return this.http.get('https://acc009specback.herokuapp.com/'+'secure/profile/'+'searchProfiles/'+value, this.httpOptions);
  }

  getFullProfile(value: string){

    console.log('value'+value);
    this.router.navigate(['show-profile', value])
  }

  getAllSubjects(){
    this.pageloadbool = true;
    this.http.get('https://acc009specback.herokuapp.com/'+'secure/profile/'+'getAllTags', this.httpOptions).subscribe(
      (res: Subject[]) => {
        this.pageloadbool=false
        console.log(res);
        this.subList = res;
      }
    );
  }

  getRandomColor(i: number){
    return this.colors[i];
  }

  getTrendingPosts(){
    this.http.get('https://acc009specback.herokuapp.com/'+'secure/streaming/'+'getTrends',this.httpOptions).subscribe((data: AddPostRequest) =>{
      this.posts.push(data);
      this.newposts = this.posts[0];
      console.log(this.newposts);
    });
  }

  navigatetopost(id) {
    this.router.navigate(['/show-post', id]);
  }
}
