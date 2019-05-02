import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  login(){
    this.route.navigate(['/tabs']);
  }

  register(){
    this.route.navigate(['/signup']);
  }

}
