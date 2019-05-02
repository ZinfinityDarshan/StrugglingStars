import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  showimage = true;
  showvideo = false;
  showdocument = false;

  constructor() { }

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

}
