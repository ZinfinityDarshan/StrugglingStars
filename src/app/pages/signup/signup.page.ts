import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	private regiFrom : FormGroup;
	username:any;
	password:any;
	emial:any;
	mobno:any;
	data:any;

	constructor(private authService: AuthService,
		private navCtrl: NavController,private formBuilder: FormBuilder ) {
		this.regiFrom = this.formBuilder.group({
			username:['', Validators.required],
			password:['', Validators.required],
			email:['',Validators.required],
			mobno:['',Validators.required]
		})

	}

	ngOnInit() {
	}

	register(form: NgForm) {
		this.authService.register(this.regiFrom.controls['username'].value,this.regiFrom.controls['password'].value,this.regiFrom.controls['email'].value,this.regiFrom.controls['mobno'].value).subscribe(
			data => {		
				this.navCtrl.navigateRoot('/register');
			},
			error => {
				console.log(error);
			},
			() => {

			}
			);
	}

}
