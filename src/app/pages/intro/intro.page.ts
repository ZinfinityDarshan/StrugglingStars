import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  login(){
    localStorage.setItem('intro','true')
    this.router.navigate(['register']);
  }

}
