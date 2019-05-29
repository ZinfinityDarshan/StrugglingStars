import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.page.html',
  styleUrls: ['./addpost.page.scss'],
})
export class AddpostPage implements OnInit {

  constructor(public route: ActivatedRoute) {
  	console.log(this.route.snapshot.paramMap.get('img'));
 }

  ngOnInit() {
  }

}
